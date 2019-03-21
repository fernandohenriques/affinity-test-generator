const path = require('path');
const sassMiddleware = require('node-sass-middleware');

module.exports = sassMiddleware({
  src: path.join(__dirname, 'src/public'),
  dest: path.join(__dirname, 'src/public/dist'),
  indentedSyntax: true, // true = .sass and false = .scss
  sourceMap: true
});
