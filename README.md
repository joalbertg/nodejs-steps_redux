# Redux

* Link page Redux: [https://redux.js.org/][redux_page]
* Link page CNDs: [https://cdnjs.com/][cdns_page]
* Link page Webpack: [https://webpack.js.org/][webpack_page]


[redux_page]:(https://redux.js.org/)
[cdns_page]:(https://cdnjs.com/)
[webpack_page]:(https://webpack.js.org/)

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
docker-compose run app npm install -S redux
```
```shell
aliases: i, isntall, add
common options: [--save-prod|--save-dev|--save-optional] [--save-exact] [--no-save]
```

`index.html`

```html
<body>
  <div id="root"></div>
  <script src="./node_modules/redux/dist/redux.js"></script>
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
docker-compose run app npm install -S webpack webpack-cli
```

## Create `webpack.config.js` file

This configuration uses the `./main.js` entry point, and generates the `./build/fixter.js` file.
```javascript
const path = require('path');

module.exports = {
  entry: "./main.js",
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
docker-compose run app npx webpack
```



