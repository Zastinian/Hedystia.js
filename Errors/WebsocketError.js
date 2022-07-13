class WebsocketError extends Error {
  constructor(error = {}) {
    super(error.message);
    this.code = error.code;
    this.rawError = error.rawError ?? {};
  }
}

module.exports = WebsocketError;
