const {Client, Intents, Status} = require("../Package");

const client = new Client({
  token: "<BOT_TOKEN>",
  intents: [Intents.Flags.Guilds, Intents.Flags.Guild_Members],
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

client.once("ready", async () => {
  console.log("Bot on: " + client.user.tag);
});
