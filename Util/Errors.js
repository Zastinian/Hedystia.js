module.exports.kCode = Symbol("code");
module.exports.create = (Base) => {
  return class YokoError extends Base {
    constructor(key, ...args) {
      super(module.exports.createMessage(key, ...args));
      this[module.exports.kCode] = key;

      if (Error.captureStackTrace) Error.captureStackTrace(this, YokoError);
    }

    get code() {
      return this[module.exports.kCode];
    }

    get name() {
      return `${super.name} [${this[module.exports.kCode]}]`;
    }
  };
};
module.exports.createMessage = (key, ...args) => {
  if (typeof key !== "string")
    throw new TypeError("La clave debe ser una cadena.");

  const msg = module.exports.Messages[key];

  if (!msg) throw new Error("Clave no válida proporcionada.");

  if (typeof msg === "function") return msg(...args);
  if (!args?.length || typeof msg === "string") return msg;

  args.unshift();
  return String(...args);
};
module.exports.Messages = {
  INVALID_TOKEN: "Token inválido proporcionado.",
  SHARDING_INVALID_EVAL: "El script a evaluar debe ser una función.",
  SHARDING_NO_SHARDS: "No se han generado shards.",
  SHARDING_IN_PROCESS: "Se siguen generando shards.",
  CLUSTER_INVALID:
    "Se ha proporcionado una configuración de cluster no válida.",
  CLUSTER_NO_CLUSTERS: "No se han generado grupos.",
  CLUSTER_IN_PROCESS: "Se siguen generando grupos.",
  CLUSTER_INVALID_EVAL: "El script a evaluar debe ser una función",
  CLUSTER_IS_PRIMARY:
    "Los clústeres no pueden ser generados desde un gestor de clústeres primario.",
  INVALID_INTENTS: "Intents no válidos proporcionados.",
  INVALID_MESSAGE_CONTENT: "Contenido del mensaje no válido.",
  HTTPS_ERROR: (err) => err,
  INVALID_BIT: (bit) => `El bit ${bit} no es válido.`,
  INVALID_OPTION: (prop, must) => `La opción ${prop} debe ser ${must}`,
  HARDING_ALREADY_SPAWNED: (count) => `Ya se han generado ${count} shards.`,
  SHARDING_INVALID_SHARD_ID: (id) => `El shard ${id} no existe.`,
  SHARDING_PROCESS_EXISTS: (id) => `El shard ${id} ya tiene un proceso activo.`,
  SHARDING_WORKER_EXISTS: (id) =>
    `El shard ${id} ya tiene un trabajador activo.`,
  SHARDING_READY_TIMEOUT: (id) =>
    `El Cliente del shard ${id} tardó demasiado en estar listo.`,
  SHARDING_READY_DISCONNECTED: (id) =>
    `El cliente del shard ${id} se ha desconectado antes de estar listo.`,
  SHARDING_READY_DIED: (id) =>
    `El proceso del shard ${id} salió antes de que su Cliente estuviera listo.`,
  SHARDING_NO_CHILD_EXISTS: (id) =>
    `El shard ${id} no tiene ningún proceso o trabajador activo.`,
  SHARDING_SHARD_MISCALCULATION: (shard, guild, count) =>
    `Se ha calculado el shard inválido ${shard} para el gremio ${guild} con ${count} shards.`,
  CLUSTER_INVALID_CLUSTER_ID: (id) => `El cluster ${id} no existe.`,
  CLUSTER_ALREADY_SPAWNED: (count) => `Ya se han generado ${count} clusters.`,
  CLUSTER_PROCESS_EXISTS: (id) =>
    `El cluster ${id} ya tiene un proceso activo.`,
  CLUSTER_WORKER_EXISTS: (id) =>
    `El cluster ${id} ya tiene un trabajador activo.`,
  CLUSTER_READY_TIMEOUT: (id) =>
    `El Cliente del clúster ${id} tardó demasiado en estar listo.`,
  CLUSTER_READY_DISCONNECTED: (id) =>
    `El cliente del clúster ${id} se ha desconectado antes de estar listo.`,
  CLUSTER_READY_DIED: (id) =>
    `El proceso del clúster ${id} salió antes de que su Cliente estuviera listo.`,
  CLUSTER_NO_CHILD_EXISTS: (id) =>
    `El cluster ${id} no tiene ningún proceso o trabajador activo.`,
  CLUSTER_CLUSTER_MISCALCULATION: (cluster, guild, clusterCount, shardCount) =>
    `Cluster inválido calculado ${cluster} para el servidor ${guild} con ${clusterCount} clusters y ${shardCount} shards.`,
  CLUSTER_SHARD_MISCALCULATION: (shard, guild, clusterCount, shardCount) =>
    `Shard inválido calculado ${shard} para el servidor ${guild} con ${clusterCount} clusters y ${shardCount} shards.`,
  DISCORD_API_ERROR: (message, url, method, body) =>
    `${message}\nPuntoFinal: ${url}\nMétodo: ${method}${
      body ? `\nBody: \n${JSON.stringify(body, null, "\t")}` : ""
    }`,
};
module.exports.addMessage = (key, value) => {
  module.exports.Messages[key] = value;
};
module.exports.Error = this.create(Error);
module.exports.TypeError = this.create(TypeError);
module.exports.RangeError = this.create(RangeError);
