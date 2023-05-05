const Base = require("../Base/base");
const MessageAttachment = require("../Builders/MessageAttachment");
const {OptionType, ApplicationCommandTypes} = require("../Util/Constants");
/* It's a class that allows you to get the data from the options that the user has selected */
class CommandInteractionOptionResolver extends Base {
  /**
   * This function is a constructor for the class, and it takes in a data object, a guildId, a
   * channelId, and a client. It then sets the data object to the data object passed in, sets the
   * options object to the options object in the data object, sets the guildId to the guildId passed
   * in, and sets the channelId to the channelId passed in.
   * @param [data] - The data that is passed to the constructor.
   * @param guildId - The ID of the guild the poll is in.
   * @param channelId - The channel ID of the channel the message is in.
   * @param client - The client that the message was sent from
   */
  constructor(data = {}, guildId, channelId, client) {
    super(client);
    this.data = data;
    this.options = data.options ?? [];
    this.guildId = guildId;
    this.channelId = channelId;
  }

  /**
   * If the first element of the array is an object with a type of 2, then return the result of calling
   * the function again with the options of the first element.
   *
   * If the first element of the array is an object with a type of 1, then return the result of calling
   * the function again with the options of the first element.
   *
   * Otherwise, return the array.
   * @param [options] - The options array from the JSON
   * @returns The first option of the first option of the first option of the first option of the first
   * option of the first option of the first option of the first option of the first option of the
   * first option of the first option of the first option of the first option of the first option of
   * the first option of the first option of the first option of the first option of the first option
   * of the first option of
   */
  _parse(options = this.options) {
    if ([2, 3].includes(this.data?.type)) return null;
    if (!options?.length) return null;
    if (options[0]?.type === 2) return this._parse(options[0].options);
    if (options[0]?.type === 1) return this._parse(options[0].options);
    return options;
  }

  /**
   * It takes a string, and returns a string
   * @param name - The name of the option you want to get the value of.
   * @param [required=false] - boolean
   * @returns The value of the option.
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
   * If the option type is not a number, throw an error, otherwise return the value of the option.
   * @param name - The name of the option to be retrieved.
   * @param [required=false] - boolean
   * @returns The value of the option.
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
   * It takes a string and a boolean as parameters, and returns a number or null.
   * @param name - The name of the option
   * @param [required=false] - boolean
   * @returns The value of the option.
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
   * It takes a string and a boolean as arguments, and returns a boolean.
   * @param name - The name of the option to be retrieved.
   * @param [required=false] - boolean
   * @returns The value of the option.
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
   * It gets the attachment from the message
   * @param [required=false] - boolean
   * @returns The attachment of the message.
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
   * It gets a user from the options
   * @param name - The name of the option you want to get
   * @param [required=false] - boolean
   * @returns The user object.
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
   * It gets a member from the options
   * @param name - The name of the option
   * @param [required=false] - boolean
   * @returns The member object.
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
   * If the data is not null, and the data is resolved and the data type is not 2, throw a range error.
   * If the data is resolved, and the data type is 2, return the user.
   * @returns The user object.
   */
  getContextUser() {
    if (!this.data) return null;
    if (this.data.resolved && this.data?.type !== 2)
      throw new RangeError(`You are expected to be a context user. Received=${ApplicationCommandTypes[this.data?.type]}`);
    const user = this.data.resolved?.users[this.data.target_id];
    return this.client.users._add(user, {cache: false});
  }

  /**
   * It returns a message object from a message ID
   * @returns A MessageManager object.
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
   * It gets the channel from the options.
   * @param name - The name of the option you want to get.
   * @param [required=false] - boolean
   * @returns The channel object.
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
   * It gets the role from the options
   * @param name - The name of the option
   * @param [required=false] - boolean
   * @returns The role object.
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
   * It gets the mentionable object from the options
   * @param name - The name of the option.
   * @param [required=false] - boolean
   * @returns The user, member, or role that was selected.
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
   * It returns the name of the subcommand if it exists, otherwise it returns null.
   * @param [required=false] - boolean
   * @returns The name of the sub command.
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
   * If the option has a filter, return the filter's name. If the option doesn't have a filter, return
   * null
   * @param [required=false] - boolean
   * @returns The Sub_Command_Group of the option.
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
   * It returns the guild object of the guild ID that is stored in the database
   * @returns The guild object.
   */
  get guild() {
    return this.client.guilds._add(this.guildId);
  }

  /**
   * It returns the channel object of the channel ID that is stored in the message object
   * @returns The channel object.
   */
  get channel() {
    return this.client.channels._add(this.channelId);
  }
}

module.exports = CommandInteractionOptionResolver;
