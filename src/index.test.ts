import {
    areCharsUniqueCharArray,
    areCharsUniqueMap,
    isStringPermutation,
} from './index';

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

describe('permutation', () => {
    const str1 = 'abcdef12345';
    const str2 = '543aeb21cdf';
    const str3 = 'xyz987';
    const str4 = 'a';
    const str5: string = null;

    test('both are permutation should be true', () => {
        const expectedResult = true;

        const actualResult: boolean = isStringPermutation(str1, str2);

        expect(actualResult).toBe(expectedResult);
    });

    test('different lengths are not permutation should return false', () => {
        const expectedResult = false;

        const actualResult: boolean = isStringPermutation(str3, str4);

        expect(actualResult).toBe(expectedResult);
    });

    test('null first parameter should return false', () => {
        const expectedResult = false;

        const actualResult: boolean = isStringPermutation(str5, str1);

        expect(actualResult).toBe(expectedResult);
    });

    test('null second parameter should return false', () => {
        const expectedResult = false;

        const actualResult: boolean = isStringPermutation(str1, str5);

        expect(actualResult).toBe(expectedResult);
    });

    test('both null parameters should return true', () => {
        const expectedResult = true;

        const actualResult: boolean = isStringPermutation(str5, str5);

        expect(actualResult).toBe(expectedResult);
    });

    test('both parameters are same value should return true', () => {
        const expectedResult = true;

        const actualResult: boolean = isStringPermutation(str1, str1);

        expect(actualResult).toBe(expectedResult);
    });
});
