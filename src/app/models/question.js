const { attributes } = require('structure');

const Question = attributes({
  id: Number,
  title: {
    type: String,
    required: true,
  },
  options: {
    type: Array,
    itemType: String,
    required: true,
  },
})(class Question { });

module.exports = Question;
