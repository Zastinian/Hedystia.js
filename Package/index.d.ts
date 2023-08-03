export = ApplicationCommandPermissionsUpdate;
declare class ApplicationCommandPermissionsUpdate extends BaseAction {
  constructor(data: {} | undefined, client: any);
  _patch(data: any): any;
}
import BaseAction = require("./BaseAction");

export = AutoModerationActionExecution;
declare class AutoModerationActionExecution extends BaseAction {
  constructor(data: {} | undefined, client: any);
  _patch(data: any): any;
}
import BaseAction = require("./BaseAction");

export = AutoModerationRuleCreate;
declare class AutoModerationRuleCreate extends BaseAction {
  constructor(data: {} | undefined, client: any);
  _patch(data: any): any;
}
import BaseAction = require("./BaseAction");

export = AutoModerationRuleDelete;
declare class AutoModerationRuleDelete extends BaseAction {
  constructor(data: {} | undefined, client: any);
  _patch(data: any): boolean;
}
import BaseAction = require("./BaseAction");

export = AutoModerationRuleUpdate;
declare class AutoModerationRuleUpdate extends BaseAction {
  constructor(data: {} | undefined, client: any);
  _patch(data: any): any;
}
import BaseAction = require("./BaseAction");

export = BaseAction;
declare class BaseAction {
  constructor(client: any);
  cacheUsers(users: any): void;
  cacheVoices(guild: any): void;
  cacheStickers(guild: any): void;
  cacheMembers(guild: any): void;
  cachePresences(guild: any): void;
  cacheEvents(guild: any): void;
  cacheStageInstances(guild: any): void;
  cacheRoles(guild: any): void;
  cacheEmojis(guild: any): void;
  cacheGuilds(guilds: any): any;
  cacheChannels(guild: any): void;
  cacheThreads(guild: any): void;
  cacheDm(channel: any, guildId: any): Promise<any>;
}

export = ChannelCreate;
declare class ChannelCreate extends BaseAction {
  constructor(data: {} | undefined, client: any);
  _patch(data: any): any;
}
import BaseAction = require("./BaseAction");

export = ChannelDelete;
declare class ChannelDelete extends BaseAction {
  constructor(data: {} | undefined, client: any);
  _patch(data: any): any;
}
import BaseAction = require("./BaseAction");

export = ChannelPinsUpdate;
declare class ChannelPinsUpdate extends BaseAction {
  constructor(data: any, client: any);
  _patch(data: any): any;
}
import BaseAction = require("./BaseAction");

export = ChannelUpdate;
declare class ChannelUpdate extends BaseAction {
  constructor(data: any, client: any);
  _patch(data: any): any;
}
import BaseAction = require("./BaseAction");

export = GuildAuditLogEntryCreate;
declare class GuildAuditLogEntryCreate extends BaseAction {
  constructor(data: {} | undefined, client: any);
  _patch(data: any): any;
}
import BaseAction = require("./BaseAction");

export = GuildBanAdd;
declare class GuildBanAdd extends BaseAction {
  constructor(data: any, client: any);
  _patch(data: any): any;
}
import BaseAction = require("./BaseAction");

export = GuildBanRemove;
declare class GuildBanRemove extends BaseAction {
  constructor(data: any, client: any);
  _patch(data: any): any;
}
import BaseAction = require("./BaseAction");

export = GuildCreate;
declare class GuildCreate extends BaseAction {
  constructor(data: any, client: any);
  _patch(data: any): any;
  requestMembers(guild: any): any;
}
import BaseAction = require("./BaseAction");

export = GuildDelete;
declare class GuildDelete extends BaseAction {
  constructor(data: {} | undefined, client: any);
  _patch(data: any): any;
}
import BaseAction = require("./BaseAction");

export = GuildEmojisUpdate;
declare class GuildEmojisUpdate extends BaseAction {
  constructor(data: {} | undefined, client: any);
  _patch(data: any): void;
}
import BaseAction = require("./BaseAction");

export = GuildIntegrationUpdate;
declare class GuildIntegrationUpdate extends BaseAction {
  constructor(data: {} | undefined, client: any);
  _patch(data: any): void;
}
import BaseAction = require("./BaseAction");

export = GuildMembersChunk;
declare class GuildMembersChunk extends BaseAction {
  constructor(data: {} | undefined, client: any);
  _patch(data: any): any;
}
import BaseAction = require("./BaseAction");

export = GuildMemberAdd;
declare class GuildMemberAdd extends BaseAction {
  constructor(data: {} | undefined, client: any);
  _patch(data: any): any;
}
import BaseAction = require("./BaseAction");

export = GuildMemberRemove;
declare class GuildMemberRemove extends BaseAction {
  constructor(data: {} | undefined, client: any);
  _patch(data: any): any;
}
import BaseAction = require("./BaseAction");

export = GuildMemberUpdate;
declare class GuildMemberUpdate extends BaseAction {
  constructor(data: {} | undefined, client: any);
  _patch(data: any): any;
}
import BaseAction = require("./BaseAction");

export = GuildScheduledEventAdd;
declare class GuildScheduledEventAdd extends BaseAction {
  constructor(data: {} | undefined, client: any);
  _patch(data: any): any;
}
import BaseAction = require("./BaseAction");

export = GuildScheduledEventDelete;
declare class GuildScheduledEventDelete extends BaseAction {
  constructor(data: {} | undefined, client: any);
  _patch(data: any): boolean;
}
import BaseAction = require("./BaseAction");

export = GuildScheduledEventUpdate;
declare class GuildScheduledEventUpdate extends BaseAction {
  constructor(data: {} | undefined, client: any);
  _patch(data: any): any;
}
import BaseAction = require("./BaseAction");

export = GuildScheduledEventUserAdd;
declare class GuildScheduledEventUserAdd extends BaseAction {
  constructor(data: {} | undefined, client: any);
  _patch(data: any): any;
}
import BaseAction = require("./BaseAction");

export = GuildScheduledEventUserRemove;
declare class GuildScheduledEventUserRemove extends BaseAction {
  constructor(data: {} | undefined, client: any);
  _patch(data: any): any;
}
import BaseAction = require("./BaseAction");

export = GuildUpdate;
declare class GuildUpdate extends BaseAction {
  constructor(data: {} | undefined, client: any);
  _patch(data: any): any;
}
import BaseAction = require("./BaseAction");

export = IntegrationCreate;
declare class IntegrationCreate extends BaseAction {
  constructor(data: {} | undefined, client: any);
  _patch(data: any): any;
}
import BaseAction = require("./BaseAction");

export = IntegrationDelete;
declare class IntegrationDelete extends BaseAction {
  constructor(data: {} | undefined, client: any);
  _patch(data: any): any;
}
import BaseAction = require("./BaseAction");

export = IntegrationUpdate;
declare class IntegrationUpdate extends BaseAction {
  constructor(data: {} | undefined, client: any);
  _patch(data: any): Promise<any>;
}
import BaseAction = require("./BaseAction");

export = InteractionCreate;
declare class InteractionCreate extends BaseAction {
  constructor(data: any, client: any);
  _patch(data: any): any;
  cacheMembers(member: any, guildId: any): any;
}
import BaseAction = require("./BaseAction");

export = InviteCreate;
declare class InviteCreate extends BaseAction {
  constructor(data: {} | undefined, client: any);
  _patch(data: any): any;
}
import BaseAction = require("./BaseAction");

export = InviteDelete;
declare class InviteDelete extends BaseAction {
  constructor(data: {} | undefined, client: any);
  _patch(data: any): any;
}
import BaseAction = require("./BaseAction");

export = MessageCreate;
declare class MessageCreate extends BaseAction {
  constructor(data: any, client: any);
  _patch(data: any): Promise<any>;
  cacheMembers(members: {} | undefined, guildId: any, channel: any): any;
}
import BaseAction = require("./BaseAction");

export = MessageDelete;
declare class MessageDelete extends BaseAction {
  constructor(data: {} | undefined, client: any);
  _patch(data: any): any;
}
import BaseAction = require("./BaseAction");

export = MessageDeleteBulk;
declare class MessageDeleteBulk extends BaseAction {
  constructor(data: {} | undefined, client: any);
  _patch(data: any): void;
}
import BaseAction = require("./BaseAction");

export = MessageReactionAdd;
declare class MessageReactionAdd extends BaseAction {
  constructor(data: {} | undefined, client: any);
  _patch(data: any): Promise<any>;
}
import BaseAction = require("./BaseAction");

export = MessageReactionRemove;
declare class MessageReactionRemove extends BaseAction {
  constructor(data: {} | undefined, client: any);
  _patch(data: any): Promise<any>;
}
import BaseAction = require("./BaseAction");

export = MessageReactionRemoveEmoji;
declare class MessageReactionRemoveEmoji extends BaseAction {
  constructor(data: {} | undefined, client: any);
  _patch(data: any): Promise<any>;
}
import BaseAction = require("./BaseAction");

export = MessageUpdate;
declare class MessageUpdate extends BaseAction {
  constructor(data: any, client: any);
  _patch(data: any): any;
}
import BaseAction = require("./BaseAction");

export = PresenceUpdate;
declare class PresenceUpdate extends BaseAction {
  constructor(data: {} | undefined, client: any);
  _patch(data: any): any;
}
import BaseAction = require("./BaseAction");

export = Ready;
declare class Ready extends BaseAction {
  constructor(data: any, client: any);
  _patch(data: any): Promise<any>;
}
import BaseAction = require("./BaseAction");

export = RoleCreate;
declare class RoleCreate extends BaseAction {
  constructor(data: any, client: any);
  _patch(data: any): any;
}
import BaseAction = require("./BaseAction");

export = RoleDelete;
declare class RoleDelete extends BaseAction {
  constructor(data: any, client: any);
  _patch(data: any): any;
}
import BaseAction = require("./BaseAction");

export = RolePromptCreate;
declare class RolePromptCreate extends BaseAction {
  constructor(data: {} | undefined, client: any);
  _patch(data: any): any;
}
import BaseAction = require("./BaseAction");

export = RoleUpdate;
declare class RoleUpdate extends BaseAction {
  constructor(data: any, client: any);
  _patch(data: any): any;
}
import BaseAction = require("./BaseAction");

export = StageInstanceCreate;
declare class StageInstanceCreate extends BaseAction {
  constructor(data: {} | undefined, client: any);
  _patch(data: any): any;
}
import BaseAction = require("./BaseAction");

export = StageInstanceDelete;
declare class StageInstanceDelete extends BaseAction {
  constructor(data: {} | undefined, client: any);
  _patch(data: any): boolean;
}
import BaseAction = require("./BaseAction");

export = StageInstanceUpdate;
declare class StageInstanceUpdate extends BaseAction {
  constructor(data: {} | undefined, client: any);
  _patch(data: any): any;
}
import BaseAction = require("./BaseAction");

export = StickersUpdate;
declare class StickersUpdate extends BaseAction {
  constructor(data: {} | undefined, client: any);
  _patch(data: any): void;
}
import BaseAction = require("./BaseAction");

export = ThreadCreate;
declare class ThreadCreate extends BaseAction {
  constructor(data: {} | undefined, client: any);
  _patch(data: any): any;
}
import BaseAction = require("./BaseAction");

export = ThreadDelete;
declare class ThreadDelete extends BaseAction {
  constructor(data: {} | undefined, client: any);
  _patch(data: any): boolean;
}
import BaseAction = require("./BaseAction");

export = ThreadListSync;
declare class ThreadListSync extends BaseAction {
  constructor(data: {} | undefined, client: any);
  _patch(data: any): any;
}
import BaseAction = require("./BaseAction");

export = ThreadMembersUpdate;
declare class ThreadMembersUpdate extends BaseAction {
  constructor(data: {} | undefined, client: any);
  _patch(data: any): any;
}
import BaseAction = require("./BaseAction");

export = ThreadUpdate;
declare class ThreadUpdate extends BaseAction {
  constructor(data: {} | undefined, client: any);
  _patch(data: any): any;
}
import BaseAction = require("./BaseAction");

export = UserUpdate;
declare class UserUpdate extends BaseAction {
  constructor(data: any, websocket: any, client: any);
  _patch(data: any): any;
}
import BaseAction = require("./BaseAction");

export = VoiceStateUpdate;
declare class VoiceStateUpdate extends BaseAction {
  constructor(data: {} | undefined, client: any);
  _patch(data: any): boolean | undefined;
}
import BaseAction = require("./BaseAction");

export = WebhooksUpdate;
declare class WebhooksUpdate extends BaseAction {
  constructor(data: {} | undefined, client: any);
  _patch(data: any): any;
}
import BaseAction = require("./BaseAction");

export = Base;
/**
 * Represents a base class with a client property.
 * @class
 * @param {object} client - The client object.
 */
declare class Base {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Object} client - The client object to be assigned to the "client" property.
   */
  constructor(client: Object);
}

export = Button;
/**
 * A class representing a Discord button.
 * @class
 */
declare class Button {
  /**
   * Create a new Button.
   * @constructor
   * @param {Object} options - The options for the button.
   * @param {Object} options.emoji - The emoji displayed on the button (if any).
   * @param {string} options.label - The text displayed on the button.
   * @param {string} options.url - The URL the button leads to (if any).
   * @param {string} options.customid - The custom ID of the button (if any).
   * @param {string} options.style - The visual style of the button (if any).
   * @param {boolean} options.disabled - Whether the button is disabled or not.
   * @returns {Object} - The button object.
   */
  constructor({
    emoji,
    label,
    url,
    customid,
    style,
    disabled,
  }: {
    emoji: Object;
    label: string;
    url: string;
    customid: string;
    style: string;
    disabled: boolean;
  });
  emoji: {
    constructor: Function;
    toString(): string;
    toLocaleString(): string;
    valueOf(): Object;
    hasOwnProperty(v: PropertyKey): boolean;
    isPrototypeOf(v: Object): boolean;
    propertyIsEnumerable(v: PropertyKey): boolean;
  };
  label: string;
  url: string;
  customid: string;
  style: string;
  disabled: boolean;
}

export = ChannelSelect;
/**
 * Class representing a Channel Select component for Discord message components.
 * @class
 */
declare class ChannelSelect {
  /**
   * Transforms the given options data into a format compatible with the select component.
   * @static
   * @param {Object} options - The options data to transform.
   * @param {string} options.label - The label for the option.
   * @param {string} options.value - The value for the option.
   * @param {string} options.description - The description for the option.
   * @param {string} options.emoji - The emoji for the option.
   * @param {boolean} options.default - Whether the option is the default option.
   * @returns {Object} The transformed options data.
   */
  static transformOptions(options?: {label: string; value: string; description: string; emoji: string; default: boolean}): Object;
  /**
   * Transforms the given emoji data into a format compatible with the select component.
   * @static
   * @param {Object|string} emoji - The emoji data to transform.
   * @param {string} emoji.name - The name of the emoji.
   * @param {string} emoji.id - The ID of the emoji.
   * @param {boolean} emoji.animated - Whether the emoji is animated.
   * @returns {Object} The transformed emoji data.
   */
  static transformEmoji(emoji: Object | string): Object;
  /**
   * Creates a new instance of the ChannelSelect class.
   * @constructor
   * @param {Object} data - The data to initialize the channel select component with.
   * @param {string} data.custom_id - The unique identifier for the component.
   * @param {Array} data.options - The options for the select component.
   * @param {Object} data.options.label - The label for the option.
   * @param {Object} data.options.value - The value for the option.
   * @param {Object} data.options.description - The description for the option.
   * @param {Object} data.options.emoji - The emoji for the option.
   * @param {boolean} data.options.default - Whether the option is the default option.
   * @param {string} data.placeholder - The placeholder text for the select component.
   * @param {number} data.min_values - The minimum number of options that can be selected.
   * @param {number} data.max_values - The maximum number of options that can be selected.
   * @param {boolean} data.disabled - Whether the component is disabled.
   */
  constructor(data?: {custom_id: string; options: any[]});
  type: string;
  customId: string;
  options: Object[];
  placeholder: any;
  minValues: any;
  maxValues: any;
  disabled: any;
  /**
   * Sets the custom ID of the select component.
   * @param {string} customId - The custom ID to set.
   * @returns {ChannelSelect} The ChannelSelect instance.
   */
  setCustomId(customId: string): ChannelSelect;
  /**
   * Sets the placeholder text of the select component.
   * @param {string} placeholder - The placeholder text to set.
   * @returns {ChannelSelect} The ChannelSelect instance.
   */
  setPlaceholder(placeholder: string): ChannelSelect;
  /**
   * Set the minimum number of options that can be selected.
   * @param {number} minValue - The minimum number of options that can be selected.
   * @returns {ChannelSelect} The ChannelSelect instance.
   */
  setMinValues(minValue: number): ChannelSelect;
  /**
   * Set the maximum number of options that can be selected.
   * @param {number} maxValue - The maximum number of options that can be selected.
   * @returns {ChannelSelect} The ChannelSelect instance.
   */
  setMaxValues(maxValue: number): ChannelSelect;
  /**
   * Set the maximum number of options that can be selected.
   * @param {number} maxValue - The maximum number of options that can be selected.
   * @returns {ChannelSelect} The ChannelSelect instance.
   */
  setDisabled(disabled: any): ChannelSelect;
  /**
   * Set the options for the select menu.
   * @param {Object[]} options - An array of option objects for the select menu.
   * @returns {ChannelSelect} The ChannelSelect instance.
   */
  setOptions(options: Object[]): ChannelSelect;
  /**
   * Convert the ChannelSelect instance to a plain object for sending to Discord API.
   * @returns {Object} The plain object representation of the ChannelSelect.
   */
  toJSON(): Object;
}

export = Embed;
/**
 * Class representing an embed object for use in Discord messages.
 * @class
 */
declare class Embed {
  /**
   * Create a new Embed object.
   * @param {Object} options - The options to use for the Embed object.
   * @param {string} [options.title] - The title of the embed.
   * @param {number} [options.color] - The color of the embed.
   * @param {Object} [options.author] - The author of the embed.
   * @param {string} [options.author.name] - The name of the author.
   * @param {string} [options.author.image] - The image of the author.
   * @param {string} [options.url] - The URL of the embed.
   * @param {string} [options.description] - The description of the embed.
   * @param {string} [options.image] - The image of the embed.
   * @param {Object} [options.footer] - The footer of the embed.
   * @param {string} [options.footer.text] - The text of the footer.
   * @param {string} [options.footer.image] - The image of the footer.
   * @param {string} [options.timestamp] - The timestamp of the embed.
   * @param {string} [options.thumbnail] - The thumbnail of the embed.
   * @param {Array} [options.fields] - The fields of the embed.
   * @returns {Object} - The new Embed object.
   */
  constructor({
    title,
    color,
    author,
    url,
    description,
    image,
    footer,
    timestamp,
    thumbnail,
    fields,
  }: {
    title?: string | undefined;
    color?: number | undefined;
    author?:
      | {
          name?: string | undefined;
          image?: string | undefined;
        }
      | undefined;
    url?: string | undefined;
    description?: string | undefined;
    image?: string | undefined;
    footer?:
      | {
          text?: string | undefined;
          image?: string | undefined;
        }
      | undefined;
    timestamp?: string | undefined;
    thumbnail?: string | undefined;
    fields?: any[] | undefined;
  });
  title: string | undefined;
  color: number | undefined;
  author: {
    name?: string | undefined;
    image?: string | undefined;
  };
  url: string | undefined;
  description: string | undefined;
  image: string | undefined;
  footer: {
    text?: string | undefined;
    image?: string | undefined;
  };
  timestamp: string | undefined;
  thumbnail: string | undefined;
  fields: any[] | undefined;
}

export = GuildMemberVerificationFields;
/**
 * A class representing fields for guild member verification.
 * @class
 */
declare class GuildMemberVerificationFields {
  /**
   * Transforms an object representing a verification field into the required format.
   * @param {Object} fields - An object representing a verification field.
   * @returns {Object} An object representing the verification field in the required format.
   */
  static transformFields(fields?: Object): Object;
  /**
   * Constructs a new GuildMemberVerificationFields object.
   * @param {Object} data - An object containing the data for the verification fields.
   * @param {boolean} data.enabled - Whether or not the verification fields are enabled.
   * @param {string} data.description - A description of the verification fields.
   * @param {Array} data.fields - An array of objects representing the individual verification fields.
   */
  constructor(data?: {enabled: boolean; description: string; fields: any[]});
  enabled: boolean;
  description: string;
  fields: Object[];
  /**
   * Sets whether or not the verification fields are enabled.
   * @param {boolean} enabled - Whether or not the verification fields are enabled.
   * @returns {GuildMemberVerificationFields} The GuildMemberVerificationFields object.
   */
  setEnabled(enabled: boolean): GuildMemberVerificationFields;
  /**
   * Sets the description of the verification fields.
   * @param {string} description - A description of the verification fields.
   * @returns {GuildMemberVerificationFields} The GuildMemberVerificationFields object.
   */
  setDescription(description: string): GuildMemberVerificationFields;
  /**
   * Sets the verification fields.
   * @param  {...Object} fields - One or more objects representing the individual verification fields.
   * @returns {GuildMemberVerificationFields} The GuildMemberVerificationFields object.
   */
  setFields(...fields: Object[]): GuildMemberVerificationFields;
  /**
   * Adds one or more verification fields.
   * @param  {...Object} fields - One or more objects representing the individual verification fields.
   * @returns {GuildMemberVerificationFields} The GuildMemberVerificationFields object.
   */
  addFields(...fields: Object[]): GuildMemberVerificationFields;
  /**
   * Returns the verification fields as a JSON object.
   * @returns {Object} The verification fields as a JSON object.
   */
  toJSON(): Object;
}

export = InputText;
/**
 * Represents an Input Text component for a Discord interaction message.
 * @class
 */
declare class InputText {
  /**
   * Constructs a new InputText component.
   * @constructor
   * @param {Object} [data] - Optional data to set for the component.
   * @param {string} [data.custom_id] - The custom ID of the component.
   * @param {string|number} [data.style] - The style of the component, can be a string or a number.
   * @param {string} [data.label] - The label of the component.
   * @param {number} [data.min_length] - The minimum length of the text input.
   * @param {number} [data.max_length] - The maximum length of the text input.
   * @param {boolean} [data.required] - Whether the component is required or not.
   * @param {string} [data.value] - The value of the text input.
   * @param {string} [data.placeholder] - The placeholder text for the text input.
   */
  constructor(
    data?:
      | {
          custom_id?: string | undefined;
          style?: string | number | undefined;
          label?: string | undefined;
          min_length?: number | undefined;
          max_length?: number | undefined;
          required?: boolean | undefined;
          value?: string | undefined;
          placeholder?: string | undefined;
        }
      | undefined
  );
  type: string;
  customId: any;
  style: any;
  label: string | undefined;
  minLength: any;
  maxLength: any;
  required: boolean | undefined;
  value: string | undefined;
  placeholder: string | undefined;
  /**
   * Sets the custom ID of the component.
   * @param {string} customId - The custom ID to set.
   * @returns {InputText} This component.
   */
  setCustomId(customId: string): InputText;
  /**
   * Sets the label of the component.
   * @param {string} label - The label to set.
   * @returns {InputText} This component.
   */
  setLabel(label: string): InputText;
  /**
   * Sets the maximum length of the text input.
   * @param {number} maxLength - The maximum length to set.
   * @returns {InputText} This component.
   */
  setMaxLength(maxLength: number): InputText;
  /**
   * Sets the minimum length of the text input.
   * @param {number} minLength - The minimum length to set.
   * @returns {InputText} This component.
   */
  setMinLength(minLength: number): InputText;
  /**
   * Sets whether the component is required or not.
   * @param {boolean} required - Whether the component is required or not.
   * @returns {InputText} This component.
   */
  setRequired(required: boolean): InputText;
  /**
   * Sets the placeholder text for the text input.
   * @param {string} placeholder - The placeholder text to set.
   * @returns {InputText} This component.
   */
  setPlaceholder(placeholder: string): InputText;
  /**
   * Sets the value of the text input.
   * @param {string} value - The value to set.
   * @returns {InputText} This component.
   */
  setValue(value: string): InputText;
  /**
   * Sets the style of the component.
   * @param {string|number} style - The style to set, can be a string or a number.
   * @returns {InputText} This component.
   */
  setStyle(style: string | number): InputText;
  /**
   * Converts the component to a JSON representation.
   * @returns {Object} The JSON representation of the component.
   */
  toJSON(): Object;
}

export = MessageActionRow;
/**
 * Represents an action row containing components, such as buttons or selects, to be added to a message.
 * @class
 */
declare class MessageActionRow {
  static transformComponents(data: any): Object;
  /**
   * @param {Object} data - The data for the action row.
   * @param {Array} data.components - The components to be added to the action row.
   */
  constructor(data?: {components: any[]});
  type: string;
  components: Object[];
  /**
   * Adds one or more components to the action row.
   * @param  {...any} components - The components to be added to the action row.
   * @returns {MessageActionRow} - The action row with the new components added.
   */
  addComponents(...components: any[]): MessageActionRow;
  /**
   * Sets the components of the action row.
   * @param  {...any} components - The components to be set as the action row's components.
   * @returns {MessageActionRow} - The action row with the new components set.
   */
  setComponents(...components: any[]): MessageActionRow;
  /**
   * Validates that the action row's type is valid.
   * @returns {void}
   * @throws {TypeError} If the action row's type is invalid.
   */
  validation(): void;
  /**
   * Returns the action row's data in JSON format.
   * @returns {Object} - The action row's data in JSON format.
   */
  toJSON(): Object;
}

export = MessageAttachment;
/**
 * Represents a message attachment.
 * @class
 */
declare class MessageAttachment {
  /**
   * Constructs a new MessageAttachment object.
   * @param {string} url - The URL of the attachment.
   * @param {Object} data - Additional data for the attachment.
   * @param {string} filename - The name of the file.
   */
  constructor(url: string, data: Object | undefined, filename: string);
  id: any;
  filename: any;
  description: any;
  contentType: any;
  size: any;
  url: string;
  proxyURL: any;
  height: any;
  width: any;
  ephemeral: any;
  file: any;
  spoiler: boolean;
  /**
   * Sets the file for the attachment.
   * @param {BufferResolvable|Stream} file - The file to attach.
   * @returns {MessageAttachment} This attachment.
   */
  setFile(file: BufferResolvable | Stream): MessageAttachment;
  /**
   * Sets the name of the file.
   * @param {string} filename - The name of the file.
   * @returns {MessageAttachment} This attachment.
   */
  setFilename(filename: string): MessageAttachment;
  /**
   * Sets the description of the attachment.
   * @param {string} description - The description of the attachment.
   * @returns {MessageAttachment} This attachment.
   */
  setDescription(description: string): MessageAttachment;
  /**
   * Sets the attachment as a spoiler.
   * @returns {MessageAttachment} This attachment.
   */
  setSpoiler(): MessageAttachment;
}

export = MessageButton;
/**
 * A class representing a message button.
 * @class
 */
declare class MessageButton {
  /**
   * Creates a new message button instance.
   * @constructor
   * @param {Object} [data] - The data to initialize the message button with.
   */
  constructor(data?: Object | undefined);
  type: string;
  style: any;
  label: any;
  emoji: any;
  customId: any;
  url: any;
  disabled: any;
  /**
   * Sets the label of the button.
   * @param {string} label - The label to set.
   * @returns {MessageButton} The message button instance.
   */
  setLabel(label: string): MessageButton;
  /**
   * Sets the custom ID of the button.
   * @param {string} customId - The custom ID to set.
   * @returns {MessageButton} The message button instance.
   */
  setCustomId(customId: string): MessageButton;
  /**
   * Sets whether the button is disabled.
   * @param {boolean} disabled - Whether the button is disabled.
   * @returns {MessageButton} The message button instance.
   */
  setDisabled(disabled: boolean): MessageButton;
  /**
   * Sets the style of the button.
   * @param {string} style - The style to set.
   * @returns {MessageButton} The message button instance.
   */
  setStyle(style: string): MessageButton;
  /**
   * Sets the URL of the button.
   * @param {string} url - The URL to set.
   * @returns {MessageButton} The message button instance.
   */
  setURL(url: string): MessageButton;
  /**
   * Sets the emoji of the button.
   * @param {string|Object} emoji - The emoji to set.
   * @returns {MessageButton} The message button instance.
   */
  setEmoji(emoji: string | Object): MessageButton;
  /**
   * Converts the message button instance to a JSON representation.
   * @returns {Object} The JSON representation of the message button.
   */
  toJSON(): Object;
}

export = MessageEmbed;
/**
 * Represents a message embed.
 * @class
 */
declare class MessageEmbed {
  /**
   * Transforms the input fields object to a new object with specific properties.
   * @param {Object} fields - The input object containing fields to be transformed.
   * @param {string} fields.name - The name of the field.
   * @param {any} fields.value - The value of the field.
   * @param {boolean|undefined} [fields.inline] - Whether the field should be displayed inline. If not specified, defaults to undefined.
   * @returns {Object} - A new object with transformed fields.
   */
  static transformFields(fields: {name: string; value: any; inline?: boolean | undefined}): Object;
  /**
   * Constructs a new MessageEmbed object.
   * @param {Object} [data] - The data for the message embed.
   * @param {string} [data.title] - The title of the message embed.
   * @param {string} [data.type="rich"] - The type of the message embed.
   * @param {string} [data.description] - The description of the message embed.
   * @param {string} [data.url] - The URL of the message embed.
   * @param {string} [data.timestamp] - The timestamp of the message embed.
   * @param {string} [data.color] - The color of the message embed.
   * @param {Object} [data.footer] - The footer of the message embed.
   * @param {Object} [data.image] - The image of the message embed.
   * @param {Object} [data.thumbnail] - The thumbnail of the message embed.
   * @param {Object} [data.video] - The video of the message embed.
   * @param {Object} [data.provider] - The provider of the message embed.
   * @param {Object} [data.author] - The author of the message embed.
   * @param {Array<Object>} [data.fields=[]] - The fields of the message embed.
   */
  constructor(
    data?:
      | {
          title?: string | undefined;
          type?: string | undefined;
          description?: string | undefined;
          url?: string | undefined;
          timestamp?: string | undefined;
          color?: string | undefined;
          footer?: Object | undefined;
          image?: Object | undefined;
          thumbnail?: Object | undefined;
          video?: Object | undefined;
          provider?: Object | undefined;
          author?: Object | undefined;
          fields?: Object[] | undefined;
        }
      | undefined
  );
  title: string | undefined;
  type: string;
  description: string | undefined;
  url: string | undefined;
  timestamp: string | undefined;
  color: number | undefined;
  footer:
    | {
        text: any;
        iconURL: any;
        icon_url: any;
        proxyIconURL: any;
      }
    | undefined;
  image:
    | {
        url: any;
        proxyURL: any;
        height: any;
        width: any;
      }
    | undefined;
  thumbnail:
    | {
        url: any;
        proxyURL: any;
        height: any;
        width: any;
      }
    | undefined;
  video: Object | undefined;
  provider: Object | undefined;
  author:
    | {
        name: any;
        url: any;
        iconURL: any;
        icon_url: any;
        proxyIconURL: any;
      }
    | undefined;
  fields: Object[];
  /**
   * Sets the title of the embed.
   * @param {string} title - The title of the embed.
   * @returns {MessageEmbed} The MessageEmbed instance.
   */
  setTitle(title: string): MessageEmbed;
  /**
   * Sets the description of the embed.
   * @param {string} description - The description of the embed.
   * @returns {MessageEmbed} The MessageEmbed instance.
   */
  setDescription(description: string): MessageEmbed;
  /**
   * Sets the URL of the embed.
   * @param {string} url - The URL of the embed.
   * @returns {MessageEmbed} The MessageEmbed instance.
   */
  setURL(url: string): MessageEmbed;
  /**
   * Sets the timestamp of the embed.
   * @param {Date|number|string} timestamp - The timestamp of the embed.
   * @returns {MessageEmbed} The MessageEmbed instance.
   */
  setTimestamp(timestamp: Date | number | string): MessageEmbed;
  /**
   * Sets the color of the embed.
   * @param {string|number} color - The color of the embed.
   * @returns {MessageEmbed} The MessageEmbed instance.
   */
  setColor(color: string | number): MessageEmbed;
  /**
   * Sets the footer of the embed.
   * @param {string} footer - The footer of the embed.
   * @returns {MessageEmbed} The MessageEmbed instance.
   */
  setFooter(footer: string): MessageEmbed;
  /**
   * Sets the image of the embed.
   * @param {object} image - The image of the embed.
   * @param {string} image.url - The URL of the image.
   * @returns {MessageEmbed} The MessageEmbed instance.
   */
  setImage(image: {url: string}): MessageEmbed;
  /**
   * Sets the thumbnail of the embed.
   * @param {object} thumbnail - The thumbnail of the embed.
   * @param {string} thumbnail.url - The URL of the thumbnail.
   * @returns {MessageEmbed} The MessageEmbed instance.
   */
  setThumbnail(thumbnail: {url: string}): MessageEmbed;
  /**
   * Sets the author of the embed.
   * @param {string} author - The author of the embed.
   * @returns {MessageEmbed} The MessageEmbed instance.
   */
  setAuthor(author: string): MessageEmbed;
  /**
   * Adds multiple fields to the embed.
   * @param {...object|Array<object>} fields - The fields to add to the embed.
   * @returns {MessageEmbed} The MessageEmbed instance.
   */
  addFields(...fields: (object | Array<object>)[]): MessageEmbed;
  /**
   * Adds a single field to the embed.
   * @param {string} name - The name of the field.
   * @param {string} value - The value of the field.
   * @param {boolean} [inline] - Whether the field should be displayed inline.
   * @returns {MessageEmbed} The MessageEmbed instance.
   */
  addField(nm: any, vl: any, il: any): MessageEmbed;
  /**
   * Sets the fields of the embed.
   * @param {...object|Array<object>} fields - The fields to set for the embed.
   * @returns {MessageEmbed} The MessageEmbed instance.
   */
  setFields(...fields: (object | Array<object>)[]): MessageEmbed;
  /**
   * Converts the MessageEmbed instance to a plain object.
   * @returns {object} The plain object representation of the MessageEmbed instance.
   */
  toJSON(): object;
}

export = Modal;
/**
 * A modal message with components.
 * @class
 */
declare class Modal {
  /**
   * @param {Object} data - The data for the modal message.
   * @param {string} data.title - The title of the modal.
   * @param {string} data.custom_id - The custom ID of the modal.
   */
  constructor({title, custom_id}: {title: string; custom_id: string});
  title: string;
  custom_id: string;
  /**
   * Adds one or more components to the modal.
   * @param {...Object[]} components - The components to add.
   * @returns {Modal} This modal instance.
   */
  addComponents(...components: Object[][]): Modal;
  components: any[] | undefined;
  /**
   * Returns a JSON representation of the modal.
   * @returns {Object} The JSON representation of the modal.
   */
  toJSON(): Object;
}

export = RoleSelect;
/**
 * Represents a Discord role select component that allows users to select one or more roles.
 * @class
 */
declare class RoleSelect {
  /**
   * Transforms an option object into a format suitable for the component.
   * @param {Object} options - The option object to transform.
   * @param {string} [options.label] - The text to display on the option.
   * @param {string} [options.value] - The value to be sent to the server when the option is selected.
   * @param {string} [options.description] - The text to display when hovering over the option.
   * @param {(string|Object)} [options.emoji] - The emoji to display next to the option.
   * @param {boolean} [options.default] - Whether the option should be selected by default.
   * @returns {Object} The transformed option object.
   */
  static transformOptions(options?: {
    label?: string | undefined;
    value?: string | undefined;
    description?: string | undefined;
    emoji?: string | Object | undefined;
    default?: boolean | undefined;
  }): Object;
  /**
   * Transforms an emoji to the structure expected by Discord's API.
   * @param {Object} emoji - The emoji to transform.
   * @returns {Object} The transformed emoji.
   * @static
   */
  static transformEmoji(emoji: Object): Object;
  /**
   * Create a role select component.
   * @param {Object} [data] - The data to set in the component.
   * @param {string} [data.custom_id] - The custom ID of the component.
   * @param {string} [data.customId] - The custom ID of the component.
   * @param {Object[]} [data.options] - The options of the component.
   * @param {string} [data.placeholder] - The placeholder text of the component.
   * @param {number} [data.min_values] - The minimum number of values that can be selected.
   * @param {number} [data.max_values] - The maximum number of values that can be selected.
   * @param {number} [data.minValues] - The minimum number of values that can be selected.
   * @param {number} [data.maxValues] - The maximum number of values that can be selected.
   * @param {boolean} [data.disabled] - Whether the component is disabled or not.
   */
  constructor(
    data?:
      | {
          custom_id?: string | undefined;
          customId?: string | undefined;
          options?: Object[] | undefined;
          placeholder?: string | undefined;
          min_values?: number | undefined;
          max_values?: number | undefined;
          minValues?: number | undefined;
          maxValues?: number | undefined;
          disabled?: boolean | undefined;
        }
      | undefined
  );
  type: string;
  customId: string | undefined;
  options: Object[] | undefined;
  placeholder: string | undefined;
  minValues: number | undefined;
  maxValues: number | undefined;
  disabled: boolean | undefined;
  /**
   * Set the custom ID of the component.
   * @param {string} customId - The custom ID to set.
   * @returns {RoleSelect} The RoleSelect object.
   */
  setCustomId(customId: string): RoleSelect;
  /**
   * Set the placeholder text of the component.
   * @param {string} placeholder - The placeholder text to set.
   * @returns {RoleSelect} The RoleSelect object.
   */
  setPlaceholder(placeholder: string): RoleSelect;
  /**
   * Set the minimum number of values that can be selected.
   * @param {number} minValue - The minimum number of values to set.
   * @returns {RoleSelect} The RoleSelect object.
   */
  setMinValues(minValue: number): RoleSelect;
  /**
   * Set the maximum number of values that can be selected.
   * @param {number} maxValue - The maximum number of values to set.
   * @returns {RoleSelect} The RoleSelect object.
   */
  setMaxValues(maxValue: number): RoleSelect;
  /**
   * Set whether the component is disabled or not.
   * @param {boolean} disabled - Whether the component is disabled or not.
   * @returns {RoleSelect} The RoleSelect object.
   */
  setDisabled(disabled: boolean): RoleSelect;
  /**
   * Set the options of the component.
   * @param {Object[]} options - The options to set.
   * @returns {RoleSelect} The RoleSelect object.
   */
  setOptions(options: Object[]): RoleSelect;
  /**
   * Returns the component data in the format expected by Discord's API.
   * @returns {Object} The component data.
   */
  toJSON(): Object;
}

export = Row;
/**
 * A row of buttons to be added to a message component.
 * @class
 */
declare class Row {
  /**
   * @param {Object} [data] - The data for the row.
   * @param {Array<Object>} [data.components] - An array of button components to be included in the row.
   */
  constructor(
    data?:
      | {
          components?: Object[] | undefined;
        }
      | undefined
  );
  /**
   * An array of button components included in the row.
   * @type {Array<Object>}
   */
  components: Array<Object>;
}

export = SelectMenu;
/**
 * Class representing a select menu component.
 * @class
 */
declare class SelectMenu {
  /**
   * Create a select menu.
   * @param {Object} options - The options for the select menu.
   * @param {string} options.customid - The custom ID for the select menu.
   * @param {string} options.placeholder - The placeholder text for the select menu.
   * @param {boolean} [options.disabled=false] - Whether the select menu is disabled.
   * @param {number} [options.minvalues=1] - The minimum number of values that can be selected.
   * @param {number} [options.maxvalues=1] - The maximum number of values that can be selected.
   * @param {Array} [options.options] - The options for the select menu.
   * @returns {Object} - The select menu component.
   */
  constructor({
    customid,
    placeholder,
    disabled,
    minvalues,
    maxvalues,
    options,
  }: {
    customid: string;
    placeholder: string;
    disabled?: boolean | undefined;
    minvalues?: number | undefined;
    maxvalues?: number | undefined;
    options?: any[] | undefined;
  });
  customid: string;
  placeholder: string;
  disabled: boolean;
  minvalues: number;
  maxvalues: number;
  options: any[] | undefined;
}

export = Slash;
/**
 * A class representing a Discord Slash Command.
 * @class
 * @param {Object} [data] - The data for the Slash Command.
 * @param {number | string} [data.type="Chat_Input"] - The type of the command.
 * @param {string} [data.name] - The name of the command.
 * @param {Object} [data.name_localizations] - The localizations of the command name.
 * @param {string} [data.description] - The description of the command.
 * @param {Object} [data.description_localizations] - The localizations of the command description.
 * @param {Array<Object>} [data.options] - The options of the command.
 * @param {string} [data.default_member_permissions] - The default permissions of the command for members.
 * @param {boolean} [data.dm_permission=true] - Whether the command can be used in DMs.
 */
declare class Slash {
  constructor(data?: {});
  type: any;
  name: any;
  nameLocalizations: any;
  description: any;
  descriptionLocalizations: any;
  options: any;
  defaultMemberPermissions: Permissions;
  dmPermission: any;
  /**
   * Sets the type of the Slash Command.
   * @param {number | string} type - The type of the command.
   * @returns {Slash} The Slash instance.
   */
  setType(type: number | string): Slash;
  /**
   * Sets the name of the Slash Command.
   * @param {string} name - The name of the command.
   * @returns {Slash} The Slash instance.
   */
  setName(name: string): Slash;
  /**
   * Sets the description of the Slash Command.
   * @param {string} description - The description of the command.
   * @returns {Slash} The Slash instance.
   */
  setDescriptionLocalizations(localizations: any): Slash;
  /**
   * Sets the localizations of the name of the Slash Command.
   * @param {Object} [localizations] - The localizations of the command name.
   * @returns {Slash} The Slash instance.
   */
  setNameLocalizations(localizations?: Object | undefined): Slash;
  /**
   * Sets the description of the Slash Command.
   * @param {string} description - The description of the command.
   * @returns {Slash} The Slash instance.
   */
  setDescription(description: string): Slash;
  /**
   * Sets the default member permissions of the Slash Command.
   * @param {...number} permission - The permissions of the command for members.
   * @returns {Slash} The Slash instance.
   */
  setDefaultMemberPermissions(...permission: number[]): Slash;
  /**
   * Sets whether the Slash Command can be used in DMs.
   * @param {boolean} permission - Whether the command can be used in DMs.
   * @returns {Slash} The Slash instance.
   */
  setDmPermission(permission: boolean): Slash;
  /**
   * Sets the options of the Slash Command.
   * @param {(Array<Object>|Function)} fn - The options of the command or a function that returns options.
   * @returns {Slash} The Slash instance.
   */
  setOptions(fn: Array<Object> | Function): Slash;
  /**
   * Adds sub-command groups to the Slash Command.
   * @param {(Array<Object>|Function)} fn - The sub-command groups or a function that returns sub-command groups.
   * @returns {Slash} The Slash instance.
   */
  addSubCommandGroups(fn: Array<Object> | Function): Slash;
  /**
   * Adds sub-commands to the Slash Command.
   * @param {(Array<Object>|Function)} fn - The sub-commands or a function that returns sub-commands.
   * @returns {Slash} The Slash instance.
   */
  addSubCommands(fn: Array<Object> | Function): Slash;
  /**
   * Validates the properties of the ApplicationCommand object.
   * @throws {TypeError} If the Application Command Type is invalid or dmPermission is not a boolean.
   * @throws {RangeError} If the context menu command has a description or options, or if the name or description length is invalid, or if the number of options exceeds 25.
   */
  validation(): void;
  /**
   * Converts the ApplicationCommand object to JSON format.
   * @returns {Object} The ApplicationCommand object in JSON format.
   * @throws {TypeError} If the Application Command Type is invalid or dmPermission is not a boolean.
   * @throws {RangeError} If the context menu command has a description or options, or if the name or description length is invalid, or if the number of options exceeds 25.
   */
  toJSON(): Object;
}
import Permissions = require("../../Util/Permissions");

export = SlashOption;
/**
 * Represents an option for a slash command.
 * @class
 */
declare class SlashOption {
  /**
   * Transforms a channel type string to its respective integer value.
   * @param {string} channelType - The channel type string.
   * @returns {number} - The channel type integer value.
   */
  static transformChannelType(channelType: string): number;
  /**
   * Transforms the choices object to a format suitable for the API.
   * @param {Object} choices - The choices object.
   * @param {string} [choices.name] - The name of the choice.
   * @param {string} [choices.value] - The value of the choice.
   * @param {Object.<string, string>} [choices.nameLocalizations] - The localized names of the choice.
   * @returns {Object} - The transformed choices object.
   */
  static transformChoices(choices: {
    name?: string | undefined;
    value?: string | undefined;
    nameLocalizations?:
      | {
          [x: string]: string;
        }
      | undefined;
  }): Object;
  /**
   * Creates a new instance of the SlashOption class.
   * @param {Object} [data] - The data for the option.
   * @param {string|number} [data.type="String"] - The type of the option.
   * @param {string} [data.name] - The name of the option.
   * @param {Object} [data.name_localizations] - The localized names of the option.
   * @param {string} [data.description] - The description of the option.
   * @param {Object} [data.description_localizations] - The localized descriptions of the option.
   * @param {boolean} [data.required] - Whether the option is required or not.
   * @param {Array<Object>} [data.choices] - The choices for the option.
   * @param {Array<string>} [data.channel_types] - The channel types that the option can be used with.
   * @param {number} [data.min_value] - The minimum value for the option.
   * @param {number} [data.max_value] - The maximum value for the option.
   * @param {number} [data.min_length] - The minimum length for the option.
   * @param {number} [data.max_length] - The maximum length for the option.
   * @param {boolean} [data.autocomplete] - Whether the option should be autocompleted or not.
   */
  constructor(
    data?:
      | {
          type?: string | number | undefined;
          name?: string | undefined;
          name_localizations?: Object | undefined;
          description?: string | undefined;
          description_localizations?: Object | undefined;
          required?: boolean | undefined;
          choices?: Object[] | undefined;
          channel_types?: string[] | undefined;
          min_value?: number | undefined;
          max_value?: number | undefined;
          min_length?: number | undefined;
          max_length?: number | undefined;
          autocomplete?: boolean | undefined;
        }
      | undefined
  );
  type: any;
  name: string | undefined;
  nameLocalizations: any;
  description: string | undefined;
  descriptionLocalizations: any;
  required: boolean | undefined;
  choices: Object[] | undefined;
  channelTypes: any;
  minValue: any;
  maxValue: any;
  minLength: any;
  maxLength: any;
  autocomplete: boolean | undefined;
  /**
   * Sets the type of the option.
   * @param {string|number} type - The type of the option.
   * @returns {SlashOption} The updated instance of the SlashOption class.
   */
  setType(type: string | number): SlashOption;
  /**
   * Sets the name of the option.
   * @param {string} name - The name of the option.
   * @returns {SlashOption} The updated instance of the SlashOption class.
   */
  setName(name: string): SlashOption;
  /**
   * Sets the description of the option.
   * @param {string} description - The description of the option.
   * @returns {SlashOption} The updated instance of the SlashOption class.
   */
  setDescription(description: string): SlashOption;
  /**
   * Sets whether the option is required or not.
   * @param {boolean} required - Whether the option is required or not.
   * @returns {SlashOption} The updated instance of the SlashOption class.
   */
  setRequired(required: boolean): SlashOption;
  /**
   * Sets the localized descriptions of the option.
   * @param {Object} localizations - The localized descriptions of the option.
   * @returns {SlashOption} The updated instance of the SlashOption class.
   */
  setDescriptionLocalizations(localizations: Object): SlashOption;
  /**
   * Sets the localized names of the option.
   * @param {Object} [localizations] - The localized names of the option.
   * @returns {SlashOption} The updated instance of the SlashOption class.
   */
  setNameLocalizations(localizations?: Object | undefined): SlashOption;
  /**
   * Sets the choices for the option.
   * @param {...Object|Array<Object>} choices - The choices for the option.
   * @returns {SlashOption} The updated instance of the SlashOption class.
   */
  setChoices(...choices: (Object | Array<Object>)[]): SlashOption;
  /**
   * Sets the channel types that the option can be used with.
   * @param {...string|Array<string>} channelTypes - The channel types that the option can be used with.
   * @returns {SlashOption} The updated instance of the SlashOption class.
   */
  setChannelTypes(...channelTypes: (string | Array<string>)[]): SlashOption;
  /**
   * Sets the minimum value allowed for the option.
   * @param {number} minValue - The minimum value.
   * @returns {SlashOption} - The current instance of the SlashOption class.
   */
  setMinValue(minValue: number): SlashOption;
  /**
   * Sets the maximum value allowed for the option.
   * @param {number} maxValue - The maximum value.
   * @returns {SlashOption} - The current instance of the SlashOption class.
   */
  setMaxValue(maxValue: number): SlashOption;
  /**
   * Sets the minimum length allowed for the option.
   * @param {number} minLength - The minimum length.
   * @returns {SlashOption} - The current instance of the SlashOption class.
   */
  setMinLength(minLength: number): SlashOption;
  /**
   * Sets the maximum length allowed for the option.
   * @param {number} maxLength - The maximum length.
   * @returns {SlashOption} - The current instance of the SlashOption class.
   */
  setMaxLength(maxLength: number): SlashOption;
  /**
   * Sets whether the option is autocompletable.
   * @param {boolean} autocomplete - Whether the option is autocompletable.
   * @returns {SlashOption} - The current instance of the SlashOption class.
   */
  setAutocomplete(autocomplete: boolean): SlashOption;
  /**
   * Validates the option data and throws an error if any data is invalid.
   * @throws {RangeError} - If option type is invalid, option name or description is empty, or length is greater than limit.
   * @throws {TypeError} - If option name or description is not a string, or option required or autocomplete is not a boolean.
   */
  validation(): void;
  /**
   * Returns a JSON representation of the SlashOption instance, after performing validation.
   * @returns {Object} JSON object with the following properties:
   * - type: The type of option, either as a string or an OptionType enum value.
   * - name: The name of the option.
   * - name_localizations: An object containing localized names for the option.
   * - description: A description of the option.
   * - description_localizations: An object containing localized descriptions for the option.
   * - required: A boolean indicating whether the option is required.
   * - choices: An array of choice objects for the option, if applicable.
   * - channel_types: An array of channel type objects for the option, if applicable.
   * - min_value: The minimum value for the option, if applicable.
   * - max_value: The maximum value for the option, if applicable.
   * - max_length: The maximum length of the option, if applicable.
   * - min_length: The minimum length of the option, if applicable.
   * - autocomplete: A boolean indicating whether the option supports autocomplete.
   */
  toJSON(): Object;
}

export = SlashSubCommandGroups;
/**
 * Represents a sub-command group for a slash command.
 * @class
 */
declare class SlashSubCommandGroups {
  /**
   * @param {Object} [data] - The data for the sub-command group.
   * @param {string} [data.name] - The name of the sub-command group.
   * @param {string} [data.description] - The description of the sub-command group.
   * @param {Object} [data.nameLocalizations] - The name localizations of the sub-command group.
   * @param {Object} [data.descriptionLocalizations] - The description localizations of the sub-command group.
   * @param {Object[]} [data.options] - The sub-commands of the sub-command group.
   */
  constructor(
    data?:
      | {
          name?: string | undefined;
          description?: string | undefined;
          nameLocalizations?: Object | undefined;
          descriptionLocalizations?: Object | undefined;
          options?: Object[] | undefined;
        }
      | undefined
  );
  type: string;
  name: string | undefined;
  description: string | undefined;
  nameLocalizations: any;
  descriptionLocalizations: any;
  options: Object[];
  /**
   * Sets the name of the sub-command group.
   * @param {string} name - The name of the sub-command group.
   * @returns {SlashSubCommandGroups} The sub-command group object.
   */
  setName(name: string): SlashSubCommandGroups;
  /**
   * Sets the description of the sub-command group.
   * @param {string} description - The description of the sub-command group.
   * @returns {SlashSubCommandGroups} The sub-command group object.
   */
  setDescription(description: string): SlashSubCommandGroups;
  /**
   * Sets the description localizations of the sub-command group.
   * @param {Object} localizations - The description localizations of the sub-command group.
   * @returns {SlashSubCommandGroups} The sub-command group object.
   */
  setDescriptionLocalizations(localizations: Object): SlashSubCommandGroups;
  /**
   * Sets the name localizations of the sub-command group.
   * @param {Object} [localizations] - The name localizations of the sub-command group.
   * @returns {SlashSubCommandGroups} The sub-command group object.
   */
  setNameLocalizations(localizations?: Object | undefined): SlashSubCommandGroups;
  /**
   * Adds sub-commands to the sub-command group.
   * @param {Function|Object[]} fn - The sub-command builder function or array of sub-command objects.
   * @returns {SlashSubCommandGroups} The sub-command group object.
   * @throws {RangeError} Will throw an error if the sub-command builder is not of type 'SlashSubCommandBuilder'.
   */
  addSubCommands(fn: Function | Object[]): SlashSubCommandGroups;
  /**
   * Returns a JSON representation of the sub-command group.
   * @returns {Object} The JSON representation of the sub-command group.
   */
  toJSON(): Object;
}

export = SlashSubCommands;
/**
 * A class representing a slash subcommand for Discord slash commands.
 * @class
 */
declare class SlashSubCommands {
  /**
   * Create a new SlashSubCommands instance.
   * @param {Object} data - The data for the subcommand.
   * @param {string} data.name - The name of the subcommand.
   * @param {string} data.description - The description of the subcommand.
   * @param {Object} data.name_localizations - The localized names of the subcommand.
   * @param {Object} data.description_localizations - The localized descriptions of the subcommand.
   * @param {Array<Object>} data.options - The options for the subcommand.
   */
  constructor(data?: {name: string; description: string; name_localizations: Object; description_localizations: Object; options: Array<Object>});
  type: string;
  name: string;
  description: string;
  nameLocalizations: Object;
  descriptionLocalizations: Object;
  options: Object[];
  /**
   * Set the name of the subcommand.
   * @param {string} name - The name of the subcommand.
   * @returns {SlashSubCommands} The updated SlashSubCommands instance.
   */
  setName(name: string): SlashSubCommands;
  /**
   * Set the description of the subcommand.
   * @param {string} description - The description of the subcommand.
   * @returns {SlashSubCommands} The updated SlashSubCommands instance.
   */
  setDescription(description: string): SlashSubCommands;
  /**
   * Set the localized descriptions of the subcommand.
   * @param {Object} localizations - The localized descriptions of the subcommand.
   * @returns {SlashSubCommands} The updated SlashSubCommands instance.
   */
  setDescriptionLocalizations(localizations: Object): SlashSubCommands;
  /**
   * Set the localized names of the subcommand.
   * @param {Object} localizations - The localized names of the subcommand.
   * @returns {SlashSubCommands} The updated SlashSubCommands instance.
   */
  setNameLocalizations(localizations?: Object): SlashSubCommands;
  /**
   * Set the options for the subcommand.
   * @param {Object|function} fn - The options for the subcommand.
   * @returns {SlashSubCommands} The updated SlashSubCommands instance.
   */
  setOptions(fn: Object | Function): SlashSubCommands;
  /**
   * Convert the SlashSubCommands instance to a JSON object.
   * @returns {Object} The JSON representation of the SlashSubCommands instance.
   */
  toJSON(): Object;
}

export = StringSelect;
/**
 * Represents a select menu with string options.
 * @class
 */
declare class StringSelect {
  /**
   * Transforms an option object for a string select component into a simpler format.
   * @param {Object} [options] - The option object to transform.
   * @returns {Object} - The transformed option object.
   * @throws {RangeError} - If the option object is missing the label or value properties, or if the default property is not a boolean.
   */
  static transformOptions(options?: Object | undefined): Object;
  /**
   * Transforms an emoji object for a string select component into a simpler format.
   * @param {Object} emoji - The emoji object to transform.
   * @returns {Object} - The transformed emoji object.
   */
  static transformEmoji(emoji: Object): Object;
  /**
   * @param {Object} [data] - The data for the select menu.
   */
  constructor(data?: Object | undefined);
  type: string;
  customId: any;
  options: any;
  placeholder: any;
  minValues: any;
  maxValues: any;
  disabled: any;
  /**
   * Sets the custom ID for the select menu.
   * @param {string} customId - The custom ID for the select menu.
   * @returns {StringSelect} - The updated StringSelect instance.
   */
  setCustomId(customId: string): StringSelect;
  /**
   * Sets the placeholder text for the select menu.
   * @param {string} placeholder - The placeholder text for the select menu.
   * @returns {StringSelect} - The updated StringSelect instance.
   */
  setPlaceholder(placeholder: string): StringSelect;
  /**
   * Sets the minimum number of values that can be selected in the select menu.
   * @param {number} minValue - The minimum number of values that can be selected.
   * @returns {StringSelect} - The updated StringSelect instance.
   */
  setMinValues(minValue: number): StringSelect;
  /**
   * Sets the maximum number of values that can be selected in the select menu.
   * @param {number} maxValue - The maximum number of values that can be selected.
   * @returns {StringSelect} - The updated StringSelect instance.
   */
  setMaxValues(maxValue: number): StringSelect;
  /**
   * Sets whether the select menu is disabled.
   * @param {boolean} disabled - Whether the select menu is disabled.
   * @returns {StringSelect} - The updated StringSelect instance.
   */
  setDisabled(disabled: boolean): StringSelect;
  /**
   * Sets the options for the select menu.
   * @param {Object[]} [options=[]] - The options for the select menu.
   * @returns {StringSelect} - The updated StringSelect instance.
   * @throws {RangeError} - If the options array has more than 25 items.
   */
  setOptions(options?: Object[] | undefined): StringSelect;
  /**
   * Adds options to the select menu.
   * @param {Object[]} [options=[]] - The options to add to the select menu.
   * @returns {StringSelect} - The updated StringSelect instance.
   * @throws {RangeError} - If the options array has more items than can be added to the select menu.
   * @throws {RangeError} - If no options are provided to add to the select menu.
   */
  addOptions(options?: Object[] | undefined): StringSelect;
  /**
   * Returns the JSON representation of the select menu.
   * @returns {Object} - The JSON representation of the select menu.
   */
  toJSON(): Object;
}

export = UserSelect;
/**
 * Represents a user select component in a Discord interaction.
 * @class
 */
declare class UserSelect {
  /**
   * Transforms an option object for a user select component into a simpler format.
   * @param {Object} [options] - The option object to transform.
   * @returns {Object} - The transformed option object.
   */
  static transformOptions(options?: Object | undefined): Object;
  /**
   * Transforms a Discord emoji object or string into a simpler format.
   * @param {Object|string} emoji - The Discord emoji object or string to transform.
   * @returns {Object} - The transformed emoji object.
   */
  static transformEmoji(emoji: Object | string): Object;
  /**
   * Creates a new instance of UserSelect.
   * @constructor
   * @param {Object} [data] - The data to create the UserSelect instance.
   * @param {string} [data.custom_id] - The custom ID of the user select.
   * @param {Object[]} [data.options] - The options for the user select.
   * @param {string} [data.options.label] - The label for the option.
   * @param {string} [data.options.value] - The value for the option.
   * @param {string} [data.options.description] - The description for the option.
   * @param {(string|Object)} [data.options.emoji] - The emoji for the option.
   * @param {string} [data.options.emoji.name] - The name of the emoji.
   * @param {string} [data.options.emoji.id] - The ID of the emoji.
   * @param {boolean} [data.options.emoji.animated] - Whether the emoji is animated.
   * @param {boolean} [data.options.default] - Whether the option is the default one.
   * @param {string} [data.placeholder] - The placeholder text for the user select.
   * @param {number} [data.min_values] - The minimum number of values that can be selected.
   * @param {number} [data.max_values] - The maximum number of values that can be selected.
   * @param {boolean} [data.disabled] - Whether the user select is disabled.
   */
  constructor(
    data?:
      | {
          custom_id?: string | undefined;
          options?:
            | {
                label?: string | undefined;
                value?: string | undefined;
                description?: string | undefined;
                emoji?: string | Object | undefined;
              }[]
            | undefined;
        }
      | undefined
  );
  type: string;
  customId: any;
  options: Object[] | undefined;
  placeholder: any;
  minValues: any;
  maxValues: any;
  disabled: any;
  /**
   * Sets the custom ID for the user select component.
   * @param {string} customId - The custom ID to set.
   * @returns {UserSelect} - The updated user select component.
   */
  setCustomId(customId: string): UserSelect;
  /**
   * Sets the placeholder text for the user select component.
   * @param {string} placeholder - The placeholder text to set.
   * @returns {UserSelect} - The updated user select component.
   */
  setPlaceholder(placeholder: string): UserSelect;
  /**
   * Sets the minimum number of values that can be selected in the user select component.
   * @param {number} minValue - The minimum number of values to set.
   * @returns {UserSelect} - The updated user select component.
   */
  setMinValues(minValue: number): UserSelect;
  /**
   * Sets the maximum number of values that can be selected in the user select component.
   * @param {number} maxValue - The maximum number of values to set.
   * @returns {UserSelect} - The updated user select component.
   */
  setMaxValues(maxValue: number): UserSelect;
  /**
   * Sets whether the user select component is disabled.
   * @param {boolean} disabled - Whether the user select component is disabled.
   * @returns {UserSelect} - The updated user select component.
   */
  setDisabled(disabled: boolean): UserSelect;
  /**
   * Sets the options for the user select component.
   * @param {Array<Object>} options - An array of option objects to set.
   * @returns {UserSelect} - The updated user select component.
   */
  setOptions(options: Array<Object>): UserSelect;
  /**
   * Converts the user select component to a plain object that can be sent in a Discord message.
   * @returns {Object} - The user select component as a plain object.
   */
  toJSON(): Object;
}

export = Client;
/**
 * Represents a Discord client.
 * @extends EventEmitter
 * @class
 */
declare class Client extends EventEmitter {
  /**
   * Generates a template guild object with optional properties.
   * @param {Object} o - An object containing optional properties for the guild.
   * @param {string} o.name - The name of the guild. If not provided, it will be set to undefined.
   * @param {string} o.icon - The icon of the guild. If provided, it will be converted to a base64 string.
   * @returns {Object} - The generated guild object with optional properties.
   */
  static generateTemplateGuild(o?: {name: string; icon: string}): Object;
  /**
   * Transforms the given invite options object into a new object with specific properties.
   * @param {Object} o - The invite options object.
   * @param {boolean} [o.withCounts] - Whether to include counts in the invite.
   * @param {boolean} [o.withExpiration] - Whether to include expiration in the invite.
   * @param {string | undefined} [o.guildScheduledEvent] - The ID of the guild scheduled event.
   * @returns {Object} - The transformed invite options object.
   */
  static transformInviteOptions(o?: {
    withCounts?: boolean | undefined;
    withExpiration?: boolean | undefined;
    guildScheduledEvent?: string | undefined;
  }): Object;
  /**
   * Transforms a presence object into a new format.
   * @param {Object} [presence] - The presence object to transform.
   * @returns {Object} - The transformed presence object.
   */
  static transformPresence(presence?: Object | undefined): Object;
  /**
   * Transforms the activities object into a new format.
   * @param {Object} activities - The activities object to transform.
   * @returns {Object} - The transformed activities object.
   * - name: The name of the activity. If not provided, it will be set to undefined.
   * - type: The type of the activity. If not provided or not a string, it will be set to 0.
   * - url: The URL of the activity. If not provided, it will be set to undefined.
   */
  static transformActivities(activities?: Object): Object;
  /**
   * @constructor
   * @param {Object} [options] - The options to set for the client.
   * @param {Array<String>} [options.intents=Intents.Flags.Guilds] - The intents to use for the client.
   * @param {String} options.token - The bot token to use for authorization.
   * @param {Object} [options.presence] - The presence options for the client.
   * @param {Number} [options.maxShards=1] - The maximum number of shards for the client.
   * @param {Number} [options.shardId=0] - The shard ID for the client.
   * @param {String} [options.version="10"] - The API version to use for the client.
   * @param {String} [options.encoding="json"] - The encoding to use for the client.
   * @param {Number} [options.timeout=15000] - The timeout for REST requests.
   * @param {Number} [options.restRequestTimeout=15000] - The timeout for REST requests in milliseconds.
   * @param {Number} [options.restReadyTimeout=2000] - The timeout for the REST ready event in milliseconds.
   * @param {Array<String>} [options.partials=[]] - The partials to use for the client.
   */
  constructor(
    options?:
      | {
          intents?: string[] | undefined;
          token: string;
          presence?: Object | undefined;
          maxShards?: number | undefined;
          shardId?: number | undefined;
          version?: string | undefined;
          encoding?: string | undefined;
          timeout?: number | undefined;
          restRequestTimeout?: number | undefined;
          restReadyTimeout?: number | undefined;
          partials?: string[] | undefined;
        }
      | undefined
  );
  intents: Intents;
  token: string;
  presence: Object;
  restRequestTimeout: number;
  restReadyTimeout: number;
  maxShards: number;
  shardId: number;
  version: string;
  encoding: string;
  partials: string[];
  root: string;
  oauth2: string;
  cdnRoot: string;
  websocketURL: string;
  webhookURL: string;
  readyAt: any;
  application: any;
  channels: ChannelManager;
  guilds: GuildManager;
  users: UserManager;
  roles: RoleManager;
  emojis: EmojiManager;
  ws: WebsocketManager;
  heartbeatInterval: any;
  /**
   * Getter method that returns a new instance of the REST class with the token set.
   * @returns {REST} - A new instance of the REST class with the token set.
   */
  get api(): REST;
  /**
   * The function returns the value of the CDN variable.
   * @returns The CDN property.
   */
  get cdn(): {
    root: string;
    DefaultAvatarURL: (id: any, format?: string) => string;
    UserAvatar: (avatar: any, dynamic: any, size: any, format: string | undefined, userId: any) => string;
    UserBanner: (banner: any, dynamic: any, size: any, format: string | undefined, userId: any) => string;
    GuildMemberBanner: (banner: any, dynamic: any, size: any, format: string | undefined, memberId: any, guildId: any) => string;
    TeamIcon: (icon: any, dynamic: any, size: any, format: string | undefined, teamId: any) => string;
    ApplicationIcon: (icon: any, dynamic: any, size: any, format: string | undefined, applicationId: any) => string;
    ChannelBanner: (banner: any, dynamic: any, size: any, format: string | undefined, channelId: any) => string;
    GuildIcon: (icon: any, dynamic: any, size: any, format: string | undefined, guildId: any) => string;
    GuildBanner: (banner: any, dynamic: any, size: any, format: string | undefined, guildId: any) => string;
    GuildSplash: (splash: any, dynamic: any, size: any, format: string | undefined, guildId: any) => string;
    GuildDiscoverySplash: (discoverySplash: any, dynamic: any, size: any, format: string | undefined, guildId: any) => string;
    RoleIcon: (roleIcon: any, dynamic: any, size: any, format: string | undefined, roleId: any) => string;
    GuildMemberAvatar: (avatar: any, dynamic: any, size: any, format: string | undefined, memberId: any, guildId: any) => string;
    GuildScheduledEventCoverImage: (coverImage: any, dynamic: any, size: any, format: string | undefined, eventId: any) => string;
    StickerPackBanner: (bannerId: any, size: any, format?: string) => string;
    StickerImage: (stickerId: any, size: any, format?: string) => string;
    WebhookAvatar: (avatar: any, dynamic: any, size: any, format: string | undefined, webhookId: any) => string;
    UserAvatarDecoration: (decoration: any, size: any, format: string | undefined, userId: any) => string;
    EmojiURL: (emojiId: any, dynamic: any, size: any, format: string | undefined, quality: any) => string;
  };
  /**
   * Fetches an invitation using the provided invite code and query parameters.
   * @param {string | object} invite - The invitation code or an object containing the invite code.
   * @param {object} query - The query parameters to include in the request.
   * @returns {Promise<Invite>} A promise that resolves to an Invite object representing the fetched invitation.
   * @throws {RangeError} If no invitation code is specified.
   */
  fetchInvite(invite: string | object, query: object): Promise<Invite>;
  /**
   * Fetches the preview information for a guild.
   * @param {string | Guild} guild - The guild ID or guild object for which to fetch the preview.
   * @returns {Promise<GuildPreview>} - A promise that resolves to a GuildPreview object containing the preview information.
   */
  fetchPreview(guild: string | Guild): Promise<GuildPreview>;
  /**
   * Fetches the guild widget for the specified guild.
   * @param {string | Guild} guild - The guild ID or guild object for which to fetch the widget.
   * @returns {Promise<GuildWidget>} - A promise that resolves to a GuildWidget object representing the guild widget.
   */
  fetchGuildWidget(guild: string | Guild): Promise<GuildWidget>;
  /**
   * Fetches the voice regions from the API.
   * @returns {Promise<RaidenCol<VoiceRegion>>} - A promise that resolves to a collection of VoiceRegion objects.
   */
  fetchVoiceRegions(): Promise<RaidenCol<VoiceRegion>>;
  /**
   * Generates a template using the provided code and options.
   * @param {string | object} code - The code or URL of the server template.
   * @param {object} [options] - Additional options for generating the template.
   * @returns {Promise<Guild>} A promise that resolves with the created guild.
   * @throws {RangeError} If the server template code is not provided.
   */
  generateTemplate(code: string | object, options?: object | undefined): Promise<Guild>;
  /**
   * Generates an invite URL for the bot with the specified options.
   * @param {Object} [options] - The options for generating the invite URL.
   * @param {Array<string>} [options.scopes] - The scopes to request from the user.
   * @param {Array<string>} [options.permissions] - The permissions to request from the user.
   * @param {boolean} [options.guildSelect] - Whether to enable guild selection in the invite flow.
   * @param {string|Guild} [options.guild] - The guild to pre-select in the invite flow.
   * @param {string} [options.responseType] - The response type to use for the invite.
   * @returns {string|undefined}
   */
  generateInvite(
    options?:
      | {
          scopes?: string[] | undefined;
          permissions?: string[] | undefined;
          guildSelect?: boolean | undefined;
          guild?: string | Guild;
          responseType?: string | undefined;
        }
      | undefined
  ): string | undefined;
  /**
   * Emits a debug event with the given message.
   * @param {any} message - The debug message to emit.
   * @returns None
   */
  debug(message: any): boolean;
  /**
   * Fetches a sticker from the server.
   * @param {string | Sticker} sticker - The sticker ID or the sticker object.
   * @returns {Promise<Sticker>} - A promise that resolves to a Sticker object.
   */
  fetchSticker(sticker: string | Sticker): Promise<Sticker>;
  /**
   * Fetches the Nitro Packs from the API.
   * @returns {Promise<RaidenCol>} - A promise that resolves to a RaidenCol object containing the fetched sticker packs.
   * @throws {Error} - If there is an error fetching the sticker packs.
   */
  fetchNitroPacks(): Promise<RaidenCol>;
  /**
   * Fetches a guild template from the server using the provided code.
   * @param {string} code - The code of the guild template to fetch.
   * @throws {RangeError} If the server template code is not provided.
   * @returns {Promise<GuildTemplate>} A promise that resolves to a GuildTemplate object.
   */
  fetchGuildTemplate(code: string): Promise<GuildTemplate>;
}
import {EventEmitter} from "events";
import Intents = require("../Util/Intents");
import ChannelManager = require("../Managers/ChannelManager");
import GuildManager = require("../Managers/GuildManager");
import UserManager = require("../Managers/UserManager");
import RoleManager = require("../Managers/RoleManager");
import EmojiManager = require("../Managers/EmojiManager");
import WebsocketManager = require("../Managers/WebsocketManager");
import REST = require("../REST/REST");
import Invite = require("../Structures/Invite");
import GuildPreview = require("../Structures/GuildPreview");
import GuildWidget = require("../Structures/GuildWidget");
import {RaidenCol} from "../Util/@Collections/RaidenCol";
import VoiceRegion = require("../Structures/VoiceRegion");
import Sticker = require("../Structures/Sticker");
import GuildTemplate = require("../Structures/GuildTemplate");

export = BitfieldInvalid;
/**
 * Custom error class for representing an invalid bitfield.
 */
declare class BitfieldInvalid extends Error {
  /**
   * Constructs a new instance of the BitfieldInvalid error.
   * @param {Object} data - The data object containing the error message and bit value.
   * @param {string} data.message - The error message.
   * @param {number} data.bit - The invalid bit value.
   */
  constructor(data: {message: string; bit: number});
  bit: number;
}

export = DiscordAPIError;
/**
 * Represents an error that occurs when making a request to the Discord API.
 */
declare class DiscordAPIError extends Error {
  /**
   * Constructs a new DiscordAPIError object.
   * @constructor
   * @param {Object} [data] - The data object containing error information.
   * @param {string} data.message - The error message.
   * @param {string} data.code - The error code.
   * @param {string} data.method - The HTTP method used for the request.
   * @param {number} data.httpError - The HTTP error code.
   * @param {string} data.path - The path of the request.
   * @param {Object} data.rawError - The raw error object.
   * @param {string[]} data.rawError.errors - The array of error messages.
   * @param {string} data.rawError.error - The error message.
   * @param {string} data.requestData  The request data
   */
  constructor(
    data?:
      | {
          message: string;
          code: string;
          method: string;
          httpError: number;
          path: string;
          rawError: {
            errors: string[];
            error: string;
          };
          requestData: string;
        }
      | undefined
  );
  code: string;
  method: string;
  httpError: number;
  path: string;
  rawError: string[];
  requestData: string;
}

export = WebsocketError;
/**
 * Custom error class for WebSocket errors.
 */
declare class WebsocketError extends Error {
  /**
   * Constructs a new instance of the Error class.
   * @constructor
   * @param {Object} [error] - The error object containing the error message, code, and raw error.
   * @param {string} [error.message] - The error message.
   * @param {number} [error.code] - The error code.
   * @param {Object} [error.rawError] - The raw error object.
   */
  constructor(
    error?:
      | {
          message?: string | undefined;
          code?: number | undefined;
          rawError?: Object | undefined;
        }
      | undefined
  );
  code: number | undefined;
  rawError: Object;
}

export = Heartbeat;
/**
 * The Heartbeat class sends a heartbeat to the Discord server in response to a request.
 */
declare class Heartbeat extends Base {
  /**
   * The constructor function initializes an instance of a class and calls a private method.
   * @constructor
   * @param {Client} client - The "client" parameter is an object that represents the client or the user of the
   * constructor. It could be an instance of a class or an object that contains information about the
   * client.
   */
  constructor(client: Client);
  /**
   * The function sends a heartbeat to the Discord server in response to a request.
   * @returns The message "[Websocket]: Successfully sent a heartbeat" is being returned.
   */
  _patch(): any;
}
import Base = require("../Base/base");

export = HeartbeatAck;
/**
 * The HeartbeatAck class is a subclass of the Base class that updates the last heartbeat
acknowledgement time and sets a flag to indicate that the heartbeat has been acknowledged.
 */
declare class HeartbeatAck extends Base {
  /**
   * The constructor function initializes an instance of a class and calls a private method.
   * @constructor
   * @param {Client} client - The "client" parameter is an object that represents the client or the user of the
   * constructor. It could be an instance of a class or an object that contains information about the
   * client.
   */
  constructor(client: Client);
  /**
   * The function updates the last heartbeat acknowledgement time and sets a flag to indicate that the
   * heartbeat has been acknowledged.
   * @returns The return statement is returning a debug message indicating that the heartbeat has been
   * acknowledged and specifying when the next heartbeat will be sent.
   */
  _patch(): any;
}
import Base = require("../Base/base");

export = Hello;
/**
 * The `Hello` class is a subclass of `Base` that handles the initialization of an object with optional
data and a client parameter, sets up a heartbeat interval, and handles reconnection or resumption of
a WebSocket connection.
 */
declare class Hello extends Base {
  /**
   * This is a constructor function that initializes an object with optional data and a client
   * parameter.
   * @constructor
   * @param {Object} data - The `data` parameter is an object that contains the initial data for the
   * constructor. It is optional and defaults to an empty object if not provided.
   * @param {Client} client - The `client` parameter is an object that represents the client or connection to a
   * server. It is typically used to make API requests or perform other operations related to the
   * server.
   */
  constructor(data: Object | undefined, client: Client);
  /**
   * The function sets up the heartbeat interval and handles the reconnection or resumption of the
   * WebSocket connection.
   * @param data - The `data` parameter is the data received from the server. It is an object that
   * contains the `d` property, which is the payload of the received message.
   */
  _patch(data: any): void;
  /**
   * The function `handleheartBeat()` sends a heartbeat message to the server at a random interval and
   * handles reconnection if the connection is not acknowledged.
   * @returns In the given code snippet, the function `handleheartBeat()` does not explicitly return
   * any value. Therefore, it implicitly returns `undefined`.
   */
  handleheartBeat(): any;
}
import Base = require("../Base/base");

export = InvalidSession;
/**
 * The `InvalidSession` class is a subclass of `Base` that handles invalid session errors in a
WebSocket connection.
 */
declare class InvalidSession extends Base {
  /**
   * This is a constructor function that initializes an object with optional data and a client
   * parameter.
   * @constructor
   * @param {Object} data - The `data` parameter is an object that contains the initial data for the
   * constructor. It is optional and defaults to an empty object if not provided.
   * @param {Client} client - The `client` parameter is an object that represents the client or connection to a
   * server. It is typically used to make API requests or perform other operations related to the
   * server.
   */
  constructor(data: Object | undefined, client: Client);
  /**
   * The function checks if a packet is true, and if so, it reconnects the websocket; otherwise, it
   * closes the websocket connection and exits the process.
   * @param data - The `data` parameter is the input data that is being passed to the `_patch`
   * function.
   * @returns either the result of the `this.client.ws.handleReconnect()` function call or the result
   * of the `process.exit()` function call.
   */
  _patch(data: any): any;
}
import Base = require("../Base/base");

export = Resume;
/**
 * Represents a Resume action for the Resume class, which extends the BaseAction class.
 */
declare class Resume extends BaseAction {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Client} client - The client object used for communication with the server.
   */
  constructor(client: Client);
  /**
   * Method called when the gateway connection is successfully resumed.
   * Logs a debug message indicating the number of events that were replayed.
   * @returns None
   */
  _patch(): any;
}
import BaseAction = require("../Actions/BaseAction");

export const REST: typeof import("./REST/REST");
export const Client: typeof import("./Client/Client");
export const Bitfield: typeof import("./Util/Bitfield");
export const Intents: typeof import("./Util/Intents");
export const Permissions: typeof import("./Util/Permissions");
export const ActivityFlags: typeof import("./Util/ActivityFlags");
export const MessageFlags: typeof import("./Util/MessageFlags");
export const ApplicationFlags: typeof import("./Util/ApplicationFlags");
export const UserFlags: typeof import("./Util/UserFlags");
export const GuildMemberFlags: typeof import("./Util/GuildMemberFlags");
export const ChannelFlags: typeof import("./Util/ChannelFlags");
export const RoleFlags: typeof import("./Util/RoleFlags");
export const SystemChannelFlags: typeof import("./Util/SystemChannelFlags");
export const WebsocketManager: typeof import("./Managers/WebsocketManager");
export const Message: typeof import("./Structures/Message");
export const MessageActionRow: typeof import("./Builders/MessageActionRow");
export const MessageButton: typeof import("./Builders/MessageButton");
export const StringSelect: typeof import("./Builders/StringSelect");
export const UserSelect: typeof import("./Builders/UserSelect");
export const ChannelSelect: typeof import("./Builders/ChannelSelect");
export const InputText: typeof import("./Builders/InputText");
export const MessageAttachment: typeof import("./Builders/MessageAttachment");
export const MessageEmbed: typeof import("./Builders/MessageEmbed");
export const Modal: typeof import("./Builders/Modal");
export const Embed: typeof import("./Builders/EmbedBuilder");
export const Button: typeof import("./Builders/ButtonBuilder");
export const Row: typeof import("./Builders/RowBuilder");
export const SelectMenuBuilder: typeof import("./Builders/SelectMenuBuilder");
export const Slash: typeof import("./Builders/Slash/Slash");
export const SlashOption: typeof import("./Builders/Slash/SlashOption");
export const SlashSubCommands: typeof import("./Builders/Slash/SlashSubCommands");
export const SlashSubCommandGroups: typeof import("./Builders/Slash/SlashSubCommandGroup");
export const Util: typeof import("./Util/Util");
export const ComponentTypes: {
  Action_Row: number;
  Button: number;
  String_Select: number;
  Input_Text: number;
  User_Select: number;
  Role_Select: number;
  Mentionable_Select: number;
  Channel_Select: number;
};
export const Activity: {
  Playing: number;
  Streaming: number;
  Listening: number;
  Watching: number;
  Custom: number;
  Competing: number;
};
export const Status: {
  Online: string;
  Dnd: string;
  Idle: string;
  Invisible: string;
  Offline: string;
};
export const Colors: {
  Default: number;
  White: number;
  Aqua: number;
  Green: number;
  Blue: number;
  Yellow: number;
  Purple: number;
  Luminous_Vivid_Pink: number;
  Fuchsia: number;
  Gold: number;
  Orange: number;
  Red: number;
  Grey: number;
  Navy: number;
  Dark_Aqua: number;
  Dark_Green: number;
  Dark_Blue: number;
  Dark_Purple: number;
  Dark_Vivid_Pink: number;
  Dark_Gold: number;
  Dark_Orange: number;
  Dark_Red: number;
  Dark_Grey: number;
  Darker_Grey: number;
  Light_Grey: number;
  Dark_Navy: number;
  Blurple: number;
  Greyple: number;
  Dark_But_Not_Black: number;
  Not_Quite_Black: number;
};
export const ButtonStyle: {};
export const InputTextStyle: {
  Short: number;
  Paragraph: number;
};
export const ApiVersion: {
  V6: number;
  V7: number;
  V8: number;
  V9: number;
  V10: number;
};
export const ApplicationCommandType: {
  Chat_Input: number;
  User: number;
  Message: number;
};
export const InviteTargetTypes: {};
export const Opcodes: {
  Dispatch: number;
  Heartbeat: number;
  Identify: number;
  Presence_Update: number;
  Voice_State_Update: number;
  Resume: number;
  Reconnect: number;
  Request_Guild_Members: number;
  Invalid_Session: number;
  Hello: number;
  Heartbeat_Ack: number;
};
export const OptionType: {};
export const WebhookClient: typeof import("./Structures/WebhookClient");
export const InteractionWebhook: typeof import("./Structures/InteractionWebhook");
export const GuildMemberVerificationFields: typeof import("./Builders/GuildMemberVerificationFields");
export const RaidenCol: typeof import("./Util/@Collections/RaidenCol").RaidenCol;
export const Snowflake: typeof import("./Util/Snowflake");
export const Version: any;

export = ActionsManager;
/**
 * It's a class that handles all the events that the client receives from the Discord API.
 * @class
 */
declare class ActionsManager {
  /**
   * It defines a property called client, and sets it to the client variable
   * @constructor
   * @param {Object} message - The message object that was sent.
   * @param {Client} client - The client that instantiated the message.
   */
  constructor(message: Object, client: Client);
  /**
   * Parses and handles different types of Discord gateway messages.
   * @param {Object} message - The message object received from the gateway.
   * @returns {Object} - An instance of the corresponding message class.
   */
  _patch(message: Object): Object;
}

export = ApplicationCommandManager;
/**
 * Represents a manager for application commands.
 * @class
 * @extends Base
 */
declare class ApplicationCommandManager extends Base {
  /**
   * Transforms the given options object into the appropriate JSON format based on its type.
   * @param {object} options - The options object to transform.
   * @returns {object} The transformed options object in JSON format.
   */
  static transformOptions(options?: object): object;
  /**
   * Transforms the payload object into a standardized format for application commands.
   * @param {Object} payload - The payload object containing the command details.
   * @returns {Object} - The transformed payload object.
   * @throws {RangeError} - If the payload is missing required fields or if the field values are out of range.
   */
  static transformPayload(payload?: Object): Object;
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Client} client - The client object used for communication with the server.
   */
  constructor(client: Client);
  /**
   * Adds a command to the command cache.
   * @param {string | ApplicationCommand} commands - The command or command ID to add.
   * @param {string} [guild=this.guildId] - The ID of the guild to add the command to.
   * @param {object} [options={cache: true, force: false}] - Additional options for adding the command.
   * @param {boolean} [options.cache=true] - Whether to cache the command.
   * @param {boolean} [options.force=false] - Whether to force adding the command even if it already exists in the cache.
   * @returns {ApplicationCommand} The added command.
   */
  _add(
    commands: string | ApplicationCommand,
    guild?: string | undefined,
    options?:
      | {
          cache?: boolean | undefined;
          force?: boolean | undefined;
        }
      | undefined
  ): ApplicationCommand;
  /**
   * Creates a new application command.
   * @param {Object} [options] - The options for the command.
   * @param {string | Guild} [guild=this.guildId] - The guild ID or guild object where the command should be created.
   * @returns {Promise<ApplicationCommand>} A promise that resolves with the created application command.
   * @throws {Error} If the command creation fails.
   */
  create(options?: Object | undefined, guild?: string | Guild): Promise<ApplicationCommand>;
  /**
   * Sets the application commands for the specified guild or globally.
   * @param {Object[]} [options=[{}]] - An array of options for the application commands.
   * @param {string|Guild} [guild=this.guildId] - The guild ID or guild object to set the commands for.
   * @returns {Promise<Cache>} A promise that resolves to a new instance of the cache with the updated commands.
   */
  set(options?: Object[] | undefined, guild?: string | Guild): Promise<Cache>;
  /**
   * Fetches commands from the API based on the provided command and options.
   * @param {string | ApplicationCommand} command - The command to fetch. Can be an ID, a string, or an object.
   * @param {object} options - The options for fetching the commands.
   * @param {boolean} options.cache - Whether to use the cache for fetching the commands.
   * @param {boolean} options.force - Whether to force fetch the commands.
   * @param {string} options.guild - The ID of the guild to fetch the commands from.
   * @param {boolean} options.withLocalizations - Whether to include localizations in the fetched commands.
   * @returns {Promise} A promise that resolves to the fetched commands.
   */
  fetch(
    command: string | ApplicationCommand,
    options: {
      cache: boolean;
      force: boolean;
      guild: string;
      withLocalizations: boolean;
    }
  ): Promise<any>;
  /**
   * Deletes an application command from the specified guild or the default guild.
   * @param {string | ApplicationCommand} command - The ID or the ApplicationCommand object to delete.
   * @param {string | Guild} [guild=this.guildId] - The ID or the Guild object where the command is located.
   * @returns {Promise<ApplicationCommand>} - The deleted ApplicationCommand object.
   * @throws {RangeError} - If no command ID is specified.
   */
  delete(command: string | ApplicationCommand, guild?: string | Guild): Promise<ApplicationCommand>;
  /**
   * Edits an application command with the given command ID and options.
   * @param {string | ApplicationCommand} command - The command ID or the command object to edit.
   * @param {object} [options] - The options to update the command with.
   * @param {string | Guild} [guild=this.guildId] - The guild ID or the guild object where the command is located.
   * @returns {Promise<ApplicationCommand>} A promise that resolves with the updated command object.
   * @throws {RangeError} If the application command is required but not provided.
   */
  edit(command: string | ApplicationCommand, options?: object | undefined, guild?: string | Guild): Promise<ApplicationCommand>;
  /**
   * Fetches the ID of a command from the API.
   * @param {string | object} command - The command ID or command object.
   * @param {boolean} [cache=true] - Whether to cache the fetched command.
   * @param {boolean} [force=false] - Whether to force fetch the command even if it is already cached.
   * @param {string | object} [guild=this.guildId] - The guild ID or guild object. Defaults to the guild ID of the instance.
   * @returns {Promise<object>} - A promise that resolves to the fetched command object.
   */
  _fetchId(command: string | object, cache?: boolean | undefined, force?: boolean | undefined, guild?: string | object | undefined): Promise<object>;
  /**
   * Returns the ApplicationCommandPermissionManager for managing permissions of application commands in a guild.
   * @returns {ApplicationCommandPermissionManager} The ApplicationCommandPermissionManager instance.
   */
  get permissions(): ApplicationCommandPermissionManager;
  /**
   * Getter method for the cache property.
   * @returns The Collection object representing the cache.
   */
  get cache(): import("../Util/@Collections/RaidenCol").RaidenCol;
}
import Base = require("../Base/base");
import ApplicationCommand = require("../Structures/ApplicationCommand");
import ApplicationCommandPermissionManager = require("./ApplicationCommandPermissionManager");

export = ApplicationCommandPermissionManager;
/**
 * Manages application command permissions for a specific guild.
 * @class
 * @extends Base
 * @param {Client} client - The client instance.
 * @param {string} guildId - The ID of the guild.
 */
declare class ApplicationCommandPermissionManager extends Base {
  /**
   * Transforms a permissions object into the desired format.
   * @param {Object} o - The permissions object to transform.
   * @returns {Object} - The transformed permissions object.
   * - id: The ID of the permission. If the ID is a string, it is used as is. If it is an object, the "id" property is used. If neither is present, it is set to undefined.
   * - type: The type of the permission. If the type is a string, it is converted to the corresponding ApplicationCommandPermissionType enum value. If it is already a valid enum value, it is used as is. If neither is present, it is set to 2 (USER).
   * - permission: The
   */
  static transformPermissions(o?: Object): Object;
  /**
   * Transforms a permission object into a new format.
   * @param {Object} o - The permission object to transform.
   * @returns {Object} - The transformed permission object.
   */
  static transformPermission(o?: Object): Object;
  /**
   * Parses the remove options from the payload and fetched data to create an array of objects
   * that should be removed.
   * @param {object} payload - The payload object containing the remove options.
   * @param {array} fetchedData - The fetched data array to filter and map.
   * @returns {array} - An array of objects that should be removed based on the remove options.
   */
  static parseRemoveOptions(payload: object, fetchedData: array): array;
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Client} client - The Discord client object.
   * @param {string} guildId - The ID of the guild.
   */
  constructor(client: Client, guildId: string);
  guildId: string;
  /**
   * Adds a command permission to the guild.
   * @param {string | ApplicationCommand} commands - The command ID or the command object.
   * @param {string} [guildId=this.guildId] - The ID of the guild to add the permission to.
   * @param {object} [options={cache: true, force: false}] - Additional options for adding the permission.
   * @param {boolean} [options.cache=true] - Whether to cache the permission.
   * @param {boolean} [options.force=false] - Whether to force adding the permission even if it already exists in the cache.
   * @returns {ApplicationCommandPermission} The added command permission.
   */
  _add(
    commands: string | ApplicationCommand,
    guildId?: string | undefined,
    options?:
      | {
          cache?: boolean | undefined;
          force?: boolean | undefined;
        }
      | undefined
  ): ApplicationCommandPermission;
  /**
   * Fetches commands from the API based on the provided parameters.
   * @param {string | object} commands - The command ID or an object containing the command details.
   * @param {object} [options] - Additional options for the fetch operation.
   * @param {boolean} [options.cache] - Whether to cache the fetched commands.
   * @param {boolean} [options.force] - Whether to force fetch the commands even if they are already cached.
   * @param {string | Guild} [options.guild] - The ID or instance of the guild to fetch the commands for.
   * @returns {Promise<Cache>} A promise that resolves to a cache object containing the fetched commands.
   * @throws {RangeError} If the guild ID is not provided.
   */
  fetch(
    commands: string | object,
    options?:
      | {
          cache?: boolean | undefined;
          force?: boolean | undefined;
          guild?: string | Guild;
        }
      | undefined
  ): Promise<Cache>;
  /**
   * Fetches the ID of a command from the server's command permissions.
   * @param {string | { commandId: string }} commands - The ID of the command or an object containing the command ID.
   * @param {boolean} [cache=true] - Whether to cache the fetched permissions.
   * @param {boolean} [force=false] - Whether to force fetching the permissions even if they are already cached.
   * @param {string | { id: string }} [guild=this.guildId] - The ID of the guild or an object containing the guild ID.
   * @returns {Promise<any>} - A promise that resolves to the fetched permissions.
   * @throws {RangeError} - If the guild ID is not provided.
   */
  _fetchId(
    commands:
      | string
      | {
          commandId: string;
        },
    cache?: boolean | undefined,
    force?: boolean | undefined,
    guild?:
      | string
      | {
          id: string;
        }
      | undefined
  ): Promise<any>;
  /**
   * Getter method for the cache property.
   * @returns The Collection object representing the cache.
   */
  get cache(): import("../Util/@Collections/RaidenCol").RaidenCol;
}
import Base = require("../Base/base");
import ApplicationCommandPermission = require("../Structures/ApplicationCommandPermission");

export = AutoModManager;
/**
 * Represents an AutoMod manager that handles the creation, editing, and deletion of auto-moderation rules for a guild.
 * @class
 * @extends Base
 */
declare class AutoModManager extends Base {
  /**
   * Transforms the payload object into a new format.
   * @param {Object} payload - The payload object to transform.
   * @returns {Object} - The transformed payload object.
   */
  static transformPayload(payload?: Object): Object;
  /**
   * Transforms the actions object into a new format.
   * @param {Object} actions - The actions object to transform.
   * @returns {Object} - The transformed actions object.
   */
  static transformActions(actions?: Object): Object;
  /**
   * Transforms the given metadata object into a new format.
   * @param {Object} metadata - The metadata object to transform.
   * @returns {Object} - The transformed metadata object.
   */
  static transformMetadata(metadata?: Object): Object;
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Client} client - The client object used for communication with the server.
   */
  constructor(client: Client);
  /**
   * Adds a rule to the guild's auto moderation system.
   * @param {string | Rule} rules - The rule to add. Can be either a rule ID or a Rule object.
   * @param {string} [guildId=this.guildId] - The ID of the guild to add the rule to.
   * @param {object} [options={cache: true, force: false}] - Additional options for adding the rule.
   * @param {boolean} [options.cache=true] - Whether to cache the added rule.
   * @param {boolean} [options.force=false] - Whether to force adding the rule even if it already exists in the cache.
   * @returns {Rule | null} The added rule, or null if
   */
  _add(
    rules: string | Rule,
    guildId?: string | undefined,
    options?:
      | {
          cache?: boolean | undefined;
          force?: boolean | undefined;
        }
      | undefined
  ): Rule | null;
  /**
   * Fetches auto-moderation rules from the server based on the provided rule and options.
   * @param {string | object} rule - The rule ID or an object containing the rule details.
   * @param {object} [options] - Additional options for the fetch request.
   * @param {boolean} [options.cache=true] - Whether to cache the fetched rules.
   * @param {boolean} [options.force=false] - Whether to force the fetch request even if the rules are already cached.
   * @returns {Promise<object>} - A promise that resolves to the fetched auto-moderation rules.
   */
  fetch(
    rule: string | object,
    options?:
      | {
          cache?: boolean | undefined;
          force?: boolean | undefined;
        }
      | undefined
  ): Promise<object>;
  /**
   * Fetches the ID of a rule from the auto-moderation rules in a guild.
   * @param {string | { id: string }} rule - The rule ID or an object containing the rule ID.
   * @param {boolean} [cache=true] - Whether to cache the fetched rule.
   * @param {boolean} [force=false] - Whether to force fetching the rule even if it is already cached.
   * @returns {Promise<any>} - A promise that resolves to the fetched rule.
   */
  _fetchId(
    rule:
      | string
      | {
          id: string;
        },
    cache?: boolean | undefined,
    force?: boolean | undefined
  ): Promise<any>;
  /**
   * Creates a new auto-moderation rule for the guild.
   * @param {Object} [options] - The options for creating the rule.
   * @param {string} [options.reason] - The reason for creating the rule.
   * @returns {Promise} A promise that resolves with the created rule.
   */
  create(
    options?:
      | {
          reason?: string | undefined;
        }
      | undefined
  ): Promise<any>;
  /**
   * Edits an auto-moderation rule in the guild.
   * @param {string | Rule} rule - The ID or the rule object to edit.
   * @param {Object} [options] - Additional options for the edit operation.
   * @param {string} [options.reason] - The reason for the edit.
   * @returns {Promise<Rule>} A promise that resolves with the edited rule.
   */
  edit(
    rule: string | Rule,
    options?:
      | {
          reason?: string | undefined;
        }
      | undefined
  ): Promise<Rule>;
  /**
   * Deletes an auto-moderation rule from the guild.
   * @param {string | Rule} rule - The ID or the rule object to delete.
   * @param {string} reason - The reason for deleting the rule.
   * @returns {Promise<Rule>} - The deleted rule object.
   */
  delete(rule: string | Rule, reason: string): Promise<Rule>;
  /**
   * Getter method for the cache property.
   * @returns The Collection object representing the cache.
   */
  get cache(): import("../Util/@Collections/RaidenCol").RaidenCol;
}
import Base = require("../Base/base");

export = BaseThreadManager;
/**
 * Represents a base thread manager that handles operations related to thread channels.
 * @class
 * @extends Base
 */
declare class BaseThreadManager extends Base {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Client} client - The client object used for communication with the server.
   */
  constructor(client: Client);
  /**
   * Adds a thread to the guild's thread cache.
   * @param {string | ThreadChannelResolvable} threads - The thread or thread ID to add.
   * @param {Snowflake} [guildId=this.guildId] - The ID of the guild where the thread belongs.
   * @param {Object} [options] - Additional options for adding the thread.
   * @param {boolean} [options.cache=true] - Whether to cache the thread.
   * @param {boolean} [options.force=true] - Whether to force adding the thread even if it already exists in the cache.
   * @returns {ThreadChannel | null} The added thread or null if no thread is provided.
   */
  _add(
    threads: string | ThreadChannelResolvable,
    guildId?: any,
    options?:
      | {
          cache?: boolean | undefined;
          force?: boolean | undefined;
        }
      | undefined
  ): ThreadChannel | null;
  /**
   * Creates a new thread in the current channel with the given message and options.
   * @param {string | object} message - The message content or message object to start the thread with.
   * @param {object} options - The options for creating the thread.
   * @param {string} [options.reason] - The reason for creating the thread.
   * @param {string} [options.name] - The name of the thread.
   * @param {string | number} [options.type] - The type of the thread. Can be a string or number.
   * @param {boolean} [options.invitable] - Whether the thread is invitable.
   * @param {number} [options.autoArchiveDuration] - The auto archive
   */
  create(
    message: string | object,
    options: {
      reason?: string | undefined;
      name?: string | undefined;
      type?: string | number | undefined;
      invitable?: boolean | undefined;
      autoArchiveDuration?: number | undefined;
    }
  ): Promise<ThreadChannel | null>;
  /**
   * Fetches a thread from the client's channels.
   * @param {string} thread - The ID of the thread to fetch.
   * @param {Object} [options] - Additional options for the fetch request.
   * @returns {Promise} A promise that resolves to the fetched thread.
   */
  fetch(thread: string, options?: Object | undefined): Promise<any>;
  /**
   * Fetches the active threads for the current guild.
   * @returns {Promise<FetchedThreads>} - A promise that resolves to a FetchedThreads object containing the active threads.
   */
  fetchActive(): Promise<FetchedThreads>;
  /**
   * Fetches archived threads based on the provided options.
   * @param {Object} [options] - The options for fetching archived threads.
   * @param {Date} [options.before] - The date before which the threads should be fetched.
   * @param {number} [options.limit=25] - The maximum number of threads to fetch.
   * @param {boolean} [options.public=false] - Whether to fetch public or private archived threads.
   * @returns {Promise<FetchedThreads>} - A promise that resolves to a FetchedThreads object containing the fetched threads.
   */
  fetchArchivedThread(
    options?:
      | {
          before?: Date | undefined;
          limit?: number | undefined;
          public?: boolean | undefined;
        }
      | undefined
  ): Promise<FetchedThreads>;
  /**
   * Fetches forum threads based on the provided query parameters.
   * @param {Object} [query] - The query parameters for fetching forum threads.
   * @param {boolean} [query.archived] - Whether to include archived threads.
   * @param {string} [query.sortBy="last_message_time"] - The field to sort the threads by.
   * @param {string} [query.sortOrder="desc"] - The order in which to sort the threads.
   * @param {number} [query.limit=25] - The maximum number of threads to fetch.
   * @param {number} [query.offset=50] - The offset from which to start fetching threads.
   * @returns {Promise<Object>}
   */
  fetchForumThreads(
    query?:
      | {
          archived?: boolean | undefined;
          sortBy?: string | undefined;
          sortOrder?: string | undefined;
          limit?: number | undefined;
          offset?: number | undefined;
        }
      | undefined
  ): Promise<Object>;
  /**
   * Getter method for the cache property.
   * @returns The Collection object representing the cache.
   */
  get cache(): import("../Util/@Collections/RaidenCol").RaidenCol;
}
import Base = require("../Base/base");
import ThreadChannel = require("../Structures/ThreadChannel");
import FetchedThreads = require("../Structures/FetchedThreads");

export = ChannelManager;
/**
 * Represents a Channel Manager that handles operations related to channels.
 * @class
 * @extends Base
 */
declare class ChannelManager extends Base {
  /**
   * Transforms the payload object into the desired format based on the given parameters.
   * @param {object} o - The payload object to transform.
   * @param {boolean} [position=false] - Indicates whether to include position-related properties in the transformed object.
   * @returns {object} - The transformed payload object.
   */
  static transformPayload(o?: object, position?: boolean | undefined): object;
  /**
   * Transforms an object of overwrite properties into a standardized format.
   * @param {Object} p - The overwrite properties object.
   * @param {string} p.id - The ID of the overwrite.
   * @param {string} p.type - The type of the overwrite.
   * @param {string[]} p.allow - The permissions to allow for the overwrite.
   * @param {string[]} p.deny - The permissions to deny for the overwrite.
   * @returns {Object} - The transformed overwrite object.
   */
  static transformOverwrites(p?: {id: string; type: string; allow: string[]; deny: string[]}): Object;
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Client} client - The client object used for communication with the server.
   */
  constructor(client: Client);
  /**
   * Adds a channel to the cache and returns the channel object.
   * @param {string | Channel} channels - The channel ID or channel object to add.
   * @param {string} [guildId=this.guildId] - The ID of the guild the channel belongs to.
   * @param {object} [options={cache: true, force: false}] - Additional options for adding the channel.
   * @param {boolean} [options.cache=true] - Whether to cache the channel object.
   * @param {boolean} [options.force=false] - Whether to force fetching the channel from the cache.
   * @returns {Channel} The added channel object.
   */
  _add(
    channels: string | Channel,
    guildId?: string | undefined,
    options?:
      | {
          cache?: boolean | undefined;
          force?: boolean | undefined;
        }
      | undefined
  ): Channel;
  /**
   * Fetches a channel from the server based on the provided channel ID or channel object.
   * @param {string | object} channel - The channel ID or channel object to fetch.
   * @param {object} [options] - Additional options for the fetch operation.
   * @param {boolean} [options.cache] - Whether to use the cache for the fetch operation.
   * @param {boolean} [options.force] - Whether to force a fresh fetch from the server.
   * @returns {Promise<object>} - A promise that resolves to the fetched channel object.
   */
  fetch(
    channel: string | object,
    options?:
      | {
          cache?: boolean | undefined;
          force?: boolean | undefined;
        }
      | undefined
  ): Promise<object>;
  /**
   * Fetches the ID of a channel from the API.
   * @param {string | Channel} channel - The channel or channel ID to fetch.
   * @param {boolean} [cache=true] - Whether to cache the fetched channel.
   * @param {boolean} [force=false] - Whether to force fetching the channel even if it is already cached.
   * @returns {Promise<Channel>} - A promise that resolves to the fetched channel.
   * @throws {RangeError} - If the fetched channel is not a part of the guild.
   */
  _fetchId(channel: string | Channel, cache?: boolean | undefined, force?: boolean | undefined): Promise<Channel>;
  /**
   * Edits a channel with the given options.
   * @param {string | Channel} channel - The channel to edit. Can be either a channel ID or a Channel object.
   * @param {Object} [options] - The options for editing the channel.
   * @param {string} [options.reason] - The reason for the channel edit.
   * @returns {Promise<Channel>} A promise that resolves with the edited channel.
   */
  edit(
    channel: string | Channel,
    options?:
      | {
          reason?: string | undefined;
        }
      | undefined
  ): Promise<Channel>;
  /**
   * Deletes a channel.
   * @param {string | Channel} channel - The channel to delete. Can be either a channel ID or a Channel object.
   * @param {string} reason - The reason for deleting the channel.
   * @returns {Promise<Channel>} - A promise that resolves with the deleted channel.
   */
  delete(channel: string | Channel, reason: string): Promise<Channel>;
  /**
   * Creates an invite for a given channel with optional options.
   * @param {string | Channel} channel - The channel or channel ID to create the invite for.
   * @param {Object} [options] - Optional parameters for creating the invite.
   * @param {string} [options.reason] - The reason for creating the invite.
   * @returns {Promise<Invite>} - A promise that resolves with the created invite.
   */
  createInvite(
    channel: string | Channel,
    options?:
      | {
          reason?: string | undefined;
        }
      | undefined
  ): Promise<Invite>;
  /**
   * Follows a news channel and adds it to the list of followed channels.
   * @param {string | NewsChannel} news - The news channel to follow. Can be either a string representing the channel ID or a NewsChannel object.
   * @param {Object} [options] - Additional options for following the channel.
   * @param {string} [options.reason] - The reason for following the channel.
   * @param {string | NewsChannel} [options.channel] - The channel to receive webhook notifications. Can be either a string representing the channel ID or a NewsChannel object.
   * @returns {Promise<string>} - A promise that resolves with the ID of the followed channel.
   */
  follow(
    news: string | NewsChannel,
    options?:
      | {
          reason?: string | undefined;
          channel?: string | NewsChannel | undefined;
        }
      | undefined
  ): Promise<string>;
  /**
   * Triggers the typing indicator in a given channel.
   * @param {string | Channel} channel - The channel ID or the channel object.
   * @returns {Promise<void>} - A promise that resolves when the typing indicator is triggered.
   */
  triggerTyping(channel: string | Channel): Promise<void>;
  /**
   * Clones a channel by creating a new channel with the same properties and permission overwrites.
   * @param {string | Channel} channel - The channel ID or the channel object to clone.
   * @returns {Promise<Channel>} - A promise that resolves with the cloned channel.
   * @throws {RangeError} - If the channel is not found in the cache.
   */
  clone(channel: string | Channel): Promise<Channel>;
  /**
   * Getter method for the cache property.
   * @returns The Collection object representing the cache.
   */
  get cache(): import("../Util/@Collections/RaidenCol").RaidenCol;
}
import Base = require("../Base/base");
import Channel = require("../Structures/Channel");
import Invite = require("../Structures/Invite");
import NewsChannel = require("../Structures/NewsChannel");

export = EmojiManager;
/**
 * Represents a manager for handling emojis in a guild.
 * @class
 * @extends Base
 */
declare class EmojiManager extends Base {
  /**
   * Transforms the given roles object into a string or returns the id property of the roles object.
   * @param {Object} roles - The roles object to transform.
   * @returns {string | undefined} - The transformed roles as a string or the id property of the roles object.
   */
  static transformRoles(roles?: Object): string | undefined;
  /**
   * Transforms the given options object into a new object with modified properties.
   * @param {Object} o - The options object to transform.
   * @returns {Promise<Object>} - A promise that resolves to the transformed options object.
   */
  static transformOptions(o: Object): Promise<Object>;
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Client} client - The client object used for communication with the server.
   */
  constructor(client: Client);
  /**
   * Adds an emoji to the cache and returns the emoji object.
   * @param {string | EmojiResolvable} emojis - The emoji or emoji ID to add to the cache.
   * @param {string} [guildId=this.guildId] - The ID of the guild where the emoji belongs.
   * @param {object} [options={cache: true, force: false}] - Additional options for adding the emoji.
   * @param {boolean} [options.cache=true] - Whether to cache the emoji object.
   * @param {boolean} [options.force=false] - Whether to force re-fetching the emoji from the API.
   * @returns {Emoji | null} The added emoji object, or null if no emoji is provided.
   */
  _add(
    emojis: string | EmojiResolvable,
    guildId?: string | undefined,
    options?:
      | {
          cache?: boolean | undefined;
          force?: boolean | undefined;
        }
      | undefined
  ): Emoji | null;
  /**
   * Creates a new emoji in the guild.
   * @param {Object} [options] - The options for creating the emoji.
   * @param {string} [options.reason] - The reason for creating the emoji.
   * @returns {Promise<Emoji>} A promise that resolves with the created emoji.
   */
  create(
    options?:
      | {
          reason?: string | undefined;
        }
      | undefined
  ): Promise<Emoji>;
  /**
   * Edits an emoji in the guild.
   * @param {string | Emoji} emoji - The emoji to edit. Can be either the emoji ID or the Emoji object.
   * @param {Object} [options] - Additional options for editing the emoji.
   * @param {string} [options.reason] - The reason for editing the emoji.
   * @returns {Promise<Emoji>} A promise that resolves with the edited emoji.
   */
  edit(
    emoji: string | Emoji,
    options?:
      | {
          reason?: string | undefined;
        }
      | undefined
  ): Promise<Emoji>;
  /**
   * Deletes an emoji from the guild.
   * @param {string | Emoji} emoji - The emoji to delete. Can be either the emoji ID or the Emoji object.
   * @param {string} reason - The reason for deleting the emoji.
   * @returns {Promise<Emoji>} - The deleted emoji.
   * @throws {Error} - If the deletion fails.
   */
  delete(emoji: string | Emoji, reason: string): Promise<Emoji>;
  /**
   * Fetches an emoji from the guild's emoji list.
   * @param {string | object} emoji - The emoji to fetch. Can be either an emoji ID or a string representation of the emoji.
   * @param {object} [options] - Additional options for the fetch operation.
   * @param {boolean} [options.cache=true] - Whether to cache the fetched emoji.
   * @param {boolean} [options.force=false] - Whether to force the fetch operation even if the emoji is already cached.
   * @returns {Promise<EmojiCache>} A promise that resolves to the fetched emoji.
   */
  fetch(
    emoji: string | object,
    options?:
      | {
          cache?: boolean | undefined;
          force?: boolean | undefined;
        }
      | undefined
  ): Promise<EmojiCache>;
  /**
   * Fetches the ID of an emoji from the guild.
   * @param {string | Emoji} emoji - The emoji or the ID of the emoji to fetch.
   * @param {boolean} [cache=true] - Whether to cache the fetched emoji.
   * @param {boolean} [force=false] - Whether to force fetch the emoji even if it is already cached.
   * @returns {Promise<Emoji>} - A promise that resolves to the fetched emoji.
   */
  _fetchId(emoji: string | Emoji, cache?: boolean | undefined, force?: boolean | undefined): Promise<Emoji>;
  /**
   * Getter method for the cache property.
   * @returns The Collection object representing the cache.
   */
  get cache(): import("../Util/@Collections/RaidenCol").RaidenCol;
}
import Base = require("../Base/base");
import Emoji = require("../Structures/Emoji");

export = GuildApplicationCommandManager;
/**
 * Represents a manager for guild-specific application commands.
 * @class
 * @extends ApplicationCommandManager
 */
declare class GuildApplicationCommandManager extends ApplicationCommandManager {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {string} guildId - The ID of the guild.
   * @param {Client} client - The client object.
   */
  constructor(guildId: string, client: Client);
  guildId: string;
}
import ApplicationCommandManager = require("./ApplicationCommandManager");

export = GuildAutoModManager;
/**
 * Represents a manager for guild-specific auto moderation settings.
 * @class
 * @extends AutoModManager
 */
declare class GuildAutoModManager extends AutoModManager {
  /**
   * Constructs a new instance of the class.
   * @class
   * @param {string} guildId - The ID of the guild.
   * @param {Client} client - The client object.
   */
  constructor(guildId: string, client: Client);
  guildId: string;
  /**
   * Retrieves the cache for the current guild.
   * @returns {Array} An array of objects from the cache that belong to the current guild.
   */
  get cache(): any[];
}
import AutoModManager = require("./AutoModManager");

export = GuildBanManager;
/**
 * Represents a manager for handling guild bans.
 * @class
 * @extends Base
 * @param {string} guildId - The ID of the guild.
 * @param {Client} client - The client instance.
 */
declare class GuildBanManager extends Base {
  /**
   * Transforms the payload object for deleting messages.
   * @param {Object} o - The payload object.
   * @param {number} o.days - The number of days to delete messages.
   * @throws {RangeError} If the days value is less than 0 or greater than 7.
   * @returns {Object} The transformed payload object.
   */
  static transformPayloadd(o?: {days: number}): Object;
  /**
   * Constructs a new instance of the class.
   * @class
   * @param {string} guildId - The ID of the guild.
   * @param {Client} client - The client object.
   */
  constructor(guildId: string, client: Client);
  guildId: string;
  /**
   * Adds a ban to the guild's ban cache.
   * @param {string | GuildBan} bans - The ban ID or GuildBan object to add.
   * @param {string} [guildId=this.guildId] - The ID of the guild to add the ban to.
   * @param {object} [options={cache: true, force: false}] - Additional options for adding the ban.
   * @param {boolean} [options.cache=true] - Whether to cache the ban.
   * @param {boolean} [options.force=false] - Whether to force adding the ban even if it already exists in the cache.
   * @returns {GuildBan | null} - The added GuildBan object, or null if the ban is
   */
  _add(
    bans: string | GuildBan,
    guildId?: string | undefined,
    options?:
      | {
          cache?: boolean | undefined;
          force?: boolean | undefined;
        }
      | undefined
  ): GuildBan | null;
  /**
   * Creates a ban for a user in the guild.
   * @param {string | User} user - The user to ban. Can be a user ID or a User object.
   * @param {Object} [options] - Additional options for the ban.
   * @param {string} [options.reason] - The reason for the ban.
   * @returns {Promise<GuildBan>} A promise that resolves with the created GuildBan object.
   * @throws {Error} If the API request fails.
   */
  create(
    user: string | User,
    options?:
      | {
          reason?: string | undefined;
        }
      | undefined
  ): Promise<GuildBan>;
  /**
   * Removes a user from the ban list in the guild.
   * @param {string | User} user - The user to remove from the ban list. Can be a user ID or a User object.
   * @param {string} reason - The reason for removing the user from the ban list.
   * @returns {Promise<Ban>} A promise that resolves with the ban object of the removed user.
   */
  remove(user: string | User, reason: string): Promise<Ban>;
  /**
   * Fetches ban information from the server.
   * @param {string | object} ban - The ban ID or ban object.
   * @param {object} options - Additional options for the fetch.
   * @param {boolean} options.cache - Whether to use cached data.
   * @param {boolean} options.force - Whether to force a fresh fetch.
   * @returns {Promise<object>} - A promise that resolves to the fetched ban information.
   */
  fetch(
    ban: string | object,
    options: {
      cache: boolean;
      force: boolean;
    }
  ): Promise<object>;
  /**
   * Fetches the ID of a ban from the server.
   * @param {string | object} ban - The ban object or the ID of the ban.
   * @param {boolean} [cache=true] - Whether to cache the fetched ban.
   * @param {boolean} [force=false] - Whether to force fetching the ban even if it is already cached.
   * @returns {Promise<object>} - The fetched ban object.
   */
  _fetchId(ban: string | object, cache?: boolean | undefined, force?: boolean | undefined): Promise<object>;
  /**
   * Getter method for the cache property.
   * @returns The Collection object representing the cache.
   */
  get cache(): import("../Util/@Collections/RaidenCol").RaidenCol;
}
import Base = require("../Base/base");
import GuildBan = require("../Structures/GuildBan");

export = GuildChannelManager;
/**
 * Represents a manager for guild channels.
 * @class
 * @extends ChannelManager
 */
declare class GuildChannelManager extends ChannelManager {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {string} guildId - The ID of the guild.
   * @param {Client} client - The client object.
   */
  constructor(guildId: string, client: Client);
  guildId: string;
  /**
   * Creates a new channel in the guild.
   * @param {Object} [options] - The options for creating the channel.
   * @param {string} [options.reason] - The reason for creating the channel.
   * @returns {Promise<Channel>} A promise that resolves with the created channel.
   */
  create(
    options?:
      | {
          reason?: string | undefined;
        }
      | undefined
  ): Promise<Channel>;
  /**
   * Modifies the position of channels in a guild.
   * @param {Object} [options] - The options for modifying the position.
   * @param {string} [options.reason] - The reason for modifying the position.
   * @param {Array} [options.data] - The data containing the channels to modify.
   * @returns {Promise} A promise that resolves when the position is modified.
   */
  modifyPosition(
    options?:
      | {
          reason?: string | undefined;
          data?: any[] | undefined;
        }
      | undefined
  ): Promise<any>;
  /**
   * Retrieves the cache for the current guild.
   * @returns {Array} - The filtered cache objects for the current guild.
   */
  get cache(): any[];
}
import ChannelManager = require("./ChannelManager");

export = GuildDiscoveryManager;
/**
 * Represents a manager for guild discovery settings.
 * @class
 * @extends Base
 */
declare class GuildDiscoveryManager extends Base {
  /**
   * Transforms the given payload object into a new object with specific properties.
   * @param {Object} payload - The payload object to transform.
   * @returns {Object} - The transformed object.
   */
  static transformPayload(payload?: Object): Object;
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {string} guildId - The ID of the guild.
   * @param {Client} client - The client object.
   */
  constructor(guildId: string, client: Client);
  guildId: string;
  /**
   * Adds a GuildDiscovery object to the guild's discovery settings.
   * @param {string | GuildDiscovery} discovery - The discovery object or the guild ID.
   * @returns {GuildDiscovery | null} - The added GuildDiscovery object or null if discovery is falsy.
   */
  _add(discovery: string | GuildDiscovery): GuildDiscovery | null;
  /**
   * Fetches the discovery metadata for a guild.
   * @param {string | Guild} [guild=this.guildId] - The guild ID or Guild object to fetch the metadata for.
   * @returns {Promise<DiscoveryMetadata>} - A promise that resolves to the discovery metadata.
   * @throws {RangeError} - If the guild ID is not provided.
   */
  fetch(guild?: string | Guild): Promise<DiscoveryMetadata>;
  /**
   * Edits the discovery metadata for a guild.
   * @param {string | Guild} guild - The guild ID or guild object to edit the discovery metadata for.
   * @param {Object} options - The options to update the discovery metadata.
   * @returns {Promise} A promise that resolves with the updated discovery metadata.
   * @throws {RangeError} If the guild is not provided.
   */
  edit(guild?: string | Guild, options?: Object): Promise<any>;
}
import Base = require("../Base/base");
import GuildDiscovery = require("../Structures/GuildDiscovery");

export = GuildEmojiManager;
/**
 * Represents a manager for guild emojis.
 * @class
 * @extends EmojiManager
 */
declare class GuildEmojiManager extends EmojiManager {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {string} guildId - The ID of the guild.
   * @param {Client} client - The client object.
   */
  constructor(guildId: string, client: Client);
  guildId: string;
  /**
   * Adds emojis to the guild's emoji collection.
   * @param {Array} emojis - The emojis to add.
   * @param {Object} [options] - Additional options for adding emojis.
   * @param {boolean} [options.cache=true] - Whether to cache the added emojis.
   * @param {boolean} [options.force=false] - Whether to force the addition of emojis.
   * @returns {Promise} A promise that resolves when the emojis are added.
   */
  _add(
    emojis: any[],
    options?:
      | {
          cache?: boolean | undefined;
          force?: boolean | undefined;
        }
      | undefined
  ): Promise<any>;
  /**
   * Retrieves the cache for the current guild.
   * @returns {Array} An array of objects from the cache that belong to the current guild.
   */
  get cache(): any[];
}
import EmojiManager = require("./EmojiManager");

export = GuildIntegrationManager;
/**
 * Represents a manager for guild integrations.
 * @class
 * @extends Base
 * @param {string} guildId - The ID of the guild.
 * @param {Client} client - The client instance.
 */
declare class GuildIntegrationManager extends Base {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {string} guildId - The ID of the guild.
   * @param {Client} client - The client object.
   */
  constructor(guildId: string, client: Client);
  guildId: string;
  /**
   * Adds an integration to the guild.
   * @param {string | Integration} integrations - The integration ID or the integration object.
   * @param {string} [guildId=this.guildId] - The ID of the guild to add the integration to.
   * @param {object} [options={cache: true, force: false}] - Additional options for adding the integration.
   * @param {boolean} [options.cache=true] - Whether to cache the integration.
   * @param {boolean} [options.force=false] - Whether to force adding the integration even if it is already cached.
   * @returns {Integration | null} - The added integration or null if integrations is falsy.
   */
  _add(
    integrations: string | Integration,
    guildId?: string | undefined,
    options?:
      | {
          cache?: boolean | undefined;
          force?: boolean | undefined;
        }
      | undefined
  ): Integration | null;
  /**
   * Fetches the integrations for a guild.
   * @param {Object} [options] - Optional parameters for the fetch request.
   * @param {boolean} [options.cache] - Whether to cache the fetched data.
   * @param {boolean} [options.force] - Whether to force the fetch request even if the data is already cached.
   * @param {string | Guild} [guild=this.guildId] - The guild to fetch integrations for. Defaults to the current guild.
   * @returns {Promise<Cache>} - A promise that resolves to a cache object containing the fetched integrations.
   */
  fetch(
    options?:
      | {
          cache?: boolean | undefined;
          force?: boolean | undefined;
        }
      | undefined,
    guild?: string | Guild
  ): Promise<Cache>;
  /**
   * Deletes an integration from a guild.
   * @param {Object} options - The options for deleting the integration.
   * @param {string} options.guild - The ID of the guild where the integration is located.
   * @param {string} options.integration - The ID of the integration to delete.
   * @param {string} reason - The reason for deleting the integration.
   * @returns {Promise} A promise that resolves when the integration is deleted and the deleted integration is added to the list of deleted integrations.
   */
  delete(
    options:
      | {
          guild: string;
          integration: string;
        }
      | undefined,
    reason: string
  ): Promise<any>;
  /**
   * Getter method for the cache property.
   * @returns The Collection object representing the cache.
   */
  get cache(): import("../Util/@Collections/RaidenCol").RaidenCol;
}
import Base = require("../Base/base");

export = GuildInviteManager;
/**
 * Represents a manager for handling guild invites.
 * @class
 * @extends Base
 * @param {Guild} guild - The guild associated with the invite manager.
 * @param {Client} client - The client instance.
 */
declare class GuildInviteManager extends Base {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Guild} guild - The guild object associated with the instance.
   * @param {Client} client - The client object associated with the instance.
   */
  constructor(guild: Guild, client: Client);
  guild: Guild;
  /**
   * Adds an invite to the guild's invite cache.
   * @param {string | Invite} invites - The invite code or Invite object to add.
   * @param {Guild} [guild=this.guild] - The guild to add the invite to.
   * @param {Object} [options={cache: true, force: false}] - Additional options for adding the invite.
   * @param {boolean} [options.cache=true] - Whether to cache the invite.
   * @param {boolean} [options.force=false] - Whether to force the retrieval of the invite from the cache.
   * @returns {Invite | null} The added invite or null if no invite is provided.
   */
  _add(
    invites: string | Invite,
    guild?: any,
    options?:
      | {
          cache?: boolean | undefined;
          force?: boolean | undefined;
        }
      | undefined
  ): Invite | null;
  /**
   * Fetches guild invites from the API and returns a new cache constructor with the fetched data.
   * @param {Object} [options] - Optional parameters for the fetch request.
   * @param {boolean} [options.cache] - Whether to use cached data or not.
   * @param {boolean} [options.force] - Whether to force a fresh fetch or not.
   * @returns {Promise<CacheConstructor>} A promise that resolves to a new cache constructor with the fetched data.
   */
  fetch(
    options?:
      | {
          cache?: boolean | undefined;
          force?: boolean | undefined;
        }
      | undefined
  ): Promise<CacheConstructor>;
  /**
   * Deletes an invitation with the specified code and reason.
   * @param {string | object} invite - The invitation code or object to delete.
   * @param {string} reason - The reason for deleting the invitation.
   * @returns {Promise} A promise that resolves with the deleted invitation.
   * @throws {RangeError} If no invitation code is specified.
   */
  delete(invite: string | object, reason: string): Promise<any>;
  /**
   * Getter method for the cache property.
   * @returns The Collection object representing the cache.
   */
  get cache(): import("../Util/@Collections/RaidenCol").RaidenCol;
}
import Base = require("../Base/base");
import Invite = require("../Structures/Invite");

export = GuildManager;
/**
 * Represents a manager for guild-related operations.
 * @class
 * @extends Base
 */
declare class GuildManager extends Base {
  /**
   * Transforms the given payload object into a new format.
   * @param {Object} payload - The payload object to transform.
   * @returns {Object} - The transformed payload object.
   */
  static transformPayload(payload?: Object): Object;
  /**
   * Transforms the options object by extracting the "before" and "after" properties
   * and setting them to their corresponding IDs if they are strings, or undefined if they
   * are not provided. The "limit" property is set to 200 if it is not provided.
   * @param {Object} o - The options object.
   * @param {string} [o.before] - The "before" property of the options object.
   * @param {string} [o.after] - The "after" property of the options object.
   * @param {number} [o.limit] - The "limit" property of the options object.
   * @returns {Object} - The transformed options object.
   */
  static transformOptions(o?: {before?: string | undefined; after?: string | undefined; limit?: number | undefined}): Object;
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Client} client - The client object.
   * @param {WebSocket} websocket - The WebSocket object.
   */
  constructor(client: Client, websocket: WebSocket);
  /**
   * Adds a guild to the cache and returns the guild object.
   * @param {string | Guild} guilds - The guild ID or the guild object to add.
   * @param {object} [options] - Additional options for adding the guild.
   * @param {boolean} [options.cache=true] - Whether to cache the guild object.
   * @param {boolean} [options.force=false] - Whether to force adding the guild even if it already exists in the cache.
   * @returns {Guild | null} The guild object that was added to the cache, or null if the guild is not provided.
   */
  _add(
    guilds: string | Guild,
    options?:
      | {
          cache?: boolean | undefined;
          force?: boolean | undefined;
        }
      | undefined
  ): Guild | null;
  /**
   * Creates a new guild with the given options.
   * @param {Object} options - The options for creating the guild.
   * @returns {Promise} A promise that resolves with the created guild.
   */
  create(options?: Object): Promise<any>;
  /**
   * Fetches guild information from the Discord API.
   * @param {string | object} guild - The guild ID or guild object to fetch.
   * @param {object} options - Additional options for the fetch request.
   * @param {boolean} options.cache - Whether to cache the fetched guild information.
   * @param {boolean} options.force - Whether to force fetch the guild information even if it is already cached.
   * @param {string} options.before - The ID of the guild to fetch guilds before.
   * @param {string} options.after - The ID of the guild to fetch guilds after.
   * @param {number} options.limit - The maximum number of guilds to fetch.
   * @returns {Promise<Cache>}
   */
  fetch(
    guild: string | object,
    options: {
      cache: boolean;
      force: boolean;
      before: string;
      after: string;
      limit: number;
    }
  ): Promise<Cache>;
  /**
   * Fetches the ID of a guild asynchronously.
   * @param {string | Guild} guild - The guild or guild ID to fetch the ID for.
   * @param {Object} [options] - Additional options for the fetch.
   * @param {boolean} [options.cache] - Whether to cache the fetched ID.
   * @param {boolean} [options.force] - Whether to force the fetch even if the ID is already cached.
   * @param {boolean} [options.withCounts] - Whether to include counts in the fetch query.
   * @returns {Promise<string>} - A promise that resolves with the fetched guild ID.
   */
  _fetchId(
    guild: string | Guild,
    options?:
      | {
          cache?: boolean | undefined;
          force?: boolean | undefined;
          withCounts?: boolean | undefined;
        }
      | undefined
  ): Promise<string>;
  /**
   * Edits a guild with the given options.
   * @param {string | Guild} guilds - The ID or the Guild object of the guild to edit.
   * @param {Object} [options] - The options to edit the guild with.
   * @param {string} [options.reason] - The reason for the edit.
   * @returns {Promise<Guild>} A promise that resolves with the edited guild.
   */
  edit(
    guilds: string | Guild,
    options?:
      | {
          reason?: string | undefined;
        }
      | undefined
  ): Promise<Guild>;
  /**
   * Deletes a guild from the server.
   * @param {string | Guild} guild - The guild to delete. Can be either a guild ID or a Guild object.
   * @returns {Promise<Guild>} - The deleted guild.
   */
  delete(guild: string | Guild): Promise<Guild>;
  /**
   * Fetches the preview information for a guild.
   * @param {string | Guild} guild - The guild ID or guild object.
   * @returns {Promise<GuildPreview>} - A promise that resolves to a GuildPreview object.
   */
  fetchPreview(guild: string | Guild): Promise<GuildPreview>;
  /**
   * Modifies the MFA (Multi-Factor Authentication) level for a guild.
   * @param {string | Guild} guild - The guild or guild ID to modify.
   * @param {Object} [options] - Additional options for the modification.
   * @param {string} [options.reason] - The reason for the modification.
   * @param {string | number} [options.mfaLevel] - The new MFA level to set for the guild.
   * @returns {Promise<Guild>} A promise that resolves with the modified guild.
   * @throws {RangeError} If no guild ID is specified.
   */
  modifyMFALevel(
    guild: string | Guild,
    options?:
      | {
          reason?: string | undefined;
          mfaLevel?: string | number | undefined;
        }
      | undefined
  ): Promise<Guild>;
  /**
   * Getter method for the cache property.
   * @returns The Collection object representing the cache.
   */
  get cache(): import("../Util/@Collections/RaidenCol").RaidenCol;
}
import Base = require("../Base/base");
import Guild = require("../Structures/Guild");
import GuildPreview = require("../Structures/GuildPreview");

export = GuildMemberManager;
/**
 * Represents a manager for guild members.
 * @class
 * @extends Base
 */
declare class GuildMemberManager extends Base {
  /**
   * Transforms a given date into an ISO string format.
   * @param {Date | string | null} date - The date to transform.
   * @returns {string | null} - The transformed date in ISO string format, or null if the input is null.
   */
  static transformTimeout(date: Date | string | null): string | null;
  /**
   * Transforms the given options object based on the provided parameters.
   * @param {Object} options - The options object to transform.
   * @param {boolean} [edit=false] - Indicates whether the transformation is for editing purposes.
   * @returns {Object} - The transformed options object.
   */
  static transformOptions(options?: Object, edit?: boolean | undefined): Object;
  /**
   * Transforms the given payload into a new format.
   * @param {any} payload - The payload to transform.
   * @returns {string | string[] | undefined} - The transformed payload.
   */
  static transformPayload(payload?: any): string | string[] | undefined;
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {string} guildId - The ID of the guild.
   * @param {Client} client - The client object.
   */
  constructor(guildId: string, client: Client);
  guildId: string;
  /**
   * Adds a member to the guild.
   * @param {string | GuildMember} members - The member to add. Can be either a string representing the member's ID or a GuildMember object.
   * @param {string} [guildId=this.guildId] - The ID of the guild to add the member to.
   * @param {object} [options={cache: true, force: false}] - Additional options for adding the member.
   * @param {boolean} [options.cache=true] - Whether to cache the member object.
   * @param {boolean} [options.force=false] - Whether to force adding the member even if it already exists in the cache.
   * @returns {GuildMember | null} The added member object
   */
  _add(
    members: string | GuildMember,
    guildId?: string | undefined,
    options?:
      | {
          cache?: boolean | undefined;
          force?: boolean | undefined;
        }
      | undefined
  ): GuildMember | null;
  /**
   * Fetches guild members from the server.
   * @param {string | object} member - The member to fetch. Can be a member ID or a member object.
   * @param {object} options - Additional options for the fetch.
   * @param {boolean} [options.cache=true] - Whether to cache the fetched members.
   * @param {boolean} [options.force=false] - Whether to force fetch the members even if they are already cached.
   * @param {string} [options.query=""] - A query string to filter the members.
   * @param {number} [options.limit=1000] - The maximum number of members to fetch.
   * @param {boolean} [options.presences] - Whether to include
   */
  fetch(
    member: string | object,
    options: {
      cache?: boolean | undefined;
      force?: boolean | undefined;
      query?: string | undefined;
      limit?: number | undefined;
      presences?: boolean | undefined;
    }
  ): Promise<any>;
  /**
   * Retrieves a list of members from the guild.
   * @param {Object} [options] - The options for listing members.
   * @param {number} [options.limit=50] - The maximum number of members to retrieve.
   * @returns {Promise<Cache>} - A promise that resolves to a Cache object containing the retrieved members.
   */
  list(
    options?:
      | {
          limit?: number | undefined;
        }
      | undefined
  ): Promise<Cache>;
  /**
   * Searches for members in a guild based on the provided query.
   * @param {Object} options - The search options.
   * @param {string} options.query - The query to search for.
   * @param {number} [options.limit=50] - The maximum number of results to return.
   * @returns {Promise<Cache>} A Promise that resolves to a Cache object containing the search results.
   * @throws {RangeError} If the query is not provided.
   */
  search(options?: {query: string; limit?: number | undefined}): Promise<Cache>;
  /**
   * Kicks a member from the guild.
   * @param {string | GuildMember} member - The member to kick. Can be either a string representing the member's ID or a GuildMember object.
   * @param {string} reason - The reason for kicking the member. Optional.
   * @returns {Promise<GuildMember>} - The deleted member object.
   * @throws {RangeError} - If a valid GuildMember is not specified.
   */
  kick(member: string | GuildMember, reason: string): Promise<GuildMember>;
  /**
   * Bans a member from the guild.
   * @param {GuildMember} member - The member to ban.
   * @param {Object} [options] - Additional options for the ban.
   * @returns {Promise<GuildMember>} - The banned member.
   */
  ban(member: GuildMember, options?: Object | undefined): Promise<GuildMember>;
  /**
   * Unbans a user from the guild.
   * @param {User} user - The user to unban.
   * @param {string} reason - The reason for unbanning the user.
   * @returns {User} - The unbanned user.
   * @throws {Error} - If the user or guild is not found.
   */
  unban(user: User, reason: string): User;
  /**
   * Edits a guild member with the specified options.
   * @param {string | GuildMember} member - The member to edit. Can be either a member ID or a GuildMember object.
   * @param {Object} [options] - The options for editing the member.
   * @param {string} [options.reason] - The reason for the edit.
   * @returns {Promise<GuildMember>} A promise that resolves with the edited GuildMember object.
   */
  edit(
    member: string | GuildMember,
    options?:
      | {
          reason?: string | undefined;
        }
      | undefined
  ): Promise<GuildMember>;
  /**
   * Fetches the ID of a member from the guild.
   * @param {string | Object} member - The member object or the ID of the member.
   * @param {Object} [options] - Additional options for the fetch.
   * @param {boolean} [options.force] - Whether to force the fetch even if the member is already cached.
   * @param {boolean} [options.cache=true] - Whether to cache the fetched member.
   * @returns {Promise<Object>} - A promise that resolves to the fetched member object.
   */
  _fetchId(
    member: string | Object,
    options?:
      | {
          force?: boolean | undefined;
          cache?: boolean | undefined;
        }
      | undefined
  ): Promise<Object>;
  /**
   * Returns the cache object.
   * @returns The cache object.
   */
  get cache(): import("../Util/@Collections/RaidenCol").RaidenCol;
}
import Base = require("../Base/base");
import GuildMember = require("../Structures/GuildMember");

export = GuildMemberRoleManager;
/**
 * Represents a manager for handling roles of a guild member.
 * @class
 * @extends RoleManager
 */
declare class GuildMemberRoleManager extends RoleManager {
  /**
   * Transforms the given role into an array of role IDs.
   * @param {RaidenCol | string | { id?: string }} role - The role to transform.
   * @returns {string[]} - An array of role IDs.
   */
  static transformRole(
    role?:
      | RaidenCol
      | string
      | {
          id?: string;
        }
  ): string[];
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {string} guildId - The ID of the guild.
   * @param {GuildMember} member - The guild member object.
   * @param {Client} client - The client object.
   */
  constructor(guildId: string, member: GuildMember, client: Client);
  guildId: string;
  member: GuildMember;
  /**
   * Get the highest positioned item from the cache collection.
   * @returns The highest positioned item from the cache collection.
   */
  get highest(): any;
  /**
   * Adds roles to a member in a guild.
   * @param {string[] | RaidenCol} roles - The roles to add. Can be an array of role IDs or a RaidenCol object.
   * @param {string} reason - The reason for adding the roles.
   * @returns {Promise<void>} A promise that resolves when the roles have been added.
   * @throws {RangeError} If an invalid role is specified or if the role cache is empty.
   */
  add(roles: string[] | RaidenCol, reason: string): Promise<void>;
  /**
   * Removes the specified roles from the member.
   * @param {string[] | RaidenCol} roles - The roles to remove. Can be an array of role IDs or a RaidenCol object.
   * @param {string} reason - The reason for removing the roles.
   * @returns {Promise<null>} A promise that resolves to null when the roles have been removed.
   */
  remove(roles: string[] | RaidenCol, reason: string): Promise<null>;
  /**
   * Sets the roles for a guild member.
   * @param {string[]} roles - The roles to set for the guild member.
   * @param {string} reason - The reason for setting the roles.
   * @returns {Promise<void>} - A promise that resolves when the roles are set.
   */
  set(roles: string[], reason: string): Promise<void>;
  /**
   * Retrieves the cache of objects, filtered based on the guild ID and member roles.
   * @returns {Array} An array of objects from the cache that match the guild ID or are included in the member roles.
   */
  get cache(): any[];
}
import RoleManager = require("./RoleManager");
import {RaidenCol} from "../Util/@Collections/RaidenCol";

export = GuildMemberVerificationManager;
/**
 * Represents a manager for guild member verification settings.
 * @class
 * @extends Base
 * @param {string} guildId - The ID of the guild.
 * @param {Client} client - The client instance.
 */
declare class GuildMemberVerificationManager extends Base {
  /**
   * Creates a form field object with the given fields.
   * @param {Object} fields - The fields to include in the form field object.
   * @returns {Object} - The created form field object.
   */
  static createFormFields(fields?: Object): Object;
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {string} guildId - The ID of the guild.
   * @param {Client} client - The client object.
   */
  constructor(guildId: string, client: Client);
  guildId: string;
  /**
   * Fetches the member verification information for a guild.
   * @param {Object} [options] - The options for the fetch request.
   * @param {boolean} [options.withGuild] - Whether to include guild information in the response.
   * @param {string | { code: string }} [options.inviteCode] - The invite code or object containing the invite code.
   * @returns {Promise<GuildMemberVerification>} - A promise that resolves with the fetched GuildMemberVerification object.
   */
  fetch(
    options?:
      | {
          withGuild?: boolean | undefined;
          inviteCode?:
            | string
            | {
                code: string;
              }
            | undefined;
        }
      | undefined
  ): Promise<GuildMemberVerification>;
  /**
   * Edits the member verification settings for the guild.
   * @param {Object} [options] - The options for the member verification settings.
   * @param {boolean} [options.enabled] - Whether member verification is enabled or not.
   * @param {Array<Object>} [options.fields] - An array of form field objects for member verification.
   * @param {string} [options.description] - The description for the member verification form.
   * @returns {Promise<GuildMemberVerification>} A promise that resolves with the updated GuildMemberVerification object.
   */
  edit(
    options?:
      | {
          enabled?: boolean | undefined;
          fields?: Object[] | undefined;
          description?: string | undefined;
        }
      | undefined
  ): Promise<GuildMemberVerification>;
}
import Base = require("../Base/base");
import GuildMemberVerification = require("../Structures/GuildMemberVerification");

export = GuildPruneManager;
/**
 * Represents a manager for pruning members in a guild.
 * @class
 * @extends Base
 * @param {string} guildid - The ID of the guild.
 * @param {Client} client - The client instance.
 */
declare class GuildPruneManager extends Base {
  /**
   * Transforms the given roles object into an array of role IDs.
   * @param {Object | Array} roles - The roles object to transform.
   * @returns {Array} - An array of role IDs.
   */
  static transformRoles(roles?: Object | any[]): any[];
  /**
   * Transforms the options object for server deletion.
   * @param {Object} o - The options object.
   * @param {number} o.days - The number of days for server deletion. Must be between 1 and 30.
   * @param {boolean} o.count - Whether to include the complete prune count. Default is true.
   * @param {Array<string>} o.roles - The roles to include in the deletion. Default is undefined.
   * @returns {Object} - The transformed options object.
   * @throws {RangeError} - If the days value is not between 1 and 30.
   */
  static transformOptions(o?: {days: number; count: boolean; roles: Array<string>}): Object;
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {string} guildid - The ID of the guild.
   * @param {Client} client - The client object.
   */
  constructor(guildid: string, client: Client);
  guildid: string;
  /**
   * Prunes (removes) inactive members from the guild based on the specified options.
   * @param {Object} [options] - The options for pruning.
   * @param {string} [options.reason] - The reason for the prune.
   * @returns {boolean} - True if the prune was successful, false otherwise.
   * @throws {Error} - If an error occurs during the prune process.
   */
  prune(
    options?:
      | {
          reason?: string | undefined;
        }
      | undefined
  ): boolean;
  /**
   * Fetches the count of pruned members in a guild based on the given options.
   * @param {Object} [options] - The options for fetching the prune count.
   * @returns {Promise<number>} - A promise that resolves to the prune count.
   */
  fetchCount(options?: Object | undefined): Promise<number>;
}
import Base = require("../Base/base");

export = GuildRoleManager;
/**
 * A class representing a manager for guild roles.
 * @class
 * @extends RoleManager
 */
declare class GuildRoleManager extends RoleManager {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {string} guildId - The ID of the guild.
   * @param {Client} client - The client object.
   */
  constructor(guildId: string, client: Client);
  guildId: string;
  /**
   * Get the highest role from the cache based on position.
   * @returns The highest role object.
   */
  get highest(): any;
  /**
   * Get the cached data for everyone in the guild.
   * @returns The cached data for everyone in the guild.
   */
  get everyone(): any;
  /**
   * Retrieves the cache for the current guild.
   * @returns {Array} - The filtered cache objects for the current guild.
   */
  get cache(): any[];
}
import RoleManager = require("./RoleManager");

export = GuildScheduledEventManager;
/**
 * Represents a scheduled event manager for a specific guild.
 * @class
 * @extends ScheduledEventManager
 */
declare class GuildScheduledEventManager extends ScheduledEventManager {
  /**
   * Constructs a new instance of the GuildScheduledEvent class.
   * @constructor
   * @param {string} guildId - The ID of the guild associated with the scheduled event.
   * @param {Client} client - The Discord client object.
   */
  constructor(guildId: string, client: Client);
  guildId: string;
  users: GuildScheduledEventUsersManager;
  /**
   * Retrieves the cache for the current guild.
   * @returns {Array} An array of objects from the cache that belong to the current guild.
   */
  get cache(): any[];
}
import ScheduledEventManager = require("./ScheduledEventManager");
import GuildScheduledEventUsersManager = require("./GuildScheduledEventUsersManager");

export = GuildScheduledEventUsersManager;
/**
 * Represents a manager for handling guild scheduled event users.
 * @class
 * @extends Base
 */
declare class GuildScheduledEventUsersManager extends Base {
  /**
   * Transforms a query object into a formatted query object with default values and
   * proper type checking.
   * @param {Object} query - The query object to transform.
   * @returns {Object} - The transformed query object.
   */
  static transformQuery(query?: Object): Object;
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Event} event - The event object.
   * @param {string} guildId - The ID of the guild.
   * @param {Client} client - The client object.
   */
  constructor(event: Event, guildId: string, client: Client);
  event: Event;
  guildId: string;
  /**
   * Resolves a scheduled event user and returns a GuildScheduledEventUser object.
   * @param {string | null} scheduledEventUser - The scheduled event user to resolve.
   * @param {object} event - The event object.
   * @returns {GuildScheduledEventUser | null} - The resolved GuildScheduledEventUser object or null if scheduledEventUser is falsy.
   */
  resolve(scheduledEventUser: string | null, event: object): GuildScheduledEventUser | null;
  /**
   * Fetches the users associated with a scheduled event in a guild.
   * @param {Event | string} [event=this.event] - The event object or event ID.
   * @param {object} [options] - Additional options for the fetch request.
   * @returns {Promise<RaidenCol>} - A promise that resolves to a RaidenCol object containing the fetched users.
   */
  fetch(event?: string | Event | undefined, options?: object | undefined): Promise<RaidenCol>;
}
import Base = require("../Base/base");
import GuildScheduledEventUser = require("../Structures/GuildScheduledEventUser");
import {RaidenCol} from "../Util/@Collections/RaidenCol";

export = GuildStageInstanceManger;
/**
 * A class that extends the StageInstanceManager class and manages stage instances for a specific guild.
 * @class
 * @extends StageInstanceManager
 */
declare class GuildStageInstanceManger extends StageInstanceManager {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {string} guildId - The ID of the guild.
   * @param {Client} client - The client object.
   */
  constructor(guildId: string, client: Client);
  guildId: string;
  /**
   * Retrieves the cache for the current guild.
   * @returns {Array} - An array of objects from the cache that belong to the current guild.
   */
  get cache(): any[];
}
import StageInstanceManager = require("./StageInstanceManager");

export = GuildStickerManager;
/**
 * Represents a sticker manager for a specific guild.
 * @class
 * @extends StickerManager
 */
declare class GuildStickerManager extends StickerManager {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {string} guildId - The ID of the guild.
   * @param {Client} client - The client object.
   */
  constructor(guildId: string, client: Client);
  guildId: string;
  /**
   * Retrieves the cache for the current guild.
   * @returns {Array} - An array of objects from the cache that belong to the current guild.
   */
  get cache(): any[];
}
import StickerManager = require("./StickerManager");

export = GuildTemplateManager;
/**
 * Represents a manager for guild templates.
 * @class
 * @extends Base
 * @param {string} guildId - The ID of the guild.
 * @param {Client} client - The client instance.
 */
declare class GuildTemplateManager extends Base {
  /**
   * Transforms the given payload object by extracting the "name" and "description" properties.
   * If these properties are not present in the object, they will be set to undefined in the returned object.
   * @param {Object} o - The payload object to transform.
   * @returns {Object} - The transformed object with "name" and "description" properties.
   */
  static transformPayload(o?: Object): Object;
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {string} guildId - The ID of the guild.
   * @param {Client} client - The client object.
   */
  constructor(guildId: string, client: Client);
  guildId: string;
  /**
   * Adds a template to the cache and returns the template object.
   * @param {string | { code: string }} templates - The template code or an object containing the template code.
   * @param {object} [options] - Optional options for the template.
   * @param {boolean} [options.cache=true] - Whether to cache the template or not.
   * @param {boolean} [options.force=false] - Whether to force the template to be retrieved from the cache or not.
   * @returns {GuildTemplate | null} The template object if it exists, otherwise null.
   */
  _add(
    templates:
      | string
      | {
          code: string;
        },
    options?:
      | {
          cache?: boolean | undefined;
          force?: boolean | undefined;
        }
      | undefined
  ): GuildTemplate | null;
  /**
   * Fetches templates from the server.
   * @param {Object} [options] - Optional parameters for the fetch request.
   * @param {boolean} [options.cache=true] - Whether to cache the fetched templates.
   * @param {boolean} [options.force=false] - Whether to force the fetch request even if the templates are already cached.
   * @returns {Promise<Cache>} - A promise that resolves to a cache object containing the fetched templates.
   */
  fetch(
    options?:
      | {
          cache?: boolean | undefined;
          force?: boolean | undefined;
        }
      | undefined
  ): Promise<Cache>;
  /**
   * Creates a guild template with the given options.
   * @param {Object} options - The options for creating the guild template.
   * @returns {Promise<Object>} A promise that resolves to the created guild template.
   */
  create(options?: Object): Promise<Object>;
  /**
   * Edits a guild template with the given code and options.
   * @param {string | GuildTemplate} code - The code or GuildTemplate object of the template to edit.
   * @param {Object} [options] - The options for editing the template.
   * @returns {Promise<GuildTemplate>} A promise that resolves with the edited GuildTemplate object.
   * @throws {RangeError} If the code is not provided.
   */
  edit(code: string | GuildTemplate, options?: Object | undefined): Promise<GuildTemplate>;
  /**
   * Synchronizes a guild template with the provided code.
   * @param {string | GuildTemplate} code - The code or GuildTemplate object to sync.
   * @returns {Promise<GuildTemplate>} - A promise that resolves with the synchronized GuildTemplate.
   * @throws {RangeError} - If the code is not provided.
   */
  sync(code: string | GuildTemplate): Promise<GuildTemplate>;
  /**
   * Deletes a guild template.
   * @param {string | GuildTemplate} code - The code or GuildTemplate object of the template to delete.
   * @returns {Promise<GuildTemplate>} A promise that resolves with the deleted template.
   * @throws {RangeError} If the code is not provided.
   */
  delete(code: string | GuildTemplate): Promise<GuildTemplate>;
  /**
   * Getter method for the cache property.
   * @returns The Collection object representing the cache.
   */
  get cache(): import("../Util/@Collections/RaidenCol").RaidenCol;
}
import Base = require("../Base/base");
import GuildTemplate = require("../Structures/GuildTemplate");

export = GuildVanityManager;
/**
 * Represents a manager for handling guild vanity URLs.
 * @class
 * @extends Base
 */
declare class GuildVanityManager extends Base {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {string} guildId - The ID of the guild.
   * @param {Client} client - The client object.
   */
  constructor(guildId: string, client: Client);
  guildId: string;
  /**
   * Fetches the vanity URL for the specified guild.
   * @param {string | Guild} [guild=this.guildId] - The guild ID or Guild object. Defaults to the current guild.
   * @returns {Promise<GuildVanity>} - A promise that resolves to a GuildVanity object containing the vanity URL information.
   */
  fetch(guild?: string | Guild): Promise<GuildVanity>;
  /**
   * Edits the code for a guild's vanity URL.
   * @param {string} code - The new code for the vanity URL.
   * @param {string | Guild} [guild=this.guildId] - The guild ID or guild object to edit the vanity URL for.
   * @returns {Promise<GuildVanity>} A promise that resolves with the updated GuildVanity object.
   */
  edit(code: string, guild?: string | Guild): Promise<GuildVanity>;
}
import Base = require("../Base/base");
import GuildVanity = require("../Structures/GuildVanity");

export = GuildVoiceStateManager;
/**
 * Represents a voice state manager for a specific guild.
 * @class
 * @extends VoiceStateManager
 * @param {string} guildId - The ID of the guild.
 * @param {Client} client - The client instance.
 */
declare class GuildVoiceStateManager extends VoiceStateManager {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {string} guildId - The ID of the guild.
   * @param {Client} client - The client object.
   */
  constructor(guildId: string, client: Client);
  guildId: string;
  /**
   * Edits the voice state of a user in a guild.
   * @param {string | User} user - The user or user ID to edit the voice state for.
   * @param {Object} [options] - The options for editing the voice state.
   * @param {string | Channel} [options.channel] - The channel or channel ID to move the user to.
   * @param {boolean} [options.suppress] - Whether to suppress the user's audio.
   * @param {Date} [options.requestToSpeak] - The timestamp for the user's request to speak.
   * @returns {Promise<void>} A promise that resolves when the voice state is successfully edited.
   */
  edit(
    user: string | User,
    options?:
      | {
          channel?: string | Channel;
          suppress?: boolean | undefined;
          requestToSpeak?: Date | undefined;
        }
      | undefined
  ): Promise<void>;
  /**
   * Retrieves the cache for the current guild.
   * @returns {Array} An array of objects from the cache that belong to the current guild.
   */
  get cache(): any[];
}
import VoiceStateManager = require("./VoiceStateManager");

export = GuildWidgetManager;
/**
 * Represents a manager for guild widget settings.
 * @class
 * @extends Base
 */
declare class GuildWidgetManager extends Base {
  /**
   * Transforms the given options object into a new object with specific properties.
   * @param {Object} o - The options object to transform.
   * @returns {Object} - The transformed object with the following properties:
   *   - enabled: A boolean indicating whether the option is enabled.
   *   - channel_id: A string representing the channel ID, or null if not provided.
   */
  static transformOptions(o?: Object): Object;
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {string} guildId - The ID of the guild.
   * @param {Client} client - The client object.
   */
  constructor(guildId: string, client: Client);
  guildId: string;
  /**
   * Fetches the widget settings for the guild.
   * @returns {Promise<GuildWidgetSettings>} - A promise that resolves to an instance of GuildWidgetSettings.
   */
  fetchSettings(): Promise<GuildWidgetSettings>;
  /**
   * Fetches the guild widget data for the current guild.
   * @returns {Promise<GuildWidget>} A promise that resolves to a GuildWidget object representing the guild widget data.
   */
  fetch(): Promise<GuildWidget>;
  /**
   * Edits the guild widget settings with the provided options.
   * @param {Object} [options] - The options for editing the guild widget settings.
   * @param {string} [options.reason] - The reason for the edit.
   * @returns {Promise<GuildWidgetSettings>} A promise that resolves with the updated guild widget settings.
   */
  edit(
    options?:
      | {
          reason?: string | undefined;
        }
      | undefined
  ): Promise<GuildWidgetSettings>;
}
import Base = require("../Base/base");
import GuildWidgetSettings = require("../Structures/GuildWidgetSettings");
import GuildWidget = require("../Structures/GuildWidget");

export = MessageManager;
/**
 * Represents a message manager for a specific guild and channel.
 * @class
 * @extends Base
 * @param {string} guildId - The ID of the guild.
 * @param {string} channelId - The ID of the channel.
 * @param {Client} client - The client instance.
 */
declare class MessageManager extends Base {
  /**
   * Transforms the given options object into a new object with specific properties.
   * @param {Object} o - The options object to transform.
   * @returns {Object | null} - The transformed object or null if the input is null.
   */
  static transformOptions(o?: Object): Object | null;
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {string} guildId - The ID of the guild.
   * @param {string} channelId - The ID of the channel.
   * @param {Client} client - The client object.
   */
  constructor(guildId: string, channelId: string, client: Client);
  guildId: string;
  channelId: string;
  /**
   * Adds a message to the cache and returns the message object.
   * @param {string | Message} messages - The message or message ID to add to the cache.
   * @param {string} [guildId=this.guildId] - The ID of the guild the message belongs to.
   * @param {string} [channelId=this.channelId] - The ID of the channel the message belongs to.
   * @param {object} [options={cache: true, force: false}] - Additional options for adding the message.
   * @param {boolean} [options.cache=true] - Whether to cache the message.
   * @param {boolean} [options.force=false] - Whether to force adding the message to the cache even if it
   */
  _add(
    messages: string | Message,
    guildId?: string | undefined,
    channelId?: string | undefined,
    options?:
      | {
          cache?: boolean | undefined;
          force?: boolean | undefined;
        }
      | undefined
  ): any;
  /**
   * Sends a message to a specified channel.
   * @param {string | Channel} [channel=this.channelId] - The channel to send the message to. Can be either a channel ID or a Channel object.
   * @param {object} [options] - Additional options for the message.
   * @returns {Promise<Message>} A promise that resolves with the sent message.
   */
  send(channel?: string | Channel, options?: object | undefined): Promise<Message>;
  /**
   * Bulk deletes messages in a channel.
   * @param {string | Channel} [channel=this.channelId] - The channel ID or Channel object where the messages should be deleted.
   * @param {Array<Message> | Map<string, Message> | number} [message=[]] - The messages to be deleted. Can be an array of Message objects, a Map of Message objects, or a number representing the number of messages to fetch and delete.
   * @param {string} [reason] - The reason for deleting the messages.
   * @returns {Promise<Array<[string, Message]>>} - A promise that resolves to an array of deleted message IDs and their corresponding Message objects.
   * @throws {RangeError}
   */
  bulkDelete(
    channel?: string | Channel,
    message?: number | Message[] | Map<string, Message> | undefined,
    reason?: string | undefined
  ): Promise<Array<[string, Message]>>;
  /**
   * Deletes a message from the channel.
   * @param {string | Message} message - The message to delete. Can be either the message ID or the message object itself.
   * @param {string} reason - The reason for deleting the message.
   * @returns {Promise<Message>} - A promise that resolves to the deleted message object.
   */
  delete(message: string | Message, reason: string): Promise<Message>;
  /**
   * Edits a message with the given options.
   * @param {string | Message} message - The message or message ID to edit.
   * @param {Object} options - The options to update the message with.
   * @returns {Promise<Message>} A promise that resolves with the edited message.
   */
  edit(message: string | Message, options: Object): Promise<Message>;
  /**
   * Fetches a message or a list of messages from the server.
   * @param {string | object} message - The ID of the message to fetch or an object containing options for fetching messages.
   * @param {object} [options] - Additional options for fetching messages.
   * @param {boolean} [options.cache=true] - Whether to cache the fetched messages.
   * @param {boolean} [options.force=false] - Whether to force fetch the messages even if they are already cached.
   * @returns {Promise<Message | Map<string, Message>>} - A single message object if a message ID is provided, or a map of message IDs to message objects if options are provided.
   */
  fetch(
    message: string | object,
    options?:
      | {
          cache?: boolean | undefined;
          force?: boolean | undefined;
        }
      | undefined
  ): Promise<Message | Map<string, Message>>;
  /**
   * Fetches a message by its ID from the channel.
   * @param {string | object} message - The ID of the message or the message object itself.
   * @param {boolean} [cache=true] - Whether to cache the fetched message.
   * @param {boolean} [force=false] - Whether to force fetch the message even if it is already cached.
   * @returns {Promise<object>} - A promise that resolves to the fetched message object.
   */
  _fetchId(message: string | object, cache?: boolean | undefined, force?: boolean | undefined): Promise<object>;
  /**
   * Crossposts a message to a specified channel.
   * @param {string | Channel} channel - The channel to crosspost the message to.
   * @param {string | Message} message - The message to crosspost.
   * @returns {Promise<Message>} - A promise that resolves to the crossposted message.
   */
  crosspost(channel: string | Channel, message: string | Message): Promise<Message>;
  /**
   * Reacts to a message with the specified emoji.
   * @param {string | Message} message - The message to react to. Can be either a message ID or a Message object.
   * @param {string} emoji - The emoji to react with.
   * @returns {Promise<void>} - A promise that resolves when the reaction is successfully added.
   */
  react(message: string | Message, emoji: string): Promise<void>;
  /**
   * Retrieves the pinned messages in the current channel.
   * @returns {Promise<Cache>} A Promise that resolves to a Cache object containing the pinned messages.
   */
  pins(): Promise<Cache>;
  /**
   * Unpins a message from the channel.
   * @param {string | Message} message - The message or message ID to unpin.
   * @param {string} reason - The reason for unpinning the message.
   * @returns {Promise<void>} - A promise that resolves when the message is successfully unpinned.
   */
  unpin(message: string | Message, reason: string): Promise<void>;
  /**
   * Pins a message in the channel.
   * @param {string | Message} message - The message or message ID to pin.
   * @param {string} reason - The reason for pinning the message.
   * @returns {Promise<void>} - A promise that resolves when the message is pinned.
   */
  pin(message: string | Message, reason: string): Promise<void>;
  /**
   * Retrieves the guild associated with this guildId.
   * @returns The guild object if found, otherwise null.
   */
  get guild(): any;
  /**
   * Getter method for the cache property.
   * @returns The Collection object representing the cache.
   */
  get cache(): import("../Util/@Collections/RaidenCol").RaidenCol;
}
import Base = require("../Base/base");
import Message = require("../Structures/Message");

export = PermissionOverwriteManager;
/**
 * Represents a manager for permission overwrites in a channel.
 * @class
 * @extends Base
 * @param {string} channelId - The ID of the channel.
 * @param {object} [overwrites] - The initial permission overwrites.
 * @param {Client} client - The client instance.
 */
declare class PermissionOverwriteManager extends Base {
  /**
   * Edits the existing overwrites with the provided overwrites and type.
   * @param {object} existing - The existing overwrites object.
   * @param {object} overwrites - The new overwrites to apply.
   * @param {string | OverwriteType} type - The type of overwrite.
   * @returns {object} - The updated overwrites object.
   */
  static editOverwrites(existing: object, overwrites: object, type: string | {}): object;
  /**
   * Transforms the existing overwrites with the provided overwrites and returns a new object
   * with the updated allow and deny properties.
   * @param {Object} existing - The existing overwrites object.
   * @param {Object} [overwrites] - The new overwrites to apply.
   * @param {string} type - The type of the overwrites.
   * @returns {Object} - The transformed overwrites object.
   */
  static transformOverwrites(existing: Object, overwrites?: Object | undefined, type: string): Object;
  /**
   * Constructs a new instance of the Channel class.
   * @constructor
   * @param {string} channelId - The ID of the channel.
   * @param {Object} [overwrites] - The channel overwrites.
   * @param {Client} client - The client instance.
   */
  constructor(channelId: string, overwrites?: Object | undefined, client: Client);
  channelId: string;
  /**
   * Resolves the given `overwrites` parameter and returns a new `PermissionOverwrite` object.
   * @param {string | PermissionOverwriteOptions} overwrites - The overwrites to resolve. Can be a string representing the ID of the overwrite or an object containing the overwrite options.
   * @returns {PermissionOverwrite | undefined} A new `PermissionOverwrite` object if `overwrites` is provided, otherwise `undefined`.
   */
  resolve(overwrites: string | PermissionOverwriteOptions): PermissionOverwrite | undefined;
  /**
   * Creates or edits permission overwrites for a user or role in a channel.
   * @param {User | Role | string} user - The user or role to create or edit permission overwrites for.
   * @param {PermissionOverwriteOptions} overwrites - The permission overwrites to apply.
   * @param {CreateOptions} [options] - Additional options for creating or editing permission overwrites.
   * @param {string} [options.reason] - The reason for creating or editing the permission overwrites.
   * @returns {Promise<void>} - A promise that resolves when the permission overwrites are created or edited.
   * @throws {RangeError} - If no user or role is found.
   */
  create(user: User | Role | string, overwrites: PermissionOverwriteOptions, options?: any): Promise<void>;
  /**
   * Sets the permission overwrites for a channel.
   * @param {Array} overwrites - An array of permission overwrite objects.
   * @param {string} reason - The reason for setting the permission overwrites.
   * @returns {Promise} A promise that resolves when the permission overwrites are set.
   */
  set(overwrites: any[], reason: string): Promise<any>;
  /**
   * Edits the permissions for a user or role in the channel.
   * @param {string | User | Role} userOrRole - The user or role to edit permissions for.
   * @param {Object} [options] - The options for the permission overwrite.
   * @param {Object} [overwriteOptions] - The options for overwriting the permission overwrite.
   * @param {string} [overwriteOptions.reason] - The reason for the permission overwrite.
   * @param {string} [overwriteOptions.type] - The type of permission overwrite.
   * @returns {Promise<Channel>} A promise that resolves with the updated channel object.
   * @throws {RangeError} If no user or role is specified.
   */
  edit(
    userOrRole: string | User | Role,
    options?: Object | undefined,
    overwriteOptions?:
      | {
          reason?: string | undefined;
          type?: string | undefined;
        }
      | undefined
  ): Promise<Channel>;
  /**
   * Deletes the permission for a user or role in the channel.
   * @param {string | User | Role} userOrRole - The user or role to delete the permission for.
   * @param {string} reason - The reason for deleting the permission.
   * @returns {Promise<Channel>} A promise that resolves with the updated channel object.
   */
  delete(userOrRole: string | User | Role, reason: string): Promise<Channel>;
  /**
   * Get the cache collection.
   * @returns {Collection} - The cache collection.
   */
  get cache(): Collection;
}
import Base = require("../Base/base");
import PermissionOverwrite = require("../Structures/PermissionOverwrite");
import Collection_1 = require("../Util/@Collections/RaidenCol");
import Collection = Collection_1.RaidenCol;

export = PresenceManager;
/**
 * Represents a presence manager that handles the caching and retrieval of presence data.
 * @class
 * @extends Base
 * @param {Client} client - The client instance.
 */
declare class PresenceManager extends Base {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Client} client - The client object used for communication with the server.
   */
  constructor(client: Client);
  /**
   * Adds a presence to the cache and returns the presence object.
   * @param {string | Presence} presences - The presence object or the ID of the presence.
   * @param {object} [options] - Additional options for adding the presence.
   * @param {boolean} [options.cache=true] - Whether to cache the presence object.
   * @param {boolean} [options.force=false] - Whether to force the retrieval of the presence from the cache.
   * @returns {Presence | null} The presence object that was added to the cache, or null if presences is falsy.
   */
  _add(
    presences: string | Presence,
    options?:
      | {
          cache?: boolean | undefined;
          force?: boolean | undefined;
        }
      | undefined
  ): Presence | null;
  /**
   * Getter method for the cache property.
   * @returns The Collection object representing the cache.
   */
  get cache(): import("../Util/@Collections/RaidenCol").RaidenCol;
}
import Base = require("../Base/base");
import Presence = require("../Structures/Presence");

export = ReactionManager;
/**
 * A class representing a reaction manager for a specific message in a channel.
 * @class
 * @extends Base
 * @param {Array} reactions - An array of reaction objects.
 * @param {string} messageId - The ID of the message.
 * @param {string} channelId - The ID of the channel.
 * @param {string} guildId - The ID of the guild.
 * @param {Client} client - The client instance.
 */
declare class ReactionManager extends Base {
  /**
   * Constructs a new instance of the ReactionCollector class.
   * @constructor
   * @param {Array} reactions - An array of reaction objects.
   * @param {string} messageId - The ID of the message that the reactions are collected from.
   * @param {string} channelId - The ID of the channel that the message belongs to.
   * @param {string} guildId - The ID of the guild that the message belongs to.
   * @param {Client} client - The Discord client instance.
   */
  constructor(reactions: any[], messageId: string, channelId: string, guildId: string, client: Client);
  channelId: string;
  guildId: string;
  messageId: string;
  /**
   * Retrieves the guild associated with this guildId.
   * @returns The guild object if found, otherwise null.
   */
  get guild(): any;
  /**
   * Resolves a reaction object and returns a new MessageReaction instance.
   * @param {string | MessageReaction} reaction - The reaction object to resolve. Can be either a string or a MessageReaction instance.
   * @returns {MessageReaction} A new MessageReaction instance with the resolved reaction object.
   */
  resolve(reaction: string | MessageReaction): MessageReaction;
  /**
   * Removes all reactions from a specific message in a channel.
   * @returns {void}
   */
  removeAll(): void;
  /**
   * Get the cache of reactions.
   * @returns The cache of reactions.
   */
  get cache(): any;
}
import Base = require("../Base/base");
import MessageReaction = require("../Structures/MessageReaction");

export = ReactionUserManager;
/**
 * A class representing a manager for reaction users.
 * @class
 * @extends Base
 */
declare class ReactionUserManager extends Base {
  /**
   * Transforms the options object by extracting the "after" and "limit" properties.
   * @param {Object} o - The options object.
   * @returns {Object} - The transformed options object.
   */
  static transformOptions(o?: Object): Object;
  /**
   * Constructs a ReactionCollector instance.
   * @constructor
   * @param {Reaction} reaction - The reaction object.
   * @param {string} channelId - The ID of the channel where the reaction occurred.
   * @param {string} messageId - The ID of the message where the reaction occurred.
   * @param {Emoji} emoji - The emoji that was reacted with.
   * @param {Client} client - The client instance.
   */
  constructor(reaction: Reaction, channelId: string, messageId: string, emoji: Emoji, client: Client);
  reaction: Reaction;
  channelId: string;
  messageId: string;
  emoji: Emoji;
  /**
   * Adds a user to the collection of users.
   * @param {User | string} users - The user object or user ID to add.
   * @param {Object} [options] - Additional options for adding the user.
   * @param {boolean} [options.cache=true] - Whether to cache the user object.
   * @param {boolean} [options.force=false] - Whether to force fetching the user even if it is already cached.
   * @returns {User | null} The added user object or null if no user is provided.
   */
  _add(
    users: User | string,
    options?:
      | {
          cache?: boolean | undefined;
          force?: boolean | undefined;
        }
      | undefined
  ): User | null;
  /**
   * Fetches reaction users for a specific message and emoji.
   * @param {Object} options - The options for the fetch request.
   * @param {boolean} [options.cache=true] - Whether to cache the fetched data.
   * @param {boolean} [options.force=false] - Whether to force the fetch request even if the data is already cached.
   * @returns {Promise<Map<string, ReactionUser>>} - A promise that resolves to a map of reaction users, where the keys are user IDs and the values are ReactionUser objects.
   */
  fetch(options: {cache?: boolean | undefined; force?: boolean | undefined}): Promise<Map<string, ReactionUser>>;
  /**
   * Removes a reaction from a message.
   * @param {string | User} [user=this.client.user.id] - The user ID or User object of the user whose reaction should be removed.
   * @throws {RangeError} If no user is found.
   * @returns {Promise<Reaction>} The removed reaction.
   */
  remove(user?: string | User | undefined): Promise<Reaction>;
  /**
   * Getter method for the cache property.
   * @returns The Collection object representing the cache.
   */
  get cache(): import("../Util/@Collections/RaidenCol").RaidenCol;
}
import Base = require("../Base/base");
import User = require("../Structures/User");

export = RoleManager;
/**
 * Represents a Role Manager that handles operations related to roles in a guild.
 * @class
 * @extends Base
 */
declare class RoleManager extends Base {
  /**
   * Transforms the payload object based on the provided parameters.
   * @param {object} o - The payload object to transform.
   * @param {boolean} [modifyPosition=false] - Whether to modify the position property.
   * @returns {Promise<object>} - The transformed payload object.
   */
  static transformPayload(o?: object, modifyPosition?: boolean | undefined): Promise<object>;
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Client} client - The client object used for communication with the server.
   */
  constructor(client: Client);
  /**
   * Adds a role to the cache and returns the role object.
   * @param {string | Role} roles - The role ID or role object to add to the cache.
   * @param {string} [guildId=this.guildId] - The ID of the guild the role belongs to.
   * @param {object} [options={cache: true, force: false}] - Additional options for role caching.
   * @param {boolean} [options.cache=true] - Whether to cache the role object.
   * @param {boolean} [options.force=false] - Whether to force fetching the role from the API even if it is already in the cache.
   * @returns {Role | null} The role object that was added to the cache
   */
  _add(
    roles: string | Role,
    guildId?: string | undefined,
    options?:
      | {
          cache?: boolean | undefined;
          force?: boolean | undefined;
        }
      | undefined
  ): Role | null;
  /**
   * Fetches roles from the server based on the provided roles and options.
   * @param {string | object} roles - The roles to fetch. Can be a string representing a role ID or an object containing options.
   * @param {object} options - The options for fetching roles. Can contain properties like cache and force.
   * @returns {Promise} - A promise that resolves to the fetched roles.
   */
  fetch(roles: string | object, options: object): Promise<any>;
  /**
   * Creates a new role in the guild with the given options.
   * @param {Object} options - The options for creating the role.
   * @param {string} options.reason - The reason for creating the role.
   * @param {number} options.position - The position of the role in the hierarchy.
   * @returns {Promise<Role>} A promise that resolves with the created role.
   */
  create(options?: {reason: string; position: number}): Promise<Role>;
  /**
   * Edits a role in the guild.
   * @param {string | Role} role - The role ID or role object to edit.
   * @param {Object} [options] - Additional options for editing the role.
   * @param {string} [options.reason] - The reason for editing the role.
   * @param {number} [options.position] - The new position of the role.
   * @returns {Promise<Role>} A promise that resolves with the edited role object.
   */
  edit(
    role: string | Role,
    options?:
      | {
          reason?: string | undefined;
          position?: number | undefined;
        }
      | undefined
  ): Promise<Role>;
  /**
   * Deletes a role from the guild.
   * @param {string | Role} role - The role to delete. Can be either the role ID or the Role object.
   * @param {string} reason - The reason for deleting the role.
   * @returns {Promise<Role>} - The deleted role.
   * @throws {Error} - If the role cannot be deleted.
   */
  delete(role: string | Role, reason: string): Promise<Role>;
  /**
   * Clones a role by creating a new instance of it.
   * @param {string | Object} [role] - The role to clone. Can be either a role ID or a role object.
   * @returns {Promise} - A promise that resolves with the cloned role.
   * @throws {RangeError} - If the role is not found in the cache.
   */
  clone(role?: string | Object | undefined): Promise<any>;
  /**
   * Modifies the position of roles in a guild.
   * @param {Object} [options] - The options for modifying the position.
   * @param {string} [options.reason] - The reason for the modification.
   * @param {Array} [options.data] - The data containing the roles to modify.
   * @returns {Promise} A promise that resolves with the modified roles.
   */
  modifyPosition(
    options?:
      | {
          reason?: string | undefined;
          data?: any[] | undefined;
        }
      | undefined
  ): Promise<any>;
  /**
   * Getter method for the cache property.
   * @returns The Collection object representing the cache.
   */
  get cache(): import("../Util/@Collections/RaidenCol").RaidenCol;
}
import Base = require("../Base/base");
import Role = require("../Structures/Role");

export = RolePromptManager;
/**
 * Represents a manager for role prompts in a guild.
 * @class
 * @extends Base
 * @param {string} guildId - The ID of the guild.
 * @param {Client} client - The client instance.
 */
declare class RolePromptManager extends Base {
  /**
   * Transforms the given payload object into a new object with specific properties.
   * @param {object} payload - The payload object to transform.
   * @returns {object} - The transformed object with properties: title, description, required, and roles.
   */
  static transformPayload(payload?: object): object;
  /**
   * Transforms a roles object into a new format.
   * @param {Object} roles - The roles object to transform.
   * @returns {Object} - The transformed roles object.
   */
  static transformRoles(roles?: Object): Object;
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {string} guildId - The ID of the guild.
   * @param {Client} client - The client object.
   */
  constructor(guildId: string, client: Client);
  guildId: string;
  /**
   * Adds a role prompt to the collection.
   * @param {string | RolePrompt} prompts - The ID of the prompt or the prompt object itself.
   * @param {string} [guildId=this.guildId] - The ID of the guild where the prompt is added.
   * @param {object} [options={cache: true, force: false}] - Additional options for adding the prompt.
   * @param {boolean} [options.cache=true] - Whether to cache the prompt.
   * @param {boolean} [options.force=false] - Whether to force adding the prompt even if it already exists in the cache.
   * @returns {RolePrompt | null} The added role prompt or null if prompts is falsy.
   */
  _add(
    prompts: string | RolePrompt,
    guildId?: string | undefined,
    options?:
      | {
          cache?: boolean | undefined;
          force?: boolean | undefined;
        }
      | undefined
  ): RolePrompt | null;
  /**
   * Fetches role prompts from the server.
   * @param {Object} [options] - Optional parameters for the fetch request.
   * @param {boolean} [options.cache] - Whether to use cached data or not.
   * @param {boolean} [options.force] - Whether to force a fresh fetch or not.
   * @returns {Promise<Object>} - A promise that resolves to the fetched role prompts.
   */
  fetch(
    options?:
      | {
          cache?: boolean | undefined;
          force?: boolean | undefined;
        }
      | undefined
  ): Promise<Object>;
  /**
   * Sets the role prompts for the guild.
   * @param {Object} [options] - The options for setting the role prompts.
   * @param {string} [options.reason] - The reason for setting the role prompts.
   * @returns {Promise<Cache>} A promise that resolves with a new instance of the cache
   * containing the updated role prompts.
   */
  set(
    options?:
      | {
          reason?: string | undefined;
        }
      | undefined
  ): Promise<Cache>;
  /**
   * Getter method for the cache property.
   * @returns The Collection object representing the cache.
   */
  get cache(): import("../Util/@Collections/RaidenCol").RaidenCol;
}
import Base = require("../Base/base");

export = ScheduledEventManager;
/**
 * Represents a Scheduled Event Manager that handles creating, editing, and deleting scheduled events for a guild.
 * @class
 * @extends Base
 */
declare class ScheduledEventManager extends Base {
  /**
   * Transforms the options object into the desired format based on the provided parameters.
   * @param {Object} o - The options object to transform.
   * @param {boolean} [create=false] - Indicates whether to transform the options for creating a new object.
   * @returns {Promise<Object>} - The transformed options object.
   */
  static transformOptions(o?: Object, create?: boolean | undefined): Promise<Object>;
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Client} client - The client object used for communication with the server.
   */
  constructor(client: Client);
  /**
   * Adds an event to the guild's scheduled events.
   * @param {string | GuildScheduledEvent} events - The event or event ID to add.
   * @param {string} [guildId=this.guildId] - The ID of the guild to add the event to.
   * @param {object} [options={cache: true, force: false}] - Additional options for adding the event.
   * @param {boolean} [options.cache=true] - Whether to cache the event.
   * @param {boolean} [options.force=false] - Whether to force adding the event even if it already exists in the cache.
   * @returns {GuildScheduledEvent | null} - The added event or null if the events parameter is falsy
   */
  _add(
    events: string | GuildScheduledEvent,
    guildId?: string | undefined,
    options?:
      | {
          cache?: boolean | undefined;
          force?: boolean | undefined;
        }
      | undefined
  ): GuildScheduledEvent | null;
  /**
   * Creates a scheduled event with the given options.
   * @param {Object} [options] - The options for the scheduled event.
   * @param {string} [options.reason] - The reason for creating the event.
   * @returns {Promise} A promise that resolves with the created event.
   */
  create(
    options?:
      | {
          reason?: string | undefined;
        }
      | undefined
  ): Promise<any>;
  /**
   * Edits a scheduled event with the given options.
   * @param {string | Object} event - The ID of the event or the event object itself.
   * @param {Object} [options] - The options to update the event with.
   * @param {string} [options.reason] - The reason for editing the event.
   * @returns {Promise<Object>} A promise that resolves with the updated event object.
   */
  edit(
    event: string | Object,
    options?:
      | {
          reason?: string | undefined;
        }
      | undefined
  ): Promise<Object>;
  /**
   * Deletes an event from the scheduled events of a guild.
   * @param {string | Object} event - The event to be deleted. Can be either the event ID as a string or the event object itself.
   * @returns {Promise<Object>} - The deleted event object.
   */
  delete(event: string | Object): Promise<Object>;
  /**
   * Fetches scheduled events from the server based on the provided options.
   * @param {any} events - The events to fetch. Can be an ID, an array of IDs, or an object with query options.
   * @param {object} options - The options for fetching the events.
   * @param {boolean} options.cache - Whether to cache the fetched events. Default is true.
   * @param {boolean} options.force - Whether to force fetch the events even if they are already cached. Default is false.
   * @returns {Promise} A promise that resolves with the fetched events.
   */
  fetch(
    events: any,
    options: {
      cache: boolean;
      force: boolean;
    }
  ): Promise<any>;
  /**
   * Fetches the ID of an event from the server.
   * @param {string | Event} events - The ID of the event or the event object itself.
   * @param {boolean} [cache=true] - Whether to cache the fetched event.
   * @param {boolean} [force=false] - Whether to force fetch the event even if it is already cached.
   * @returns {Promise<Event>} - The fetched event.
   */
  _fetchId(events: string | Event, cache?: boolean | undefined, force?: boolean | undefined): Promise<Event>;
  /**
   * Getter method for the cache property.
   * @returns The Collection object representing the cache.
   */
  get cache(): import("../Util/@Collections/RaidenCol").RaidenCol;
}
import Base = require("../Base/base");
import GuildScheduledEvent = require("../Structures/GuildScheduledEvent");

export = StageInstanceManager;
/**
 * Manages stage instances in a guild.
 * @class
 * @extends Base
 */
declare class StageInstanceManager extends Base {
  /**
   * Transforms the given payload object into a new object with specific properties.
   * @param {object} [payload] - The payload object to transform.
   * @returns {object} - The transformed payload object.
   */
  static transformPayload(payload?: object | undefined): object;
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Client} client - The client object used for communication with the server.
   */
  constructor(client: Client);
  /**
   * Adds a stage instance to the cache and returns the stage instance object.
   * @param {string | StageInstance} stageInstances - The stage instance ID or the stage instance object.
   * @param {string} [guildId=this.guildId] - The ID of the guild where the stage instance belongs to.
   * @param {object} [options={cache: true, force: false}] - Additional options for adding the stage instance.
   * @param {boolean} [options.cache=true] - Whether to cache the stage instance or not.
   * @param {boolean} [options.force=false] - Whether to force fetch the stage instance even if it is already in the cache.
   * @returns {StageInstance | null} The stage
   */
  _add(
    stageInstances: string | StageInstance,
    guildId?: string | undefined,
    options?:
      | {
          cache?: boolean | undefined;
          force?: boolean | undefined;
        }
      | undefined
  ): StageInstance | null;
  /**
   * Fetches a stage instance from the API.
   * @param {string | Channel} channel - The channel or channel ID to fetch the stage instance from.
   * @param {Object} [options] - Additional options for the fetch.
   * @param {boolean} [options.cache=true] - Whether to cache the fetched stage instance.
   * @param {boolean} [options.force=false] - Whether to force fetch the stage instance even if it is already cached.
   * @returns {Promise<StageInstance>} A promise that resolves with the fetched stage instance.
   */
  fetch(
    channel: string | Channel,
    options?:
      | {
          cache?: boolean | undefined;
          force?: boolean | undefined;
        }
      | undefined
  ): Promise<StageInstance>;
  /**
   * Creates a new stage instance with the given options.
   * @param {Object} [options] - The options for creating the stage instance.
   * @param {string} [options.reason] - The reason for creating the stage instance.
   * @returns {Promise<StageInstance>} A promise that resolves with the created stage instance.
   */
  create(
    options?:
      | {
          reason?: string | undefined;
        }
      | undefined
  ): Promise<StageInstance>;
  /**
   * Edits a stage instance in a channel.
   * @param {string | Channel} channel - The channel or channel ID where the stage instance is located.
   * @param {Object} [options] - Additional options for editing the stage instance.
   * @param {string} [options.reason] - The reason for editing the stage instance.
   * @returns {Promise<StageInstance>} A promise that resolves with the updated stage instance.
   */
  edit(
    channel: string | Channel,
    options?:
      | {
          reason?: string | undefined;
        }
      | undefined
  ): Promise<StageInstance>;
  /**
   * Deletes a stage instance from a channel.
   * @param {string | Channel} channel - The channel or channel ID where the stage instance is located.
   * @param {string} reason - The reason for deleting the stage instance.
   * @returns {Promise<StageInstance | null>} - A promise that resolves to the deleted stage instance, or null if it does not exist.
   */
  delete(channel: string | Channel, reason: string): Promise<StageInstance | null>;
  /**
   * Getter method for the cache property.
   * @returns The Collection object representing the cache.
   */
  get cache(): import("../Util/@Collections/RaidenCol").RaidenCol;
}
import Base = require("../Base/base");
import StageInstance = require("../Structures/StageInstance");

export = StickerManager;
/**
 * Represents a Sticker Manager that handles operations related to stickers in a guild.
 * @class
 * @extends Base
 */
declare class StickerManager extends Base {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Client} client - The client object used for communication with the server.
   */
  constructor(client: Client);
  /**
   * Adds a sticker to the cache and returns the sticker object.
   * @param {string | Sticker} stickers - The sticker object or sticker ID to add to the cache.
   * @param {string} [guildId=this.guildId] - The ID of the guild where the sticker belongs.
   * @param {object} [options={cache: true, force: false}] - Additional options for adding the sticker.
   * @param {boolean} [options.cache=true] - Whether to cache the sticker object.
   * @param {boolean} [options.force=false] - Whether to force fetching the sticker even if it is already in the cache.
   * @returns {Sticker | null} The sticker object that was added to the cache
   */
  _add(
    stickers: string | Sticker,
    guildId?: string | undefined,
    options?:
      | {
          cache?: boolean | undefined;
          force?: boolean | undefined;
        }
      | undefined
  ): Sticker | null;
  /**
   * Fetches a sticker from the server based on the provided sticker ID or options.
   * @param {string | object} sticker - The sticker ID or options object.
   * @param {object} [options] - The options for fetching the sticker.
   * @param {boolean} [options.cache=true] - Whether to cache the fetched sticker.
   * @param {boolean} [options.force=false] - Whether to force fetch the sticker even if it is already cached.
   * @returns {Promise<Sticker>} - A promise that resolves to the fetched sticker.
   */
  fetch(
    sticker: string | object,
    options?:
      | {
          cache?: boolean | undefined;
          force?: boolean | undefined;
        }
      | undefined
  ): Promise<Sticker>;
  /**
   * Fetches the ID of a sticker from the server.
   * @param {string | Sticker} sticker - The sticker or sticker ID to fetch.
   * @param {boolean} [cache=true] - Whether to cache the fetched sticker.
   * @param {boolean} [force=false] - Whether to force fetching the sticker even if it is already cached.
   * @returns {Promise<Sticker>} - A promise that resolves with the fetched sticker.
   */
  _fetchId(sticker: string | Sticker, cache?: boolean | undefined, force?: boolean | undefined): Promise<Sticker>;
  /**
   * Creates a sticker in the guild.
   * @param {Object} [options] - The options for creating the sticker.
   * @param {string} [options.reason] - The reason for creating the sticker.
   * @returns {Promise<Sticker>} A promise that resolves with the created sticker.
   */
  create(
    options?:
      | {
          reason?: string | undefined;
        }
      | undefined
  ): Promise<Sticker>;
  /**
   * Edits a sticker with the given options.
   * @param {string | Sticker} sticker - The sticker to edit. Can be either a sticker ID or a sticker object.
   * @param {Object} [options] - The options for editing the sticker.
   * @param {string} [options.reason] - The reason for editing the sticker.
   * @returns {Promise<Sticker>} A promise that resolves with the edited sticker.
   */
  edit(
    sticker: string | Sticker,
    options?:
      | {
          reason?: string | undefined;
        }
      | undefined
  ): Promise<Sticker>;
  /**
   * Deletes a sticker from the guild.
   * @param {string | Sticker} sticker - The sticker to delete. Can be either a sticker ID or a sticker object.
   * @param {string} reason - The reason for deleting the sticker.
   * @returns {Promise<Sticker>} - The deleted sticker object.
   * @throws {Error} - If the sticker deletion fails.
   */
  delete(sticker: string | Sticker, reason: string): Promise<Sticker>;
  /**
   * Getter method for the cache property.
   * @returns The Collection object representing the cache.
   */
  get cache(): import("../Util/@Collections/RaidenCol").RaidenCol;
}
import Base = require("../Base/base");
import Sticker = require("../Structures/Sticker");

export = ThreadManager;
/**
 * A class representing a thread manager for a specific channel in a guild.
 * Extends the BaseThreadManager class.
 * @class
 * @extends BaseThreadManager
 */
declare class ThreadManager extends BaseThreadManager {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {string} channelId - The ID of the channel.
   * @param {string} guildId - The ID of the guild.
   * @param {Client} client - The client object.
   */
  constructor(channelId: string, guildId: string, client: Client);
  channelId: string;
  guildId: string;
  /**
   * Retrieves the cache items that have a parentId matching the channelId of the current instance.
   * @returns {Array} An array of cache items that have a matching parentId.
   */
  get cache(): any[];
}
import BaseThreadManager = require("./BaseThreadManager");

export = ThreadMemberManager;
/**
 * Manages the members of a thread in a guild.
 * @class
 * @extends Base
 * @param {string} guildId - The ID of the guild the thread belongs to.
 * @param {string} threadId - The ID of the thread.
 * @param {Client} client - The client instance.
 */
declare class ThreadMemberManager extends Base {
  /**
   * Constructs a new instance of the ThreadWatcher class.
   * @constructor
   * @param {string} guildId - The ID of the guild where the thread is located.
   * @param {string} threadId - The ID of the thread being watched.
   * @param {Client} client - The Discord client instance.
   */
  constructor(guildId: string, threadId: string, client: Client);
  guildId: string;
  threadId: string;
  /**
   * Adds a member to a thread.
   * @param {string | { user_id: string }} members - The member or user ID to add to the thread.
   * @param {string} [guildId=this.guildId] - The ID of the guild where the thread is located.
   * @param {string} [threadId=this.threadId] - The ID of the thread.
   * @param {object} [options={ cache: true, force: false }] - Additional options for adding the member.
   * @param {boolean} [options.cache=true] - Whether to cache the thread member.
   * @param {boolean} [options.force=false] - Whether to force fetching the thread member even if it is already cached.
   *
   */
  _add(
    members:
      | string
      | {
          user_id: string;
        },
    guildId?: string | undefined,
    threadId?: string | undefined,
    options?:
      | {
          cache?: boolean | undefined;
          force?: boolean | undefined;
        }
      | undefined
  ): any;
  /**
   * Joins the current user to a thread in a channel.
   * @returns {Promise<void>} - A promise that resolves when the user has successfully joined the thread.
   */
  join(): Promise<void>;
  /**
   * Fetches data for a user or thread from the server.
   * @param {string | object} user - The user ID or object containing user information.
   * @param {object} [options] - Additional options for the fetch request.
   * @param {boolean} [options.cache=true] - Whether to cache the fetched data.
   * @param {boolean} [options.force=false] - Whether to force a fresh fetch from the server.
   * @returns {Promise} A promise that resolves with the fetched data.
   */
  fetch(
    user: string | object,
    options?:
      | {
          cache?: boolean | undefined;
          force?: boolean | undefined;
        }
      | undefined
  ): Promise<any>;
  /**
   * Fetches the ID of a user asynchronously.
   * @param {string | UserObject} user - The user or user ID to fetch the ID for.
   * @param {boolean} [cache=true] - Whether to cache the fetched ID.
   * @param {boolean} [force=true] - Whether to force the fetch even if the ID is already cached.
   * @returns {Promise<string>} A promise that resolves to the user ID.
   */
  _fetchId(user: string | UserObject, cache?: boolean | undefined, force?: boolean | undefined): Promise<string>;
  /**
   * Adds a user to the thread.
   * @param {string | User} [user=this.client.user.id] - The user to add to the thread. Can be a user ID or a User object.
   * @returns {Promise<void>} - A promise that resolves when the user has been added to the thread.
   */
  add(user?: string | User): Promise<void>;
  /**
   * Removes a user from the thread.
   * @param {string | UserResolvable} [user=this.client.user.id] - The user to remove from the thread. Defaults to the client's user ID.
   * @returns {Promise<GuildMember | null>} - A promise that resolves with the deleted member object, or null if the user was not found.
   */
  remove(user?: string | UserResolvable): Promise<GuildMember | null>;
  /**
   * Getter method for the cache property.
   * @returns The Collection object representing the cache.
   */
  get cache(): import("../Util/@Collections/RaidenCol").RaidenCol;
}
import Base = require("../Base/base");

export = UserManager;
/**
 * Represents a user manager that handles user-related operations.
 * @class
 * @extends Base
 */
declare class UserManager extends Base {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Client} client - The client object used for communication with the server.
   */
  constructor(client: Client);
  /**
   * Adds a user to the collection.
   * @param {User|string} users - The user object or user ID to add.
   * @param {Object} [options] - Additional options for adding the user.
   * @param {boolean} [options.cache=true] - Whether to cache the user object.
   * @param {boolean} [options.force=false] - Whether to force fetching the user even if it is already cached.
   * @returns {User} The added user object.
   */
  _add(
    users: User | string,
    options?:
      | {
          cache?: boolean | undefined;
          force?: boolean | undefined;
        }
      | undefined
  ): User;
  /**
   * Fetches user data from the server.
   * @param {string | User} user - The user ID or user object.
   * @param {Object} [options] - Additional options for the fetch request.
   * @param {boolean} [options.cache=true] - Whether to cache the fetched user data.
   * @param {boolean} [options.force=false] - Whether to force a fresh fetch even if the data is already cached.
   * @returns {Promise<User>} A promise that resolves to the fetched user data.
   */
  fetch(
    user: string | User,
    options?:
      | {
          cache?: boolean | undefined;
          force?: boolean | undefined;
        }
      | undefined
  ): Promise<User>;
  /**
   * Edits the user's profile with the provided options.
   * @param {Object} options - The options to edit the user's profile.
   * @returns {Promise<User>} A promise that resolves with the updated user object.
   */
  edit(options?: Object): Promise<User>;
  /**
   * Creates a direct message channel with the specified user.
   * @param {string | User} user - The user to create the direct message channel with.
   * @throws {RangeError} If no user is provided.
   * @returns {Promise<Channel>} A promise that resolves with the created direct message channel.
   */
  createDM(user: string | User): Promise<Channel>;
  /**
   * Sends a message to a user through a direct message channel.
   * @param {User} user - The user to send the message to.
   * @param {Object} [options] - Additional options for creating the message payload.
   * @returns {Promise<Message>} A promise that resolves to the sent message.
   */
  send(user: User, options?: Object | undefined): Promise<Message>;
  /**
   * Getter method for the cache property.
   * @returns The Collection object representing the cache.
   */
  get cache(): import("../Util/@Collections/RaidenCol").RaidenCol;
}
import Base = require("../Base/base");
import User = require("../Structures/User");

export = VoiceStateManager;
/**
 * Represents a Voice State Manager that handles voice state related operations.
 * @class
 * @extends Base
 */
declare class VoiceStateManager extends Base {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Client} client - The client object used for communication with the server.
   */
  constructor(client: Client);
  /**
   * Adds a voice state to the cache and returns the voice state object.
   * @param {string | VoiceState} voiceStates - The voice state object or user ID.
   * @param {string} [guildId=this.guildId] - The ID of the guild the voice state belongs to.
   * @param {object} [options={cache: true, force: false}] - Additional options for the operation.
   * @param {boolean} [options.cache=true] - Whether to cache the voice state.
   * @param {boolean} [options.force=false] - Whether to force update the voice state even if it is already cached.
   * @returns {VoiceState | null} The voice state object.
   */
  _add(
    voiceStates: string | VoiceState,
    guildId?: string | undefined,
    options?:
      | {
          cache?: boolean | undefined;
          force?: boolean | undefined;
        }
      | undefined
  ): VoiceState | null;
  /**
   * Getter method for the cache property.
   * @returns The Collection object representing the cache.
   */
  get cache(): import("../Util/@Collections/RaidenCol").RaidenCol;
}
import Base = require("../Base/base");
import VoiceState = require("../Structures/VoiceState");

export = WebsocketManager;
/**
 * Represents a WebSocket manager that extends the WebSocket class.
 * @class
 * @extends WebSocket
 * @param {Client} client - The client object.
 */
declare class WebsocketManager extends WebSocket {
  /**
   * Transforms a payload object by converting the "op" property to its corresponding opcode value.
   * @param {object} payload - The payload object to transform.
   * @returns {object | null} - The transformed payload object, or null if the "op" property is missing.
   */
  static transformPayload(payload: object): object | null;
  /**
   * Constructs a new instance of the WebSocketClient class.
   * @constructor
   * @param {WebSocket} client - The WebSocket client to use.
   */
  constructor(client: WebSocket);
  status: string | null;
  interval: any;
  /**
   * Establishes a connection to the WebSocket server.
   * If the connection is not open, it will retry after a timeout.
   * Retrieves the URL, shards, and session start limit from the bot gateway API.
   * If the URL or session start limit is not available, or the remaining session start limit is less than 1,
   * it logs an error message and exits the process.
   * Sends an Identify opcode to the server with the client's token, intents, presence, and properties.
   * Logs the WebSocket information.
   * @returns None
   */
  connect(): Promise<undefined>;
  /**
   * Handles the connection of the websocket.
   * If the websocket is closed, it logs a debug message and returns.
   * Otherwise, it listens for incoming messages and creates a new instance of ActionsManager
   * to handle the received data.
   * It also listens for the "close" event and calls the handleClose method.
   * @returns None
   */
  handleConnect(): void;
  /**
   * Handles the closing of the resource and returns the result of the error handling.
   * @param {Error} err - The error object to handle.
   * @returns {null} - Returns null if the error handling is successful.
   */
  handleClose(err: Error): null;
  /**
   * Handles the "open" event of the WebSocket connection.
   * If the connection is successfully opened, it logs a debug message and calls the handleConnect() function.
   * @returns {void}
   */
  handleOpen(): void;
  /**
   * Handles the resumption of a WebSocket connection.
   * If no session ID is found, it will re-identify and establish a new connection.
   * If a session ID is found, it will attempt to resume the connection using the session ID.
   * @returns {void}
   */
  handleResume(): void;
  /**
   * Handles the reconnection process for the WebSocket connection.
   * If there is no resume gateway URL, it will re-identify and connect again.
   * If the status is not "CLOSED" and reconnect is enabled, it will initiate a reconnect.
   * It will clear the heartbeat interval if it exists.
   * Sets the status to "RECONNECTING".
   * Removes all event listeners.
   * Sets a timeout to close the previous WebSocket connection and create a new one.
   * If the previous connection is not closed, it will be forcefully closed.
   * If the WebSocket is already closed, it will log a message.
   * Creates a new WebSocket connection to the resume gateway URL.
   * Sets the close sequence and marks the WebSocket as reconnected.
   * @returns {void}
   */
  handleReconnect(): void;
  /**
   * Destroys the current instance of the object.
   * @param {closeCode} closeCode - The code to use when closing the instance.
   * @returns {Promise} - A promise that resolves when the instance is successfully destroyed.
   */
  destroy(closeCode: any): Promise<any>;
  /**
   * Handles errors that occur during websocket communication.
   * @param {number} error - The error code.
   * @returns {void}
   * @throws {WebsocketError} - Throws a WebsocketError with the corresponding error message and code.
   */
  handleError(error: number): void;
  /**
   * Sends a payload over the websocket connection.
   * @param {any} payload - The payload to send.
   * @returns {Promise<void>} - A promise that resolves when the payload has been sent.
   */
  send(payload: any): Promise<void>;
}
import WebSocket = require("ws");

export = WelcomeScreenManager;
/**
 * Represents a manager for the welcome screen of a guild.
 * @class
 * @extends Base
 * @param {string} guildId - The ID of the guild.
 * @param {Client} client - The client instance.
 */
declare class WelcomeScreenManager extends Base {
  /**
   * Transforms the given channels object into a new format.
   * @param {Object} channels - The channels object to transform.
   * @returns {Object} - The transformed channels object.
   */
  static transformChannels(channels?: Object): Object;
  /**
   * Transforms the options object into a new object with specific properties.
   * @param {Object} o - The options object to transform.
   * @returns {Object} - The transformed object with specific properties.
   */
  static transformOptions(o?: Object): Object;
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {string} guildId - The ID of the guild.
   * @param {Client} client - The client object.
   */
  constructor(guildId: string, client: Client);
  guildId: string;
  /**
   * Fetches the welcome screen for the guild.
   * @returns {Promise<WelcomeScreen>} A promise that resolves to a WelcomeScreen object representing the fetched welcome screen.
   */
  fetch(): Promise<WelcomeScreen>;
  /**
   * Edits the welcome screen settings for the guild.
   * @param {Object} [options] - The options for editing the welcome screen.
   * @param {string} [options.reason] - The reason for the edit.
   * @returns {Promise<WelcomeScreen>} A promise that resolves with the updated WelcomeScreen object.
   */
  edit(
    options?:
      | {
          reason?: string | undefined;
        }
      | undefined
  ): Promise<WelcomeScreen>;
}
import Base = require("../Base/base");
import WelcomeScreen = require("../Structures/WelcomeScreen");

export = REST;
/**
 * Represents a REST client for making HTTP requests.
 * @class
 * @param {object} client - The client object.
 */
declare class REST {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Object} client - The client object to be assigned to the "client" property.
   */
  constructor(client: Object);
  /**
   * Sets the token value for the current instance of the class.
   * @param {string} token - The token value to set.
   * @returns {Object} - The current instance of the class.
   */
  setToken(token: string): Object;
  token: string | undefined;
  /**
   * Makes an HTTP request to the specified URL with the given options.
   * @param {string} url - The URL to make the request to.
   * @param {Object} [options] - The options for the request.
   * @returns {Promise<Object>} - A promise that resolves to the response from the request.
   * @throws {DiscordAPIError} - If the response status code is not 201, 200, or 204.
   */
  _make(url: string, options?: Object | undefined): Promise<Object>;
  /**
   * Sends a GET request to the specified URL with optional request options.
   * @param {string} url - The URL to send the GET request to.
   * @param {object} [options] - Optional request options.
   * @returns {Promise} A promise that resolves to the response of the GET request.
   */
  get(url: string, options?: object | undefined): Promise<any>;
  /**
   * Sends a POST request to the specified URL with the given options.
   * @param {string} url - The URL to send the POST request to.
   * @param {object} [options] - Additional options for the request.
   * @returns {Promise} A promise that resolves to the response of the request.
   */
  post(url: string, options?: object | undefined): Promise<any>;
  /**
   * Sends a DELETE request to the specified URL with optional request options.
   * @param {string} url - The URL to send the DELETE request to.
   * @param {object} [options] - Optional request options.
   * @returns {Promise} A promise that resolves to the response of the DELETE request.
   */
  delete(url: string, options?: object | undefined): Promise<any>;
  /**
   * Sends a PUT request to the specified URL with the given options.
   * @param {string} url - The URL to send the PUT request to.
   * @param {object} [options] - Additional options for the request.
   * @returns {Promise} A promise that resolves with the response from the server.
   */
  put(url: string, options?: object | undefined): Promise<any>;
  /**
   * Sends a PATCH request to the specified URL with the given options.
   * @param {string} url - The URL to send the PATCH request to.
   * @param {object} [options] - Additional options for the request.
   * @returns {Promise} A promise that resolves with the response from the server.
   */
  patch(url: string, options?: object | undefined): Promise<any>;
}

export = Activity;
/**
 * It's a class that represents a user's activity
 * @class
 * @extends Base
 * @param {Object} [data] - The data for the activity.
 * @param {Client} client - The client that instantiated this activity.
 */
declare class Activity extends Base {
  /**
   *  The constructor function initializes an object with properties based on the provided data, and
   * assigns default values if the data is missing or invalid.
   * @constructor
   * @param {Object} [data] - The `data` parameter is an object that contains various properties related to an
   * activity. It is optional and defaults to an empty object if not provided.
   * @param {Client} client - The `client` parameter is an object that represents the Discord client or bot that
   * is using this constructor. It is used to interact with the Discord API and perform actions on
   * behalf of the bot.
   */
  constructor(data?: Object | undefined, client: Client);
  name: any;
  type: any;
  url: any;
  createdAt: Date | undefined;
  createdTimestamp: number | undefined;
  timestamps:
    | {
        startTimestamp: any;
        endTimestamp: any;
      }
    | undefined;
  applicationId: any;
  details: any;
  state: any;
  emoji:
    | {
        name: any;
        id: any;
        animated: any;
      }
    | undefined;
  party:
    | {
        id: any;
        size: any;
      }
    | undefined;
  assets:
    | {
        largeImage: any;
        largeText: any;
        smallImage: any;
        smallText: any;
      }
    | undefined;
  secrets:
    | {
        join: any;
        spectate: any;
        match: any;
      }
    | undefined;
  instance: any;
  flags: ActivityFlags;
  buttons: any;
  /**
   * Converts the current object to a JSON representation.
   * @returns {Object} - The JSON representation of the object.
   */
  toJSON(): Object;
}
import Base = require("../Base/base");
import ActivityFlags = require("../Util/ActivityFlags");

export = ApplicationCommand;
/**
 * Represents an application command.
 * @class
 * @extends Base
 * @param {Object} [data] - The data object containing the command information.
 * @param {string} guildId - The ID of the guild the command belongs to.
 * @param {Client} client - The client instance.
 */
declare class ApplicationCommand extends Base {
  /**
   * Create an application command object.
   * @constructor
   * @param {Object} [data] - The data object containing the properties of the command.
   * @param {string} guildId - The ID of the guild the command belongs to.
   * @param {Client} client - The client instance.
   */
  constructor(data?: Object | undefined, guildId: string, client: Client);
  partial: any;
  type: any;
  id: any;
  name: any;
  nameLocalizations: any;
  description: any;
  descriptionLocalizations: any;
  applicationId: any;
  createdAt: any;
  createdTimestamp: any;
  guildId: string;
  options: RaidenCol;
  defaultMemberPermissions: Permissions;
  dmPermission: any;
  version: any;
  /**
   * Get the guild object if it exists, otherwise return null.
   * @returns The guild object or null.
   */
  get guild(): any;
  /**
   * Fetches the commands for a guild or the global application.
   * @param {Object} [options] - Optional parameters for the fetch operation.
   * @returns {Promise} - A promise that resolves with the fetched commands.
   */
  fetch(options?: Object | undefined): Promise<any>;
  /**
   * Edits the command with the specified options.
   * If the command is associated with a guild, it will edit the guild command.
   * Otherwise, it will edit the global command.
   * @param {Object} options - The options to edit the command with.
   * @returns {Promise} A promise that resolves when the command is successfully edited.
   */
  edit(options?: Object): Promise<any>;
  /**
   * Deletes the command from the guild or the global application.
   * @returns {Promise<void>} - A promise that resolves when the command is successfully deleted.
   */
  delete(): Promise<void>;
}
import Base = require("../Base/base");
import {RaidenCol} from "../Util/@Collections/RaidenCol";
import Permissions = require("../Util/Permissions");

export = ApplicationCommandInteraction;
/**
 * Represents an application command interaction.
 * @class
 * @extends Interaction
 * @param {Object} [data] - The data object containing information about the interaction.
 * @param {string} guildId - The ID of the guild where the interaction occurred.
 * @param {Client} client - The client instance.
 * @property {string|null} commandId - The ID of the command associated with the interaction.
 * @property {string|null} commandName - The name of the command associated with the interaction.
 * @property {string|null} commandType - The type of the command associated with the interaction.
 * @property {CommandInteractionOptionResolver} options - The resolver for the command interaction options.
 */
declare class ApplicationCommandInteraction extends Interaction {
  commandId: any;
  commandName: any;
  commandType: any;
  options: CommandInteractionOptionResolver;
}
import Interaction = require("./Interaction");
import CommandInteractionOptionResolver = require("./CommandInteractionOptionResolver");

export = ApplicationCommandPermission;
/**
 * Represents an application command permission.
 * @class
 * @extends Base
 * @param {Object} [data] - The data object containing the command permission information.
 * @param {string} guildId - The ID of the guild the command permission belongs to.
 * @param {Client} client - The client instance.
 */
declare class ApplicationCommandPermission extends Base {
  /**
   * Transforms a permissions object into a formatted object with specific properties.
   * @param {Object} permissions - The permissions object to transform.
   * @returns {Object} - The transformed permissions object.
   */
  static transformPermissions(permissions?: Object): Object;
  /**
   * Constructs a new instance of the CommandPermissions class.
   * @constructor
   * @param {Object} [data] - The data object containing the command permissions.
   * @param {string} guildId - The ID of the guild.
   * @param {Client} client - The client instance.
   */
  constructor(data?: Object | undefined, guildId: string, client: Client);
  commandId: any;
  applicationId: any;
  guildId: string;
  permissions: RaidenCol;
  /**
   * Fetches the permissions for the guild commands.
   * @param {Object} [options] - Optional parameters for the fetch request.
   * @returns {Promise} - A promise that resolves to the fetched permissions.
   */
  fetch(options?: Object | undefined): Promise<any>;
  /**
   * Retrieves the command associated with this instance.
   * @returns The command object if found, otherwise null.
   */
  get command(): any;
  /**
   * Retrieves the guild associated with this guildId.
   * @returns The guild object if found, otherwise null.
   */
  get guild(): any;
}
import Base = require("../Base/base");
import {RaidenCol} from "../Util/@Collections/RaidenCol";

export = AuditLogEntry;
/**
 * Represents an entry in the audit log.
 * @class
 * @extends Base
 * @param {Object} [data] - The data for the audit log entry.
 * @param {Client} client - The client instance.
 * @property {string|null} targetId - The ID of the target of the audit log entry.
 * @property {Array<Object>} changes - An array of objects representing the changes made in the audit log entry.
 * @property {string|null} userId - The ID of the user who performed the action in the audit log entry.
 * @property {string|null} id - The ID of the audit log entry.
 * @property {string|null} actionType - The type of action performed
 */
declare class AuditLogEntry extends Base {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Object} [data=] - The data object containing the properties for the instance.
   * @param {Client} client - The client object.
   */
  constructor(data?: Object | undefined, client: Client);
  targetId: any;
  changes: any;
  userId: any;
  id: any;
  actionType: any;
  options: {
    applicationId: any;
    autoModerationRuleName: any;
    autoModerationRuleTriggerType: any;
    channelId: any;
    count: any;
    deleteMemberDays: any;
    id: any;
    membersRemoved: any;
    messageId: any;
    roleName: any;
    type: any;
  } | null;
  reason: any;
  createdAt: any;
  createdTimestamp: any;
  /**
   * Checks if the action type of the guild audit log entry is an update action.
   * @returns {boolean} - True if the action type is an update action, false otherwise.
   */
  isUpdate(): boolean;
  /**
   * Retrieves the executor of the action.
   * @returns The user object representing the executor, or null if not found.
   */
  get executor(): any;
}
import Base = require("../Base/base");

export = AutocompleteInteraction;
/**
 * Represents an interaction with an autocomplete component.
 * @class
 * @extends Interaction
 */
declare class AutocompleteInteraction extends Interaction {
  /**
   * Transforms the given choices object into a new object with the name and value properties.
   * @param {Object} choices - The choices object to transform.
   * @returns {Object} - The transformed choices object with name and value properties.
   * @throws {RangeError} - If the length of the name property is less than 1 or greater than 100.
   */
  static transformChoices(choices?: Object): Object;
  /**
   * Retrieves the focused option from the data object.
   * @returns The value of the focused option, or null if no option is focused or if the value is not available.
   */
  getFocused(): any;
  /**
   * Sends a response to an autocomplete interaction with the provided choices.
   * @param {Array} choices - An array of choices for the autocomplete interaction.
   * @returns {Promise} A promise that resolves when the response is sent.
   */
  respond(choices: any[]): Promise<any>;
}
import Interaction = require("./Interaction");

export = BaseGuildChannel;
/**
 * Represents a base guild channel that extends the TextBasedChannels class.
 * @class
 * @extends TextBasedChannels
 * @param {Object} data - The data object containing information about the channel.
 * @param {string} guildId - The ID of the guild that the channel belongs to.
 * @param {Client} client - The client instance.
 * @property {ThreadManager} threads - The thread manager for this channel.
 */
declare class BaseGuildChannel extends TextBasedChannels {
  /**
   * Constructs a new instance of the ThreadChannel class.
   * @constructor
   * @param {data} data - The data object containing information about the thread channel.
   * @param {guildId} guildId - The ID of the guild that the thread channel belongs to.
   * @param {client} client - The client object representing the Discord bot.
   */
  constructor(data: any, guildId: any, client: any);
  threads: ThreadManager;
  /**
   * Fetches private threads for the current channel.
   * @param {Object} [options] - Optional parameters for the fetch request.
   * @param {string} [options.before] - The ID of the thread to fetch threads before.
   * @param {number} [options.limit=25] - The maximum number of threads to fetch.
   * @returns {Promise<FetchedThreads>} - A promise that resolves to a FetchedThreads object containing the fetched threads.
   */
  fetchPrivateThreads(
    options?:
      | {
          before?: string | undefined;
          limit?: number | undefined;
        }
      | undefined
  ): Promise<FetchedThreads>;
}
import TextBasedChannels = require("./Interface/TextBasedChannels");
import ThreadManager = require("../Managers/ThreadManager");
import FetchedThreads = require("./FetchedThreads");

export = ButtonInteraction;
/**
 * Represents a button interaction, extending the MessageComponentInteraction class.
 * @class
 * @extends MessageComponentInteraction
 * @param {Object} [data] - The data object containing information about the interaction.
 * @param {string} guildId - The ID of the guild where the interaction occurred.
 * @param {Client} client - The client instance associated with the interaction.
 */
declare class ButtonInteraction extends MessageComponentInteraction {}
import MessageComponentInteraction = require("./MessageComponentInteraction");

export = CategoryChannel;
/**
 * Represents a category channel in a guild.
 * @class
 * @extends Channel
 */
declare class CategoryChannel extends Channel {
  /**
   * Retrieves the child channels of the current channel.
   * @returns {Collection<Snowflake, GuildChannel>} A collection of child channels.
   */
  get childrens(): Collection<Snowflake, GuildChannel>;
  /**
   * Get the highest child element based on their position property.
   * @returns The highest child element.
   */
  get highest(): any;
}
import Channel = require("./Channel");

export = Channel;
/**
 * Represents a channel in a guild or a direct message.
 * @class
 * @extends Base
 * @param {Object} [data] - The data for the channel.
 * @param {string} guildId - The ID of the guild that the channel belongs to.
 * @param {Client} client - The client instance.
 */
declare class Channel extends Base {
  /**
   * Constructs a new Channel object.
   * @constructor
   * @param {Object} [data] - The data object containing the channel information.
   * @param {string} guildId - The ID of the guild that the channel belongs to.
   * @param {Client} client - The client instance.
   */
  constructor(data?: Object | undefined, guildId: string, client: Client);
  partial: any;
  banner: any;
  id: any;
  name: any;
  type: any;
  guildId: string;
  position: any;
  topic: any;
  parentId: any;
  createdAt: any;
  createdTimestamp: any;
  defaultAutoArchiveDuration: any;
  permissionOverwrites: PermissionOverwriteManager;
  flags: ChannelFlags;
  /**
   * Fetches the channels using the provided options.
   * @param {Object} [options] - The options to be used for fetching the channels.
   * @returns {Promise} - A promise that resolves to the fetched channels.
   */
  fetch(options?: Object | undefined): Promise<any>;
  /**
   * Deletes the channel with the specified reason.
   * @param {string} reason - The reason for deleting the channel.
   * @returns {Promise<void>} - A promise that resolves when the channel is deleted.
   */
  delete(reason: string): Promise<void>;
  /**
   * Edits the properties of a channel using the provided options.
   * @param {Object} options - The options object containing the properties to edit.
   * @returns {Promise} A promise that resolves when the channel has been successfully edited.
   */
  edit(options: Object): Promise<any>;
  /**
   * Fetches the invites for the channel.
   * @async
   * @returns {Promise<RaidenCol>} A promise that resolves to a collection of invites.
   */
  fetchInvites(): Promise<RaidenCol>;
  /**
   * Creates an invite for the current channel using the specified options.
   * @param {Object} options - The options for creating the invite.
   * @returns {Promise<Invite>} A promise that resolves to the created invite.
   */
  createInvite(options: Object): Promise<Invite>;
  /**
   * Clones the channel.
   * @returns {Promise<Channel>} A promise that resolves to the cloned channel.
   */
  clone(): Promise<Channel>;
  /**
   * Checks if the type of the object is "Guild_Text".
   * @returns {boolean} - true if the type is "Guild_Text", false otherwise.
   */
  isGuildText(): boolean;
  /**
   * Checks if the type of the object is "Dm".
   * @returns {boolean} - true if the type is "Dm", false otherwise.
   */
  isDM(): boolean;
  /**
   * Checks if the current stage is a Guild Stage Voice.
   * @returns {boolean} - True if the current stage is a Guild Stage Voice, false otherwise.
   */
  isStage(): boolean;
  /**
   * Checks if the current page is a forum page.
   * @returns {boolean} - true if the page is a forum page, false otherwise.
   */
  isForum(): boolean;
  /**
   * Checks if the current object is of media type.
   * @returns {boolean} - true if the object is of media type, false otherwise.
   */
  isMedia(): boolean;
  /**
   * Checks if the type of the object is "Guild_Voice".
   * @returns {boolean} - true if the type is "Guild_Voice", false otherwise.
   */
  isGuildVoice(): boolean;
  /**
   * Checks if the current type is "Guild_News".
   * @returns {boolean} - Returns true if the type is "Guild_News", otherwise returns false.
   */
  isNews(): boolean;
  /**
   * Checks if the current object is of the category type.
   * @returns {boolean} - true if the object is of the category type, false otherwise.
   */
  isCategory(): boolean;
  /**
   * Checks if the current text is of a specific type.
   * @returns {boolean} - True if the text is of a specific type, false otherwise.
   */
  isText(): boolean;
  /**
   * Checks if the current thread is a private, news, or public guild thread.
   * @returns {boolean} - True if the thread is a private, news, or public guild thread, false otherwise.
   */
  isThread(): boolean;
  /**
   * Checks if the current object is of type "Guild_Voice" or "Guild_Stage_Voice".
   * @returns {boolean} - true if the object is of type "Guild_Voice" or "Guild_Stage_Voice", false otherwise.
   */
  isVoice(): boolean;
  /**
   * Checks if the current object is a directory.
   * @returns {boolean} - Returns true if the object is a directory, false otherwise.
   */
  isDirectory(): boolean;
  /**
   * Checks if the current context is within a guild.
   * @returns {boolean} - True if the context is within a guild, false otherwise.
   */
  inGuild(): boolean;
  /**
   * Checks if the guild is cached in the client's guild cache.
   * @returns {boolean} - true if the guild is cached, false otherwise.
   */
  inCachedGuild(): boolean;
  /**
   * Checks if the current channel is the rules channel for the guild.
   * @returns {boolean} - true if the current channel is the rules channel, false otherwise.
   */
  isRuleChannel(): boolean;
  /**
   * Checks if the current channel is the system channel of the guild.
   * @returns {boolean | null} - Returns true if the channel is the system channel,
   * false if it is not, and null if the guild does not have a system channel.
   */
  isSystemChannel(): boolean | null;
  /**
   * Get the parent channel of this channel.
   * @returns {Channel | null} The parent channel if it exists, otherwise null.
   */
  get parent(): Channel | null;
  /**
   * Returns the URL of the channel banner image.
   * @param {Object} options - Optional parameters for generating the URL.
   * @param {boolean} [options.dynamic] - Whether to generate a dynamic URL.
   * @param {string} [options.size] - The desired size of the banner image.
   * @param {string} [options.format] - The desired format of the banner image.
   * @returns {string | null} The URL of the channel banner image, or null if no banner is set.
   */
  bannerURL(options?: {dynamic?: boolean | undefined; size?: string | undefined; format?: string | undefined}): string | null;
  /**
   * Sets the name and reason for an object.
   * @param {string} name - The new name to set.
   * @param {string} reason - The reason for setting the new name.
   * @returns {Promise} - A promise that resolves when the name and reason are successfully set.
   */
  setName(name: string, reason: string): Promise<any>;
  /**
   * Sets the type and reason of an object asynchronously.
   * @param {any} type - The type to set.
   * @param {any} reason - The reason to set.
   * @returns {Promise<any>} - A promise that resolves to the edited object.
   */
  setType(type: any, reason: any): Promise<any>;
  /**
   * Sets the topic of the current object and provides a reason for the change.
   * @param {string} topic - The new topic to set.
   * @param {string} reason - The reason for changing the topic.
   * @returns {Promise} - A promise that resolves when the topic is successfully set.
   */
  setTopic(topic: string, reason: string): Promise<any>;
  /**
   * Sets the position of an object and provides a reason for the change.
   * @param {any} position - The new position of the object.
   * @param {string} reason - The reason for the position change.
   * @returns {Promise<void>} - A promise that resolves when the position is successfully set.
   */
  setPosition(position: any, reason: string): Promise<void>;
  /**
   * Sets the parent of an object and provides a reason for the change.
   * @param {any} parent - The new parent object.
   * @param {string} reason - The reason for setting the new parent.
   * @returns {Promise} A promise that resolves when the parent is successfully set.
   */
  setParent(parent: any, reason: string): Promise<any>;
  /**
   * Sets the default auto-archive duration for a specific item.
   * @param {number} defaultAutoArchiveDuration - The new default auto-archive duration to set.
   * @param {string} reason - The reason for setting the new default auto-archive duration.
   * @returns {Promise} - A promise that resolves when the default auto-archive duration is successfully set.
   */
  setDefaultAutoArchiveDuration(defaultAutoArchiveDuration: number, reason: string): Promise<any>;
  /**
   * Sets the flags and reason for an object.
   * @param {any} flags - The flags to set.
   * @param {string} reason - The reason for setting the flags.
   * @returns {Promise<void>} - A promise that resolves when the flags are set.
   */
  setFlags(flags: any, reason: string): Promise<void>;
  /**
   * Locks the permissions for the current object.
   * @async
   * @returns {Promise<void>} A promise that resolves when the permissions are locked.
   */
  lockPermissions(): Promise<void>;
  /**
   * Retrieves the guild associated with this guildId.
   * @returns The guild object if found, otherwise null.
   */
  get guild(): any;
  /**
   * Retrieves the permissions for a given user or role in the guild.
   * @param {string | GuildMember | Role} userOrRole - The user or role to retrieve permissions for.
   * @returns {Permissions} - The permissions for the user or role.
   * @throws {RangeError} - If the user or role is not found in the cache or is invalid.
   */
  permissionsFor(userOrRole: string | GuildMember | Role): Permissions;
  /**
   * Fetches the webhooks associated with the channel.
   * @returns {Promise<RaidenCol>} A promise that resolves to a collection of webhooks.
   */
  fetchWebhooks(): Promise<RaidenCol>;
  /**
   * Creates a webhook for the current channel.
   * @param {Object} [options] - Optional parameters for creating the webhook.
   * @param {string} [options.reason] - The reason for creating the webhook.
   * @param {string} [options.name] - The name of the webhook.
   * @param {string} [options.avatar] - The avatar URL or file path of the webhook.
   * @returns {Promise<Webhook>} A promise that resolves with the created webhook.
   */
  createWebhook(
    options?:
      | {
          reason?: string | undefined;
          name?: string | undefined;
          avatar?: string | undefined;
        }
      | undefined
  ): Promise<Webhook>;
}
import Base = require("../Base/base");
import PermissionOverwriteManager = require("../Managers/PermissionOverwriteManager");
import ChannelFlags = require("../Util/ChannelFlags");
import {RaidenCol} from "../Util/@Collections/RaidenCol";
import Invite = require("./Invite");
import Permissions = require("../Util/Permissions");
import Webhook = require("./Webhook");

export = ClientApplication;
/**
 * Represents a client application.
 * @class
 * @extends Base
 * @param {Object} [data] - The data object containing information about the client application.
 * @param {Client} client - The client object associated with the application.
 */
declare class ClientApplication extends Base {
  /**
   * Constructs a new instance of the Application class.
   * @constructor
   * @param {Object} [data] - The data object containing the application properties.
   * @param {Client} client - The client instance.
   */
  constructor(data?: Object | undefined, client: Client);
  id: any;
  name: any;
  icon: any;
  description: any;
  rpcOrigins: any;
  public: any;
  requireCodeGrant: any;
  termsOfService: any;
  privacyPolicy: any;
  owner: any;
  summary: any;
  verifyKey: any;
  team: Team | null;
  guildId: any;
  primarySkuId: any;
  slug: any;
  cover: any;
  flags: ApplicationFlags;
  installParams: {
    scopes: any;
    permissions: Permissions;
  } | null;
  customInstallURL: any;
  /**
   * Fetches the application information for the authenticated user.
   * @async
   * @returns {Promise<Application>} A promise that resolves to the application object.
   */
  fetch(): Promise<Application>;
  /**
   * Get the commands for the application.
   * @returns {ApplicationCommandManager} - The application command manager.
   */
  get commands(): ApplicationCommandManager;
  /**
   * Returns the URL of the icon for this application.
   * @param {Object} options - An optional object containing additional options for the icon URL.
   * @param {boolean} options.dynamic - Whether the icon should be dynamically generated.
   * @param {number} options.size - The desired size of the icon.
   * @param {string} options.format - The desired format of the icon.
   * @returns {string | null} The URL of the icon, or null if no icon is available.
   */
  iconURL(options?: {dynamic: boolean; size: number; format: string}): string | null;
}
import Base = require("../Base/base");
import Team = require("./Team");
import ApplicationFlags = require("../Util/ApplicationFlags");
import Permissions = require("../Util/Permissions");
import ApplicationCommandManager = require("../Managers/ApplicationCommandManager");

export = ClientUser;
/**
 * Represents a client user, extending the base User class.
 * @class
 * @extends User
 */
declare class ClientUser extends User {
  /**
   * Sets the avatar for the user.
   * @param {string} avatar - The URL or file path of the new avatar image.
   * @returns {Promise} A promise that resolves when the avatar is successfully set.
   */
  setAvatar(avatar: string): Promise<any>;
  /**
   * Asynchronously sets the username for the current user.
   * @param {string} username - The new username to set.
   * @returns {Promise} A promise that resolves when the username is successfully set.
   */
  setUsername(username: string): Promise<any>;
  /**
   * Sets the avatar decorations for the user.
   * @param {Object} avatarDecorations - The avatar decorations to set.
   * @returns {Promise} A promise that resolves when the avatar decorations are set.
   */
  setAvatarDecorations(avatarDecorations: Object): Promise<any>;
  /**
   * Sets the presence of the client.
   * @param {Presence} presence - The presence object containing the desired presence information.
   * @returns {void}
   */
  setPresence(presence: Presence): void;
  /**
   * Sets the status of the user.
   * @param {string} status - The status to set.
   * @returns {void}
   */
  setStatus(status: string): void;
  /**
   * Sets the activities for the presence of the user.
   * @param {Array} activities - An array of activity objects.
   * @returns {void}
   */
  setActivities(activities: any[]): void;
}
import User = require("./User");

export = CommandInteraction;
/**
 * Represents a command interaction within a guild.
 * @class
 * @extends ApplicationCommandInteraction
 * @constructor
 * @param {Object} [data] - The data for the command interaction.
 * @param {string} guildId - The ID of the guild where the interaction occurred.
 * @param {Client} client - The client that received the interaction.
 */
declare class CommandInteraction extends ApplicationCommandInteraction {}
import ApplicationCommandInteraction = require("./ApplicationCommandInteraction");

export = CommandInteractionOptionResolver;
/**
 * A class that provides methods to resolve command interaction options.
 * @class CommandInteractionOptionResolver
 * @extends Base
 * @param {Object} [data] - The data object containing the command interaction options.
 * @param {string} guildId - The ID of the guild where the command interaction occurred.
 * @param {string} channelId - The ID of the channel where the command interaction occurred.
 * @param {Client} client - The client instance.
 */
declare class CommandInteractionOptionResolver extends Base {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Object} [data] - The data object for the instance.
   * @param {string} guildId - The ID of the guild.
   * @param {string} channelId - The ID of the channel.
   * @param {Client} client - The client object.
   */
  constructor(data?: Object | undefined, guildId: string, channelId: string, client: Client);
  data: Object;
  options: any;
  guildId: string;
  channelId: string;
  /**
   * Parses the options array and returns the parsed result.
   * @param {Array} [options=this.options] - The options array to parse.
   * @returns {Array|null} - The parsed options array or null if the data type is 2 or 3, or if the options array is empty.
   */
  _parse(options?: any[] | undefined): any[] | null;
  /**
   * Retrieves the value of a string option by its name.
   * @param {string} name - The name of the option.
   * @param {boolean} [required=false] - Indicates whether the option is required. If set to true and the option is not found, a RangeError is thrown.
   * @returns {string | null} The value of the option, or null if the option is not found and not required.
   * @throws {RangeError} If the option is required and not found, or if the option is found but its type is not string.
   */
  getString(name: string, required?: boolean | undefined): string | null;
  /**
   * Retrieves the value of a number option by its name.
   * @param {string} name - The name of the option.
   * @param {boolean} [required=false] - Indicates whether the option is required. If set to true and the option is not found, a RangeError is thrown.
   * @returns {number | null} The value of the number option, or null if the option is not found.
   * @throws {RangeError} If the option is required and not found, or if the option type is not Number.
   */
  getNumber(name: string, required?: boolean | undefined): number | null;
  /**
   * Retrieves the integer value of the specified option name from the options list.
   * @param {string} name - The name of the option to retrieve.
   * @param {boolean} [required=false] - Indicates whether the option is required. If set to true and the option is not found, a RangeError will be thrown.
   * @returns {number | null} The integer value of the option, or null if the option is not found.
   * @throws {RangeError} If the option is required and not found, or if the option type is not an integer.
   */
  getInteger(name: string, required?: boolean | undefined): number | null;
  /**
   * Retrieves the boolean value of the specified option name from the options list.
   * @param {string} name - The name of the option to retrieve.
   * @param {boolean} [required=false] - Indicates whether the option is required. If set to true and the option is not found, a RangeError is thrown.
   * @returns {boolean | null} - The boolean value of the option, or null if the option is not found and not required.
   * @throws {RangeError} - If the option is required and not found, or if the option type is not boolean.
   */
  getBoolean(name: string, required?: boolean | undefined): boolean | null;
  /**
   * Retrieves an attachment from the message data based on the provided options.
   * @param {boolean} [required=false] - Indicates whether the attachment is required. If set to true and no attachment is found, a RangeError will be thrown.
   * @returns {MessageAttachment | null} - The retrieved attachment, or null if no attachment is found and it is not required.
   * @throws {RangeError} - If the required parameter is set to true and no attachment is found.
   */
  getAttachment(required?: boolean | undefined): MessageAttachment | null;
  /**
   * Retrieves a user based on the given name.
   * @param {string} name - The name of the user to retrieve.
   * @param {boolean} [required=false] - Indicates whether the user is required. If set to true and the user is not found, a RangeError will be thrown.
   * @returns {User | null} - The retrieved user object, or null if the user is not found and is not required.
   * @throws {RangeError} - If the option type is not User or if the option name does not match the specified option and is required.
   */
  getUser(name: string, required?: boolean | undefined): User | null;
  /**
   * Retrieves a member by name from the guild's options.
   * @param {string} name - The name of the member to retrieve.
   * @param {boolean} [required=false] - Whether the member is required. If set to true and the member is not found, a RangeError will be thrown.
   * @returns {GuildMember | null} The retrieved member, or null if not found (unless required is set to true).
   * @throws {RangeError} If the option type is not User or if the option name does not match the specified option (if required is set to true).
   */
  getMember(name: string, required?: boolean | undefined): GuildMember | null;
  /**
   * Retrieves the context user from the data object.
   * @returns {User | null} The context user, or null if the data object is not available.
   * @throws {RangeError} If the data object is resolved and its type is not 2 (context user).
   */
  getContextUser(): User | null;
  /**
   * Retrieves the message associated with the current context.
   * @returns {Message | null} The message object if found, otherwise null.
   * @throws {RangeError} If the message is not of type "Context Message".
   */
  getMessage(): Message | null;
  /**
   * Retrieves a channel based on its name from the available options.
   * @param {string} name - The name of the channel to retrieve.
   * @param {boolean} [required=false] - Whether the channel is required. If set to true and the channel is not found, a RangeError will be thrown.
   * @returns {Channel | null} - The retrieved channel or null if not found (unless required is set to true).
   * @throws {RangeError} - If the type of option is not Channel or if the name of the option does not match the selected option (if required is set to true).
   */
  getChannel(name: string, required?: boolean | undefined): Channel | null;
  /**
   * Retrieves the role with the specified name from the options.
   * @param {string} name - The name of the role to retrieve.
   * @param {boolean} [required=false] - Whether the role is required. If set to true and the role is not found, a RangeError will be thrown.
   * @returns {Role | null} The role object if found, or null if not found and not required.
   * @throws {RangeError} If the option type is not Role and required is set to true, or if the name of the option does not match the selected option and required is set to true.
   */
  getRole(name: string, required?: boolean | undefined): Role | null;
  /**
   * Retrieves the mentionable value for the specified option name.
   * @param {string} name - The name of the option.
   * @param {boolean} [required=false] - Indicates whether the option is required.
   * @returns {User | GuildMember | Role | null} The mentionable value for the option, or null if not found.
   * @throws {RangeError} If the option type is not Mentionable.
   * @throws {RangeError} If the name of the option does not match the selected option and is required.
   */
  getMentionable(name: string, required?: boolean | undefined): User | GuildMember | Role | null;
  /**
   * Retrieves the sub command name from the options array.
   * @param {boolean} [required=false] - Indicates whether the sub command is required.
   * @returns {string | null} - The name of the sub command, or null if not found.
   * @throws {RangeError} - If the sub command is required but not found.
   */
  getSubCommand(required?: boolean | undefined): string | null;
  /**
   * Retrieves the sub command group from the options array.
   * @param {boolean} [required=false] - Indicates whether the sub command group is required.
   * @returns {string | null} - The name of the sub command group, or null if not found.
   * @throws {RangeError} - If the sub command group is required but not found.
   */
  getSubCommandGroup(required?: boolean | undefined): string | null;
  /**
   * Get the guild object associated with this guildId.
   * @returns The guild object.
   */
  get guild(): any;
  /**
   * Get the channel object associated with this instance.
   * @returns The channel object.
   */
  get channel(): any;
}
import Base = require("../Base/base");
import MessageAttachment = require("../Builders/MessageAttachment");

export = ContextMenuInteraction;
/**
 * Represents a context menu interaction, extending the base ApplicationCommandInteraction class.
 * @class
 * @extends ApplicationCommandInteraction
 * @param {Object} [data] - The data object containing information about the interaction.
 * @param {string} guildId - The ID of the guild where the interaction occurred.
 * @param {Client} client - The client instance associated with the interaction.
 * @property {string|null} targetId - The ID of the target of the interaction, if available.
 * @property {Object|null} resolved - The resolved data of the interaction, if available.
 */
declare class ContextMenuInteraction extends ApplicationCommandInteraction {
  targetId: any;
  resolved: any;
}
import ApplicationCommandInteraction = require("./ApplicationCommandInteraction");

export = ContextMessageInteraction;
/**
 * Represents a context menu interaction for a message in a specific context.
 * @class
 * @extends ContextMenuInteraction
 */
declare class ContextMessageInteraction extends ContextMenuInteraction {}
import ContextMenuInteraction = require("./ContextMenuInteraction");

export = ContextUserInteraction;
/**
 * Represents a user interaction with a context menu.
 * @extends ContextMenuInteraction
 * @constructor
 * @param {Object} [data] - The data associated with the interaction.
 * @param {string} guildId - The ID of the guild where the interaction occurred.
 * @param {Client} client - The client instance that received the interaction.
 */
declare class ContextUserInteraction extends ContextMenuInteraction {}
import ContextMenuInteraction = require("./ContextMenuInteraction");

export = DirectoryChannel;
/**
 * Represents a directory channel.
 * @class
 * @extends Channel
 * @param {Object} [data] - The data for the directory channel.
 * @param {Client} client - The client instance.
 * @property {boolean} partial - Whether the channel is partial or not.
 * @property {string|null} name - The name of the directory channel.
 */
declare class DirectoryChannel extends Channel {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Object} [data] - The data object to initialize the instance with.
   * @param {Client} client - The client object associated with the instance.
   */
  constructor(data?: Object | undefined, client: Client);
}
import Channel = require("./Channel");

export = DMChannel;
/**
 * Represents a direct message channel in Discord.
 * @class
 * @extends TextBasedChannels
 * @param {Object} [data] - The data for the DM channel.
 * @param {string|null} [guildId=null] - The ID of the guild that the DM channel belongs to.
 * @param {Client} client - The client that instantiated this DM channel.
 */
declare class DMChannel extends TextBasedChannels {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Object} [data] - The data object to initialize the instance with.
   * @param {string|null} [guildId=null] - The ID of the guild associated with the instance.
   * @param {Client} client - The client instance associated with the instance.
   */
  constructor(data?: Object | undefined, guildId?: string | null | undefined, client: Client);
  recipients: RaidenCol;
}
import TextBasedChannels = require("./Interface/TextBasedChannels");
import {RaidenCol} from "../Util/@Collections/RaidenCol";

export = Emoji;
/**
 * Represents an Emoji object.
 * @class
 * @extends Base
 * @param {Object} [data] - The data object containing the emoji information.
 * @param {string} guildId - The ID of the guild that the emoji belongs to.
 * @param {Client} client - The client instance.
 */
declare class Emoji extends Base {
  /**
   * Constructs a new instance of the GuildEmoji class.
   * @constructor
   * @param {Object} [data] - The data object containing the properties of the emoji.
   * @param {string} guildId - The ID of the guild that the emoji belongs to.
   * @param {Client} client - The client instance.
   * @returns {GuildEmoji} - The newly created GuildEmoji instance.
   */
  constructor(data?: Object | undefined, guildId: string, client: Client);
  partial: any;
  guildId: string;
  id: any;
  name: any;
  roles: any;
  user: any;
  requireColons: any;
  createdAt: any;
  createdTimestamp: any;
  managed: any;
  animated: any;
  available: any;
  /**
   * Fetches emojis from the guild.
   * @param {Object} options - Optional parameters for the fetch operation.
   * @returns {Promise} A promise that resolves to the fetched emojis.
   */
  fetch(options?: Object): Promise<any>;
  /**
   * Edits the current emoji with the provided options.
   * @param {Object} options - The options to update the emoji with.
   * @returns {Promise} A promise that resolves with the updated emoji.
   */
  edit(options?: Object): Promise<any>;
  /**
   * Sets the name and reason for an object.
   * @param {string} name - The new name to set.
   * @param {string} reason - The reason for setting the new name.
   * @returns {Promise} - A promise that resolves when the name and reason are successfully set.
   */
  setName(name: string, reason: string): Promise<any>;
  /**
   * Sets the roles for the current object.
   * @param {Array} roles - The roles to set.
   * @param {string} reason - The reason for setting the roles.
   * @returns {Promise} A promise that resolves when the roles are successfully set.
   */
  setRoles(roles: any[], reason: string): Promise<any>;
  /**
   * Deletes the emoji from the guild.
   * @param {string} reason - The reason for deleting the emoji.
   * @returns {Promise<void>} - A promise that resolves when the emoji is deleted.
   */
  delete(reason: string): Promise<void>;
  /**
   * Get the guild object associated with this guildId.
   * @returns The guild object.
   */
  get guild(): any;
  /**
   * Generates the URL for the image of this emoji.
   * @param {Object} options - The options for generating the URL.
   * @param {number} options.size - The desired size of the image.
   * @param {string} options.format - The desired format of the image.
   * @param {number} options.quality - The desired quality of the image.
   * @returns {string} The URL of the image.
   */
  imageURL(options?: {size: number; format: string; quality: number}): string;
  /**
   * Checks if the given object is equal to this Emoji object.
   * @param {Emoji} emoji - The object to compare with this Emoji.
   * @returns {boolean} True if the objects are equal, false otherwise.
   */
  equals(emoji: Emoji): boolean;
}
import Base = require("../Base/base");

export = FetchedThreads;
/**
 * Represents a collection of fetched threads.
 * @class
 * @extends Base
 * @param {Object} [data] - The data object containing information about the fetched threads.
 * @param {string} guildId - The ID of the guild the threads belong to.
 * @param {Client} client - The client instance.
 * @property {string} guildId - The ID of the guild the threads belong to.
 * @property {RaidenCol} threads - A collection of threads, where each thread is represented by its ID and a channel object.
 * @property {boolean|null} hasMore - Indicates whether there are more threads to fetch.
 */
declare class FetchedThreads extends Base {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Object} [data] - The data object containing the initial values.
   * @param {string} guildId - The ID of the guild.
   * @param {Client} client - The client instance.
   */
  constructor(data?: Object | undefined, guildId: string, client: Client);
  guildId: string;
  threads: RaidenCol;
  hasMore: any;
}
import Base = require("../Base/base");
import {RaidenCol} from "../Util/@Collections/RaidenCol";

export = ForumChannel;
/**
 * A class representing a forum channel on Discord.
 * @class
 * @extends Channel
 */
declare class ForumChannel extends Channel {
  /**
   * @constructor
   * @param {Object} [data] - The data for the forum channel
   * @param {string} [guildId] - The ID of the guild that the channel belongs to
   * @param {Client} [client] - The client that instantiated the channel
   */
  constructor(data?: Object | undefined, guildId?: string | undefined, client?: any);
  availableTags: any;
  appliedTags: any;
  defaultReactionEmoji: any;
  defaultThreadRateLimitPerUser: any;
  defaultSortOrder: any;
  defaultForumLayout: any;
  /**
   * Creates a new thread in the forum channel.
   * @async
   * @param {Object} [options] - The options for the thread
   * @param {string} [options.name] - The name of the thread
   * @param {number} [options.autoArchiveDuration] - The duration in minutes to automatically archive the thread
   * @param {number} [options.rateLimitPerUser] - The rate limit per user for the thread in seconds
   * @param {string} [options.reason] - The reason for creating the thread
   * @param {Message} [options.message] - The message to use as a basis for the thread
   * @returns {Promise<Object>} The thread data
   */
  createThread(
    options?:
      | {
          name?: string | undefined;
          autoArchiveDuration?: number | undefined;
          rateLimitPerUser?: number | undefined;
          reason?: string | undefined;
          message?: any;
        }
      | undefined
  ): Promise<Object>;
}
import Channel = require("./Channel");

export = Guild;
/**
 * Represents a guild in Discord.
 * @class
 * @extends Base
 */
declare class Guild extends Base {
  /**
   * Constructs a new Guild object.
   * @constructor
   * @param {Object} [data] - The data object containing guild information.
   * @param {Client} client - The client object associated with the guild.
   * @property {boolean} partial - Whether the guild is partial or not.
   * @property {string | null} id - The ID of the guild.
   * @property {string | null} name - The name of the guild.
   * @property {string | null} icon - The icon of the guild.
   * @property {string | null} iconHash - The hash of the guild's icon.
   * @property {string | null} splash - The splash image of the guild.
   * @property {string | null}
   */
  constructor(data?: Object | undefined, client: Client);
  partial: any;
  id: any;
  name: any;
  icon: any;
  iconHash: any;
  splash: any;
  discoverySplash: any;
  ownerId: any;
  createdAt: any;
  createdTimestamp: any;
  permissions: Permissions;
  afkChannelid: any;
  afkTimeout: any;
  widgetEnabled: any;
  widgetChannelid: any;
  verificationLevel: any;
  defaultMessageNotifications: any;
  explicitContentFilter: any;
  features: any;
  mfaLevel: any;
  systemChannelId: any;
  systemChannelFlags: SystemChannelFlags;
  rulesChannelId: any;
  unavailable: any;
  memberCount: any;
  maxMembers: any;
  maxPresences: any;
  vanityUrlCode: any;
  description: any;
  banner: any;
  premiumTier: any;
  premiumSubscriptionCount: any;
  preferredLocale: any;
  publicUpdatesChannelId: any;
  maxVideoChannelUsers: any;
  approximateMemberCount: any;
  approximatePresenceCount: any;
  nsfwLevel: any;
  premiumProgressBar: any;
  safetyAlertsChannelId: any;
  channels: GuildChannelManager;
  roles: GuildRoleManager;
  members: GuildMemberManager;
  bans: GuildBanManager;
  prunes: GuildPruneManager;
  emojis: GuildEmojiManager;
  invites: GuildInviteManager;
  voiceStates: GuildVoiceStateManager;
  widgets: GuildWidgetManager;
  presences: PresenceManager;
  stageInstances: GuildStageInstanceManger;
  templates: GuildTemplateManager;
  events: GuildScheduledEventManager;
  stickers: GuildStickerManager;
  memberVerification: GuildMemberVerificationManager;
  rolePrompts: RolePromptManager;
  automod: GuildAutoModManager;
  discovery: GuildDiscoveryManager;
  /**
   * Fetches the guild.
   * @param {Object} [options] Options for fetching the guild.
   * @returns {Promise<Guild>}
   */
  fetch(options?: Object | undefined): Promise<Guild>;
  /**
   * Edits the guild.
   * @param {Object} [options] Options for editing the guild.
   * @returns {Promise<Guild>}
   */
  edit(options?: Object | undefined): Promise<Guild>;
  /**
   * Deletes the guild.
   * @returns {Promise<Guild>}
   */
  delete(): Promise<Guild>;
  /**
   * Sets the name of the guild.
   * @param {string} name The new name for the guild.
   * @param {string} [reason] Reason for changing the name.
   * @returns {Promise<Guild>}
   */
  setName(name: string, reason?: string | undefined): Promise<Guild>;
  /**
   * Sets the description of the guild.
   * @param {string} description The new description for the guild.
   * @param {string} [reason] Reason for changing the description.
   * @returns {Promise<Guild>}
   */
  setDescription(description: string, reason?: string | undefined): Promise<Guild>;
  /**
   * Sets the verification level of the guild.
   * @param {number} verificationLevel The new verification level for the guild.
   * @param {string} [reason] Reason for changing the verification level.
   * @returns {Promise<Guild>}
   */
  setVerificationLevel(verificationLevel: number, reason?: string | undefined): Promise<Guild>;
  /**
   * Sets the default message notifications of the guild.
   * @param {number} defaultMessageNotifications The new default message notifications for the guild.
   * @param {string} [reason] Reason for changing the default message notifications.
   * @returns {Promise<Guild>}
   */
  setDefaultMessageNotifications(defaultMessageNotifications: number, reason?: string | undefined): Promise<Guild>;
  /**
   * Sets the explicit content filter level of the guild.
   * @param {number} explicitContentFilter The new explicit content filter level for the guild.
   * @param {string} [reason] Reason for changing the explicit content filter level.
   * @returns {Promise<Guild>}
   */
  setExplicitContentFilter(explicitContentFilter: number, reason?: string | undefined): Promise<Guild>;
  /**
   * Sets the AFK channel of the guild.
   * @param {Channel} afkChannel The new AFK channel for the guild.
   * @param {string} [reason] Reason for changing the AFK channel.
   * @returns {Promise<Guild>}
   */
  setAfkChannel(afkChannel: Channel, reason?: string | undefined): Promise<Guild>;
  /**
   * Sets the AFK timeout of the guild.
   * @param {number} afkTimeout The new AFK timeout for the guild.
   * @param {string} [reason] Reason for changing the AFK timeout.
   * @returns {Promise<Guild>}
   */
  setAfkTimeout(afkTimeout: number, reason?: string | undefined): Promise<Guild>;
  /**
   * Sets the icon of the guild.
   * @param {string} icon The new icon for the guild.
   * @param {string} [reason] Reason for changing the icon.
   * @returns {Promise<Guild>}
   */
  setIcon(icon: string, reason?: string | undefined): Promise<Guild>;
  /**
   * Set the owner of the guild.
   * @param {GuildMemberResolvable} owner - The new owner of the guild.
   * @param {string} [reason] - The reason for setting the owner.
   * @returns {Promise<Guild>} The updated guild.
   */
  setOwner(owner: GuildMemberResolvable, reason?: string | undefined): Promise<Guild>;
  /**
   * Set the splash image for the guild.
   * @param {BufferResolvable|Base64Resolvable|null} splash - The new splash image for the guild. Can be a Buffer or a base64-encoded string or null to remove the current splash image.
   * @param {string} [reason] - The reason for setting the splash.
   * @returns {Promise<Guild>} The updated guild.
   */
  setSplash(splash: BufferResolvable | Base64Resolvable | null, reason?: string | undefined): Promise<Guild>;
  /**
   * Set the discovery splash image for the guild.
   * @param {BufferResolvable|Base64Resolvable|null} discoverySplash - The new discovery splash image for the guild. Can be a Buffer or a base64-encoded string or null to remove the current discovery splash image.
   * @param {string} [reason] - The reason for setting the discovery splash.
   * @returns {Promise<Guild>} The updated guild.
   */
  setDiscoverySplash(discoverySplash: BufferResolvable | Base64Resolvable | null, reason?: string | undefined): Promise<Guild>;
  /**
   * Set the banner image for the guild.
   * @param {BufferResolvable|Base64Resolvable|null} banner - The new banner image for the guild. Can be a Buffer or a base64-encoded string or null to remove the current banner image.
   * @param {string} [reason] - The reason for setting the banner.
   * @returns {Promise<Guild>} The updated guild.
   */
  setBanner(banner: BufferResolvable | Base64Resolvable | null, reason?: string | undefined): Promise<Guild>;
  /**
   * Set the system channel for the guild.
   * @param {GuildChannelResolvable} systemChannel - The new system channel for the guild.
   * @param {string} [reason] - The reason for setting the system channel.
   * @returns {Promise<Guild>} The updated guild.
   */
  setSystemChannel(systemChannel: GuildChannelResolvable, reason?: string | undefined): Promise<Guild>;
  /**
   * Set the preferred locale for the guild.
   * @param {string} preferredLocale - The new preferred locale for the guild.
   * @param {string} [reason] - The reason for setting the preferred locale.
   * @returns {Promise<Guild>} The updated guild.
   */
  setPreferredLocale(preferredLocale: string, reason?: string | undefined): Promise<Guild>;
  /**
   * Set the system channel flags for the guild.
   * @param {number} systemChannelFlags - The new system channel flags for the guild.
   * @param {string} [reason] - The reason for setting the system channel flags.
   * @returns {Promise<Guild>} The updated guild.
   */
  setSystemChannelFlags(systemChannelFlags: number, reason?: string | undefined): Promise<Guild>;
  /**
   * Set the features of the guild.
   * @param {GuildFeature[]} features - The new features of the guild.
   * @param {string} [reason] - The reason for setting the features.
   * @returns {Promise<Guild>} The updated guild.
   */
  setFeatures(features: GuildFeature[], reason?: string | undefined): Promise<Guild>;
  /**
   * Sets the premium progress bar of the guild.
   * @param {string} premiumProgressBar - The new premium progress bar.
   * @param {string} reason - The reason for setting the premium progress bar.
   * @returns {Promise<Guild>} The updated guild.
   */
  setPremiumProgressBar(premiumProgressBar: string, reason: string): Promise<Guild>;
  /**
   * Returns the URL of the guild's icon.
   * @param {Object} [options] - Additional options for the URL.
   * @param {boolean} [options.dynamic=false] - Whether to return a dynamic icon.
   * @param {number} [options.size] - The size of the icon to return.
   * @param {string} [options.format] - The format of the icon to return.
   * @returns {?string} The URL of the guild's icon, or `null` if the guild has no icon.
   */
  iconURL(
    options?:
      | {
          dynamic?: boolean | undefined;
          size?: number | undefined;
          format?: string | undefined;
        }
      | undefined
  ): string | null;
  /**
   * Returns the URL of the guild's banner.
   * @param {Object} [options] - Additional options for the URL.
   * @param {boolean} [options.dynamic=false] - Whether to return a dynamic banner.
   * @param {number} [options.size] - The size of the banner to return.
   * @param {string} [options.format] - The format of the banner to return.
   * @returns {?string} The URL of the guild's banner, or `null` if the guild has no banner.
   */
  bannerURL(
    options?:
      | {
          dynamic?: boolean | undefined;
          size?: number | undefined;
          format?: string | undefined;
        }
      | undefined
  ): string | null;
  /**
   * Returns the URL of the guild's splash.
   * @param {Object} [options] - Additional options for the URL.
   * @param {boolean} [options.dynamic=false] - Whether to return a dynamic splash.
   * @param {number} [options.size] - The size of the splash to return.
   * @param {string} [options.format] - The format of the splash to return.
   * @returns {?string} The URL of the guild's splash, or `null` if the guild has no splash.
   */
  splashURL(
    options?:
      | {
          dynamic?: boolean | undefined;
          size?: number | undefined;
          format?: string | undefined;
        }
      | undefined
  ): string | null;
  /**
   * Returns the URL of the guild's discovery splash.
   * @param {Object} [options] - Additional options for the URL.
   * @param {boolean} [options.dynamic=false] - Whether to return a dynamic discovery splash.
   * @param {number} [options.size] - The size of the discovery splash to return.
   * @param {string} [options.format] - The format of the discovery splash to return.
   * @returns {?string} The URL of the guild's discovery splash, or `null` if the guild has no discovery splash.
   */
  discoverySplashURL(
    options?:
      | {
          dynamic?: boolean | undefined;
          size?: number | undefined;
          format?: string | undefined;
        }
      | undefined
  ): string | null;
  /**
   * Returns the GuildMember instance of the bot user in this guild.
   * @returns {GuildMember} The GuildMember instance of the bot user in this guild.
   */
  get me(): GuildMember;
  /**
   * Fetches the owner of the guild.
   * @param {BaseFetchOptions} [options] The options to fetch the owner with.
   * @returns {Promise<GuildMember>} A promise that resolves with the GuildMember instance of the guild owner.
   */
  fetchOwner(options?: any): Promise<GuildMember>;
  /**
   * Returns the voice channel where users are moved after being AFK for too long.
   * @returns {VoiceChannel} The voice channel where users are moved after being AFK for too long.
   */
  get afkChannel(): VoiceChannel;
  /**
   * Returns the widget channel of the guild.
   * @returns {Promise<Guild>} The widget channel of the guild.
   */
  get widgetChannel(): Promise<Guild>;
  /**
   * Returns the system channel of the guild.
   * @returns {Promise<Guild>} The system channel of the guild.
   */
  get systemChannel(): Promise<Guild>;
  /**
   * Returns the rules channel of the guild.
   * @returns {Promise<Guild>} The rules channel of the guild.
   */
  get rulesChannel(): Promise<Guild>;
  /**
   * Returns the public updates channel of the guild.
   * @returns {Promise<Guild>} The public updates channel of the guild.
   */
  get publicUpdatesChannel(): Promise<Guild>;
  /**
   * Returns the welcome screen manager for the guild.
   * @returns {WelcomeScreenManager} The welcome screen manager for the guild.
   */
  get welcomeScreen(): WelcomeScreenManager;
  /**
   * Returns the integration manager for the guild.
   * @returns {GuildIntegrationManager} The integration manager for the guild.
   */
  get integrations(): GuildIntegrationManager;
  /**
   * Returns the vanity manager for the guild.
   * @returns {GuildVanityManager} The vanity manager for the guild.
   */
  get vanity(): GuildVanityManager;
  /**
   * Returns the application command manager for the guild.
   * @returns {GuildApplicationCommandManager} The application command manager for the guild.
   */
  get commands(): GuildApplicationCommandManager;
  /**
   * Fetches a preview of the guild.
   * @async
   * @returns {Promise<Object>} A promise that resolves with the preview of the guild.
   */
  fetchPreview(): Promise<Object>;
  /**
   * Fetches the active threads in the guild.
   * @async
   * @returns {Promise<FetchedThreads>} A promise that resolves with the active threads in the guild.
   */
  fetchActiveThreads(): Promise<FetchedThreads>;
  /**
   * Fetches the audit logs for the guild.
   * @async
   * @param {Object} [options] - The options for fetching audit logs.
   * @param {UserResolvable} [options.user] - The user to filter the audit log by.
   * @param {string} [options.actionType] - The type of action to filter the audit log by.
   * @param {Snowflake|GuildAuditLogEntry} [options.before] - The entry to get audit logs before.
   * @param {number} [options.limit=50] - The maximum number of audit logs to fetch.
   * @returns {Promise<GuildAuditLog>} A promise that resolves with the fetched audit logs.
   */
  fetchAuditLogs(
    options?:
      | {
          user?: any;
          actionType?: string | undefined;
          before?: Snowflake | GuildAuditLogEntry;
          limit?: number | undefined;
        }
      | undefined
  ): Promise<GuildAuditLog>;
  /**
   * Fetches the bot's own member object for the guild.
   * @async
   * @param {Object} [options] - The options for fetching the member object.
   * @returns {Promise<GuildMember>} A promise that resolves with the bot's own member object for the guild.
   */
  fetchMe(options?: Object | undefined): Promise<GuildMember>;
  /**
   * Fetches the webhooks for the guild.
   * @async
   * @returns {Promise<RaidenCol<string, Webhook>>} A promise that resolves with the fetched webhooks for the guild.
   */
  fetchWebhooks(): Promise<RaidenCol<string, Webhook>>;
  /**
   * Fetches the guild feed for the guild.
   * @async
   * @returns {Promise<Object>} A promise that resolves with the fetched guild feed.
   */
  fetchFeed(): Promise<Object>;
  /**
   * Modifies the MFA (multi-factor authentication) level of the guild.
   * @async
   * @param {number} mfaLevel - The new MFA level for the guild.
   * @param {string} [reason] - The reason for modifying the MFA level.
   * @returns {Promise<Guild>} A promise that resolves with the guild object with the modified MFA level.
   */
  modifyMFALevel(mfaLevel: number, reason?: string | undefined): Promise<Guild>;
  /**
   * Gets all the voice-based channels in the guild.
   * @returns {Collection<Snowflake, GuildChannel>} A collection of all the voice-based channels in the guild.
   */
  getVoiceBasedChannels(): Collection<Snowflake, GuildChannel>;
  /**
   * Gets all the text-based channels in the guild.
   * @returns {Collection<Snowflake, GuildChannel>} A collection of all the text-based channels in the guild.
   */
  getTextBasedChannels(): Collection<Snowflake, GuildChannel>;
  /**
   * Gets all the categories in the guild.
   * @returns {Collection<Snowflake, GuildChannel>} A collection of all the categories in the guild.
   */
  getCategories(): Collection<Snowflake, GuildChannel>;
}
import Base = require("../Base/base");
import Permissions = require("../Util/Permissions");
import SystemChannelFlags = require("../Util/SystemChannelFlags");
import GuildChannelManager = require("../Managers/GuildChannelManager");
import GuildRoleManager = require("../Managers/GuildRoleManager");
import GuildMemberManager = require("../Managers/GuildMemberManager");
import GuildBanManager = require("../Managers/GuildBanManager");
import GuildPruneManager = require("../Managers/GuildPruneManager");
import GuildEmojiManager = require("../Managers/GuildEmojiManager");
import GuildInviteManager = require("../Managers/GuildInviteManager");
import GuildVoiceStateManager = require("../Managers/GuildVoiceStateManager");
import GuildWidgetManager = require("../Managers/GuildWidgetManager");
import PresenceManager = require("../Managers/PresenceManager");
import GuildStageInstanceManger = require("../Managers/GuildStageInstanceManager");
import GuildTemplateManager = require("../Managers/GuildTemplateManager");
import GuildScheduledEventManager = require("../Managers/GuildScheduledEventManager");
import GuildStickerManager = require("../Managers/GuildStickerManager");
import GuildMemberVerificationManager = require("../Managers/GuildMemberVerificationManager");
import RolePromptManager = require("../Managers/RolePromptManager");
import GuildAutoModManager = require("../Managers/GuildAutoModManager");
import GuildDiscoveryManager = require("../Managers/GuildDiscoveryManager");
import WelcomeScreenManager = require("../Managers/WelcomeScreenManager");
import GuildIntegrationManager = require("../Managers/GuildIntegrationManager");
import GuildVanityManager = require("../Managers/GuildVanityManager");
import GuildApplicationCommandManager = require("../Managers/GuildApplicationCommandManager");
import FetchedThreads = require("./FetchedThreads");
import Snowflake = require("../Util/Snowflake");
import GuildAuditLog = require("./GuildAuditLog");
import {RaidenCol} from "../Util/@Collections/RaidenCol";
import Webhook = require("./Webhook");

export = GuildAuditLog;
/**
 * Represents an audit log for a guild.
 * @class
 * @extends Base
 **/
declare class GuildAuditLog extends Base {
  /**
   * Constructs a new instance of the Guild class.
   * @constructor
   * @param {Object} [data] - The data object containing guild information.
   * @param {string} guildId - The ID of the guild.
   * @param {Client} client - The client instance.
   */
  constructor(data?: Object | undefined, guildId: string, client: Client);
  guildId: string;
  entries: RaidenCol;
  autoModerationRules: RaidenCol;
  users: RaidenCol;
  guildScheduledEvents: RaidenCol;
  integrations: RaidenCol;
  threads: RaidenCol;
  webhooks: RaidenCol;
  /**
   * Returns the guild object associated with this audit log.
   *
   * @memberof GuildAuditLog
   * @type {?Guild}
   * @readonly
   **/
  get guild(): any;
}
import Base = require("../Base/base");
import {RaidenCol} from "../Util/@Collections/RaidenCol";

export = GuildAuditLogChanges;
/**
 * Represents changes made to a guild audit log.
 * @class
 * @extends Base
 **/
declare class GuildAuditLogChanges extends Base {
  /**
   * Constructs a new `GuildAuditLogChanges` object.
   * @constructor
   * @param {Object} [data] - The audit log changes data.
   * @param {string} guildId - The ID of the guild.
   * @param {Client} client - The client object.
   **/
  constructor(data?: Object | undefined, guildId: string, client: Client);
  guildId: string;
  new: any;
  old: any;
  key: any;
}
import Base = require("../Base/base");

export = GuildAuditLogEntry;
/**
 * Represents an entry in the audit log for a guild.
 * @class
 * @extends Base
 */
declare class GuildAuditLogEntry extends Base {
  /**
   * @constructor
   * @param {Object} [data] - The data for the audit log entry
   * @param {string} guildId - The ID of the guild the entry belongs to
   * @param {Client} client - The client that instantiated this entry
   */
  constructor(data?: Object | undefined, guildId: string, client: Client);
  guildId: string;
  targetId: any;
  changes: any;
  user: any;
  id: any;
  createdAt: any;
  createdTimestamp: any;
  actionType: any;
  options: {
    channelId: any;
    count: any;
    deleteMemberDays: any;
    id: any;
    membersRemoved: any;
    messageId: any;
    roleName: any;
    type: any;
  } | null;
  reason: any;
}
import Base = require("../Base/base");

export = GuildAutoMod;
/**
 * Represents an auto-mod configuration for a guild.
 * @class
 * @extends Base
 */
declare class GuildAutoMod extends Base {
  /**
   * @constructor
   * @param {Object} data The data for the auto-mod configuration
   * @param {Snowflake} guildId The ID of the guild the auto-mod is for
   * @param {Client} client The client instance
   */
  constructor(data: Object | undefined, guildId: Snowflake, client: Client);
  partial: any;
  id: any;
  guildId: any;
  creatorId: any;
  name: any;
  eventType: any;
  triggerType: any;
  triggerMetadata: {
    keywordFilter: any;
    regexPatterns: any;
    presets: any;
    allowList: any;
    mentionTotalLimit: any;
    mentionRaidProtectionEnabled: any;
  } | null;
  createdAt: any;
  createdTimestamp: any;
  actions: any;
  enabled: any;
  exemptRoles: any;
  exemptChannels: any;
  /**
   * The guild associated with this GuildAutoMod.
   * @type {?Guild}
   * @readonly
   */
  get guild(): any;
  /**
   * The user who created this GuildAutoMod.
   * @type {?User}
   * @readonly
   */
  get creator(): any;
  /**
   * Fetches the GuildAutoMod's data from Discord.
   * @async
   * @param {Object} [options] - Additional options for the API request.
   * @returns {Promise<GuildAutoMod>}
   */
  fetch(options?: Object | undefined): Promise<GuildAutoMod>;
  /**
   * Edits the GuildAutoMod.
   * @async
   * @param {Object} [options] - The options to edit the GuildAutoMod with.
   * @returns {Promise<GuildAutoMod>}
   */
  edit(options?: Object | undefined): Promise<GuildAutoMod>;
  /**
   * Deletes the GuildAutoMod.
   * @async
   * @param {string} [reason] - Reason for deleting the GuildAutoMod.
   * @returns {Promise<void>}
   */
  delete(reason?: string | undefined): Promise<void>;
  /**
   * Sets the name of the GuildAutoMod.
   * @async
   * @param {string} name - The new name for the GuildAutoMod.
   * @param {string} [reason] - Reason for changing the name.
   * @returns {Promise<GuildAutoMod>}
   */
  setName(name: string, reason?: string | undefined): Promise<GuildAutoMod>;
  /**
   * Sets the event type of the GuildAutoMod.
   * @async
   * @param {string|number} eventType - The new event type for the GuildAutoMod.
   * @param {string} [reason] - Reason for changing the event type.
   * @returns {Promise<GuildAutoMod>}
   */
  setEventType(eventType: string | number, reason?: string | undefined): Promise<GuildAutoMod>;
  /**
   * Sets the trigger metadata of the GuildAutoMod.
   * @async
   * @param {Object} triggerMetadata - The new trigger metadata for the GuildAutoMod.
   * @param {string[]} triggerMetadata.keywordFilter - The keyword filter to apply.
   * @param {string[]|number[]} triggerMetadata.presets - The presets to apply.
   * @param {string[]} triggerMetadata.allowList - The allow list to apply.
   * @param {string} [reason] - Reason for changing the trigger metadata.
   * @returns {Promise<GuildAutoMod>}
   */
  setTriggerMetadata(
    triggerMetadata: {
      keywordFilter: string[];
      presets: string[] | number[];
      allowList: string[];
    },
    reason?: string | undefined
  ): Promise<GuildAutoMod>;
  /**
   * Sets the actions of the GuildAutoMod.
   * @async
   * @param {Array<Object>} actions - The new actions for the GuildAutoMod.
   * @param {string} [reason] - Reason for changing the actions.
   * @returns {Promise<GuildAutoMod>}
   */
  setActions(actions: Array<Object>, reason?: string | undefined): Promise<GuildAutoMod>;
  /**
   * Enables or disables the feature.
   * @async
   * @function setEnabled
   * @param {boolean} enabled - Indicates whether the feature should be enabled or disabled.
   * @param {string} reason - The reason for enabling or disabling the feature.
   * @returns {Promise} A promise that resolves with the result of the edit operation.
   */
  setEnabled(enabled: boolean, reason: string): Promise<any>;
  /**
   * Sets the roles that are exempt from the feature.
   * @async
   * @function setExemptRoles
   * @param {Array<string>} exemptRoles - An array of role IDs that should be exempt from the feature.
   * @param {string} reason - The reason for setting the exempt roles.
   * @returns {Promise} A promise that resolves with the result of the edit operation.
   */
  setExemptRoles(exemptRoles: Array<string>, reason: string): Promise<any>;
  /**
   * Sets the channels that are exempt from the feature.
   * @async
   * @function setExemptChannels
   * @param {Array<string>} exemptChannels - An array of channel IDs that should be exempt from the feature.
   * @param {string} reason - The reason for setting the exempt channels.
   * @returns {Promise} A promise that resolves with the result of the edit operation.
   */
  setExemptChannels(exemptChannels: Array<string>, reason: string): Promise<any>;
}
import Base = require("../Base/base");
import Snowflake = require("../Util/Snowflake");

export = GuildAutoModActions;
/**
 * Represents an action taken by the guild automod system.
 * @class
 * @extends Base
 */
declare class GuildAutoModActions extends Base {
  /**
   * @constructor
   * @param {Object} data - The data for the action.
   * @param {Client} client - The instantiating client
   */
  constructor(data: Object | undefined, client: Client);
  /**
   * The type of action taken by the automod system.
   * @type {?string}
   */
  type: string | null;
  /**
   * The metadata for the action, if any.
   * @type {?Object}
   * @property {?string} channelId - The ID of the channel the action was taken in.
   * @property {?number} durationSeconds - The duration of the action, in seconds.
   */
  metadata: Object | null;
}
import Base = require("../Base/base");

export = GuildBan;
/**
 * Represents a ban for a user in a guild.
 * @class
 * @extends Base
 */
declare class GuildBan extends Base {
  /**
   * @constructor
   * @param {Object} data - The data for the ban.
   * @param {string} guildId - The ID of the guild.
   * @param {Client} client - The instantiating client
   */
  constructor(data: Object | undefined, guildId: string, client: Client);
  /**
   * Whether or not the ban is partial.
   * @type {boolean}
   */
  partial: boolean;
  /**
   * The reason for the ban.
   * @type {?string}
   */
  reason: string | null;
  /**
   * The user who was banned.
   */
  user: any;
  /**
   * The ID of the guild the ban was issued in.
   * @type {string}
   */
  guildId: string;
  /**
   * Fetches this ban from the API.
   * @param {Object} [options] - Additional options for the fetch.
   * @returns {Promise<GuildBan>}
   */
  fetch(options?: Object | undefined): Promise<GuildBan>;
  /**
   * Fetches this ban from the API.
   * @param {Object} [options] - Additional options for the fetch.
   * @returns {Promise<GuildBan>}
   */
  remove(reason: any): Promise<GuildBan>;
  /**
   * The guild that this ban was issued in.
   * @type {?Guild}
   * @readonly
   */
  get guild(): any;
}
import Base = require("../Base/base");

export = GuildDiscovery;
/**
 * Represents a guild's discovery metadata.
 * @class
 * @extends Base
 */
declare class GuildDiscovery extends Base {
  /**
   * @constructor
   * @param {Object} data - The data for the guild discovery metadata
   * @param {Snowflake} guildId - The ID of the guild this discovery metadata belongs to
   * @param {Client} client - The instantiating client
   */
  constructor(data: Object | undefined, guildId: Snowflake, client: Client);
  /**
   * Whether or not this guild discovery object is partial.
   * @type {boolean}
   */
  partial: boolean;
  /**
   * The about section of the guild discovery.
   * @type {?string}
   */
  about: string | null;
  /**
   * The ID of the guild.
   * @type {Snowflake}
   */
  guildId: Snowflake;
  /**
   * The category IDs of the guild discovery.
   * @type {?string[]}
   */
  categoryIds: string[] | null;
  /**
   * Whether or not emoji discoverability is enabled.
   * @type {?boolean}
   */
  emojiDiscoverabilityEnabled: boolean | null;
  /**
   * Whether or not the guild discovery is published.
   * @type {?boolean}
   */
  published: boolean | null;
  /**
   * The keywords associated with the guild discovery.
   * @type {?string[]}
   */
  keywords: string[] | null;
  /**
   * The date the guild was partner actioned.
   * @type {?Date}
   */
  partnerActionedAt: Date | null;
  /**
   * The timestamp of when the guild was partner actioned.
   * @type {?number}
   */
  partnerActionedTimestamp: number | null;
  /**
   * The date the guild applied for partnership.
   * @type {?Date}
   */
  partnerApplicationAt: Date | null;
  /**
   * The timestamp of when the guild applied for partnership.
   * @type {?number}
   */
  partnerApplicationTimestamp: number | null;
  /**
   * The primary category ID of the guild discovery.
   * @type {?GuildPrimaryCategory}
   */
  primaryCategoryId: {} | null;
  /**
   * The reasons to join the guild.
   * @type {?string[]}
   */
  reasonsToJoin: string[] | null;
  /**
   * The social links associated with the guild discovery.
   * @type {?Object}
   */
  socialLinks: Object | null;
  /**
   * Returns the guild associated with this discovery metadata.
   * @returns {Guild} The guild object.
   */
  get guild(): Guild;
  /**
   * Fetches the discovery metadata for the guild.
   * @async
   * @returns {Promise<DiscoveryMetadata>} A promise that resolves with the discovery metadata object.
   */
  fetch(): Promise<DiscoveryMetadata>;
  /**
   * Fetches the discovery metadata for the guild.
   * @async
   * @returns {Promise<DiscoveryMetadata>} A promise that resolves with the discovery metadata object.
   */
  edit(options?: {}): Promise<DiscoveryMetadata>;
  /**
   * Sets whether the emoji discoverability is enabled for the guild.
   * @async
   * @param {boolean} emojiDiscoverabilityEnabled - A boolean indicating whether the emoji discoverability is enabled.
   * @returns {Promise<DiscoveryMetadata>} A promise that resolves with the updated discovery metadata object.
   */
  setEmojiDiscoverabilityEnabled(emojiDiscoverabilityEnabled: boolean): Promise<DiscoveryMetadata>;
  /**
   * Sets whether the emoji discoverability is enabled for the guild.
   * @async
   * @param {boolean} emojiDiscoverabilityEnabled - A boolean indicating whether the emoji discoverability is enabled.
   * @returns {Promise<DiscoveryMetadata>} A promise that resolves with the updated discovery metadata object.
   */
  setPublished(published: any): Promise<DiscoveryMetadata>;
  /**
   * Sets the description of the guild for the discovery page.
   * @async
   * @param {string} about - The description of the guild.
   * @returns {Promise<DiscoveryMetadata>} A promise that resolves with the updated discovery metadata object.
   */
  setAbout(about: string): Promise<DiscoveryMetadata>;
  /**
   * Sets the "Reasons to Join" section for the associated guild in the discovery settings.
   * @async
   * @param {string} reasonsToJoin - The new "Reasons to Join" section content.
   * @returns {Promise<Discovery>} The updated discovery object.
   */
  setReasonsToJoin(reasonsToJoin: string): Promise<Discovery>;
  /**
   * Sets the keywords associated with the associated guild in the discovery settings.
   * @async
   * @param {Array<string>} keywords - The new keywords.
   * @returns {Promise<Discovery>} The updated discovery object.
   */
  setKeywords(keywords: Array<string>): Promise<Discovery>;
  /**
   * Sets the keywords associated with the associated guild in the discovery settings.
   * @async
   * @param {Array<string>} keywords - The new keywords.
   * @returns {Promise<Discovery>} The updated discovery object.
   */
  setPrimaryCategoryId(primaryCategoryId: any): Promise<Discovery>;
}
import Base = require("../Base/base");

export = GuildIntegration;
/**
 * Represents a Guild Integration on Discord.
 * @class
 * @extends Base
 */
declare class GuildIntegration extends Base {
  /**
   * @constructor
   * @param {Object} data The data for the guild integration.
   * @param {Snowflake} guildId The ID of the guild this integration belongs to.
   * @param {Client} client The client that instantiated this integration.
   */
  constructor(data: Object | undefined, guildId: Snowflake, client: Client);
  partial: any;
  guildId: Snowflake;
  id: any;
  name: any;
  type: any;
  enabled: any;
  syncing: any;
  roleId: any;
  enabledEmoticons: any;
  expireBehavior: any;
  expireGracePeriod: any;
  user: any;
  account: any;
  syncedAt: Date | null;
  syncedTimestamp: number | null;
  subscriberCount: any;
  revoked: any;
  application: ClientApplication;
  /**
   * The `Guild` object corresponding to this `GuildIntegration`.
   * @type {?Guild}
   * @readonly
   */
  get guild(): any;
}
import Base = require("../Base/base");
import ClientApplication = require("./ClientApplication");

export = GuildMember;
/**
 * Represents a member of a guild.
 * @class
 * @extends Base
 */
declare class GuildMember extends Base {
  /**
   * @constructor
   * @param {Object} data - The data for the member.
   * @param {string} guildId - The ID of the guild the member belongs to.
   * @param {Client} client - The client that instantiated this member.
   */
  constructor(data: Object | undefined, guildId: string, client: Client);
  partial: any;
  banner: any;
  id: any;
  nickname: any;
  avatar: any;
  roles: GuildMemberRoleManager;
  joinedAt: Date | null;
  joinedTimestamp: number | null;
  premiumSince: Date | null;
  premiumSinceTImestamp: number | null;
  deaf: any;
  mute: any;
  pending: any;
  communicationDisabledUntil: Date | null;
  communicationDisabledUntilTimestamp: number | null;
  guildId: string;
  flags: GuildMemberFlags;
  /**
   * Checks if the member's communication is currently disabled.
   * @returns {boolean} - Whether communication is disabled.
   */
  isCommunicationDisabled(): boolean;
  /**
   * Fetches this member from the API.
   * @async
   * @param {Object} options - Optional options for the fetch.
   * @returns {Promise<GuildMember>} - The fetched member.
   */
  fetch(options: Object): Promise<GuildMember>;
  /**
   * Kicks this member from the guild.
   * @async
   * @param {string} reason - The reason for the kick.
   * @returns {Promise<GuildMember>} - The kicked member.
   */
  kick(reason: string): Promise<GuildMember>;
  /**
   * Sends a DM to this member.
   * @async
   * @param {Object} options - Options for the DM.
   * @returns {Promise<Message>} - The sent message.
   */
  send(options?: Object): Promise<Message>;
  /**
   * Bans this member from the guild.
   * @async
   * @param {Object} options - Options for the ban.
   * @returns {Promise<GuildMember>} - The banned member.
   */
  ban(options: Object): Promise<GuildMember>;
  /**
   * Edits this member.
   * @async
   * @param {Object} options - Options for the edit.
   * @returns {Promise<GuildMember>} - The edited member.
   */
  edit(options: Object): Promise<GuildMember>;
  /**
   * Sets the member's nickname.
   * @async
   * @param {string} nickname - The new nickname.
   * @param {string} reason - The reason for setting the nickname (optional).
   * @returns {Promise} A promise that resolves with the updated member object.
   */
  setNickname(nickname: string, reason: string): Promise<any>;
  /**
   * Sets whether the member is muted.
   * @async
   * @param {boolean} mute - Whether to mute the member.
   * @param {string} reason - The reason for setting the mute (optional).
   * @returns {Promise} A promise that resolves with the updated member object.
   */
  setMute(mute: boolean, reason: string): Promise<any>;
  /**
   * Sets whether the member is deafened.
   * @async
   * @param {boolean} deaf - Whether to deafen the member.
   * @param {string} reason - The reason for setting the deaf (optional).
   * @returns {Promise} A promise that resolves with the updated member object.
   */
  setDeaf(deaf: boolean, reason: string): Promise<any>;
  /**
   * Moves the member to a different voice channel.
   * @async
   * @param {ChannelResolvable} channel - The new voice channel.
   * @param {string} reason - The reason for moving the member (optional).
   * @returns {Promise} A promise that resolves with the updated member object.
   */
  setChannel(channel: ChannelResolvable, reason: string): Promise<any>;
  /**
   * Moves the member to a different voice channel.
   * @async
   * @param {ChannelResolvable} channel - The new voice channel.
   * @param {string} reason - The reason for moving the member (optional).
   * @returns {Promise} A promise that resolves with the updated member object.
   */
  setCommunicationDisabled(timeout: any, reason: string): Promise<any>;
  /**
   * The guild that the member belongs to.
   * @type {Guild|null}
   */
  get guild(): any;
  /**
   * The URL to the member's guild banner image.
   * @param {Object} options - Options for the banner URL (optional).
   * @param {boolean} options.dynamic - Whether to use the dynamic version of the banner (default: true).
   * @param {number} options.size - The size of the banner (default: 2048).
   * @param {string} options.format - The format of the banner (default: "webp").
   * @returns {string|null} The URL to the banner image, or null if the member does not have a banner.
   */
  bannerURL(options?: {dynamic: boolean; size: number; format: string}): string | null;
  /**
   * Returns the URL to the member's display avatar.
   * @param {Object} options - Options for the avatar URL (optional).
   * @param {boolean} options.dynamic - Whether to use the dynamic version of the avatar (default: true).
   * @param {number} options.size - The size of the avatar (default: 2048).
   * @param {string} options.format - The format of the avatar (default: "webp").
   * @returns {string} The URL to the display avatar.
   */
  displayAvatarURL(options?: {dynamic: boolean; size: number; format: string}): string;
  /**
   * Gets the permissions for the member in a given channel.
   * @param {ChannelResolvable} channel - The channel to get permissions for.
   * @returns {PermissionOverwrites} The resolved permissions for the member in the channel.
   * @throws {RangeError} Thrown if the channel is not cached.
   */
  permissionsIn(channel: ChannelResolvable): PermissionOverwrites;
  /**
   * Gets the voice state for the member.
   * @type {VoiceState|null}
   */
  get voice(): any;
  /**
   * Gets the presence for the member.
   * @type {Presence|null}
   */
  get presence(): any;
  /**
   * Gets the resolved permissions for the member.
   * @type {Permissions}
   */
  get permissions(): Permissions;
  /**
   * Checks if the member has a given permission.
   * @param {PermissionResolvable} perm - The permission to check for.
   * @returns {boolean} Whether the member has the permission.
   */
  permissionHas(perm: PermissionResolvable): boolean;
  /**
   * The user object for the member.
   * @type {User|null}
   */
  get user(): any;
}
import Base = require("../Base/base");
import GuildMemberRoleManager = require("../Managers/GuildMemberRoleManager");
import GuildMemberFlags = require("../Util/GuildMemberFlags");
import Permissions = require("../Util/Permissions");

export = GuildMemberVerification;
/**
 * Represents the verification requirements for a guild member.
 * @class
 * @extends Base
 */
declare class GuildMemberVerification extends Base {
  /**
   * Transforms options for a verification form field.
   * @param {Object} fields - The fields to transform.
   * @param {string} fields.type - The type of the form field.
   * @param {string} fields.label - The label for the form field.
   * @param {boolean} fields.required - Whether the field is required or not.
   * @param {Array} fields.values - The values for the field.
   * @param {Array} fields.choices - The choices for the field.
   * @returns {Object} The transformed form fields.
   */
  static transformoptions(fields?: {type: string; label: string; required: boolean; values: any[]; choices: any[]}): Object;
  /**
   * @constructor
   * @param {Object} data - The data for the verification.
   * @param {string} guildId - The ID of the guild the verification is for.
   * @param {Client} client - The client that instantiated this object.
   */
  constructor(data: Object | undefined, guildId: string, client: Client);
  version: Date | null;
  description: any;
  enabled: any;
  guildId: string;
  fields: any;
  /**
   * The guild the verification is for.
   * @type {?Guild}
   * @readonly
   */
  get guild(): any;
  /**
   * Fetches this verification's settings.
   * @param {BaseFetchOptions} [options] - Additional options for the fetch.
   * @returns {Promise<GuildMemberVerification>}
   */
  fetch(options?: any): Promise<GuildMemberVerification>;
  /**
   * Edits this verification's settings.
   * @param {GuildMemberVerificationEditOptions} [options] - The options to edit the verification.
   * @returns {Promise<GuildMemberVerification>}
   */
  edit(options?: any): Promise<GuildMemberVerification>;
  /**
   * Sets whether this verification is enabled.
   * @param {boolean} enabled - Whether the verification is enabled.
   * @param {string} [reason] - The reason for the change.
   * @returns {Promise<GuildMemberVerification>}
   */
  setEnabled(enabled: boolean, reason?: string | undefined): Promise<GuildMemberVerification>;
  /**
   * Sets the description for this verification.
   * @param {string} description - The new description for the verification.
   * @param {string} [reason] - The reason for the change.
   * @returns {Promise<GuildMemberVerification>}
   */
  setDescription(description: string, reason?: string | undefined): Promise<GuildMemberVerification>;
  /**
   * Adds new fields to this verification.
   * @param {VerificationFormFields[]} fields - The fields to add to the verification.
   * @returns {Promise<GuildMemberVerification>}
   */
  addFields(fields?: VerificationFormFields[]): Promise<GuildMemberVerification>;
  /**
   * Removes all fields from this verification.
   * @returns {Promise<GuildMemberVerification>}
   */
  removeFields(): Promise<GuildMemberVerification>;
}
import Base = require("../Base/base");
import VerificationFormFields = require("./VerificationFormFields");

export = GuildPreview;
/**
 * Represents the preview for a guild.
 * @class
 * @extends Base
 */
declare class GuildPreview extends Base {
  /**
   * @constructor
   * @param {Object} data The data for the guild preview
   * @param {Client} client The instantiating client
   */
  constructor(data: Object | undefined, client: Client);
  id: any;
  name: any;
  icon: any;
  splash: any;
  discoverySplash: any;
  createdAt: any;
  createdTimestamp: any;
  features: any;
  approximateMemberCount: any;
  approximatePresenceCount: any;
  description: any;
  emojis: GuildEmojiManager;
  /**
   * Fetches the previewed guild
   * @async
   * @returns {Promise<GuildPreview>}
   */
  fetch(): Promise<GuildPreview>;
  /**
   * Returns the URL of the guild's icon
   * @param {Object} options - Options for the icon URL
   * @param {boolean} options.dynamic - Whether the icon should be dynamically generated
   * @param {number} options.size - The size of the icon in pixels
   * @param {string} options.format - The format of the icon (e.g. "png" or "jpeg")
   * @returns {?string} The URL of the guild's icon or null if no icon is available
   */
  iconURL(options?: {dynamic: boolean; size: number; format: string}): string | null;
  /**
   * Returns the URL for the guild splash image.
   * @param {Object} [options] - Options for the splash image.
   * @param {boolean} [options.dynamic=false] - Whether to generate a dynamic or static image.
   * @param {number} [options.size] - The size of the image in pixels.
   * @param {string} [options.format] - The format of the image (e.g. "webp", "png", etc.).
   * @returns {?string} The URL for the guild splash image or null if no splash image is available.
   */
  splashURL(
    options?:
      | {
          dynamic?: boolean | undefined;
          size?: number | undefined;
          format?: string | undefined;
        }
      | undefined
  ): string | null;
  /**
   * Returns the URL for the guild discovery splash image.
   * @param {Object} [options] - Options for the discovery splash image.
   * @param {boolean} [options.dynamic=false] - Whether to generate a dynamic or static image.
   * @param {number} [options.size] - The size of the image in pixels.
   * @param {string} [options.format] - The format of the image (e.g. "webp", "png", etc.).
   * @returns {?string} The URL for the guild discovery splash image or null if no discovery splash image is available.
   */
  discoverySplashURL(
    options?:
      | {
          dynamic?: boolean | undefined;
          size?: number | undefined;
          format?: string | undefined;
        }
      | undefined
  ): string | null;
}
import Base = require("../Base/base");
import GuildEmojiManager = require("../Managers/GuildEmojiManager");

export = GuildScheduledEvent;
/**
 * Represents a scheduled event in a guild.
 * @class
 * @extends Base
 * @param {Object} [data] - The data for the scheduled event.
 * @param {string} guildId - The ID of the guild that the event belongs to.
 * @param {Client} client - The client instance.
 */
declare class GuildScheduledEvent extends Base {
  /**
   * Constructs a new GuildScheduledEvent object.
   * @constructor
   * @param {Object} [data] - The data object containing the properties of the event.
   * @param {string} guildId - The ID of the guild the event belongs to.
   * @param {Client} client - The client instance.
   * @returns {GuildScheduledEvent} - The constructed GuildScheduledEvent object.
   */
  constructor(data?: Object | undefined, guildId: string, client: Client);
  partial: any;
  id: any;
  guildId: string;
  channelId: any;
  creatorId: any;
  name: any;
  createdAt: any;
  createdTimestamp: any;
  description: any;
  scheduledStart: Date | null;
  scheduledStartTimestamp: number | null;
  scheduledEnd: Date | null;
  scheduledEndTimestamp: number | null;
  privacyLevel: any;
  status: any;
  entityType: any;
  entityId: any;
  entityMetadata: {
    location: any;
  } | null;
  userCount: any;
  image: any;
  users: GuildScheduledEventUsersManager;
  /**
   * Fetches events for the guild using the provided options.
   * @param {object} options - The options for fetching events.
   * @returns {Promise} A promise that resolves with the fetched events.
   */
  fetch(options: object): Promise<any>;
  /**
   * Edits the guild's events with the given options.
   * @param {Object} options - The options to edit the events with.
   * @returns {Promise} A promise that resolves when the events have been successfully edited.
   */
  edit(options?: Object): Promise<any>;
  /**
   * Deletes the current event from the guild's events collection.
   * @returns {Promise<void>} A promise that resolves once the event is deleted.
   */
  delete(): Promise<void>;
  /**
   * Sets the name and reason for an object.
   * @param {string} name - The new name to set.
   * @param {string} reason - The reason for setting the new name.
   * @returns {Promise} - A promise that resolves when the name and reason are successfully set.
   */
  setName(name: string, reason: string): Promise<any>;
  /**
   * Sets the description of an object and updates it with the provided reason.
   * @param {string} description - The new description to set.
   * @param {string} reason - The reason for updating the description.
   * @returns {Promise} - A promise that resolves when the description is successfully updated.
   */
  setDescription(description: string, reason: string): Promise<any>;
  /**
   * Sets the privacy level for the current user.
   * @param {string} privacyLevel - The privacy level to set.
   * @param {string} reason - The reason for setting the privacy level.
   * @returns {Promise} - A promise that resolves when the privacy level is successfully set.
   */
  setPrivacyLevel(privacyLevel: string, reason: string): Promise<any>;
  /**
   * Sets the entity type and reason for the current entity.
   * @param {string} entityType - The new entity type to set.
   * @param {string} reason - The reason for the entity type change.
   * @returns {Promise} - A promise that resolves when the entity type is successfully set.
   */
  setEntityType(entityType: string, reason: string): Promise<any>;
  /**
   * Sets the metadata of an entity with the given entityMetadata and reason.
   * @param {any} entityMetadata - The metadata to set for the entity.
   * @param {string} reason - The reason for setting the metadata.
   * @returns {Promise<void>} - A promise that resolves when the metadata is successfully set.
   */
  setEntityMetadata(entityMetadata: any, reason: string): Promise<void>;
  /**
   * Sets the image of an object and updates it with the given reason.
   * @param {any} image - The new image to set.
   * @param {string} reason - The reason for updating the image.
   * @returns {Promise<void>} - A promise that resolves when the image is set and updated.
   */
  setImage(image: any, reason: string): Promise<void>;
  /**
   * Sets the scheduled start time and reason for an event.
   * @param {Date} scheduledStartTime - The scheduled start time for the event.
   * @param {string} reason - The reason for the scheduled start time.
   * @returns {Promise} - A promise that resolves when the edit is complete.
   */
  setScheduledStartTime(scheduledStartTime: Date, reason: string): Promise<any>;
  /**
   * Sets the scheduled end time and reason for a task.
   * @param {Date} scheduledEndTime - The new scheduled end time for the task.
   * @param {string} reason - The reason for the change in scheduled end time.
   * @returns {Promise} - A promise that resolves when the edit is complete.
   */
  setScheduledEndTime(scheduledEndTime: Date, reason: string): Promise<any>;
  /**
   * Sets the status and reason of an object and returns the updated object.
   * @param {any} status - The new status value.
   * @param {any} reason - The new reason value.
   * @returns {Promise<any>} - A promise that resolves to the updated object.
   */
  setStatus(status: any, reason: any): Promise<any>;
  /**
   * Retrieves the guild associated with this guildId.
   * @returns The guild object if found, otherwise null.
   */
  get guild(): any;
  /**
   * Returns the URL of the cover image for the guild scheduled event.
   * @param {Object} options - Optional parameters for generating the URL.
   * @param {boolean} [options.dynamic] - Whether the image should be dynamically generated.
   * @param {string} [options.size] - The desired size of the image.
   * @param {string} [options.format] - The desired format of the image.
   * @returns {string | null} The URL of the cover image, or null if there is no image.
   */
  coverImageURL(options?: {dynamic?: boolean | undefined; size?: string | undefined; format?: string | undefined}): string | null;
  /**
   * Generates an invite URL for a user.
   * @returns {string} The invite URL.
   */
  inviteURL(): string;
  /**
   * Retrieves the creator of this object.
   * @returns The user object representing the creator, or null if the creator is not found.
   */
  get creator(): any;
}
import Base = require("../Base/base");
import GuildScheduledEventUsersManager = require("../Managers/GuildScheduledEventUsersManager");

export = GuildScheduledEventUser;
/**
 * Represents a user associated with a scheduled event in a guild.
 * @class
 * @extends Base
 * @param {Object} [data] - The data object containing information about the user.
 * @param {string} guildId - The ID of the guild the user belongs to.
 * @param {string} eventId - The ID of the scheduled event the user is associated with.
 * @param {Client} client - The client instance.
 */
declare class GuildScheduledEventUser extends Base {
  /**
   * Constructs a new instance of the Event class.
   * @constructor
   * @param {Object} [data] - The data object containing information about the event.
   * @param {string} guildId - The ID of the guild associated with the event.
   * @param {string} eventId - The ID of the scheduled event.
   * @param {Client} client - The client instance.
   */
  constructor(data?: Object | undefined, guildId: string, eventId: string, client: Client);
  partial: any;
  user: any;
  guildId: string;
  member: any;
  guildScheduledEventId: string;
  /**
   * Retrieves the guild associated with this guildId.
   * @returns The guild object if found, otherwise null.
   */
  get guild(): any;
  /**
   * Retrieves the scheduled event associated with the guild.
   * @returns {ScheduledEvent | null} The scheduled event object if found, otherwise null.
   */
  get guildScheduledEvent(): any;
}
import Base = require("../Base/base");

export = GuildTemplate;
/**
 * Represents a guild template.
 * @class
 * @extends Base
 * @param {Object} [data] - The data for the guild template.
 * @param {Client} client - The client instance.
 */
declare class GuildTemplate extends Base {
  /**
   * Constructs a new instance of a data object.
   * @constructor
   * @param {Object} [data] - The data object containing the properties of the instance.
   * @param {Client} client - The client object.
   */
  constructor(data?: Object | undefined, client: Client);
  partial: any;
  code: any;
  name: any;
  description: any;
  usageCount: any;
  creatorId: any;
  creator: any;
  createdAt: Date | null;
  createdTimestamp: number | null;
  updatedAt: Date | null;
  updatedTimestamp: number | null;
  sourceGuildId: any;
  serializedSourceGuild: APIGuild | null;
  dirty: any;
  url: string;
  /**
   * Fetches a guild template using the provided code.
   * @returns {Promise} A promise that resolves to the fetched guild template.
   */
  fetch(): Promise<any>;
  /**
   * Synchronizes the guild templates with the provided code.
   * @returns {Promise<void>} - A promise that resolves when the synchronization is complete.
   */
  sync(): Promise<void>;
  /**
   * Edits the guild template with the provided options.
   * @param {Object} options - The options to apply to the template edit.
   * @returns {Promise} A promise that resolves to the result of the template edit.
   */
  edit(options?: Object): Promise<any>;
  /**
   * Deletes the template with the specified code from the guild.
   * @returns {Promise<void>} A promise that resolves when the template is successfully deleted.
   */
  delete(): Promise<void>;
  /**
   * Sets the name of an object asynchronously.
   * @param {string} name - The new name to set.
   * @returns {Promise} A promise that resolves when the name is successfully set.
   */
  setName(name: string): Promise<any>;
  /**
   * Sets the description of an object and updates it.
   * @param {string} description - The new description to set.
   * @returns {Promise} - A promise that resolves when the description is successfully updated.
   */
  setDescription(description: string): Promise<any>;
  /**
   * Get the guild object associated with this guild ID.
   * @returns The guild object.
   */
  get guild(): any;
  /**
   * Creates a new guild using the provided options.
   * @param {Object} options - The options for creating the guild.
   * @returns {Promise} A promise that resolves to the generated template for the guild.
   */
  createGuild(options?: Object): Promise<any>;
}
import Base = require("../Base/base");
import APIGuild = require("./Misc/APIGuild");

export = GuildVanity;
/**
 * Represents a Guild Vanity URL.
 * @class
 * @extends Base
 */
declare class GuildVanity extends Base {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Object} [data] - The data object containing the initial values for the instance.
   * @param {string} guildId - The ID of the guild.
   * @param {Client} client - The client instance.
   */
  constructor(data?: Object | undefined, guildId: string, client: Client);
  guildId: string;
  code: any;
  uses: any;
  /**
   * Get the guild object associated with this guildId.
   * @returns The guild object.
   */
  get guild(): any;
}
import Base = require("../Base/base");

export = GuildWidget;
/**
 * Represents a guild widget.
 * @class
 * @extends Base
 * @param {Object} [data] - The data object containing guild widget information.
 * @param {string} guildId - The ID of the guild.
 * @param {Client} client - The client instance.
 */
declare class GuildWidget extends Base {
  /**
   * Constructs a new instance of the Guild class.
   * @constructor
   * @param {Object} [data] - The data object containing guild information.
   * @param {string} guildId - The ID of the guild.
   * @param {Client} client - The client instance.
   */
  constructor(data?: Object | undefined, guildId: string, client: Client);
  id: any;
  name: any;
  instantInvite: any;
  channels: RaidenCol;
  members: RaidenCol;
  presenceCount: any;
  /**
   * Fetches the settings for the guild's widgets.
   * @returns {Promise} A promise that resolves to the fetched settings.
   */
  fetchSettings(): Promise<any>;
  /**
   * Retrieves the guild associated with this object.
   * @returns {Guild | null} The guild object if found, otherwise null.
   */
  get guild(): any;
}
import Base = require("../Base/base");
import {RaidenCol} from "../Util/@Collections/RaidenCol";

export = GuildWidgetSettings;
/**
 * Represents the settings for a guild widget.
 * @class
 * @extends Base
 * @param {Object} [data] - The data for the guild widget settings.
 * @param {string} guildId - The ID of the guild.
 * @param {Client} client - The client instance.
 */
declare class GuildWidgetSettings extends Base {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Object} [data] - The data object containing the initial values.
   * @param {string} guildId - The ID of the guild.
   * @param {Client} client - The client instance.
   */
  constructor(data?: Object | undefined, guildId: string, client: Client);
  guildId: string;
  enabled: any;
  channelId: any;
  /**
   * Edits the guild's widget with the given options.
   * @param {Object} options - The options to edit the widget with.
   * @returns {Promise} A promise that resolves when the widget is successfully edited.
   */
  edit(options?: Object): Promise<any>;
  /**
   * Sets the enabled status of an item and provides a reason for the change.
   * @param {boolean} enabled - The new enabled status of the item.
   * @param {string} reason - The reason for the change in enabled status.
   * @returns {Promise} - A promise that resolves when the edit is complete.
   */
  setEnabled(enabled: boolean, reason: string): Promise<any>;
  /**
   * Sets the channel for the current object and updates it with the given reason.
   * @param {Channel} channel - The channel to set.
   * @param {string} reason - The reason for setting the channel.
   * @returns {Promise<void>} - A promise that resolves when the channel is successfully set.
   */
  setChannel(channel: Channel, reason: string): Promise<void>;
  /**
   * Retrieves the guild associated with this guildId.
   * @returns The guild object if found, otherwise null.
   */
  get guild(): any;
  /**
   * Retrieves the channel object associated with this instance.
   * @returns {Channel | null} The channel object, or null if it does not exist.
   */
  get channel(): any;
}
import Base = require("../Base/base");

export = Interaction;
/**
 * Represents an interaction with a user in a Discord server.
 * @class
 * @extends Base
 * @param {Object} data - The data object containing information about the interaction.
 * @param {string} guildId - The ID of the guild where the interaction occurred.
 * @param {Client} client - The client instance.
 */
declare class Interaction extends Base {
  /**
   * Constructs a new instance of the Interaction class.
   * @constructor
   * @param {Object} [data] - The data object containing information about the interaction.
   * @param {string} guildId - The ID of the guild the interaction belongs to.
   * @param {Client} client - The client instance.
   */
  constructor(data?: Object | undefined, guildId: string, client: Client);
  type: any;
  id: any;
  token: any;
  applicationId: any;
  channelId: any;
  channel: any;
  locale: any;
  guildLocale: any;
  version: any;
  guildId: string;
  member: any;
  createdAt: Date | null;
  createdTimestamp: number | null;
  editedAt: Date | null;
  editedTimestamp: number | null;
  appPermissions: Readonly<Permissions>;
  /**
   * Checks if the command type is a chat input.
   * @returns {boolean} - true if the command type is a chat input, false otherwise.
   */
  isChatInput(): boolean;
  /**
   * Checks if the current object is a command.
   * @returns {boolean} - true if the object is a command, false otherwise.
   */
  isCommand(): boolean;
  /**
   * Checks if the command type is "User" or 2.
   * @returns {boolean} - true if the command type is "User" or 2, false otherwise.
   */
  isUser(): boolean;
  /**
   * Checks if the command type is "Message" or 3.
   * @returns {boolean} - true if the command type is "Message" or 3, false otherwise.
   */
  isMessage(): boolean;
  /**
   * Checks if the component type is a button.
   * @returns {boolean} - true if the component type is a button, false otherwise.
   */
  isButton(): boolean;
  /**
   * Checks if the current instance is a modal.
   * @returns {boolean} - Returns true if the instance is a modal, false otherwise.
   */
  isModal(): boolean;
  /**
   * Checks if the current object is an autocomplete.
   * @returns {boolean} - True if the object is an autocomplete, false otherwise.
   */
  isAutocomplete(): boolean;
  /**
   * Checks if the component type is a select menu.
   * @returns {boolean} - true if the component type is a select menu, false otherwise.
   */
  isSelect(): boolean;
  /**
   * Checks if the current context is valid for the given command type.
   * @returns {boolean} - true if the context is valid, false otherwise.
   */
  isContext(): boolean;
  /**
   * Checks if the current channel is a direct message (DM) channel.
   * @returns {boolean} - True if the channel is a DM channel, false otherwise.
   */
  isDM(): boolean;
  /**
   * Retrieves the value associated with the given name from the options list.
   * @param {string} name - The name of the option to retrieve the value for.
   * @returns The value associated with the given name.
   */
  getValue(name: string): any;
  /**
   * Fetches the reply message from the Discord API using the provided webhook information.
   * @returns {Promise<Message>} A promise that resolves to the fetched reply message.
   */
  fetchReply(): Promise<Message>;
  /**
   * Sends a reply to an interaction with the provided data.
   * @param {Object} data - The data to send as the reply.
   * @returns {Promise<Message|null>} - A promise that resolves to the sent message, or null if fetchReply is false.
   */
  reply(data: Object): Promise<Message | null>;
  /**
   * Sends a deferred reply to an interaction.
   * @param {Object} options - The options for creating the message payload.
   * @returns {Promise} A promise that resolves when the reply is sent.
   */
  deferReply(options?: Object): Promise<any>;
  /**
   * Submits a modal form by sending a POST request to the specified endpoint.
   * @param {Object} options - The options for the modal form submission.
   * @returns {Promise} A promise that resolves when the form submission is complete.
   */
  modalSubmit(options?: Object): Promise<any>;
  /**
   * Deletes the reply message associated with the current interaction.
   * @returns {Promise<Message>} A promise that resolves to the deleted message.
   */
  deleteReply(): Promise<Message>;
  /**
   * Edits the reply message of a webhook interaction.
   * @param {Object} options - The options for editing the reply message.
   * @returns {Promise<Message>} A promise that resolves with the edited message.
   */
  editReply(options: Object): Promise<Message>;
  /**
   * Sends a follow-up message using the provided options.
   * @param {object} options - The options for the follow-up message.
   * @returns {Promise<Message>} A promise that resolves to the sent message.
   * @throws {Error} If there was an error sending the follow-up message.
   */
  followUp(options: object): Promise<Message>;
  /**
   * Retrieves the guild associated with this guildId.
   * @returns The guild object if found, otherwise null.
   */
  get guild(): any;
  /**
   * Get the user associated with this instance.
   * @returns {User | null} The user object, or null if it is not available.
   */
  get user(): any;
}
import Base = require("../Base/base");
import Permissions = require("../Util/Permissions");

export = InteractionWebhook;
/**
 * Represents an interaction webhook.
 * @class
 * @extends WebhookClient
 * @param {Object} [data] - The data for the interaction webhook.
 * @param {Client} [client] - The client associated with the interaction webhook.
 */
declare class InteractionWebhook extends WebhookClient {}
import WebhookClient = require("./WebhookClient");

export = Slash;
/**
 * Represents a Slash command.
 * @class
 * @extends Base
 * @param {Object} [data] - The data object containing information about the Slash command.
 * @param {Client} client - The client object.
 * @property {string} type - The type of the Slash command.
 * @property {string} name - The name of the Slash command.
 * @property {string} description - The description of the Slash command.
 * @property {Array<SlashOption>} options - The options of the Slash command.
 * @property {boolean} defaultMemberPermissions - The default member permissions of the Slash command.
 */
declare class Slash extends Base {
  /**
   * Constructs a new instance of the ApplicationCommand class
   * @constructor.
   * @param {Object} [data] - The data object containing the command information.
   * @param {Client} client - The client object.
   */
  constructor(data?: Object | undefined, client: Client);
  type: any;
  name: any;
  description: any;
  options: any;
  defaultMemberPermissions: any;
}
import Base = require("../../Base/base");

export = SlashOption;
/**
 * Represents a slash command option.
 * @class
 * @extends Base
 * @param {Object} [data] - The data object containing the option properties.
 * @param {Client} client - The client object.
 * @property {string} type - The type of the option.
 * @property {string} name - The name of the option.
 * @property {string} description - The description of the option.
 * @property {boolean} required - Whether the option is required or not.
 * @property {Array<Object>} choices - The choices available for the option.
 * @property {Array<string>} channelTypes - The types of channels the option can be used in.
 * @property {number} minValue
 */
declare class SlashOption extends Base {
  /**
   * Transforms an object into a new object with the properties "name" and "value".
   * If the original object does not have a "name" or "value" property, the corresponding
   * property in the new object will be set to undefined.
   * @param {Object} o - The original object to transform.
   * @returns {Object} - The transformed object with "name" and "value" properties.
   */
  static transformChoices(o?: Object): Object;
  /**
   * Transforms the channel type from a number to its corresponding string representation.
   * @param {number | object} channel - The channel type to transform. If it is a number, it will be converted to its string representation. If it is an object, it will be returned as is.
   * @returns {string | object} - The transformed channel type.
   */
  static transformChannelTypes(channel?: number | object): string | object;
  /**
   * Constructs a new instance of the SlashOption class.
   * @constructor
   * @param {Object} [data] - The data object containing the properties of the SlashOption.
   * @param {Client} client - The client object.
   */
  constructor(data?: Object | undefined, client: Client);
  type: any;
  name: any;
  description: any;
  required: any;
  choices: any;
  channelTypes: any;
  minValue: any;
  maxValue: any;
  minLength: any;
  maxLength: any;
  autocomplete: any;
  options: RaidenCol;
}
import Base = require("../../Base/base");
import {RaidenCol} from "../../Util/@Collections/RaidenCol";

export = SlashSubCommand;
/**
 * Represents a sub-command for a slash command.
 * @class
 * @extends Base
 * @param {Object} [data] - The data for the sub-command.
 * @param {Client} client - The client object.
 * @property {string} type - The type of the sub-command.
 * @property {string | undefined} name - The name of the sub-command.
 * @property {string | undefined} description - The description of the sub-command.
 * @property {RaidenCol} options - The options for the sub-command.
 */
declare class SlashSubCommand extends Base {
  /**
   * Constructs a new Sub_Command object.
   * @constructor
   * @param {Object} [data] - The data object containing the properties of the Sub_Command.
   * @param {Client} client - The client object.
   */
  constructor(data?: Object | undefined, client: Client);
  type: string;
  name: any;
  description: any;
  options: RaidenCol;
}
import Base = require("../../Base/base");
import {RaidenCol} from "../../Util/@Collections/RaidenCol";

export = SlashSubCommandGroups;
/**
 * Represents a sub-command group for a slash command.
 * @class
 * @extends Base
 * @param {Object} [data] - The data for the sub-command group.
 * @param {Client} client - The client object.
 */
declare class SlashSubCommandGroups extends Base {
  /**
   * Constructs a new instance of the Sub_Command_Group class.
   * @constructor
   * @param {Object} [data] - The data object containing the properties for the group.
   * @param {Client} client - The client object.
   */
  constructor(data?: Object | undefined, client: Client);
  type: string;
  name: any;
  description: any;
  options: RaidenCol;
}
import Base = require("../../Base/base");
import {RaidenCol} from "../../Util/@Collections/RaidenCol";

export = TextBasedChannels;
declare class TextBasedChannels extends Channel {
  rateLimitPerUser: any;
  lastPinnedAt: Date | null;
  lastPinnedTimestamp: number | null;
  lastMessageId: any;
  nsfw: any;
  /**
   * Get the message manager for this channel.
   * @returns {MessageManager} The message manager object for this channel.
   */
  get messages(): MessageManager;
  /**
   * Sends a message using the specified options.
   * @param {object} options - The options for sending the message.
   * @returns {Promise} A promise that resolves when the message is sent.
   */
  send(options: object): Promise<any>;
  /**
   * Bulk deletes the specified messages from the channel.
   * @param {Array<Message>} messages - The messages to delete.
   * @param {string} reason - The reason for deleting the messages.
   * @returns {Promise<void>} A promise that resolves when the messages are deleted.
   */
  bulkDelete(messages: Array<Message>, reason: string): Promise<void>;
  /**
   * Sets the NSFW (Not Safe for Work) flag for the current item.
   * @param {boolean} nsfw - The NSFW flag value to set.
   * @param {string} reason - The reason for setting the NSFW flag.
   * @returns {Promise} - A promise that resolves when the NSFW flag is successfully set.
   */
  setNsfw(nsfw: boolean, reason: string): Promise<any>;
  /**
   * Sets the rate limit per user for a specific action.
   * @param {number} ratelimit - The new rate limit value to set.
   * @param {string} reason - The reason for setting the rate limit.
   * @returns {Promise} - A promise that resolves when the rate limit is successfully set.
   */
  setRateLimitPerUser(ratelimit: number, reason: string): Promise<any>;
  /**
   * Triggers a typing indicator in the channel where this method is called.
   * @returns {Promise<void>} - A promise that resolves when the typing indicator is triggered.
   */
  triggerTyping(): Promise<void>;
}
import Channel = require("../Channel");
import MessageManager = require("../../Managers/MessageManager");

export = VoiceBasedChannels;
/**
 * Represents a voice-based channel in a guild.
 * @class
 * @extends Channel
 */
declare class VoiceBasedChannels extends Channel {
  /**
   * Constructs a new instance of a class, extending the base class.
   * @constructor
   * @param {Object} [data] - The data object to initialize the instance with.
   * @param {string} guildId - The ID of the guild associated with the instance.
   * @param {Object} client - The client object associated with the instance.
   */
  constructor(data?: Object | undefined, guildId: string, client: Object);
  userLimit: any;
  bitrate: any;
  rtcRegion: any;
  videoQualityMode: any;
  /**
   * Joins the voice channel associated with this VoiceConnection.
   * @param {Object} [options] - Optional parameters for joining the voice channel.
   * @param {boolean} [options.selfMute=false] - Whether to mute the user's own audio.
   * @param {boolean} [options.selfDeaf=false] - Whether to deafen the user's own audio.
   * @returns {VoiceConnection} - The VoiceConnection instance.
   */
  join(
    options?:
      | {
          selfMute?: boolean | undefined;
          selfDeaf?: boolean | undefined;
        }
      | undefined
  ): VoiceConnection;
  /**
   * Disconnects the voice connection by sending a voice state update to the server with a null channel ID.
   * @returns {this} - Returns the current instance of the class.
   */
  disconnect(): this;
  /**
   * Sets the RTC (Real-Time Communication) region for the object.
   * @param {string} rtcRegion - The RTC region to set.
   * @param {string} reason - The reason for setting the RTC region.
   * @returns {Promise} - A promise that resolves when the RTC region is successfully set.
   */
  setRtcRegion(rtcRegion: string, reason: string): Promise<any>;
  /**
   * Sets the bitrate of the current object.
   * @param {number} bitrate - The new bitrate value to set.
   * @param {string} reason - The reason for setting the bitrate.
   * @returns {Promise} - A promise that resolves when the bitrate is successfully set.
   */
  setBitrate(bitrate: number, reason: string): Promise<any>;
  /**
   * Retrieves the members in the voice channel associated with the current guild.
   * @returns {Collection<Snowflake, GuildMember> | null} - A collection of guild members in the voice channel, or null if no members are found.
   */
  get members(): any;
}
import Channel = require("../Channel");

export = Invite;
/**
 * Represents an invite to a guild.
 * @class
 * @extends Base
 * @param {Object} [data] - The data for the invite.
 * @param {Guild} guild - The guild that the invite belongs to.
 * @param {Client} client - The client instance.
 */
declare class Invite extends Base {
  /**
   * Constructs a new instance of the Invite class.
   * @constructor
   * @param {Object} [data] - The data object containing the invite information.
   * @param {Guild} guild - The guild associated with the invite.
   * @param {Client} client - The client instance.
   */
  constructor(data?: Object | undefined, guild: Guild, client: Client);
  partial: any;
  code: any;
  guild: any;
  channel: any;
  inviter: any;
  targetType: any;
  targetUser: any;
  targetApplication: ClientApplication | null;
  approximatePresenceCount: any;
  approximateMemberCount: any;
  expiresAt: Date | null;
  expiresTimestamp: number | null;
  uses: any;
  maxUses: any;
  maxAge: any;
  temporary: any;
  createdAt: Date | null;
  createdTimestamp: number | null;
  url: string;
  /**
   * Fetches an invite using the provided options.
   * @param {object} options - The options for fetching the invite.
   * @returns {Promise} A promise that resolves to the fetched invite.
   */
  fetch(options: object): Promise<any>;
  /**
   * Deletes the invite associated with the guild.
   * @param {string} reason - The reason for deleting the invite.
   * @returns {Promise<void>} - A promise that resolves when the invite is deleted.
   */
  delete(reason: string): Promise<void>;
}
import Base = require("../Base/base");
import ClientApplication = require("./ClientApplication");

export = Message;
/**
 * Represents a message in a chat channel.
 * @class
 * @extends Base
 * @param {Object} data - The data object containing information about the message.
 * @param {string} guildId - The ID of the guild the message belongs to.
 * @param {string} channelId - The ID of the channel the message belongs to.
 * @param {Client} client - The client instance.
 */
declare class Message extends Base {
  /**
   * Constructs a new instance of the Message class.
   * @constructor
   * @param {Object} [data] - The data object containing the message information.
   * @param {string} guildId - The ID of the guild the message belongs to.
   * @param {string} channelId - The ID of the channel the message belongs to.
   * @param {Client} client - The client instance.
   */
  constructor(data?: Object | undefined, guildId: string, channelId: string, client: Client);
  partial: any;
  type: any;
  id: any;
  channelId: string;
  guildId: string;
  member: any;
  content: any;
  createdAt: Date | null;
  createdTimestamp: number | null;
  editedAt: Date | null;
  editedTimestamp: number | null;
  tts: any;
  nonce: any;
  reference: MessageReference | null;
  embeds: any;
  components: any;
  flags: MessageFlags;
  attachments: RaidenCol;
  stickers: RaidenCol;
  reactions: ReactionManager;
  thread: any;
  mentions: MessageMentions;
  /**
   * Retrieves the channel associated with this object.
   * @returns The channel object if found, otherwise null.
   */
  get channel(): any;
  /**
   * Retrieves the guild associated with this guildId from the client's guild cache.
   * @returns The guild object if found, otherwise null.
   */
  get guild(): any;
  /**
   * Edits the message with the given options.
   * @param {Object} options - The options to edit the message with.
   * @returns {Promise} A promise that resolves when the message has been edited.
   */
  edit(options: Object): Promise<any>;
  /**
   * Deletes the message from the channel.
   * @param {string} reason - The reason for deleting the message.
   * @returns {Promise} A promise that resolves when the message is successfully deleted.
   */
  delete(reason: string): Promise<any>;
  /**
   * Fetches messages from the channel using the given options.
   * @param {Object} [options] - The options to customize the fetch request.
   * @returns {Promise} - A promise that resolves with the fetched messages.
   */
  fetch(options?: Object | undefined): Promise<any>;
  /**
   * Crossposts a message to another channel.
   * @returns {Promise<void>} - A promise that resolves when the crossposting is complete.
   */
  crosspost(): Promise<void>;
  /**
   * Reacts to a message with the specified emoji.
   * @param {string} emoji - The emoji to react with.
   * @returns {Promise<void>} - A promise that resolves when the reaction is added.
   */
  react(emoji: string): Promise<void>;
  /**
   * Removes embeds from a message.
   * @returns {Promise<void>} - A promise that resolves when the embeds are successfully removed.
   */
  removeEmbeds(): Promise<void>;
  /**
   * Removes all attachments from the message.
   * @throws {RangeError} If there are no attachments in the message.
   * @returns {Promise<void>} A promise that resolves when the attachments are successfully removed.
   */
  removeAttachments(): Promise<void>;
  /**
   * Removes the specified attachment from the message. If no attachment is provided,
   * all attachments will be removed.
   * @param {string | Attachment} attachment - The attachment or attachment ID to remove.
   * @returns {Promise<void>} - A promise that resolves once the attachment is removed.
   * @throws {RangeError} - If the message does not have the specified attachment.
   */
  removeAttachment(attachment: string | Attachment): Promise<void>;
  /**
   * Sends a reply message to the channel where the original message was received.
   * @param {Object} options - Additional options for the reply message.
   * @returns {Promise<Message>} - A promise that resolves to the sent message.
   */
  reply(options?: Object): Promise<Message>;
  /**
   * Fetches the reference message from the channel.
   * @returns {Promise<Message>} A promise that resolves to the reference message.
   */
  fetchReference(): Promise<Message>;
  /**
   * Pins the current message to the channel.
   * @param {string} reason - The reason for pinning the message.
   * @returns {Promise} - A promise that resolves when the message is successfully pinned.
   */
  pin(reason: string): Promise<any>;
  /**
   * Unpins the current message from the channel.
   * @param {string} reason - The reason for unpinning the message.
   * @returns {Promise} - A promise that resolves when the message is successfully unpinned.
   */
  unpin(reason: string): Promise<any>;
  /**
   * Get the system value based on the type of the object.
   * @returns {boolean | null} - The system value. Returns null if the type is not set.
   */
  get system(): boolean | null;
  /**
   * Checks if the current context is within a guild.
   * @returns {boolean} - True if the context is within a guild, false otherwise.
   */
  inGuild(): boolean;
  /**
   * Checks if the given object is equal to this Message object.
   * @param {Object} message - The object to compare with this Message object.
   * @returns {boolean|null} - Returns true if the objects are equal, false if they are not equal, and null if the given object is not an instance of Message.
   */
  equals(message: Object): boolean | null;
  /**
   * Get the author of this object.
   * @returns The author of this object.
   */
  get author(): any;
  /**
   * Creates a new thread in a channel.
   * @param {Object} [options] - The options for creating the thread.
   * @param {string} [options.reason] - The reason for creating the thread.
   * @param {string} [options.name] - The name of the thread.
   * @param {number} [options.autoArchiveDuration] - The duration in minutes to automatically archive the thread.
   * @param {number} [options.ratelimit] - The rate limit per user in the thread.
   * @returns {Promise<Thread>} A promise that resolves with the created thread.
   */
  createThread(
    options?:
      | {
          reason?: string | undefined;
          name?: string | undefined;
          autoArchiveDuration?: number | undefined;
          ratelimit?: number | undefined;
        }
      | undefined
  ): Promise<Thread>;
  /**
   * Adds attachments to the message.
   * @param {Array} attachments - An array of attachment objects to add to the message.
   * @returns {Promise} - A promise that resolves when the attachments have been added.
   * @throws {RangeError} - If the message has no attachments or if one of the specified attachments already exists.
   */
  addAttachments(attachments?: any[]): Promise<any>;
}
import Base = require("../Base/base");
import MessageReference = require("./MessageReference");
import MessageFlags = require("../Util/MessageFlags");
import {RaidenCol} from "../Util/@Collections/RaidenCol";
import ReactionManager = require("../Managers/ReactionManager");
import MessageMentions = require("./MessageMentions");

export = MessageComponentInteraction;
/**
 * Represents a message component interaction.
 * @class
 * @extends Interaction
 */
declare class MessageComponentInteraction extends Interaction {
  componentType: any;
  customId: any;
  message: any;
  /**
   * Defers the update of an interaction callback and sends a response to the interaction.
   * @param {Object} options - Additional options for the deferred update.
   * @returns {Promise} A promise that resolves when the update is deferred and the response is sent.
   */
  deferUpdate(options?: Object): Promise<any>;
  /**
   * Updates the interaction with the specified options.
   * @param {Object} [options] - The options to update the interaction.
   * @returns {Promise<null|Message>} - A promise that resolves to null or a Message object.
   * @throws {Error} - If there is an error while updating the interaction.
   */
  update(options?: Object | undefined): Promise<null | Message>;
}
import Interaction = require("./Interaction");

export = MessageMentions;
/**
 * Represents a message mention object.
 * @class
 * @extends Base
 * @param {Object} [data] - The data for the message mention object.
 * @param {string} guildId - The ID of the guild the mention is in.
 * @param {Client} client - The client instance.
 */
declare class MessageMentions extends Base {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Object} [data] - The data object containing the initial values.
   * @param {string} guildId - The ID of the guild.
   * @param {Client} client - The client instance.
   */
  constructor(data?: Object | undefined, guildId: string, client: Client);
  guildId: string;
  users: RaidenCol;
  members: RaidenCol;
  roles: RaidenCol;
  channels: RaidenCol;
  everyone: any;
  /**
   * Get the guild object associated with this guildId.
   * @returns The guild object.
   */
  get guild(): any;
}
import Base = require("../Base/base");
import {RaidenCol} from "../Util/@Collections/RaidenCol";

export = MessageReaction;
/**
 * Represents a message reaction.
 * @class
 * @extends Base
 * @param {Object} [data] - The data for the message reaction.
 * @param {string} guildId - The ID of the guild the reaction belongs to.
 * @param {string} channelId - The ID of the channel the reaction belongs to.
 * @param {string} messageId - The ID of the message the reaction belongs to.
 * @param {Client} client - The client instance.
 */
declare class MessageReaction extends Base {
  /**
   * Constructs a Reaction object.
   * @constructor
   * @param {Object} [data] - The data object containing information about the reaction.
   * @param {string} guildId - The ID of the guild where the reaction occurred.
   * @param {string} channelId - The ID of the channel where the reaction occurred.
   * @param {string} messageId - The ID of the message where the reaction occurred.
   * @param {Client} client - The client instance.
   */
  constructor(data?: Object | undefined, guildId: string, channelId: string, messageId: string, client: Client);
  partial: any;
  guildId: string;
  channelId: string;
  count: any;
  me: any;
  emoji: Emoji;
  message: any;
  users: ReactionUserManager;
  /**
   * Fetches a message from a channel and retrieves a reaction associated with it.
   * @returns {Promise<Reaction | null>} A Promise that resolves to the Reaction object if found, or null if not found.
   */
  fetch(): Promise<Reaction | null>;
  /**
   * Removes the reaction associated with this message.
   * @async
   * @returns {Promise<this>} - A promise that resolves to the current instance of the class.
   */
  remove(): Promise<this>;
  /**
   * Retrieves the channel object associated with this instance.
   * @returns The channel object.
   */
  get channel(): any;
  /**
   * Get the guild associated with this channel.
   * @returns The guild object associated with this channel.
   */
  get guild(): any;
  /**
   * Adds a user to the list of users.
   * @param {User} user - The user to add.
   * @returns {void}
   */
  _addUsers(user: User): void;
  /**
   * Removes a user from the list of users.
   * @param {User} user - The user to remove.
   * @returns {void}
   */
  _removeUsers(user: User): void;
}
import Base = require("../Base/base");
import Emoji = require("./Emoji");
import ReactionUserManager = require("../Managers/ReactionUserManager");

export = MessageReference;
/**
 * Represents a reference to a message.
 * @class
 * @extends Base
 */
declare class MessageReference extends Base {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Object} [data] - The data object containing the properties for the instance.
   * @param {Client} client - The client object associated with the instance.
   * @property {string|null} messageId - The ID of the message.
   * @property {string|null} channelId - The ID of the channel.
   * @property {string|null} guildId - The ID of the guild.
   * @property {boolean|null} failIfNotExists - Indicates whether to fail if the entity does not exist.
   */
  constructor(data?: Object | undefined, client: Client);
  messageId: any;
  channelid: any;
  guildId: any;
  failIfNotExists: any;
  /**
   * Converts the current object to a JSON representation.
   * @returns {Object} - The JSON representation of the object.
   */
  toJSON(): Object;
}
import Base = require("../Base/base");

export = APIGuild;
/**
 * Represents a guild in the API.
 * @class
 * @extends Base
 * @param {Object} [data] - The data object containing guild information.
 * @param {Client} client - The client instance.
 * @property {string | null} name - The name of the guild.
 * @property {string | null} description - The description of the guild.
 * @property {string | null} region - The region of the guild.
 * @property {VerificationLevel | null} verificationLevel - The verification level of the guild.
 * @property {DefaultMessageNotifications | null} defaultMessageNotifications - The default message notifications setting of the guild.
 * @property {ExplicitContentFilter | null} explicitContentFilter
 */
declare class APIGuild extends Base {
  /**
   * It takes in a data object and a client, and then sets the properties of the class to the values of
   * the data object
   * @constructor
   * @param {Object} [data] - The data object containing the properties for the instance.
   * @param {Client} client - The client object associated with the instance.
   */
  constructor(data?: Object | undefined, client: Client);
  name: any;
  description: any;
  region: any;
  verificationlevel: any;
  defaultMessageNotifications: any;
  explicitContentFilter: any;
  preferredLocale: any;
  afkTimeout: any;
  roles: RaidenCol;
  channels: RaidenCol;
  afkChannelId: any;
  systemChannelId: any;
  systemChannelFlags: SystemChannelFlags;
}
import Base = require("../../Base/base");
import {RaidenCol} from "../../Util/@Collections/RaidenCol";
import SystemChannelFlags = require("../../Util/SystemChannelFlags");

export = ModalInteraction;
/**
 * Represents a modal interaction, extending the MessageComponentInteraction class.
 * @class
 * @extends MessageComponentInteraction
 * @constructor
 * @param {Object} [data] - The data object for the interaction.
 * @param {string} guildId - The ID of the guild where the interaction occurred.
 * @param {Client} client - The client instance.
 */
declare class ModalInteraction extends MessageComponentInteraction {
  /**
   * Transforms the resolved fields object by converting the "type" property from a number to its corresponding string value from the ComponentType enum.
   * Also, maps the "components" array and transforms each object by converting the "type" property from a number to its corresponding string value from the ComponentType enum.
   * @param {Object} fields - The resolved fields object to transform.
   * @returns {Object} - The transformed fields object.
   */
  static transformResolvedFields(fields?: Object): Object;
  componentType: string;
  fields: any;
  /**
   * Retrieves the value of a text input field with the specified custom ID.
   * @param {string} customId - The custom ID of the text input field.
   * @param {boolean} [required=false] - Indicates whether the text input field is required. If set to true and the field is not found, a RangeError will be thrown.
   * @returns {string|null} The value of the text input field, or null if the field is not found and not required.
   * @throws {RangeError} If the specified custom ID is not found or if the field is not of type "Input_Text".
   */
  getTextInput(customId: string, required?: boolean | undefined): string | null;
  /**
   * Retrieves the values of a Select component with the specified custom ID.
   * @param {string} customId - The custom ID of the Select component.
   * @param {boolean} [required=false] - Indicates whether the Select component is required.
   * @returns {string[] | null} - The values of the Select component, or null if not found and not required.
   * @throws {RangeError} - If the Select component is not found and is required, or if the mode type selected is not String_Select.
   */
  getSelect(customId: string, required?: boolean | undefined): string[] | null;
}
import MessageComponentInteraction = require("./MessageComponentInteraction");

export = NewsChannel;
/**
 * Represents a news channel in a guild.
 * @class
 * @extends BaseGuildChannel
 */
declare class NewsChannel extends BaseGuildChannel {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Object} [data] - The data object to initialize the instance with.
   * @param {string} guildId - The ID of the guild associated with the instance.
   * @param {Client} client - The client instance associated with the instance.
   */
  constructor(data?: Object | undefined, guildId: string, client: Client);
  /**
   * Follows the channel using the specified options.
   * @param {Object} options - The options for following the channel.
   * @returns {Promise} A promise that resolves when the channel is successfully followed.
   */
  follow(options?: Object): Promise<any>;
  /**
   * Crossposts a message to another channel.
   * @param {Message} message - The message to crosspost.
   * @returns {Promise<void>} - A promise that resolves when the crossposting is complete.
   */
  crosspost(message: Message): Promise<void>;
}
import BaseGuildChannel = require("./BaseGuildChannel");

export = PartialSticker;
/**
 * Represents a partial sticker object.
 * @class
 * @extends Base
 */
declare class PartialSticker extends Base {
  /**
   * Constructs a new instance of the Sticker class.
   * @constructor
   * @param {Object} [data] - The data object containing the sticker information.
   * @param {Client} client - The client instance.
   */
  constructor(data?: Object | undefined, client: Client);
  id: any;
  name: any;
  formatType: any;
  createdAt: any;
  createdTimestamp: any;
  /**
   * Fetches a sticker using the client's fetchSticker method.
   * @returns {Promise} A promise that resolves with the fetched sticker.
   */
  fetch(): Promise<any>;
}
import Base = require("../Base/base");

export = PermissionOverwrite;
/**
 * Represents a permission overwrite for a channel in Discord.
 * @class
 * @extends Base
 * @param {Object} [data] - The data for the permission overwrite.
 * @param {string} channelId - The ID of the channel that the permission overwrite belongs to.
 * @param {Client} client - The client instance.
 */
declare class PermissionOverwrite extends Base {
  /**
   * Constructs a new instance of the Overwrite class.
   * @constructor
   * @param {Object} [data] - The data object containing the overwrite information.
   * @param {string} channelId - The ID of the channel that the overwrite belongs to.
   * @param {Client} client - The client instance.
   */
  constructor(data?: Object | undefined, channelId: string, client: Client);
  partial: any;
  channelId: string;
  id: any;
  type: any;
  allow: Permissions;
  deny: Permissions;
  /**
   * Deletes the permission overwrite for this channel.
   * @param {string} reason - The reason for deleting the permission overwrite.
   * @returns {Promise<boolean>} - A promise that resolves to true if the deletion was successful, or false otherwise.
   */
  delete(reason: string): Promise<boolean>;
  /**
   * Retrieves the channel object associated with this instance.
   * @returns The channel object.
   */
  get channel(): any;
}
import Base = require("../Base/base");
import Permissions = require("../Util/Permissions");

export = Presence;
/**
 * Represents the presence of a user.
 * @class
 * @extends Base
 * @param {Object} [data] - The data object containing presence information.
 * @param {Client} client - The client instance.
 * @property {boolean} partial - Whether the presence is partial or not.
 * @property {User} user - The user associated with the presence.
 * @property {string|null} status - The status of the user.
 * @property {Activity[]} activities - The activities of the user.
 * @property {Object|null} clientStatus - The client status of the user.
 */
declare class Presence extends Base {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Object} [data] - The data object containing the properties for the instance.
   * @param {Client} client - The client object associated with the instance.
   */
  constructor(data?: Object | undefined, client: Client);
  partial: any;
  user: any;
  status: any;
  activities: any;
  clientStatus: {
    desktop: any;
    mobile: any;
    web: any;
  } | null;
}
import Base = require("../Base/base");

export = Role;
/**
 * Represents a role in a guild.
 * @class
 * @extends Base
 * @param {Object} [data] - The data for the role.
 * @param {string} guildId - The ID of the guild that the role belongs to.
 * @param {Client} client - The client instance.
 */
declare class Role extends Base {
  /**
   * Constructs a new Role object.
   * @constructor
   * @param {Object} [data] - The data object containing role information.
   * @param {string} guildId - The ID of the guild that the role belongs to.
   * @param {Client} client - The Discord client instance.
   */
  constructor(data?: Object | undefined, guildId: string, client: Client);
  partial: any;
  id: any;
  guildId: string;
  name: any;
  color: any;
  hoist: any;
  icon: any;
  unicodeEmoji: any;
  position: any;
  permissions: Permissions;
  createdAt: any;
  createdTimestamp: any;
  managed: any;
  mentionable: any;
  tags: {
    botId: any;
    integrationId: any;
    premiumSubscriber: any;
  } | null;
  flags: RoleFlags;
  /**
   * Fetches the roles for the guild.
   * @param {Object} [options] - Optional parameters for the fetch operation.
   * @returns {Promise} A promise that resolves with the fetched roles.
   */
  fetch(options?: Object | undefined): Promise<any>;
  /**
   * Edits the role with the specified options.
   * @param {Object} options - The options to edit the role with.
   * @returns {Promise} A promise that resolves when the role has been edited.
   */
  edit(options?: Object): Promise<any>;
  /**
   * Deletes the role from the guild.
   * @param {string} reason - The reason for deleting the role.
   * @returns {Promise<void>} - A promise that resolves when the role is deleted.
   */
  delete(reason: string): Promise<void>;
  /**
   * Clones the current role.
   * @returns {Promise<Role>} A promise that resolves to the cloned role.
   */
  clone(): Promise<Role>;
  /**
   * Sets the name of an object and provides a reason for the change.
   * @param {string} name - The new name to set.
   * @param {string} reason - The reason for changing the name.
   * @returns {Promise} A promise that resolves when the name is successfully set.
   */
  setName(name: string, reason: string): Promise<any>;
  /**
   * Sets the permissions for an entity with the given reason.
   * @param {Object} permissions - The permissions to set for the entity.
   * @param {string} reason - The reason for setting the permissions.
   * @returns {Promise} - A promise that resolves when the permissions are set.
   */
  setPermissions(permissions: Object, reason: string): Promise<any>;
  /**
   * Sets the color of an object and provides a reason for the change.
   * @param {string} color - The new color to set.
   * @param {string} reason - The reason for the color change.
   * @returns {Promise} - A promise that resolves when the color is successfully set.
   */
  setColor(color: string, reason: string): Promise<any>;
  /**
   * Sets the hoist value and reason for a specific item.
   * @param {boolean} hoist - The hoist value to set.
   * @param {string} reason - The reason for setting the hoist value.
   * @returns {Promise} - A promise that resolves when the hoist value is set.
   */
  setHoist(hoist: boolean, reason: string): Promise<any>;
  /**
   * Sets the icon of an object and provides a reason for the change.
   * @param {any} icon - The new icon to set.
   * @param {string} reason - The reason for changing the icon.
   * @returns {Promise} A promise that resolves when the icon is successfully set.
   */
  setIcon(icon: any, reason: string): Promise<any>;
  /**
   * Sets the unicode emoji for an entity.
   * @param {string} unicodeEmoji - The unicode emoji to set.
   * @param {string} reason - The reason for setting the unicode emoji.
   * @returns {Promise} A promise that resolves when the unicode emoji is set.
   */
  setUnicodeEmoji(unicodeEmoji: string, reason: string): Promise<any>;
  /**
   * Sets the mentionable status of an entity.
   * @param {boolean} mentionable - Whether the entity should be mentionable or not.
   * @param {string} reason - The reason for setting the mentionable status.
   * @returns {Promise<void>} - A promise that resolves when the mentionable status is set.
   */
  setMentionable(mentionable: boolean, reason: string): Promise<void>;
  /**
   * Sets the position of the role within the guild's role hierarchy.
   * @param {number} position - The new position of the role.
   * @param {string} reason - The reason for modifying the role's position.
   * @returns {Promise<Role>} - A promise that resolves to the modified Role object.
   */
  setPosition(position: number, reason: string): Promise<Role>;
  /**
   * Retrieves the permissions of the bot in the specified channel.
   * @param {string | Channel} channel - The channel to check permissions in.
   * @returns {Permissions} - The permissions of the bot in the channel.
   * @throws {RangeError} - If the channel is not cached.
   */
  permissionsIn(channel: string | Channel): Permissions;
  /**
   * Retrieves the denied permissions for the specified channel.
   * @param {string | Channel} channel - The channel or channel ID to retrieve the permissions from.
   * @returns {PermissionFlags | null} - The denied permissions for the channel, or null if no permissions are found.
   * @throws {RangeError} - If the channel is not cached.
   */
  deniedPermissionsIn(channel: string | Channel): PermissionFlags | null;
  /**
   * Retrieves the guild associated with this guildId.
   * @returns The guild object if found, otherwise null.
   */
  get guild(): any;
  /**
   * Returns the URL of the icon for this role.
   * @param {Object} options - An optional object containing additional options for the icon URL.
   * @param {boolean} [options.dynamic] - Whether the icon should be dynamically generated.
   * @param {number} [options.size] - The desired size of the icon.
   * @param {string} [options.format] - The desired format of the icon.
   * @returns {string | null} The URL of the icon, or null if no icon is available.
   */
  iconURL(options?: {dynamic?: boolean | undefined; size?: number | undefined; format?: string | undefined}): string | null;
  /**
   * Retrieves the members of the guild who have the specified role.
   * @returns {Collection<Snowflake, GuildMember>} A collection of guild members who have the role.
   */
  get members(): Collection<Snowflake, GuildMember>;
}
import Base = require("../Base/base");
import Permissions = require("../Util/Permissions");
import RoleFlags = require("../Util/RoleFlags");
import Snowflake = require("../Util/Snowflake");

export = RolePrompts;
/**
 * Represents a RolePrompts object that extends the Base class.
 * @class
 * @extends Base
 * @param {Object} [data] - The data object containing the properties of the RolePrompts.
 * @param {string} guildId - The ID of the guild associated with the RolePrompts.
 * @param {Client} client - The client object associated with the RolePrompts.
 * @property {boolean} partial - Indicates if the RolePrompts object is partial or not.
 * @property {string} guildId - The ID of the guild associated with the RolePrompts.
 * @property {string|null} description - The description of the RolePrompts.
 * @property {boolean|null}
 */
declare class RolePrompts extends Base {
  /**
   * Transforms the roles data object by extracting specific properties and assigning default values if necessary.
   * @param {Object} roles - The roles data object.
   * @returns {Object} - The transformed roles data object with extracted properties and default values.
   */
  static transformRolesData(roles?: Object): Object;
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Object} [data] - The data object containing the properties of the instance.
   * @param {string} guildId - The ID of the guild.
   * @param {Client} client - The client instance.
   */
  constructor(data?: Object | undefined, guildId: string, client: Client);
  partial: any;
  guildId: any;
  description: any;
  disabled: any;
  id: any;
  roles: RaidenCol;
  createdAt: any;
  createdTimestamp: any;
  singleSelect: any;
  title: any;
  /**
   * Get the guild object associated with this guildId.
   * @returns The guild object.
   */
  get guild(): any;
}
import Base = require("../Base/base");
import {RaidenCol} from "../Util/@Collections/RaidenCol";

export = SelectMenuInteraction;
/**
 * Represents an interaction with a select menu component.
 * @class
 * @extends MessageComponentInteraction
 */
declare class SelectMenuInteraction extends MessageComponentInteraction {
  values: any;
}
import MessageComponentInteraction = require("./MessageComponentInteraction");

export = StageChannel;
/**
 * Represents a stage channel, which is a type of voice-based channel.
 * @class
 * @extends VoiceBasedChannels
 */
declare class StageChannel extends VoiceBasedChannels {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Object} [data] - The data object to initialize the instance with.
   * @param {string} guildId - The ID of the guild associated with the instance.
   * @param {Client} client - The client instance associated with the instance.
   */
  constructor(data?: Object | undefined, guildId: string, client: Client);
  /**
   * Retrieves the stage instance associated with the channel.
   * @returns {StageInstance | null} The stage instance object if found, otherwise null.
   */
  get stageInstance(): any;
  /**
   * Creates a stage instance in the specified channel.
   * @param {Object} options - The options for creating the stage instance.
   * @returns {Promise<StageInstance>} A promise that resolves to the created stage instance.
   */
  createStageInstance(options?: Object): Promise<StageInstance>;
}
import VoiceBasedChannels = require("./Interface/VoiceBasedChannels");

export = StageInstance;
/**
 * Represents a Stage Instance in a guild.
 * @class
 * @extends Base
 * @param {Object} [data] - The data for the Stage Instance.
 * @param {string} guildId - The ID of the guild the Stage Instance belongs to.
 * @param {Client} client - The client instance.
 */
declare class StageInstance extends Base {
  /**
   * Constructs a new instance of a Channel object.
   * @constructor
   * @param {Object} [data] - The data object containing the properties of the Channel.
   * @param {string} guildId - The ID of the guild that the Channel belongs to.
   * @param {Client} client - The client object representing the Discord bot.
   */
  constructor(data?: Object | undefined, guildId: string, client: Client);
  partial: any;
  guildId: string;
  channelId: any;
  id: any;
  topic: any;
  privacyLevel: any;
  guildScheduledEventId: any;
  /**
   * Fetches the stage instance for the given channel ID using the provided options.
   * @param {Object} options - The options to pass to the fetch request.
   * @returns {Promise<StageInstance>} A promise that resolves with the fetched stage instance.
   */
  fetch(options: Object): Promise<StageInstance>;
  /**
   * Edits the stage instance with the given options.
   * @param {Object} options - The options to edit the stage instance.
   * @returns {Promise} A promise that resolves when the stage instance is successfully edited.
   */
  edit(options: Object): Promise<any>;
  /**
   * Deletes the stage instance associated with the channel.
   * @param {string} reason - The reason for deleting the stage instance.
   * @returns {Promise<void>} - A promise that resolves when the stage instance is deleted.
   */
  delete(reason: string): Promise<void>;
  /**
   * Sets the topic of the current object and provides a reason for the change.
   * @param {string} topic - The new topic to set.
   * @param {string} reason - The reason for changing the topic.
   * @returns {Promise} - A promise that resolves when the topic is successfully set.
   */
  setTopic(topic: string, reason: string): Promise<any>;
  /**
   * Sets the privacy level for the current user.
   * @param {string} privacyLevel - The privacy level to set.
   * @param {string} reason - The reason for setting the privacy level.
   * @returns {Promise} - A promise that resolves when the privacy level is successfully set.
   */
  setPrivacyLevel(privacyLevel: string, reason: string): Promise<any>;
  /**
   * Retrieves the guild associated with this guildId.
   * @returns The guild object if found, otherwise null.
   */
  get guild(): any;
  /**
   * Retrieves the channel associated with this object.
   * @returns The channel object if found, otherwise null.
   */
  get channel(): any;
  /**
   * Retrieves the scheduled event associated with the guild.
   * @returns {ScheduledEvent | null} The scheduled event object if found, otherwise null.
   */
  get guildScheduledEvent(): any;
}
import Base = require("../Base/base");

export = Sticker;
/**
 * Represents a Sticker object, extending the Base class.
 * @class
 * @extends Base
 * @param {Object} [data] - The data object containing the sticker information.
 * @param {string} guildId - The ID of the guild the sticker belongs to.
 * @param {Client} client - The client instance.
 */
declare class Sticker extends Base {
  /**
   * Constructs a Sticker object.
   * @constructor
   * @param {Object} [data] - The data object containing the sticker information.
   * @param {string} guildId - The ID of the guild the sticker belongs to.
   * @param {Client} client - The Discord client instance.
   */
  constructor(data?: Object | undefined, guildId: string, client: Client);
  partial: any;
  id: any;
  packId: any;
  name: any;
  description: any;
  createdAt: any;
  createdTimestamp: any;
  tags: any;
  type: any;
  formatType: any;
  available: any;
  guildId: string;
  user: any;
  sortValue: any;
  /**
   * Fetches stickers from the guild using the provided options.
   * @param {Object} options - The options for fetching the stickers.
   * @returns {Promise} - A promise that resolves to the fetched stickers.
   */
  fetch(options: Object): Promise<any>;
  /**
   * Edits the sticker with the given options.
   * @param {Object} options - The options to edit the sticker.
   * @returns {Promise} A promise that resolves when the sticker is successfully edited.
   */
  edit(options: Object): Promise<any>;
  /**
   * Deletes the sticker from the guild.
   * @param {string} reason - The reason for deleting the sticker.
   * @returns {Promise<void>} - A promise that resolves when the sticker is deleted.
   */
  delete(reason: string): Promise<void>;
  /**
   * Sets the name and reason for an object.
   * @param {string} name - The new name to set.
   * @param {string} reason - The reason for setting the new name.
   * @returns {Promise} - A promise that resolves when the name and reason are successfully set.
   */
  setName(name: string, reason: string): Promise<any>;
  /**
   * Sets the description of an object and updates it with the provided reason.
   * @param {string} description - The new description to set.
   * @param {string} reason - The reason for updating the description.
   * @returns {Promise} - A promise that resolves when the description is successfully updated.
   */
  setDescription(description: string, reason: string): Promise<any>;
  /**
   * Sets the tags of an object and provides a reason for the change.
   * @param {Array} tags - The new tags to set.
   * @param {string} reason - The reason for the change.
   * @returns {Promise} - A promise that resolves when the tags are successfully set.
   */
  setTags(tags: any[], reason: string): Promise<any>;
  /**
   * Retrieves the guild associated with this guildId.
   * @returns The guild object if found, otherwise null.
   */
  get guild(): any;
  /**
   * Fetches the Nitro Pack with the specified packId from the client.
   * @returns {Promise<NitroPack | null>} A promise that resolves to the Nitro Pack object if found, or null if not found.
   */
  fetchPack(): Promise<NitroPack | null>;
  /**
   * Generates the URL for the sticker image with the specified options.
   * @param {Object} options - The options for generating the URL.
   * @param {string} [options.size] - The desired size of the image.
   * @param {string} [options.format] - The desired format of the image.
   * @returns {string} The URL of the sticker image.
   */
  imageURL(options?: {size?: string | undefined; format?: string | undefined}): string;
  /**
   * Checks if the given object is equal to this sticker.
   * @param {Sticker} sticker - The object to compare with this sticker.
   * @returns {boolean} - True if the objects are equal, false otherwise.
   */
  equals(sticker: Sticker): boolean;
}
import Base = require("../Base/base");

export = StickerPack;
/**
 * Represents a sticker pack.
 * @class
 * @extends Base
 */
declare class StickerPack extends Base {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Object} [data] - The data object containing the properties for the instance.
   * @param {Client} client - The client object.
   */
  constructor(data?: Object | undefined, client: Client);
  id: any;
  stickers: RaidenCol;
  name: any;
  skuId: any;
  coverStickerId: any;
  description: any;
  bannerAssetId: any;
  /**
   * Fetches the nitro pack with the specified ID from the client's nitro packs.
   * @returns {Promise<Sticker | null>} A promise that resolves to the found nitro pack or null if not found.
   */
  fetch(): Promise<Sticker | null>;
  /**
   * Retrieves the URL of the banner image for the sticker pack.
   * @param {Object} options - The options for the banner image.
   * @param {string} options.size - The desired size of the banner image.
   * @param {string} options.format - The desired format of the banner image.
   * @returns {string | null} The URL of the banner image, or null if the bannerAssetId is not set.
   */
  bannerURL(options: {size: string; format: string}): string | null;
}
import Base = require("../Base/base");
import {RaidenCol} from "../Util/@Collections/RaidenCol";
import Sticker = require("./Sticker");

export = Team;
/**
 * Represents a team object.
 * @class
 * @extends Base
 * @param {Object} [data] - The data object containing the team information.
 * @param {Client} client - The client object.
 * @property {string | undefined} icon - The icon of the team.
 * @property {string | undefined} id - The ID of the team.
 * @property {RaidenCol} members - A collection of team members.
 * @property {Date | undefined} createdAt - The creation date of the team.
 * @property {number | undefined} createdTimestamp - The timestamp of the team's creation date.
 * @property {string | undefined} name - The name of the team.
 */
declare class Team extends Base {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Object} [data] - The data object containing the properties for the instance.
   * @param {Client} client - The client object associated with the instance.
   */
  constructor(data?: Object | undefined, client: Client);
  icon: any;
  id: any;
  members: RaidenCol;
  createdAt: any;
  createdTimestamp: any;
  name: any;
  ownerUserId: any;
  /**
   * Returns the URL of the icon for this team.
   * @param {Object} options - Optional parameters for customizing the icon URL.
   * @param {boolean} [options.dynamic] - Whether to use a dynamic icon.
   * @param {number} [options.size] - The desired size of the icon.
   * @param {string} [options.format] - The desired format of the icon.
   * @returns {string | null} The URL of the team's icon, or null if no icon is available.
   */
  iconURL(options?: {dynamic?: boolean | undefined; size?: number | undefined; format?: string | undefined}): string | null;
}
import Base = require("../Base/base");
import {RaidenCol} from "../Util/@Collections/RaidenCol";

export = TeamMember;
/**
 * Represents a team member.
 * @class
 * @extends Base
 * @param {Object} [data] - The data object containing information about the team member.
 * @param {Client} client - The client object.
 * @property {MembershipState|null} state - The membership state of the team member.
 * @property {Object|undefined} permissions - The permissions of the team member.
 * @property {string|null} teamId - The ID of the team that the member belongs to.
 * @property {User|null} user - The user object representing the team member.
 */
declare class TeamMember extends Base {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Object} [data] - The data object containing the properties for the instance.
   * @param {Client} client - The client object.
   */
  constructor(data?: Object | undefined, client: Client);
  state: any;
  permissions: any;
  teamId: any;
  user: any;
}
import Base = require("../Base/base");

export = TextChannel;
/**
 * Represents a text channel in a guild.
 * @class
 * @extends BaseGuildChannel
 * @param {Object} [data] - The data for the text channel.
 * @param {string} guildId - The ID of the guild that the text channel belongs to.
 * @param {Client} client - The client instance.
 */
declare class TextChannel extends BaseGuildChannel {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Object} [data] - The data object to initialize the instance with.
   * @param {string} guildId - The ID of the guild associated with the instance.
   * @param {Client} client - The client instance associated with the instance.
   */
  constructor(data?: Object | undefined, guildId: string, client: Client);
}
import BaseGuildChannel = require("./BaseGuildChannel");

export = ThreadChannel;
/**
 * Represents a thread channel in Discord.
 * @class
 * @extends TextBasedChannels
 */
declare class ThreadChannel extends TextBasedChannels {
  threadMetadata: {
    archived: any;
    autoArchiveDuration: any;
    archiveAt: Date;
    locked: any;
    invitable: any;
    createdAt: Date;
  } | null;
  memberCount: any;
  messageCount: any;
  ownerId: any;
  members: ThreadMemberManager;
  member: any;
  new: any;
  /**
   * Asynchronously joins all members of a group.
   * @returns {Promise<Group>} A promise that resolves to the joined group.
   */
  join(): Promise<Group>;
  /**
   * Adds a member to the collection asynchronously.
   * @param {GuildMember} member - The member to add.
   * @returns {Promise} A promise that resolves when the member is added.
   */
  add(member: GuildMember): Promise<any>;
  /**
   * Removes a user from the members list.
   * @param {User} user - The user to remove.
   * @returns {Promise<void>} - A promise that resolves when the user is successfully removed.
   */
  remove(user: User): Promise<void>;
  /**
   * Fetches the owner of the object.
   * @param {Object} options - Additional options for the fetch operation.
   * @returns {Promise<Object|null>} - A promise that resolves to the owner object if found, or null if the ownerId is not set.
   */
  fetchOwner(options: Object): Promise<Object | null>;
  /**
   * Sets the archived status and reason for an item.
   * @param {boolean} archived - The archived status to set.
   * @param {string} reason - The reason for archiving the item.
   * @returns {Promise} - A promise that resolves when the item is successfully edited.
   */
  setArchived(archived: boolean, reason: string): Promise<any>;
  /**
   * Sets the locked status and reason for an item.
   * @param {boolean} locked - The locked status to set.
   * @param {string} reason - The reason for locking the item.
   * @returns {Promise} - A promise that resolves when the edit is complete.
   */
  setLocked(locked: boolean, reason: string): Promise<any>;
  /**
   * Sets the auto archive duration for a specific item and provides a reason for the change.
   * @param {number} autoArchiveDuration - The new auto archive duration in seconds.
   * @param {string} reason - The reason for changing the auto archive duration.
   * @returns {Promise} - A promise that resolves when the operation is complete.
   */
  setAutoArchiveDuration(autoArchiveDuration: number, reason: string): Promise<any>;
  /**
   * Sets the invitable property and reason for the object.
   * @param {boolean} invitable - The new value for the invitable property.
   * @param {string} reason - The reason for the change.
   * @returns {Promise<void>} - A promise that resolves when the edit is complete.
   */
  setInvitable(invitable: boolean, reason: string): Promise<void>;
}
import TextBasedChannels = require("./Interface/TextBasedChannels");
import ThreadMemberManager = require("../Managers/ThreadMemberManager");

export = ThreadMember;
declare class ThreadMember extends Base {
  /**
   * "This function is used to create a new ThreadMember object, which is used to represent a member of
   * a thread."
   * @param [data] - The data that was received from the API.
   * @param guildId - The ID of the guild the thread is in.
   * @param threadId - The ID of the thread
   * @param client - Discord.Client
   */
  constructor(data?: {} | undefined, guildId: any, threadId: any, client: any);
  partial: any;
  guildId: any;
  threadId: any;
  userId: any;
  createdAt: any;
  createdTimestamp: any;
  joinedAt: Date | null;
  joinedTimestamp: number | null;
  flags: ThreadMemberFlags;
  /**
   * It removes a user from a thread
   * @returns The thread member object.
   */
  remove(): Promise<this>;
  /**
   * It returns the guild object of the guild ID that is stored in the database
   * @returns The guild object.
   */
  get guild(): any;
  /**
   * It returns the channel object of the thread.
   * @returns The thread channel.
   */
  get thread(): any;
  /**
   * It returns the user object of the user who sent the message
   * @returns The user object.
   */
  get user(): any;
}
import Base = require("../Base/base");
import ThreadMemberFlags = require("../Util/ThreadMemberFlags");

export = TriggeredAutoModRule;
/**
 * Represents a triggered auto moderation rule.
 * @class
 * @extends Base
 * @param {Object} [data] - The data for the triggered auto moderation rule.
 * @param {string} guildId - The ID of the guild that the rule belongs to.
 * @param {Client} client - The client instance.
 */
declare class TriggeredAutoModRule extends Base {
  /**
   * Constructs a GuildAutoModRule object.
   * @constructor
   * @param {Object} [data] - The data object containing the properties of the rule.
   * @param {string} guildId - The ID of the guild the rule belongs to.
   * @param {Client} client - The Discord client object.
   */
  constructor(data?: Object | undefined, guildId: string, client: Client);
  ruleId: any;
  guildId: any;
  ruleTriggerType: any;
  action: GuildAutoModActions;
  userId: any;
  channelId: any;
  messageId: any;
  alertSystemMessageId: any;
  content: any;
  matchedKeyword: any;
  matchedContent: any;
  /**
   * Get the guild object associated with this guildId.
   * @returns The guild object.
   */
  get guild(): any;
  /**
   * Retrieves the channel object associated with this instance.
   * @returns The channel object.
   */
  get channel(): any;
  /**
   * Get the user object associated with this instance.
   * @returns The user object.
   */
  get user(): any;
  /**
   * Retrieves the message from the channel using the specified message ID.
   * @returns The retrieved message object.
   */
  get message(): any;
  /**
   * Fetches the automod rule with the specified ruleId from the guild.
   * @param {object} options - Optional parameters for the fetch request.
   * @returns {Promise} A promise that resolves to the fetched automod rule.
   */
  fetch(options?: object): Promise<any>;
  /**
   * Edits the automod rule with the specified options.
   * @param {Object} options - The options to update the automod rule.
   * @returns {Promise} A promise that resolves when the automod rule has been successfully edited.
   */
  edit(options?: Object): Promise<any>;
  /**
   * Deletes the automod rule with the specified reason.
   * @param {string} reason - The reason for deleting the rule.
   * @returns {Promise<void>} - A promise that resolves when the rule is successfully deleted.
   */
  delete(reason: string): Promise<void>;
  /**
   * Sets the name and reason for an object.
   * @param {string} name - The new name to set.
   * @param {string} reason - The reason for setting the new name.
   * @returns {Promise} - A promise that resolves when the name and reason are successfully set.
   */
  setName(name: string, reason: string): Promise<any>;
  /**
   * Sets the event type and reason for the current object.
   * @param {string} eventType - The type of event to set.
   * @param {string} reason - The reason for the event.
   * @returns {Promise} - A promise that resolves when the edit is complete.
   */
  setEventType(eventType: string, reason: string): Promise<any>;
  /**
   * Sets the trigger metadata for the current object and updates it with the given reason.
   * @param {any} triggerMetadata - The new trigger metadata to set.
   * @param {string} reason - The reason for updating the trigger metadata.
   * @returns {Promise<void>} - A promise that resolves when the trigger metadata is successfully set.
   */
  setTriggerMetadata(triggerMetadata: any, reason: string): Promise<void>;
  /**
   * Sets the actions and reason for editing a resource.
   * @param {any} actions - The actions to be set.
   * @param {string} reason - The reason for the edit.
   * @returns {Promise<any>} - A promise that resolves to the result of the edit operation.
   */
  setActions(actions: any, reason: string): Promise<any>;
  /**
   * Sets the enabled status of an item and provides a reason for the change.
   * @param {boolean} enabled - The new enabled status of the item.
   * @param {string} reason - The reason for the change in enabled status.
   * @returns {Promise} - A promise that resolves when the edit is complete.
   */
  setEnabled(enabled: boolean, reason: string): Promise<any>;
  /**
   * Sets the exempt roles for a certain action and provides a reason for the change.
   * @param {Array} exemptRoles - The roles that are exempt from the action.
   * @param {string} reason - The reason for setting the exempt roles.
   * @returns {Promise} - A promise that resolves when the exempt roles are successfully set.
   */
  setExemptRoles(exemptRoles: any[], reason: string): Promise<any>;
  /**
   * Sets the exempt channels for a specific action and provides a reason.
   * @param {Array} exemptChannels - The channels to exempt from the action.
   * @param {string} reason - The reason for setting the exempt channels.
   * @returns {Promise} - A promise that resolves when the exempt channels are set.
   */
  setExemptChannels(exemptChannels: any[], reason: string): Promise<any>;
}
import Base = require("../Base/base");
import GuildAutoModActions = require("./GuildAutoModActions");

export = User;
/**
 * Represents a user in the application.
 * @class
 * @extends Base
 * @param {Object} [data] - The data object containing user information.
 * @param {Client} client - The client object.
 */
declare class User extends Base {
  /**
   * Constructs a new User object.
   * @constructor
   * @param {Object} [data] - The data object containing user information.
   * @param {Client} client - The client object.
   */
  constructor(data?: Object | undefined, client: Client);
  partial: any;
  bio: any;
  id: any;
  username: any;
  globalName: any;
  avatar: any;
  avatarDecoration: any;
  createdAt: any;
  pronouns: any;
  createdTimestamp: any;
  bot: any;
  system: any;
  mfaEnabled: any;
  banner: any;
  bannerColor: any;
  accentColor: any;
  locale: any;
  verified: any;
  email: any;
  flags: UserFlags;
  /**
   * Fetches user data using the provided options.
   * @param {Object} options - The options for fetching user data.
   * @returns {Promise} A promise that resolves with the fetched user data.
   */
  fetch(options: Object): Promise<any>;
  /**
   * Creates a direct message (DM) channel with the user associated with this instance of the client.
   * @returns {Promise<DMChannel>} A promise that resolves to the created DM channel.
   */
  createDM(): Promise<DMChannel>;
  /**
   * Sends a message to the user using the client's user send method.
   * @param {object} options - Optional parameters for sending the message.
   * @returns {Promise} A promise that resolves when the message is sent.
   */
  send(options?: object): Promise<any>;
  /**
   * Returns the URL of the default avatar for the user in the specified format.
   * @param {string} format - The format of the avatar image (e.g. "png", "jpg", "gif").
   * @returns {string | null} The URL of the default avatar image, or null if it is not available.
   */
  defaultAvatarURL(format: string): string | null;
  /**
   * Returns the URL of the avatar for the user.
   * @param {Object} options - The options for generating the avatar URL.
   * @param {boolean} [options.dynamic] - Whether to generate a dynamic avatar URL.
   * @param {number} [options.size] - The size of the avatar.
   * @param {string} [options.format] - The format of the avatar image.
   * @returns {string} The URL of the user's avatar.
   */
  displayAvatarURL(options?: {dynamic?: boolean | undefined; size?: number | undefined; format?: string | undefined}): string;
  /**
   * Generates the URL for the user's banner image.
   * @param {Object} options - Optional parameters for customizing the URL.
   * @param {boolean} [options.dynamic] - Whether to include dynamic content in the URL.
   * @param {string} [options.size] - The desired size of the banner image.
   * @param {string} [options.format] - The desired format of the banner image.
   * @returns {string | null} The URL of the user's banner image, or null if no banner is set.
   */
  bannerURL(options?: {dynamic?: boolean | undefined; size?: string | undefined; format?: string | undefined}): string | null;
  /**
   * Returns the URL of the avatar decoration for the user.
   * @param {Object} options - Optional parameters for the URL generation.
   * @param {number} options.size - The desired size of the avatar decoration.
   * @param {string} options.format - The desired format of the avatar decoration.
   * @returns {string | null} The URL of the avatar decoration, or null if no decoration is set.
   */
  avatarDecorationURL(options?: {size: number; format: string}): string | null;
  /**
   * Returns the hexadecimal representation of the accent color.
   * @returns {string | null} - The hexadecimal representation of the accent color, or null if the accent color is not set.
   */
  hexAccentColor(): string | null;
}
import Base = require("../Base/base");
import UserFlags = require("../Util/UserFlags");

export = VerificationFormFields;
/**
 * Represents a set of form fields for verification.
 * @class
 * @extends Base
 * @param {object} [data] - The data object containing the field properties.
 * @param {object} client - The client object used for making API requests.
 * @property {string|null} description - The description of the form field.
 * @property {string|null} fieldType - The type of the form field.
 * @property {string|null} label - The label of the form field.
 * @property {boolean|null} required - Indicates if the form field is required.
 * @property {Array} values - The values associated with the form field.
 */
declare class VerificationFormFields extends Base {
  /**
   * Constructs a new instance of a class.
   * @constructor
   * @param {Object} [data] - The data object containing the properties for the instance.
   * @param {Client} client - The client object.
   */
  constructor(data?: Object | undefined, client: Client);
  description: any;
  fieldType: any;
  label: any;
  required: any;
  values: any;
}
import Base = require("../Base/base");

export = VoiceChannel;
/**
 * Represents a voice channel in a guild.
 * @class
 * @extends VoiceBasedChannels
 */
declare class VoiceChannel extends VoiceBasedChannels {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Object} [data] - The data object containing the properties for the instance.
   * @param {string} guildId - The ID of the guild associated with the instance.
   * @param {Client} client - The client object associated with the instance.
   */
  constructor(data?: Object | undefined, guildId: string, client: Client);
  rateLimitPerUser: any;
  lastMessageId: any;
  nsfw: any;
  /**
   * Get the message manager for this channel.
   * @returns {MessageManager} The message manager object for this channel.
   */
  get messages(): MessageManager;
  /**
   * Sends a message using the specified options.
   * @param {object} options - The options for sending the message.
   * @returns {Promise} A promise that resolves when the message is sent.
   */
  send(options?: object): Promise<any>;
  /**
   * Bulk deletes the specified messages with the given reason.
   * @param {Array<Message>} messages - The messages to be deleted.
   * @param {string} reason - The reason for deleting the messages.
   * @returns {Promise<void>} A promise that resolves when the messages are deleted.
   */
  bulkDelete(messages: Array<Message>, reason: string): Promise<void>;
  /**
   * Sets the NSFW (Not Safe for Work) flag for the current item.
   * @param {boolean} nsfw - The NSFW flag value to set.
   * @param {string} reason - The reason for setting the NSFW flag.
   * @returns {Promise} - A promise that resolves when the NSFW flag is set.
   */
  setNsfw(nsfw: boolean, reason: string): Promise<any>;
  /**
   * Sets the rate limit per user for a specific action.
   * @param {number} ratelimit - The new rate limit value to set.
   * @param {string} reason - The reason for setting the rate limit.
   * @returns {Promise} - A promise that resolves when the rate limit is successfully set.
   */
  setRateLimitPerUser(ratelimit: number, reason: string): Promise<any>;
  /**
   * Sets the user limit for the current channel and provides a reason for the change.
   * @param {number} userLimit - The new user limit for the channel.
   * @param {string} reason - The reason for changing the user limit.
   * @returns {Promise} - A promise that resolves when the user limit is successfully set.
   */
  setUserLimit(userLimit: number, reason: string): Promise<any>;
  /**
   * Sets the video quality mode with the given parameters.
   * @param {string} videoQualityMode - The video quality mode to set.
   * @param {string} reason - The reason for setting the video quality mode.
   * @returns {Promise} - A promise that resolves when the video quality mode is set.
   */
  setVideoQualityMode(videoQualityMode: string, reason: string): Promise<any>;
  /**
   * Triggers a typing indicator in the channel where this method is called.
   * @returns {Promise<void>} - A promise that resolves when the typing indicator is triggered.
   */
  triggerTyping(): Promise<void>;
}
import VoiceBasedChannels = require("./Interface/VoiceBasedChannels");
import MessageManager = require("../Managers/MessageManager");

export = VoiceRegion;
/**
 * Represents a voice region.
 * @class
 * @extends Base
 */
declare class VoiceRegion extends Base {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Object} [data] - The data object containing the properties for the instance.
   * @param {Client} client - The client object.
   */
  constructor(data?: Object | undefined, client: Client);
  id: any;
  name: any;
  optimal: any;
  deprecated: any;
  custom: any;
}
import Base = require("../Base/base");

export = VoiceState;
/**
 * Represents the state of a voice connection for a user in a guild.
 * @class
 * @extends Base
 * @param {Object} [data] - The data for the voice state.
 * @param {string} guildId - The ID of the guild the voice state belongs to.
 * @param {Client} client - The client instance.
 */
declare class VoiceState extends Base {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Object} [data] - The data object containing the properties for the instance.
   * @param {string} guildId - The ID of the guild associated with the instance.
   * @param {Client} client - The client instance associated with the instance.
   */
  constructor(data?: Object | undefined, guildId: string, client: Client);
  partial: any;
  guildId: string;
  userId: any;
  channelId: any;
  member: any;
  sessionId: any;
  deaf: any;
  mute: any;
  selfDeaf: any;
  selfMute: any;
  selfStream: any;
  selfVideo: any;
  suppress: any;
  requestToSpeak: Date | null;
  requestToSpeakTimestamp: number | null;
  /**
   * Edits the user's guild member profile with the given options.
   * @param {Object} options - The options to edit the guild member profile.
   * @returns {Promise} A promise that resolves when the edit is complete.
   */
  edit(options: Object): Promise<any>;
  /**
   * Sets the channel for the current object and updates it with the given reason.
   * @param {Channel} channel - The channel to set.
   * @param {string} reason - The reason for setting the channel.
   * @returns {Promise<void>} - A promise that resolves when the channel is successfully set.
   */
  setChannel(channel: Channel, reason: string): Promise<void>;
  /**
   * Sets the deaf status of the user.
   * @param {boolean} deaf - Whether the user should be deafened or not.
   * @param {string} reason - The reason for setting the deaf status.
   * @returns {Promise} - A promise that resolves when the deaf status is set.
   */
  setDeaf(deaf: boolean, reason: string): Promise<any>;
  /**
   * Sets the mute status and reason for an object.
   * @param {boolean} mute - The mute status to set.
   * @param {string} reason - The reason for muting.
   * @returns {Promise} - A promise that resolves when the mute status and reason are set.
   */
  setMute(mute: boolean, reason: string): Promise<any>;
  /**
   * Sets the suppress property of the voice state for the user in the guild.
   * @param {boolean} suppress - The value to set for the suppress property.
   * @returns {Promise<void>} - A promise that resolves when the suppress property is set.
   */
  setSuppress(suppress: boolean): Promise<void>;
  /**
   * Sets the "request to speak" status for the user in the guild's voice channel.
   * @param {boolean} requestToSpeak - The value indicating whether the user wants to request to speak.
   * @returns {Promise<void>} - A promise that resolves when the request to speak status is set.
   */
  setRequestToSpeak(requestToSpeak: boolean): Promise<void>;
  /**
   * Retrieves the guild associated with this guildId.
   * @returns The guild object if found, otherwise null.
   */
  get guild(): any;
  /**
   * Retrieves the channel object associated with this instance.
   * @returns {Channel | null} The channel object, or null if it does not exist.
   */
  get channel(): any;
  /**
   * Retrieves the user associated with this instance.
   * @returns {User | null} The user object if found, otherwise null.
   */
  get user(): any;
}
import Base = require("../Base/base");

export = Webhook;
/**
 * Represents a webhook.
 * @class
 * @extends Base
 * @param {Object} [data] - The data for the webhook.
 * @param {string} guildId - The ID of the guild the webhook belongs to.
 * @param {Client} client - The client that instantiated this webhook.
 */
declare class Webhook extends Base {
  /**
   * Constructs a new instance of the Webhook class.
   * @constructor
   * @param {Object} [data] - The data object containing the webhook information.
   * @param {string} guildId - The ID of the guild the webhook belongs to.
   * @param {Client} client - The client instance.
   */
  constructor(data?: Object | undefined, guildId: string, client: Client);
  id: any;
  createdAt: any;
  createdTimestamp: any;
  type: any;
  guildId: string;
  channelId: any;
  user: any;
  name: any;
  avatar: any;
  token: any;
  applicationId: any;
  sourceGuild: any;
  sourceChannel: any;
  url: string | null;
  /**
   * Fetches a webhook using the provided token.
   * @param {string} token - The token used to authenticate the webhook.
   * @returns {Promise<Webhook>} A promise that resolves to the fetched webhook.
   */
  fetch(token: string): Promise<Webhook>;
  /**
   * Edits the webhook with the specified options.
   * @param {Object} options - The options for editing the webhook.
   * @param {string} [options.reason] - The reason for the edit.
   * @param {string} [options.name] - The new name for the webhook.
   * @param {string | File} [options.avatar] - The new avatar for the webhook.
   * @param {string | Channel} [options.channel] - The new channel for the webhook.
   * @param {string} [options.token] - The token of the webhook.
   * @returns {Webhook} - The edited webhook.
   */
  edit(options?: {
    reason?: string | undefined;
    name?: string | undefined;
    avatar?: string | File;
    channel?: string | Channel;
    token?: string | undefined;
  }): Webhook;
  /**
   * Sets the name and reason for an object.
   * @param {string} name - The new name to set.
   * @param {string} reason - The reason for setting the new name.
   * @returns {Promise} - A promise that resolves when the name and reason are successfully set.
   */
  setName(name: string, reason: string): Promise<any>;
  /**
   * Sets the avatar for the user.
   * @param {string} avatar - The URL or file path of the new avatar image.
   * @param {string} reason - The reason for setting the new avatar.
   * @returns {Promise} - A promise that resolves when the avatar is successfully set.
   */
  setAvatar(avatar: string, reason: string): Promise<any>;
  /**
   * Sets the channel for the current object and updates it with the given reason.
   * @param {Channel} channel - The channel to set.
   * @param {string} reason - The reason for setting the channel.
   * @returns {Promise<void>} - A promise that resolves when the channel is successfully set.
   */
  setChannel(channel: Channel, reason: string): Promise<void>;
  /**
   * Deletes the webhook.
   * @param {Object} [options] - Optional parameters for the deletion.
   * @param {string} [options.token] - The token associated with the webhook.
   * @param {string} [options.reason] - The reason for the deletion.
   * @returns {Promise} A promise that resolves to the deleted webhook.
   */
  delete(
    options?:
      | {
          token?: string | undefined;
          reason?: string | undefined;
        }
      | undefined
  ): Promise<any>;
  /**
   * Returns the default URL for an avatar image.
   * @returns {string} The URL of the default avatar image.
   */
  defaultAvatarURL(): string;
  /**
   * Returns the URL of the avatar for the user or webhook.
   * @param {Object} options - The options for generating the avatar URL.
   * @param {boolean} [options.dynamic] - Whether to generate a dynamic avatar URL.
   * @param {number} [options.size] - The size of the avatar in pixels.
   * @param {string} [options.format] - The format of the avatar image.
   * @returns {string} The URL of the avatar.
   */
  displayAvatarURL(options?: {dynamic?: boolean | undefined; size?: number | undefined; format?: string | undefined}): string;
}
import Base = require("../Base/base");

export = WebhookClient;
/**
 * Represents a webhook client that can interact with webhooks.
 * @class
 * @extends Base
 */
declare class WebhookClient extends Base {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Object} [data] - The data object containing the properties for the instance.
   * @param {Client} client - The client object associated with the instance.
   */
  constructor(data?: Object | undefined, client: Client);
  id: any;
  token: any;
  url: any;
  /**
   * Fetches a webhook from the server.
   * @returns {Promise<Webhook>} A promise that resolves to a Webhook object.
   */
  fetchWebhook(): Promise<Webhook>;
  /**
   * Sends a message using a webhook.
   * @param {Object} [options] - The options for sending the message.
   * @param {number} [options.wait] - The time to wait before sending the message.
   * @param {string | Object} [options.thread] - The thread ID or thread object to send the message to.
   * @returns {Promise<Message | undefined>} - A promise that resolves to the sent message, or undefined if the message failed to send.
   */
  send(
    options?:
      | {
          wait?: number | undefined;
          thread?: string | Object | undefined;
        }
      | undefined
  ): Promise<Message | undefined>;
  /**
   * Deletes a message from a thread.
   * @param {string | Message} message - The ID or the message object to delete.
   * @param {string | Thread} thread - The ID or the thread object where the message is located.
   * @returns {void}
   */
  delete(message: string | Message, thread: string | Thread): void;
  /**
   * Edits a message in a channel using the Discord API.
   * @param {string | Message} message - The ID or the message object to edit.
   * @param {Object} [options] - The options for editing the message.
   * @param {string | ThreadChannel} [thread] - The ID or the thread channel object where the message is located.
   * @returns {void}
   * @throws {RangeError} If the channel is not cached.
   */
  edit(message: string | Message, options?: Object | undefined, thread?: string | ThreadChannel): void;
  /**
   * Fetches a webhook message from the specified thread.
   * @param {string | Message} message - The ID or the message object to fetch.
   * @param {string | ThreadChannel} thread - The ID or the thread object to fetch the message from.
   * @returns {Promise<Message | undefined>} - A promise that resolves to the fetched message, or undefined if the channel is not found.
   */
  fetch(message: string | Message, thread: string | ThreadChannel): Promise<Message | undefined>;
}
import Base = require("../Base/base");
import Webhook = require("./Webhook");

export = WelcomeScreen;
/**
 * Represents a welcome screen for a guild.
 * @class
 * @extends Base
 * @param {Object} [data] - The data for the welcome screen.
 * @param {string} guildId - The ID of the guild.
 * @param {Client} client - The client instance.
 */
declare class WelcomeScreen extends Base {
  /**
   * Constructs a new instance of the WelcomeScreen class.
   * @constructor
   * @param {Object} [data] - The data object containing the welcome screen information.
   * @param {string} guildId - The ID of the guild the welcome screen belongs to.
   * @param {Client} client - The Discord client instance.
   */
  constructor(data?: Object | undefined, guildId: string, client: Client);
  description: any;
  guildId: string;
  channels: RaidenCol;
  /**
   * Edits the welcome screen of the guild with the provided options.
   * @param {Object} options - The options to update the welcome screen with.
   * @returns {Promise} A promise that resolves when the welcome screen is successfully edited.
   */
  edit(options?: Object): Promise<any>;
  /**
   * Sets the enabled status of an item and provides a reason for the change.
   * @param {boolean} enabled - The new enabled status of the item.
   * @param {string} reason - The reason for the change in enabled status.
   * @returns {Promise} - A promise that resolves when the edit is complete.
   */
  setEnabled(enabled: boolean, reason: string): Promise<any>;
  /**
   * Sets the welcome channels for a specific entity.
   * @param {Array} channels - The channels to set as welcome channels.
   * @param {string} reason - The reason for setting the welcome channels.
   * @returns {Promise} - A promise that resolves when the welcome channels are set.
   */
  setWelcomeChannels(channels: any[], reason: string): Promise<any>;
  /**
   * Sets the description of an object and updates it with the provided reason.
   * @param {string} description - The new description to set.
   * @param {string} reason - The reason for updating the description.
   * @returns {Promise} - A promise that resolves when the description is successfully updated.
   */
  setDescription(description: string, reason: string): Promise<any>;
  /**
   * Retrieves the guild associated with this guildId.
   * @returns The guild object if found, otherwise null.
   */
  get guild(): any;
}
import Base = require("../Base/base");
import {RaidenCol} from "../Util/@Collections/RaidenCol";

export = WelcomeScreenChannel;
/**
 * Represents a welcome screen channel.
 * @class
 * @extends Base
 */
declare class WelcomeScreenChannel extends Base {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Object} [data] - The data object containing the properties for the instance.
   * @param {string} guildId - The ID of the guild associated with the instance.
   * @param {Client} client - The client object used to interact with the Discord API.
   */
  constructor(data?: Object | undefined, guildId: string, client: Client);
  guildId: string;
  channelId: any;
  description: any;
  emojiId: any;
  emojiName: any;
  /**
   * Retrieves the channel object associated with this instance.
   * @returns {Channel | null} The channel object, or null if it does not exist.
   */
  get channel(): any;
  /**
   * Get the guild object associated with this guildId.
   * @returns The guild object.
   */
  get guild(): any;
}
import Base = require("../Base/base");

/**
 * A custom implementation of a Map with additional utility methods.
 * @class RaidenCol
 * @extends Map
 */
export class RaidenCol extends Map<any, any> {
  /**
   * Compare two values and return a number indicating their relative order.
   * @param {any} one - The first value to compare.
   * @param {any} two - The second value to compare.
   * @returns {number} - A number indicating the relative order of the values:
   *   -1 if `one` is less than `two`,
   *    0 if `one` is equal to `two`,
   *    1 if `one` is greater than `two`.
   */
  static compareFunction(one: any, two: any): number;
  constructor();
  constructor(entries?: readonly (readonly [any, any])[] | null | undefined);
  constructor();
  constructor(iterable?: Iterable<readonly [any, any]> | null | undefined);
  /**
   * Maps over the elements of the Map object and applies a function to each element.
   * @param {Function} fn - The function to apply to each element.
   * @returns {Array} - An array containing the results of applying the function to each element.
   */
  map(fn: Function): any[];
  /**
   * Maps each value in the Map object using the provided function and returns an array of the mapped values.
   * @param {Function} fn - The function to apply to each value in the Map object.
   * @returns {Array} - An array of the mapped values.
   */
  mapVal(fn: Function): any[];
  /**
   * Returns the first element in the collection.
   * @returns {any | undefined} The first element in the collection, or undefined if the collection is empty.
   */
  first(): any | undefined;
  /**
   * Finds the first value in the Map that satisfies the provided testing function.
   * @param {Function} fn - The testing function. It should return true if the value satisfies the condition, false otherwise.
   * @returns The first value that satisfies the condition, or undefined if no value satisfies the condition.
   */
  find(fn: Function): any;
  /**
   * Creates a new instance of the same class and returns a filtered version of the current instance.
   * @param {Function} fn - The filter function to apply to each value in the instance.
   * @returns {Object} - A new instance of the same class with the filtered values.
   */
  filter(fn: Function): Object;
  /**
   * Filters the key-value pairs of a Map object based on a given function.
   * @param {Function} fn - The function used to filter the keys.
   * @returns A new Map object containing the filtered key-value pairs.
   */
  filterKey(fn: Function): any;
  /**
   * Returns the last element in the set.
   * @returns {any} The last element in the set, or undefined if the set is empty.
   */
  last(): any;
  /**
   * Returns the last key in the keyArray.
   * @returns The last key in the keyArray.
   */
  lastKey(): any;
  /**
   * Executes a function with the current object as its argument and returns the object itself.
   * @param {Function} fn - The function to be executed.
   * @returns {Object} - The current object.
   */
  tap(fn: Function): Object;
  /**
   * Returns an array containing all the values of the current object.
   * @returns {Array} - An array containing all the values of the object.
   */
  array(): any[];
  /**
   * Returns an array containing all the keys in the Map object.
   * @returns {Array} An array containing all the keys in the Map object.
   */
  keyArray(): any[];
  /**
   * Checks if all the given elements are present in the set.
   * @param {...any} c - The elements to check for presence in the set.
   * @returns {boolean} - True if all elements are present, false otherwise.
   */
  hasAll(...c: any[]): boolean;
  /**
   * Checks if any of the given keys exist in the Map.
   * @param {...any} keys - The keys to check for existence in the Map.
   * @returns {boolean} - True if any of the keys exist in the Map, false otherwise.
   */
  hasAny(...keys: any[]): boolean;
  /**
   * Checks if any key-value pair in the Map satisfies the given condition.
   * @param {Function} fn - The condition function to be applied to each key-value pair.
   *                       It should take two arguments: key and value.
   * @returns {boolean} True if any key-value pair satisfies the condition, false otherwise.
   */
  some(fn: Function): boolean;
  /**
   * Returns a random element from the Set.
   * @returns A random element from the Set.
   */
  random(): any;
  /**
   * Checks if every element in the collection satisfies the provided testing function.
   * @param {Function} fn - The testing function to apply to each element.
   *                       It should return a boolean value indicating whether the element passes the test.
   *                       The function is invoked with two arguments: the element value and the element key.
   * @returns {boolean} - True if every element passes the test, false otherwise.
   */
  every(fn: Function): boolean;
  /**
   * Executes a provided function once for each element in the array.
   * @param {function} fn - The function to execute for each element.
   * @returns {Array} - The modified array.
   */
  each(fn: Function): any[];
  /**
   * Generates a random key from the Set object.
   * @returns A random key from the Set object.
   */
  randomKey(): any;
  /**
   * Checks if the current collection is equal to the given collection.
   * @param {Collection} collection - The collection to compare with.
   * @returns {boolean} True if the collections are equal, false otherwise.
   */
  equals(collection: Collection): boolean;
  /**
   * Calculates the difference between this Set and another collection.
   * @param {Collection} collection - The collection to compare against.
   * @returns {Array} - An array of values that are present in the other collection but not in this Set.
   * If the sizes of the two collections are different, returns a string indicating the size difference.
   */
  difference(collection: Collection): any[];
  /**
   * Finds the key in the Map object that satisfies the given function.
   * @param {Function} fn - The function to test each key-value pair of the Map object.
   * @returns The key that satisfies the function, or the Map object if no key is found.
   */
  findKey(fn: Function): any;
  /**
   * Sorts the entries in the RaidenCol object based on the provided compare function or the default compare function.
   * @param {function} [fn=RaidenCol.compareFunction] - The compare function used to determine the order of the entries. If not provided, the default compare function of the RaidenCol object will be used.
   * @returns {RaidenCol} - The sorted RaidenCol object.
   */
  sort(fn?: Function | undefined): RaidenCol;
  /**
   * Retrieves the element at the specified index from the collection.
   * @param {number} [index=0] - The index of the element to retrieve. Defaults to 0 if not provided.
   * @returns The element at the specified index.
   */
  at(index?: number | undefined): any;
}

export = ActivityFlags;
/**
 * Represents a set of activity flags using a bitfield.
 * @class
 * @extends Bitfield
 * @constructor
 * @param {...bigint} bit - The bits to set in the bitfield.
 */
declare class ActivityFlags extends Bitfield {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {...bigint} bit - The arguments to pass to the superclass constructor.
   */
  constructor(...bit: any[]);
}
declare namespace ActivityFlags {
  /**
   * Represents the available flags for activity settings.
   */
  type Flags = bigint;
  let Flags: bigint;
  let Default: bigint;
  let All: any;
}
import Bitfield = require("./Bitfield");

export = ApplicationFlags;
/**
 * Represents a set of application flags using a bitfield.
 * @class
 * @extends Bitfield
 * @constructor
 * @param {...bigint} bit - The bits to set in the bitfield.
 */
declare class ApplicationFlags extends Bitfield {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {...bigint} bit - The arguments to pass to the superclass constructor.
   */
  constructor(...bit: any[]);
}
declare namespace ApplicationFlags {
  /**
   * Represents the available application flags.
   */
  type Flags = bigint;
  let Flags: bigint;
  let Default: bigint;
  let All: any;
}
import Bitfield = require("./Bitfield");

export = Bitfield;
declare class Bitfield {
  /**
   * Resolves a bit value based on the given input.
   * @param {any} bit - The bit value to resolve.
   * @returns {number | bigint} - The resolved bit value.
   * @throws {BitfieldInvalid} - If the specified bitfield is invalid or not found.
   */
  static resolve(bit: any): number | bigint;
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {number} [bit=this.constructor.defaultBit] - The bit value to initialize the instance with.
   */
  constructor(bit?: number | undefined);
  bitfield: any;
  /**
   * Checks if any of the given bit(s) are set in the bitfield.
   * @param {...bigint} bit - The bit(s) to check.
   * @returns {boolean} True if any of the given bit(s) are set, false otherwise.
   */
  any(...bit: number[]): boolean;
  /**
   * Checks if the given bit(s) are set in the bitfield.
   * @param {...bigint} bit - The bit(s) to check.
   * @returns {boolean} True if the bit(s) are set, false otherwise.
   */
  has(...bit: number[]): boolean;
  /**
   * Adds one or more bit(s) to the current bitfield.
   * @param {...bigint} bit - The bit(s) to add.
   * @returns {this} The modified instance of the class.
   */
  add(...bit: number[]): this;
  /**
   * Removes one or more bits from the bitfield.
   * @param {...bigint} bits - The bits to remove from the bitfield.
   * @returns {Bitfield} A new Bitfield object with the specified bits removed.
   */
  remove(...bits: number[]): Bitfield;
  /**
   * Converts the flags of an object into an array of keys.
   * @returns {Array} An array of keys representing the flags that are set in the object.
   */
  toArray(): any[];
  /**
   * Returns a string representation of the bitfield.
   * @returns {string} - The string representation of the bitfield.
   */
  toString(): string;
  /**
   * Serializes the current object into a JSON object.
   * @returns {Object} - The serialized object.
   */
  serialize(): Object;
  /**
   * Freezes the current object, making it immutable.
   * @returns None
   */
  freeze(): Readonly<this>;
}
declare namespace Bitfield {
  let Flags: object;
  let defaultBit: bigint;
}

export = ChannelFlags;
/**
 * Represents a set of channel flags using a bitfield.
 * @class
 * @extends Bitfield
 * @constructor
 * @param {...bigint} bit - The bits to set in the bitfield.
 */
declare class ChannelFlags extends Bitfield {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {...bigint} bit - The arguments to pass to the superclass constructor.
   */
  constructor(...bit: any[]);
}
declare namespace ChannelFlags {
  /**
   * Channel flags and their corresponding bit numbers.
   */
  type Flags = bigint;
  let Flags: bigint;
  let Default: bigint;
  let All: any;
}
import Bitfield = require("./Bitfield");

export const ActivityType: {};
export const InteractionType: {};
export const ApplicationCommandTypes: {};
export const ChannelType: {};
export const ComponentType: {};
export const ButtonStyle: {};
export const TextInputStyle: {};
export const OptionType: {};
export const VideoQualityMode: {};
export const ApplicationCommandPermissionType: {};
export const OverwriteType: {};
export const MemberShipState: {};
export const MessageType: {};
export const VerificationLevel: {};
export const DefaultMessageNotifications: {};
export const ExplicitContentFilter: {};
export const MfaLevel: {};
export const PremiumTier: {};
export const NsfwLevel: {};
export const IntegrationExpireBehavior: {};
export const InviteTargetTypes: {};
export const PrivacyLevel: {};
export const GuildScheduledEventPrivacyLevel: {};
export const GuildScheduledEventStatus: {};
export const GuildScheduledEventEntityType: {};
export const StickerType: {};
export const StickerFormatType: {};
export const GuildAuditLogEntryActionTypes: {};
export const WebhookType: {};
export const GuildAutoModTriggerTypes: {};
export const GuildAutoModEventTypes: {};
export const GuildAutoModPresetTypes: {};
export const GuildAutoModActionTypes: {};
export const GuildPrimaryCategory: {};
export namespace ComponentTypes {
  let Action_Row: number;
  let Button: number;
  let String_Select: number;
  let Input_Text: number;
  let User_Select: number;
  let Role_Select: number;
  let Mentionable_Select: number;
  let Channel_Select: number;
}
export namespace Opcodes {
  let Dispatch: number;
  let Heartbeat: number;
  let Identify: number;
  let Presence_Update: number;
  let Voice_State_Update: number;
  let Resume: number;
  let Reconnect: number;
  let Request_Guild_Members: number;
  let Invalid_Session: number;
  let Hello: number;
  let Heartbeat_Ack: number;
}
export namespace WebsocketReadyState {
  let Connecting: number;
  let Open: number;
  let Closing: number;
  let Closed: number;
}
export namespace Colors {
  let Default: number;
  let White: number;
  let Aqua: number;
  let Green: number;
  let Blue: number;
  let Yellow: number;
  let Purple: number;
  let Luminous_Vivid_Pink: number;
  let Fuchsia: number;
  let Gold: number;
  let Orange: number;
  let Red: number;
  let Grey: number;
  let Navy: number;
  let Dark_Aqua: number;
  let Dark_Green: number;
  let Dark_Blue: number;
  let Dark_Purple: number;
  let Dark_Vivid_Pink: number;
  let Dark_Gold: number;
  let Dark_Orange: number;
  let Dark_Red: number;
  let Dark_Grey: number;
  let Darker_Grey: number;
  let Light_Grey: number;
  let Dark_Navy: number;
  let Blurple: number;
  let Greyple: number;
  let Dark_But_Not_Black: number;
  let Not_Quite_Black: number;
}
export namespace Activity {
  let Playing: number;
  let Streaming: number;
  let Listening: number;
  let Watching: number;
  let Custom: number;
  let Competing: number;
}
export namespace Status {
  let Online: string;
  let Dnd: string;
  let Idle: string;
  let Invisible: string;
  let Offline: string;
}
export namespace InputTextStyle {
  let Short: number;
  let Paragraph: number;
}
export namespace ApiVersion {
  let V6: number;
  let V7: number;
  let V8: number;
  let V9: number;
  let V10: number;
}
export namespace ApplicationCommandType {
  let Chat_Input: number;
  let User: number;
  let Message: number;
}
export namespace CDN {
  let root: string;
  function DefaultAvatarURL(id: any, format?: string): string;
  function UserAvatar(avatar: any, dynamic: any, size: any, format: string | undefined, userId: any): string;
  function UserBanner(banner: any, dynamic: any, size: any, format: string | undefined, userId: any): string;
  function GuildMemberBanner(banner: any, dynamic: any, size: any, format: string | undefined, memberId: any, guildId: any): string;
  function TeamIcon(icon: any, dynamic: any, size: any, format: string | undefined, teamId: any): string;
  function ApplicationIcon(icon: any, dynamic: any, size: any, format: string | undefined, applicationId: any): string;
  function ChannelBanner(banner: any, dynamic: any, size: any, format: string | undefined, channelId: any): string;
  function GuildIcon(icon: any, dynamic: any, size: any, format: string | undefined, guildId: any): string;
  function GuildBanner(banner: any, dynamic: any, size: any, format: string | undefined, guildId: any): string;
  function GuildSplash(splash: any, dynamic: any, size: any, format: string | undefined, guildId: any): string;
  function GuildDiscoverySplash(discoverySplash: any, dynamic: any, size: any, format: string | undefined, guildId: any): string;
  function RoleIcon(roleIcon: any, dynamic: any, size: any, format: string | undefined, roleId: any): string;
  function GuildMemberAvatar(avatar: any, dynamic: any, size: any, format: string | undefined, memberId: any, guildId: any): string;
  function GuildScheduledEventCoverImage(coverImage: any, dynamic: any, size: any, format: string | undefined, eventId: any): string;
  function StickerPackBanner(bannerId: any, size: any, format?: string): string;
  function StickerImage(stickerId: any, size: any, format?: string): string;
  function WebhookAvatar(avatar: any, dynamic: any, size: any, format: string | undefined, webhookId: any): string;
  function UserAvatarDecoration(decoration: any, size: any, format: string | undefined, userId: any): string;
  function EmojiURL(emojiId: any, dynamic: any, size: any, format: string | undefined, quality: any): string;
}

export = DataManager;
/**
 * A utility class for managing data.
 * @class
 */
declare class DataManager {
  /**
   * Resolves a file to be used in a function or operation.
   * @param {Buffer | MessageAttachment | { filename: string, file: string }} file - The file to resolve.
   * @returns {Promise<Buffer | null>} - A promise that resolves to the resolved file as a Buffer, or null if the file cannot be resolved.
   */
  static resolveFile(
    file:
      | Buffer
      | MessageAttachment
      | {
          filename: string;
          file: string;
        }
  ): Promise<Buffer | null>;
}
import MessageAttachment = require("../Builders/MessageAttachment");

export = EmojiResolver;
/**
 * A utility class for resolving and transforming emojis.
 * @class
 */
declare class EmojiResolver {
  /**
   * Transforms an emoji object or string into a formatted emoji string.
   * @param {Object|string} emoji - The emoji object or string to transform.
   * @param {Client} client - The Discord client instance.
   * @returns {string} The formatted emoji string.
   * @throws {RangeError} If the emoji is not found in the emoji cache.
   */
  static transformEmoji(emoji: string | Object | undefined, client: Client): string;
}

export = GuildMemberFlags;
/**
 * A bitfield that represents flags for a guild member.
 * @class
 * @extends {Bitfield}
 */
declare class GuildMemberFlags extends Bitfield {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {...bigint} bit - The arguments to pass to the superclass constructor.
   */
  constructor(...bit: any[]);
}
declare namespace GuildMemberFlags {
  /**
   * Represents the flags associated with a guild member.
   */
  type Flags = bigint;
  let Flags: bigint;
  let Default: bigint;
  let All: any;
}
import Bitfield = require("./Bitfield");

export = Intents;
/**
 * Represents the intents that the bot wishes to subscribe to.
 * @class
 * @extends Bitfield
 */
declare class Intents extends Bitfield {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {...bigint} bit - The arguments to pass to the superclass constructor.
   */
  constructor(...bit: any[]);
}
declare namespace Intents {
  /**
   * Represents the flags for different intents in Discord.
   */
  type Flags = bigint;
  let Flags: bigint;
  let Default: bigint;
  let All: any;
}
import Bitfield = require("./Bitfield");

export = InvitePayload;
/**
 * A utility class for creating invite payloads.
 * @class
 */
declare class InvitePayload {
  /**
   * Creates an invite object with the given payload.
   * @param {Object} payload - The payload object containing the invite properties.
   * @param {number} [payload.maxAge=86400] - The maximum age of the invite in seconds.
   * @param {number | undefined} [payload.maxUses=undefined] - The maximum number of times the invite can be used.
   * @param {boolean | undefined} [payload.temporary=undefined] - Whether the invite is temporary or not.
   * @param {string | undefined} [payload.targetType=undefined] - The type of target for the invite.
   * @param {string | undefined} [payload.targetUser=undefined] - The ID of the target user for the
   */
  static create(payload?: {
    maxAge?: number | undefined;
    maxUses?: number | undefined;
    temporary?: boolean | undefined;
    targetType?: string | undefined;
    targetUser?: string | undefined;
  }): {
    max_age: number;
    max_uses: number | undefined;
    temporary: boolean | undefined;
    target_type: number | undefined;
    target_user_id: any;
    target_application_id: any;
  };
}

export = MessageFlags;
/**
 * Represents a bitfield for Discord message flags.
 * @class
 * @extends Bitfield
 */
declare class MessageFlags extends Bitfield {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {...bigint} bit - The arguments to pass to the superclass constructor.
   */
  constructor(...bit: any[]);
}
declare namespace MessageFlags {
  /**
   * Represents the different flags that can be applied to a message.
   */
  type Flags = bigint;
  let Flags: bigint;
  let Default: bigint;
  let All: any;
}
import Bitfield = require("./Bitfield");

export = MessagePayload;
/**
 * Represents a message payload and provides methods for creating and resolving message data.
 * @class
 */
declare class MessagePayload {
  /**
   * Creates a payload for a given type.
   * @param {Object} payload - The payload object.
   * @param {string} type - The type of payload to create.
   * @returns {Promise<Object>|Object} - The created payload.
   */
  static create(payload: Object | undefined, type: string): Promise<Object> | Object;
  /**
   * Resolves a file to a Buffer object.
   * @param {Buffer | MessageAttachment | string} file - The file to resolve.
   * @returns {Promise<Buffer | null>} - A Promise that resolves to a Buffer object or null if the file cannot be resolved.
   */
  static resolveFiles(file: Buffer | MessageAttachment | string): Promise<Buffer | null>;
  /**
   * Resolves the data payload for a message.
   * @param {Object} [payload] - The payload object containing the message data.
   * @returns {Object} - The resolved data payload for the message.
   */
  static resolveData(payload?: Object | undefined): Object;
  /**
   * Resolves the message flags and returns the parsed bitfield value.
   * @param {number} flags - The message flags to resolve.
   * @returns {number | undefined} The parsed bitfield value of the message flags.
   */
  static resolveMessageFlags(flags: number): number | undefined;
  /**
   * Resolves the modal data and returns an object with the specified type and data.
   * @param {Object} data - The modal data object.
   * @param {string} type - The type of the modal.
   * @returns {Object} - An object with the specified type and data.
   */
  static resolveModal(data: Object | undefined, type: string): Object;
  /**
   * Resolves a webhook payload by merging it with additional extras.
   * @param {object} payload - The webhook payload object.
   * @param {object} extras - Additional extras to merge with the payload.
   * @returns {object} - The resolved webhook payload with merged extras.
   */
  static resolveWebhook(payload?: object, extras?: object): object;
  /**
   * Resolves deferred data by assigning the appropriate flags and returning the resolved data.
   * @param {object} data - The data object to resolve.
   * @param {number} [type=5] - The type of the resolved data.
   * @returns {object} - The resolved data object with assigned flags.
   */
  static resolveDefers(data?: object, type?: number | undefined): object;
}
import MessageAttachment = require("../Builders/MessageAttachment");

export = Permissions;
/**
 * Class representing a Discord permission bitfield.
 * @class
 * @extends Bitfield
 */
declare class Permissions extends Bitfield {
  /**
   * Create a new Permissions bitfield
   * @constructor
   * @param {...bigint} bit - Bit positions to enable
   */
  constructor(...bit: bigint[]);
}
declare namespace Permissions {
  /**
   * Object containing bit flags for Permissions
   */
  type Flags = bigint;
  let Flags: bigint;
  let Default: bigint;
  let All: any;
}
import Bitfield = require("./Bitfield");

export = RoleFlags;
/**
 * Represents the possible flags for a Role
 * @class
 * @extends {Bitfield}
 */
declare class RoleFlags extends Bitfield {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {...bigint} bit - The arguments to pass to the superclass constructor.
   */
  constructor(...bit: any[]);
}
declare namespace RoleFlags {
  /**
   * Represents the available role flags.
   */
  type Flags = bigint;
  let Flags: bigint;
  let Default: bigint;
  let All: any;
}
import Bitfield = require("./Bitfield");

export = Snowflake;
/**
 * Represents a Snowflake, a unique identifier used in distributed systems.
 * @class
 */
declare class Snowflake {
  /**
   * Deconstructs a Discord snowflake into its individual components.
   * @param {string} snowflake - The snowflake to deconstruct.
   * @returns {Object} An object containing the deconstructed components of the snowflake:
   * - createdAt: The date and time when the snowflake was created.
   * - timestamp: The timestamp of the snowflake.
   * - workerId: The ID of the worker that generated the snowflake.
   * - processId: The ID of the process that generated the snowflake.
   * - increment: The increment portion of the snowflake.
   * - binary: The binary representation of the snowflake.
   */
  static deconstruct(snowflake: string): Object;
  /**
   * Generates a unique ID based on the given timestamp.
   * @param {number | Date} [timestamp=Date.now()] - The timestamp to generate the ID from.
   * @returns {string} - The generated unique ID.
   * @throws {TypeError} - If the timestamp is not a number or a valid Date object.
   */
  static generate(timestamp?: number | Date | undefined): string;
}
declare namespace Snowflake {
  let EPOCH: number;
}

export = StickerPayload;
/**
 * Represents a sticker payload.
 * @class
 */
declare class StickerPayload {
  /**
   * Creates a payload for an API request.
   * @param {Object} payload - The payload object.
   * @returns {Promise<Object>} - The created payload.
   */
  static create(payload?: Object): Promise<Object>;
  /**
   * Resolves the data object by validating and formatting its properties.
   * @param {Object} [data] - The data object to resolve.
   * @returns {Object} - The resolved data object with validated and formatted properties.
   * @throws {RangeError} - If the name property is not between 2 and 30 characters.
   * @throws {RangeError} - If the description property is not between 2 and 100 characters.
   * @throws {RangeError} - If the tags property is longer than 200 characters.
   */
  static resolveData(data?: Object | undefined): Object;
}

export = SystemChannelFlags;
/**
 * A bitfield that represents the system channel flags.
 * @class
 * @extends {Bitfield}
 */
declare class SystemChannelFlags extends Bitfield {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {...bigint} bit - The arguments to pass to the superclass constructor.
   */
  constructor(...bit: any[]);
}
declare namespace SystemChannelFlags {
  /**
   * Represents the flags for the system channel.
   */
  type Flags = bigint;
  let Flags: bigint;
  let Default: bigint;
  let All: any;
}
import Bitfield = require("./Bitfield");

export = ThreadMemberFlags;
/**
 * A bitfield of flags for a thread member.
 * @class
 * @extends {Bitfield}
 */
declare class ThreadMemberFlags extends Bitfield {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {...bigint} bit - The arguments to pass to the superclass constructor.
   */
  constructor(...bit: any[]);
}
declare namespace ThreadMemberFlags {
  /**
   * An object that represents the flags for a thread member.
   */
  type Flags = bigint;
  let Flags: bigint;
  let Default: bigint;
  let All: any;
}
import Bitfield = require("./Bitfield");

export = UserFlags;
/**
 * Represents a set of user flags using a bitfield.
 * @class
 * @extends Bitfield
 */
declare class UserFlags extends Bitfield {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {...bigint} bit - The arguments to pass to the superclass constructor.
   */
  constructor(...bit: any[]);
}
declare namespace UserFlags {
  /**
   * An object that represents various user flags in Discord.
   * Each flag is represented as a bit in a BigInt value.
   */
  type Flags = bigint;
  let Flags: bigint;
  let Default: bigint;
  let All: any;
}
import Bitfield = require("./Bitfield");

export = UserPayload;
/**
 * A class representing a user payload.
 * @class
 */
declare class UserPayload {
  /**
   * Creates a user object based on the given payload.
   * @param {Object} payload - The payload object containing user information.
   * @param {string} payload.username - The username of the user.
   * @param {string} payload.bio - The bio of the user.
   * @param {string} payload.avatar - The avatar image of the user.
   * @param {string} payload.avatarDecorations - The avatar decorations image of the user.
   * @returns {Object} - The created user object.
   */
  static create(payload?: {username: string; bio: string; avatar: string; avatarDecorations: string}): Object;
}

export = Util;
/**
 * Utility class with various helper functions.
 * @class
 */
declare class Util {
  /**
   * Generates a Discord timestamp string based on the given time and style.
   * @param {number} time - The Unix timestamp to format.
   * @param {string} style - The style of the timestamp. Valid values are "t" (short time), "T" (long time), "d" (short date), "D" (long date), "f" (short date/time), "F" (long date/time), "R" (relative time), "r" (relative time with seconds), "c" (calendar time), "C" (calendar time with seconds).
   * @returns {string} - The formatted Discord timestamp string.
   */
  static generateDiscordTimestamp(time: number, style: string): string;
  /**
   * Resolves a color value to its corresponding integer representation.
   * @param {string | number} color - The color value to resolve. Can be a string representing a color name or a hexadecimal color code, or a number representing a color value.
   * @returns {number} - The resolved color value as an integer.
   */
  static resolveColor(color: string | number): number;
  /**
   * Retrieves the buffer data from the given file.
   * @param {Buffer | MessageAttachment | string} file - The file to retrieve the buffer data from.
   * @returns {Promise<Buffer>} - The buffer data of the file.
   */
  static getBuffer(file: Buffer | MessageAttachment | string): Promise<Buffer>;
  /**
   * Generates a data URI from a base64 string or a Buffer object.
   * @param {string | Buffer} base64 - The base64 string or Buffer object.
   * @returns {string | undefined} - The data URI string or undefined if base64 is falsy.
   */
  static generateDataURI(base64: string | Buffer): string | undefined;
  /**
   * Generates a file with the given buffer and filename.
   * @param {Buffer | string} buffer - The buffer or path to the file content.
   * @param {string} [filename] - The name of the file to be generated. If not provided, "file.txt" will be used as the default filename.
   * @returns None
   */
  static generateFile(buffer: Buffer | string, filename?: string | undefined): Promise<void>;
  /**
   * Converts a base64 encoded string to a buffer.
   * @param {string} base64 - The base64 encoded string.
   * @returns {Buffer} - The buffer representation of the base64 string.
   */
  static base64ToBuffer(base64: string): Buffer;
  /**
   * Generates an ISO string representation of the given date.
   * @param {number | Date} [date=Date.now()] - The date to convert to an ISO string. If not provided, the current date and time will be used.
   * @returns {string | null} - The ISO string representation of the date, or null if the input is null.
   */
  static generateISOString(date?: number | Date | undefined): string | null;
}
import MessageAttachment = require("../Builders/MessageAttachment");
