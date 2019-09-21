# huffman-code-2019SEP10

Small project to explore the Huffman coding scheme (just for fun).

## Progress

I've implemented a Transform stream to count byte occurrences from an input stream, a heap structure for constructing the tree and a code to merge the tree down to a Huffman encoding. The tree construction and encoding process are what I consider as a rough draft / prototype.

## Build

```bash
$ yarn
yarn install v1.13.0
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 🔨  Building fresh packages...
✨  Done in 116.68s.
$ yarn build
yarn run v1.13.0
$ eslint src/**
$ babel src -d lib
Successfully compiled 8 files with Babel.
✨  Done in 1.93s.
```

## Test

```bash
yarn run v1.13.0
$ jest --coverage
 PASS  __tests__/appendNodeToHeap.test.js
 PASS  __tests__/deleteLowestPrirotyChild.test.js
 PASS  __tests__/findLowestPriorityChild.test.js
 PASS  __tests__/deleteHighestPrirotyChild.test.js
 PASS  __tests__/Node.test.js
 PASS  __tests__/findHighestPriorityChild.test.js
 PASS  __tests__/ByteOccurrenceCountStream.test.js
-------------------------------|----------|----------|----------|----------|-------------------|
File                           |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
-------------------------------|----------|----------|----------|----------|-------------------|
All files                      |      100 |      100 |      100 |      100 |                   |
 ByteOccurrenceCountStream.js  |      100 |      100 |      100 |      100 |                   |
 Node.js                       |      100 |      100 |      100 |      100 |                   |
 appendNodeToHeap.js           |      100 |      100 |      100 |      100 |                   |
 deleteHighestPriorityChild.js |      100 |      100 |      100 |      100 |                   |
 deleteLowestPriorityChild.js  |      100 |      100 |      100 |      100 |                   |
 findHighestPriorityChild.js   |      100 |      100 |      100 |      100 |                   |
 findLowestPriorityChild.js    |      100 |      100 |      100 |      100 |                   |
-------------------------------|----------|----------|----------|----------|-------------------|

Test Suites: 7 passed, 7 total
Tests:       83 passed, 83 total
Snapshots:   0 total
Time:        9.143s
Ran all test suites.
✨  Done in 15.64s.
```

## Run

File contents: `HELLOWORLD` (outputs are UTF-8 codes in hex).

```bash
$ node . resources/a.txt
440a48454c57524f
```

File contents: `The quick brown fox jumps over the lazy dog.` (outputs are UTF-8 codes in hex).

```bash
$ node . resources/b.txt
69676b6a63626664737176746d6c706e68652e0a61546f757278777a7920
```

File contents: `$$$$$zzzzzzzzzzzzzzzzzzzzzzz*********G@@@` (outputs are UTF-8 codes in hex).

```bash
$ node . resources/c.txt
2a470a40247a
```

File contents: `A_DEAD_DAD_CEDED_A_BAD_BABE_A_BEADED_ABACA_BED` (outputs are UTF-8 codes in hex).

```bash
$ node . resources/c.txt
5f4441450a4342
```
