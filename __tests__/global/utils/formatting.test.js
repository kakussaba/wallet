const {
  obfuscateCreditCard,
  maskNumber,
  maskCardNumber,
  maskDate,
} = require('../../../src/global/utils/formatting');

describe('global/utils/formatting', () => {
  describe('maskObfuscateCreditCard', () => {
    it('should be obfuscate the first 12 card numbers', () => {
      const result = obfuscateCreditCard('9999 9999 9999 9999');

      expect(result).toBe('•••• •••• •••• 9999');
    });
  });

  describe('maskNumber', () => {
    it('should be return only numbers', () => {
      const result = maskNumber('Teste 123');

      expect(result).toBe('123');
    });
  });

  describe('maskCardNumber', () => {
    it('should be return with card number mask only when 16 numbers are entered', () => {
      const result = maskCardNumber('9999999999999999');

      expect(result).toBe('9999 9999 9999 9999');
    });

    it('should be return without mask', () => {
      const result = maskCardNumber('999999999999999');

      expect(result).toBe('999999999999999');
    });
  });

  describe('maskDate', () => {
    it('should be return with date mask only when 4 numbers are entered', () => {
      const result = maskDate('9999');

      expect(result).toBe('99/99');
    });

    it('should be return without mask', () => {
      const result = maskDate('999');

      expect(result).toBe('999');
    });
  });
});
