/**
 * Represents a Snowflake, a unique identifier used in distributed systems.
 * @class
 */
class Snowflake {
  /**
   * Deconstructs a Discord snowflake into its individual components.
   * @param {string} snowflake - The snowflake to deconstruct.
   * @returns {Object} An object containing the deconstructed components of the snowflake:
   * - createdAt: The date and time when the snowflake was created.
   * - timestamp: The timestamp of the snowflake.
   * - workerId: The ID of the worker that generated the snowflake.
   * - processId: The ID of the process that generated the snowflake.
   * - increment: The increment portion of the snowflake.
   * - binary: The binary representation of the snowflake.
   */
  static deconstruct(snowflake) {
    const bigIntSnowflake = BigInt(snowflake);
    return {
      createdAt: new Date(Number(bigIntSnowflake >> 22n) + Snowflake.EPOCH),
      timestamp: Number(bigIntSnowflake >> 22n) + Snowflake.EPOCH,
      workerId: Number((bigIntSnowflake >> 17n) & 0b11111n),
      processId: Number((bigIntSnowflake >> 12n) & 0b11111n),
      increment: Number(bigIntSnowflake & 0b111111111111n),
      binary: bigIntSnowflake.toString(2).padStart(64, "0"),
    };
  }

  /**
   * Generates a unique ID based on the given timestamp.
   * @param {number | Date} [timestamp=Date.now()] - The timestamp to generate the ID from.
   * @returns {string} - The generated unique ID.
   * @throws {TypeError} - If the timestamp is not a number or a valid Date object.
   */
  static generate(timestamp = Date.now()) {
    if (timestamp instanceof Date) timestamp = timestamp.getTime();
    if (typeof timestamp !== "number" || isNaN(timestamp)) {
      throw new TypeError(`"timestamp" must be a number (received ${isNaN(timestamp) ? "NaN" : typeof timestamp})`);
    }

    if (INCREMENT >= 4095n) INCREMENT = BigInt(0);

    return ((BigInt(timestamp - EPOCH) << 22n) | (1n << 17n) | INCREMENT++).toString();
  }
}

Snowflake.EPOCH = 1420070400000;

module.exports = Snowflake;
