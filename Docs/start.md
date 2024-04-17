---
title: Start
sidebar:
  order: 1
---

## Installation

```
npm i @hedystia/discord

yarn add @hedystia/discord
```

## Nodejs Version

- `v18.7.0` or higher

## Links

- [Discord](https://discord.gg/aXvuUpvRQs) [Hedystia Discord]

## Example

```js
const {Client, Intents, Status} = require("@hedystia/discord");

const client = new Client({
  token: "<TOKEN>",
  intents: [Intents.Flags.Guilds, Intents.Flags.Guild_Members, Intents.Flags.Message_Content, Intents.Flags.Guild_Messages],
  presence: {
    status: Status.Idle,
    activities: [
      {
        name: "Hedystia",
        type: "Playing",
      },
    ],
  },
});

client.once("ready", () => {
  console.log("Bot on: " + client.user.username);
});

client.on("messageCreate", (msg) => {
  if (msg.content == "!ping") {
    msg.reply({
      content: "Pong!",
    });
  }
});
```
