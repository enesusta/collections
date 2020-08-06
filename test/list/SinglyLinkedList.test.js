import SinglyLinkedList from '../../src/list/SinglyLinkedList';

test('Should return 10 at call peek()', () => {
    const list = new SinglyLinkedList();
    list.push(10);
    expect(list.peek().value).toBe(10);
})
