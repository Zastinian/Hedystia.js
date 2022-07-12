"use strict";

const Heartbeat = require("./Heartbeater");
const Payloads = require("./Payloads");

function message(client, rawData) {
  const data = JSON.parse(rawData);

  const opcode = data.op;
  const eventData = data.d;
  const eventName = data.t;
  const sequence = data.s;

  if (!client.api.should_resume) client.api.sequence = sequence ?? null;

  switch (opcode) {
    case 0:
      client.actions.loaded[eventName]?.handle(client, eventData);
      break;

    case 9:
      if (client.api.should_resume) break;
      client.ws.connection?.close(4000);
      Heartbeat.stop(client);
      client.reconnect();
      break;

    case 10:
      if (client.api.should_resume) {
        Payloads.sendResume(client);
        client.api.should_resume = false;
        client.api.heartbeat_interval = eventData.heartbeat_interval;
        client.emit(
          "debug",
          `[DEBUG] Latidos definidos para ${eventData.heartbeat_interval}ms. Empezando a latir el corazón.`
        );
        client.api.heartbeat_acked = true;

        client.ready = true;
        Heartbeat.start(client);
        Heartbeat.sendImmediately(client);
        break;
      }

      client.api.heartbeat_interval = eventData.heartbeat_interval;
      client.emit(
        "debug",
        `[DEBUG] Latidos definidos para ${eventData.heartbeat_interval}ms. Empezando a latir el corazón.`
      );

      client.api.heartbeat_acked = true;

      Heartbeat.start(client);
      Payloads.sendIdentify(client);
      break;
    case 11:
      client.emit("debug", "[DEBUG] Received heartbeat ACK.");
      client.api.last_heartbeat_ack = Date.now();
      client.api.heartbeat_acked = true;
      client.ping = client.api.last_heartbeat_ack - client.api.last_heartbeat;
      break;
  }
}

module.exports = {
  message,
};
