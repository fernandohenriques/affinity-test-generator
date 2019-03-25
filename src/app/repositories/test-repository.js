const db = require('../config/database')();

module.exports = {
  saveTest: async (test) => {
    try {
      return await new Promise((resolve, reject) => {
        db.insert(test, (err, doc) => {
          if (err) reject(err);
          resolve(doc);
        });
      });
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
