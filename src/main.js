import fs from 'fs';
import process from 'process';

const SayHello = () => {
  const fileName = process.argv[2];
  fs.createReadStream(fileName);
  console.log("Hello World!");
}

SayHello();
