# Template de Home de Loja - Projeto React

Este projeto é um template de página inicial (Home) para uma loja online, desenvolvido com React e utilizando o Vite para o ambiente de desenvolvimento rápido.

## Tecnologias Utilizadas

- **React**: Biblioteca para criação da interface do usuário.
- **Vite**: Ferramenta de build e desenvolvimento rápida para projetos React.
- **Jest**: Framework de testes para garantir a qualidade do código.
- **Formik**: Biblioteca para gerenciar formulários em React, usada para validar o schema do formulário.
- **Yup**: Usada junto ao Formik para validação do esquema do formulário.

## Componentes do Template

O template inclui os seguintes componentes principais:

- **Header**: Barra de pesquisa no topo da página, link para meu perfil, minicart e logo da loja.
- **Banner Principal**: Imagem ou carrossel de destaque para promoções ou produtos em foco.
- **Prateleira de Produtos**: Seção que exibe os produtos da loja de forma organizada.
- **Newsletter**: Formulário para que os usuários se inscrevam na newsletter da loja.
- **Footer**: Rodapé com informações de contato.

## Pré-requisitos

Antes de começar, você precisará ter o seguinte instalado em sua máquina:

- [Node.js](https://nodejs.org/) (v16 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/) (gerenciador de pacotes)

## Instalação

1. Clone este repositório para sua máquina local:

   ```bash
   git clone https://github.com/leleysr/frontend-developer
   ```

2. Navegue até o diretório do projeto e instale as dependências:

   Se você usa `npm`:

   ```bash
   cd seu-repositorio
   npm install
   ```

   Ou, se você usa `yarn`:

   ```bash
   cd seu-repositorio
   yarn install
   ```

## Comandos

### Rodar o ambiente de desenvolvimento

Para iniciar o servidor de desenvolvimento com Vite, utilize o seguinte comando:

```bash
npm run dev
```

Ou, com `yarn`:

```bash
yarn dev
```

Isso iniciará o servidor de desenvolvimento, e você poderá acessar a aplicação em `http://localhost:5173`.

### Rodar os testes

Este projeto utiliza o Jest para testes. Para rodar todos os testes automatizados, utilize o comando:

```bash
npm run test
```

Ou com `yarn`:

```bash
yarn test
```

### Limpar o cache dos testes

Caso você precise limpar o cache do Jest, execute o comando:

```bash
npm run test-clear
```

Ou com `yarn`:

```bash
yarn test-clear
```

Isso pode ser útil se os testes não estiverem funcionando corretamente por conta de cache antigo.

## Dúvidas

Em caso de dúvidas, não hesite em enviar um e-mail para [wanderleysr00@gmail.com](mailto:wanderleysr00@gmail.com).

## Screenshot da aplicação

### Desktop

![Aplicação Desktop](./docs/aplicacao-desktop.png)

### Mobile

![Aplicação Mobile](./docs/aplicacao-mobile.png)
