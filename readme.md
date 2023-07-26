## Installation

```
npm i hedystia.js

yarn add hedystia.js
```

## Nodejs Version

- `v16.9.0` or higher

## Links

- [Discord](https://discord.gg/aXvuUpvRQs) [Hedystia Discord]
- [Bot](https://discord.com/oauth2/authorize?client_id=931228076094930996&permissions=137710923254&scope=bot%20applications.commands) [Hedystia Discord Bot]
- [Docs](https://docs.hedystia.com/docs/client/start)

## All Examples

- [Examples](/Examples)

## To contribute to the project, please follow the steps below:

- Fork the repository.

- Create a new branch.

- Install dependencies.

- Make your changes: Make the necessary changes to the codebase in your branch using your preferred editor or IDE.

- Commit and push: Once you have made your changes, commit them and push the branch to your forked repository.

- Create a pull request.

## Example of 2

### Prefix

```js
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

### Slash

```js
const {Client, Intents, Status, Slash, SlashOption, MessageEmbed, OptionType} = require("hedystia.js");

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
  let slash = [
    new Slash().setName("help").setDescription("Help Command").setDmPermission(true),
    new Slash()
      .setName("user")
      .setDescription("User Command")
      .setDmPermission(false)
      .setOptions([new SlashOption().setName("user_option").setDescription("user").setRequired(true).setType(OptionType.User)]),
  ];
  client.application.commands.set(slash);
  console.log("Bot on: " + client.user.username);
});

client.on("interactionCreate", (interaction) => {
  if (!interaction.isCommand()) return;
  if (interaction.commandName == "help") {
    const helpEmbed = new MessageEmbed()
      .setColor(0x0099ff)
      .setTitle("Help Menu")
      .setURL("https://docs.hedystia.com/docs/client/start")
      .setAuthor({
        name: "Name",
        iconURL:
          "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTMyYzU4YTVjNjNlZWUwZTgwN2ZiMDgxYzVlOGE0NGRhYTM3MmE1NCZjdD1z/K9svE9i7P3Ox2/giphy.gif",
        url: "https://docs.hedystia.com/docs/client/start",
      })
      .setDescription("Help Description")
      .setThumbnail({
        url: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTMyYzU4YTVjNjNlZWUwZTgwN2ZiMDgxYzVlOGE0NGRhYTM3MmE1NCZjdD1z/K9svE9i7P3Ox2/giphy.gif",
      })
      .addFields({name: "Command", value: "/help", inline: true}, {name: "Command", value: "/user", inline: true})
      .setImage({url: "https://c.tenor.com/yi5btxWVAwwAAAAC/tenor.gif"})
      .setTimestamp()
      .setFooter({
        text: "Footer",
        iconURL:
          "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTMyYzU4YTVjNjNlZWUwZTgwN2ZiMDgxYzVlOGE0NGRhYTM3MmE1NCZjdD1z/K9svE9i7P3Ox2/giphy.gif",
      });
    return interaction.reply({
      embeds: [helpEmbed],
    });
  } else if (interaction.commandName == "user") {
    const user = interaction.options.getUser("user_option");
    const userEmbed = new MessageEmbed()
      .setColor(0x0099ff)
      .setTitle("User Info")
      .setURL("https://docs.hedystia.com/docs/client/start")
      .addFields({name: "Username", value: user.username, inline: true})
      .setThumbnail({
        url: user.displayAvatarURL(),
      });
    return interaction.reply({
      content: `**${user.username}** Info`,
      embeds: [userEmbed],
    });
  }
});
```
