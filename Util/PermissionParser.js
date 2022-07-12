"use strict";

const PermissionsBitfield = require("../Constant/Permissions");

class Permissions extends null {
  static parse(bitfield = 0) {
    const final = [];

    for (const permission in PermissionsBitfield) {
      if (
        (PermissionsBitfield[permission] & bitfield) ===
        PermissionsBitfield[permission]
      ) {
        final.push(permission);
      }
    }

    return final;
  }
}

module.exports = Permissions;
