const { attributes } = require('structure');

const Persona = attributes({
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
