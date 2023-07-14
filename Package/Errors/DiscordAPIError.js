/**
 * Represents an error that occurs when making a request to the Discord API.
 */
class DiscordAPIError extends Error {
  /**
   * Constructs a new DiscordAPIError object.
   * @constructor
   * @param {Object} [data] - The data object containing error information.
   * @param {string} data.message - The error message.
   * @param {string} data.code - The error code.
   * @param {string} data.method - The HTTP method used for the request.
   * @param {number} data.httpError - The HTTP error code.
   * @param {string} data.path - The path of the request.
   * @param {Object} data.rawError - The raw error object.
   * @param {string[]} data.rawError.errors - The array of error messages.
   * @param {string} data.rawError.error - The error message.
   * @param {string} data.requestData  The request data
   */
  constructor(data = {}) {
    super(data.message);
    this.name = `DiscordAPIError[${data.code}]`;
    this.code = data.code;
    this.method = data.method;
    this.httpError = data.httpError;
    this.path = data.path;
    this.rawError = data.rawError?.errors ?? data.rawError?.error ?? data.rawError?.message ?? this.message;
    this.requestData = data.requestData ?? {};
  }
}

module.exports = DiscordAPIError;
