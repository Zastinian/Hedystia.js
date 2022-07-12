const Bits = require("./Bits");

class Intents extends Bits() {}

Intents.FLAGS = {
  Servidores: 1 << 0,
  Miembros: 1 << 1,
  Baneos: 1 << 2,
  Emojis: 1 << 3,
  Integraciones: 1 << 4,
  Webhooks: 1 << 5,
  Invitaciones: 1 << 6,
  Voz: 1 << 7,
  Presencias: 1 << 8,
  Mensajes: 1 << 9,
  Reacciones: 1 << 10,
  Escribiendo: 1 << 11,
  MensajeDirecto: 1 << 12,
  ReaccionesPrivadas: 1 << 13,
  EscribiendoPrivado: 1 << 14,
  ContenidoDelMensaje: 1 << 15,
  EventosProgramados: 1 << 16,
  ConfiguracionDeAutoModeracion: 1 << 20,
  AccionesDeAutoModeracion: 1 << 21,
};

Intents.default =
  Intents.FLAGS.Servidores |
  Intents.FLAGS.Miembros |
  Intents.FLAGS.ContenidoDelMensaje |
  Intents.FLAGS.Emojis;

module.exports = Intents;
