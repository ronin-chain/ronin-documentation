---
title: Envio
description: Index Ronin smart contract data into a GraphQL API with Envio HyperIndex
---

## Overview

[Envio](https://envio.dev/?utm_source=ronin&utm_medium=partner-docs) is the data layer for blockchain apps. It gives Ronin developers the fastest, most flexible way to get real-time and historical onchain data, from a single GraphQL API to raw high-speed access, with managed hosting on Envio Cloud. Envio's HyperIndex natively supports indexing any EVM chain out of the box, so you can index Ronin using your own RPC as the data source. Handlers can be written in TypeScript, JavaScript, or ReScript, with reorg handling, real-time and historical data, and multichain data aggregation. You can deploy and scale your indexer on the fully managed Envio Cloud, or self-host.

## Quick Start

You can auto-generate an indexer from any verified contract in a few minutes. To get started, follow these three steps:

1. Initialize your indexer
2. Write your event handlers
3. Run your indexer and query the GraphQL API

### 1. Initialize your indexer

Envio can bootstrap a full indexer from a verified contract. Run:

```
pnpx envio init
```

Follow the prompts to point Envio at your Ronin contract. Envio fetches the ABI, generates the config, schema, and event handler stubs for you.

### 2. Write your event handlers

Open the generated handler files and add the logic that maps each contract event to the entities defined in your GraphQL schema. Handlers can be written in TypeScript, JavaScript, or ReScript. See the [configuration file guide](https://docs.envio.dev/docs/HyperIndex/configuration-file?utm_source=ronin&utm_medium=partner-docs) for how to declare your network, contracts, and events, and the [RPC data source guide](https://docs.envio.dev/docs/HyperIndex/rpc-sync?utm_source=ronin&utm_medium=partner-docs) for indexing Ronin via your own RPC endpoint.

### 3. Run your indexer and query the GraphQL API

Start your indexer locally and query the generated GraphQL API. When you are ready for production, you can deploy to [Envio Cloud](https://docs.envio.dev/docs/HyperIndex/hosted-service?utm_source=ronin&utm_medium=partner-docs) for managed, zero-downtime hosting, or self-host.

## Additional resources

- [HyperIndex overview](https://docs.envio.dev/docs/HyperIndex/overview?utm_source=ronin&utm_medium=partner-docs)
- [Quickstart](https://docs.envio.dev/docs/HyperIndex/quickstart?utm_source=ronin&utm_medium=partner-docs)
- [Supported networks](https://docs.envio.dev/docs/HyperIndex/supported-networks?utm_source=ronin&utm_medium=partner-docs)
- [Envio documentation](https://docs.envio.dev/?utm_source=ronin&utm_medium=partner-docs)
- [Performance benchmarks](https://docs.envio.dev/docs/HyperIndex/benchmarking?utm_source=ronin&utm_medium=partner-docs)
