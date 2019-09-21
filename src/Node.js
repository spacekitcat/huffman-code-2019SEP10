class Node {
  constructor(value, key) {
    this.value = value;
    this.key = key;
    this.leftChild = null;
    this.rightChild = null;
    this.internalNode = false;
  }

  getValue() {
    return this.value;
  }

  getKey() {
    return this.key;
  }

  setLeftChild(leftChild) {
    this.leftChild = leftChild;
  }

  getLeftChild() {
    return this.leftChild;
  }

  setRightChild(rightChild) {
    this.rightChild = rightChild;
  }

  getRightChild() {
    return this.rightChild;
  }

  setInternal(internalNode) {
    this.internalNode = internalNode;
  }

  isInternal() {
    return this.internalNode;
  }

  getAggregateSum() {
    if (this.rightChild !== null) {
      return this.getRightChild().getAggregateSum() + this.value;
    }

    if (this.leftChild !== null) {
      return this.getLeftChild().getAggregateSum() + this.value;
    }

    return this.value;
  }
}

export default Node;
