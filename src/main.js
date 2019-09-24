import fs from 'fs';
import process from 'process';
import ByteOccurrenceCountStream from './ByteOccurrenceCountStream';
import Node from './Node';
import appendNodeToHeap from './appendNodeToHeap';
import findLowestPriorityChild from './findLowestPriorityChild';
import deleteLowestPriorityChild from './deleteLowestPriorityChild';

/** This is prototype code, hence the lack of tests. */

const mergeNodes = (first, second) => {
  const mergedNode = new Node(
    first.getValue() + second.getValue(),
    Buffer.from(`${first.getKey()}${second.getKey()}`)
  );
  mergedNode.setInternalLeftChild(first);
  mergedNode.setInternalRightChild(second);

  return mergedNode;
};

const mergeNextLowPriorityNodes = root => {
  const highestPriorityChild = findLowestPriorityChild(root);
  root = deleteLowestPriorityChild(root);
  const secondHighestPriorityChild = findLowestPriorityChild(root);
  root = deleteLowestPriorityChild(root);

  highestPriorityChild.setLeftChild(null);
  highestPriorityChild.setRightChild(null);
  secondHighestPriorityChild.setLeftChild(null);
  secondHighestPriorityChild.setRightChild(null);

  const mergedNode = mergeNodes(
    highestPriorityChild,
    secondHighestPriorityChild
  );
  return appendNodeToHeap(root, mergedNode);
};

const reduceTree = (root, leafCount) => {
  while (root.getKey().length < leafCount) {
    //console.log();
    //console.log(JSON.stringify(root));
    root = mergeNextLowPriorityNodes(root);
  }

  return root;
};

const printTree = (node, prefix = '') => {
  if (node.getLeftChild()) {
    printTree(node.getLeftChild(), prefix + '0');
  }

  if (node.getRightChild()) {
    printTree(node.getRightChild(), prefix + '1');
  }

  // if (node.getInternalLeftChild()) {
  //   printTree(node.getInternalLeftChild());
  // }

  // if (node.getInternalRightChild()) {
  //   printTree(node.getInternalRightChild());
  // }

  if (!node.getLeftChild() && !node.getRightChild()) {
    console.log(`${prefix}  ${node.getKey()}`);
  }
};

const reconnectChildNodes = node => {
  if (node.getInternalLeftChild()) {
    node.setLeftChild(node.getInternalLeftChild());
    reconnectChildNodes(node.getLeftChild());
  }

  if (node.getInternalRightChild()) {
    node.setRightChild(node.getInternalRightChild());
    reconnectChildNodes(node.getRightChild());
  }

  return node;
};

const SayHello = () => {
  const fileName = process.argv[2];
  const fileReadStream = fs.createReadStream(fileName);
  const occurrenceCountStream = new ByteOccurrenceCountStream();

  let root = null;
  fileReadStream.on('end', () => {
    Object.keys(occurrenceCountStream.getOccurrences()).forEach(key => {
      const leaf = new Node(
        occurrenceCountStream.getOccurrences()[key],
        Buffer.from([key])
      );
      if (root === null) {
        root = leaf;
      } else {
        appendNodeToHeap(root, leaf);
      }
    });

    const singleLeafCount = Object.keys(occurrenceCountStream.getOccurrences())
      .length;
    root = reduceTree(root, singleLeafCount);

    reconnectChildNodes(root);
    printTree(root);
    // while (root !== null) {
    //   const child = findLowestPriorityChild(root);
    //   root = deleteLowestPriorityChild(root);
    //   console.log(child.getKey().toString('hex'));
    // }
  });

  fileReadStream.pipe(occurrenceCountStream);
};

SayHello();
