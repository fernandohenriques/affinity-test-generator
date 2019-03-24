const db = require('../config/database');

module.exports = {
  saveTest: async (test) => {
    try {
      const newTest = await db.insert(test);
      console.log(newTest);
    } catch (error) {
      throw error;
    }
  },

  getTestBySlug: async (slug) => {
    try {
      const test = await db.findOne({ slug });
      console.log(test);
    } catch (error) {
      throw error;
    }
  },
};
