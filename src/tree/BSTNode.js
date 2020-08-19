export default class BSTNode {
  constructor(data) {
    this.data = data;
    this.right = null;
    this.left = null;
  }

  insert(value) {
    if (this.data === value) return;

    if (value < this.data) {
      if (!this.left) this.left = new BSTNode(value);
      this.left.insert(value);
    } else {
      if (!this.right) this.right = new BSTNode(value);
      this.right.insert(value);
    }
  }

  min() {
    if (!this.left) return this.data;
    return this.left.min();
  }

  max() {
    if (!this.right) return this.data;
    return this.right.max();
  }

  traverseInOrder() {
    if (!this.left) this.left.traverseInOrder();
    console.error(this.data);
    if (!this.right) this.right.traverseInOrder();
  }
}
