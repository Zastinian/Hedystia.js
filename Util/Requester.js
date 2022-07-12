"use strict";

const fetch = (...args) =>
  import("node-fetch").then(({ default: nodefetch }) => nodefetch(...args));
const {
  verifyForStatusCode,
  verifyForJSONStatusCode,
} = require("./CheckAPIError");
const { apiUrl } = require("../Constant/DiscordEndPoints");

class Requester extends null {
  static async create(
    client,
    endpoint,
    method = "GET",
    parseHeaders = true,
    data = undefined,
    headers = {}
  ) {
    let parsedHeaders = headers;
    if (parseHeaders) {
      parsedHeaders = {
        Authorization: `Bot ${client.token}`,
        "Content-Type": "application/json",
        "User-Agent": `Cliente (https://github.com/Zastinian/Cliente-De-Discord/, ${
          require("../index").version
        })`,
        ...headers,
      };
    }

    const body = typeof data === "object" ? JSON.stringify(data) : data;
    const fetchData = await fetch(
      `${apiUrl(client.options.apiVersion)}${endpoint}`,
      {
        method,
        headers: parsedHeaders,
        body,
      }
    );

    let json = null;
    try {
      json = await fetchData.json();
    } catch {
      verifyForStatusCode(
        `${apiUrl(client.options.apiVersion)}${endpoint}`,
        data,
        fetchData.status
      );
      return fetchData;
    }
    json ??= {};
    if (json.code)
      verifyForJSONStatusCode(
        json,
        `${apiUrl(client.options.apiVersion)}${endpoint}`,
        data,
        method
      );
    verifyForStatusCode(
      `${apiUrl(client.options.apiVersion)}${endpoint}`,
      data,
      fetchData.status,
      method
    );

    return json;
  }
}

module.exports = Requester;
