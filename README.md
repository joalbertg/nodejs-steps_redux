# Redux

* Link [Redux][redux]
* Link [CNDs][cdns]
* Link [Webpack][webpack]
* Link [webpack-dev-server][webpack_dev_server]
* Link [html-webpack-plugin][html_webpack_plugin]
* ~~Link~~ [~~style-loader~~][style_loader]
* Link [mini-css-extract-plugin][mini_css_extract_plugin]
* Link [css-loader][css_loader]

[redux]: https://redux.js.org/
[cdns]: https://cdnjs.com/
[webpack]: https://webpack.js.org/
[webpack_dev_server]: https://github.com/webpack/webpack-dev-server
[html_webpack_plugin]: https://github.com/jantimon/html-webpack-plugin
[style_loader]: https://github.com/webpack-contrib/style-loader
[mini_css_extract_plugin]: https://github.com/webpack-contrib/mini-css-extract-plugin
[css_loader]: https://github.com/webpack-contrib/css-loader

## Using _CDN_:

`index.html`

```html
<body>
  <div id="root"></div>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/redux/4.0.5/redux.min.js" integrity="sha256-7nQo8jg3+LLQfXy/aqP5D6XtqDQRODTO18xBdHhQow4=" crossorigin="anonymous"></script>
  <script src="main.js"></script>
</body>
```

## Install with _node_

```shell
docker-compose run app npm install redux
```
```shell
aliases: i, isntall, add
common options: [--save-prod|--save-dev|--save-optional] [--save-exact] [--no-save]
```

`index.html`

```html
<body>
  <div id="root"></div>
  <script src="../node_modules/redux/dist/redux.js"></script>
  <script src="main.js"></script>
</body>
```
```shell
node_modules
├── ...
├── redux
│   ├── CHANGELOG.md
│   ├── LICENSE.md
│   ├── README.md
│   ├── dist
│   │   ├── redux.js
│   │   └── redux.min.js
│   ├── es
│   │   ├── redux.js
│   │   └── redux.mjs
│   ├── index.d.ts
│   ├── lib
│   │   └── redux.js
│   ├── package.json
│   └── ...
└── ...
```

## Install _webpack_

```shell
docker-compose run app npm install webpack webpack-cli
```

## Create `webpack.config.js` file

This configuration uses the `./src/main.js` entry point, and generates the `./build/fixter.js` file.
```json
const path = require('path');

module.exports = {
  entry: "./src/main.js",
  mode: "none",
  output: {
    path: path.join(__dirname, "build"),
    filename: "fixter.js"
  }
}
```

`mode: [development|production|none]`

run script with `npx` to not install it globally.
```shell
docker-compose run app npx webpack --watch
```

## Plugins

```shell
docker-compose run app npm install webpack-dev-server --save-dev
docker-compose run app npm i --save-dev html-webpack-plugin
```

```json
//...
"scripts": {
  "start:dev": "npx webpack-dev-server"
}
//...
```

```json
/...
const HtmlWebpack = require('html-webpack-plugin');

  //...
  devServer: {
    host: '0.0.0.0',
    port: 8080
  },
  //...
}
```

> Note: `host: '0.0.0.0'` for running with docker.

### docker-compose.yml

> command: sh -c "npm run start:dev"

```shell
docker-compose up
```

## Loaders

```shell
docker-compose run app npm install --save-dev style-loader
docker-compose run app npm install --save-dev css-loader
docker-compose run app npm install --save-dev mini-css-extract-plugin
```

> Note: `style-loader` was replaced by `mini-css-extract-plugin`.

### main.js
> add `import './styles.css'`.

```json
  const MiniCssExtractPlugin = require('mini-css-extract-plugin');

  //...devServer
  module: {
    rules: [{
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader']
    }]
  },
  plugins: [
    new HtmlWebpack({
      filename: 'index.html',
      template: 'public/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    })
  ]
  //...
```

