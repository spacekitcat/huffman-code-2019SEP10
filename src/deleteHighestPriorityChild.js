const hasChildren = rootNode =>
  rootNode !== null &&
  (rootNode.getRightChild() !== null || rootNode.getLeftChild() !== null);

export default function deleteHighestPriorityChild(rootNode) {
  if (!hasChildren(rootNode)) {
    return null;
  }

  if (rootNode.getRightChild()) {
    if (!rootNode.getRightChild().getRightChild()) {
      rootNode.setRightChild(rootNode.getRightChild().getLeftChild());
      return rootNode;
    }

    rootNode.setRightChild(
      deleteHighestPriorityChild(rootNode.getRightChild())
    );
    return rootNode;
  }

  if (rootNode.getLeftChild()) {
    return rootNode.getLeftChild();
  }

  return rootNode;
}
