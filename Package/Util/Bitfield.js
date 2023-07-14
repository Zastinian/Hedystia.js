const BitfieldInvalid = require("../Errors/BitfieldInvalid");

class Bitfield {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {number} [bit=this.constructor.defaultBit] - The bit value to initialize the instance with.
   */
  constructor(bit = this.constructor.defaultBit) {
    this.bitfield = this.constructor.resolve(bit);
  }

  /**
   * Checks if any of the given bit(s) are set in the bitfield.
   * @param {...bigint} bit - The bit(s) to check.
   * @returns {boolean} True if any of the given bit(s) are set, false otherwise.
   */
  any(...bit) {
    return (this.bitfield & this.constructor.resolve(bit)) !== this.constructor.defaultBit;
  }

  /**
   * Checks if the given bit(s) are set in the bitfield.
   * @param {...bigint} bit - The bit(s) to check.
   * @returns {boolean} True if the bit(s) are set, false otherwise.
   */
  has(...bit) {
    bit = this.constructor.resolve(bit);
    return (this.bitfield & bit) === bit;
  }

  /**
   * Adds one or more bit(s) to the current bitfield.
   * @param {...bigint} bit - The bit(s) to add.
   * @returns {this} The modified instance of the class.
   */
  add(...bit) {
    bit = this.constructor.resolve(bit);
    this.bitfield |= bit;
    return this;
  }

  /**
   * Removes one or more bits from the bitfield.
   * @param {...bigint} bits - The bits to remove from the bitfield.
   * @returns {Bitfield} A new Bitfield object with the specified bits removed.
   */
  remove(...bits) {
    let total = this.constructor.defaultBit;
    for (const bit of bits) {
      total |= this.constructor.resolve(bit);
    }

    if (Object.isFrozen(this)) return new this.cache.constructor(total & ~total);
    this.bitfield &= ~total;
    return this;
  }

  /**
   * Converts the flags of an object into an array of keys.
   * @returns {Array} An array of keys representing the flags that are set in the object.
   */
  toArray() {
    return Object.keys(this.constructor.Flags).filter((o) => this.has(o));
  }

  /**
   * Returns a string representation of the bitfield.
   * @returns {string} - The string representation of the bitfield.
   */
  toString() {
    return this.bitfield.toString();
  }

  /**
   * Serializes the current object into a JSON object.
   * @returns {Object} - The serialized object.
   */
  serialize() {
    let obj = {};
    for (let [index, val] of Object.entries(this.constructor.Flags)) {
      if (this.has(index)) {
        obj[index] = val;
      }
    }

    return obj;
  }

  /**
   * Freezes the current object, making it immutable.
   * @returns None
   */
  freeze() {
    return Object.freeze(this);
  }

  /**
   * Resolves a bit value based on the given input.
   * @param {any} bit - The bit value to resolve.
   * @returns {number | bigint} - The resolved bit value.
   * @throws {BitfieldInvalid} - If the specified bitfield is invalid or not found.
   */
  static resolve(bit) {
    const {defaultBit} = this;
    if (typeof defaultBit === typeof bit && bit >= defaultBit) return bit;
    if (bit instanceof Bitfield) return bit.bitfield;
    if (Array.isArray(bit)) return bit?.map((o) => this.resolve(o)).reduce((a, b) => a | b, defaultBit);
    if (typeof bit === "string") {
      if (typeof this.Flags[bit] !== "undefined") return this.Flags[bit];
      if (!isNaN(bit)) return typeof defaultBit === "bigint" ? BigInt(bit) : Number(bit);
    }

    throw new BitfieldInvalid({
      message: `The bifield you have specified is invalid or not found.`,
      bit: bit,
    });
  }
}

/**
 * An empty object representing a set of flags for a bitfield.
 * @type {object}
 */
Bitfield.Flags = {};

/**
 * Sets the default bit value for the Bitfield class.
 * @param {bigint} defaultBit - The default bit value to set.
 */
Bitfield.defaultBit = 0n;

module.exports = Bitfield;
