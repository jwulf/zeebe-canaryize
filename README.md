# Zeebe Canaryize

Canaryize a Node.js Zeebe client or Worker, using [healthchecks.io](https://github.com/jwulf/healthchecks.io).

This approach hooks into the events emitted by a ZBClient or ZBWorker on gRPC connection readiness or connection failure to start / stop a healthchecks.io process.

## Install to your project

```bash
npm i zeebe-canaryize
```

## Example Usage

```typescript
import {ZBClient} from 'zeebe-node'
import {canaryize} from 'zeebe-canaryize'

const zbc = new ZBClient()
canaryize(zbc, {
    url: 'https://hc-ping.com/785c9195-0e5d-493b-b8ec-fc2f95532730',
    minutes: 5
})

const worker = zbc.createWorker(null, 'my-task-type', (job, complete) => {
    console.log(job);
    complete.success()
})
canaryize(worker, {
    url: 'https://hc-ping.com/dbd95a40-1f77-4cb4-9104-805182a16ce3',
    minutes: 5
})
```
