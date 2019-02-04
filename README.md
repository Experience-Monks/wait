# wait

Minimalistic <nano> library that promisified `setTimeout`.

## Installation

```
npm install @jam3/wait
```

## Usage

### Basic usage

```
const wait = require('@jam3/wait');

wait(1500).then(callback);
```

### Async/Await example

```
const wait = require('@jam3/wait');

async function animate() {
  await wait(0); // Wait for JS to dequeue this call and do some rending in the meanwhile
  console.log('Waited at least 0 milliseconds');
}
```

### Promises example

```
const wait = require('@jam3/wait');

async function runProcess() {
  ...
  await Promise.all([setTimer, other]);
  ...
}

async setTimer() {
  return await wait(1000);
}
```

## Alternatives

If you want a more complete library, with a couple extra bytes, checkout [delay](https://www.npmjs.com/package/delay)
