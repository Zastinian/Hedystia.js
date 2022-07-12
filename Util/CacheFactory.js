"use strict";

const ChannelManager = require("../Manager/ChannelManager");
const EmojiManager = require("../Manager/EmojiManager");
const GuildManager = require("../Manager/GuildManager");
const UserManager = require("../Manager/UserManager");

module.exports.default = (options = {}) => ({
  EmojiManager: options.EmojiManager ?? Infinity,
  ChannelManager: options.ChannelManager ?? Infinity,
  GuildManager: options.GuildManager ?? Infinity,
  RoleManager: options.RoleManager ?? Infinity,
  UserManager: options.UserManager ?? Infinity,
  GuildMemberManager: options.GuildMemberManager ?? Infinity,
  ChannelMessageManager: options.ChannelMessageManager ?? 200,
});

module.exports.addToClient = (client, options) => {
  client.guilds = new GuildManager(client, options.GuildManager);
  client.emojis = new EmojiManager(client, options.EmojiManager);
  client.users = new UserManager(client, options.UserManager);
  client.channels = new ChannelManager(client, options.ChannelManager);
};
