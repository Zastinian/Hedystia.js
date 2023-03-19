/**
 * It's a class that extends the Error class and adds a code and rawError property to it.
 * @module WebsocketError
 */
class WebsocketError extends Error {
  constructor(error = {}) {
    super(error.message);
    this.code = error.code;
    this.rawError = error.rawError ?? {};
  }
}

module.exports = WebsocketError;
