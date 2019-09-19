import fs from 'fs';
import process from 'process';
import ByteOccurrenceCountStream from './ByteOccurrenceCountStream';
import Node from './Node';
import appendNodeToHeap from './appendNodeToHeap';
import findHighestPriorityChild from './findHighestPriorityChild';
import deleteHighestPriorityChild from './deleteHighestPriorityChild';

const SayHello = () => {
  const fileName = process.argv[2];
  const fileReadStream = fs.createReadStream(fileName);
  const occurrenceCountStream = new ByteOccurrenceCountStream();

  fileReadStream.on('end', () => {
    console.log(occurrenceCountStream.getOccurrences());
  });

  fileReadStream.pipe(occurrenceCountStream);

  let root = new Node(5, 'x');

  appendNodeToHeap(root, new Node(8, 'h'));
  appendNodeToHeap(root, new Node(16, 'e'));

  console.log();
  console.log('root', root);
  console.log('high', findHighestPriorityChild(root));
  root = deleteHighestPriorityChild(root);
  console.log();
  console.log('root', root);
  console.log('high', findHighestPriorityChild(root));
  root = deleteHighestPriorityChild(root);
  console.log();
  console.log('root', root);
  console.log('high', findHighestPriorityChild(root));
};

SayHello();
