## Installation

```
npm i esmile.js

yarn add esmile.js
```

## Nodejs Version

- `v18.7.0` or higher

## Links

- [Discord](https://discord.gg/aXvuUpvRQs) [Esmile Discord]

## Example

```js
const {Client, Intents, Status} = require("esmile.js");

const client = new Client({
  token: "<TOKEN>",
  intents: [Intents.Flags.Guilds, Intents.Flags.Guild_Members, Intents.Flags.Message_Content, Intents.Flags.Guild_Messages],
  presence: {
    status: Status.Idle,
    activities: [
      {
        name: "Esmile",
        type: "Playing",
      },
    ],
  },
});

client.once("ready", () => {
  console.log("Bot on: " + client.user.tag);
});

client.on("messageCreate", (msg) => {
  if (msg.content == "!ping") {
    msg.reply({
      content: "Pong!",
    });
  }
});
```
