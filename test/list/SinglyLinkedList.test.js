import SinglyLinkedList from '../../src/list/SinglyLinkedList';

describe('singlylinkedlist test', () => {
    it('Should return 10 at call peek()', () => {
        const list = new SinglyLinkedList();
        list.push(10);
        expect(list.peek()).toBe(10);
    });

    it('Clear() test', () => {
        const list = new SinglyLinkedList();
        list.push(10);
        list.push(11);
        list.push(12);
        list.clear();
    });
});

