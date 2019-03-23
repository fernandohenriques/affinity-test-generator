const { attributes } = require('structure');

const Category = attributes({
  id: Number,
  name: {
    type: String,
    required: true,
  },
})(class Category { });

module.exports = Category;
