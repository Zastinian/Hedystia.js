/**
 * It takes a snowflake and returns an object with the snowflake's creation date, timestamp, worker ID,
process ID, increment, and binary
 * @module Snowflake
 */
class Snowflake {
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
