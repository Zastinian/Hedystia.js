/**
 * It's a custom error class that extends the built-in Error class
 * @module BitfieldInvalid
 */
class BitfieldInvalid extends Error {
  constructor(data) {
    super(data.message);
    this.bit = data.bit;
    this.name = `BitfieldInvalid[${this.bit}]`;
  }
}

module.exports = BitfieldInvalid;
