const DiscordAPIError = require("../Errors/DiscordAPIError");
const FormData = require("form-data");
const https = require("node:https");
const got = (...args) => import("got").then(({default: got}) => got(...args));
/**
 * Represents a REST client for making HTTP requests.
 * @class
 * @param {object} client - The client object.
 */
class REST {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Object} client - The client object to be assigned to the "client" property.
   */
  constructor(client) {
    Object.defineProperty(this, "client", {
      value: client,
    });
  }

  /**
   * Sets the token value for the current instance of the class.
   * @param {string} token - The token value to set.
   * @returns {Object} - The current instance of the class.
   */
  setToken(token) {
    this.token = token;
    return this;
  }

  /**
   * Makes an HTTP request to the specified URL with the given options.
   * @param {string} url - The URL to make the request to.
   * @param {Object} [options] - The options for the request.
   * @returns {Promise<Object>} - A promise that resolves to the response from the request.
   * @throws {DiscordAPIError} - If the response status code is not 201, 200, or 204.
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
   * Sends a GET request to the specified URL with optional request options.
   * @param {string} url - The URL to send the GET request to.
   * @param {object} [options] - Optional request options.
   * @returns {Promise} A promise that resolves to the response of the GET request.
   */
  async get(url, options = {}) {
    return this._make(url, {
      method: "GET",
      ...options,
    });
  }

  /**
   * Sends a POST request to the specified URL with the given options.
   * @param {string} url - The URL to send the POST request to.
   * @param {object} [options] - Additional options for the request.
   * @returns {Promise} A promise that resolves to the response of the request.
   */
  async post(url, options = {}) {
    return this._make(url, {
      method: "POST",
      ...options,
    });
  }

  /**
   * Sends a DELETE request to the specified URL with optional request options.
   * @param {string} url - The URL to send the DELETE request to.
   * @param {object} [options] - Optional request options.
   * @returns {Promise} A promise that resolves to the response of the DELETE request.
   */
  async delete(url, options = {}) {
    return this._make(url, {
      method: "DELETE",
      ...options,
      body: {},
    });
  }

  /**
   * Sends a PUT request to the specified URL with the given options.
   * @param {string} url - The URL to send the PUT request to.
   * @param {object} [options] - Additional options for the request.
   * @returns {Promise} A promise that resolves with the response from the server.
   */
  async put(url, options = {}) {
    return this._make(url, {
      method: "PUT",
      ...options,
    });
  }

  /**
   * Sends a PATCH request to the specified URL with the given options.
   * @param {string} url - The URL to send the PATCH request to.
   * @param {object} [options] - Additional options for the request.
   * @returns {Promise} A promise that resolves with the response from the server.
   */
  async patch(url, options = {}) {
    return this._make(url, {
      method: "PATCH",
      ...options,
    });
  }

  get root() {
    return `https://discord.com/api/v${this.version}`;
  }
}

module.exports = REST;
