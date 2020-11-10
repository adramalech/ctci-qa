import { areCharsUniqueCharArray, areCharsUniqueMap } from './index';

describe('unique char tests', () => {
    const nullCharacter: string = null;

    const emptyCharacter = '';

    const singleCharacter = 'a';

    const uniqueCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const nonUniqueCharacters =
        'aaaabbbbbcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyz0123456789';

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

        test('charsAreUniqueEmptyCharsShouldReturnTrue', () => {
            const expectedResult = true;

            const actualResult = areCharsUniqueCharArray(emptyCharacter);

            expect(actualResult).toBe(expectedResult);
        });

        test('charsAreUniqueNullCharShouldReturnTrue', () => {
            const expectedResult = true;

            const actualResult = areCharsUniqueCharArray(nullCharacter);

            expect(actualResult).toBe(expectedResult);
        });

        test('charsAreUniqueSingleCharShouldReturnTrue', () => {
            const expectedResult = true;

            const actualResult = areCharsUniqueCharArray(singleCharacter);

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

        test('charsAreUniqueEmptyCharsShouldReturnTrue', () => {
            const expectedResult = true;

            const actualResult = areCharsUniqueMap(emptyCharacter);

            expect(actualResult).toBe(expectedResult);
        });

        test('charsAreUniqueNullCharsShouldReturnTrue', () => {
            const expectedResult = true;

            const actualResult = areCharsUniqueMap(nullCharacter);

            expect(actualResult).toBe(expectedResult);
        });

        test('charsAreUniqueSingleCharShouldReturnTrue', () => {
            const expectedResult = true;

            const actualResult = areCharsUniqueMap(singleCharacter);

            expect(actualResult).toBe(expectedResult);
        });
    });
});
