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
 PASS  __tests__/findLowestPriorityChild.test.js
 PASS  __tests__/ByteOccurrenceCountStream.test.js
 PASS  __tests__/appendNodeToHeap.test.js
 PASS  __tests__/deleteLowestPrirotyChild.test.js
 PASS  __tests__/Node.test.js
------------------------------|----------|----------|----------|----------|-------------------|
File                          |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
------------------------------|----------|----------|----------|----------|-------------------|
All files                     |      100 |      100 |      100 |      100 |                   |
 ByteOccurrenceCountStream.js |      100 |      100 |      100 |      100 |                   |
 Node.js                      |      100 |      100 |      100 |      100 |                   |
 appendNodeToHeap.js          |      100 |      100 |      100 |      100 |                   |
 deleteLowestPriorityChild.js |      100 |      100 |      100 |      100 |                   |
 findLowestPriorityChild.js   |      100 |      100 |      100 |      100 |                   |
------------------------------|----------|----------|----------|----------|-------------------|
```

## Run

File contents: `HELLOWORLD` (outputs are UTF-8 representation).

```bash
$ node . resources/a.txt
000     W
001     R
01      O
100     D
1010    H
1011    E
11      L
```

File contents: `The quick brown fox jumps over the lazy dog.` (outputs are UTF-8 representation).

```bash
$ node . resources/b.txt
00000   c
00001   b
00010   f
00011   d
001     o
01000   m
01001   l
01010   p
01011   n
01100   i
01101   g
01110   k
01111   j
1000    h
10010   .
100110  a
100111  T
1010    e
10110   u
10111   r
110000  x
110001  w
110010  z
110011  y
110100  s
110101  q
110110  v
110111  t
111      
```

File contents: `$$$$$zzzzzzzzzzzzzzzzzzzzzzz*********G@@@` (outputs are UTF-8 representation).

```bash
$ node . resources/c.txt
0000    G
0001    @
001     $
01      *
1       z
```

File contents: `A_DEAD_DAD_CEDED_A_BAD_BABE_A_BEADED_ABACA_BED` (outputs are UTF-8 representation). This example is from Wikipedia article on Huffman coding and it matches.

```bash
$ node . resources/d.txt
00      _
01      D
10      A
110     E
1110    C
1111    B
```
