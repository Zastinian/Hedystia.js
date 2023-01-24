const Bitfield = require("./Bitfield");

class SystemChannelFlags extends Bitfield {
  constructor(...bit) {
    super(bit);
  }
}

SystemChannelFlags.Default = 0n;

SystemChannelFlags.Flags = {
  Suppress_Join_Notifications: 1n << 0n,
  Suppress_Premium_Subscriptions: 1n << 1n,
  Suppress_Guild_Reminder_Notifications: 1n << 2n,
  Suppress_Join_Notification_Replies: 1n << 3n,
  Suppress_Role_Subscription_Purchase_Notifications: 1n << 4n,
  Suppress_Role_Subscription_Purchase_Notification_Replies: 1n << 5n,
};

SystemChannelFlags.All = Object.values(SystemChannelFlags.Flags).reduce((a, b) => a | b, SystemChannelFlags.Default);

module.exports = SystemChannelFlags;
