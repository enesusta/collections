import QueueNode from "./QueueNode";

export default class SimpleQueue {
    constructor() {
        this.tail = null;
    }

    enqueue(value) {
        const node = new QueueNode(value);
        node.prev = this.tail;
        this.tail = node;
    }

    dequeue() {
        if (!this.tail) return null;

        const removed = this.tail;
        this.tail = this.tail.prev;

        removed.prev = null;
        return removed.value;
    }

    peek() {
        return this.tail.value;
    }

}