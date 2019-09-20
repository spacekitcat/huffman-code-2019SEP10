export default function findLowestPriorityChild(rootNode) {
  if (!rootNode) {
    return null;
  }

  if (rootNode.getLeftChild()) {
    if (!rootNode.getLeftChild().getLeftChild()) {
      return rootNode.getLeftChild();
    }
    return findLowestPriorityChild(rootNode.getLeftChild());
  }

  return rootNode;
}
