const Bitfield = require("./Bitfield");
class Permissions extends Bitfield {
  constructor(...bit) {
    super(bit);
  }
}

Permissions.FLAGS = {
  CrearInvitacion: 1n << 0n,
  Expulsar: 1n << 1n,
  Banear: 1n << 2n,
  Administrador: 1n << 3n,
  GestionarCanales: 1n << 4n,
  GestionarServidor: 1n << 5n,
  AñadirReacciones: 1n << 6n,
  VerRegistroDeAuditoria: 1n << 7n,
  PrioridadAlHablar: 1n << 8n,
  Transmitir: 1n << 9n,
  VerCanal: 1n << 10n,
  EnviarMensajes: 1n << 11n,
  EnviarMensajesTTS: 1n << 12n,
  GestionarMensajes: 1n << 13n,
  Embeds: 1n << 14n,
  AdjuntarArchivos: 1n << 15n,
  VerHistorialDeMensajes: 1n << 16n,
  MencionarEveryone: 1n << 17n,
  UsarEmojisExternos: 1n << 18n,
  VerInformacionDelServidor: 1n << 19n,
  Conectar: 1n << 20n,
  Hablar: 1n << 21n,
  SilenciarMiembros: 1n << 22n,
  EnsordecerMiembros: 1n << 23n,
  MoverMiembros: 1n << 24n,
  UsarVAD: 1n << 25n,
  CambiarApodo: 1n << 26n,
  GestionarApodos: 1n << 27n,
  GestionarRoles: 1n << 28n,
  GestionarWebhooks: 1n << 29n,
  GestionarEmojis: 1n << 30n,
  UsarComandosDeBarra: 1n << 31n,
  SolicitarHablar: 1n << 32n,
  GestionarHilos: 1n << 34n,
  CrearHilosPublicos: 1n << 35n,
  CrearHilosPrivados: 1n << 36n,
  UsarEmojisExternos: 1n << 37n,
  EnviarMensajesEnHilos: 1n << 38n,
  InciarActividadesEmbed: 1n << 39n,
  ModerarMiembros: 1n << 40n,
  AnalisisDeMonetizacionDeCreadores: 1n << 41n,
};

Permissions.DEFAULT = 0n;

Permissions.ALL = Object.values(Permissions.FLAGS).reduce(
  (a, b) => a | b,
  Permissions.DEFAULT
);

module.exports = Permissions;
