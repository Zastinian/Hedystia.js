const Bitfield = require("./Bitfield");

class SystemChannelFlags extends Bitfield {
  constructor(...bit) {
    super(bit);
  }
}

SystemChannelFlags.DEFAULT = 0n;

SystemChannelFlags.FLAGS = {
  SUPPRESS_JOIN_NOTIFICATIONS: 1n << 0n,
  SUPPRESS_PREMIUM_SUBSCRIPTIONS: 1n << 1n,
  SUPPRESS_GUILD_REMINDER_NOTIFICATIONS: 1n << 2n,
  SUPPRESS_JOIN_NOTIFICATION_REPLIES: 1n << 3n,
  SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS: 1n << 4n,
  SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES: 1n << 5n,
};

SystemChannelFlags.ALL = Object.values(SystemChannelFlags.FLAGS).reduce(
  (a, b) => a | b,
  SystemChannelFlags.DEFAULT
);

module.exports = SystemChannelFlags;
