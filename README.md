# :computer: Projeto

Um app de carteira virtual onde terá a possibilidade de cadastrar novos cartões e listar cartão já cadastrados.

---

## :dart: Objetivo do projeto

O projeto foi criado para apresentar um pouco do meu conhecimento sobre desenvolvimento de apps com React Native.

## :rocket: Tecnologias utilizadas

- [React Native](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)
- [Styled Components](https://styled-components.com/)
- [Hooks](https://pt-br.reactjs.org/docs/hooks-intro.html)
- [TypeScript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/docs/tutorial-react-native)

## :arrow_forward: Rodar o projeto

- Clone o repositório em sua máquina:
  ```sh
  $ git clone git@github.com:kakussaba/wallet.git
  ```
- Instale as dependências do package.json:
  ```sh
  $ yarn install
  ```
- Rode na raiz do projeto:
  ```sh
  $ cd ios && pod install
  ```
- Substitua o valor da const API_SERVER no arquivo src/api/index.ts pelo seu IP.

- Para iniciar o servidor:
  ```sh
  $ npm install -g json-server
  $ yarn api
  ```
- Para build no iOS:
  ```sh
  $ yarn run ios
  ```
- Para build no Android:
  ```sh
  $ yarn run android
  ```
- Para rodar os teste:
  ```sh
  $ yarn finalTest
  ```

---

<h5 align='center'>Feito por Kananda Kussaba</h5>
