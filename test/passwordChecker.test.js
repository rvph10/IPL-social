const { isValidPassword } = require("../passwordChecker");

describe('Password Validator', () => {
    test('should require minimum 8 characters', () => {
        expect(isValidPassword('Abc@123')).toBe(false);
        expect(isValidPassword('')).toBe(false);
        expect(isValidPassword('Abcd@123')).toBe(true);
    });
});