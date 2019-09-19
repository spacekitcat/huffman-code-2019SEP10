# huffman-code-2019SEP10

Small project to explore the Huffman coding scheme (just for fun).

## Progress

I've implemented a Transform stream to count byte occurrences of its input and a heap structure for constructing the tree. The heap and transform code currently collaborate to list all of the unique bytes, ordered from highest occurrences to lowest.

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
Successfully compiled 6 files with Babel.
✨  Done in 0.93s.
```

## Test

```bash
yarn run v1.13.0
$ jest --coverage
 PASS  __tests__/deleteHighestPrirotyChild.test.js
 PASS  __tests__/Node.test.js
 PASS  __tests__/findHighestPriorityChild.test.js
 PASS  __tests__/appendNodeToHeap.test.js
 PASS  __tests__/ByteOccurrenceCountStream.test.js
-------------------------------|----------|----------|----------|----------|-------------------|
File                           |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
-------------------------------|----------|----------|----------|----------|-------------------|
All files                      |      100 |      100 |      100 |      100 |                   |
 ByteOccurrenceCountStream.js  |      100 |      100 |      100 |      100 |                   |
 Node.js                       |      100 |      100 |      100 |      100 |                   |
 appendNodeToHeap.js           |      100 |      100 |      100 |      100 |                   |
 deleteHighestPriorityChild.js |      100 |      100 |      100 |      100 |                   |
 findHighestPriorityChild.js   |      100 |      100 |      100 |      100 |                   |
-------------------------------|----------|----------|----------|----------|-------------------|

Test Suites: 5 passed, 5 total
Tests:       63 passed, 63 total
Snapshots:   0 total
Time:        1.954s
Ran all test suites.
✨  Done in 3.52s.
```

## Run

```bash
$ node . resources/a.txt
L
O


D
E
H
R
W
```

```bash
$ node . resources/b.txt

o
e
h
r
u


.
T
a
b
c
d
f
g
i
j
k
l
m
n
p
q
s
t
v
w
x
y
z
```

```bash
$ node . resources/c.txt
z
*
$
@


G
```
