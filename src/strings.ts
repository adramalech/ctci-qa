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

export const isStringPermutation = (str1: string, str2: string): boolean => {
    if ((str1 == null && str2 != null) || (str1 != null && str2 == null)) {
        return false;
    }

    if (str1 === str2) {
        return true;
    }

    const len1: number = str1.length;
    const len2: number = str2.length;

    if (len1 !== len2) {
        return false;
    }

    const orderedStr1: string = str1.split('').sort().join('');

    const orderedStr2: string = str2.split('').sort().join('');

    return orderedStr1 === orderedStr2;
};

export const flattenArrayStrings = (strs: Array<string>): string => {
    if (strs == null) {
        return null;
    }

    let resultString = '';

    strs.forEach((value: string) => {
        resultString += value ?? '';
    });

    return resultString;
};
