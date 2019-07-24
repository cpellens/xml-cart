const path = require('path');

module.exports = {
  entry: './public/js/main.js',
  mode: "production",
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public/dist')
  }
};