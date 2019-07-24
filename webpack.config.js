const path = require('path');

module.exports = {
  entry: './public/js/main.js',
  mode: "development",
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public/dist')
  }
};