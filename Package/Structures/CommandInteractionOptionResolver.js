const Base = require("../Base/base");
const MessageAttachment = require("../Builders/MessageAttachment");
const {OptionType, ApplicationCommandTypes} = require("../Util/Constants");
/**
 * A class that provides methods to resolve command interaction options.
 * @class CommandInteractionOptionResolver
 * @extends Base
 * @param {Object} [data] - The data object containing the command interaction options.
 * @param {string} guildId - The ID of the guild where the command interaction occurred.
 * @param {string} channelId - The ID of the channel where the command interaction occurred.
 * @param {Client} client - The client instance.
 */
class CommandInteractionOptionResolver extends Base {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Object} [data] - The data object for the instance.
   * @param {string} guildId - The ID of the guild.
   * @param {string} channelId - The ID of the channel.
   * @param {Client} client - The client object.
   */
  constructor(data = {}, guildId, channelId, client) {
    super(client);
    this.data = data;
    this.options = data.options ?? [];
    this.guildId = guildId;
    this.channelId = channelId;
  }

  /**
   * Parses the options array and returns the parsed result.
   * @param {Array} [options=this.options] - The options array to parse.
   * @returns {Array|null} - The parsed options array or null if the data type is 2 or 3, or if the options array is empty.
   */
  _parse(options = this.options) {
    if ([2, 3].includes(this.data?.type)) return null;
    if (!options?.length) return null;
    if (options[0]?.type === 2) return this._parse(options[0].options);
    if (options[0]?.type === 1) return this._parse(options[0].options);
    return options;
  }

  /**
   * Retrieves the value of a string option by its name.
   * @param {string} name - The name of the option.
   * @param {boolean} [required=false] - Indicates whether the option is required. If set to true and the option is not found, a RangeError is thrown.
   * @returns {string | null} The value of the option, or null if the option is not found and not required.
   * @throws {RangeError} If the option is required and not found, or if the option is found but its type is not string.
   */
  getString(name, required = false) {
    const options = this._parse(this.options);
    if (!options?.length) return null;
    const filter = options?.find((o) => name === o.name);
    if (filter) {
      if (filter.type !== 3) throw new RangeError(`The option type must be of type String, received=${OptionType[filter.type]}`);
      return filter.value ?? null;
    }

    if (required) throw new RangeError(`The name of the option does not match the selected option`);
    return null;
  }

  /**
   * Retrieves the value of a number option by its name.
   * @param {string} name - The name of the option.
   * @param {boolean} [required=false] - Indicates whether the option is required. If set to true and the option is not found, a RangeError is thrown.
   * @returns {number | null} The value of the number option, or null if the option is not found.
   * @throws {RangeError} If the option is required and not found, or if the option type is not Number.
   */
  getNumber(name, required = false) {
    const options = this._parse(this.options);
    if (!options?.length) return null;
    const filter = options?.find((o) => name === o.name);
    if (filter) {
      if (filter.type !== 10) throw new RangeError(`The option type must be Number, received=${OptionType[filter.type]}`);
      return filter.value ?? null;
    }

    if (required) throw new RangeError(`The name of the option does not match the selected option`);
    return null;
  }

  /**
   * Retrieves the integer value of the specified option name from the options list.
   * @param {string} name - The name of the option to retrieve.
   * @param {boolean} [required=false] - Indicates whether the option is required. If set to true and the option is not found, a RangeError will be thrown.
   * @returns {number | null} The integer value of the option, or null if the option is not found.
   * @throws {RangeError} If the option is required and not found, or if the option type is not an integer.
   */
  getInteger(name, required = false) {
    const options = this._parse(this.options);
    if (!options?.length) return null;
    const filter = options?.find((o) => name === o.name);
    if (filter) {
      if (filter.type !== 4) throw new RangeError(`Option type must be Integer, received=${OptionType[filter.type]}`);
      return filter.value ?? null;
    }

    if (required) throw new RangeError(`The name of the option does not match the selected option`);
    return null;
  }

  /**
   * Retrieves the boolean value of the specified option name from the options list.
   * @param {string} name - The name of the option to retrieve.
   * @param {boolean} [required=false] - Indicates whether the option is required. If set to true and the option is not found, a RangeError is thrown.
   * @returns {boolean | null} - The boolean value of the option, or null if the option is not found and not required.
   * @throws {RangeError} - If the option is required and not found, or if the option type is not boolean.
   */
  getBoolean(name, required = false) {
    const options = this._parse(this.options);
    if (!options?.length) return null;
    const filter = options?.find((o) => name === o.name);
    if (filter) {
      if (filter.type !== 5) throw new RangeError(`The option type must be Boolean, received=${OptionType[filter.type]}`);
      return filter.value ?? null;
    }

    if (required) throw new RangeError(`The name of the option does not match the selected option`);
    return null;
  }

  /**
   * Retrieves an attachment from the message data based on the provided options.
   * @param {boolean} [required=false] - Indicates whether the attachment is required. If set to true and no attachment is found, a RangeError will be thrown.
   * @returns {MessageAttachment | null} - The retrieved attachment, or null if no attachment is found and it is not required.
   * @throws {RangeError} - If the required parameter is set to true and no attachment is found.
   */
  getAttachment(required = false) {
    const options = this._parse(this.options);
    if (!options?.length) return null;
    const filter = options.find((o) => o.type === 11);
    if (filter) {
      return new MessageAttachment(null, this.data.resolved?.attachments[filter.value]);
    }

    if (required) throw new RangeError(`The option does not include an attach`);
    return null;
  }

  /**
   * Retrieves a user based on the given name.
   * @param {string} name - The name of the user to retrieve.
   * @param {boolean} [required=false] - Indicates whether the user is required. If set to true and the user is not found, a RangeError will be thrown.
   * @returns {User | null} - The retrieved user object, or null if the user is not found and is not required.
   * @throws {RangeError} - If the option type is not User or if the option name does not match the specified option and is required.
   */
  getUser(name, required = false) {
    const options = this._parse(this.options);
    if (!options?.length) return null;
    const filter = options.find((o) => o.name === name);
    if (filter) {
      if (filter.type !== 6) throw new RangeError(`Option type must be User, received=${OptionType[filter.type]}`);
      return this.client.users._add(this.data.resolved?.users[filter.value], {
        cache: false,
      });
    }

    if (required) throw new RangeError(`Option name does not match the specified option`);
    return null;
  }

  /**
   * Retrieves a member by name from the guild's options.
   * @param {string} name - The name of the member to retrieve.
   * @param {boolean} [required=false] - Whether the member is required. If set to true and the member is not found, a RangeError will be thrown.
   * @returns {GuildMember | null} The retrieved member, or null if not found (unless required is set to true).
   * @throws {RangeError} If the option type is not User or if the option name does not match the specified option (if required is set to true).
   */
  getMember(name, required = false) {
    const options = this._parse(this.options);
    if (!options?.length) return null;
    const filter = options.find((o) => o.name === name);
    if (filter) {
      if (filter.type !== 6) throw new RangeError(`Option type must be User, received=${OptionType[filter.type]}`);
      return this.guild?.members._add(this.data.resolved?.members[filter.value], this.guildId, {cache: true});
    }

    if (required) throw new RangeError(`Option name does not match the specified option`);
    return null;
  }

  /**
   * Retrieves the context user from the data object.
   * @returns {User | null} The context user, or null if the data object is not available.
   * @throws {RangeError} If the data object is resolved and its type is not 2 (context user).
   */
  getContextUser() {
    if (!this.data) return null;
    if (this.data.resolved && this.data?.type !== 2)
      throw new RangeError(`You are expected to be a context user. Received=${ApplicationCommandTypes[this.data?.type]}`);
    const user = this.data.resolved?.users[this.data.target_id];
    return this.client.users._add(user, {cache: false});
  }

  /**
   * Retrieves the message associated with the current context.
   * @returns {Message | null} The message object if found, otherwise null.
   * @throws {RangeError} If the message is not of type "Context Message".
   */
  getMessage() {
    if (!this.data) return null;
    if (this.data.resolved && this.data.type !== 3)
      throw new RangeError(`Expected to be Context Message. Received=${ApplicationCommandTypes[this.data?.type]}`);
    const message = this.data.resolved?.messages[this.data.target_id];
    const manager = this.channel?.messages._add(message, this.guildId, this.channelId, {cache: false});
    return manager;
  }

  /**
   * Retrieves a channel based on its name from the available options.
   * @param {string} name - The name of the channel to retrieve.
   * @param {boolean} [required=false] - Whether the channel is required. If set to true and the channel is not found, a RangeError will be thrown.
   * @returns {Channel | null} - The retrieved channel or null if not found (unless required is set to true).
   * @throws {RangeError} - If the type of option is not Channel or if the name of the option does not match the selected option (if required is set to true).
   */
  getChannel(name, required = false) {
    const options = this._parse(this.options);
    if (!options?.length) return null;
    const filter = options.find((o) => o.name === name);
    if (filter) {
      if (filter.type !== 7) throw new RangeError(`The type of option must be Channel, received=${OptionType[filter.type]}`);
      return this.client.channels._add(this.data.resolved?.channels[filter.value], this.guildId, {
        cache: false,
      });
    }

    if (required) throw new RangeError(`The name of the option must match the selected option.`);
    return null;
  }

  /**
   * Retrieves the role with the specified name from the options.
   * @param {string} name - The name of the role to retrieve.
   * @param {boolean} [required=false] - Whether the role is required. If set to true and the role is not found, a RangeError will be thrown.
   * @returns {Role | null} The role object if found, or null if not found and not required.
   * @throws {RangeError} If the option type is not Role and required is set to true, or if the name of the option does not match the selected option and required is set to true.
   */
  getRole(name, required = false) {
    const options = this._parse(this.options);
    if (!options?.length) return null;
    const filter = options.find((o) => o.name === name);
    if (filter) {
      if (filter.type !== 8) throw new RangeError(`The option type must be Role, received=${OptionType[filter.type]}`);
      return this.client.roles._add(this.data.resolved?.roles[filter.value], this.guildId, {cache: false});
    }

    if (required) throw new RangeError(`The name of the option must match the selected option.`);
    return null;
  }

  /**
   * Retrieves the mentionable value for the specified option name.
   * @param {string} name - The name of the option.
   * @param {boolean} [required=false] - Indicates whether the option is required.
   * @returns {User | GuildMember | Role | null} The mentionable value for the option, or null if not found.
   * @throws {RangeError} If the option type is not Mentionable.
   * @throws {RangeError} If the name of the option does not match the selected option and is required.
   */
  getMentionable(name, required = false) {
    const options = this._parse(this.options);
    if (!options?.length) return null;
    const filter = options.find((o) => o.name === name);
    if (filter) {
      if (filter.type !== 9) throw new RangeError(`The option type must be Mentionable, received=${OptionType[filter.type]}`);
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
          {cache: false}
        );
      if (this.data.resolved?.hasOwnProperty("roles"))
        return this.client.roles._add(this.data.resolved?.roles[filter.value], this.guildId, {cache: false});
      return null;
    }

    if (required) throw new RangeError(`The name of the option must match the selected option.`);
    return null;
  }

  /**
   * Retrieves the sub command name from the options array.
   * @param {boolean} [required=false] - Indicates whether the sub command is required.
   * @returns {string | null} - The name of the sub command, or null if not found.
   * @throws {RangeError} - If the sub command is required but not found.
   */
  getSubCommand(required = false) {
    const option = this.options;
    if (!option?.length) return null;
    const filter = option[0].options?.find((o) => o.type === 1) ?? option?.find((o) => o.type === 1);
    if (filter) {
      return filter.name;
    }

    if (required) throw new RangeError(`The option does not have a Sub_Command`);
    return null;
  }

  /**
   * Retrieves the sub command group from the options array.
   * @param {boolean} [required=false] - Indicates whether the sub command group is required.
   * @returns {string | null} - The name of the sub command group, or null if not found.
   * @throws {RangeError} - If the sub command group is required but not found.
   */
  getSubCommandGroup(required = false) {
    const option = this.options;
    if (!option?.length) return null;
    const filter = option.find((o) => o.type === 2);
    if (filter) {
      return filter.name;
    }

    if (required) throw new RangeError(`The option does not have a Sub_Command_Group`);
    return null;
  }

  /**
   * Get the guild object associated with this guildId.
   * @returns The guild object.
   */
  get guild() {
    return this.client.guilds._add(this.guildId);
  }

  /**
   * Get the channel object associated with this instance.
   * @returns The channel object.
   */
  get channel() {
    return this.client.channels._add(this.channelId);
  }
}

module.exports = CommandInteractionOptionResolver;
