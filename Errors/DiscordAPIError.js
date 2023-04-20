/**
 * It's a class that extends the Error class and has a constructor that takes an object as an argument
 * @module DiscordAPIError
 */
class DiscordAPIError extends Error {
  /**
   * This is a constructor function that creates an error object with various properties based on the
   * input data.
   * @param [data] - An object containing information about the error, including the error message,
   * error code, HTTP method used, HTTP error status, request path, raw error data, and request data.
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
