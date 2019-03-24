const path = require('path');
const Nedb = require('nedb');

module.exports = (mode = '') => {
  const databasePath = `${path.join(__dirname, '../database/')}database${mode !== '' ? `.${mode}` : ''}.db`;
  return new Nedb({ filename: databasePath, autoload: true });
};
