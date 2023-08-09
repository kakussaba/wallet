const {obfuscateCreditCard} = require('../../../src/global/utils/formatting');

describe('global/utils/formatting', () => {
  describe('maskCreobfuscateCreditCardditCard', () => {
    it('should be obfuscate the first 12 card numbers', () => {
      const result = obfuscateCreditCard('9999 9999 9999 9999');

      expect(result).toBe('•••• •••• •••• 9999');
    });
  });
});
