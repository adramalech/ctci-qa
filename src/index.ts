export const areCharsUniqueCharArray = (str: string): boolean => {
    if (str == null) {
        return true;
    }

    const length: number = str.length;

    if (length < 2) {
        return true;
    }

    const orderedStr: string = str.split('').sort().join('');

    let curIndex = 0;
    let nextIndex = 1;

    while (nextIndex < length) {
        const cur = orderedStr.charAt(curIndex);
        const next = orderedStr.charAt(nextIndex);

        if (cur === next) {
            return false;
        }

        curIndex++;
        nextIndex++;
    }

    return true;
};

export const areCharsUniqueMap = (str: string): boolean => {
    if (str == null) {
        return true;
    }

    const length: number = str.length;

    if (length < 2) {
        return true;
    }

    const m: Map<string, number> = new Map<string, number>();

    const arrStrs: Array<string> = str.split('');

    for (const c of arrStrs) {
        if (m.has(c)) {
            return false;
        }

        m.set(c, 1);
    }

    return true;
};
