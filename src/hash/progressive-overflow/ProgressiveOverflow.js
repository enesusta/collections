import ProgressiveOverflowNode from "./ProgressiveOverflowNode";

export default class ProgressiveOverflow {
    constructor() {
        this.hmap = new Array(11);
        this.hmap.fill(null);
    }

    hash(key) {
        key.length % 11;
    }

    occupied(index) {
        return this.hmap[index] !== null;
    }

    put(key, value) {
        let hashedKey = this.hash(key);

        if (this.occupied(hashedKey)) {
            const stopIndex = hashedKey;

            if (hashedKey == this.hmap.length - 1) hashedKey = 0;
            else hashedKey++;

            while (this.occupied(hashedKey) && hashedKey !== stopIndex) hashedKey = (hashedKey + 1) % 11;
        }

        if (!this.occupied(hashedKey)) this.hmap[hashedKey] = new ProgressiveOverflowNode(key, value);
    }

    findKey(key) {
        let hashedKey = this.hash(key);
        if (this.hmap[hashedKey] != null && this.hmap[hashedKey].key === key) return hashedKey;

        const stopIndex = hashedKey;

        if (hashedKey === 10) hashedKey = 0;
        else hashedKey++;

        while (hashedKey !== stopIndex &&
            this.hmap[hashedKey] !== null &&
            !this.hmap[hashedKey].key === key) hashedKey = (hashedKey + 1) % 11;

        if (stopIndex === hashedKey) return -1;
        else return hashedKey;
    }

    get(key) {
        const hashedKey = this.hash(key);
        if (hashedKey === -1) return null;
        return this.hmap[hashedKey].value;
    }

}