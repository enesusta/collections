import LinkedListNode from '../list/LinkedListNode';

export default class LinkedStack {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    push(value) {
        const node = new LinkedListNode(value);
        node.next = this.head;

        this.head = node;
        this.size++;
    }

    pop() {
        if (!this.head) return null;

        const removed = this.head;
        this.head = this.head.next;

        removed.next = null;
        this.size--;

        return removed.value;
    }

    peek() {
        return this.head.value;
    }

    clear() {
        while (this.pop());
    }
}