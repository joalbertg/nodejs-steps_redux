# Redux

* Link page Redux: [https://redux.js.org/][redux_page]
* Link page CNDs: [https://cdnjs.com/][cdns_pages]


[redux_page]:(https://redux.js.org/)
[cdns_pages]:(https://cdnjs.com/)


`index.html` with _CDN_:

```html
<body>
  <div id="root"></div>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/redux/4.0.5/redux.min.js" integrity="sha256-7nQo8jg3+LLQfXy/aqP5D6XtqDQRODTO18xBdHhQow4=" crossorigin="anonymous"></script>
  <script src="main.js"></script>
</body>
```

# Install with npm

```shell
docker-compose run app npm install -S redux
```
```shell
aliases: i, isntall, add
common options: [--save-prod|--save-dev|--save-optional] [--save-exact] [--no-save]
```

`index.html` with _node_:

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

