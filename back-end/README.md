<h1 align="center">
    <img alt="Back-End" src="./.github/logo.svg" height="100px" />
    <br>Back-End Hi! Healtcare<br/>
    Node.js | JavaScript | MongoDB
</h1>

<p align="center">
  <a href="#bookmark-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#winer_glass-como-executar">Como Ultilizar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#octocat-como-contribuir">Como Contribuir</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## :bookmark: Sobre

O **Back-End** deste teste é um Bonus. Logo, esta aplicação oferece CRUD completo, podendo adicionar informações como um paciente, e seus respectivos dados: Nome, Rua/AV, CEP, Bairro, Complemento, Cidade, UF, Celular, Data Nacimento, E-mail e Senha.
  
Este projeto foi idealizado apos ganhar uma nova oportunidade para apresentação do meu teste.
  
Essa aplicação foi realizada durante 1 (uma) semana mediante a varios outros projeto conciliando tasks e cumprindo mesmo com atraso tudo que me propus fazer, enfrentando alguns desafios na qual independete do resultado sinto muito satifisfeito em ter realizado e pela oportunidade em conduzir este projeto pois para mim não é somente mais um Crud mas sim algo na qual aprendi com isso. ENGRAÇADO QUE ISSO NÃO É PROJETO EDUCACIONAL MAS SIM DEMONSTRAÇÃO DE CONHECIMENTO, o que eu aprendi não foi com o desenvolvido mas melhorar organização do meu tempo (atraves do erro), lidar com adversidades e resolvê-las o mais rapido pois isso influencia na nossa imagem com o cliente mesmo que serviço seja de qualidade perdemos lguns pontos aqui.

## :rocket: Tecnologias

-  [Node.js](https://nodejs.org/en/)
-  [Express](https://expressjs.com/)
-  [Bcrypt](https://www.npmjs.com/package/bcryptjs)
-  [Cookie-parser](https://www.npmjs.com/package/cookie-parser)
-  [Cors](https://www.npmjs.com/package/cors)
-  [mongoose](https://mongoosejs.com/)

## **:wine_glass:  COMO UTILIZAR**

### Configurações Iniciais

Primeiro, você precisa ter o <kbd>[NodeJS](https://nodejs.org/en/download/)</kbd> instalado na sua máquina. 

Se você estiver utilizando o **Linux**, você pode optar por instalar o **Node** através do gerênciador de versões <kbd>[asdf]</kbd> para facilitar o processo de mudança da versão do **Node**, quando for necessário.

Você pode optar também por utilizar o **yarn** no lugar do **npm**. Você pode instalar clicando nesse <kbd>[link][yarn]</kbd>, ou através do <kbd>[asdf]</kbd>.

Após ter o **Node** instalado, utilizando os comandos:

Instale as dependências contidas nos arquivos `package.json` que se encontram na raíz do repositório (para o gerenciamento de commits), no diretório **raiz**. Para instalar as dependências, basta abrir o terminal no diretório e digitar o comando:

```sh
$ npm install

# ou
$ yarn
```

1. Faça um clone do repositório:

```sh
  $ git clone https://github.com/santiagoidu/hiSaude.git
```

### Utilizando o Server (Na pasta raiz)

```sh

# Executando a aplicação em modo de desenvolvimento:
$ npm run dev

```

> Veja a parte de **scripts {}** do arquivo <kbd>[package.json](./package.json)</kbd> para saber quais scripts estão disponíveis.


> acesse: http://localhost:5000 pelo [link][insonia] ou [link][postman] para testar a api.

Veja os arquivos **`package.json`**

## **:octocat:  COMO CONTRIBUIR**
  
  - Verifique as **[Issues](https://github.com/santiagoidu/hiSaude/projects/1)** que estão abertas e se já não existe alguma com a sua feature;
  - Abra uma **Issue** com o nome e descrição da sua feature e assine com o seu usuário informando que irá fazê-la;
  - Faça um **[fork](https://help.github.com/pt/github/getting-started-with-github/fork-a-repo)** do repositório;
  - Entre no sua página do GitHub e faça um **clone** do seu **fork**;
  - Crie uma *branch* com o nome da sua feature: `git chechout -b feat/minhaFeature`;
  - Faça as alterações necessárias no código ou na documentação;
  - Instale as dependências do *commitlint* na raíz do projeto para a verificação dos commits: `npm install` ou `yarn`;
  - Faça o *commit* das suas alterações seguindo as [convenções de commit](https://www.conventionalcommits.org/pt-br/v1.0.0-beta.4/), adicione na descrição o id da sua Issue em parênteses e lembre de fechar a sua Issue com o id no rodapé do commit:

  ```
    <tipo>(escopo opcional): <descrição> (#x)

    [corpo do commit]

    Close #x
  ```
  Exemplo:
  ```sh
    feat: adicionado componente para tal coisa (#52)

    Foi adicionado um componente para tal coisa com o objetivo de melhorar tal coisa, deixando o projeto de tal maneira.

    Close #52
  ```
  - Faça um *push* para a sua *branch*: `git push origin feat/minhaFeature`;
  - Agora é só abrir um *pull request* no repositório que você fez o *fork* e assim que acontecer o *merge* sua Issue será fechada e suas alterações irão fazer parte do projeto;
  - Depois que o *merge* da sua pull request for feito, você pode deletar a sua *branch*.

  \* **Obrigado por contribuir!** ❤️ :facepunch: :blush:

## **:page_with_curl:  LICENÇA**

Esse repositório está licenciado pela **APACHE LICENSE**. Para mais informações detalhadas, leia o arquivo [LICENSE](./LICENSE) contido nesse repositório. 

<h2 align="center">Feito com ❤️ por <a href="http://github.com/santiagoidu">Marco Tulio Santiago</a></h2>

<!-- Website Links -->

[rocketseat_site]: https://rocketseat.com.br/

<!-- Badges -->

[github_issues_badge]: https://img.shields.io/github/issues/x0n4d0/ecoleta?color=green

[repository_license_badge]: https://img.shields.io/github/license/x0n4d0/ecoleta

[node_version_badge]: https://img.shields.io/badge/node-12.17.0-green

[npm_version_badge]: https://img.shields.io/badge/npm-6.14.4-red

[web_react_badge]: https://img.shields.io/badge/web-react-blue

[mobile_react-native_badge]: https://img.shields.io/badge/mobile-react%20native-blueviolet

[server_nodejs_badge]: https://img.shields.io/badge/server-nodejs-important

<!-- Techs -->

[node]: https://nodejs.org/en/

[vscode]: https://code.visualstudio.com/

[vscode_sqlite_extension]: https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite

[markdown_emoji]: https://gist.github.com/rxaviers/7360908

[express]: https://expressjs.com/

[cors]: https://expressjs.com/en/resources/middleware/cors.html

[feather_icons]: https://feathericons.com/

[insomnia]: https://insomnia.rest/

[postman]: https://www.postman.com/downloads/

[font_roboto]: https://fonts.google.com/specimen/Roboto

[font_ubuntu]: https://fonts.google.com/specimen/Ubuntu

[font_awesome]: https://fontawesome.com/

[multer]: https://github.com/expressjs/multer

[celebrate]: https://github.com/arb/celebrate

[joi]: https://github.com/hapijs/joi

[asdf]: https://github.com/asdf-vm/asdf

[yarn]: https://classic.yarnpkg.com/en/docs/install/#debian-stable
