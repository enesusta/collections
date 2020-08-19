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
    if (!this.root) this.root.traverseInOrder();
  }

  min() {
    if (!this.root) return Number.MIN_VALUE;
    return this.root.min();
  }

  max() {
    if(!this.root) return Number.MAX_VALUE;
    return this.root.max();
  }

}
