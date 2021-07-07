# dpatterna

The classical introductory exercises for different design patterns

The objectives are simple:

- Write codes that demonstrates different design patterns.
- Run the test suite and make sure that it succeeds.

## Setup

Go through the setup instructions for TypeScript to install the necessary
dependencies:

[https://exercism.io/tracks/typescript/installation](https://exercism.io/tracks/typescript/installation)

## Requirements

Install assignment dependencies:

```bash
$yarn install
```

## Making the test suite pass

Execute the tests with:

```bash
$yarn test
```

In the test suites all tests but the first have been skipped.

Once you get a test passing, you can enable the next one by changing `xit` to `it`.

## Tutorial

Each exercise has two files:

- sample.ts
- sample.test.ts

The first file is where you will write your code.
The second is where the tests are defined.

The tests will check whether your code is doing the right thing.
You don't need to be able to write a test suite from scratch,
but it helps to understand what a test looks like, and what
it is doing.
