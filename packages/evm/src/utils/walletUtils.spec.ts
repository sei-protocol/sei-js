import { 
  generateAddressesFromPrivateKey, 
  deriveAddressesFromPublicKey, 
  isValidSeiAddress, 
  isValidEvmAddress 
} from './walletUtils';

describe('Wallet Utilities', () => {
  const testPrivateKey = 'e7b71175472a74bbd440b2a23a7530adab2ba849e1fe56abaaa303ee8f11e058';
  const testPublicKey = new Uint8Array([2, 149, 116, 84, 195, 81, 66, 126, 67, 17, 205, 167, 108, 133, 172, 118, 133, 233, 126, 164, 251, 148, 233, 54, 152, 96, 218, 227, 62, 121, 29, 124, 66]);

  describe('generateAddressesFromPrivateKey', () => {
    it('should generate valid Sei and EVM addresses from a private key', () => {
      const { seiAddress, evmAddress } = generateAddressesFromPrivateKey(testPrivateKey);
      expect(isValidSeiAddress(seiAddress)).toBe(true);
      expect(isValidEvmAddress(evmAddress)).toBe(true);
      expect(seiAddress.startsWith('sei')).toBe(true);
      expect(evmAddress.startsWith('0x')).toBe(true);
    });

    it('should throw an error for an invalid private key', () => {
      expect(() => generateAddressesFromPrivateKey('invalid')).toThrow('Private key must be 32 bytes long.');
    });
  });

  describe('deriveAddressesFromPublicKey', () => {
    it('should derive valid Sei and EVM addresses from a public key', () => {
      const { seiAddress, evmAddress } = deriveAddressesFromPublicKey(testPublicKey);
      expect(isValidSeiAddress(seiAddress)).toBe(true);
      expect(isValidEvmAddress(evmAddress)).toBe(true);
      expect(seiAddress.startsWith('sei')).toBe(true);
      expect(evmAddress.startsWith('0x')).toBe(true);
    });
  });

  describe('isValidSeiAddress', () => {
    it('should return true for a valid Sei address', () => {
      const { seiAddress } = generateAddressesFromPrivateKey(testPrivateKey);
      expect(isValidSeiAddress(seiAddress)).toBe(true);
    });

    it('should return false for an invalid Sei address', () => {
      const invalidAddress = 'invalid_address';
      expect(isValidSeiAddress(invalidAddress)).toBe(false);
    });
  });

  describe('isValidEvmAddress', () => {
    it('should return true for a valid EVM address', () => {
      const { evmAddress } = generateAddressesFromPrivateKey(testPrivateKey);
      expect(isValidEvmAddress(evmAddress)).toBe(true);
    });

    it('should return false for an invalid EVM address', () => {
      const invalidAddress = '0xinvalid_address';
      expect(isValidEvmAddress(invalidAddress)).toBe(false);
    });
  });
});