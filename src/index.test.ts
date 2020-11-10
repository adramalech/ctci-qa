import { areCharsUniqueCharArray, areCharsUniqueMap } from './index';

describe('unique char tests', () => {
    const uniqueCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const nonUniqueCharacters =
        'abcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyz0123456789';

    describe('sort string solution', () => {
        test('charsAreUniqueShouldReturnTrue', () => {
            const expectedResult = true;

            const actualResult = areCharsUniqueCharArray(uniqueCharacters);

            expect(actualResult).toBe(expectedResult);
        });

        test('charsAreNotUniqueShouldReturnFalse', () => {
            const expectedResult = false;

            const actualResult = areCharsUniqueCharArray(nonUniqueCharacters);

            expect(actualResult).toBe(expectedResult);
        });
    });

    describe('map solution', () => {
        test('charsAreUniqueShouldReturnTrue', () => {
            const expectedResult = true;

            const actualResult = areCharsUniqueMap(uniqueCharacters);

            expect(actualResult).toBe(expectedResult);
        });

        test('charsAreNotUniqueShouldReturnFalse', () => {
            const expectedResult = false;

            const actualResult = areCharsUniqueMap(nonUniqueCharacters);

            expect(actualResult).toBe(expectedResult);
        });
    });
});
