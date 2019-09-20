import fs from 'fs';
import process from 'process';
import ByteOccurrenceCountStream from './ByteOccurrenceCountStream';
import Node from './Node';
import appendNodeToHeap from './appendNodeToHeap';
import findLowestPriorityChild from './findLowestPriorityChild';
import deleteLowestPriorityChild from './deleteLowestPriorityChild';

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

    while (root !== null) {
      const highestPriorityChild = findLowestPriorityChild(root);
      root = deleteLowestPriorityChild(root);
      console.log(highestPriorityChild.getKey().toString('UTF-8'));
    }
  });

  fileReadStream.pipe(occurrenceCountStream);
};

SayHello();
