export default function appendNodeToHeap (rootNode, childNode) {
  if (childNode.getValue() > rootNode.getValue()) {
    if (rootNode.getRightChild() !== null) {
      appendNodeToHeap(rootNode.getRightChild(), childNode);
    } else {
      rootNode.setRightChild(childNode);
    }
  } else {
    rootNode.setLeftChild(childNode);
  }
}
