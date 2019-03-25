const { attributes } = require('structure');

const Category = attributes({
  name: {
    type: String,
    required: true,
  },
})(class Category { });

module.exports = Category;
