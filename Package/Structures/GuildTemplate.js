const Base = require("../Base/base");
const APIGuild = require("./Misc/APIGuild");
/**
 * Represents a guild template.
 * @class
 * @extends Base
 * @param {Object} [data] - The data for the guild template.
 * @param {Client} client - The client instance.
 */
class GuildTemplate extends Base {
  /**
   * Constructs a new instance of a data object.
   * @constructor
   * @param {Object} [data] - The data object containing the properties of the instance.
   * @param {Client} client - The client object.
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
   * Fetches a guild template using the provided code.
   * @returns {Promise} A promise that resolves to the fetched guild template.
   */
  async fetch() {
    return await this.client.fetchGuildTemplate(this.code);
  }

  /**
   * Synchronizes the guild templates with the provided code.
   * @returns {Promise<void>} - A promise that resolves when the synchronization is complete.
   */
  async sync() {
    return await this.guild?.templates.sync(this.code);
  }

  /**
   * Edits the guild template with the provided options.
   * @param {Object} options - The options to apply to the template edit.
   * @returns {Promise} A promise that resolves to the result of the template edit.
   */
  async edit(options = {}) {
    return await this.guild?.templates.edit(this.code, options);
  }

  /**
   * Deletes the template with the specified code from the guild.
   * @returns {Promise<void>} A promise that resolves when the template is successfully deleted.
   */
  async delete() {
    return await this.guild?.templates.delete(this.code);
  }

  /**
   * Sets the name of an object asynchronously.
   * @param {string} name - The new name to set.
   * @returns {Promise} A promise that resolves when the name is successfully set.
   */
  async setName(name) {
    return await this.edit({name});
  }

  /**
   * Sets the description of an object and updates it.
   * @param {string} description - The new description to set.
   * @returns {Promise} - A promise that resolves when the description is successfully updated.
   */
  async setDescription(description) {
    return await this.edit({description});
  }

  /**
   * Get the guild object associated with this guild ID.
   * @returns The guild object.
   */
  get guild() {
    return this.client.guilds._add(this.sourceGuildId);
  }

  /**
   * Creates a new guild using the provided options.
   * @param {Object} options - The options for creating the guild.
   * @returns {Promise} A promise that resolves to the generated template for the guild.
   */
  async createGuild(options = {}) {
    return await this.client.generateTemplate(this.code, options);
  }
}

module.exports = GuildTemplate;
