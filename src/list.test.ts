import { SingleLinkedList, generateSingleLinkedList } from './list';

describe('Generate single linked list', () => {
    test('generate list', () => {
        const actualResult: SingleLinkedList<number> = generateSingleLinkedList<
            number
        >(1, 2, 3, 4, 5);

        expect(actualResult).toBeTruthy();
    });

    test('generate null list should be null', () => {
        const actualResult = generateSingleLinkedList(null);

        expect(actualResult.val).toBeFalsy();
        expect(actualResult.next).toBeFalsy();
    });
});
