type Primitive = boolean | number | string;

export class SingleLinkedList<T extends Primitive> {
    public readonly val: T;
    public next: SingleLinkedList<T>;

    constructor(val: T) {
        this.next = null;
        this.val = val;
    }
}

export const generateSingleLinkedList = <T extends Primitive>(
    ...t: Array<T>
): SingleLinkedList<T> => {
    let head: SingleLinkedList<T> = null;
    let cur: SingleLinkedList<T> = new SingleLinkedList<T>(t[0]);

    head = cur;

    t.slice(1, t.length).forEach((value: T) => {
        cur.next = new SingleLinkedList<T>(value);
        cur = cur.next;
    });

    return head;
};
