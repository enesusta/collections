import LinkedListNode from './LinkedListNode';

export default class LinkedList {
    constructor() {
        this.head = null;
    }

    linkFirst(obj) {
        const node = new LinkedListNode(obj);
        node.next = this.head;
        this.head = node;
    }

    consume() {
        let currentNode = this.head;
        while (currentNode) {
            console.log(currentNode.toString);
            currentNode = currentNode.next;
        }
    }
}