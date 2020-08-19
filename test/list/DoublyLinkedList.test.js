import DoublyLinkedList from '../../src/list/DoublyLinkedList';

describe('doublylinkedlist test', () => {

    it('generator function which named iterateFromHead should work as expected', () => {

        const list = new DoublyLinkedList();
        list.push(10);
        list.push(11);
        list.push(12);
        list.push(13);
        list.enqueue(14);
        list.enqueue(15);
        list.enqueue(16);

        for (let value of list.iterateFromHead()) {
            console.log(value);
        }
    });
});