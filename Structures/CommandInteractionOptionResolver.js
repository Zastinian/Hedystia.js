const Base = require("../Base/base");
const MessageAttachment = require("../Builders/MessageAttachment");
const { OptionType, ApplicationCommandTypes } = require("../Util/Constants");
class CommandInteractionOptionResolver extends Base {
  constructor(data = {}, guildId, channelId, client) {
    super(client);
    this.data = data;
    this.options = data.options ?? [];
    this.guildId = guildId;
    this.channelId = channelId;
  }

  _parse(options = this.options) {
    if ([2, 3].includes(this.data?.type)) return null;
    if (!options?.length) return null;
    if (options[0]?.type === 2) return this._parse(options[0].options);
    if (options[0]?.type === 1) return this._parse(options[0].options);
    return options;
  }

  getString(name, required = false) {
    const options = this._parse(this.options);
    if (!options?.length) return null;
    const filter = options?.find((o) => name === o.name);
    if (filter) {
      if (filter.type !== 3)
        throw new RangeError(
          `El tipo de opción debe ser del tipo STRING, received=${
            OptionType[filter.type]
          }`
        );
      return filter.value ?? null;
    }

    if (required)
      throw new RangeError(
        `El nombre de la opción no coincide con la opción seleccionada`
      );
    return null;
  }

  getNumber(name, required = false) {
    const options = this._parse(this.options);
    if (!options?.length) return null;
    const filter = options?.find((o) => name === o.name);
    if (filter) {
      if (filter.type !== 10)
        throw new RangeError(
          `El tipo de opción debe ser NÚMERO, received=${
            OptionType[filter.type]
          }`
        );
      return filter.value ?? null;
    }

    if (required)
      throw new RangeError(
        `El nombre de la opción no coincide con la opción seleccionada`
      );
    return null;
  }

  getInteger(name, required = false) {
    const options = this._parse(this.options);
    if (!options?.length) return null;
    const filter = options?.find((o) => name === o.name);
    if (filter) {
      if (filter.type !== 4)
        throw new RangeError(
          `Option type must be INTEGER, received=${OptionType[filter.type]}`
        );
      return filter.value ?? null;
    }

    if (required)
      throw new RangeError(
        `El nombre de la opción no coincide con la opción seleccionada`
      );
    return null;
  }

  getBoolean(name, required = false) {
    const options = this._parse(this.options);
    if (!options?.length) return null;
    const filter = options?.find((o) => name === o.name);
    if (filter) {
      if (filter.type !== 5)
        throw new RangeError(
          `El tipo de opción debe ser BOOLEAN, received=${
            OptionType[filter.type]
          }`
        );
      return filter.value ?? null;
    }

    if (required)
      throw new RangeError(
        `El nombre de la opción no coincide con la opción seleccionada`
      );
    return null;
  }

  getAttachment(required = false) {
    const options = this._parse(this.options);
    if (!options?.length) return null;
    const filter = options.find((o) => o.type === 11);
    if (filter) {
      return new MessageAttachment(
        null,
        this.data.resolved?.attachments[filter.value]
      );
    }

    if (required) throw new RangeError(`La opción no incluye un attach`);
    return null;
  }

  getUser(name, required = false) {
    const options = this._parse(this.options);
    if (!options?.length) return null;
    const filter = options.find((o) => o.name === name);
    if (filter) {
      if (filter.type !== 6)
        throw new RangeError(
          `Option type must be USER, received=${OptionType[filter.type]}`
        );
      return this.client.users._add(this.data.resolved?.users[filter.value], {
        cache: false,
      });
    }

    if (required)
      throw new RangeError(
        `El nombre de la opción no coincide con la opción especificada`
      );
    return null;
  }

  getMember(name, required = false) {
    const options = this._parse(this.options);
    if (!options?.length) return null;
    const filter = options.find((o) => o.name === name);
    if (filter) {
      if (filter.type !== 6)
        throw new RangeError(
          `Option type must be USER, received=${OptionType[filter.type]}`
        );
      return this.guild?.members._add(
        this.data.resolved?.members[filter.value],
        this.guildId,
        { cache: true }
      );
    }

    if (required)
      throw new RangeError(
        `El nombre de la opción no coincide con la opción especificada`
      );
    return null;
  }

  getContextUser() {
    if (!this.data) return null;
    if (this.data.resolved && this.data?.type !== 2)
      throw new RangeError(
        `Se espera que sea un usuario de contexto. Received=${
          ApplicationCommandTypes[this.data?.type]
        }`
      );
    const user = this.data.resolved?.users[this.data.target_id];
    return this.client.users._add(user, { cache: false });
  }

  getMessage() {
    if (!this.data) return null;
    if (this.data.resolved && this.data.type !== 3)
      throw new RangeError(
        `Expected to be Context Message. Received=${
          ApplicationCommandTypes[this.data?.type]
        }`
      );
    const message = this.data.resolved?.messages[this.data.target_id];
    const manager = this.channel?.messages._add(
      message,
      this.guildId,
      this.channelId,
      { cache: false }
    );
    return manager;
  }

  getChannel(name, required = false) {
    const options = this._parse(this.options);
    if (!options?.length) return null;
    const filter = options.find((o) => o.name === name);
    if (filter) {
      if (filter.type !== 7)
        throw new RangeError(
          `El tipo de opción debe ser CANAL, received=${
            OptionType[filter.type]
          }`
        );
      return this.client.channels._add(
        this.data.resolved?.channels[filter.value],
        this.guildId,
        { cache: false }
      );
    }

    if (required)
      throw new RangeError(
        `El nombre de la opción debe coincidir con la opción seleccionada`
      );
    return null;
  }

  getRole(name, required = false) {
    const options = this._parse(this.options);
    if (!options?.length) return null;
    const filter = options.find((o) => o.name === name);
    if (filter) {
      if (filter.type !== 8)
        throw new RangeError(
          `El tipo de opción debe ser ROLE, received=${OptionType[filter.type]}`
        );
      return this.client.roles._add(
        this.data.resolved?.roles[filter.value],
        this.guildId,
        { cache: false }
      );
    }

    if (required)
      throw new RangeError(
        `El nombre de la opción debe coincidir con la opción seleccionada`
      );
    return null;
  }

  getMentionable(name, required = false) {
    const options = this._parse(this.options);
    if (!options?.length) return null;
    const filter = options.find((o) => o.name === name);
    if (filter) {
      if (filter.type !== 9)
        throw new RangeError(
          `El tipo de opción debe ser MENCIONABLE, received=${
            OptionType[filter.type]
          }`
        );
      if (this.data.resolved?.hasOwnProperty("users") && !this.guildId)
        return this.client.users._add(this.data.resolved?.users[filter.value], {
          cache: false,
        });
      if (this.data.resolved?.hasOwnProperty("members"))
        return this.guild?.members._add(
          Object.assign(this.data.resolved?.members[filter.value], {
            id: filter.value,
          }),
          this.guildId,
          { cache: false }
        );
      if (this.data.resolved?.hasOwnProperty("roles"))
        return this.client.roles._add(
          this.data.resolved?.roles[filter.value],
          this.guildId,
          { cache: false }
        );
      return null;
    }

    if (required)
      throw new RangeError(
        `El nombre de la opción debe coincidir con la opción seleccionada`
      );
    return null;
  }

  getSubCommand(required = false) {
    const option = this.options;
    if (!option?.length) return null;
    const filter =
      option[0].options?.find((o) => o.type === 1) ??
      option?.find((o) => o.type === 1);
    if (filter) {
      return filter.name;
    }

    if (required) throw new RangeError(`La opción no tiene un SUB_COMMAND`);
    return null;
  }

  getSubCommandGroup(required = false) {
    const option = this.options;
    if (!option?.length) return null;
    const filter = option.find((o) => o.type === 2);
    if (filter) {
      return filter.name;
    }

    if (required)
      throw new RangeError(`La opción no tiene un SUB_COMMAND_GROUP`);
    return null;
  }

  get guild() {
    return this.client.guilds._add(this.guildId);
  }

  get channel() {
    return this.client.channels._add(this.channelId);
  }
}

module.exports = CommandInteractionOptionResolver;
