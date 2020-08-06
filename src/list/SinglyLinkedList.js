import Node from './Node';

export default class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    push(value) {
        const node = new Node(value);
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

    size() {
        return this.size;
    }

    clear() {
        const current = this.head;
        while (current) {
            const node = current;
            node = null;
            current = current.next;
        }
    }

    consume() {
        let currentNode = this.head;
        while (currentNode) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }
}