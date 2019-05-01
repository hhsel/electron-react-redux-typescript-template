# electron-react-redux-typescript-template
The TypeScript version of hhsel/electron-react-redux-template.

This repository is just for my quick starting point, adjusting to my preferences.  
It could be useful if your preference is similar to mine.

## How to use
```
npm install
```
Then start building, and watch for further changes
```
npm run watch
```
After successfully built, you can start your application
```
npm run start
```

## Packages
React Redux, with Material-UI as the UI framework and react-router for routing.  
Built with webpack, babel, and a syntax rule is enforced by the TSLint:recommended extension set.

- All build and typechecking processes are done by Webpack.
- Syntax check is done by TSLint through the tslint-loader webpack plugin.
- Type-checking is done by fork-ts-checker-webpack-plugin, instead of ts-loader.
- Compilation is done by @babel/preset-typescript, instead of ts-loader.
  - This is because ts-loader is extremely slow when type-checking is enabled. I decided not to use ts-loader and split typechecking and compilation.
  - This approach works relativery well in the performance aspect, taking less than 150ms on my machine vs. over 500ms with tl-loader alone.

## Configurations
### TSlint
Based on ``tslint:recommended``, but some rules are intentionally disabled.  
See ``tslint.json`` for details.

### webpack
See ``webpack.config.js`` for details.
- Aliases are used. Prefixed with @ to indicate aliases.
  - @actions - Redux action and action creators
  - @stores - Redux stores
  - @reducers - Redux reducers
  - @containers - React Redux container components
  - @components - Ordinary React components

### TypeScript
See ``tsconfig.json`` for details.

- The same aliases as the ones for Webpack (noted above) are set for TypeScript.

## Directory structure
For larger projects, it would be better to organize by routing paths first, instead of grouping by roles, like this repository.
