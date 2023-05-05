const {Client, Intents, Status, Slash, MessageActionRow, InputTextStyle, InputText, Modal} = require("../Package");

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
  let slash = [new Slash().setName("modal").setDescription("Modal Command").setDmPermission(true)];
  client.application.commands.set(slash);
  console.log("Bot on: " + client.user.tag);
});

client.on("interactionCreate", async (interaction) => {
  if (interaction.isCommand()) {
    if (interaction.commandName == "modal") {
      const favoriteColorInput = new InputText()
        .setCustomId("favoriteColorInput")
        .setLabel("What's your favorite color?")
        .setStyle(InputTextStyle.Short);
      const hobbiesInput = new InputText()
        .setCustomId("hobbiesInput")
        .setLabel("What's some of your favorite hobbies?")
        .setStyle(InputTextStyle.Paragraph);
      const modal = new Modal({
        title: `My Modal`,
        custom_id: "myModal",
      });
      const firstActionRow = new MessageActionRow().addComponents([favoriteColorInput]);
      const secondActionRow = new MessageActionRow().addComponents([hobbiesInput]);
      modal.addComponents([firstActionRow, secondActionRow]);
      await interaction.modalSubmit(modal);
    }
  } else if (interaction.isModal()) {
    const favoriteColorInput = interaction.getTextInput("favoriteColorInput");
    const hobbiesInput = interaction.getTextInput("hobbiesInput");
    const channel = client.channels.cache.get("<CHANNEL_ID>");
    channel.send({
      content: `What's your favorite color?: ${favoriteColorInput}\nWhat's some of your favorite hobbies?: ${hobbiesInput}`,
    });
    interaction.reply({
      content: `Ok!`,
      flags: ["Ephemeral"],
    });
  }
});
