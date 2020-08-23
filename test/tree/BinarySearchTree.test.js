import BinarySearchTree from "../../src/tree/BinarySearchTree";

describe('bst test', () => {
  it('generator should works as expected', () => {

    const bts = new BinarySearchTree();
    bts.insert(25);
    bts.insert(20);
    bts.insert(15);
    bts.insert(27);
    bts.insert(30);
    bts.insert(29);
    bts.insert(26);
    bts.insert(22);
    bts.insert(32);

    bts.traverseInOrder();

  });

  it('Should return 15', () => {
    const bts = new BinarySearchTree();
    bts.insert(25);
    bts.insert(20);
    bts.insert(15);
    bts.insert(27);
    bts.insert(30);
    bts.insert(29);
    bts.insert(26);
    bts.insert(22);
    bts.insert(32);

    expect(bts.min()).toBe(15);
  });

  it('should return 32', () => {
    const tree = new BinarySearchTree();
    tree.insert(25);
    tree.insert(20);
    tree.insert(15);
    tree.insert(27);
    tree.insert(30);
    tree.insert(29);
    tree.insert(26);
    tree.insert(22);
    tree.insert(32);

    expect(tree.max()).toBe(32);
  });

})
