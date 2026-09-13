# Mesa — seis jogadores e um mestre

A aba **Ficha** agora abre numa tela de mesa: seis vagas de jogador e uma de mestre.
Cada ficha pode ter um PIN próprio, e o mestre enxerga todas.

Há **dois modos**, e a diferença entre eles é grande.

---

## Modo local (o que está ligado hoje)

Funciona sem configurar nada. As fichas ficam no `localStorage` do navegador de quem abriu.

Serve bem para **uma pessoa cuidar de várias fichas** — um mestre com os PJs da mesa, ou
alguém testando builds. Mas seja claro consigo mesmo sobre o que ele **não** é:

- **Não compartilha nada.** Seis pessoas em seis computadores terão seis mesas separadas
  que nunca se falam. O mestre não vê o que o jogador digitou na máquina dele.
- **O PIN não é segurança.** Ele impede abrir a ficha pela interface, e só. Quem abrir o
  console do navegador lê tudo, PIN ou não. O PIN é guardado como hash PBKDF2 com sal
  (150 mil iterações), então ele não aparece em texto puro — mas o *conteúdo da ficha* está
  ali do lado, em claro.

Se a sua mesa é presencial e a ficha roda num computador só, isso basta.

---

## Modo compartilhado (Supabase)

Aqui a senha vira senha de verdade: quem confere é o servidor, e quem decide o que cada
pessoa pode ler é o banco — não o JavaScript desta página. Um jogador curioso abrindo o
console **não** consegue ler a ficha dos outros, porque o servidor nunca as envia para ele.

O plano gratuito do Supabase dá conta de uma mesa de RPG com folga.

### 1. Criar o projeto

Crie a conta e o projeto em <https://supabase.com>. **Isso é com você** — eu não crio contas
nem digito senhas em sites no seu lugar.

Anote, em *Project Settings → API*:

- a **URL** do projeto
- a chave **anon / publishable** (essa é pública por design, pode ficar no código)

Nunca coloque a chave `service_role` aqui. Ela ignora todas as regras abaixo.

### 2. Criar a tabela e as regras

No *SQL Editor* do Supabase, rode:

```sql
-- quem são os mestres
create table mestres (
  usuario uuid primary key references auth.users(id) on delete cascade
);

-- as fichas
create table fichas (
  id            text primary key,
  dono          uuid not null default auth.uid() references auth.users(id) on delete cascade,
  dados         jsonb not null,
  atualizado_em timestamptz not null default now()
);

alter table fichas  enable row level security;
alter table mestres enable row level security;

-- LEITURA: cada um lê a própria; o mestre lê todas
create policy "jogador lê a própria" on fichas
  for select using (dono = auth.uid());

create policy "mestre lê todas" on fichas
  for select using (exists (select 1 from mestres where usuario = auth.uid()));

-- ESCRITA: cada um escreve só a própria, e ninguém escreve na dos outros
create policy "jogador cria a própria" on fichas
  for insert with check (dono = auth.uid());

create policy "jogador atualiza a própria" on fichas
  for update using (dono = auth.uid()) with check (dono = auth.uid());

create policy "jogador apaga a própria" on fichas
  for delete using (dono = auth.uid());

-- a lista de mestres é legível por quem está logado, e só o dono do banco edita
create policy "todos leem a lista de mestres" on mestres
  for select using (auth.uid() is not null);
```

Repare que **não existe** policy de `update` ou `delete` para o mestre sobre as fichas dos
outros: ele lê, não altera. Se quiser que o mestre também edite, acrescente uma policy de
`update` espelhando a de leitura — mas decida isso de propósito.

### 3. Marcar quem é o mestre

Depois que a pessoa criar a conta, pegue o `id` dela em *Authentication → Users* e rode:

```sql
insert into mestres (usuario) values ('cole-o-uuid-aqui');
```

### 4. Ligar no site

Em [`js/mesa.js`](js/mesa.js), preencha:

```js
var MESA_CONFIG = {
    supabaseUrl: "https://xxxxxxxx.supabase.co",
    supabaseChave: "a-chave-anon",
    maxJogadores: 6
};
```

Pronto. A tela de mesa passa a pedir e-mail e senha, e o aviso no topo dela muda de
"Modo local" para "Modo compartilhado".

### O limite de seis

O limite de 6 jogadores é aplicado pela interface. Se quiser que o **banco** também recuse
o sétimo, acrescente:

```sql
create or replace function limite_de_seis() returns trigger as $$
begin
  if (select count(*) from fichas) >= 7 then
    raise exception 'a mesa já está cheia';
  end if;
  return new;
end $$ language plpgsql;

create trigger fichas_limite before insert on fichas
  for each row execute function limite_de_seis();
```

(7 = seis jogadores mais o mestre.)

---

## O que eu não posso fazer por você

Criar a conta do Supabase, criar as contas dos seus jogadores e digitar as senhas deles.
Eu escrevo o código e o SQL; as credenciais são suas e ficam com você.
