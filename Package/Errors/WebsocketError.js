/**
 * It's a class that extends the Error class and adds a code and rawError property to it.
 * @module WebsocketError
 */
class WebsocketError extends Error {
  /**
   * This is a constructor function that sets properties for an error object.
   * @param [error] - The `error` parameter is an object that contains information about an error that
   * occurred. It may have the following properties:
   */
  constructor(error = {}) {
    super(error.message);
    this.code = error.code;
    this.rawError = error.rawError ?? {};
  }
}

module.exports = WebsocketError;
