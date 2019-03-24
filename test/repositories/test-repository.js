/* global it, describe */
const { assert } = require('chai');
const { saveTest } = require('../../src/app/repositories/test-repository');

describe('TestRepository', () => {
  describe('saveTest', () => {
    it('should return a test instance if enter a valid test object', async () => {
      const test = await saveTest({ title: 'Teste de Presidenciáveis - 2022' });
      console.log(test);
      assert.equal('Hello'.length, 5);
    });
  });
});
