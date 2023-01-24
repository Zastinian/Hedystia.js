const Bitfield = require("./Bitfield");
class ApplicationFlags extends Bitfield {
  constructor(...bit) {
    super(bit);
  }
}

ApplicationFlags.Flags = {
  Embedded_Released: 1n << 1n,
  Managed_Emoji: 1n << 2n,
  Group_Dm_Create: 1n << 4n,
  Gateway_Presence: 1n << 12n,
  Gateway_Presence_Limited: 1n << 13n,
  Gateway_Guild_Members: 1n << 14n,
  Gateway_Guild_Members_Limited: 1n << 15n,
  Verification_Pending_Guild_Limit: 1n << 16n,
  Embedded: 1n << 17n,
  Gateway_Message_Content: 1n << 18n,
  Gateway_Message_Content_Limited: 1n << 19n,
  Embedded_First_Party: 1n << 20n,
};

ApplicationFlags.Default = 0n;

ApplicationFlags.All = Object.values(ApplicationFlags.Flags).reduce((a, b) => a | b, ApplicationFlags.Default);

module.exports = ApplicationFlags;
