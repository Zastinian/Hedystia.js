const Bitfield = require("./Bitfield");

class Intents extends Bitfield {
  constructor(...bit) {
    super(bit);
  }
}

Intents.FLAGS = {
  Servidores: 1n << 0n,
  Miembros: 1n << 1n,
  Baneos: 1n << 2n,
  Emojis: 1n << 3n,
  Integraciones: 1n << 4n,
  Webhooks: 1n << 5n,
  Invitaciones: 1n << 6n,
  Voz: 1n << 7n,
  Presencias: 1n << 8n,
  Mensajes: 1n << 9n,
  Reacciones: 1n << 10n,
  Escribiendo: 1n << 11n,
  MensajeDirecto: 1n << 12n,
  ReaccionesPrivadas: 1n << 13n,
  EscribiendoPrivado: 1n << 14n,
  ContenidoDelMensaje: 1n << 15n,
  EventosProgramados: 1n << 16n,
  ConfiguracionDeAutoModeracion: 1n << 20n,
  AccionesDeAutoModeracion: 1n << 21n,
};

Intents.DEFAULT = 0n;

Intents.ALL = Object.values(Intents.FLAGS).reduce(
  (a, b) => a | b,
  Intents.DEFAULT
);

module.exports = Intents;
