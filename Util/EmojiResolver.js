class EmojiResolver {
  static transformEmoji(emoji = {}, client) {
    const emojiManager = client.emojis;
    if (typeof emoji === "string") {
      if (/^\d+$/gi.test(emoji)) {
        const customEmoji = emojiManager.cache.get(emoji);
        if (!customEmoji) throw new RangeError(`Emoji not found!`);
        emoji = `${customEmoji.animated ? "a:" : ""}${customEmoji.name}:${
          customEmoji.id
        }`;
      }
      if (/^(<(a)?:\w+:\d+>)$/gi.test(emoji)) {
        const formattedEmoji = emoji
          .slice(emoji.lastIndexOf(":") + 1)
          .replace(/>/gi, "");
        return this.transformEmoji(
          formattedEmoji.match(/^\d+$/gi)?.[0],
          client
        );
      }
      if (/^((a)?:\w+:\d+)$/gi.test(emoji)) emoji = emoji;
    }
    if (typeof (emoji?.id ?? emoji?.name) !== "undefined") {
      if (emoji?.id === null) return this.transformEmoji(emoji?.name, client);
      return `${emoji?.animated ? `a:` : ""}${emoji?.name}:${emoji?.id}`;
    }

    return emoji;
  }
}

module.exports = EmojiResolver;
