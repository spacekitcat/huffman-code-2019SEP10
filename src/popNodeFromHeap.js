export default function popNodeFromHeap(rootNode) {
  if (!rootNode) {
    return { returned: null, newRoot: null };
  }

  if (rootNode.getRightChild()) {
    if (!rootNode.getRightChild().getRightChild()) {
      const returned = rootNode.getRightChild();
      rootNode.setRightChild(null);
      return { returned, newRoot: rootNode };
    }
  }

  if (rootNode.getLeftChild()) {
    return { returned: rootNode, newRoot: rootNode.getLeftChild() };
  }

  return { returned: rootNode, newRoot: null };
}
