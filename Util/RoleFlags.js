const Bitfield = require("./Bitfield");

class RoleFlags extends Bitfield {
  constructor(...bit) {
    super(bit);
  }
}

RoleFlags.Flags = {
  In_Prompt: 1n << 0n,
};

RoleFlags.Default = 0n;

RoleFlags.All = Object.values(RoleFlags.Flags).reduce((a, b) => a | b, RoleFlags.Default);

module.exports = RoleFlags;
