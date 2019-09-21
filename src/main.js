import fs from 'fs';
import process from 'process';
import ByteOccurrenceCountStream from './ByteOccurrenceCountStream';
import Node from './Node';
import appendNodeToHeap from './appendNodeToHeap';
import findLowestPriorityChild from './findLowestPriorityChild';
import deleteLowestPriorityChild from './deleteLowestPriorityChild';

const mergeNextLowPriorityNodes = root => {
  const highestPriorityChild = findLowestPriorityChild(root);
  root = deleteLowestPriorityChild(root);
  const secondHighestPriorityChild = findLowestPriorityChild(root);
  root = deleteLowestPriorityChild(root);
  const mergedNode = new Node(
    highestPriorityChild.getValue() + secondHighestPriorityChild.getValue(),
    Buffer.from(
      `${highestPriorityChild.getKey()}${secondHighestPriorityChild.getKey()}`
    )
  );
  return appendNodeToHeap(root, mergedNode);
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

    root = mergeNextLowPriorityNodes(root);
    root = mergeNextLowPriorityNodes(root);
    root = mergeNextLowPriorityNodes(root);
    root = mergeNextLowPriorityNodes(root);
    root = mergeNextLowPriorityNodes(root);
    root = mergeNextLowPriorityNodes(root);
    root = mergeNextLowPriorityNodes(root);

    while (root !== null) {
      const child = findLowestPriorityChild(root);
      root = deleteLowestPriorityChild(root);
      console.log(child.getKey().toString('hex'));
    }
  });

  fileReadStream.pipe(occurrenceCountStream);
};

SayHello();
