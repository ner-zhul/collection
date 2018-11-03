import typeIs from '@tao-zhi-xue-tang/type-is';

// 对于任意给定的值，将其转换为 map
function anyToMap(list) {
    switch (typeIs.getType(list)) {
    case typeIs.type.objectExceptArray:
        if (list instanceof Set) {
            return new Map(Object.entries([...list]));
        } if (list instanceof Map) {
            return list;
        }
        return new Map(Object.entries(list));
    case typeIs.type.array:
        return new Map(Object.entries(list));
    case typeIs.type.null:
        return new Map();
    case typeIs.type.undefined:
        return new Map();
    default:
        return new Map(Object.entries([list]));
    }
}

class Collection {
    constructor(origin) {
        this.insider = anyToMap(origin);
    }

    mapWithKeys(loop = () => {}) {
        const res = new Map();
        this.insider.forEach((value, key) => {
            const changeMap = loop(value, key);
            const mapKey = Object.keys(changeMap).shift();
            res.set(mapKey, changeMap[mapKey]);
        });
        return new Collection(res);
    }

    toString() {
        return `(${this.x}, ${this.y})`;
    }
}

export default Collection;
