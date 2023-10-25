const {Client, Intents, Status} = require("../Package");

const client = new Client({
  token: "<BOT_TOKEN>",
  intents: [Intents.Flags.Guilds, Intents.Flags.Guild_Messages, Intents.Flags.Guild_Members, Intents.Flags.Message_Content],
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
  console.log("Bot on: " + client.user.username);
});
