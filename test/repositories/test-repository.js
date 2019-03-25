/* global describe, beforeEach, it */
const { assert } = require('chai');
const db = require('../../src/app/config/database')('test');
const { saveTest } = require('../../src/app/repositories/test-repository');

describe('TestRepository', () => {
  beforeEach(async () => {
    await new Promise(resolve => db.remove({}, { multi: true }, () => resolve()));
  });

  describe('saveTest', () => {
    it('should return a valid test instance with a right title', async () => {
      const titleMock = 'Teste de Presidenciáveis - 2022';
      const test = await saveTest({ title: titleMock });
      assert.equal(typeof test, 'object');
      assert.equal(test.title, titleMock);
    });
  });
});
