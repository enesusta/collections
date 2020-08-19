export default class BSTNode {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }

  insert(value) {
    if (value === this.value) return;

    if (this.value < value) {
      if (!this.left) this.left = new BSTNode(value);
      this.left.insert(value);
    } else {
      if (!this.right) this.right = new BSTNode(value);
      this.right.insert(value);
    }
  }

  traverseInOrder() {
    if (!this.left) this.left.traverseInOrder();
    console.error(this.value);
    if (!this.right) this.right.traverseInOrder();
  }
}
