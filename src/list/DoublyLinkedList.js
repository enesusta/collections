import DoublyLinkedListNode from './DoublyLinkedListNode';

export default class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    push(value) {
        const node = new DoublyLinkedListNode(value);
        node.next = this.head;

        if (!this.head) this.tail = node;
        else this.head.prev = node;

        this.head = node;
        this.size++;
    }

    enqueue(value) {
        const node = new DoublyLinkedListNode(value);

        if (!this.tail) this.head = node;
        else {
            this.tail.next = node;
            node.prev = this.tail;
        }

        this.tail = node;
        this.size++;
    }

    size() {
        return this.size;
    }

    *iterateFromHead() {
        let node = this.head;
        while (node) {
            yield node.value;
            node = node.next;
        }
    }

    *iterateFromTail() {
        let node = this.tail;
        while (node) {
            yield node.value;
            node = node.prev;
        }
    }

}