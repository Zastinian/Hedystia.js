const Bitfield = require("./Bitfield");

class RoleFlags extends Bitfield {
  constructor(...bit) {
    super(bit);
  }
}

RoleFlags.FLAGS = {
  IN_PROMPT: 1n << 0n,
};

RoleFlags.DEFAULT = 0n;

RoleFlags.ALL = Object.values(RoleFlags.FLAGS).reduce(
  (a, b) => a | b,
  RoleFlags.DEFAULT
);

module.exports = RoleFlags;
