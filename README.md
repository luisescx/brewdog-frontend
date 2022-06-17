# BrewDog Beers

Projeto que usa a API pública <a href="https://punkapi.com/documentation/v2">Punkapi</a> para fazer a listagem das cervejas da cervejaria BrewDog e uma <a href="https://github.com/luisescx/brewdog-back">API</a> para fazer a autenticação do usuário.

![](/public/img/preview.png)

### Tecnologias utilizadas

- NextJS
- Typescript
- Styled-components
- Storybook
- Axios
- Next-auth

## Como executar

A rota das listagens das cervejas é uma rota autenticada e o projeto depende que api <a href="https://github.com/luisescx/brewdog-back">Brewdog-back</a> esteja sendo executada para fazer a autenticação do usuário, sem a API será possível acessar apenas as rotas de `sign-in` e `sign-up`.

- Clonar o projeto e na pasta raiz executar o comando `yarn` para instalar as dependências.
- Rodar o projeto com o comando `yarn dev`.
- Para rodar o storybook executar o comando `yarn storybook` na pasta raiz em outra aba do terminal.
