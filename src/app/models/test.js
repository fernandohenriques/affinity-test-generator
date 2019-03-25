const { attributes } = require('structure');
const Category = require('./category');
const Question = require('./question');
const Persona = require('./persona');

const Test = attributes({
  title: {
    type: String,
    minLength: 15,
    required: true,
  },
  slug: String,
  banner: String,
  description: String,
  category: {
    type: 'Category',
    required: true,
  },
  questions: {
    type: Array,
    itemType: 'Question',
    required: true,
  },
  personas: {
    type: Array,
    itemType: 'Persona',
    required: true,
  },
}, {
  dynamics: {
    Category: () => Category,
    Question: () => Question,
    Persona: () => Persona,
  },
})(class Test { });

module.exports = Test;
