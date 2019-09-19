export default function findHighestPriorityChild(rootNode) {
  if (!rootNode) {
    return null;
  }

  if (rootNode.getRightChild()) {
    if (!rootNode.getRightChild().getRightChild()) {
      return rootNode.getRightChild();
    }
    return findHighestPriorityChild(rootNode.getRightChild());
  }

  return rootNode;
}
