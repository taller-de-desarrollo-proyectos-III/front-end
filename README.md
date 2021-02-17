# Front end

## Production:

- Build: [![Build Status](https://travis-ci.com/taller-de-desarrollo-proyectos-III/front-end.svg?branch=main)](https://travis-ci.com/taller-de-desarrollo-proyectos-III/front-end)
- Website: https://nahual-portal-voluntaries.herokuapp.com

## Documentation

This project has Node.js as a server-side and React as front-end framework to create the UI.

## Deployment

- Using [Heroku buildpack](https://github.com/mars/create-react-app-buildpack)

## Available scripts

### Install Tools

- **`nvm`**: You can follow the following [instructions](https://github.com/nvm-sh/nvm)
- **`yarn`**: You can follow the following [instructions](https://classic.yarnpkg.com/en/docs/install/#debian-stable)
- **`node`**: `nvm install 12.14.0`

#### Set node version

Stand on the repository root and execute: `nvm use`

### Install dependencies

```bash
yarn install
```

### Available Scripts

In the project directory, you can run:

```bash
yarn start
```

Runs the app in the development mode

### Code formatter

For time saving and good practices, we use [prettier](https://prettier.io/). You only need to run the following instruction:

```bash
yarn format:all
```

### Tests

Runs the tests:

```bash
yarn test
```

Runs all the linters

```bash
yarn lint
```

### Deployment

Builds the app for production to the `build` folder:

```bash
yarn build
```
