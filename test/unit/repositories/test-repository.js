/* global describe, beforeEach, it */
const { assert } = require('chai');
const slugify = require('../../../src/app/helpers/slugify');
const { validTest, unvalidTest } = require('../../mocks/test');
const db = require('../../../src/app/config/database')('test');
const TestRepository = require('../../../src/app/repositories/test-repository');

describe('TestRepository', () => {
  const { saveTest } = new TestRepository(db);

  beforeEach(async () => {
    await new Promise(resolve => db.remove({}, { multi: true }, () => resolve()));
  });

  describe('saveTest', () => {
    it('should return a valid test instance with a right title and slug', async () => {
      const test = await saveTest(validTest);

      assert.typeOf(test, 'object');
      assert.equal(test.title, validTest.title);
      assert.equal(test.slug, slugify(validTest.title));
    });

    it('should return a errors array', async () => {
      const test = await saveTest(unvalidTest);
      assert.isNotObject(test, 'test is not an object');
    });
  });
});
