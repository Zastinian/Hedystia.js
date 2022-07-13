class BitfieldInvalid extends Error {
  constructor(data) {
    super(data.message);
    this.bit = data.bit;
    this.name = `BitfieldInvalid[${this.bit}]`;
  }
}

module.exports = BitfieldInvalid;
