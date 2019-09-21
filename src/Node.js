class Node {
  constructor(value, key) {
    this.value = value;
    this.key = key;
    this.leftChild = null;
    this.rightChild = null;
    this.internalLeftChild = null;
    this.internalRightChild = null;
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

  setInternalLeftChild(internalLeftChild) {
    this.internalLeftChild = internalLeftChild;
  }

  getInternalLeftChild() {
    return this.internalLeftChild;
  }

  setInternalRightChild(internalRightChild) {
    this.internalRightChild = internalRightChild;
  }

  getInternalRightChild() {
    return this.internalRightChild;
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
