/**
 * A utility class for resolving and transforming emojis.
 * @class
 */
class EmojiResolver {
  /**
   * Transforms an emoji object or string into a formatted emoji string.
   * @param {Object|string} emoji - The emoji object or string to transform.
   * @param {Client} client - The Discord client instance.
   * @returns {string} The formatted emoji string.
   * @throws {RangeError} If the emoji is not found in the emoji cache.
   */
  static transformEmoji(emoji = {}, client) {
    const emojiManager = client.emojis;
    if (typeof emoji === "string") {
      if (/^\d+$/gi.test(emoji)) {
        const customEmoji = emojiManager.cache.get(emoji);
        if (!customEmoji) throw new RangeError(`Emoji not found!`);
        emoji = `${customEmoji.animated ? "a:" : ""}${customEmoji.name}:${customEmoji.id}`;
      }
      if (/^(<(a)?:\w+:\d+>)$/gi.test(emoji)) {
        const formattedEmoji = emoji.slice(emoji.lastIndexOf(":") + 1).replace(/>/gi, "");
        return this.transformEmoji(formattedEmoji.match(/^\d+$/gi)?.[0], client);
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
