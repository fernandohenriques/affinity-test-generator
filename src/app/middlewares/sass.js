const path = require('path');
const sassMiddleware = require('node-sass-middleware');

const publicPath = path.join(__dirname, '../../public');

module.exports = sassMiddleware({
  src: path.join(publicPath, 'stylesheets/sass'),
  dest: path.join(publicPath, 'stylesheets'),
  indentedSyntax: true,
  sourceMap: true,
  debug: true,
  prefix: '/stylesheets',
  outputStyle: 'compressed',
});
