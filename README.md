# huffman-code-2019SEP10

Small project to explore the Huffman coding scheme (just for fun).

## Progress

I've implemented a Transform stream to count byte occurrences of its input. I'm probably going to use a priority queue to generate the tree. 

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
Successfully compiled 2 files with Babel.
✨  Done in 4.73s.
```

## Test

```bash
$ yarn test
yarn run v1.13.0
$ jest --coverage
 PASS  __tests__/ByteOccurrenceCountStream.test.js
  `ByteOccurrenceCountStream` module
    ✓ Empty input (6ms)
    ✓ `a` input (2ms)
    ✓ `z` input
    ✓ `bb` input
    ✓ `abbccc` input (1ms)

------------------------------|----------|----------|----------|----------|-------------------|
File                          |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
------------------------------|----------|----------|----------|----------|-------------------|
All files                     |      100 |      100 |      100 |      100 |                   |
 ByteOccurrenceCountStream.js |      100 |      100 |      100 |      100 |                   |
------------------------------|----------|----------|----------|----------|-------------------|
Test Suites: 1 passed, 1 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        4.228s
Ran all test suites.
✨  Done in 7.61s.

```

## Run

```bash
$ node . resources/b.txt
{ '10': 1,
  '32': 8,
  '46': 1,
  '84': 1,
  '97': 1,
  '98': 1,
  '99': 1,
  '100': 1,
  '101': 3,
  '102': 1,
  '103': 1,
  '104': 2,
  '105': 1,
  '106': 1,
  '107': 1,
  '108': 1,
  '109': 1,
  '110': 1,
  '111': 4,
  '112': 1,
  '113': 1,
  '114': 2,
  '115': 1,
  '116': 1,
  '117': 2,
  '118': 1,
  '119': 1,
  '120': 1,
  '121': 1,
  '122': 1 }
```
