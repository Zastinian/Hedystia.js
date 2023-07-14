/**
 * Custom error class for WebSocket errors.
 */
class WebsocketError extends Error {
  /**
   * Constructs a new instance of the Error class.
   * @constructor
   * @param {Object} [error] - The error object containing the error message, code, and raw error.
   * @param {string} [error.message] - The error message.
   * @param {number} [error.code] - The error code.
   * @param {Object} [error.rawError] - The raw error object.
   */
  constructor(error = {}) {
    super(error.message);
    this.code = error.code;
    this.rawError = error.rawError ?? {};
  }
}

module.exports = WebsocketError;
