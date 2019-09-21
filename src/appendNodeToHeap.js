export default function appendNodeToHeap(rootNode, childNode) {
  if (rootNode === null) {
    return childNode;
  }

  if (childNode.getValue() > rootNode.getValue()) {
    if (rootNode.getRightChild() !== null) {
      appendNodeToHeap(rootNode.getRightChild(), childNode);
    } else {
      rootNode.setRightChild(childNode);
    }
  } else {
    if (rootNode.getLeftChild() !== null) {
      appendNodeToHeap(rootNode.getLeftChild(), childNode);
    } else {
      rootNode.setLeftChild(childNode);
    }
  }

  return rootNode;
}
