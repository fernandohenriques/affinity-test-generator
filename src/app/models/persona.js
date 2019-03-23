const { attributes } = require('structure');

const Persona = attributes({
  id: Number,
  name: {
    type: String,
    required: true,
  },
  answers: {
    type: Array,
    itemType: Number,
    required: true,
  },
})(class Persona { });

module.exports = Persona;
