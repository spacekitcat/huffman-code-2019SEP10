export default (rootNode, childNode) => {
  if (childNode.getValue() > rootNode.getValue()) {
    rootNode.setRightChild(childNode);
  } else {
    rootNode.setLeftChild(childNode);
  }
};
