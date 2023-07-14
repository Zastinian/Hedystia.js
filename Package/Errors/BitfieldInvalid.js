/**
 * Custom error class for representing an invalid bitfield.
 */
class BitfieldInvalid extends Error {
  /**
   * Constructs a new instance of the BitfieldInvalid error.
   * @param {Object} data - The data object containing the error message and bit value.
   * @param {string} data.message - The error message.
   * @param {number} data.bit - The invalid bit value.
   */
  constructor(data) {
    super(data.message);
    this.bit = data.bit;
    this.name = `BitfieldInvalid[${this.bit}]`;
  }
}

module.exports = BitfieldInvalid;
