import LinkedList from '../../src/list/LinkedList';

test('should true', () => {

    const list = new LinkedList();
    list.linkFirst(10);
    list.linkFirst(20);
    list.linkFirst(30);
    list.linkFirst(40);

    list.consume();

});
