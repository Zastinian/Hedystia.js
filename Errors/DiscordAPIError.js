class DiscordAPIError extends Error {
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
