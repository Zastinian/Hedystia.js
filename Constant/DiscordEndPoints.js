"use strict";

module.exports = {
  gatewayUrl: (version, encoding) =>
    `wss://gateway.discord.gg/?v=${version}&encoding=${encoding}`,
  apiUrl: (version) => `https://discord.com/api/v${version}`,
  userBanner: (userId, hash, size, format = "png") =>
    `https://cdn.discordapp.com/banners/${userId}/${hash}.${format}?size=${size}`,
  userAvatar: (userId, hash, size, format = "png") =>
    `https://cdn.discordapp.com/avatars/${userId}/${hash}.${format}?size=${size}`,
  userDefaultAvatar: (discriminator) =>
    `https://cdn.discordapp.com/embed/avatars/${discriminator % 5}.png`,
  guildIcon: (guildId, hash, size, format = "png") =>
    `https://cdn.discordapp.com/icons/${guildId}/${hash}.${format}?size=${size}`,
  guildSplash: (guildId, hash, size, format = "png") =>
    `https://cdn.discordapp.com/splashes/${guildId}/${hash}.${format}?size=${size}`,
  guildDiscoverySplash: (guildId, hash, size, format = "png") =>
    `https://cdn.discordapp.com/discovery-splashes/${guildId}/${hash}.${format}?size=${size}`,
  guildBanner: (guildId, hash, size, format = "png") =>
    `https://cdn.discordapp.com/banners/${guildId}/${hash}.${format}?size=${size}`,
};
