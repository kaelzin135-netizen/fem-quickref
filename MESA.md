# Mesa compartilhada

Por padrão o site roda em **modo local**: as fichas ficam no `localStorage` do navegador
de quem abriu. Serve para uma pessoa cuidar de várias fichas, mas **não compartilha nada**
entre computadores — cada jogador veria a própria cópia, e o mestre não veria nada.

Para as seis pessoas verem as mesmas fichas é preciso um lugar que grave fora do
navegador. Este documento liga isso usando o **Supabase** (plano gratuito), sem nenhuma
tela de login: o quadro da mesa lista as fichas e **o PIN de cada ficha é a tranca**.

---

## Por que não dá para fazer "no arquivo"

O site é estático: o GitHub Pages (e o Render Static Site) **servem** arquivos, não
**gravam** neles. Não há processo do outro lado para receber um `POST` e reescrever um
`.json`. O C.R.I.S. também não guarda em arquivo — guarda num banco.

---

## O desenho, e por que ele é assim

A tentação é criar uma tabela aberta para a chave pública e conferir o PIN no navegador.
**Isso não protege nada**: a chave `anon` vai no código da página, e qualquer pessoa pode
chamar a API direto e ler ou sobrescrever todas as fichas, PIN ou não.

Então a tabela fica **selada** — RLS ligado e *nenhuma* policy, o que faz a API REST
recusar qualquer acesso direto a ela. O que a página pode chamar são três funções
`security definer`, e são elas que exigem o PIN. O PIN nunca sai do servidor em texto:
fica como hash `bcrypt` do `pgcrypto`.

| A página pode | O que acontece |
| --- | --- |
| `mesa_listar()` | devolve só o que o cartão mostra: nome, jogador, nível, se tem PIN |
| `mesa_abrir(id, pin)` | devolve a ficha **só** com o PIN certo |
| `mesa_gravar(id, pin, dados)` | grava **só** com o PIN certo |
| `mesa_definir_pin(id, atual, novo)` | troca o PIN, exigindo o atual |
| `mesa_e_mestre(pin)` | diz se aquele PIN é o do mestre |
| `mesa_definir_pin_mestre(atual, novo)` | define o PIN que abre todas |
| ler/escrever a tabela direto | **recusado** |

### Força bruta

Um PIN de 4 dígitos tem 10 mil combinações — chutável em segundos, se nada impedir. Por
isso o SQL abaixo já traz a trava: **dez erros na mesma ficha em dez minutos** e ela
recusa tentativas até o tempo passar; acertar limpa a contagem. Com ela, 4 dígitos
seguram bem: dez tentativas a cada dez minutos dá mais de uma semana para varrer o
espaço todo, e isso em cima de uma única ficha.

O que continua valendo: quem souber o PIN de uma ficha lê e escreve naquela ficha — é
exatamente para isso que o PIN existe.

---

## 1. Criar o projeto

Em <https://supabase.com>, crie um projeto (plano gratuito serve). Anote de
*Project Settings → API*:

- a **Project URL** (`https://xxxxxxxx.supabase.co`)
- a chave **anon / publishable** — essa é pública por design, pode ir no código

## 2. Rodar o SQL

Em *SQL Editor → New query*, cole tudo e rode:

```sql
create extension if not exists pgcrypto;

create table if not exists fichas (
  id            text primary key,
  titulo        text not null,
  jogador       text,
  resumo        jsonb not null default '{}'::jsonb,
  capa          text,                       -- miniatura ~160px, para o cartão
  dados         jsonb not null default '{}'::jsonb,
  pin_hash      text,
  atualizado_em timestamptz not null default now()
);

-- O PIN do mestre, que abre qualquer ficha. Uma linha só.
create table if not exists mesa_config (
  chave text primary key,
  valor text
);

-- Tentativas de PIN, para travar quem fica chutando.
create table if not exists tentativas (
  id     text not null,
  quando timestamptz not null default now()
);
create index if not exists tentativas_id_quando on tentativas (id, quando desc);

-- RLS ligado e NENHUMA policy nas três: a API REST não encosta nelas.
alter table fichas      enable row level security;
alter table mesa_config enable row level security;
alter table tentativas  enable row level security;

-- ------------------------------------------------------------------ mestre --
-- Confere o PIN do mestre. A página usa para acender o modo mestre; as outras
-- funções usam por dentro, para deixar o mestre abrir qualquer ficha.
create or replace function mesa_e_mestre(p_pin text)
returns boolean
language plpgsql security definer set search_path = public, extensions as $$
declare m text;
begin
  if p_pin is null or p_pin = '' then return false; end if;
  select valor into m from mesa_config where chave = 'pin_mestre';
  if m is null then return false; end if;
  return crypt(p_pin, m) = m;
end $$;

-- Define (ou troca) o PIN do mestre. Exige o atual, se já houver um.
create or replace function mesa_definir_pin_mestre(p_atual text, p_novo text)
returns boolean
language plpgsql security definer set search_path = public, extensions as $$
declare m text;
begin
  select valor into m from mesa_config where chave = 'pin_mestre';
  if m is not null and (p_atual is null or crypt(p_atual, m) <> m) then
    raise exception 'PIN de mestre atual incorreto';
  end if;
  insert into mesa_config (chave, valor)
    values ('pin_mestre',
            case when p_novo is null or p_novo = '' then null
                 else crypt(p_novo, gen_salt('bf')) end)
    on conflict (chave) do update set valor = excluded.valor;
  return true;
end $$;

-- ------------------------------------------------------------------ listar --
-- O que o quadro da mesa mostra. Nunca devolve "dados" nem o hash do PIN.
create or replace function mesa_listar()
returns table (
  id text, titulo text, jogador text, resumo jsonb, capa text,
  tem_pin boolean, atualizado_em timestamptz
)
language sql security definer set search_path = public as $$
  select id, titulo, jogador, resumo, capa, pin_hash is not null, atualizado_em
    from fichas order by titulo;
$$;

-- ------------------------------------------------------- conferência do PIN --
-- Um lugar só para a regra: o PIN da ficha serve, o do mestre também, e dez
-- erros em dez minutos fecham a porta daquela ficha.
create or replace function _mesa_confere(p_id text, p_pin text, p_hash text)
returns void
language plpgsql security definer set search_path = public, extensions as $$
begin
  if p_hash is null then return; end if;           -- ficha sem PIN: entra
  if (select count(*) from tentativas
        where id = p_id and quando > now() - interval '10 minutes') >= 10 then
    raise exception 'muitas tentativas; espere 10 minutos';
  end if;
  if p_pin is not null and crypt(p_pin, p_hash) = p_hash then
    delete from tentativas where id = p_id;        -- acertou: limpa a conta
    return;
  end if;
  if mesa_e_mestre(p_pin) then
    delete from tentativas where id = p_id;
    return;
  end if;
  insert into tentativas (id) values (p_id);
  raise exception 'PIN incorreto';
end $$;

-- ------------------------------------------------------------------- abrir --
create or replace function mesa_abrir(p_id text, p_pin text default null)
returns jsonb
language plpgsql security definer set search_path = public, extensions as $$
declare h text; d jsonb;
begin
  select pin_hash, dados into h, d from fichas where id = p_id;
  if not found then raise exception 'ficha não encontrada'; end if;
  perform _mesa_confere(p_id, p_pin, h);
  return d;
end $$;

-- ------------------------------------------------------------------ gravar --
-- O mestre lê, não escreve: gravar exige o PIN da própria ficha.
create or replace function mesa_gravar(
  p_id text, p_pin text, p_dados jsonb,
  p_titulo text default null, p_jogador text default null,
  p_resumo jsonb default null, p_capa text default null)
returns boolean
language plpgsql security definer set search_path = public, extensions as $$
declare h text;
begin
  select pin_hash into h from fichas where id = p_id;
  if not found then
    insert into fichas (id, titulo, jogador, resumo, capa, dados, pin_hash)
      values (p_id, coalesce(p_titulo, 'Sem nome'), p_jogador,
              coalesce(p_resumo, '{}'::jsonb), p_capa, p_dados,
              case when p_pin is null or p_pin = '' then null
                   else crypt(p_pin, gen_salt('bf')) end);
    return true;
  end if;
  if h is not null and (p_pin is null or crypt(p_pin, h) <> h) then
    raise exception 'PIN incorreto';
  end if;
  update fichas set
      dados = p_dados,
      titulo = coalesce(p_titulo, titulo),
      jogador = coalesce(p_jogador, jogador),
      resumo = coalesce(p_resumo, resumo),
      capa = coalesce(p_capa, capa),
      atualizado_em = now()
    where id = p_id;
  return true;
end $$;

-- -------------------------------------------------------------- definir PIN --
create or replace function mesa_definir_pin(p_id text, p_atual text, p_novo text)
returns boolean
language plpgsql security definer set search_path = public, extensions as $$
declare h text;
begin
  select pin_hash into h from fichas where id = p_id;
  if not found then raise exception 'ficha não encontrada'; end if;
  perform _mesa_confere(p_id, p_atual, h);
  update fichas set pin_hash =
      case when p_novo is null or p_novo = '' then null
           else crypt(p_novo, gen_salt('bf')) end
    where id = p_id;
  return true;
end $$;

-- Só as funções ficam ao alcance da chave pública — e _mesa_confere não,
-- que é de uso interno.
revoke all on function _mesa_confere(text, text, text) from anon, authenticated;

grant execute on function mesa_listar()                      to anon, authenticated;
grant execute on function mesa_abrir(text, text)             to anon, authenticated;
grant execute on function mesa_definir_pin(text, text, text) to anon, authenticated;
grant execute on function mesa_e_mestre(text)                to anon, authenticated;
grant execute on function mesa_definir_pin_mestre(text, text) to anon, authenticated;
grant execute on function mesa_gravar(text, text, jsonb, text, text, jsonb, text)
  to anon, authenticated;
```

### O PIN do mestre

Rode uma vez, com o PIN que você quiser (a primeira vez não tem "atual"):

```sql
select mesa_definir_pin_mestre(null, 'o-pin-do-kian');
```

Com ele o Kian abre qualquer ficha pelo botão **Entrar como mestre**, sem precisar dos
seis PINs. Ele **lê** — `mesa_gravar` continua exigindo o PIN da própria ficha, então o
mestre não escreve por cima de ninguém.

## 3. Ligar no site

Em [`js/mesa.js`](js/mesa.js), preencha os dois valores do topo:

```js
var MESA_CONFIG = {
    supabaseUrl: "https://xxxxxxxx.supabase.co",
    supabaseChave: "a-chave-anon",
    maxJogadores: 6
};
```

Dê commit e `bash publicar-github.sh`. O aviso no topo da Mesa muda de **Modo local**
para **Modo compartilhado**, e as seis fichas passam a vir do banco.

## 4. Os PINs

Abra o quadro da Mesa e use **definir PIN** em cada ficha. É o único momento em que o PIN
viaja; daí em diante ele só é conferido. Quem não tiver o PIN de uma ficha não abre nem
grava aquela ficha — mas vê o nome dela no quadro, que é o comportamento desejado.

O mestre não precisa de ficha: para ele enxergar todas, dê a ele os seis PINs, ou deixe
uma ficha sem PIN e combine o resto na mesa.

---

## O que eu não posso fazer por você

Criar a conta do Supabase e digitar os PINs dos seus jogadores. Eu escrevo o código e o
SQL; as credenciais são suas e ficam com você.
