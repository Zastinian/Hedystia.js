const DiscordAPIError = require("../Errors/DiscordAPIError");
const FormData = require("form-data");
const https = require("node:https");
const got = (...args) => import("got").then(({default: got}) => got(...args));
/**
 * A class representing a REST client.
 * @class
 * @param {Object} client - The client object.
 */
class REST {
  /**
   * Create a new REST client.
   * @constructor
   * @param {Object} client - The client object.
   */
  constructor(client) {
    /**
     * The client object.
     * @type {Object}
     * @private
     */
    Object.defineProperty(this, "client", {
      value: client,
    });
  }

  /**
   * Set the token for the REST client.
   * @param {string} token - The token to set.
   * @returns {REST} The REST client instance.
   */
  setToken(token) {
    this.token = token;
    return this;
  }

  /**
   * Make a request to the server with the PATCH method
   * @param {string} url - The URL to make the request to
   * @param {Object} options - Additional options for the request
   * @returns {Promise<Object>} - The response from the server
   */
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
      if (options.body instanceof FormData || options.body?.constructor?.name === "FormData") {
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
      headers,
      body,
      agent: {
        http: agent,
        https: agent,
      },
      signal: controller.signal,
    };

    const response = await got(url, responseHeader).finally(() => clearTimeout(timeout));
    const result = response.statusCode !== 204 ? JSON.parse(response.body) : null;

    if (![201, 200, 204].includes(response.statusCode)) {
      throw new DiscordAPIError({
        code: result.code ?? 0,
        httpError: response.statusCode,
        method: options.method,
        message: result.message,
        path: url,
        rawError: result,
        requestData: options.body,
      });
    }

    return result;
  }

  /**
   * Make a request to the server with the GET method
   * @param {string} url - The URL to make the request to
   * @param {Object} options - Additional options for the request
   * @returns {Promise<Object>} - The response from the server
   */
  async get(url, options = {}) {
    return this._make(url, {
      method: "GET",
      ...options,
    });
  }

  /**
   * Make a request to the server with the POST method
   * @param {string} url - The URL to make the request to
   * @param {Object} options - Additional options for the request
   * @returns {Promise<Object>} - The response from the server
   */
  async post(url, options = {}) {
    return this._make(url, {
      method: "POST",
      ...options,
    });
  }

  /**
   * Make a request to the server with the DELETE method
   * @param {string} url - The URL to make the request to
   * @param {Object} options - Additional options for the request
   * @returns {Promise<Object>} - The response from the server
   */
  async delete(url, options = {}) {
    return this._make(url, {
      method: "DELETE",
      ...options,
      body: {},
    });
  }

  /**
   * Make a request to the server with the PUT method
   * @param {string} url - The URL to make the request to
   * @param {Object} options - Additional options for the request
   * @returns {Promise<Object>} - The response from the server
   */
  async put(url, options = {}) {
    return this._make(url, {
      method: "PUT",
      ...options,
    });
  }

  /**
   * Make a request to the server with the PATCH method
   * @param {string} url - The URL to make the request to
   * @param {Object} options - Additional options for the request
   * @returns {Promise<Object>} - The response from the server
   */
  async patch(url, options = {}) {
    return this._make(url, {
      method: "PATCH",
      ...options,
    });
  }
}

module.exports = REST;
