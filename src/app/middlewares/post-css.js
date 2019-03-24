
const path = require('path');
const autoprefixer = require('autoprefixer');
const postcssMiddleware = require('postcss-middleware');

const destPath = path.join(__dirname, '../../public/stylesheets');

module.exports = postcssMiddleware({
  plugins: [autoprefixer()],
  src: req => path.join(destPath, req.url),
});
