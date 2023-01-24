const Bitfield = require("./Bitfield");
class ActivityFlags extends Bitfield {
  constructor(...bit) {
    super(bit);
  }
}

ActivityFlags.Flags = {
  Instance: 1n << 0n,
  Join: 1n << 1n,
  Spectate: 1n << 2n,
  Join_Request: 1n << 3n,
  Sync: 1n << 4n,
  Play: 1n << 5n,
  Party_Privacy_Friends: 1n << 6n,
  Party_Privacy_Voice_Channel: 1n << 7n,
  Embedded: 1n << 8n,
};

ActivityFlags.Default = 0n;

ActivityFlags.All = Object.values(ActivityFlags.Flags).reduce((a, b) => a | b, ActivityFlags.Default);

module.exports = ActivityFlags;
