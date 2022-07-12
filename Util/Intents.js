"use strict";

class Intents extends null {
  static parse(intents) {
    if (typeof intents === "number") return intents;
    if (!Array.isArray(intents))
      throw new Error("Los intents deben ser un array o un número");

    let finalIntents = 0;
    for (const intent of intents) {
      switch (intent) {
        case "Servidores":
          finalIntents |= 1 << 0;
          break;
        case "Miembros":
          finalIntents |= 1 << 1;
          break;
        case "Baneos":
          finalIntents |= 1 << 2;
          break;
        case "Emojis":
          finalIntents |= 1 << 3;
          break;
        case "Integraciones":
          finalIntents |= 1 << 4;
          break;
        case "Webhooks":
          finalIntents |= 1 << 5;
          break;
        case "Invitaciones":
          finalIntents |= 1 << 6;
          break;
        case "Voz":
          finalIntents |= 1 << 7;
          break;
        case "Presencias":
          finalIntents |= 1 << 8;
          break;
        case "Mensajes":
          finalIntents |= 1 << 9;
          break;
        case "Reacciones":
          finalIntents |= 1 << 10;
          break;
        case "Escribiendo":
          finalIntents |= 1 << 11;
          break;
        case "MensajeDirecto":
          finalIntents |= 1 << 12;
          break;
        case "ReaccionesPrivadas":
          finalIntents |= 1 << 13;
          break;
        case "EscribiendoPrivado":
          finalIntents |= 1 << 14;
          break;
        case "ContenidoDelMensaje":
          finalIntents |= 1 << 15;
          break;
        case "EventosProgramados":
          finalIntents |= 1 << 16;
          break;
        case "ConfiguracionDeAutoModeracion":
          finalIntents |= 1 << 20;
          break;
        case "AccionesDeAutoModeracion":
          finalIntents |= 1 << 21;
          break;
        default:
          finalIntents |= 0;
          break;
      }
    }
    return finalIntents;
  }
}

module.exports = Intents;
