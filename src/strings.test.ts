import {
    areCharsUniqueCharArray,
    areCharsUniqueMap,
    isStringPermutation,
    flattenArrayStrings,
} from './strings';

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

describe('flatten strings', () => {
    const strings: Array<string> = ['', 'a', 'b', 'abc'];

    const singleElementArray: Array<string> = ['a'];

    const nullArray: Array<string> = null;

    const nullElementsInArray: Array<string> = [
        null,
        '',
        'a',
        'b',
        null,
        'c',
        'd',
    ];

    test('flatten string array should return single string', () => {
        const expectedResult = 'ababc';

        const actualResult: string = flattenArrayStrings(strings);

        expect(actualResult).toBe(expectedResult);
    });

    test('flatten string array is null should return null', () => {
        const expectedResult: string = null;

        const actualResult: string = flattenArrayStrings(nullArray);

        expect(actualResult).toBe(expectedResult);
    });

    test('flatten single element array shoulld return string', () => {
        const expectedResult = 'a';

        const actualResult: string = flattenArrayStrings(singleElementArray);

        expect(actualResult).toBe(expectedResult);
    });

    test('nulls as elements in array should return flattened string with non-nulls', () => {
        const expectedResult = 'abcd';

        const actualResult: string = flattenArrayStrings(nullElementsInArray);

        expect(actualResult).toBe(expectedResult);
    });
});
