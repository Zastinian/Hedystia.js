const Bitfield = require("./Bitfield");
class MessageFlags extends Bitfield {
  constructor(...bit) {
    super(bit);
  }
}

MessageFlags.FLAGS = {
  CROSSPOSTED: 1n << 0n,
  IS_CROSSPOST: 1n << 1n,
  SUPPRESS_EMBEDS: 1n << 2n,
  SOURCE_MESSAGE_DELETED: 1n << 3n,
  URGENT: 1n << 4n,
  HAS_THREAD: 1n << 5n,
  EPHEMERAL: 1n << 6n,
  LOADING: 1n << 7n,
  FAILED_TO_MENTION_SOME_ROLES_IN_THREAD: 1n << 8n,
  SHOULD_SHOW_LINK_NOT_DISCORD_WARNING: 1n << 10n,
};

MessageFlags.DEFAULT = 0n;

MessageFlags.ALL = Object.values(MessageFlags.FLAGS).reduce(
  (a, b) => a | b,
  MessageFlags.DEFAULT
);

module.exports = MessageFlags;
