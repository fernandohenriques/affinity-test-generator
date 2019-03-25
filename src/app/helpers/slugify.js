const createSlug = require('slug');

module.exports = text => createSlug(text, { lower: true });
