"use strict";

module.exports.verifyForStatusCode = (endpoint, data, code, method) => {
  switch (code) {
    case 400:
      throw new Error(
        `APIError: Mala petición (400)\nEndpoint: ${endpoint}\nMethod: ${method}\nData: ${
          data ?? "empty"
        }`
      );
    case 401:
      throw new Error(
        `APIError: No autorizado (401)\nEndpoint: ${endpoint}\nMethod: ${method}\nData: ${
          data ?? "empty"
        }`
      );
    case 403:
      throw new Error(
        `APIError: Falta de permisos (403)\nEndpoint: ${endpoint}\nMethod: ${method}\nData: ${
          data ?? "empty"
        }`
      );
    case 404:
      throw new Error(
        `APIError: No se ha encontrado (404)\nEndpoint: ${endpoint}\nMethod: ${method}\nData: ${
          data ?? "empty"
        }`
      );
  }
};

module.exports.verifyForJSONStatusCode = (
  jsonResponse,
  endpoint,
  data,
  method
) => {
  if (jsonResponse.code && jsonResponse.message) {
    throw new Error(
      `APIError: ${jsonResponse.message} (${
        jsonResponse.code
      })\nEndpoint: ${endpoint}\nMethod: ${method}\nData: ${
        typeof data === "object" ? JSON.stringify(data) : data ?? "empty"
      }`
    );
  }
};
