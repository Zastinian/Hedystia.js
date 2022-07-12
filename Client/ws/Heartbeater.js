"use strict";

function sendImmediately(client) {
  const heartbeatData = {
    op: 1,
    d: client.api.sequence,
  };

  client.ws.connection?.send(JSON.stringify(heartbeatData));
  client.emit("debug", "[DEBUG] Envío de latidos a Discord.");
}

function start(client) {
  if (client.api.heartbeat_timer) return;

  client.api.heartbeat_timer = setInterval(() => {
    if (!client.api.heartbeat_acked) return;

    const heartbeatData = {
      op: 1,
      d: client.api.sequence,
    };

    client.api.last_heartbeat = Date.now();
    client.api.heartbeat_acked = false;

    client.ws.connection?.send(JSON.stringify(heartbeatData));
    client.emit("debug", "[DEBUG] Envío de latidos a Discord.");
    setTimeout(() => {
      if (!client.api.heartbeat_acked) {
        client.emit(
          "debug",
          "[DEBUG] El latido del corazón no se ha detectado en 15 segundos. Reconectando..."
        );

        client.ws.connection?.close(4000);
        client.reconnect();
      }
    }, 15_000).unref();
  }, client.api.heartbeat_interval).unref();
}

function stop(client) {
  if (client.api.heartbeat_timer) clearInterval(client.api.heartbeat_timer);
  client.api.heartbeat_timer ??= null;
}

module.exports = {
  start,
  stop,
  sendImmediately,
};
