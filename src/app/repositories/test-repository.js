const Test = require('../models/test');
const slugify = require('../helpers/slugify');
const dbprod = require('../config/database')();

const TestRepository = function (db = dbprod) {
  return {
    saveTest: async (testObj) => {
      let test = new Test(testObj);
      const { valid, errors } = test.validate();

      if (valid) {
        test = test.toJSON();
        test.slug = slugify(test.title);
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
      } else return errors.map(error => error.message);
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
};

module.exports = TestRepository;
