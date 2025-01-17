const { isValidPassword } = require("../passwordChecker");

describe('Password Validator', () => {
    test('should require minimum 8 characters', () => {
        expect(isValidPassword('Abc@123')).toBe(false);
        expect(isValidPassword('')).toBe(false);
        expect(isValidPassword('Abcd@123')).toBe(true);
    });

    test('should require at least one special character', () => {
        expect(isValidPassword('Abcd1234')).toBe(false);
        expect(isValidPassword('Abcd@123')).toBe(true);
    });

    test('should require at least one number', () => {
        expect(isValidPassword('Abcd@efg')).toBe(false);
        expect(isValidPassword('Abcd@123')).toBe(true);
    });

    test('should not allow "IPL" in any case', () => {
        expect(isValidPassword('iPl@1234')).toBe(false);
        expect(isValidPassword('IPL@1234')).toBe(false);
        expect(isValidPassword('ipl@1234')).toBe(false);
        expect(isValidPassword('Abcd@123')).toBe(true);
    });

    test('should validate a correct password', () => {
        expect(isValidPassword('StrongP@ss123')).toBe(true);
    });
});