#!/usr/bin/env bash
# Publica a Referência Rápida no GitHub Pages.
#
# Antes de rodar, faça o login uma única vez (abre o navegador):
#     gh auth login
#
# Depois é só:
#     bash publicar-github.sh
#
# Rodando de novo depois de mexer no site, ele apenas envia as mudanças.

set -euo pipefail

REPO="${1:-fem-quickref}"

cd "$(dirname "$0")"

if ! command -v gh >/dev/null 2>&1; then
    echo "ERRO: o GitHub CLI (gh) não está instalado."
    echo "Baixe em https://cli.github.com/ e rode 'gh auth login'."
    exit 1
fi

if ! gh auth status >/dev/null 2>&1; then
    echo "Você ainda não fez login no GitHub."
    echo "Rode primeiro:  gh auth login"
    exit 1
fi

USUARIO="$(gh api user --jq .login)"
echo "Conta: $USUARIO"

# Garante que tudo está commitado
if [ -n "$(git status --porcelain)" ]; then
    echo "Commitando as mudanças pendentes..."
    git add -A
    git commit -q -m "Atualiza a referência rápida"
fi

if git remote get-url origin >/dev/null 2>&1; then
    echo "Repositório remoto já existe — enviando as mudanças..."
    git push -q origin main
else
    echo "Criando o repositório público $USUARIO/$REPO..."
    gh repo create "$REPO" --public --source=. --remote=origin --push \
        --description "Referência rápida de combate, habilidades e evolução do RPG Feiticeiros & Maldições 2.5.2"
fi

# Liga o GitHub Pages na branch main (ignora o erro se já estiver ligado)
echo "Ligando o GitHub Pages..."
gh api -X POST "repos/$USUARIO/$REPO/pages" \
    -f "source[branch]=main" -f "source[path]=/" >/dev/null 2>&1 \
    || echo "(Pages já estava ligado)"

echo
echo "Pronto! O site fica em:"
echo
echo "    https://$USUARIO.github.io/$REPO/"
echo
echo "A primeira publicação leva de 1 a 2 minutos para ficar no ar."
