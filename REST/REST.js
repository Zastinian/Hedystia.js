const DiscordAPIError = require("../Errors/DiscordAPIError");
const https = require("node:https");
/**
 * It's a class that makes requests to the Discord API
 * @module REST
 */
class REST {
  constructor(client) {
    Object.defineProperty(this, "client", {
      value: client,
    });
  }

  setToken(token) {
    this.token = token;
    return this;
  }

  async _make(url, options = {}) {
    const agent = new https.Agent({keepAlive: true});
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), this.client.restRequestTimeout).unref();
    let headers = {
      "content-type": options.contentType,
      authorization: options.headers?.["authorization"] ?? this.client.token ?? this.token,
    };

    let body;
    if (options["reason"]) headers["X-Audit-Log-Reason"] = options["reason"];
    if (options.body) {
      if (options.body?.constructor?.name === "FormData") {
        headers = Object.assign(headers, options.body.getHeaders());
        body = options.body;
      } else {
        headers["content-type"] = "application/json";
        if (typeof options.body === "string") body = options.body;
        else body = JSON.stringify(options.body);
      }
    }
    if (options.query) {
      const URL = new URLSearchParams();
      for (let [key, val] of Object.entries(options.query)) {
        if (!val) continue;
        if (Array.isArray(val)) URL.set(key, val.join(","));
        else URL.append(key, val);
      }
      if ([...URL.values()]?.length > 0) url = url.concat(`?${decodeURIComponent(URL)}`);
    }

    let responseHeader = {
      method: options.method,
      agent,
      body,
      headers,
      signal: controller.signal,
    };
    const response = await fetch(url, responseHeader).finally(() => clearTimeout(timeout));
    const result = response.status !== 204 ? await response.json() : null;
    if (![201, 200, 204].includes(response.status))
      throw new DiscordAPIError({
        code: result.code ?? 0,
        httpError: response.status,
        method: options.method,
        message: result.message,
        path: url,
        rawError: result,
        requestData: options.body,
      });

    return result;
  }

  async get(url, options = {}) {
    return this._make(url, {
      method: "GET",
      ...options,
    });
  }

  async post(url, options = {}) {
    return this._make(url, {
      method: "POST",
      ...options,
    });
  }

  async delete(url, options = {}) {
    return this._make(url, {
      method: "DELETE",
      ...options,
      body: {},
    });
  }

  async put(url, options = {}) {
    return this._make(url, {
      method: "PUT",
      ...options,
    });
  }

  async patch(url, options = {}) {
    return this._make(url, {
      method: "PATCH",
      ...options,
    });
  }
}

module.exports = REST;
