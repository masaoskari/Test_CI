# Moduuler

### A React Three TypeScript Project

&nbsp;

## Features

- React
- Three.js
- TypeScript
- Webpack
- ESLint
- Sass
- CSS Modules
- Visual Studio Code debugging

## Getting started

1. Download and install [Node.js](https://nodejs.org/en) and [npm](https://www.npmjs.com/) (npm should be included in Node.js installation).

2. Clone or download this repository.

3. Install dependencies using the following command in the project folder.

```
npm install
```

4. To run the app locally, use the following command.

```
npm start
```

Then open http://localhost:3000 in your browser.

5. To build a development version of the app, run the following command. The resulting files will be placed in "dist" folder.

```
npm run build
```

6. To build a production version of the app, run the following command. The resulting files will be placed in "dist" folder.

```
npm run publish
```

## Development

### VS Code

VS Code settings are included in the repository to provide a consistent development environment. The settings include ESLint and Prettier for code formatting and linting.

In order for the formatting and linting to work, you need to install the following VS Code extensions:
  - ESLint: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
  - Prettier ESLint: https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint

If everything is set up correctly you should get Prettier auto-formatting when you edit and save a file.

### Cypress

In order to run Cypress you will need to verify that you have the necessary system dependencies installed. You can find the instructions here:

https://docs.cypress.io/guides/getting-started/installing-cypress