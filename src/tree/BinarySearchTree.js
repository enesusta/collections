import BSTNode from "./BSTNode";

export default class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    if (!this.root) this.root = new BSTNode(value);
    else this.root.insert(value);
  }

  traverseInOrder() {
    console.log('girdi');
    if (!this.root) this.root.traverseInOrder();
  }

}
