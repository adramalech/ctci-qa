export const areCharsUniqueCharArray = (str: string): boolean => {
    if (str == null) {
        return true;
    }

    const length: number = str.length;

    if (length < 2) {
        return true;
    }

    const orderedStr: string = str.split('').sort().join();

    let cur = 0;
    let next = 1;

    while (next < length) {
        if (orderedStr[cur] == orderedStr[next]) {
            return false;
        }

        cur++;
        next++;
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

    str.split('').forEach((c: string) => {
        if (m.has(c)) {
            return false;
        }

        m.set(c, 1);
    });

    return true;
};
