const path = require('path');

module.exports = {
  entry: "./src/main.js",
  mode: "none",
  output: {
    path: path.join(__dirname, "build"),
    filename: "fixter.js"
  }
}

