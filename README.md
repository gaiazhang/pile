# Pile

> TODO: description


## Installation

Installation is available using NPM:

```bash
npm install pile@latest
```

## Usage

```
const {Icon} = require('pile');

// TODO: DEMONSTRATE API
```

---------------develop--------------

## start doc

```
npm i && npm start
```

## css build

```
cd packages/theme-default
npm run build
```

## Building

pile uses [Lerna](https://github.com/lerna/lerna) under-the-hood to build all of the packages.

```bash
npm run build
```

Build single package by running the following:

```bash
npm run build -- --scope "@pile/button"
```

Build multiple packages where scope is a glob expression:

```bash
npm run build -- --scope "{@pile/button,@pile/icon}"
```

Watch all filters (auto-rebuild upon src changes):

```bash
npm run watch
```

Build all filters in dev-mode (un-minified):

```bash
npm run build:dev
```

## creare new component

```
lerna create @pile/newcomponent --yes
```

## install module-1 to module-2

```
lerna add module-1 --scope=module-2
```

## more infomation

```
lerna -h
```

## Documentation

API documention can be found [here](https://didi.github.io/pile.js/docs/).

