const {Client, Intents, Status} = require("hedystia.js");

const client = new Client({
  token: "<BOT_TOKEN>",
  intents: [Intents.Flags.Guilds, Intents.Flags.Guild_Members, Intents.Flags.Message_Content, Intents.Flags.Guild_Messages],
  presence: {
    status: Status.Idle,
    activities: [
      {
        name: "Hedystia",
        type: "Playing",
      },
      {
        name: "Hedystia",
        type: "Streaming",
        url: "https://www.twitch.tv/zastinian",
      },
      {
        name: "Hedystia",
        type: "Listening",
      },
      {
        name: "Hedystia",
        type: "Watching",
      },
      {
        name: "Hedystia",
        type: "Competing",
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
