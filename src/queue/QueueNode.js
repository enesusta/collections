export default class QueueNode {
    constructor(value, prev = null) {
        this.value = value;
        this.prev = prev;
    }
}