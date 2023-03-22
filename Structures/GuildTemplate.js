const Base = require("../Base/base");
const APIGuild = require("./Misc/APIGuild");
/**
 * It's a class that represents a guild template.
 * @class
 * @extends Base
 */
class GuildTemplate extends Base {
  /**
   * It's a constructor for a class called Invite.
   * @param [data] - The data that is passed to the constructor.
   * @param client - The client that the invite was fetched from.
   */
  constructor(data = {}, client) {
    super(client);
    this.partial = data.partial ?? false;
    this.code = data.code ?? null;
    this.name = data.name ?? null;
    this.description = data.description ?? null;
    this.usageCount = data.usage_count ?? null;
    this.creatorId = data.creator_id ?? null;
    this.creator = this.client.users._add(data.creator, {cache: false});
    this.createdAt = data.created_at ? new Date(data.created_at) : null;
    this.createdTimestamp = this.createdAt?.getTime() ?? null;
    this.updatedAt = data.updated_at ? new Date(data.updated_at) : null;
    this.updatedTimestamp = this.updatedAt?.getTime() ?? null;
    this.sourceGuildId = data.source_guild_id ?? null;
    this.serializedSourceGuild = data.serialized_source_guild ? new APIGuild(data.serialized_source_guild, this.client) : null;
    this.dirty = data.is_dirty ?? null;
    this.url = `https://discord.new/${this.code}`;
  }

  /**
   * It fetches the guild template from the database
   * @returns The return value of the async function is a Promise.
   */
  async fetch() {
    return await this.client.fetchGuildTemplate(this.code);
  }

  /**
   * It syncs the template with the database
   * @returns The return value of the sync() method.
   */
  async sync() {
    return await this.guild?.templates.sync(this.code);
  }

  /**
   * It edits a template
   * @param [options] - Object
   * @returns The return value of the function is the return value of the function that is being
   * called.
   */
  async edit(options = {}) {
    return await this.guild?.templates.edit(this.code, options);
  }

  /**
   * It deletes the template from the database
   * @returns The return value of the delete method of the templates object of the guild object.
   */
  async delete() {
    return await this.guild?.templates.delete(this.code);
  }

  /**
   * It sets the name of the channel
   * @param name - The name of the channel.
   * @returns The return value of the edit() method.
   */
  async setName(name) {
    return await this.edit({name});
  }

  /**
   * It edits the description of the channel
   * @param description - The new description of the channel.
   * @returns The description of the channel.
   */
  async setDescription(description) {
    return await this.edit({description});
  }

  /**
   * It returns the guild object of the guild that the channel is in
   * @returns The guild object.
   */
  get guild() {
    return this.client.guilds._add(this.sourceGuildId);
  }

  /**
   * It creates a guild
   * @param [options] - The options for the guild.
   * @returns The client.generateTemplate function is being returned.
   */
  async createGuild(options = {}) {
    return await this.client.generateTemplate(this.code, options);
  }
}

module.exports = GuildTemplate;
