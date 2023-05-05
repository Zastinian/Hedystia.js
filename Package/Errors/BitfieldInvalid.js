/**
 * It's a custom error class that extends the built-in Error class
 * @module BitfieldInvalid
 */
class BitfieldInvalid extends Error {
  /**
   * This is a constructor function that sets properties for a BitfieldInvalid object.
   * @param data - The `data` parameter is an object that contains two properties: `message` and `bit`.
   * The `message` property is a string that represents the error message, and the `bit` property is a
   * number that represents the invalid bitfield. This constructor is used to create a custom error
   * object
   */
  constructor(data) {
    super(data.message);
    this.bit = data.bit;
    this.name = `BitfieldInvalid[${this.bit}]`;
  }
}

module.exports = BitfieldInvalid;
