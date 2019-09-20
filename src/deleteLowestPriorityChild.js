const hasChildren = rootNode =>
  rootNode !== null &&
  (rootNode.getRightChild() !== null || rootNode.getLeftChild() !== null);

export default function deleteLowestPriorityChild(rootNode) {
  if (!hasChildren(rootNode)) {
    return null;
  }

  if (rootNode.getLeftChild()) {
    if (!rootNode.getLeftChild().getLeftChild()) {
      rootNode.setLeftChild(rootNode.getLeftChild().getRightChild());
      return rootNode;
    }

    rootNode.setLeftChild(deleteLowestPriorityChild(rootNode.getLeftChild()));
    return rootNode;
  }

  return rootNode.getRightChild();
}
