/**
 * A class representing a REST client.
 * @class
 * @param {Object} client - The client object.
 */
export class REST {
  /**
   * A class representing a REST client.
   * @class
   * @param {Object} client - The client object.
   */
  constructor(client: Object);

  /**
   * Set the token for the REST client.
   * @param {string} token - The token to set.
   * @returns {REST} The REST client instance.
   */
  setToken(token: string): REST;

  /**
   * Make a request to the server with the PATCH method
   * @param {string} url - The URL to make the request to
   * @param {Object} options - Additional options for the request
   * @returns {Promise<Object>} - The response from the server
   */
  _make(url: string, options: Object): Promise<Object>;

  /**
   * Make a request to the server with the GET method
   * @param {string} url - The URL to make the request to
   * @param {Object} options - Additional options for the request
   * @returns {Promise<Object>} - The response from the server
   */
  get(url: string, options: Object): Promise<Object>;

  /**
   * Make a request to the server with the POST method
   * @param {string} url - The URL to make the request to
   * @param {Object} options - Additional options for the request
   * @returns {Promise<Object>} - The response from the server
   */
  post(url: string, options: Object): Promise<Object>;

  /**
   * Make a request to the server with the DELETE method
   * @param {string} url - The URL to make the request to
   * @param {Object} options - Additional options for the request
   * @returns {Promise<Object>} - The response from the server
   */
  delete(url: string, options: Object): Promise<Object>;

  /**
   * Make a request to the server with the PUT method
   * @param {string} url - The URL to make the request to
   * @param {Object} options - Additional options for the request
   * @returns {Promise<Object>} - The response from the server
   */
  put(url: string, options: Object): Promise<Object>;

  /**
   * Make a request to the server with the PATCH method
   * @param {string} url - The URL to make the request to
   * @param {Object} options - Additional options for the request
   * @returns {Promise<Object>} - The response from the server
   */
  patch(url: string, options: Object): Promise<Object>;
}

import {EventEmitter} from "events";

/**
 * Client class representing a Discord bot client.
 * @extends EventEmitter
 * @class
 */
export class Client extends EventEmitter {
  /**
   * Client class representing a Discord bot client.
   * @extends EventEmitter
   * @class
   */
  constructor(options?: {
    intents?: String[];
    token: String;
    presence?: Object;
    maxShards?: Number;
    shardId?: Number;
    version?: String;
    encoding?: String;
    timeout?: Number;
    partials?: String[];
  });

  /**
   * It returns a new REST object with the token set to the token of the client.
   * @returns A new instance of the REST class.
   */
  api: any;

  /**
   * The function returns the value of the CDN variable.
   * @returns The CDN property.
   */
  cdn: any;

  /**
   * It fetches an invite from the Discord API
   * @param invite - The invite code
   * @param query
   * @returns A new Invite object.
   */
  fetchInvite(invite: any, query: any): any;

  /**
   * It fetches the preview of a guild
   * @param guild - The guild to fetch the preview for.
   * @returns A new GuildPreview object.
   */
  fetchPreview(guild: any): any;

  /**
   * It fetches the guild widget of a guild
   * @param guild - The guild object or ID
   * @returns A new instance of the GuildWidget class.
   */
  fetchGuildWidget(guild: any): any;

  /**
   * It fetches the voice regions from the Discord API and returns them as a RaidenCol
   * @returns An array of objects.
   */
  fetchVoiceRegions(): any;

  /**
   * It takes a template code and creates a new guild with the template
   * @param code - The code of the template you want to use.
   * @param [options] - Object
   * @returns The guild object.
   */
  generateTemplate(code: any, options?: any): any;

  /**
   * The function generates an invite link for the user to invite the bot to their server
   * @param [options] - Object
   * @returns The URL to the OAuth2 page.
   */
  generateInvite(options?: any): any;

  /**
   * It fetches a sticker from the API and returns a new Sticker object
   * @param sticker - The sticker object or ID
   * @returns A new Sticker object.
   */
  fetchSticker(sticker: any): any;

  /**
   * It fetches the sticker packs from the API and returns them as a RaidenCol
   * @returns A collection of sticker packs.
   */
  fetchNitroPacks(): any;

  /**
   * It fetches a guild template from the discord api
   * @param code - The code of the template you want to fetch.
   * @returns A new GuildTemplate object.
   */
  fetchGuildTemplate(code: any): any;

  /**
   * It takes an object with a name and icon property, and returns an object with a name and icon
   * property
   * @param [o] - The object that contains the parameters.
   * @returns an object with the properties name and icon.
   */
  static generateTemplateGuild(o?: any): any;

  /**
   * It takes an object with properties that are camelCase and returns an object with properties that
   * are snake_case
   * @param [o] - The options object.
   * @returns an object with the following properties:
   */
  static transformInviteOptions(o?: any): any;

  /**
   * It transforms a presence object into a presence object
   * @param [presence] - The presence object to transform.
   * @returns The presence object is being returned.
   */
  static transformPresence(presence?: any): any;

  /**
   * It takes an object with a name, type, and url property, and returns an object with the same
   * properties, but with the type property converted to a number.
   * @param [activities]
   * @returns An object with the properties name, type, and url.
   */
  static transformActivities(activities?: any): any;
}

/**
 * The class "Base" has a constructor that sets a "client" property.
 * @class
 */
export class Base {
  /**
   * The class "Base" has a constructor that sets a "client" property.
   * @class
   */
  constructor(client: Client);
}
/**
 * A class representing a Discord button.
 * @class
 */
export class Button {
  /**
   * A class representing a Discord button.
   * @class
   */
  constructor(options: {emoji: Object; label: string; url: string; customid: string; style: string; disabled: boolean});
}

/**
 * Class representing a Channel Select component for Discord message components.
 * @class
 */
export class ChannelSelect {
  /**
   * Class representing a Channel Select component for Discord message components.
   * @class
   */
  constructor(data: {custom_id: string; options: any; placeholder: string; min_values: number; max_values: number; disabled: boolean});

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
  static transformOptions(options: {label: string; value: string; description: string; emoji: string; default: boolean}): Object;

  /**
   * Transforms the given emoji data into a format compatible with the select component.
   * @static
   * @param {Object|string} emoji - The emoji data to transform.
   * @param {string} emoji.name - The name of the emoji.
   * @param {string} emoji.id - The ID of the emoji.
   * @param {boolean} emoji.animated - Whether the emoji is animated.
   * @returns {Object} The transformed emoji data.
   */
  static transformEmoji(emoji: {name: string; id: string; animated: boolean} | string): Object;

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
  setDisabled(maxValue: number): ChannelSelect;

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

/**
 * Class representing an embed object for use in Discord messages.
 * @class
 */
export class Embed {
  /**
   * Class representing an embed object for use in Discord messages.
   * @class
   */
  constructor(options: {
    title?: string;
    color?: number;
    author?: Object;
    url?: string;
    description?: string;
    image?: string;
    footer?: Object;
    timestamp?: string;
    thumbnail?: string;
    fields?: any;
  });
}

/**
 * A class representing fields for guild member verification.
 * @class
 */
export class GuildMemberVerificationFields {
  /**
   * A class representing fields for guild member verification.
   * @class
   */
  constructor(data: {enabled: boolean; description: string; fields: any});

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
  setFields(fields: Object): GuildMemberVerificationFields;

  /**
   * Adds one or more verification fields.
   * @param  {...Object} fields - One or more objects representing the individual verification fields.
   * @returns {GuildMemberVerificationFields} The GuildMemberVerificationFields object.
   */
  addFields(fields: Object): GuildMemberVerificationFields;

  /**
   * Transforms an object representing a verification field into the required format.
   * @param {Object} fields - An object representing a verification field.
   * @returns {Object} An object representing the verification field in the required format.
   */
  static transformFields(fields: Object): Object;

  /**
   * Returns the verification fields as a JSON object.
   * @returns {Object} The verification fields as a JSON object.
   */
  toJSON(): Object;
}

/**
 * Represents an Input Text component for a Discord interaction message.
 * @class
 */
export class InputText {
  /**
   * Represents an Input Text component for a Discord interaction message.
   * @class
   */
  constructor(data?: {
    custom_id?: string;
    style?: string | number;
    label?: string;
    min_length?: number;
    max_length?: number;
    required?: boolean;
    value?: string;
    placeholder?: string;
  });

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

/**
 * Represents an action row containing components, such as buttons or selects, to be added to a message.
 * @class
 */
export class MessageActionRow {
  /**
   * Represents an action row containing components, such as buttons or selects, to be added to a message.
   * @class
   */
  constructor(data: {components: any});

  /**
   * Adds one or more components to the action row.
   * @param  {...any} components - The components to be added to the action row.
   * @returns {MessageActionRow} - The action row with the new components added.
   */
  addComponents(components: any): MessageActionRow;

  /**
   * Sets the components of the action row.
   * @param  {...any} components - The components to be set as the action row's components.
   * @returns {MessageActionRow} - The action row with the new components set.
   */
  setComponents(components: any): MessageActionRow;

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

/**
 * Represents a message attachment.
 * @class
 */
export class MessageAttachment {
  /**
   * Represents a message attachment.
   * @class
   */
  constructor(url: string, data: Object, filename: string);

  /**
   * Sets the file for the attachment.
   * @param {BufferResolvable|Stream} file - The file to attach.
   * @returns {MessageAttachment} This attachment.
   */
  setFile(file: any): MessageAttachment;

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

/**
 * A class representing a message button.
 * @class
 */
export class MessageButton {
  /**
   * A class representing a message button.
   * @class
   */
  constructor(data?: Object);

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

/**
 * Represents a message embed.
 * @class
 */
export class MessageEmbed {
  /**
   * Represents a message embed.
   * @class
   */
  constructor(data?: {
    title?: string;
    type?: string;
    description?: string;
    url?: string;
    timestamp?: string;
    color?: string;
    footer?: Object;
    image?: Object;
    thumbnail?: Object;
    video?: Object;
    provider?: Object;
    author?: Object;
    fields?: Object[];
  });

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
  addFields(fields: Object | Object[]): MessageEmbed;

  /**
   * Adds a single field to the embed.
   * @param {string} name - The name of the field.
   * @param {string} value - The value of the field.
   * @param {boolean} [inline] - Whether the field should be displayed inline.
   * @returns {MessageEmbed} The MessageEmbed instance.
   */
  addField(name: string, value: string, inline?: boolean): MessageEmbed;

  /**
   * Sets the fields of the embed.
   * @param {...object|Array<object>} fields - The fields to set for the embed.
   * @returns {MessageEmbed} The MessageEmbed instance.
   */
  setFields(fields: Object | Object[]): MessageEmbed;

  /**
   * Converts the MessageEmbed instance to a plain object.
   * @returns {object} The plain object representation of the MessageEmbed instance.
   */
  toJSON(): Object;

  /**
   * Transforms the input fields object to a new object with specific properties.
   * @param {Object} fields - The input object containing fields to be transformed.
   * @param {string} fields.name - The name of the field.
   * @param {any} fields.value - The value of the field.
   * @param {boolean|undefined} [fields.inline] - Whether the field should be displayed inline. If not specified, defaults to undefined.
   * @returns {Object} - A new object with transformed fields.
   */
  static transformFields(fields: {name: string; value: any; inline?: boolean | undefined}): Object;
}

/**
 * A modal message with components.
 * @class
 */
export class Modal {
  /**
   * A modal message with components.
   * @class
   */
  constructor(data: {title: string; custom_id: string});

  /**
   * Adds one or more components to the modal.
   * @param {...Object[]} components - The components to add.
   * @returns {Modal} This modal instance.
   */
  addComponents(components: Object[]): Modal;

  /**
   * Returns a JSON representation of the modal.
   * @returns {Object} The JSON representation of the modal.
   */
  toJSON(): Object;
}

/**
 * Represents a Discord role select component that allows users to select one or more roles.
 * @class
 */
export class RoleSelect {
  /**
   * Represents a Discord role select component that allows users to select one or more roles.
   * @class
   */
  constructor(data?: {
    custom_id?: string;
    customId?: string;
    options?: Object[];
    placeholder?: string;
    min_values?: number;
    max_values?: number;
    minValues?: number;
    maxValues?: number;
    disabled?: boolean;
  });

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
  static transformOptions(options: {label?: string; value?: string; description?: string; emoji?: string | Object; default?: boolean}): Object;

  /**
   * Transforms an emoji to the structure expected by Discord's API.
   * @param {Object} emoji - The emoji to transform.
   * @returns {Object} The transformed emoji.
   * @static
   */
  static transformEmoji(emoji: Object): Object;

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

/**
 * A row of buttons to be added to a message component.
 * @class
 */
export class Row {
  /**
   * A row of buttons to be added to a message component.
   * @class
   */
  constructor(data?: {components?: Object[]});

  /**
   * An array of button components included in the row.
   * @type {Array<Object>}
   */
  components: Object[];
}

/**
 * Class representing a select menu component.
 * @class
 */
export class SelectMenu {
  /**
   * Class representing a select menu component.
   * @class
   */
  constructor(options: {customid: string; placeholder: string; disabled?: boolean; minvalues?: number; maxvalues?: number; options?: any});
}

/**
 * Represents a select menu with string options.
 * @class
 */
export class StringSelect {
  /**
   * Represents a select menu with string options.
   * @class
   */
  constructor(data?: Object);

  /**
   * Transforms an option object for a string select component into a simpler format.
   * @param {Object} [options={}] - The option object to transform.
   * @returns {Object} - The transformed option object.
   * @throws {RangeError} - If the option object is missing the label or value properties, or if the default property is not a boolean.
   */
  static transformOptions(options?: Object): Object;

  /**
   * Transforms an emoji object for a string select component into a simpler format.
   * @param {Object} emoji - The emoji object to transform.
   * @returns {Object} - The transformed emoji object.
   */
  static transformEmoji(emoji: Object): Object;

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
  setOptions(options?: Object[]): StringSelect;

  /**
   * Adds options to the select menu.
   * @param {Object[]} [options=[]] - The options to add to the select menu.
   * @returns {StringSelect} - The updated StringSelect instance.
   * @throws {RangeError} - If the options array has more items than can be added to the select menu.
   * @throws {RangeError} - If no options are provided to add to the select menu.
   */
  addOptions(options?: Object[]): StringSelect;

  /**
   * Returns the JSON representation of the select menu.
   * @returns {Object} - The JSON representation of the select menu.
   */
  toJSON(): Object;
}

/**
 * Represents a user select component in a Discord interaction.
 * @class
 */
export class UserSelect {
  /**
   * Represents a user select component in a Discord interaction.
   * @class
   */
  constructor(data?: {custom_id?: string; options?: Object[]; placeholder?: string; min_values?: number; max_values?: number; disabled?: boolean});

  /**
   * Transforms an option object for a user select component into a simpler format.
   * @param {Object} [options={}] - The option object to transform.
   * @returns {Object} - The transformed option object.
   */
  static transformOptions(options?: Object): Object;

  /**
   * Transforms a Discord emoji object or string into a simpler format.
   * @param {Object|string} emoji - The Discord emoji object or string to transform.
   * @returns {Object} - The transformed emoji object.
   */
  static transformEmoji(emoji: Object | string): Object;

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
  setOptions(options: Object[]): UserSelect;

  /**
   * Converts the user select component to a plain object that can be sent in a Discord message.
   * @returns {Object} - The user select component as a plain object.
   */
  toJSON(): Object;
}

/**
 * It's a Map with some extra methods.
 * @class RaidenCol
 * @extends Map
 */
export class RaidenCol extends Map {
  /**
   * It's a Map with some extra methods.
   * @class RaidenCol
   * @extends Map
   */
  constructor();

  /**
   * The size() method returns the number of elements in the array
   * @returns The size of the array.
   */
  size: any;

  /**
   * It takes a function as an argument, and returns an array of the keys of the object, mapped to the
   * function
   * @param fn - A function that produces an element of the new Array, taking three arguments:
   */
  map(fn: any): void;

  /**
   * It takes a function as an argument, and returns an array of the results of that function being
   * applied to each value in the map.
   * @param fn - The function to apply to each value in the Map.
   * @returns An array of values that are returned from the function.
   */
  mapVal(fn: any): any;

  /**
   * If the size of the list is less than or equal to 0, return undefined. Otherwise, return the first
   * value in the list.
   * @returns The first value in the Map.
   */
  first(): any;

  /**
   * It takes a function as an argument and returns the first value in the array that returns true when
   * passed to the function
   * @param fn - A function that returns a boolean value.
   * @returns The value of the first element in the array that satisfies the function.
   */
  find(fn: any): any;

  /**
   * If the function passed to filter returns true, then the key/value pair is added to the new Map.
   * @param fn - The function to test each element of the map.
   * @returns A new Map object with the same keys and values as the original Map object, but with only
   * the values that pass the test implemented by the provided function.
   */
  filter(fn: any): any;

  /**
   * If the key passes the test, add it to the new Map.
   * @param fn - The function to call for each key.
   * @returns A new Map object with the same keys and values as the original Map object.
   */
  filterKey(fn: any): any;

  /**
   * It returns the last element of the array.
   * @returns The last value in the Map.
   */
  last(): any;

  /**
   * It returns the last key in the object.
   * @returns The last key in the object.
   */
  lastKey(): any;

  /**
   * The tap function takes a function as an argument and calls it with the current object as an
   * argument. It then returns the current object.
   * @param fn - The function to call.
   * @returns The object that was passed in.
   */
  tap(fn: any): any;

  /**
   * It checks if the key is present in the map.
   * @param k - The key of the element to test for presence in the Map object.
   * @returns The super.has(k) method is being returned.
   */
  has(k: any): any;

  /**
   * Return an array of the values in the Map.
   * @returns An array of the values in the map.
   */
  array(): any;

  /**
   * It returns an array of the keys in the map.
   * @returns An array of the keys in the map.
   */
  keyArray(): any;

  /**
   * If the first argument is an array, then check if every element in the array is in the set. If the
   * first argument is not an array, then check if every argument is in the set.
   * @param c - The array of elements to check for.
   * @returns The return value is a boolean.
   */
  hasAll(c: any): any;

  /**
   * If the first argument is an array, then check if any of the elements in the array are in the map,
   * otherwise check if any of the arguments are in the map.
   * @param keys - The keys to check for.
   * @returns The return value is a boolean.
   */
  hasAny(keys: any): any;

  /**
   * If the callback function returns true for any of the entries, return true, otherwise return false.
   * @param fn - A function that takes two parameters: key and value.
   */
  some(fn: any): void;

  /**
   * It takes the values of the map, turns them into an array, and then returns a random element from
   * that array.
   * @returns a random element from the Map.
   */
  random(): any;

  /**
   * It returns the value of the key k.
   * @param k - The key to look up.
   * @returns The value of the key k.
   */
  get(k: any): any;

  /**
   * It returns true if the callback function returns true for every element in the array
   * @param fn - The function to test for each element, taking two arguments:
   */
  every(fn: any): void;

  /**
   * The each function takes a function as an argument and calls the forEach function on the array,
   * then returns the array.
   * @param fn - The function to execute on each element.
   * @returns the array.
   */
  each(fn: any): any;

  /**
   * It returns a random key from the Map.
   * @returns The random key from the map.
   */
  randomKey(): any;

  /**
   * If the collection is not defined, return false; if the size of the collection is not equal to the
   * size of the current collection, return false; if the current collection is the same as the
   * collection, return true; if the collection does not have the key or the value is not equal to the
   * value of the collection, return false; otherwise, return true
   * @param collection - The collection to compare against.
   * @returns a boolean value.
   */
  equals(collection: any): any;

  /**
   * It returns the difference between two sets
   * @param collection - The collection to compare against.
   * @returns The difference between the two sets.
   */
  difference(collection: any): any;

  /**
   * It takes a function as an argument and returns the first key for which the function returns true
   * @param fn - A function that takes two parameters: key and value.
   * @returns The key of the first element in the array that satisfies the provided testing function.
   */
  findKey(fn: any): any;

  /**
   * It sorts the RaidenCol by the given function
   * @param [fn] - The function to use to sort the entries.
   * @returns The sorted map.
   */
  sort(fn?: any): any;

  /**
   * The function `clear()` is a method of the `Set` class. It removes all elements from the set.
   * @returns The return value of the superclass method.
   */
  clear(): any;

  /**
   * The at() function returns the item at the specified index in the collection.
   * @param [index=0] - The index of the item you want to get.
   * @returns The first element of the array.
   */
  at(index?: any): any;

  /**
   * If one is greater than two, return 1. If one is equal to two, return 0. If one is less than two,
   * return -1.
   * @param one - The first value to compare.
   * @param two - The second item to compare.
   */
  static compareFunction(one: any, two: any): void;
}

/**
 * It's a custom error class that extends the built-in Error class
 * @module BitfieldInvalid
 */
export module BitfieldInvalid {
  /**
   * This is a constructor function that sets properties for a BitfieldInvalid object.
   * @param data - The `data` parameter is an object that contains two properties: `message` and `bit`.
   * The `message` property is a string that represents the error message, and the `bit` property is a
   * number that represents the invalid bitfield. This constructor is used to create a custom error
   * object
   */
  class BitfieldInvalid {
    /**
     * This is a constructor function that sets properties for a BitfieldInvalid object.
     * @param data - The `data` parameter is an object that contains two properties: `message` and `bit`.
     * The `message` property is a string that represents the error message, and the `bit` property is a
     * number that represents the invalid bitfield. This constructor is used to create a custom error
     * object
     */
    constructor(data: any);
  }
}

/**
 * It's a class that extends the Error class and has a constructor that takes an object as an argument
 * @module DiscordAPIError
 */
export module DiscordAPIError {
  /**
   * This is a constructor function that creates an error object with various properties based on the
   * input data.
   * @param [data] - An object containing information about the error, including the error message,
   * error code, HTTP method used, HTTP error status, request path, raw error data, and request data.
   */
  class DiscordAPIError {
    /**
     * This is a constructor function that creates an error object with various properties based on the
     * input data.
     * @param [data] - An object containing information about the error, including the error message,
     * error code, HTTP method used, HTTP error status, request path, raw error data, and request data.
     */
    constructor(data?: any);
  }
}

/**
 * It's a class that extends the Error class and adds a code and rawError property to it.
 * @module WebsocketError
 */
export module WebsocketError {
  /**
   * This is a constructor function that sets properties for an error object.
   * @param [error] - The `error` parameter is an object that contains information about an error that
   * occurred. It may have the following properties:
   */
  class WebsocketError {
    /**
     * This is a constructor function that sets properties for an error object.
     * @param [error] - The `error` parameter is an object that contains information about an error that
     * occurred. It may have the following properties:
     */
    constructor(error?: any);
  }
}

/**
 * It creates a new SlashCommand object, and if the data object is not empty, it sets the name,
 * description, and options properties to the values in the data object
 * @param [data] - The data that is passed to the constructor.
 * @param client - The client object.
 */
export class SlashSubCommand {
  /**
   * It creates a new SlashCommand object, and if the data object is not empty, it sets the name,
   * description, and options properties to the values in the data object
   * @param [data] - The data that is passed to the constructor.
   * @param client - The client object.
   */
  constructor(data?: any, client?: any);
}

/**
 * It's a constructor function that takes in a data object, a guildId, and a client, and then sets the
 * rateLimitPerUser, lastPinnedAt, lastPinnedTimestamp, lastMessageId, and nsfw properties of the
 * object to the values of the corresponding keys in the data object, or null if the key doesn't exist.
 * @param [data] - The data that was passed to the constructor.
 * @param guildId - The ID of the guild the channel is in.
 * @param client - The client that instantiated the channel.
 */
export class TextBasedChannels {
  /**
   * It's a constructor function that takes in a data object, a guildId, and a client, and then sets the
   * rateLimitPerUser, lastPinnedAt, lastPinnedTimestamp, lastMessageId, and nsfw properties of the
   * object to the values of the corresponding keys in the data object, or null if the key doesn't exist.
   * @param [data] - The data that was passed to the constructor.
   * @param guildId - The ID of the guild the channel is in.
   * @param client - The client that instantiated the channel.
   */
  constructor(data?: any, guildId?: any, client?: any);

  /**
   * It returns a new MessageManager object, which is a class that manages messages
   * @returns A new instance of the MessageManager class.
   */
  messages: any;

  /**
   * It sends a message to the channel
   * @param options - An object containing the message to send.
   * @returns The return value of the send() method.
   */
  send(options: any): any;

  /**
   * It deletes messages in bulk
   * @param messages - The messages to delete.
   * @param reason - The reason for the bulk delete.
   * @returns The return value of the function.
   */
  bulkDelete(messages: any, reason: any): any;

  /**
   * It edits the channel's nsfw property
   * @param nsfw - Boolean - Whether the channel is nsfw or not.
   * @param reason - The reason for the edit.
   * @returns The return value of the edit method.
   */
  setNsfw(nsfw: any, reason: any): any;

  /**
   * It edits the ratelimit of the command
   * @param ratelimit - The ratelimit to set.
   * @param reason - The reason for the ratelimit.
   * @returns The return value of the edit function.
   */
  setRateLimitPerUser(ratelimit: any, reason: any): any;

  /**
   * It triggers typing in the channel
   * @returns The return value of the function.
   */
  triggerTyping(): any;
}

/**
 * It's a constructor function that takes in a data object, a guildId, and a client, and then sets the
 * userLimit, bitrate, rtcRegion, and videoQualityMode properties of the object to the values of the
 * corresponding properties of the data object, or null if the data object doesn't have those
 * properties.
 * @param [data] - The data that was sent from the Discord API.
 * @param guildId - The ID of the guild the voice channel is in.
 * @param client - Discord.Client
 */
export class VoiceBasedChannels {
  /**
   * It's a constructor function that takes in a data object, a guildId, and a client, and then sets the
   * userLimit, bitrate, rtcRegion, and videoQualityMode properties of the object to the values of the
   * corresponding properties of the data object, or null if the data object doesn't have those
   * properties.
   * @param [data] - The data that was sent from the Discord API.
   * @param guildId - The ID of the guild the voice channel is in.
   * @param client - Discord.Client
   */
  constructor(data?: any, guildId?: any, client?: any);

  /**
   * It sends a packet to the Discord API to join the voice channel
   * @param [options] - Object
   * @returns The VoiceChannel object.
   */
  join(options?: any): any;

  /**
   * It sends a packet to the Discord API to disconnect the bot from the voice channel
   * @returns The VoiceConnection object.
   */
  disconnect(): any;

  /**
   * This function sets the rtcRegion of the guild.
   * @param rtcRegion - The region to set the voice server to.
   * @param reason - The reason for the change.
   * @returns The return value of the edit function.
   */
  setRtcRegion(rtcRegion: any, reason: any): any;

  /**
   * It sets the bitrate of the voice channel
   * @param bitrate - The bitrate of the voice channel in bits.
   * @param reason - The reason for the change.
   * @returns The bitrate of the voice channel.
   */
  setBitrate(bitrate: any, reason: any): any;

  /**
   * It returns an array of members in the voice channel
   * @returns The members in the voice channel.
   */
  members: any;
}

/**
 * It defines a property called client, and sets it to the client variable
 * @param message - The message object that was sent.
 * @param client - The client that instantiated the message.
 */
export class ActionsManager {
  /**
   * It defines a property called client, and sets it to the client variable
   * @param message - The message object that was sent.
   * @param client - The client that instantiated the message.
   */
  constructor(message: any, client?: any);

  /**
   * It takes a message from the websocket and returns a class that represents the message.
   *
   * @param message - The message that was received from the websocket.
   * @returns The event is being returned.
   */
  _patch(message: any): any;
}

/**
 * It's a constructor function that takes a client parameter and passes it to the super function.
 * @param client - The client object.
 */
export class ApplicationCommandManager {
  /**
   * It's a constructor function that takes a client parameter and passes it to the super function.
   * @param client - The client object.
   */
  constructor(client: any);

  /**
   * _add(commands, guild = this.guildId, options = {cache: true, force: false})
   * @param commands - The command or commands to add.
   * @param [guild] - The guild ID
   * @param [options] - cache = true, force = false
   * @returns The command object.
   */
  _add(commands: any, guild?: any, options?: any): any;

  /**
   * It creates a new command for the application
   * @param [options] - The options for the command.
   * @param [guild] - The guild ID or guild object to create the command for.
   * @returns The command object.
   */
  create(options?: any, guild?: any): any;

  /**
   * It sets the commands for a guild
   * @param [options] - An array of objects that contain the following properties:
   * @param [guild] - The guild ID or guild object to set the commands for.
   * @returns An array of objects.
   */
  set(options?: any, guild?: any): any;

  /**
   * It fetches commands from the API
   * @param command - The command to fetch.
   * @param options
   * @returns An array of objects.
   */
  fetch(command: any, options: any): any;

  /**
   * It deletes a command from the application
   * @param command - The command to delete.
   * @param [guild] - The guild to remove the command from.
   * @returns The deleted command.
   */
  delete(command: any, guild?: any): any;

  /**
   * It edits an application command
   * @param command - The command to edit.
   * @param [options] - The options for the command.
   * @param [guild] - The guild ID
   * @returns The command object.
   */
  edit(command: any, options?: any, guild?: any): any;

  /**
   * It fetches a command from the API and adds it to the cache
   * @param command - The command to fetch.
   * @param [cache=true] - Whether or not to cache the command.
   * @param [force=false] - If true, it will force the cache to be updated.
   * @param [guild] - The guild to fetch the command from.
   * @returns The command object.
   */
  _fetchId(command: any, cache?: any, force?: any, guild?: any): any;

  /**
   * It returns a new ApplicationCommandPermissionManager object, which is a class that I made.
   *
   * I'm not sure if this is the right place to ask this question, but I'm not sure where else to ask
   * it.
   * @returns A new instance of the ApplicationCommandPermissionManager class.
   */
  permissions: any;

  /**
   * It returns the Collection object.
   * @returns The Collection object.
   */
  cache: any;

  /**
   * If the option type is a sub command group or sub command, return a new instance of the respective
   * class, otherwise return a new instance of the SlashOption class
   * @param [options] - Object
   * @returns The return value is a JSON object.
   */
  static transformOptions(options?: any): any;

  /**
   * It takes a payload object and returns a transformed payload object
   * @param [payload] - The payload that is sent to the API.
   * @returns The return is a new object with the properties of the payload object.
   */
  static transformPayload(payload?: any): any;
}

/**
 * This function is a constructor for the class GuildSettings. It takes in a client and a guildId and
 * sets the guildId to the guildId that was passed in.
 * @param client - The client object
 * @param guildId - The ID of the guild you want to get the settings for.
 */
export class ApplicationCommandPermissionManager {
  /**
   * This function is a constructor for the class GuildSettings. It takes in a client and a guildId and
   * sets the guildId to the guildId that was passed in.
   * @param client - The client object
   * @param guildId - The ID of the guild you want to get the settings for.
   */
  constructor(client: any, guildId: any);

  /**
   * _add(commands, guildId = this.guildId, options = {cache: true, force: false})
   * @param commands - The command or command ID to add.
   * @param [guildId] - The ID of the guild to get the permissions for.
   * @param [options] - cache = true, force = false
   * @returns The return value is a new instance of the ApplicationCommandPermission class.
   */
  _add(commands: any, guildId?: any, options?: any): any;

  /**
   * It fetches the command permissions for a guild
   * @param commands - The command ID or an array of command IDs to fetch.
   * @param options
   * @returns The return value is a new instance of the cache constructor.
   */
  fetch(commands: any, options: any): any;

  /**
   * It fetches the permissions of a command from the API
   * @param commands - The command to fetch permissions for.
   * @param [cache=true] - Whether or not to cache the command permissions.
   * @param [force=false] - If true, it will force the cache to be updated.
   * @param [guild] - The guild to fetch the command permissions for.
   * @returns The permissions of the command.
   */
  _fetchId(commands: any, cache?: any, force?: any, guild?: any): any;

  /**
   * It returns the Collection object.
   * @returns The Collection object.
   */
  cache: any;

  /**
   * "If the object has an id property, and that property is a string, then return that property,
   * otherwise if the object has an id property, and that property has an id property, then return that
   * property, otherwise return undefined."
   *
   * @param [o] This is the object that is being passed in.
   * @returns The return value is an object with the following properties:
   */
  static transformPermissions(o?: any): any;

  /**
   * It takes an object with a command property and a permissions property, and returns an object with
   * an id property and a permissions property
   * @param [o] - The object that is being transformed.
   * @returns The return value is an object with two properties: id and permissions.
   */
  static transformPermission(o?: any): any;

  /**
   * It takes a payload and fetched data, and returns an array of objects that are not in the payload
   * @param payload - The payload that is sent to the server.
   * @param fetchedData - Array of objects
   * @returns An array of objects.
   */
  static parseRemoveOptions(payload: any, fetchedData: any): any;
}

/**
 * It's a constructor function that takes a client parameter and passes it to the super function
 * @param client - The client object.
 */
export class AutoModManager {
  /**
   * It's a constructor function that takes a client parameter and passes it to the super function
   * @param client - The client object.
   */
  constructor(client: any);

  /**
   * It adds a rule to the cache
   * @param rules - The rule object or ID of the rule to add.
   * @param [guildId] - The ID of the guild to fetch the rule from.
   * @param [options] - cache = true, force = false
   * @returns The rule object
   */
  _add(rules: any, guildId?: any, options?: any): any;

  /**
   * It fetches all the rules from the API and returns them in a cache
   * @param rule - The rule ID or object.
   * @param options - An object containing the following properties:
   * @returns An array of objects.
   */
  fetch(rule: any, options: any): any;

  /**
   * It fetches a rule from the API and adds it to the cache
   * @param rule - The rule to fetch. Can be a string or a rule object.
   * @param [cache=true] - Whether or not to cache the rule.
   * @param [force=false] - If true, it will force the cache to be updated.
   * @returns The rule object
   */
  _fetchId(rule: any, cache?: any, force?: any): any;

  /**
   * It creates a new rule
   * @param [options] - The options for the rule.
   * @returns A new rule object
   */
  create(options?: any): any;

  /**
   * It edits an existing rule
   * @param rule - The rule to edit. Can be a rule object or a rule ID.
   * @param [options] - Object
   * @returns The rule that was edited.
   */
  edit(rule: any, options?: any): any;

  /**
   * It deletes a rule from the server
   * @param rule - The rule to delete. Can be a rule ID or a rule object.
   * @param reason - The reason for the deletion.
   * @returns The deleted rule.
   */
  delete(rule: any, reason: any): any;

  /**
   * It returns the Collection object.
   * @returns The Collection class.
   */
  cache: any;

  /**
   * It takes a payload object and returns a new object with the same properties, but with the values
   * transformed to match the API's expected format
   * @param [payload] - The payload to transform.
   * @returns The payload is being returned.
   */
  static transformPayload(payload?: any): any;

  /**
   * It takes an object with a `type` property and an optional `metadata` property, and returns an
   * object with a `type` property and an optional `metadata` property
   * @param [actions] - The actions to transform.
   * @returns An object with a type and metadata property.
   */
  static transformActions(actions?: any): any;

  /**
   * It takes in a metadata object, and returns a new object with the same properties, but with the
   * properties renamed to match the new naming scheme
   * @param [metadata] - The metadata object that is passed to the constructor of the plugin.
   * @returns The return value is the metadata object with the values of the metadata object being
   * assigned to the keys of the new object.
   */
  static transformMetadata(metadata?: any): any;
}

/**
 * It's a constructor function that takes a client parameter and passes it to the super function
 * @param client - The client object.
 */
export class BaseThreadManager {
  /**
   * It's a constructor function that takes a client parameter and passes it to the super function
   * @param client - The client object.
   */
  constructor(client: any);

  /**
   * It adds a thread to the cache
   * @param threads - The thread object or thread ID.
   * @param [guildId] - The guild ID of the guild the thread is in.
   * @param [options] - cache = true, force = true
   * @returns A thread object
   */
  _add(threads: any, guildId?: any, options?: any): any;

  /**
   * It creates a thread
   * @param message - The message to create the thread from.
   * @param options - An object containing the following parameters:
   * @returns A new thread is being returned.
   */
  create(message: any, options: any): any;

  /**
   * It fetches a thread
   * @param thread - The thread ID.
   * @param [options] - An object containing additional options.
   * @returns A channel object.
   */
  fetch(thread: any, options?: any): any;

  /**
   * It fetches all the active threads in a guild
   * @returns An array of threads
   */
  fetchActive(): any;

  /**
   * This function fetches archived threads from a channel
   * @param [options] - Object
   * @returns A new FetchedThreads object
   */
  fetchArchivedThread(options?: any): any;

  /**
   * This function fetches forum threads from the specified channel
   * @param [query] - An object containing the following parameters:
   * @returns An array of threads
   */
  fetchForumThreads(query?: any): any;

  /**
   * It returns the Collection object.
   * @returns The Collection class.
   */
  cache: any;
}

/**
 * It's a constructor function that takes a client parameter and passes it to the super function.
 * @param client - The client object.
 */
export class ChannelManager {
  /**
   * It's a constructor function that takes a client parameter and passes it to the super function.
   * @param client - The client object.
   */
  constructor(client: any);

  /**
   * It takes a channel object, and returns a channel object
   * @param channels - The channel object or channel ID.
   * @param [guildId] - The ID of the guild the channel is in.
   * @param [options] - cache = true, force = false
   * @returns A channel object.
   */
  _add(channels: any, guildId?: any, options?: any): any;

  /**
   * It fetches all the channels in a guild.
   * @param channel - The channel ID or object.
   * @param options
   * @returns An array of objects.
   */
  fetch(channel: any, options: any): any;

  /**
   * It fetches the channel ID from the API and adds it to the cache
   * @param channel - The channel to fetch.
   * @param [cache=true] - Whether or not to cache the channel.
   * @param [force=false] - If true, it will force the cache to be updated.
   * @returns The channel object.
   */
  _fetchId(channel: any, cache?: any, force?: any): any;

  /**
   * It edits a channel
   * @param channel - The channel to edit.
   * @param [options] - Object
   * @returns The channel object.
   */
  edit(channel: any, options?: any): any;

  /**
   * It deletes a channel
   * @param channel - The channel to delete.
   * @param reason - The reason for the deletion.
   * @returns The deleted channel.
   */
  delete(channel: any, reason: any): any;

  /**
   * It creates an invite for a channel
   * @param channel - The channel to create the invite for.
   * @param [options] - Object
   * @returns An invite object.
   */
  createInvite(channel: any, options?: any): any;

  /**
   * It follows a channel
   * @param news - The channel you want to follow.
   * @param [options] - Object
   * @returns The channel that was followed.
   */
  follow(news: any, options?: any): any;

  /**
   * It triggers typing in a channel
   * @param channel - The channel to send the typing indicator to.
   * @returns Nothing.
   */
  triggerTyping(channel: any): any;

  /**
   * @param channel - The channel to clone.
   * @returns The channel object.
   */
  clone(channel: any): any;

  /**
   * It returns the Collection object.
   * @returns The Collection object.
   */
  cache: any;

  /**
   * It transforms an object into another object
   * @param [o] - The object that is being transformed.
   * @param [position=false] - boolean
   * @returns an object with the properties of name, type, topic, bitrate, user_limit,
   * rate_limit_per_user, position, permission_overwrites, parent_id, nsfw, archived,
   * auto_archive_duration, locked, invitable, default_auto_archive_duration, video_quality_mode,
   * rtc_region, and
   */
  static transformPayload(o?: any, position?: any): any;

  /**
   * It takes an object with properties id, type, allow, and deny, and returns an object with the same
   * properties, but with the id property being a string, the type property being a number, and the
   * allow and deny properties being strings
   * @param [p] - The overwrites object.
   * @returns The return is an object with the properties id, type, allow, and deny.
   */
  static transformOverwrites(p?: any): any;
}

/**
 * It's a constructor function that takes a client parameter and passes it to the super function
 * @param client - The client object.
 */
export class EmojiManager {
  /**
   * It's a constructor function that takes a client parameter and passes it to the super function
   * @param client - The client object.
   */
  constructor(client: any);

  /**
   * It takes an emoji object, and returns an emoji object
   * @param emojis - The emoji(s) to add to the cache. Can be an emoji object, an emoji ID, or an emoji
   * name.
   * @param [guildId] - The ID of the guild the emoji is in.
   * @param [options] - cache = true, force = false
   * @returns A new Emoji object
   */
  _add(emojis: any, guildId?: any, options?: any): any;

  /**
   * It creates a new emoji
   * @param [options] - Object
   * @returns A new emoji object
   */
  create(options?: any): any;

  /**
   * It edits an emoji
   * @param emoji - The emoji to edit. Can be an emoji object, or an emoji ID.
   * @param [options] - Object
   * @returns The emoji object
   */
  edit(emoji: any, options?: any): any;

  /**
   * It deletes an emoji from the guild
   * @param emoji - The emoji to delete. Can be a string or an Emoji object.
   * @param reason - The reason for the deletion.
   * @returns The deleted emoji
   */
  delete(emoji: any, reason: any): any;

  /**
   * It fetches all the emojis in the guild
   * @param emoji - The emoji to fetch. Can be an emoji object, an emoji ID, or an emoji name.
   * @param options - An object containing the following properties:
   * @returns A new cache constructor
   */
  fetch(emoji: any, options: any): any;

  /**
   * It fetches an emoji from the API and adds it to the cache
   * @param emoji - The emoji to fetch. Can be a string or an Emoji object.
   * @param [cache=true] - Whether or not to cache the emoji.
   * @param [force=false] - If true, it will force the cache to be updated.
   * @returns The emoji object
   */
  _fetchId(emoji: any, cache?: any, force?: any): any;

  /**
   * It transforms the roles object into a string.
   * @param [roles] - The roles that the user has.
   * @returns The roles object is being returned.
   */
  static transformRoles(roles?: any): any;

  /**
   * It takes an object with a name, image, and roles property, and returns an object with the same
   * properties, but with the image property being a data URI
   * @param o - The options object.
   * @returns A new object with the name, image, and roles properties.
   */
  static transformOptions(o: any): any;

  /**
   * `return Collection`
   * @returns The Collection class
   */
  cache: any;
}

/**
 * This function is a constructor for the class
 * @param guildId - The ID of the guild you want to get the settings for.
 * @param client - The client that the command is being run on.
 */
export class GuildApplicationCommandManager {
  /**
   * This function is a constructor for the class
   * @param guildId - The ID of the guild you want to get the settings for.
   * @param client - The client that the command is being run on.
   */
  constructor(guildId: any, client?: any);
}

/**
 * `constructor(guildId, client)` is a function that takes two arguments, `guildId` and `client`, and
 * assigns them to the `guildId` and `client` properties of the class.
 * @param guildId - The ID of the guild you want to get the settings for.
 * @param client - The client that the command is being run on.
 */
export class GuildAutoModManager {
  /**
   * `constructor(guildId, client)` is a function that takes two arguments, `guildId` and `client`, and
   * assigns them to the `guildId` and `client` properties of the class.
   * @param guildId - The ID of the guild you want to get the settings for.
   * @param client - The client that the command is being run on.
   */
  constructor(guildId: any, client?: any);

  /**
   * `return super.cache.filter((o) => o.guildId === this.guildId)`
   *
   * The `super` keyword is used to access and call functions on an object's parent
   * @returns The cache property is being returned.
   */
  cache: any;
}

/**
 * This function is a constructor for the class
 * @param guildId - The ID of the guild you want to get the settings for.
 * @param client - The client that the command is being run on.
 */
export class GuildBanManager {
  /**
   * This function is a constructor for the class
   * @param guildId - The ID of the guild you want to get the settings for.
   * @param client - The client that the command is being run on.
   */
  constructor(guildId: any, client?: any);

  /**
   * It adds a ban to the cache
   * @param bans - The ban object or ID of the ban to add to the cache.
   * @param [guildId] - The ID of the guild to fetch the bans from.
   * @param [options] - Object
   * @returns A new instance of the GuildBan class.
   */
  _add(bans: any, guildId?: any, options?: any): any;

  /**
   * It bans a user from the guild.
   * @param user - The user to ban.
   * @param [options] - Object
   * @returns A new instance of the GuildBanManager class.
   */
  create(user: any, options?: any): any;

  /**
   * It removes a ban from a guild
   * @param user - The user to ban. Can be a user object, user ID, or mention.
   * @param reason - The reason for the ban.
   * @returns A ban object
   */
  remove(user: any, reason: any): any;

  /**
   * It fetches a list of bans from the API and returns a cache of them
   * @param ban - The ban to fetch. Can be a ban object, a user object, a user ID, or a string.
   * @param options - An object containing the following properties:
   * @returns A new cache constructor
   */
  fetch(ban: any, options: any): any;

  /**
   * It fetches a ban from the API and adds it to the cache
   * @param ban - The ban object or id to fetch.
   * @param [cache=true] - Whether or not to cache the ban.
   * @param [force=false] - If true, it will force the cache to be updated.
   * @returns The ban object
   */
  _fetchId(ban: any, cache?: any, force?: any): any;

  /**
   * It returns the Collection object.
   * @returns The Collection class
   */
  cache: any;

  /**
   * It takes an object with a property called days, and if that property is less than 0 or greater
   * than 7, it throws a RangeError. Otherwise, it returns an object with a property called
   * delete_message_days
   * @param [o] - The object that contains the parameters.
   * @returns The payload for the request.
   */
  static transformPayloadd(o?: any): any;
}

/**
 * It's a constructor function that takes in a guildId and a client, and then sets the guildId to the
 * guildId that was passed in, and then sets the client to the client that was passed in.
 * @param guildId - The ID of the guild you want to get the settings for.
 * @param client - The client that the command is being run from.
 */
export class GuildChannelManager {
  /**
   * It's a constructor function that takes in a guildId and a client, and then sets the guildId to the
   * guildId that was passed in, and then sets the client to the client that was passed in.
   * @param guildId - The ID of the guild you want to get the settings for.
   * @param client - The client that the command is being run from.
   */
  constructor(guildId: any, client?: any);

  /**
   * It creates a new channel in the guild.
   * @param [options] - Object
   * @returns The channel object.
   */
  create(options?: any): any;

  /**
   * It takes an array of objects, transforms them, and then sends them to the API
   * @param [options] - Object
   * @returns A new cache object.
   */
  modifyPosition(options?: any): any;

  /**
   * It filters the cache to only include objects that have a guild_id or guildId property that matches
   * the guildId of the current instance
   * @returns The cache is being filtered to only return the objects that have the same guildId as the
   * guildId of the current guild.
   */
  cache: any;
}

/**
 * This function is a constructor for the class
 * @param guildId - The ID of the guild you want to get the settings for.
 * @param client - The client that the command is being run on.
 */
export class GuildDiscoveryManager {
  /**
   * This function is a constructor for the class
   * @param guildId - The ID of the guild you want to get the settings for.
   * @param client - The client that the command is being run on.
   */
  constructor(guildId: any, client?: any);

  /**
   * `_add` is a function that takes a `discovery` parameter and returns a new `GuildDiscovery` object.
   * @param discovery - The discovery object or ID
   * @returns A new GuildDiscovery object
   */
  _add(discovery: any): any;

  /**
   * `fetch` fetches the discovery metadata for a guild
   * @param [guild] - The guild to fetch the discovery metadata for.
   * @returns The discovery metadata for the guild.
   */
  fetch(guild?: any): any;

  /**
   * `edit` edits the discovery metadata of a guild
   * @param [guild] - The guild ID or guild object to edit the discovery metadata for.
   * @param [options] - Object
   * @returns The discovery object
   */
  edit(guild?: any, options?: any): any;

  /**
   * It takes a payload object and returns a new object with the same keys, but with the values
   * transformed to match the API's expectations
   * @param [payload] - The payload that is sent to the API.
   * @returns The transformed payload.
   */
  static transformPayload(payload?: any): any;
}

/**
 * This function is a constructor for the class
 * @param guildId - The ID of the guild you want to get the settings for.
 * @param client - The client that the command is being run on.
 */
export class GuildEmojiManager {
  /**
   * This function is a constructor for the class
   * @param guildId - The ID of the guild you want to get the settings for.
   * @param client - The client that the command is being run on.
   */
  constructor(guildId: any, client?: any);

  /**
   * `_add` is a function that adds emojis to a guild
   * @param emojis - The emojis to add. This can be a single emoji, or an array of emojis.
   * @param [options] - cache = true, force = false
   * @returns The return value of the super._add method.
   */
  _add(emojis: any, options?: any): any;

  /**
   * It returns the cache, but only the cache that has the same guildId as the current guild
   * @returns The cache is being filtered by the guildId.
   */
  cache: any;
}

/**
 * It's a constructor function that takes in a guildId and a client, and then sets the guildId to the
 * guildId that was passed in, and then sets the client to the client that was passed in.
 * @param guildId - The ID of the guild you want to get the settings for.
 * @param client - The client that the command is being run from.
 */
export class GuildIntegrationManager {
  /**
   * It's a constructor function that takes in a guildId and a client, and then sets the guildId to the
   * guildId that was passed in, and then sets the client to the client that was passed in.
   * @param guildId - The ID of the guild you want to get the settings for.
   * @param client - The client that the command is being run from.
   */
  constructor(guildId: any, client?: any);

  /**
   * _add(integrations, guildId = this.guildId, options = {cache: true, force: false})
   * @param integrations - The integrations object
   * @param [guildId] - The ID of the guild
   * @param [options] - cache = true, force = false
   * @returns The integration object
   */
  _add(integrations: any, guildId?: any, options?: any): any;

  /**
   * It fetches the integrations for a guild
   * @param [options] - cache = true, force = false
   * @param [guild] - The guild ID or guild object.
   * @returns An array of objects.
   */
  fetch(options?: any, guild?: any): any;

  /**
   * It deletes an integration from a guild.
   * @param [options] - Object
   * @param reason - The reason for the audit log.
   * @returns The integration object.
   */
  delete(options?: any, reason?: any): any;

  /**
   * It returns a collection of all the elements in the document with the given tag name.
   * @returns The Collection class.
   */
  cache: any;
}

/**
 * It's a constructor function that takes in a guild and a client, and sets the guild to the guild that
 * was passed in
 * @param guild - The guild object that the event is being emitted for.
 * @param client - The client that the command is being run on.
 */
export class GuildInviteManager {
  /**
   * It's a constructor function that takes in a guild and a client, and sets the guild to the guild that
   * was passed in
   * @param guild - The guild object that the event is being emitted for.
   * @param client - The client that the command is being run on.
   */
  constructor(guild: any, client?: any);

  /**
   * It adds an invite to the cache
   * @param invites - The invite code or invite object.
   * @param [guild] - The guild the invite is for.
   * @param [options] - cache = true, force = false
   * @returns The invite object
   */
  _add(invites: any, guild?: any, options?: any): any;

  /**
   * It fetches all the invites for the guild and returns a new cache of the invites
   * @param [options] - Object
   * @returns A new instance of the cache constructor.
   */
  fetch(options?: any): any;

  /**
   * It deletes an invite
   * @param invite - The invite code or invite object to delete.
   * @param reason - The reason for deleting the invite.
   * @returns The invite object
   */
  delete(invite: any, reason: any): any;

  /**
   * `cache` is a getter that returns the `Collection` class
   * @returns The Collection class
   */
  cache: any;
}

/**
 * It's a constructor function that takes in two parameters, client and websocket, and then calls the
 * super function with those two parameters.
 * @param client - The client object
 * @param websocket - The websocket that the client is connected to.
 */
export class GuildManager {
  /**
   * It's a constructor function that takes in two parameters, client and websocket, and then calls the
   * super function with those two parameters.
   * @param client - The client object
   * @param websocket - The websocket that the client is connected to.
   */
  constructor(client: any, websocket: any);

  /**
   * It adds a guild to the cache
   * @param guilds - The guild object or ID of the guild to add.
   * @param [options] - cache = true, force = false
   * @returns A new instance of the Guild class.
   */
  _add(guilds: any, options?: any): any;

  /**
   * It creates a new guild
   * @param [options] - Object
   * @returns The guild object.
   */
  create(options?: any): any;

  /**
   * It fetches the guilds of the user
   * @param guild - The guild to fetch.
   * @param options
   * @returns {Function} constructor cache
   */
  fetch(guild: any, options: any): () => any;

  /**
   * It fetches a guild by ID
   * @param guild - The guild object or ID
   * @param options
   * @returns The guild object.
   */
  _fetchId(guild: any, options: any): any;

  /**
   * It edits a guild
   * @param guilds - The guild object
   * @param [options] - Object
   * @returns The guilds object.
   */
  edit(guilds: any, options?: any): any;

  /**
   * It deletes a guild
   * @param guild - The guild to delete.
   * @returns The deleted guild.
   */
  delete(guild: any): any;

  /**
   * It fetches the preview of a guild
   * @param guild - The guild to fetch the preview for.
   * @returns A new GuildPreview object.
   */
  fetchPreview(guild: any): any;

  /**
   * It modifies the MFA level of a guild
   * @param guild - The guild to modify the MFA level of.
   * @param [options] - Object
   * @returns The client.guilds._add(guildId)
   */
  modifyMFALevel(guild: any, options?: any): any;

  /**
   * The function returns a collection of objects that are stored in the cache.
   * @returns The Collection class.
   */
  cache: any;

  /**
   * It takes a payload object, and returns a new object with the same keys, but with the values
   * transformed
   * @param [payload]
   * @returns The payload is being returned.
   */
  static transformPayload(payload?: any): any;

  /**
   * It takes an object with optional properties `before`, `after`, and `limit`, and returns an object
   * with the same properties, but with the `before` and `after` properties converted to strings if
   * they are not already strings.
   *
   * @param [o] - The options object.
   * @returns The return value is an object with the following properties:
   */
  static transformOptions(o?: any): any;
}

/**
 * This function is a constructor for the class
 * @param guildId - The ID of the guild you want to get the settings for.
 * @param client - The client that the command is being run on.
 */
export class GuildMemberManager {
  /**
   * This function is a constructor for the class
   * @param guildId - The ID of the guild you want to get the settings for.
   * @param client - The client that the command is being run on.
   */
  constructor(guildId: any, client?: any);

  /**
   * It creates a new GuildMember object if the member isn't cached, or returns the cached member if it
   * is
   * @param members - The member(s) to add to the cache. Can be a string, a user object, or a guild
   * member object.
   * @param [guildId] - The ID of the guild the member is in.
   * @param [options] - cache = true, force = false
   * @returns A new GuildMember object
   */
  _add(members: any, guildId?: any, options?: any): any;

  /**
   * It fetches the members of a guild
   * @param member - The member to fetch. Can be a user ID, a user object, or a guild member object.
   * @param options
   * @returns A promise that resolves to a new cache.constructor
   */
  fetch(member: any, options: any): any;

  /**
   * It gets a list of members from the API and returns a cache of the members
   * @param [options] - Object
   * @returns A new cache constructor
   */
  list(options?: any): any;

  /**
   * It searches for members in a guild
   * @param [options] - Object
   * @returns A new cache constructor
   */
  search(options?: any): any;

  /**
   * It kicks a member from the guild
   * @param member - The member to kick. Can be a GuildMember object, a User object, or a user ID
   * string.
   * @param reason - The reason for the kick.
   * @returns The deleted member
   */
  kick(member: any, reason: any): any;

  /**
   * It bans a member from a guild
   * @param member - The member to ban.
   * @param [options] - Object
   * @returns The member that was banned.
   */
  ban(member: any, options?: any): any;

  /**
   * Unban a user from the guild.
   * @param user - The user to unban.
   * @param reason - The reason for the unban.
   * @returns The user that was unbanned.
   */
  unban(user: any, reason: any): any;

  /**
   * It edits a guild member
   * @param member - The member to edit.
   * @param [options] - The options to pass to the API.
   * @returns A new member object
   */
  edit(member: any, options?: any): any;

  /**
   * It fetches a member from the API and returns the member object
   * @param member - The member to fetch. Can be a string, a member object, or a user object.
   * @param options - An object with the following properties:
   * @returns The member object
   */
  _fetchId(member: any, options: any): any;

  /**
   * It returns the value of the variable Collections.
   * @returns The cache object
   */
  cache: any;

  /**
   * If the date is null, return null. If the date is not null, return the date as an ISO string
   * @param date - The date to be transformed.
   * @returns The date is being returned in ISO format.
   */
  static transformTimeout(date: any): any;

  /**
   * It transforms the options object into a format that the API can understand
   * @param [options] - The options object.
   * @param [edit=false] - Whether or not the user is editing the member.
   * @returns an object with the keys limit, after, and the values of the options.limit, options.after,
   * and options.after?.user?.id, options.after?.id.
   */
  static transformOptions(options?: any, edit?: any): any;

  /**
   * If the payload is an array, map each element to its id, otherwise return the id of the payload
   * @param [payload] - The payload that is being sent to the API.
   * @returns The user id
   */
  static transformPayload(payload?: any): any;
}

/**
 * `This function is a constructor for the class.`
 * @param guildId - The ID of the guild the member is in.
 * @param member - The member object of the member who left the guild.
 * @param client - The client that the command is being run from.
 */
export class GuildMemberRoleManager {
  /**
   * `This function is a constructor for the class.`
   * @param guildId - The ID of the guild the member is in.
   * @param member - The member object of the member who left the guild.
   * @param client - The client that the command is being run from.
   */
  constructor(guildId: any, member: any, client?: any);

  /**
   * It sorts the cache by position, then returns the first item in the sorted collection
   * @returns The highest position in the cache.
   */
  highest: any;

  /**
   * It adds a role to a member
   * @param roles - The role(s) to add to the member.
   * @param reason - The reason for the action.
   * @returns The member object
   */
  add(roles: any, reason: any): any;

  /**
   * It removes a role from a member
   * @param roles - The role(s) to remove from the member.
   * @param reason - The reason for the role removal.
   * @returns The member object
   */
  remove(roles: any, reason: any): any;

  /**
   * It takes an array of role IDs and a reason, and then it returns a promise that resolves to the
   * result of the edit request.
   * @param roles - The roles to set.
   * @param reason - The reason for the role change.
   * @returns The roles that the member has.
   */
  set(roles: any, reason: any): any;

  /**
   * It returns the cache, but only if the cache's id is the same as the guild id, or if the member has
   * the role
   * @returns The cache is being filtered to only return objects that have the same id as the guildId or
   * the member's roles.
   */
  cache: any;

  /**
   * It takes a role object, array, or string and returns an array of role IDs
   * @param [role] - The role to check for. Can be a string, a role object, or an array of either.
   * @returns The role is being returned.
   */
  static transformRole(role?: any): any;
}

/**
 * `constructor(guildId, client)` is a function that takes two arguments, `guildId` and `client`, and
 * assigns them to the `guildId` and `client` properties of the class.
 * @param guildId - The ID of the guild you want to get the settings for.
 * @param client - The client that the command is being run on.
 */
export class GuildMemberVerificationManager {
  /**
   * `constructor(guildId, client)` is a function that takes two arguments, `guildId` and `client`, and
   * assigns them to the `guildId` and `client` properties of the class.
   * @param guildId - The ID of the guild you want to get the settings for.
   * @param client - The client that the command is being run on.
   */
  constructor(guildId: any, client?: any);

  /**
   * `fetch` fetches the guild's member verification settings
   * @param [options] - Object
   * @returns A new GuildMemberVerification object
   */
  fetch(options?: any): any;

  /**
   * It edits the verification form
   * @param [options] - Object
   * @returns A new GuildMemberVerification object
   */
  edit(options?: any): any;

  /**
   * It takes an object with any of the following keys: `fieldType`, `field_type`, `type`, `label`,
   * `required`, `values`, `choices` and returns an object with the following keys: `field_type`,
   * `label`, `required`, `values`, `choices`
   * @param [fields] - The fields object that is passed in from the form.
   * @returns An object with the following properties:
   *   field_type: The type of field.
   *   label: The label of the field.
   *   required: Whether or not the field is required.
   *   values: The values of the field.
   *   choices: The choices of the field.
   */
  static createFormFields(fields?: any): any;
}

/**
 * `constructor(guildid, client)` is a function that takes two arguments, `guildid` and `client`, and
 * sets the `guildid` property of the class to the `guildid` argument, and the `client` property of the
 * class to the `client` argument
 * @param guildid - The ID of the guild you want to get the settings for.
 * @param client - The client object
 */
export class GuildPruneManager {
  /**
   * `constructor(guildid, client)` is a function that takes two arguments, `guildid` and `client`, and
   * sets the `guildid` property of the class to the `guildid` argument, and the `client` property of the
   * class to the `client` argument
   * @param guildid - The ID of the guild you want to get the settings for.
   * @param client - The client object
   */
  constructor(guildid: any, client?: any);

  /**
   * It prunes members from a guild
   * @param [options] - An object containing the following parameters:
   * @returns The number of members that were pruned.
   */
  prune(options?: any): any;

  /**
   * It fetches the prune count of a guild
   * @param [options] - An object containing the following parameters:
   * @returns The number of members that would be pruned.
   */
  fetchCount(options?: any): any;

  /**
   * It takes an array of role objects or strings and returns an array of role IDs
   * @param [roles] - The roles to check against. This can be a single role, an array of roles, or an
   * object with a `roles` property.
   * @returns An array of strings
   */
  static transformRoles(roles?: any): any;

  /**
   * It takes an object with the keys `days`, `count`, and `roles`, and returns an object with the keys
   * `days`, `complete_prune_count`, and `include_roles`
   * @param [o] - The options object.
   * @returns The transformed options for the prune command.
   */
  static transformOptions(o?: any): any;
}

/**
 * `constructor` is a function that runs when a new instance of the class is created
 * @param guildId - The ID of the guild you want to get the settings for.
 * @param client - The client that the command is being run on.
 */
export class GuildRoleManager {
  /**
   * `constructor` is a function that runs when a new instance of the class is created
   * @param guildId - The ID of the guild you want to get the settings for.
   * @param client - The client that the command is being run on.
   */
  constructor(guildId: any, client?: any);

  /**
   * It sorts the roles in the cache by their position, and then returns the first one
   * @returns The highest role in the guild.
   */
  highest: any;

  /**
   * It returns the cached data for the guild
   * @returns The cache is being returned.
   */
  everyone: any;

  /**
   * It returns the cache, but only the cache that has the same guild ID as the current guild
   * @returns The cache of the super class, but filtered to only include objects that have a guild_id or
   * guildId property that matches the guildId of the current class.
   */
  cache: any;
}

/**
 * It creates a new instance of the GuildScheduledEventUsersManager class.
 * @param guildId - The ID of the guild the event is in
 * @param client - The client that the manager is being created for.
 */
export class GuildScheduledEventManager {
  /**
   * It creates a new instance of the GuildScheduledEventUsersManager class.
   * @param guildId - The ID of the guild the event is in
   * @param client - The client that the manager is being created for.
   */
  constructor(guildId: any, client?: any);

  /**
   * It returns the cache, but only the cache that has the same guildId as the current guild
   * @returns The cache is being filtered by the guildId.
   */
  cache: any;
}

/**
 * It's a constructor for the class
 * @param event - The event that was triggered.
 * @param guildId - The ID of the guild the event is being emitted in.
 * @param client - The client object
 */
export class GuildScheduledEventUsersManager {
  /**
   * It's a constructor for the class
   * @param event - The event that was triggered.
   * @param guildId - The ID of the guild the event is being emitted in.
   * @param client - The client object
   */
  constructor(event: any, guildId?: any, client?: any);

  /**
   * If the scheduledEventUser is a string, it's a user ID, so we return a partial
   * GuildScheduledEventUser object with the user ID and member ID. If it's an object, we return a full
   * GuildScheduledEventUser object
   * @param scheduledEventUser - The scheduled event user object.
   * @param event - The event to get the scheduled event user from.
   * @returns A new GuildScheduledEventUser
   */
  resolve(scheduledEventUser: any, event: any): any;

  /**
   * It fetches the users of a scheduled event
   * @param [event] - The event to fetch the users for. Can be a string or a GuildScheduledEvent object.
   * @param [options] - An object with the following properties:
   * @returns A RaidenCol of GuildScheduledEventUser objects
   */
  fetch(event?: any, options?: any): any;

  /**
   * It takes a query object and returns a new query object with the same properties, but with some of
   * them transformed
   * @param [query] - The query object that was passed to the route.
   * @returns An object with the following properties:
   *   limit: The value of the query.limit property, or 100 if query.limit is undefined.
   *   with_member: The value of the query.withMember property, or undefined if query.withMember is
   * undefined.
   *   before: The value of the query.before property, or undefined if query.before is undefined.
   *   after
   */
  static transformQuery(query?: any): any;
}

/**
 * `constructor` is a function that runs when a new instance of the class is created
 * @param guildId - The ID of the guild you want to get the settings for.
 * @param client - The client that the command is being run on.
 */
export class GuildStageInstanceManger {
  /**
   * `constructor` is a function that runs when a new instance of the class is created
   * @param guildId - The ID of the guild you want to get the settings for.
   * @param client - The client that the command is being run on.
   */
  constructor(guildId: any, client?: any);

  /**
   * `return super.cache.filter((o) => o.guildId === this.guildId)`
   *
   * The `super` keyword is used to access and call functions on an object's parent
   * @returns The cache property is being returned.
   */
  cache: any;
}

/**
 * `constructor(guildId, client)` is a function that takes two arguments, `guildId` and `client`, and
 * assigns them to the `guildId` and `client` properties of the class.
 * @param guildId - The ID of the guild you want to get the settings for.
 * @param client - The client that the command is being run on.
 */
export class GuildStickerManager {
  /**
   * `constructor(guildId, client)` is a function that takes two arguments, `guildId` and `client`, and
   * assigns them to the `guildId` and `client` properties of the class.
   * @param guildId - The ID of the guild you want to get the settings for.
   * @param client - The client that the command is being run on.
   */
  constructor(guildId: any, client?: any);

  /**
   * `return super.cache.filter((o) => o.guildId === this.guildId)`
   *
   * The `super` keyword is used to access and call functions on an object's parent
   * @returns The cache property is being returned.
   */
  cache: any;
}

/**
 * `constructor(guildId, client)` is a function that takes two parameters, `guildId` and `client`, and
 * sets the `guildId` property of the class to the `guildId` parameter, and the `client` property of
 * the class to the `client` parameter
 * @param guildId - The ID of the guild you want to get the settings for.
 * @param client - The client that the command is being run on.
 */
export class GuildTemplateManager {
  /**
   * `constructor(guildId, client)` is a function that takes two parameters, `guildId` and `client`, and
   * sets the `guildId` property of the class to the `guildId` parameter, and the `client` property of
   * the class to the `client` parameter
   * @param guildId - The ID of the guild you want to get the settings for.
   * @param client - The client that the command is being run on.
   */
  constructor(guildId: any, client?: any);

  /**
   * It adds a template to the cache
   * @param templates - The template code or template object.
   * @param [options] - An object with the following properties:
   * @returns A new GuildTemplate object.
   */
  _add(templates: any, options?: any): any;

  /**
   * It fetches all the templates from the API and returns a new cache of them
   * @param [options] - Object
   * @returns A new instance of the cache constructor.
   */
  fetch(options?: any): any;

  /**
   * `create` creates a new guild template
   * @param [options] - Object
   * @returns A new GuildTemplate instance.
   */
  create(options?: any): any;

  /**
   * It edits a guild template
   * @param code - The code of the template you want to edit.
   * @param [options] - Object
   * @returns A new GuildTemplate instance.
   */
  edit(code: any, options?: any): any;

  /**
   * It syncs the template with the Discord API
   * @param code - The code of the template you want to sync.
   * @returns A new instance of the GuildTemplate class.
   */
  sync(code: any): any;

  /**
   * It deletes a guild template
   * @param code - The code of the template you want to delete.
   * @returns A new instance of the GuildTemplate class.
   */
  delete(code: any): any;

  /**
   * `return Collection;`
   * @returns The cache property is being returned.
   */
  cache: any;

  /**
   * It takes an object and returns a new object with only the properties that are defined
   * @param [o] - The object to transform.
   * @returns The transformPayload function is being returned.
   */
  static transformPayload(o?: any): any;
}

/**
 * The constructor function is a function that is called when an object is created from a class.
 * @param guildId - The ID of the guild you want to get the settings for.
 * @param client - The client that the command is being run from.
 */
export class GuildVanityManager {
  /**
   * The constructor function is a function that is called when an object is created from a class.
   * @param guildId - The ID of the guild you want to get the settings for.
   * @param client - The client that the command is being run from.
   */
  constructor(guildId: any, client?: any);

  /**
   * It fetches the vanity url of a guild
   * @param [guild] - The guild ID or guild object to fetch the vanity URL for.
   * @returns A new instance of the GuildVanity class.
   */
  fetch(guild?: any): any;

  /**
   * It edits the guild's vanity url
   * @param code - The vanity code you want to set.
   * @param [guild] - The guild ID or guild object to edit the vanity URL for.
   * @returns A new GuildVanity object.
   */
  edit(code: any, guild?: any): any;
}

/**
 * It creates a new instance of the class.
 * @param guildId - The ID of the guild you want to get the settings for.
 * @param client - The client that the command is being run on.
 */
export class GuildVoiceStateManager {
  /**
   * It creates a new instance of the class.
   * @param guildId - The ID of the guild you want to get the settings for.
   * @param client - The client that the command is being run on.
   */
  constructor(guildId: any, client?: any);

  /**
   * It edits the voice state of a user in a guild
   * @param user - The user to edit the voice state of.
   * @param [options] - Object
   * @returns undefined
   */
  edit(user: any, options?: any): any;

  /**
   * `return super.cache.filter((o) => o.guildId === this.guildId);`
   *
   * The `super` keyword is used to access and call functions on an object's parent
   * @returns The cache property is being returned.
   */
  cache: any;
}

/**
 * `constructor` is a function that runs when a new instance of the class is created
 * @param guildId - The ID of the guild you want to get the settings for.
 * @param client - The client that the command is being run on.
 */
export class GuildWidgetManager {
  /**
   * `constructor` is a function that runs when a new instance of the class is created
   * @param guildId - The ID of the guild you want to get the settings for.
   * @param client - The client that the command is being run on.
   */
  constructor(guildId: any, client?: any);

  /**
   * It fetches the guild widget settings and returns a new GuildWidgetSettings object.
   * @returns A new instance of GuildWidgetSettings
   */
  fetchSettings(): any;

  /**
   * It fetches the guild widget from the API and returns a new GuildWidget object.
   * @returns A new instance of the GuildWidget class.
   */
  fetch(): any;

  /**
   * It edits the widget settings of a guild
   * @param [options] - The options to pass to the API.
   * @returns A new GuildWidgetSettings object.
   */
  edit(options?: any): any;

  /**
   * It takes an object with the keys `enabled` and `channel` and returns an object with the keys
   * `enabled` and `channel_id`
   * @param [o] - The options object.
   * @returns The transformed options object.
   */
  static transformOptions(o?: any): any;
}

/**
 * The constructor function is a function that is called when an object is created from a class.
 * @param guildId - The ID of the guild you want to send the message to.
 * @param channelId - The channel ID of the channel you want to send the message to.
 * @param client - The client that the command is being run on.
 */
export class MessageManager {
  /**
   * The constructor function is a function that is called when an object is created from a class.
   * @param guildId - The ID of the guild you want to send the message to.
   * @param channelId - The channel ID of the channel you want to send the message to.
   * @param client - The client that the command is being run on.
   */
  constructor(guildId: any, channelId: any, client?: any);

  /**
   * _add(messages, guildId = this.guildId, channelId = this.channelId, options = {cache: true, force:
   * false})
   * @param messages - The message object
   * @param [guildId] - The guild ID of the message
   * @param [channelId] - The channel ID of the channel the message is in.
   * @param [options] - cache = true, force = false
   * @returns The message object
   */
  _add(messages: any, guildId?: any, channelId?: any, options?: any): any;

  /**
   * It sends a message to a channel
   * @param [channel] - The channel to send the message to.
   * @param [options] - The options for the message.
   * @returns A message object.
   */
  send(channel?: any, options?: any): any;

  /**
   * It deletes messages in bulk
   * @param [channel] - The channel to delete the messages from.
   * @param [message] - The message to be deleted.
   * @param reason - The reason for the bulk delete.
   * @returns An array of messages.
   */
  bulkDelete(channel?: any, message?: any, reason?: any): any;

  /**
   * It deletes a message from a channel.
   * @param message - The message to delete.
   * @param reason - The reason for the deletion.
   * @returns The deleted message.
   */
  delete(message: any, reason: any): any;

  /**
   * It edits a message.
   * @param message - The message to edit.
   * @param options
   * @returns A message object.
   */
  edit(message: any, options: any): any;

  /**
   * It fetches messages from a channel
   * @param message - The message to fetch. Can be a message object, a message ID, or a string.
   * @param options
   * @returns An array of objects.
   */
  fetch(message: any, options: any): any;

  /**
   * It fetches a message from the API and adds it to the cache
   * @param message - The message object or message ID
   * @param [cache=true] - Whether or not to cache the message.
   * @param [force=false] - true
   * @returns The message object.
   */
  _fetchId(message: any, cache?: any, force?: any): any;

  /**
   * It takes a message and a channel and crossposts the message to the channel
   * @param channel - The channel to crosspost the message to.
   * @param message - The message to crosspost.
   * @returns The message object.
   */
  crosspost(channel: any, message: any): any;

  /**
   * It takes a message and an emoji and adds the emoji to the message.
   * @param message - The message to react to.
   * @param emoji - The emoji to react with.
   * @returns The message object.
   */
  react(message: any, emoji: any): any;

  /**
   * It gets the pins from the channel and returns a cache of the pins
   * @returns A new cache object.
   */
  pins(): any;

  /**
   * It deletes a message from the pinned messages list.
   * @param message - The message to unpin.
   * @param reason - The reason for the unpin.
   * @returns The message that was unpinned.
   */
  unpin(message: any, reason: any): any;

  /**
   * This function pins a message to a channel.
   * @param message - The message to pin.
   * @param reason - The reason for pinning the message.
   * @returns The message that was pinned.
   */
  pin(message: any, reason: any): any;

  /**
   * It returns the guild object if it exists, otherwise it returns null.
   * @returns The guild object.
   */
  guild: any;

  /**
   * It returns a collection of all the elements in the document that have the same tag name as the one
   * passed to the function.
   * @returns The Collection class.
   */
  cache: any;

  /**
   * It takes an object with optional properties, and returns an object with the same optional
   * properties, but with the values transformed to a different type
   * @param [o] - The options object
   * @returns an object with the properties limit, around, before, and after.
   */
  static transformOptions(o?: any): any;
}

/**
 * It creates a new object with the properties of the overwrites object, and the channelId property.
 * @param channelId - The ID of the channel to create the invite for.
 * @param [overwrites] - An object containing the overwrites for the channel.
 * @param client - The client that is creating the channel.
 */
export class PermissionOverwriteManager {
  /**
   * It creates a new object with the properties of the overwrites object, and the channelId property.
   * @param channelId - The ID of the channel to create the invite for.
   * @param [overwrites] - An object containing the overwrites for the channel.
   * @param client - The client that is creating the channel.
   */
  constructor(channelId: any, overwrites?: any, client?: any);

  /**
   * It takes an object, and returns a new PermissionOverwrite object
   * @param overwrites - The overwrites to resolve.
   * @returns A new PermissionOverwrite object.
   */
  resolve(overwrites: any): any;

  /**
   * It creates a new permission overwrite for a user or role
   * @param user - The user or role to add the overwrite to.
   * @param overwrites - An object containing the permissions to overwrite.
   * @param [options] - Object
   * @returns The channel object
   */
  create(user: any, overwrites: any, options?: any): any;

  /**
   * It takes an array of permission overwrites and sets them on the channel
   * @param overwrites - An array of overwrites.
   * @param reason - The reason for the change.
   * @returns The channel object
   */
  set(overwrites: any, reason: any): any;

  /**
   * It edits the permission overwrites of a channel
   * @param userOrRole - The user or role to edit the overwrite for.
   * @param [options] - The options to overwrite the permission with.
   * @param [overwriteOptions] - This is an object that contains the reason and type of the overwrite.
   * @returns The channel object
   */
  edit(userOrRole: any, options?: any, overwriteOptions?: any): any;

  /**
   * It deletes a permission overwrite for a user or role in a channel
   * @param userOrRole - The user or role to delete the permission overwrite for.
   * @param reason - The reason for the audit log entry.
   * @returns The channel object
   */
  delete(userOrRole: any, reason: any): any;

  /**
   * It returns a collection of all the overwrites in the channel, mapped to their resolved permission
   * overwrites
   * @returns A collection of overwrites
   */
  cache: any;

  /**
   * It takes an existing overwrite, overwrites it with the new overwrites, and returns the new overwrite
   * @param existing - The existing overwrite object.
   * @param overwrites - The overwrites to apply.
   * @param type - The type of overwrite. This can be a string or a number.
   * @returns An object with the following properties:
   *   allow: A string representation of the permissions that are allowed.
   *   deny: A string representation of the permissions that are denied.
   *   type: The type of overwrite.
   */
  static editOverwrites(existing: any, overwrites: any, type: any): any;

  /**
   * It takes an existing role, overwrites, and a type, and returns a new role with the overwrites
   * applied
   * @param existing - The existing permissions object.
   * @param [overwrites] - The overwrites object that is passed in from the user.
   * @param type - The type of the permission. This is either "role" or "member".
   */
  static transformOverwrites(existing: any, overwrites?: any, type?: any): void;
}

/**
 * A constructor function.
 * @param client - The client object.
 */
export class PresenceManager {
  /**
   * A constructor function.
   * @param client - The client object.
   */
  constructor(client: any);

  /**
   * It adds a presence to the cache
   * @param presences - The presence(s) to add. Can be a string, a presence object, or an array of
   * either.
   * @param [options] - cache = true, force = false
   * @returns A presence object
   */
  _add(presences: any, options?: any): any;

  /**
   * `cache` is a getter that returns the `Collection` class
   * @returns The Collection class
   */
  cache: any;
}

/**
 * It's a constructor for the MessageReactionManager class
 * @param reactions - The reactions of the message.
 * @param messageId - The ID of the message that the reactions are on.
 * @param channelId - The channel ID of the message
 * @param guildId - The ID of the guild the message is in.
 * @param client - The client instance
 */
export class ReactionManager {
  /**
   * It's a constructor for the MessageReactionManager class
   * @param reactions - The reactions of the message.
   * @param messageId - The ID of the message that the reactions are on.
   * @param channelId - The channel ID of the message
   * @param guildId - The ID of the guild the message is in.
   * @param client - The client instance
   */
  constructor(reactions: any, messageId: any, channelId: any, guildId?: any, client?: any);

  /**
   * `return this.client.guilds._add(this.guildId) ?? null`
   *
   * The `??` is a nullish coalescing operator. It's a fancy way of saying "if the left side is null or
   * undefined, return the right side"
   * @returns The guild object
   */
  guild: any;

  /**
   * It takes a reaction object and returns a MessageReaction object
   * @param reaction - The reaction to resolve. This can be a string, a MessageReaction object, or a
   * ReactionEmoji object.
   * @returns A new MessageReaction object
   */
  resolve(reaction: any): any;

  /**
   * It removes all reactions from a message
   * @returns Nothing
   */
  removeAll(): any;

  /**
   * It returns the value of the `reactions` property
   * @returns The reactions property of the object.
   */
  cache: any;
}

/**
 * It's a constructor for the Reaction class
 * @param reaction - The reaction object
 * @param channelId - The channel ID of the message that was reacted to.
 * @param messageId - The ID of the message that was reacted to
 * @param emoji - The emoji used
 * @param client - The client that instantiated the event
 */
export class ReactionUserManager {
  /**
   * It's a constructor for the Reaction class
   * @param reaction - The reaction object
   * @param channelId - The channel ID of the message that was reacted to.
   * @param messageId - The ID of the message that was reacted to
   * @param emoji - The emoji used
   * @param client - The client that instantiated the event
   */
  constructor(reaction: any, channelId: any, messageId: any, emoji: any, client?: any);

  /**
   * It adds a user to the cache
   * @param users - The user(s) to add to the cache.
   * @param [options] - An object with the following properties:
   * @returns A new user object
   */
  _add(users: any, options?: any): any;

  /**
   * It fetches the users that reacted to a message with a specific emoji
   * @param options - An object containing the following properties:
   * @returns A new instance of the cache constructor.
   */
  fetch(options: any): any;

  /**
   * It removes a reaction from a message
   * @param [user] - The user to remove the reaction from.
   * @returns The reaction
   */
  remove(user?: any): any;

  /**
   * `return Collection`
   * @returns The Collection class
   */
  cache: any;

  /**
   * It takes an object with optional `after` and `limit` properties, and returns an object with `after`
   * and `limit` properties, where `after` is a string and `limit` is a number
   * @param [o] - The options object that is passed to the function.
   * @returns The transformed options object.
   */
  static transformOptions(o?: any): any;
}

/**
 * It's a constructor function that takes a client parameter and passes it to the super function
 * @param client - The client object.
 */
export class RoleManager {
  /**
   * It's a constructor function that takes a client parameter and passes it to the super function
   * @param client - The client object.
   */
  constructor(client: any);

  /**
   * It adds a role to the cache
   * @param roles - The role object or role ID to add to the cache.
   * @param [guildId] - The guild ID to use for the role.
   * @param [options] - cache = true, force = false
   * @returns A role object
   */
  _add(roles: any, guildId?: any, options?: any): any;

  /**
   * It fetches all the roles in a guild and returns them
   * @param roles - The role(s) to fetch. Can be a role ID, a role object, or an array of role objects.
   * @param options - An object containing the following properties:
   * @returns The role object
   */
  fetch(roles: any, options: any): any;

  /**
   * It creates a role
   * @param [options] - Object
   * @returns A new role object
   */
  create(options?: any): any;

  /**
   * It edits a role
   * @param role - The role to edit. Can be a role object or a role ID.
   * @param [options] - Object
   * @returns The role object
   */
  edit(role: any, options?: any): any;

  /**
   * `delete` deletes a role
   * @param role - The role to delete. Can be a role object or a role ID.
   * @param reason - The reason for the role deletion.
   * @returns The deleted role
   */
  delete(role: any, reason: any): any;

  /**
   * `clone` clones a role
   * @param [role] - The role to clone.
   * @returns A new role object
   */
  clone(role?: any): any;

  /**
   * It takes an array of role objects, transforms them into a format that the API can understand, and
   * then sends them to the API
   * @param [options] - Object
   * @returns A new cache object with the roles that were modified.
   */
  modifyPosition(options?: any): any;

  /**
   * It returns the Collection object.
   * @returns The Collection class.
   */
  cache: any;

  /**
   * It takes an object, and returns an object with the same properties, but with some of them modified
   * @param [o] - The object to transform.
   * @param [modifyPosition=false] - Whether or not to modify the position of the role.
   * @returns A function that takes two parameters, o and modifyPosition.
   */
  static transformPayload(o?: any, modifyPosition?: any): any;
}

/**
 * `constructor(guildId, client)` is a function that takes two arguments, `guildId` and `client`, and
 * assigns them to the `guildId` and `client` properties of the class.
 * @param guildId - The ID of the guild you want to get the settings for.
 * @param client - The client that the command is being run on.
 */
export class RolePromptManager {
  /**
   * `constructor(guildId, client)` is a function that takes two arguments, `guildId` and `client`, and
   * assigns them to the `guildId` and `client` properties of the class.
   * @param guildId - The ID of the guild you want to get the settings for.
   * @param client - The client that the command is being run on.
   */
  constructor(guildId: any, client?: any);

  /**
   * It adds a role prompt to the cache
   * @param prompts - This is the prompt you want to add. It can be a string or an object. If it's a
   * string, it will be the prompt's ID. If it's an object, it will be the prompt's data.
   * @param [guildId] - The guild ID to use for the role prompt.
   * @param [options] -
   * @returns A new RolePrompts object
   */
  _add(prompts: any, guildId?: any, options?: any): any;

  /**
   * It fetches all role prompts from the API and returns them in a cache
   * @param [options] - Object
   * @returns A new instance of the cache constructor.
   */
  fetch(options?: any): any;

  /**
   * It sets the role prompts for the guild
   * @param [options] - Object
   * @returns A new cache.constructor
   */
  set(options?: any): any;

  /**
   * It transforms the payload into a format that the API can understand.
   * @param [payload] - The payload that is passed to the function.
   * @returns The payload is being returned with the title, description, required, and roles.
   */
  static transformPayload(payload?: any): any;

  /**
   * It takes an object with the keys `emojiName`, `emojiId`, `name`, and `role` and returns an object
   * with the keys `emoji_name`, `emoji_id`, `name`, and `role_id`
   * @param [roles] - The roles object.
   */
  static transformRoles(roles?: any): void;

  /**
   * It returns the Collection object.
   * @returns The Collection class
   */
  cache: any;
}

/**
 * It's a constructor function that takes a client parameter and passes it to the super function
 * @param client - The client object.
 */
export class ScheduledEventManager {
  /**
   * It's a constructor function that takes a client parameter and passes it to the super function
   * @param client - The client object.
   */
  constructor(client: any);

  /**
   * It adds a scheduled event to the cache.
   * @param events - The event to add. Can be a string or a GuildScheduledEvent object.
   * @param [guildId] - The ID of the guild the event is in.
   * @param [options] - cache = true, force = false
   * @returns A new instance of the GuildScheduledEvent class.
   */
  _add(events: any, guildId?: any, options?: any): any;

  /**
   * It creates a scheduled event
   * @param [options] - An object containing the following parameters:
   * @returns A new ScheduledEvent instance.
   */
  create(options?: any): any;

  /**
   * It edits a scheduled event
   * @param event - The event to edit. This can be a ScheduledEvent object, or the ID of the event.
   * @param [options] - The options to pass to the event.
   * @returns The event object
   */
  edit(event: any, options?: any): any;

  /**
   * It deletes an event from the database
   * @param event - The event to delete. Can be an event object or an event ID.
   * @returns The deleted event
   */
  delete(event: any): any;

  /**
   * It fetches scheduled events from the API and returns a collection of them
   * @param events - The event ID, or an object containing the following parameters:
   * @param options - The options object.
   * @returns A new cache constructor with the events mapped to the id and the _add function.
   */
  fetch(events: any, options: any): any;

  /**
   * It fetches an event by ID, and returns it
   * @param events - The event to fetch. Can be an event ID or an event object.
   * @param [cache=true] - Whether or not to cache the event.
   * @param [force=false] - If true, it will force the cache to be updated.
   * @returns The event object
   */
  _fetchId(events: any, cache?: any, force?: any): any;

  /**
   * It returns the Collection object.
   * @returns The Collection class
   */
  cache: any;

  /**
   * It takes an object with the properties of the class, and returns an object with the properties of
   * the API
   * @param [o] - The options object.
   * @param [create=false] - Whether or not this is a create request.
   * @returns The return value is a promise that resolves to a GuildScheduledEvent object.
   */
  static transformOptions(o?: any, create?: any): any;
}

/**
 * A constructor function.
 * @param client - The client object.
 */
export class StageInstanceManager {
  /**
   * A constructor function.
   * @param client - The client object.
   */
  constructor(client: any);

  /**
   * It adds a stage instance to the cache.
   * @param stageInstances - This is the stage instance object or the stage instance ID.
   * @param [guildId] - The guild ID of the guild the stage instance is in.
   * @param [options] - cache = true, force = false
   * @returns A new StageInstance object
   */
  _add(stageInstances: any, guildId?: any, options?: any): any;

  /**
   * It fetches a stage instance from the API and adds it to the cache
   * @param channel - The channel to fetch. Can be a channel ID or a channel object.
   * @param [options] - Object
   * @returns The stage instance
   */
  fetch(channel: any, options?: any): any;

  /**
   * It creates a new stage instance.
   * @param [options] - Object
   * @returns A new StageInstance object
   */
  create(options?: any): any;

  /**
   * It edits a stage instance
   * @param channel - The channel to edit.
   * @param [options] - The options to pass to the API.
   * @returns A stage instance object
   */
  edit(channel: any, options?: any): any;

  /**
   * It deletes a stage instance
   * @param channel - The channel to delete. Can be a channel object or a channel ID.
   * @param reason - The reason for the deletion.
   * @returns The deleted stage
   */
  delete(channel: any, reason: any): any;

  /**
   * It returns the Collection object.
   * @returns The Collection class.
   */
  cache: any;

  /**
   * It takes a payload object and returns a new object with the same properties, but with the
   * `channel` property replaced with a `channel_id` property
   * @param [payload] - The payload object that is passed to the function.
   * @returns A new object with the properties channel_id, topic, and privacy_level.
   */
  static transformPayload(payload?: any): any;
}

/**
 * It's a constructor function that takes a client parameter and passes it to the super function
 * @param client - The client object.
 */
export class StickerManager {
  /**
   * It's a constructor function that takes a client parameter and passes it to the super function
   * @param client - The client object.
   */
  constructor(client: any);

  /**
   * It adds a sticker to the cache
   * @param stickers - The sticker object or sticker ID.
   * @param [guildId] - The guild ID to use for the sticker.
   * @param [options] - cache = true, force = false
   * @returns A sticker object
   */
  _add(stickers: any, guildId?: any, options?: any): any;

  /**
   * It fetches all the stickers in a guild
   * @param sticker - The sticker to fetch. Can be a sticker ID, a sticker object, or nothing.
   * @param options - An object containing the following properties:
   * @returns A new cache object with the sticker id and the sticker object
   */
  fetch(sticker: any, options: any): any;

  /**
   * It fetches a sticker from the API and adds it to the cache
   * @param sticker - The sticker object or ID.
   * @param [cache=true] - Whether or not to cache the sticker.
   * @param [force=false] - If true, it will force the cache to be updated.
   * @returns The sticker object
   */
  _fetchId(sticker: any, cache?: any, force?: any): any;

  /**
   * It creates a sticker.
   * @param [options] - Object
   * @returns A new sticker object
   */
  create(options?: any): any;

  /**
   * It edits a sticker.
   * @param sticker - The sticker to edit. Can be a sticker object or a sticker ID.
   * @param [options] - Object
   * @returns A sticker object
   */
  edit(sticker: any, options?: any): any;

  /**
   * It deletes a sticker
   * @param sticker - The sticker to delete. Can be a sticker object or a sticker ID.
   * @param reason - The reason for the deletion.
   * @returns The deleted sticker
   */
  delete(sticker: any, reason: any): any;

  /**
   * It returns the Collection object.
   * @returns The Collection class
   */
  cache: any;
}

/**
 * `This function is a constructor for the class.`
 * @param channelId - The channel ID of the channel you want to send the message to.
 * @param guildId - The ID of the guild the channel is in.
 * @param client - The client that the command is being run on.
 */
export class ThreadManager {
  /**
   * `This function is a constructor for the class.`
   * @param channelId - The channel ID of the channel you want to send the message to.
   * @param guildId - The ID of the guild the channel is in.
   * @param client - The client that the command is being run on.
   */
  constructor(channelId: any, guildId?: any, client?: any);

  /**
   * It returns the cache, but only the cache items that have a parentId that matches the channelId
   * @returns The cache property is being returned.
   */
  cache: any;
}

/**
 * `constructor` is a function that runs when a new instance of the class is created
 * @param guildId - The ID of the guild the thread is in.
 * @param threadId - The ID of the thread you want to get.
 * @param client - The client that the thread was created with.
 */
export class ThreadMemberManager {
  /**
   * `constructor` is a function that runs when a new instance of the class is created
   * @param guildId - The ID of the guild the thread is in.
   * @param threadId - The ID of the thread you want to get.
   * @param client - The client that the thread was created with.
   */
  constructor(guildId: any, threadId: any, client?: any);

  /**
   * It adds a member to the cache
   * @param members - The member(s) to add to the cache. This can be a single member, or an array of
   * members.
   * @param [guildId] - The guild ID of the guild the thread is in.
   * @param [threadId] - The ID of the thread
   * @param [options] - cache = true, force = false
   * @returns A new ThreadMember object
   */
  _add(members: any, guildId?: any, threadId?: any, options?: any): any;

  /**
   * It joins a thread
   * @returns The user object
   */
  join(): any;

  /**
   * It fetches the members of a thread
   * @param user - The user to fetch. Can be a user object, a user ID, or a user tag.
   * @param options - An object containing the following properties:
   * @returns A new cache constructor
   */
  fetch(user: any, options: any): any;

  /**
   * It fetches a user's ID from the API and returns it
   * @param user - The user to fetch. Can be a user object, a user ID, or a member object.
   * @param [cache=true] - Whether or not to cache the member.
   * @param [force=true] - If true, it will force the cache to be updated.
   * @returns The member object
   */
  _fetchId(user: any, cache?: any, force?: any): any;

  /**
   * It adds a user to a thread
   * @param [user] - The user to add to the thread.
   * @returns The user object
   */
  add(user?: any): any;

  /**
   * It removes a user from the thread
   * @param [user] - The user to remove from the thread.
   * @returns The deleted member
   */
  remove(user?: any): any;

  /**
   * It returns the Collection object.
   * @returns The Collection class
   */
  cache: any;
}

/**
 * It's a constructor function that takes a client parameter and passes it to the super function.
 * @param client - The client object.
 */
export class UserManager {
  /**
   * It's a constructor function that takes a client parameter and passes it to the super function.
   * @param client - The client object.
   */
  constructor(client: any);

  /**
   * It adds a user to the cache
   * @param users - The user object or user ID to add to the cache.
   * @param [options] - cache = true, force = false
   * @returns A user object.
   */
  _add(users: any, options?: any): any;

  /**
   * It fetches a user from the API and adds it to the cache
   * @param user - The user object or user ID.
   * @param [options] - cache = true, force = false
   * @returns The user object.
   */
  fetch(user: any, options?: any): any;

  /**
   * This function edits the user's profile.
   * @param [options] - The options to pass to the edit function.
   * @returns The user object.
   */
  edit(options?: any): any;

  /**
   * It creates a DM channel with the user you specify
   * @param user - The user to create a DM with.
   * @returns The channel object.
   */
  createDM(user: any): any;

  /**
   * It creates a message payload, creates a DM channel, and sends the message payload to the DM
   * channel.
   * @param user - The user to send the message to.
   * @param [options] - Object
   * @returns The message that was sent.
   */
  send(user: any, options?: any): any;

  /**
   * The function returns a collection of objects that are stored in the cache.
   * @returns The Collection class.
   */
  cache: any;
}

/**
 * It's a constructor function that takes a client parameter and passes it to the super function
 * @param client - The client object.
 */
export class VoiceStateManager {
  /**
   * It's a constructor function that takes a client parameter and passes it to the super function
   * @param client - The client object.
   */
  constructor(client: any);

  /**
   * It adds a new voice state to the cache.
   * @param voiceStates - The voice state object to add to the cache.
   * @param [guildId] - The guild ID to use for the voice state.
   * @param [options] - An object with the following properties:
   * @returns A new VoiceState object
   */
  _add(voiceStates: any, guildId?: any, options?: any): any;

  /**
   * It returns the Collection object.
   * @returns The Collection class
   */
  cache: any;
}

/**
 * This function is a constructor for the class Guild. It takes in a guildId and a client, and sets
 * the guildId to the guildId passed in, and sets the client to the client passed in.
 * @param guildId - The ID of the guild you want to get the member count of.
 * @param client - The client that the command is being run from.
 */
export class WelcomeScreenManager {
  /**
   * This function is a constructor for the class Guild. It takes in a guildId and a client, and sets
   * the guildId to the guildId passed in, and sets the client to the client passed in.
   * @param guildId - The ID of the guild you want to get the member count of.
   * @param client - The client that the command is being run from.
   */
  constructor(guildId: any, client?: any);

  /**
   * It fetches the welcome screen of a guild
   * @returns A new instance of the WelcomeScreen class.
   */
  fetch(): any;

  /**
   * It edits the welcome screen of a guild.
   * @param [options] - Object
   * @returns A new WelcomeScreen object.
   */
  edit(options?: any): any;

  /**
   * It takes an object with a property called `id` that can be either a string or an object with a
   * property called `id` that is a string
   * @param [channels] - The channel object that you want to transform.
   * @returns An object with the following properties:
   * - channel_id
   * - description
   * - emoji_id
   * - emoji_name
   */
  static transformChannels(channels?: any): any;

  /**
   * It takes an object with a property called "channels" which is an array of objects, and returns an
   * object with a property called "welcome_channels" which is an array of objects.
   * @param [o] - The object that is passed in.
   * @returns an object with the properties enabled, welcome_channels, and description.
   */
  static transformOptions(o?: any): any;
}

/**
 * It takes in a data object and a client, and then sets the properties of the class to the values of
 * the data object
 * @param [data] - The data that was sent from the API.
 * @param client - The client that created the guild.
 */
export class APIGuild {
  /**
   * It takes in a data object and a client, and then sets the properties of the class to the values of
   * the data object
   * @param [data] - The data that was sent from the API.
   * @param client - The client that created the guild.
   */
  constructor(data?: any, client?: any);
}

/**
 * A class representing a Discord Slash Command.
 * @class
 * @param {Object} [data={}] - The data for the Slash Command.
 * @param {number | string} [data.type="Chat_Input"] - The type of the command.
 * @param {string} [data.name] - The name of the command.
 * @param {Object} [data.name_localizations] - The localizations of the command name.
 * @param {string} [data.description] - The description of the command.
 * @param {Object} [data.description_localizations] - The localizations of the command description.
 * @param {Array<Object>} [data.options] - The options of the command.
 * @param {string} [data.default_member_permissions] - The default permissions of the command for members.
 * @param {boolean} [data.dm_permission=true] - Whether the command can be used in DMs.
 */
export class Slash {
  /**
   * A class representing a Discord Slash Command.
   * @class
   * @param {Object} [data={}] - The data for the Slash Command.
   * @param {number | string} [data.type="Chat_Input"] - The type of the command.
   * @param {string} [data.name] - The name of the command.
   * @param {Object} [data.name_localizations] - The localizations of the command name.
   * @param {string} [data.description] - The description of the command.
   * @param {Object} [data.description_localizations] - The localizations of the command description.
   * @param {Array<Object>} [data.options] - The options of the command.
   * @param {string} [data.default_member_permissions] - The default permissions of the command for members.
   * @param {boolean} [data.dm_permission=true] - Whether the command can be used in DMs.
   */
  constructor(data?: {
    type?: number | string;
    name?: string;
    name_localizations?: Object;
    description?: string;
    description_localizations?: Object;
    options?: Object[];
    default_member_permissions?: string;
    dm_permission?: boolean;
  });

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
  setDescriptionLocalizations(description: string): Slash;

  /**
   * Sets the localizations of the name of the Slash Command.
   * @param {Object} [localizations={}] - The localizations of the command name.
   * @returns {Slash} The Slash instance.
   */
  setNameLocalizations(localizations?: Object): Slash;

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
  setDefaultMemberPermissions(permission: number): Slash;

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
  setOptions(fn: Object[] | (() => any)): Slash;

  /**
   * Adds sub-command groups to the Slash Command.
   * @param {(Array<Object>|Function)} fn - The sub-command groups or a function that returns sub-command groups.
   * @returns {Slash} The Slash instance.
   */
  addSubCommandGroups(fn: Object[] | (() => any)): Slash;

  /**
   * Adds sub-commands to the Slash Command.
   * @param {(Array<Object>|Function)} fn - The sub-commands or a function that returns sub-commands.
   * @returns {Slash} The Slash instance.
   */
  addSubCommands(fn: Object[] | (() => any)): Slash;

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

/**
 * Represents an option for a slash command.
 * @class
 */
export class SlashOption {
  /**
   * Represents an option for a slash command.
   * @class
   */
  constructor(data?: {
    type?: string | number;
    name?: string;
    name_localizations?: Object;
    description?: string;
    description_localizations?: Object;
    required?: boolean;
    choices?: Object[];
    channel_types?: string[];
    min_value?: number;
    max_value?: number;
    min_length?: number;
    max_length?: number;
    autocomplete?: boolean;
  });

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
   * @param {Object} [localizations={}] - The localized names of the option.
   * @returns {SlashOption} The updated instance of the SlashOption class.
   */
  setNameLocalizations(localizations?: Object): SlashOption;

  /**
   * Sets the choices for the option.
   * @param {...Object|Array<Object>} choices - The choices for the option.
   * @returns {SlashOption} The updated instance of the SlashOption class.
   */
  setChoices(choices: Object | Object[]): SlashOption;

  /**
   * Sets the channel types that the option can be used with.
   * @param {...string|Array<string>} channelTypes - The channel types that the option can be used with.
   * @returns {SlashOption} The updated instance of the SlashOption class.
   */
  setChannelTypes(channelTypes: string | string[]): SlashOption;

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
  static transformChoices(choices: {name?: string; value?: string; nameLocalizations?: {[k: string]: string}}): Object;

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

/**
 * Represents a sub-command group for a slash command.
 * @class
 */
export class SlashSubCommandGroups {
  /**
   * Represents a sub-command group for a slash command.
   * @class
   */
  constructor(data?: {name?: string; description?: string; nameLocalizations?: Object; descriptionLocalizations?: Object; options?: Object[]});

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
   * @param {Object} [localizations={}] - The name localizations of the sub-command group.
   * @returns {SlashSubCommandGroups} The sub-command group object.
   */
  setNameLocalizations(localizations?: Object): SlashSubCommandGroups;

  /**
   * Adds sub-commands to the sub-command group.
   * @param {Function|Object[]} fn - The sub-command builder function or array of sub-command objects.
   * @returns {SlashSubCommandGroups} The sub-command group object.
   * @throws {RangeError} Will throw an error if the sub-command builder is not of type 'SlashSubCommandBuilder'.
   */
  addSubCommands(fn: (() => any) | Object[]): SlashSubCommandGroups;

  /**
   * Returns a JSON representation of the sub-command group.
   * @returns {Object} The JSON representation of the sub-command group.
   */
  toJSON(): Object;
}

/**
 * A class representing a slash subcommand for Discord slash commands.
 * @class
 */
export class SlashSubCommands {
  /**
   * A class representing a slash subcommand for Discord slash commands.
   * @class
   */
  constructor(data: {name: string; description: string; name_localizations: Object; description_localizations: Object; options: Object[]});

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
  setNameLocalizations(localizations: Object): SlashSubCommands;

  /**
   * Set the options for the subcommand.
   * @param {Object|function} fn - The options for the subcommand.
   * @returns {SlashSubCommands} The updated SlashSubCommands instance.
   */
  setOptions(fn: Object | (() => any)): SlashSubCommands;

  /**
   * Convert the SlashSubCommands instance to a JSON object.
   * @returns {Object} The JSON representation of the SlashSubCommands instance.
   */
  toJSON(): Object;
}

/**
 * It takes in a data object and a client object, and then it sets the properties of the Activity
 * object to the values of the data object
 * @param [data] - The data that was sent from the Discord API.
 * @param client - DiscordClient
 */
export class Activity {
  /**
   * It takes in a data object and a client object, and then it sets the properties of the Activity
   * object to the values of the data object
   * @param [data] - The data that was sent from the Discord API.
   * @param client - DiscordClient
   */
  constructor(data?: any, client?: any);

  /**
   * It takes the enum value and returns the string value.
   * @returns The object literal is being returned.
   */
  toJSON(): any;
}

/**
 * Class representing an application command.
 * @class
 */
export class ApplicationCommand {
  /**
   * Class representing an application command.
   * @class
   */
  constructor(data: any, guildId?: any, client?: any);

  /**
   * Get the guild object if it exists, otherwise return null.
   * @returns The guild object or null.
   */
  guild: any;

  /**
   * Fetch the command from the guild or the client.
   * @param [options] - The options to pass to the command.
   * @returns The command object.
   */
  fetch(options?: any): any;

  /**
   * Edit the command.
   * @param [options] - The options to edit the command with.
   * @returns The return value of the edit method of the commands property of the guild or application object.
   */
  edit(options?: any): any;

  /**
   * Delete the command from the commands collection.
   * @returns The return value of the delete method.
   */
  delete(): any;
}

/**
 * It's a constructor for a class that extends another class.
 *
 * @param [data] - The data from the API
 * @param guildId - The guild ID
 * @param client - Discord.Client
 */
export class ApplicationCommandInteraction {
  /**
   * It's a constructor for a class that extends another class.
   *
   * @param [data] - The data from the API
   * @param guildId - The guild ID
   * @param client - Discord.Client
   */
  constructor(data?: any, guildId?: any, client?: any);
}

/**
 * It's a constructor function that takes in a data object, a guildId, and a client, and then sets the
 * commandId to the id of the data object, or undefined if it doesn't exist, and sets the applicationId
 * to the application_id of the data object, or null if it doesn't exist. It then sets the guildId to
 * the guildId, and then sets the permissions to a new RaidenCol object, which is a collection class,
 * and then maps the permissions of the data object to a new array, and then sets the id of the object
 * to the id of the data object, and then sets the permissions of the object to the
 * ApplicationCommandPermission.transformPermissions function, which takes in the object.
 * @param [data] - The data that is passed to the constructor
 * @param guildId - The guild id
 * @param client - RaidenClient
 */
export class ApplicationCommandPermission {
  /**
   * It's a constructor function that takes in a data object, a guildId, and a client, and then sets the
   * commandId to the id of the data object, or undefined if it doesn't exist, and sets the applicationId
   * to the application_id of the data object, or null if it doesn't exist. It then sets the guildId to
   * the guildId, and then sets the permissions to a new RaidenCol object, which is a collection class,
   * and then maps the permissions of the data object to a new array, and then sets the id of the object
   * to the id of the data object, and then sets the permissions of the object to the
   * ApplicationCommandPermission.transformPermissions function, which takes in the object.
   * @param [data] - The data that is passed to the constructor
   * @param guildId - The guild id
   * @param client - RaidenClient
   */
  constructor(data?: any, guildId?: any, client?: any);

  /**
   * It fetches the permissions of the command
   * @param [options] - Object
   * @returns The return value is the result of the await expression.
   */
  fetch(options?: any): any;

  /**
   * If the command is in the client's cache, return it. If it's not, check if it's in the guild's cache.
   * If it's not, return null.
   * @returns The command object.
   */
  command: any;

  /**
   * It returns the guild object if it exists, otherwise it returns null.
   * @returns The guild object.
   */
  guild: any;

  /**
   * It takes an object with a property called `type` that can be a number or a string, and if it's a
   * number, it converts it to a string using a lookup table.
   *
   * The lookup table is defined in the `ApplicationCommandPermissionType` enum.
   *
   * The function returns an object with the same properties as the input object, but with the `type`
   * property converted to a string if it was a number.
   *
   * The function is called like this:
   * @param [permissions]
   * @returns The return value is an object with the following properties:
   * id: The id of the permission.
   * type: The type of the permission.
   * permission: The permission.
   */
  static transformPermissions(permissions?: any): any;
}

/**
 * It's a constructor for the class.
 * @param [data] - The data that is passed to the constructor.
 * @param guildId - The ID of the guild the role is in
 * @param client - The client that the command is being run from
 */
export class AutocompleteInteraction {
  /**
   * It's a constructor for the class.
   * @param [data] - The data that is passed to the constructor.
   * @param guildId - The ID of the guild the role is in
   * @param client - The client that the command is being run from
   */
  constructor(data?: any, guildId?: any, client?: any);

  /**
   * If the data.options array has a focused property, then return the value of that property.
   *
   * If it doesn't, then return null.
   * @returns The value of the focused option.
   */
  getFocused(): any;

  /**
   * It sends a response to the interaction.
   * @param choices - An array of objects with the following properties:
   * @returns The response from the API.
   */
  respond(choices: any): any;

  /**
   * It takes an object with a name and value property and returns an object with a name and value
   * property
   * @param [choices]
   * @returns The transformed choices object.
   */
  static transformChoices(choices?: any): any;
}

/**
 * It creates a new ThreadManager object and assigns it to the threads property
 * @param data - The data from the database.
 * @param guildId - The ID of the guild the channel is in.
 * @param client - The client that the channel belongs to
 */
export class BaseGuildChannel {
  /**
   * It creates a new ThreadManager object and assigns it to the threads property
   * @param data - The data from the database.
   * @param guildId - The ID of the guild the channel is in.
   * @param client - The client that the channel belongs to
   */
  constructor(data: any, guildId?: any, client?: any);

  /**
   * `Fetches the private threads in this channel.`
   * @param [options] - An object with the following properties:
   * @returns A new FetchedThreads object
   */
  fetchPrivateThreads(options?: any): any;
}

/**
 * It's a constructor for the class.
 * @param [data] - The data that is passed to the constructor.
 * @param guildId - The ID of the guild the role is in.
 * @param client - The client that the command is being run from
 */
export class ButtonInteraction {
  /**
   * It's a constructor for the class.
   * @param [data] - The data that is passed to the constructor.
   * @param guildId - The ID of the guild the role is in.
   * @param client - The client that the command is being run from
   */
  constructor(data?: any, guildId?: any, client?: any);
}

/**
 * It's a constructor for the class.
 * @param [data] - The data that is passed to the constructor.
 * @param guildId - The ID of the guild the role is in.
 * @param client - The client that instantiated the object.
 */
export class CategoryChannel {
  /**
   * It's a constructor for the class.
   * @param [data] - The data that is passed to the constructor.
   * @param guildId - The ID of the guild the role is in.
   * @param client - The client that instantiated the object.
   */
  constructor(data?: any, guildId?: any, client?: any);

  /**
   * It returns a collection of channels that are children of the current channel
   * @returns A collection of channels that are children of this channel.
   */
  childrens: any;

  /**
   * It sorts the childrens array by position, and then returns the first element of the sorted array
   * @returns The first channel in the array.
   */
  highest: any;
}

/**
 * It's a constructor for a class that extends another class
 * @param [data] - The data that was received from the API.
 * @param guildId - The ID of the guild the channel is in
 * @param client - DiscordClient
 */
export class Channel {
  /**
   * It's a constructor for a class that extends another class
   * @param [data] - The data that was received from the API.
   * @param guildId - The ID of the guild the channel is in
   * @param client - DiscordClient
   */
  constructor(data?: any, guildId?: any, client?: any);

  /**
   * It fetches the channel
   * @param [options] - An object containing additional options.
   * @returns The channel object.
   */
  fetch(options?: any): any;

  /**
   * It deletes a channel
   * @param reason - The reason for the deletion.
   * @returns The channel object.
   */
  delete(reason: any): any;

  /**
   * It edits the channel
   * @param options - Object
   * @returns The channel object.
   */
  edit(options: any): any;

  /**
   * It fetches all the invites for a channel
   * @returns An array of objects.
   */
  fetchInvites(): any;

  /**
   * It creates an invite for the channel
   * @param options - Object
   * @returns The invite object.
   */
  createInvite(options: any): any;

  /**
   * It clones the channel
   * @returns The channel that was cloned.
   */
  clone(): any;

  /**
   * If the type is Guild_Text, return true, otherwise return false.
   * @returns a boolean value.
   */
  isGuildText(): any;

  /**
   * If the type is Dm, return true, otherwise return false.
   * @returns The function isDM() is being returned.
   */
  isDM(): any;

  /**
   * If the type is Guild_Stage_Voice, return true, otherwise return false.
   * @returns A boolean value.
   */
  isStage(): any;

  /**
   * If the type is Guild_Forum, return true. Otherwise, return false.
   * @returns A boolean value.
   */
  isForum(): any;

  /**
   * If the type is Guild_Voice, return true, otherwise return false.
   * @returns A boolean value.
   */
  isGuildVoice(): any;

  /**
   * If the type is Guild_News, return true. Otherwise, return false.
   * @returns a boolean value.
   */
  isNews(): any;

  /**
   * If the type of the channel is Guild_Category, return true. Otherwise, return false
   * @returns a boolean value.
   */
  isCategory(): any;

  /**
   * If the type is one of the following, return true, otherwise return false.
   * @returns A boolean value.
   */
  isText(): any;

  /**
   * If the type is one of the three types of threads, return true, otherwise return false.
   * @returns A boolean value.
   */
  isThread(): any;

  /**
   * If the type is Guild_Voice or Guild_Stage_Voice, return true, otherwise return false.
   * @returns A boolean value.
   */
  isVoice(): any;

  /**
   * If the type is Guild_Directory, return true, otherwise return false.
   * @returns A boolean value.
   */
  isDirectory(): any;

  /**
   * If the guildId is defined, return true, otherwise return false.
   * @returns A boolean value.
   */
  inGuild(): any;

  /**
   * If the client has the guild in its cache, return true, otherwise return false.
   * @returns A boolean value.
   */
  inCachedGuild(): any;

  /**
   * If the guild's rules channel ID is equal to the channel's ID, return true, otherwise return false.
   * @returns The return value is a boolean.
   */
  isRuleChannel(): any;

  /**
   * If the guild doesn't have a system channel, return null. If the guild has a system channel and it's
   * the same as the channel, return true. Otherwise, return false.
   * @returns A boolean value.
   */
  isSystemChannel(): any;

  /**
   * If the parentId is not null, then return the parentId, otherwise return null.
   * @returns The parent channel of the channel.
   */
  parent: any;

  /**
   * It returns the URL of the channel banner
   * @param [options] - The options for the banner.
   * @returns The bannerURL method returns the URL of the channel's banner.
   */
  bannerURL(options?: any): any;

  /**
   * It edits the name of the channel
   * @param name - The new name of the channel.
   * @param reason - The reason for the change (0-1024 characters).
   * @returns The return value of the edit method.
   */
  setName(name: any, reason: any): any;

  /**
   * It edits the type of the channel.
   * @param type - The type of the channel.
   * @param reason - The reason for the change.
   * @returns The edited message.
   */
  setType(type: any, reason: any): any;

  /**
   * It sets the topic of the channel
   * @param topic - The new topic of the channel.
   * @param reason - The reason for the change.
   * @returns The return value of the edit function.
   */
  setTopic(topic: any, reason: any): any;

  /**
   * It edits the position of a role in a guild
   * @param position - The position you want to move the role to.
   * @param reason - The reason for the move.
   * @returns The return value of the edit function.
   */
  setPosition(position: any, reason: any): any;

  /**
   * It edits the channel's parent
   * @param parent - The parent category to move this category to.
   * @param reason - The reason for the edit.
   * @returns The return value of the edit method.
   */
  setParent(parent: any, reason: any): any;

  /**
   * It sets the default auto archive duration of a guild.
   *
   * Here's a more detailed explanation of the above function:
   *
   * It sets the default auto archive duration of a guild.
   *
   * Here's an example of the above function in use:
   * @param defaultAutoArchiveDuration - The default auto-archive duration for the guild.
   * @param reason - The reason for the change.
   * @returns The return value of the edit function.
   */
  setDefaultAutoArchiveDuration(defaultAutoArchiveDuration: any, reason: any): any;

  /**
   * It edits the message with the given flags and reason
   * @param flags - The flags to set.
   * @param reason - The reason for the edit.
   * @returns The return value of the edit method.
   */
  setFlags(flags: any, reason: any): any;

  /**
   * It takes the permission overwrites from the parent channel and applies them to the current channel
   * @returns The permissionOverwrites of the parent channel.
   */
  lockPermissions(): any;

  /**
   * It returns the guild object of the guild ID that is stored in the database
   * @returns The guild object.
   */
  guild: any;

  /**
   * It takes a user or role and returns the permissions that user or role has in the channel
   * @param userOrRole - The user or role to get the permissions for.
   * @returns A Permissions object.
   */
  permissionsFor(userOrRole: any): any;

  /**
   * It fetches all webhooks in a channel and returns them in a RaidenCol
   * @returns An array of webhooks.
   */
  fetchWebhooks(): any;

  /**
   * It creates a webhook for the channel
   * @param [options] - Object
   * @returns A webhook object.
   */
  createWebhook(options?: any): any;
}

/**
 * It's a constructor for the Application class.
 * @param [data]
 * @param client - DiscordClient
 */
export class ClientApplication {
  /**
   * It's a constructor for the Application class.
   * @param [data]
   * @param client - DiscordClient
   */
  constructor(data?: any, client?: any);

  /**
   * It fetches the application information from the Discord API and returns it.
   * @returns The client.application is being returned.
   */
  fetch(): any;

  /**
   * It returns a new instance of the ApplicationCommandManager class, which is a class that is defined
   * in the file ApplicationCommandManager.js.
   * The ApplicationCommandManager class is a class that is defined in
   * @returns A new instance of the ApplicationCommandManager class.
   */
  commands: any;

  /**
   * "If the application has an icon, return the icon URL, otherwise return null."
   *
   * The function takes an optional parameter, options, which is an object. If options is not provided,
   * it defaults to an empty object.
   *
   * The function then checks if the application has an icon. If it does, it returns the icon URL,
   * otherwise it returns null.
   *
   * The icon URL is generated by the client.cdn.ApplicationIcon function. This function takes the icon
   * ID, the dynamic flag, the size, the format, and the application ID.
   *
   * The dynamic flag is true if the icon is animated, otherwise it's false.
   *
   * The size is the size of the icon in pixels.
   *
   * The format is the image format, either "png" or "gif".
   *
   * The application ID is the ID of the application.
   *
   * The client.cdn
   * @param [options] - The options for the icon.
   * @returns The iconURL method returns the URL of the application's icon.
   */
  iconURL(options?: any): any;
}

/**
 * It's a constructor function that takes in two parameters, data and client, and sets the data
 * parameter to an empty object if it's not passed in, and sets the client parameter to undefined if
 * it's not passed in.
 * @param [data] - The data that was returned from the API.
 * @param client - The client that instantiated the object. Every Discordie object that
 */
export class ClientUser {
  /**
   * It's a constructor function that takes in two parameters, data and client, and sets the data
   * parameter to an empty object if it's not passed in, and sets the client parameter to undefined if
   * it's not passed in.
   * @param [data] - The data that was returned from the API.
   * @param client - The client that instantiated the object. Every Discordie object that
   */
  constructor(data?: any, client?: any);

  /**
   * It sets the avatar of the bot
   * @param avatar - The avatar to set.
   * @returns The user object.
   */
  setAvatar(avatar: any): any;

  /**
   * It sets the username of the bot
   * @param username - The new username for the user.
   * @returns The return value is a promise that resolves to the updated user object.
   */
  setUsername(username: any): any;

  /**
   * It sets the avatar decorations of the user
   * @param avatarDecorations - A string of the avatar decorations.
   * @returns The user object.
   */
  setAvatarDecorations(avatarDecorations: any): any;

  /**
   * It sets the presence of the bot
   * @param presence - Presence
   * @returns The presence of the user.
   */
  setPresence(presence: any): any;

  /**
   * It sets the status of the bot
   * @param status - The status of the user. Can be one of:
   * @returns The return value of the setPresence method.
   */
  setStatus(status: any): any;

  /**
   * It sets the activities of the client
   * @param activities - An array of objects containing information about what the user is currently
   * doing.
   * @returns The return value is the promise that is returned by the setPresence method.
   */
  setActivities(activities: any): any;
}

/**
 * It's a constructor for the class.
 * @param [data] - The data that is passed to the constructor.
 * @param guildId - The ID of the guild the role is in
 * @param client - The client that instantiated the object.
 */
export class CommandInteraction {
  /**
   * It's a constructor for the class.
   * @param [data] - The data that is passed to the constructor.
   * @param guildId - The ID of the guild the role is in
   * @param client - The client that instantiated the object.
   */
  constructor(data?: any, guildId?: any, client?: any);
}

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
export class CommandInteractionOptionResolver {
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
  constructor(data?: any, guildId?: any, channelId?: any, client?: any);

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
  _parse(options?: any): any;

  /**
   * It takes a string, and returns a string
   * @param name - The name of the option you want to get the value of.
   * @param [required=false] - boolean
   * @returns The value of the option.
   */
  getString(name: any, required?: any): any;

  /**
   * If the option type is not a number, throw an error, otherwise return the value of the option.
   * @param name - The name of the option to be retrieved.
   * @param [required=false] - boolean
   * @returns The value of the option.
   */
  getNumber(name: any, required?: any): any;

  /**
   * It takes a string and a boolean as parameters, and returns a number or null.
   * @param name - The name of the option
   * @param [required=false] - boolean
   * @returns The value of the option.
   */
  getInteger(name: any, required?: any): any;

  /**
   * It takes a string and a boolean as arguments, and returns a boolean.
   * @param name - The name of the option to be retrieved.
   * @param [required=false] - boolean
   * @returns The value of the option.
   */
  getBoolean(name: any, required?: any): any;

  /**
   * It gets the attachment from the message
   * @param [required=false] - boolean
   * @returns The attachment of the message.
   */
  getAttachment(required?: any): any;

  /**
   * It gets a user from the options
   * @param name - The name of the option you want to get
   * @param [required=false] - boolean
   * @returns The user object.
   */
  getUser(name: any, required?: any): any;

  /**
   * It gets a member from the options
   * @param name - The name of the option
   * @param [required=false] - boolean
   * @returns The member object.
   */
  getMember(name: any, required?: any): any;

  /**
   * If the data is not null, and the data is resolved and the data type is not 2, throw a range error.
   * If the data is resolved, and the data type is 2, return the user.
   * @returns The user object.
   */
  getContextUser(): any;

  /**
   * It returns a message object from a message ID
   * @returns A MessageManager object.
   */
  getMessage(): any;

  /**
   * It gets the channel from the options.
   * @param name - The name of the option you want to get.
   * @param [required=false] - boolean
   * @returns The channel object.
   */
  getChannel(name: any, required?: any): any;

  /**
   * It gets the role from the options
   * @param name - The name of the option
   * @param [required=false] - boolean
   * @returns The role object.
   */
  getRole(name: any, required?: any): any;

  /**
   * It gets the mentionable object from the options
   * @param name - The name of the option.
   * @param [required=false] - boolean
   * @returns The user, member, or role that was selected.
   */
  getMentionable(name: any, required?: any): any;

  /**
   * It returns the name of the subcommand if it exists, otherwise it returns null.
   * @param [required=false] - boolean
   * @returns The name of the sub command.
   */
  getSubCommand(required?: any): any;

  /**
   * If the option has a filter, return the filter's name. If the option doesn't have a filter, return
   * null
   * @param [required=false] - boolean
   * @returns The Sub_Command_Group of the option.
   */
  getSubCommandGroup(required?: any): any;

  /**
   * It returns the guild object of the guild ID that is stored in the database
   * @returns The guild object.
   */
  guild: any;

  /**
   * It returns the channel object of the channel ID that is stored in the message object
   * @returns The channel object.
   */
  channel: any;
}

/**
 * It's a constructor function that takes in data, guildId, and client as parameters. It then calls the
 * super function, which is a function that is inherited from the parent class. It then sets the
 * targetId and resolved properties to the data that is passed in.
 * @param [data] - The data that was sent from the API.
 * @param guildId - The ID of the guild the case is in
 * @param client - The client that the event was emitted from
 */
export class ContextMenuInteraction {
  /**
   * It's a constructor function that takes in data, guildId, and client as parameters. It then calls the
   * super function, which is a function that is inherited from the parent class. It then sets the
   * targetId and resolved properties to the data that is passed in.
   * @param [data] - The data that was sent from the API.
   * @param guildId - The ID of the guild the case is in
   * @param client - The client that the event was emitted from
   */
  constructor(data?: any, guildId?: any, client?: any);
}

/**
 * It's a constructor for the class.
 * @param [data] - The data that is passed to the constructor.
 * @param guildId - The ID of the guild the role is in.
 * @param client - The client that instantiated the object.
 */
export class ContextMessageInteraction {
  /**
   * It's a constructor for the class.
   * @param [data] - The data that is passed to the constructor.
   * @param guildId - The ID of the guild the role is in.
   * @param client - The client that instantiated the object.
   */
  constructor(data?: any, guildId?: any, client?: any);
}

/**
 * It's a constructor function that takes in data, guildId, and client as parameters.
 * @param [data] - The data that the class will be constructed with.
 * @param guildId - The ID of the guild the role is in.
 * @param client - The client that instantiated the object.
 */
export class ContextUserInteraction {
  /**
   * It's a constructor function that takes in data, guildId, and client as parameters.
   * @param [data] - The data that the class will be constructed with.
   * @param guildId - The ID of the guild the role is in.
   * @param client - The client that instantiated the object.
   */
  constructor(data?: any, guildId?: any, client?: any);
}

/**
 * `constructor` is a function that is called when a new instance of the class is created
 * @param [data] - The data that was sent from the API.
 * @param client - The client that created the instance of the class.
 */
export class DirectoryChannel {
  /**
   * `constructor` is a function that is called when a new instance of the class is created
   * @param [data] - The data that was sent from the API.
   * @param client - The client that created the instance of the class.
   */
  constructor(data?: any, client?: any);
}

/**
 * It's a constructor for a class that extends another class
 * @param [data] - The data that is passed to the constructor.
 * @param [guildId=null] - The ID of the guild the message is in.
 * @param client - The client instance
 */
export class DMChannel {
  /**
   * It's a constructor for a class that extends another class
   * @param [data] - The data that is passed to the constructor.
   * @param [guildId=null] - The ID of the guild the message is in.
   * @param client - The client instance
   */
  constructor(data?: any, guildId?: any, client?: any);
}

/**
 * It's a constructor for the Emoji class
 * @param [data] - The data that was passed to the constructor.
 * @param guildId - The ID of the guild this emoji is in.
 * @param client - The client that instantiated the Emoji
 */
export class Emoji {
  /**
   * It's a constructor for the Emoji class
   * @param [data] - The data that was passed to the constructor.
   * @param guildId - The ID of the guild this emoji is in.
   * @param client - The client that instantiated the Emoji
   */
  constructor(data?: any, guildId?: any, client?: any);

  /**
   * `fetch` fetches the emoji from the guild
   * @param [options] - An object with the following properties:
   * @returns The emoji object
   */
  fetch(options?: any): any;

  /**
   * `edit` edits the emoji
   * @param [options] - An object containing the new properties of the emoji.
   * @returns The edited emoji.
   */
  edit(options?: any): any;

  /**
   * `setName` sets the name of the channel
   * @param name - The new name of the channel.
   * @param reason - The reason for the change.
   * @returns The name of the channel.
   */
  setName(name: any, reason: any): any;

  /**
   * It sets the roles of a member
   * @param roles - The roles to set.
   * @param reason - The reason for the edit.
   * @returns The roles of the member.
   */
  setRoles(roles: any, reason: any): any;

  /**
   * `delete` deletes the emoji
   * @param reason - The reason for the deletion.
   * @returns The emoji object.
   */
  delete(reason: any): any;
}

/**
 * A class representing a collection of fetched threads from a guild.
 * @class
 * @extends Base
 */
export class FetchedThreads extends Base {
  /**
   * A class representing a collection of fetched threads from a guild.
   * @class
   * @extends Base
   */
  constructor(data: Object, guildId?: string, client?: Client);
}

/**
 * A class representing a forum channel on Discord.
 * @class
 * @extends Channel
 */
export class ForumChannel extends Channel {
  /**
   * A class representing a forum channel on Discord.
   * @class
   * @extends Channel
   */
  constructor(data?: Object, guildId?: string, client?: Client);

  /**
   * Creates a new thread in the forum channel.
   * @async
   * @param {Object} [options={}] - The options for the thread
   * @param {string} [options.name] - The name of the thread
   * @param {number} [options.autoArchiveDuration] - The duration in minutes to automatically archive the thread
   * @param {number} [options.rateLimitPerUser] - The rate limit per user for the thread in seconds
   * @param {string} [options.reason] - The reason for creating the thread
   * @param {Message} [options.message] - The message to use as a basis for the thread
   * @returns {Promise<Object>} The thread data
   */
  createThread(options?: {
    name?: string;
    autoArchiveDuration?: number;
    rateLimitPerUser?: number;
    reason?: string;
    message?: Message;
  }): Promise<Object>;
}

/**
 * The Guild structure class
 * @class
 */
export class Guild {
  /**
   * The Guild structure class
   * @class
   */
  constructor(data: Object, client: Client);

  /**
   * Fetches the guild.
   * @param {Object} [options] Options for fetching the guild.
   * @returns {Promise<Guild>}
   */
  fetch(options?: Object): Promise<Guild>;

  /**
   * Edits the guild.
   * @param {Object} [options] Options for editing the guild.
   * @returns {Promise<Guild>}
   */
  edit(options?: Object): Promise<Guild>;

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
  setName(name: string, reason?: string): Promise<Guild>;

  /**
   * Sets the description of the guild.
   * @param {string} description The new description for the guild.
   * @param {string} [reason] Reason for changing the description.
   * @returns {Promise<Guild>}
   */
  setDescription(description: string, reason?: string): Promise<Guild>;

  /**
   * Sets the verification level of the guild.
   * @param {number} verificationLevel The new verification level for the guild.
   * @param {string} [reason] Reason for changing the verification level.
   * @returns {Promise<Guild>}
   */
  setVerificationLevel(verificationLevel: number, reason?: string): Promise<Guild>;

  /**
   * Sets the default message notifications of the guild.
   * @param {number} defaultMessageNotifications The new default message notifications for the guild.
   * @param {string} [reason] Reason for changing the default message notifications.
   * @returns {Promise<Guild>}
   */
  setDefaultMessageNotifications(defaultMessageNotifications: number, reason?: string): Promise<Guild>;

  /**
   * Sets the explicit content filter level of the guild.
   * @param {number} explicitContentFilter The new explicit content filter level for the guild.
   * @param {string} [reason] Reason for changing the explicit content filter level.
   * @returns {Promise<Guild>}
   */
  setExplicitContentFilter(explicitContentFilter: number, reason?: string): Promise<Guild>;

  /**
   * Sets the AFK channel of the guild.
   * @param {Channel} afkChannel The new AFK channel for the guild.
   * @param {string} [reason] Reason for changing the AFK channel.
   * @returns {Promise<Guild>}
   */
  setAfkChannel(afkChannel: Channel, reason?: string): Promise<Guild>;

  /**
   * Sets the AFK timeout of the guild.
   * @param {number} afkTimeout The new AFK timeout for the guild.
   * @param {string} [reason] Reason for changing the AFK timeout.
   * @returns {Promise<Guild>}
   */
  setAfkTimeout(afkTimeout: number, reason?: string): Promise<Guild>;

  /**
   * Sets the icon of the guild.
   * @param {string} icon The new icon for the guild.
   * @param {string} [reason] Reason for changing the icon.
   * @returns {Promise<Guild>}
   */
  setIcon(icon: string, reason?: string): Promise<Guild>;

  /**
   * Set the owner of the guild.
   * @param {GuildMemberResolvable} owner - The new owner of the guild.
   * @param {string} [reason] - The reason for setting the owner.
   * @returns {Promise<Guild>} The updated guild.
   */
  setOwner(owner: any, reason?: string): Promise<Guild>;

  /**
   * Set the splash image for the guild.
   * @param {BufferResolvable|Base64Resolvable|null} splash - The new splash image for the guild. Can be a Buffer or a base64-encoded string or null to remove the current splash image.
   * @param {string} [reason] - The reason for setting the splash.
   * @returns {Promise<Guild>} The updated guild.
   */
  setSplash(splash: any, reason?: string): Promise<Guild>;

  /**
   * Set the discovery splash image for the guild.
   * @param {BufferResolvable|Base64Resolvable|null} discoverySplash - The new discovery splash image for the guild. Can be a Buffer or a base64-encoded string or null to remove the current discovery splash image.
   * @param {string} [reason] - The reason for setting the discovery splash.
   * @returns {Promise<Guild>} The updated guild.
   */
  setDiscoverySplash(discoverySplash: any, reason?: string): Promise<Guild>;

  /**
   * Set the banner image for the guild.
   * @param {BufferResolvable|Base64Resolvable|null} banner - The new banner image for the guild. Can be a Buffer or a base64-encoded string or null to remove the current banner image.
   * @param {string} [reason] - The reason for setting the banner.
   * @returns {Promise<Guild>} The updated guild.
   */
  setBanner(banner: any, reason?: string): Promise<Guild>;

  /**
   * Set the system channel for the guild.
   * @param {GuildChannelResolvable} systemChannel - The new system channel for the guild.
   * @param {string} [reason] - The reason for setting the system channel.
   * @returns {Promise<Guild>} The updated guild.
   */
  setSystemChannel(systemChannel: any, reason?: string): Promise<Guild>;

  /**
   * Set the preferred locale for the guild.
   * @param {string} preferredLocale - The new preferred locale for the guild.
   * @param {string} [reason] - The reason for setting the preferred locale.
   * @returns {Promise<Guild>} The updated guild.
   */
  setPreferredLocale(preferredLocale: string, reason?: string): Promise<Guild>;

  /**
   * Set the system channel flags for the guild.
   * @param {number} systemChannelFlags - The new system channel flags for the guild.
   * @param {string} [reason] - The reason for setting the system channel flags.
   * @returns {Promise<Guild>} The updated guild.
   */
  setSystemChannelFlags(systemChannelFlags: number, reason?: string): Promise<Guild>;

  /**
   * Set the features of the guild.
   * @param {GuildFeature[]} features - The new features of the guild.
   * @param {string} [reason] - The reason for setting the features.
   * @returns {Promise<Guild>} The updated guild.
   */
  setFeatures(features: any[], reason?: string): Promise<Guild>;

  /**
   * Sets the premium progress bar of the guild.
   * @param {string} premiumProgressBar - The new premium progress bar.
   * @param {string} reason - The reason for setting the premium progress bar.
   * @returns {Promise<Guild>} The updated guild.
   */
  setPremiumProgressBar(premiumProgressBar: string, reason: string): Promise<Guild>;

  /**
   * Returns the URL of the guild's icon.
   * @param {Object} [options={}] - Additional options for the URL.
   * @param {boolean} [options.dynamic=false] - Whether to return a dynamic icon.
   * @param {number} [options.size] - The size of the icon to return.
   * @param {string} [options.format] - The format of the icon to return.
   * @returns {?string} The URL of the guild's icon, or `null` if the guild has no icon.
   */
  iconURL(options?: {dynamic?: boolean; size?: number; format?: string}): string;

  /**
   * Returns the URL of the guild's banner.
   * @param {Object} [options={}] - Additional options for the URL.
   * @param {boolean} [options.dynamic=false] - Whether to return a dynamic banner.
   * @param {number} [options.size] - The size of the banner to return.
   * @param {string} [options.format] - The format of the banner to return.
   * @returns {?string} The URL of the guild's banner, or `null` if the guild has no banner.
   */
  bannerURL(options?: {dynamic?: boolean; size?: number; format?: string}): string;

  /**
   * Returns the URL of the guild's splash.
   * @param {Object} [options={}] - Additional options for the URL.
   * @param {boolean} [options.dynamic=false] - Whether to return a dynamic splash.
   * @param {number} [options.size] - The size of the splash to return.
   * @param {string} [options.format] - The format of the splash to return.
   * @returns {?string} The URL of the guild's splash, or `null` if the guild has no splash.
   */
  splashURL(options?: {dynamic?: boolean; size?: number; format?: string}): string;

  /**
   * Returns the URL of the guild's discovery splash.
   * @param {Object} [options={}] - Additional options for the URL.
   * @param {boolean} [options.dynamic=false] - Whether to return a dynamic discovery splash.
   * @param {number} [options.size] - The size of the discovery splash to return.
   * @param {string} [options.format] - The format of the discovery splash to return.
   * @returns {?string} The URL of the guild's discovery splash, or `null` if the guild has no discovery splash.
   */
  discoverySplashURL(options?: {dynamic?: boolean; size?: number; format?: string}): string;

  /**
   * Returns the GuildMember instance of the bot user in this guild.
   * @returns {GuildMember} The GuildMember instance of the bot user in this guild.
   */
  me: any;

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
  afkChannel: any;

  /**
   * Returns the widget channel of the guild.
   * @returns {Promise<Guild>} The widget channel of the guild.
   */
  widgetChannel: any;

  /**
   * Returns the system channel of the guild.
   * @returns {Promise<Guild>} The system channel of the guild.
   */
  systemChannel: any;

  /**
   * Returns the rules channel of the guild.
   * @returns {Promise<Guild>} The rules channel of the guild.
   */
  rulesChannel: any;

  /**
   * Returns the public updates channel of the guild.
   * @returns {Promise<Guild>} The public updates channel of the guild.
   */
  publicUpdatesChannel: any;

  /**
   * Returns the welcome screen manager for the guild.
   * @returns {WelcomeScreenManager} The welcome screen manager for the guild.
   */
  welcomeScreen: any;

  /**
   * Returns the integration manager for the guild.
   * @returns {GuildIntegrationManager} The integration manager for the guild.
   */
  integrations: any;

  /**
   * Returns the vanity manager for the guild.
   * @returns {GuildVanityManager} The vanity manager for the guild.
   */
  vanity: any;

  /**
   * Returns the application command manager for the guild.
   * @returns {GuildApplicationCommandManager} The application command manager for the guild.
   */
  commands: any;

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
   * @param {Object} [options={}] - The options for fetching audit logs.
   * @param {UserResolvable} [options.user] - The user to filter the audit log by.
   * @param {string} [options.actionType] - The type of action to filter the audit log by.
   * @param {Snowflake|GuildAuditLogEntry} [options.before] - The entry to get audit logs before.
   * @param {number} [options.limit=50] - The maximum number of audit logs to fetch.
   * @returns {Promise<GuildAuditLog>} A promise that resolves with the fetched audit logs.
   */
  fetchAuditLogs(options?: {user?: any; actionType?: string; before?: any | GuildAuditLogEntry; limit?: number}): Promise<GuildAuditLog>;

  /**
   * Fetches the bot's own member object for the guild.
   * @async
   * @param {Object} [options] - The options for fetching the member object.
   * @returns {Promise<GuildMember>} A promise that resolves with the bot's own member object for the guild.
   */
  fetchMe(options?: Object): Promise<GuildMember>;

  /**
   * Fetches the webhooks for the guild.
   * @async
   * @returns {Promise<RaidenCol<string, Webhook>>} A promise that resolves with the fetched webhooks for the guild.
   */
  fetchWebhooks(): any;

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
  modifyMFALevel(mfaLevel: number, reason?: string): Promise<Guild>;

  /**
   * Gets all the voice-based channels in the guild.
   * @returns {Collection<Snowflake, GuildChannel>} A collection of all the voice-based channels in the guild.
   */
  getVoiceBasedChannels(): any;

  /**
   * Gets all the text-based channels in the guild.
   * @returns {Collection<Snowflake, GuildChannel>} A collection of all the text-based channels in the guild.
   */
  getTextBasedChannels(): any;

  /**
   * Gets all the categories in the guild.
   * @returns {Collection<Snowflake, GuildChannel>} A collection of all the categories in the guild.
   */
  getCategories(): any;
}

/**
 * Represents an audit log for a guild.
 *
 * @class
 * @extends Base
 **/
export class GuildAuditLog extends Base {
  /**
   * Represents an audit log for a guild.
   *
   * @class
   * @extends Base
   **/
  constructor(data?: Object, guildId?: string, client?: Client);

  /**
   * Returns the guild object associated with this audit log.
   *
   * @memberof GuildAuditLog
   * @type {?Guild}
   * @readonly
   **/
  guild: Guild;
}

/**
 * Represents changes made to a guild audit log.
 *
 * @class
 * @extends Base
 **/
export class GuildAuditLogChanges extends Base {
  /**
   * Represents changes made to a guild audit log.
   *
   * @class
   * @extends Base
   **/
  constructor(data?: Object, guildId?: string, client?: Client);
}

/**
 * Represents an entry in the audit log for a guild.
 * @class
 * @extends Base
 */
export class GuildAuditLogEntry extends Base {
  /**
   * Represents an entry in the audit log for a guild.
   * @class
   * @extends Base
   */
  constructor(data?: Object, guildId?: string, client?: Client);
}

/**
 * Represents an auto-mod configuration for a guild.
 * @extends Base
 */
export class GuildAutoMod extends Base {
  /**
   * Represents an auto-mod configuration for a guild.
   * @extends Base
   */
  constructor(data: Object, guildId: any, client: Client);

  /**
   * The guild associated with this GuildAutoMod.
   * @type {?Guild}
   * @readonly
   */
  guild: Guild;

  /**
   * The user who created this GuildAutoMod.
   * @type {?User}
   * @readonly
   */
  creator: User;

  /**
   * Fetches the GuildAutoMod's data from Discord.
   * @async
   * @param {Object} [options] - Additional options for the API request.
   * @returns {Promise<GuildAutoMod>}
   */
  fetch(options?: Object): Promise<GuildAutoMod>;

  /**
   * Edits the GuildAutoMod.
   * @async
   * @param {Object} [options] - The options to edit the GuildAutoMod with.
   * @returns {Promise<GuildAutoMod>}
   */
  edit(options?: Object): Promise<GuildAutoMod>;

  /**
   * Deletes the GuildAutoMod.
   * @async
   * @param {string} [reason] - Reason for deleting the GuildAutoMod.
   * @returns {Promise<void>}
   */
  delete(reason?: string): Promise<void>;

  /**
   * Sets the name of the GuildAutoMod.
   * @async
   * @param {string} name - The new name for the GuildAutoMod.
   * @param {string} [reason] - Reason for changing the name.
   * @returns {Promise<GuildAutoMod>}
   */
  setName(name: string, reason?: string): Promise<GuildAutoMod>;

  /**
   * Sets the event type of the GuildAutoMod.
   * @async
   * @param {string|number} eventType - The new event type for the GuildAutoMod.
   * @param {string} [reason] - Reason for changing the event type.
   * @returns {Promise<GuildAutoMod>}
   */
  setEventType(eventType: string | number, reason?: string): Promise<GuildAutoMod>;

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
    triggerMetadata: {keywordFilter: string[]; presets: string[] | number[]; allowList: string[]},
    reason?: string
  ): Promise<GuildAutoMod>;

  /**
   * Sets the actions of the GuildAutoMod.
   * @async
   * @param {Array<Object>} actions - The new actions for the GuildAutoMod.
   * @param {string} [reason] - Reason for changing the actions.
   * @returns {Promise<GuildAutoMod>}
   */
  setActions(actions: Object[], reason?: string): Promise<GuildAutoMod>;
}

/**
 * Enables or disables the feature.
 * @async
 * @function setEnabled
 * @param {boolean} enabled - Indicates whether the feature should be enabled or disabled.
 * @param {string} reason - The reason for enabling or disabling the feature.
 * @returns {Promise} A promise that resolves with the result of the edit operation.
 */
export function setEnabled(enabled: boolean, reason: string): any;

/**
 * Sets the roles that are exempt from the feature.
 * @async
 * @function setExemptRoles
 * @param {Array<string>} exemptRoles - An array of role IDs that should be exempt from the feature.
 * @param {string} reason - The reason for setting the exempt roles.
 * @returns {Promise} A promise that resolves with the result of the edit operation.
 */
export function setExemptRoles(exemptRoles: string[], reason: string): any;

/**
 * Sets the channels that are exempt from the feature.
 * @async
 * @function setExemptChannels
 * @param {Array<string>} exemptChannels - An array of channel IDs that should be exempt from the feature.
 * @param {string} reason - The reason for setting the exempt channels.
 * @returns {Promise} A promise that resolves with the result of the edit operation.
 */
export function setExemptChannels(exemptChannels: string[], reason: string): any;

/**
 * Represents an action taken by the guild automod system.
 * @class
 * @extends Base
 */
export class GuildAutoModActions extends Base {
  /**
   * Represents an action taken by the guild automod system.
   * @class
   * @extends Base
   */
  constructor(data: Object, client: Client);

  /**
   * The type of action taken by the automod system.
   * @type {?string}
   */
  type: string;

  /**
   * The metadata for the action, if any.
   * @type {?Object}
   * @property {?string} channelId - The ID of the channel the action was taken in.
   * @property {?number} durationSeconds - The duration of the action, in seconds.
   */
  metadata: any;
}

/**
 * Represents a ban for a user in a guild.
 * @class
 * @extends Base
 */
export class GuildBan extends Base {
  /**
   * Represents a ban for a user in a guild.
   * @class
   * @extends Base
   */
  constructor(data: Object, guildId?: string, client?: Client);

  /**
   * Whether or not the ban is partial.
   * @type {boolean}
   */
  partial: boolean;

  /**
   * The reason for the ban.
   * @type {?string}
   */
  reason: string;

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
  fetch(options?: Object): Promise<GuildBan>;

  /**
   * Fetches this ban from the API.
   * @param {Object} [options] - Additional options for the fetch.
   * @returns {Promise<GuildBan>}
   */
  remove(options?: Object): Promise<GuildBan>;

  /**
   * The guild that this ban was issued in.
   * @type {?Guild}
   * @readonly
   */
  guild: Guild;
}

/**
 * Represents a guild's discovery metadata.
 * @class
 * @extends Base
 */
export class GuildDiscovery extends Base {
  /**
   * Represents a guild's discovery metadata.
   * @class
   * @extends Base
   */
  constructor(data: Object, guildId: any, client: Client);

  /**
   * Whether or not this guild discovery object is partial.
   * @type {boolean}
   */
  partial: boolean;

  /**
   * The about section of the guild discovery.
   * @type {?string}
   */
  about: string;

  /**
   * The ID of the guild.
   * @type {Snowflake}
   */
  guildId: any;

  /**
   * The category IDs of the guild discovery.
   * @type {?string[]}
   */
  categoryIds: string[];

  /**
   * Whether or not emoji discoverability is enabled.
   * @type {?boolean}
   */
  emojiDiscoverabilityEnabled: boolean;

  /**
   * Whether or not the guild discovery is published.
   * @type {?boolean}
   */
  published: boolean;

  /**
   * The keywords associated with the guild discovery.
   * @type {?string[]}
   */
  keywords: string[];

  /**
   * The date the guild was partner actioned.
   * @type {?Date}
   */
  partnerActionedAt: Date;

  /**
   * The timestamp of when the guild was partner actioned.
   * @type {?number}
   */
  partnerActionedTimestamp: number;

  /**
   * The date the guild applied for partnership.
   * @type {?Date}
   */
  partnerApplicationAt: Date;

  /**
   * The timestamp of when the guild applied for partnership.
   * @type {?number}
   */
  partnerApplicationTimestamp: number;

  /**
   * The primary category ID of the guild discovery.
   * @type {?GuildPrimaryCategory}
   */
  primaryCategoryId: any;

  /**
   * The reasons to join the guild.
   * @type {?string[]}
   */
  reasonsToJoin: string[];

  /**
   * The social links associated with the guild discovery.
   * @type {?Object}
   */
  socialLinks: Object;

  /**
   * Returns the guild associated with this discovery metadata.
   * @returns {Guild} The guild object.
   */
  guild: any;

  /**
   * Fetches the discovery metadata for the guild.
   * @async
   * @returns {Promise<DiscoveryMetadata>} A promise that resolves with the discovery metadata object.
   */
  fetch(): any;

  /**
   * Fetches the discovery metadata for the guild.
   * @async
   * @returns {Promise<DiscoveryMetadata>} A promise that resolves with the discovery metadata object.
   */
  edit(): any;

  /**
   * Sets whether the emoji discoverability is enabled for the guild.
   * @async
   * @param {boolean} emojiDiscoverabilityEnabled - A boolean indicating whether the emoji discoverability is enabled.
   * @returns {Promise<DiscoveryMetadata>} A promise that resolves with the updated discovery metadata object.
   */
  setEmojiDiscoverabilityEnabled(emojiDiscoverabilityEnabled: boolean): any;

  /**
   * Sets whether the emoji discoverability is enabled for the guild.
   * @async
   * @param {boolean} emojiDiscoverabilityEnabled - A boolean indicating whether the emoji discoverability is enabled.
   * @returns {Promise<DiscoveryMetadata>} A promise that resolves with the updated discovery metadata object.
   */
  setPublished(emojiDiscoverabilityEnabled: boolean): any;

  /**
   * Sets the description of the guild for the discovery page.
   * @async
   * @param {string} about - The description of the guild.
   * @returns {Promise<DiscoveryMetadata>} A promise that resolves with the updated discovery metadata object.
   */
  setAbout(about: string): any;

  /**
   * Sets the "Reasons to Join" section for the associated guild in the discovery settings.
   * @async
   * @param {string} reasonsToJoin - The new "Reasons to Join" section content.
   * @returns {Promise<Discovery>} The updated discovery object.
   */
  setReasonsToJoin(reasonsToJoin: string): any;

  /**
   * Sets the keywords associated with the associated guild in the discovery settings.
   * @async
   * @param {Array<string>} keywords - The new keywords.
   * @returns {Promise<Discovery>} The updated discovery object.
   */
  setKeywords(keywords: string[]): any;

  /**
   * Sets the keywords associated with the associated guild in the discovery settings.
   * @async
   * @param {Array<string>} keywords - The new keywords.
   * @returns {Promise<Discovery>} The updated discovery object.
   */
  setPrimaryCategoryId(keywords: string[]): any;
}

/**
 * Represents a Guild Integration on Discord.
 * @class
 * @extends Base
 */
export class GuildIntegration extends Base {
  /**
   * Represents a Guild Integration on Discord.
   * @class
   * @extends Base
   */
  constructor(data: Object, guildId: any, client: Client);

  /**
   * The `Guild` object corresponding to this `GuildIntegration`.
   * @type {?Guild}
   * @readonly
   */
  guild: Guild;
}

/**
 * Represents a member of a guild.
 * @class
 * @extends Base
 */
export class GuildMember extends Base {
  /**
   * Represents a member of a guild.
   * @class
   * @extends Base
   */
  constructor(data: Object, guildId?: string, client?: Client);

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
  send(options: Object): Promise<Message>;

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
  setNickname(nickname: string, reason: string): any;

  /**
   * Sets whether the member is muted.
   * @async
   * @param {boolean} mute - Whether to mute the member.
   * @param {string} reason - The reason for setting the mute (optional).
   * @returns {Promise} A promise that resolves with the updated member object.
   */
  setMute(mute: boolean, reason: string): any;

  /**
   * Sets whether the member is deafened.
   * @async
   * @param {boolean} deaf - Whether to deafen the member.
   * @param {string} reason - The reason for setting the deaf (optional).
   * @returns {Promise} A promise that resolves with the updated member object.
   */
  setDeaf(deaf: boolean, reason: string): any;

  /**
   * Moves the member to a different voice channel.
   * @async
   * @param {ChannelResolvable} channel - The new voice channel.
   * @param {string} reason - The reason for moving the member (optional).
   * @returns {Promise} A promise that resolves with the updated member object.
   */
  setChannel(channel: any, reason: string): any;

  /**
   * Moves the member to a different voice channel.
   * @async
   * @param {ChannelResolvable} channel - The new voice channel.
   * @param {string} reason - The reason for moving the member (optional).
   * @returns {Promise} A promise that resolves with the updated member object.
   */
  setCommunicationDisabled(channel: any, reason: string): any;

  /**
   * The guild that the member belongs to.
   * @type {Guild|null}
   */
  guild: Guild | null;

  /**
   * The URL to the member's guild banner image.
   * @param {Object} options - Options for the banner URL (optional).
   * @param {boolean} options.dynamic - Whether to use the dynamic version of the banner (default: true).
   * @param {number} options.size - The size of the banner (default: 2048).
   * @param {string} options.format - The format of the banner (default: "webp").
   * @returns {string|null} The URL to the banner image, or null if the member does not have a banner.
   */
  bannerURL(options: {dynamic: boolean; size: number; format: string}): string | null;

  /**
   * Returns the URL to the member's display avatar.
   * @param {Object} options - Options for the avatar URL (optional).
   * @param {boolean} options.dynamic - Whether to use the dynamic version of the avatar (default: true).
   * @param {number} options.size - The size of the avatar (default: 2048).
   * @param {string} options.format - The format of the avatar (default: "webp").
   * @returns {string} The URL to the display avatar.
   */
  displayAvatarURL(options: {dynamic: boolean; size: number; format: string}): string;

  /**
   * Gets the permissions for the member in a given channel.
   * @param {ChannelResolvable} channel - The channel to get permissions for.
   * @returns {PermissionOverwrites} The resolved permissions for the member in the channel.
   * @throws {RangeError} Thrown if the channel is not cached.
   */
  permissionsIn(channel: any): any;

  /**
   * Gets the voice state for the member.
   * @type {VoiceState|null}
   */
  voice: VoiceState | null;

  /**
   * Gets the presence for the member.
   * @type {Presence|null}
   */
  presence: Presence | null;

  /**
   * Gets the resolved permissions for the member.
   * @type {Permissions}
   */
  permissions: Permissions;

  /**
   * Checks if the member has a given permission.
   * @param {PermissionResolvable} perm - The permission to check for.
   * @returns {boolean} Whether the member has the permission.
   */
  permissionHas(perm: any): boolean;

  /**
   * The user object for the member.
   * @type {User|null}
   */
  user: User | null;
}

/**
 * Represents the verification requirements for a guild member.
 * @class
 * @extends Base
 */
export class GuildMemberVerification extends Base {
  /**
   * Represents the verification requirements for a guild member.
   * @class
   * @extends Base
   */
  constructor(data: Object, guildId?: string, client?: Client);

  /**
   * The guild the verification is for.
   * @type {?Guild}
   * @readonly
   */
  guild: Guild;

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
  setEnabled(enabled: boolean, reason?: string): Promise<GuildMemberVerification>;

  /**
   * Sets the description for this verification.
   * @param {string} description - The new description for the verification.
   * @param {string} [reason] - The reason for the change.
   * @returns {Promise<GuildMemberVerification>}
   */
  setDescription(description: string, reason?: string): Promise<GuildMemberVerification>;

  /**
   * Adds new fields to this verification.
   * @param {VerificationFormFields[]} fields - The fields to add to the verification.
   * @returns {Promise<GuildMemberVerification>}
   */
  addFields(fields: VerificationFormFields[]): Promise<GuildMemberVerification>;

  /**
   * Removes all fields from this verification.
   * @returns {Promise<GuildMemberVerification>}
   */
  removeFields(): Promise<GuildMemberVerification>;

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
  static transformoptions(fields: {type: string; label: string; required: boolean; values: any; choices: any}): Object;
}

/**
 * Represents the preview for a guild.
 * @class
 * @extends Base
 */
export class GuildPreview extends Base {
  /**
   * Represents the preview for a guild.
   * @class
   * @extends Base
   */
  constructor(data: Object, client: Client);

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
  iconURL(options: {dynamic: boolean; size: number; format: string}): string;

  /**
   * Returns the URL for the guild splash image.
   * @param {Object} [options] - Options for the splash image.
   * @param {boolean} [options.dynamic=false] - Whether to generate a dynamic or static image.
   * @param {number} [options.size] - The size of the image in pixels.
   * @param {string} [options.format] - The format of the image (e.g. "webp", "png", etc.).
   * @returns {?string} The URL for the guild splash image or null if no splash image is available.
   */
  splashURL(options?: {dynamic?: boolean; size?: number; format?: string}): string;

  /**
   * Returns the URL for the guild discovery splash image.
   * @param {Object} [options] - Options for the discovery splash image.
   * @param {boolean} [options.dynamic=false] - Whether to generate a dynamic or static image.
   * @param {number} [options.size] - The size of the image in pixels.
   * @param {string} [options.format] - The format of the image (e.g. "webp", "png", etc.).
   * @returns {?string} The URL for the guild discovery splash image or null if no discovery splash image is available.
   */
  discoverySplashURL(options?: {dynamic?: boolean; size?: number; format?: string}): string;
}

/**
 * It's a class that represents a scheduled event in a guild.
 * @class
 * @extends Base
 */
export class GuildScheduledEvent extends Base {
  /**
   * It's a class that represents a scheduled event in a guild.
   * @class
   * @extends Base
   */
  constructor(data: any, guildId?: any, client?: any);

  /**
   * It fetches the event from the guild's event cache
   * @param options - An object containing the following properties:
   * @returns The event object.
   */
  fetch(options: any): any;

  /**
   * It edits the event
   * @param [options] - Object
   * @returns The return value of the edit method.
   */
  edit(options?: any): any;

  /**
   * It deletes the event
   * @returns The return value of the delete method of the events object of the guild object of the
   * event object.
   */
  delete(): any;

  /**
   * It edits the name of the channel
   * @param name - The new name of the channel.
   * @param reason - The reason for the edit.
   * @returns The name of the channel.
   */
  setName(name: any, reason: any): any;

  /**
   * It edits the description of the channel
   * @param description - The new description of the channel.
   * @param reason - The reason for the edit.
   * @returns The description of the channel.
   */
  setDescription(description: any, reason: any): any;

  /**
   * This function sets the privacy level of the current channel to the privacy level specified in the
   * first parameter, and sets the reason for the change to the reason specified in the second
   * parameter.
   * @param privacyLevel - The privacy level of the channel.
   * @param reason - The reason for the change.
   * @returns The return value of the edit function.
   */
  setPrivacyLevel(privacyLevel: any, reason: any): any;

  /**
   * It returns a promise that resolves to the result of calling the edit function with the given
   * parameters.
   * @param entityType - The type of entity you want to change the entity to.
   * @param reason - The reason for the change.
   * @returns The return value of the edit function.
   */
  setEntityType(entityType: any, reason: any): any;

  /**
   * It edits the entity metadata of the message
   * @param entityMetadata - The metadata of the entity.
   * @param reason - The reason for the edit.
   * @returns The return value of the edit function.
   */
  setEntityMetadata(entityMetadata: any, reason: any): any;

  /**
   * It edits the image of the embed
   * @param image - The image to set the avatar to.
   * @param reason - The reason for the edit.
   * @returns The return value of the edit function.
   */
  setImage(image: any, reason: any): any;

  /**
   * It takes a scheduledStartTime and a reason, and then it returns the result of calling the edit
   * function with the scheduledStartTime and reason as arguments.
   *
   * The edit function is defined in the same file, and it looks like this:
   * @param scheduledStartTime - The time at which the meeting is scheduled to start.
   * @param reason - The reason for the change.
   * @returns The return value of the edit() method.
   */
  setScheduledStartTime(scheduledStartTime: any, reason: any): any;

  /**
   * It takes a time and a reason, and then it edits the event with the time and reason.
   * @param scheduledEndTime - The time at which the live stream is scheduled to end. The value is
   * specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
   * @param reason - The reason for the change.
   * @returns The return value of the edit method.
   */
  setScheduledEndTime(scheduledEndTime: any, reason: any): any;

  /**
   * It sets the status of the message.
   * @param status - The status of the embed.
   * @param reason - The reason for the edit.
   * @returns The return value of the edit function.
   */
  setStatus(status: any, reason: any): any;

  /**
   * It returns the guild object of the guild ID that is stored in the database
   * @returns The guild object.
   */
  guild: any;

  /**
   * It returns the URL of the cover image of the event
   * @param [options]
   * @returns The coverImageURL is being returned.
   */
  coverImageURL(options?: any): any;

  /**
   * It returns a URL to the invite
   * @returns The inviteURL() method returns a string that is the invite URL for the event.
   */
  inviteURL(): any;

  /**
   * It returns the user object of the creator of the guild
   * @returns The creator of the guild.
   */
  creator: any;
}

/**
 * It's a class that represents a user that is going to an event
 * @class
 * @extends Base
 */
export class GuildScheduledEventUser extends Base {
  /**
   * It's a class that represents a user that is going to an event
   * @class
   * @extends Base
   */
  constructor(data?: any, guildId?: any, eventId?: any, client?: any);

  /**
   * It returns the guild object of the guild ID that is stored in the database
   * @returns The guild object.
   */
  guild: any;

  /**
   * "If the guild exists, add the guildScheduledEventId to the events array, otherwise return null."
   * @returns The guildScheduledEventId is being returned.
   */
  guildScheduledEvent: any;
}

/**
 * It's a class that represents a guild template.
 * @class
 * @extends Base
 */
export class GuildTemplate extends Base {
  /**
   * It's a class that represents a guild template.
   * @class
   * @extends Base
   */
  constructor(data?: any, client?: any);

  /**
   * It fetches the guild template from the database
   * @returns The return value of the async function is a Promise.
   */
  fetch(): any;

  /**
   * It syncs the template with the database
   * @returns The return value of the sync() method.
   */
  sync(): any;

  /**
   * It edits a template
   * @param [options] - Object
   * @returns The return value of the function is the return value of the function that is being
   * called.
   */
  edit(options?: any): any;

  /**
   * It deletes the template from the database
   * @returns The return value of the delete method of the templates object of the guild object.
   */
  delete(): any;

  /**
   * It sets the name of the channel
   * @param name - The name of the channel.
   * @returns The return value of the edit() method.
   */
  setName(name: any): any;

  /**
   * It edits the description of the channel
   * @param description - The new description of the channel.
   * @returns The description of the channel.
   */
  setDescription(description: any): any;

  /**
   * It returns the guild object of the guild that the channel is in
   * @returns The guild object.
   */
  guild: any;

  /**
   * It creates a guild
   * @param [options] - The options for the guild.
   * @returns The client.generateTemplate function is being returned.
   */
  createGuild(options?: any): any;
}

/**
 * It's a class that represents a guild vanity
 * @class
 * @extends Base
 */
export class GuildVanity extends Base {
  /**
   * It's a class that represents a guild vanity
   * @class
   * @extends Base
   */
  constructor(data?: any, guildId?: any, client?: any);

  /**
   * It returns the guild object of the guild ID that is stored in the database
   * @returns The guild object.
   */
  guild: any;
}

/**
 * It's a class that represents a guild widget
 * @class
 * @extends Base
 */
export class GuildWidget extends Base {
  /**
   * It's a class that represents a guild widget
   * @class
   * @extends Base
   */
  constructor(data?: any, guildId?: any, client?: any);

  /**
   * It fetches the settings of the widget
   * @returns The settings of the widget.
   */
  fetchSettings(): any;

  /**
   * It adds the guild to the cache if it's not already there, and then returns the guild
   * @returns The guild object.
   */
  guild: any;
}

/**
 * It's a class that represents the settings of a guild's widget
 * @class
 * @extends Base
 */
export class GuildWidgetSettings extends Base {
  /**
   * It's a class that represents the settings of a guild's widget
   * @class
   * @extends Base
   */
  constructor(data?: any, guildId?: any, client?: any);

  /**
   * It edits the widget of the guild
   * @param [options] - Object
   * @returns The return value is a Promise that resolves to the edited widget.
   */
  edit(options?: any): any;

  /**
   * `setEnabled` is an async function that takes two parameters, `enabled` and `reason`, and returns the
   * result of calling `edit` with an object containing the `enabled` and `reason` parameters.
   * `CommandoCommand`.
   * @param enabled - Whether the command should be enabled or not.
   * @param reason - The reason for the action
   * @returns The return value of the edit function.
   */
  setEnabled(enabled: any, reason: any): any;

  /**
   * It edits the channel of the voice connection
   * @param channel - The channel to move the member to, can be a voice channel or a category.
   * @param reason - The reason for the edit.
   * @returns The channel that the message was sent in.
   */
  setChannel(channel: any, reason: any): any;

  /**
   * It returns the guild object of the guild ID that is stored in the database
   * @returns The guild object.
   */
  guild: any;

  /**
   * It returns the channel object of the message
   * @returns The channel object.
   */
  channel: any;
}

/**
 * It's a class that handles interactions with the Discord API.
 * @class
 * @extends Base
 */
export class Interaction extends Base {
  /**
   * It's a class that handles interactions with the Discord API.
   * @class
   * @extends Base
   */
  constructor(data: any, guildId?: any, client?: any);

  /**
   * If the commandType is Chat_Input or 1, return true, otherwise return false.
   * @returns a boolean value.
   */
  isChatInput(): any;

  /**
   * If the type is either "Application_Command" or 2, return true, otherwise return false
   * @returns The return value is a boolean.
   */
  isCommand(): any;

  /**
   * If the commandType is either "User" or 2, then return true, otherwise return false.
   * @returns a boolean value.
   */
  isUser(): any;

  /**
   * If the command type is either "Message" or 3, then return true, otherwise return false.
   * @returns The return value is a boolean.
   */
  isMessage(): any;

  /**
   * If the componentType is either "Button" or 2, then return true, otherwise return false.
   * @returns a boolean value.
   */
  isButton(): any;

  /**
   * If the type is either "Modal_Submit" or 5, then return true, otherwise return false.
   * @returns The return value is a boolean.
   */
  isModal(): any;

  /**
   * If the type is either "Application_Command_Autocomplete" or 4, return true, otherwise return
   * false.
   * @returns The return value is a boolean.
   */
  isAutocomplete(): any;

  /**
   * If the componentType is either "Select_Menu" or 3, then return true, otherwise return false.
   * @returns The return value is a boolean.
   */
  isSelect(): any;

  /**
   * If the command type is a user, message, 2, or 3, then return true. Otherwise, return false
   * @returns The return value is a boolean.
   */
  isContext(): any;

  /**
   * If the channel type is a DM, return true, otherwise return false
   * @returns a boolean value.
   */
  isDM(): any;

  /**
   * It takes a name as an argument, and returns the value of the option with that name
   * @param name - The name of the option you want to get the value of.
   * @returns The value of the option that matches the name.
   */
  getValue(name: any): any;

  /**
   * It fetches the original message that the webhook was created with
   * @returns The message object.
   */
  fetchReply(): any;

  /**
   * It sends a reply to the user
   * @param data - The data to send to the user.
   * @returns The reply method returns a Promise that resolves to the reply message.
   */
  reply(data: any): any;

  /**
   * It takes an object of options, creates a payload from those options, and then sends that payload to
   * the API.
   * @param options
   * @returns The response from the API.
   */
  deferReply(options: any): any;

  /**
   * It takes an object, creates a new object with the original object and a number, and then sends that
   * new object to a URL.
   * @param options - The options object.
   * @returns The response from the API.
   */
  modalSubmit(options: any): any;

  /**
   * It deletes the message that was sent to the webhook
   * @returns The message that was deleted.
   */
  deleteReply(): any;

  /**
   * It edits a message that was sent by a webhook
   * @param options
   * @returns The message object.
   */
  editReply(options: any): any;

  /**
   * It takes an object of options, creates a message payload, and then sends it to the webhook.
   * @param options
   * @returns The message object.
   */
  followUp(options: any): any;

  /**
   * It returns the guild object of the guild ID that is stored in the database
   * @returns The guild object.
   */
  guild: any;

  /**
   * It returns the user object of the user who sent the message
   * @returns The user object.
   */
  user: any;
}

/**
 * It's a class that extends the WebhookClient class, and it's used to handle interactions
 * @class
 * @extends WebhookClient
 */
export class InteractionWebhook extends WebhookClient {
  /**
   * It's a class that extends the WebhookClient class, and it's used to handle interactions
   * @class
   * @extends WebhookClient
   */
  constructor(data?: any, client?: any);
}

/**
 * It's a class that represents an invite.
 * @class
 * @extends Base
 */
export class Invite extends Base {
  /**
   * It's a class that represents an invite.
   * @class
   * @extends Base
   */
  constructor(data: any, guild: any, client?: any);

  /**
   * It fetches the invite from the Discord API
   * @param options - An object containing the following properties:
   * @returns The invite object.
   */
  fetch(options: any): any;

  /**
   * It deletes the invite
   * @param reason - The reason for deleting the invite.
   * @returns The return value is the invite object.
   */
  delete(reason: any): any;
}

/**
 * It's a class that extends another class
 * @class
 * @extends Base
 */
export class Message extends Base {
  /**
   * It's a class that extends another class
   * @class
   * @extends Base
   */
  constructor(data?: any, guildId?: any, channelId?: any, client?: any);

  /**
   * It returns the channel object if it exists, otherwise it returns null
   * @returns The channel object.
   */
  channel: any;

  /**
   * It returns the guild object if it exists, otherwise it returns null
   * @returns The guild object.
   */
  guild: any;

  /**
   * It edits a message
   * @param options - Object
   * @returns The message object.
   */
  edit(options: any): any;

  /**
   * It deletes a message
   * @param reason - The reason for the deletion.
   * @returns The message object.
   */
  delete(reason: any): any;

  /**
   * It fetches the message from the channel
   * @param [options] - An object containing additional options to pass to the method.
   * @returns The message object.
   */
  fetch(options?: any): any;

  /**
   * It crossposts a message
   * @returns The message object.
   */
  crosspost(): any;

  /**
   * It reacts to a message with an emoji
   * @param emoji - The emoji to react with. Can be a string (e.g. "🤔") or a custom emoji object.
   * @returns The message object.
   */
  react(emoji: any): any;

  /**
   * It removes embeds from a message
   * @returns The message object.
   */
  removeEmbeds(): any;

  /**
   * It removes all attachments from a message
   * @returns The message object.
   */
  removeAttachments(): any;

  /**
   * It removes an attachment from a message
   * @param attachment - The attachment to remove.
   * @returns The message is being edited with the new attachments.
   */
  removeAttachment(attachment: any): any;

  /**
   * It sends a message to the channel that the message was sent in
   * @param [options] - The options to pass to the send method.
   * @returns The message object.
   */
  reply(options?: any): any;

  /**
   * It fetches a message from a channel
   * @returns A promise that resolves to a Message object.
   */
  fetchReference(): any;

  /**
   * It pins the message to the channel
   * @param reason - The reason for pinning this message.
   * @returns The message object.
   */
  pin(reason: any): any;

  /**
   * It unpins a message
   * @param reason - The reason for unpinning the message.
   * @returns The unpinned message.
   */
  unpin(reason: any): any;

  /**
   * If the type is not one of the four types listed, then it's a system type
   * @returns The value of the property "type" of the object "this".
   */
  system: any;

  /**
   * If the guildId is defined, return true, otherwise return false.
   * @returns The boolean value of the if statement.
   */
  inGuild(): any;

  /**
   * It returns true if the message is a partial message and the type, guildId, and content are the same
   * @param message - The message to compare to.
   * @returns The return value is a boolean.
   */
  equals(message: any): any;

  /**
   * It returns the author of the message
   * @returns The author of the message.
   */
  author: any;

  /**
   * It creates a thread
   * @param [options] - Object
   * @returns The thread object.
   */
  createThread(options?: any): any;

  /**
   * It adds attachments to a message
   * @param [attachments] - The attachments to add to the message.
   * @returns The message is being edited with the attachments and files.
   */
  addAttachments(attachments?: any): any;
}

/**
 * It's a class that represents a message interaction
 * @class
 * @extends Interaction
 */
export class MessageComponentInteraction extends Interaction {
  /**
   * It's a class that represents a message interaction
   * @class
   * @extends Interaction
   */
  constructor(data?: any, guildId?: any, client?: any);

  /**
   * It takes an object as an argument, creates a new MessagePayload object with the options and a 6,
   * then posts to the API with the body of the MessagePayload object.
   * @param [options] - Object
   * @returns The response from the API.
   */
  deferUpdate(options?: any): any;

  /**
   * It updates the message with the given options and returns the reply if fetchReply is true
   * @param [options] - Object
   * @returns The return value is the result of the await expression.
   */
  update(options?: any): any;
}

/**
 * It's a class that stores mentions in a message
 * @class
 * @extends Base
 */
export class MessageMentions extends Base {
  /**
   * It's a class that stores mentions in a message
   * @class
   * @extends Base
   */
  constructor(data?: any, guildId?: any, client?: any);

  /**
   * It returns the guild object of the guild ID that is stored in the database
   * @returns The guild object.
   */
  guild: any;
}

/**
 * It's a class that represents a reaction on a message
 * @class
 * @extends Base
 */
export class MessageReaction extends Base {
  /**
   * It's a class that represents a reaction on a message
   * @class
   * @extends Base
   */
  constructor(data?: any, guildId?: any, channelId?: any, messageId?: any, client?: any);

  /**
   * It fetches the message, gets the reaction, and returns the reaction
   * @returns The reaction object.
   */
  fetch(): any;

  /**
   * It removes a reaction from a message
   * @returns The reaction object.
   */
  remove(): any;

  /**
   * It returns the channel object of the channel ID that is stored in the message object
   * @returns The channel object.
   */
  channel: any;

  /**
   * It returns the guild object of the channel
   * @returns The guild object.
   */
  guild: any;

  /**
   * @param user - The user that was added to the channel.
   * @returns the value of the if statement.
   */
  _addUsers(user: any): any;

  /**
   * @param user - The user that was removed from the voice channel.
   * @returns the value of the variable "this.me"
   */
  _removeUsers(user: any): any;
}

/**
 * It's a class that takes in a data object and a client, and then sets the properties of the class to
the values of the data object.
 * @class
 * @extends Base
 */
export class MessageReference extends Base {
  /**
    * It's a class that takes in a data object and a client, and then sets the properties of the class to
   the values of the data object.
    * @class
    * @extends Base
    */
  constructor(data?: any, client?: any);

  /**
   * It returns an object with the message ID, channel ID, guild ID, and fail if not exists
   * @returns The message ID, channel ID, guild ID, and fail if not exists.
   */
  toJSON(): any;
}

/**
 * It's a class that allows you to get the values of a modal
 * @class
 * @extends MessageComponentInteraction
 */
export class ModalInteraction extends MessageComponentInteraction {
  /**
   * It's a class that allows you to get the values of a modal
   * @class
   * @extends MessageComponentInteraction
   */
  constructor(data?: any, guildId?: any, client?: any);

  /**
   * It takes a customId and returns the value of the first component in the modal with that customId
   * @param customId - The custom id of the modal
   * @param [required=false] - boolean - If the modal is required or not.
   * @returns The value of the text input.
   */
  getTextInput(customId: any, required?: any): any;

  /**
   * It takes a customId and returns the values of the first component in the module with that
   * customId.
   * @param customId - The custom id of the module you want to get the select from.
   * @param [required=false] - boolean - If the module is required, it will throw an error if it is not
   * found.
   * @returns The return value is a string.
   */
  getSelect(customId: any, required?: any): any;

  /**
   * It takes an object with a property called "type" and a property called "components" and returns an
   * object with a property called "type" and a property called "components"
   * @param [fields]
   * @returns An object with the following properties:
   */
  static transformResolvedFields(fields?: any): any;
}

/**
 * It's a class that extends BaseGuildChannel, and it has two methods: follow and crosspost
 * @class
 * @extends BaseGuildChannel
 */
export class NewsChannel extends BaseGuildChannel {
  /**
   * It's a class that extends BaseGuildChannel, and it has two methods: follow and crosspost
   * @class
   * @extends BaseGuildChannel
   */
  constructor(data?: any, guildId?: any, client?: any);

  /**
   * This function is used to follow a channel
   * @param [options] - Object
   * @returns The channel object.
   */
  follow(options?: any): any;

  /**
   * It takes a message object and returns a promise that resolves to the message object
   * @param message - The message to crosspost.
   * @returns The return value of the function is the return value of the function that is being
   * called.
   */
  crosspost(message: any): any;
}

/**
 * It's a class that represents a partial sticker
 * @class
 * @extends Base
 */
export class PartialSticker extends Base {
  /**
   * It's a class that represents a partial sticker
   * @class
   * @extends Base
   */
  constructor(data?: any, client?: any);

  /**
   * It fetches the sticker
   * @returns The sticker object itself.
   */
  fetch(): any;
}

/**
 * It's a class that represents a permission overwrite for a channel
 * @class PermissionOverwrite
 * @extends Base
 */
export class PermissionOverwrite extends Base {
  /**
   * It's a class that represents a permission overwrite for a channel
   * @class PermissionOverwrite
   * @extends Base
   */
  constructor();

  /**
   * It deletes a permission overwrite from a channel
   * @param reason - The reason for the deletion.
   * @returns The return value is a Promise that resolves with a Collection&lt;Snowflake,
   * PermissionOverwrite&gt;.
   */
  delete(reason: any): any;

  /**
   * It returns the channel object of the channel ID that is stored in the message object
   * @returns The channel object.
   */
  channel: any;
}

/**
 * It's a class that represents a user's presence
 * @class
 * @extends Base
 */
export class Presence extends Base {
  /**
   * It's a class that represents a user's presence
   * @class
   * @extends Base
   */
  constructor(data?: any, client?: any);
}

/**
 * It's a class that represents a role in a guild
 * @class
 * @extends Base
 */
export class Role extends Base {
  /**
   * It's a class that represents a role in a guild
   * @class
   * @extends Base
   */
  constructor(data?: any, guildId?: any, client?: any);

  /**
   * It fetches the role from the guild
   * @param [options] - Fetch options.
   * @returns The role object.
   */
  fetch(options?: any): any;

  /**
   * It edits the role
   * @param [options] - Object
   * @returns The return value is the edited role.
   */
  edit(options?: any): any;

  /**
   * It deletes the role
   * @param reason - The reason for the deletion.
   * @returns The role object.
   */
  delete(reason: any): any;

  /**
   * It clones the role
   * @returns The cloned role.
   */
  clone(): any;

  /**
   * It edits the name of the channel
   * @param name - The new name of the channel.
   * @param reason - The reason for the edit.
   * @returns The name of the channel.
   */
  setName(name: any, reason: any): any;

  /**
   * It edits the permissions of a role
   * @param permissions - The permissions to set on the role.
   * @param reason - The reason for the update.
   * @returns The permissions object.
   */
  setPermissions(permissions: any, reason: any): any;

  /**
   * It sets the color of the embed
   * @param color - The color of the embed.
   * @param reason - The reason for the role color change.
   * @returns The color and reason.
   */
  setColor(color: any, reason: any): any;

  /**
   * It sets the role's hoist property to the value of the hoist parameter
   * @param hoist - Boolean - Whether or not to hoist the role in the user list.
   * @param reason - The reason for the role update.
   * @returns The role object.
   */
  setHoist(hoist: any, reason: any): any;

  /**
   * It sets the icon of the guild
   * @param icon - The icon of the guild.
   * @param reason - The reason for the change (maximum 256 characters)
   * @returns The return value of the edit function.
   */
  setIcon(icon: any, reason: any): any;

  /**
   * This function edits the emoji with the unicode emoji and reason.
   * @param unicodeEmoji - The unicode emoji to set.
   * @param reason - The reason for the edit.
   * @returns The return value of the edit method.
   */
  setUnicodeEmoji(unicodeEmoji: any, reason: any): any;

  /**
   * It sets the role to be mentionable or not.
   * @param mentionable - Boolean - Whether the role should be mentionable or not
   * @param reason - The reason for the role update.
   * @returns The role object.
   */
  setMentionable(mentionable: any, reason: any): any;

  /**
   * It sets the position of a role
   * @param position - The position you want to set the role to.
   * @param reason - The reason for the change.
   * @returns The role object.
   */
  setPosition(position: any, reason: any): any;

  /**
   * It returns the permissions of a user in a channel
   * @param channel - The channel to get the permissions for.
   * @returns The permissions of the user in the channel.
   */
  permissionsIn(channel: any): any;

  /**
   * It returns the permissions that the role is denied in the channel
   * @param channel - The channel to check the permissions in.
   * @returns The permissions that are denied to the role.
   */
  deniedPermissionsIn(channel: any): any;

  /**
   * If the guild is not in the cache, add it to the cache. If it is in the cache, return it. If it is
   * not in the cache and cannot be added to the cache, return null.
   * @returns The guild object.
   */
  guild: any;

  /**
   * "If the role has an icon, return the role's icon URL, otherwise return null."
   *
   * The function takes an optional parameter, options, which is an object
   * @param [options] - Object
   * @returns The URL of the role's icon.
   */
  iconURL(options?: any): any;

  /**
   * It returns an array of all the members that have the role
   * @returns A collection of members that have the role.
   */
  members: any;
}

/**
 * It's a class that takes in data, guildId, and client.
 * @class
 * @extends Base
 */
export class RolePrompts extends Base {
  /**
   * It's a class that takes in data, guildId, and client.
   * @class
   * @extends Base
   */
  constructor(data?: any, guildId?: any, client?: any);

  /**
   * It returns the guild object of the guild ID that is stored in the database
   * @returns The guild object.
   */
  guild: any;

  /**
   * It takes an object with keys that are either camelCase or snake_case and returns an object with keys
   * that are camelCase
   * @param [roles] - The object that contains the data that needs to be transformed.
   * @returns An object with the following properties:
   * - emojiId
   * - emojiName
   * - name
   * - rolesId
   */
  static transformRolesData(roles?: any): any;
}

/**
 * It's a class that extends another class, and it has a constructor that takes in some data, a
guildId, and a client, and it has a property called values that is set to an array of values
 * @class
 * @extends MessageComponentInteraction
 */
export class SelectMenuInteraction extends MessageComponentInteraction {
  /**
    * It's a class that extends another class, and it has a constructor that takes in some data, a
   guildId, and a client, and it has a property called values that is set to an array of values
    * @class
    * @extends MessageComponentInteraction
    */
  constructor(data?: any, guildId?: any, client?: any);
}

/**
 * It's a class that extends the VoiceBasedChannels class, and adds a few extra methods to it.
 * @class
 * @extends VoiceBasedChannels
 */
export class StageChannel extends VoiceBasedChannels {
  /**
   * It's a class that extends the VoiceBasedChannels class, and adds a few extra methods to it.
   * @class
   * @extends VoiceBasedChannels
   */
  constructor(data?: any, guildId?: any, client?: any);

  /**
   * If the guild exists, return the stage instance that has the same channel ID as the current
   * channel, otherwise return null
   * @returns The stageInstance is being returned.
   */
  stageInstance: any;

  /**
   * It creates a new stage instance in the guild, and sets the channel to the current channel
   * @param [options] - The options to pass to the stage instance.
   * @returns The stage instance that was created.
   */
  createStageInstance(options?: any): any;
}

/**
 * It's a class that represents a stage instance.
 * @class
 * @extends Base
 */
export class StageInstance extends Base {
  /**
   * It's a class that represents a stage instance.
   * @class
   * @extends Base
   */
  constructor(data?: any, guildId?: any, client?: any);

  /**
   * It fetches the stage instance from the guild's stage instances.
   * @param options - An object containing the following properties:
   * @returns The stage instance.
   */
  fetch(options: any): any;

  /**
   * It edits the stage instance
   * @param options
   * @returns The return value of the edit method.
   */
  edit(options: any): any;

  /**
   * It deletes the stage instance
   * @param reason - The reason for the deletion.
   * @returns The return value of the delete method of the StageInstances class.
   */
  delete(reason: any): any;

  /**
   * It sets the topic of the channel
   * @param topic - The new topic of the channel.
   * @param reason - The reason for the change (0-1024 characters).
   * @returns The return value of the edit function.
   */
  setTopic(topic: any, reason: any): any;

  /**
   * This function sets the privacy level of the current channel to the privacy level specified in the
   * first parameter, and sets the reason for the change to the reason specified in the second
   * parameter.
   * @param privacyLevel - The privacy level of the channel.
   * @param reason - The reason for the change.
   * @returns The return value of the edit function.
   */
  setPrivacyLevel(privacyLevel: any, reason: any): any;

  /**
   * It returns the guild object of the guild ID that is stored in the database
   * @returns The guild object.
   */
  guild: any;

  /**
   * It returns the channel object of the message
   * @returns The channel object.
   */
  channel: any;

  /**
   * If the guild exists, return the event with the id of the guildScheduledEventId, otherwise return
   * null.
   * @returns The guildScheduledEventId is being returned.
   */
  guildScheduledEvent: any;
}

/**
 * It's a class that represents a sticker in a guild
 * @class
 * @extends Base
 */
export class Sticker extends Base {
  /**
   * It's a class that represents a sticker in a guild
   * @class
   * @extends Base
   */
  constructor(data?: any, guildId?: any, client?: any);

  /**
   * It fetches the sticker from the server
   * @param options - An object containing the following properties:
   * @returns The sticker object.
   */
  fetch(options: any): any;

  /**
   * It edits the sticker
   * @param options - Object
   * @returns The sticker object.
   */
  edit(options: any): any;

  /**
   * It deletes the sticker
   * @param reason - The reason for the deletion.
   * @returns The return value of the delete method in the StickerManager class.
   */
  delete(reason: any): any;

  /**
   * It edits the name of the channel
   * @param name - The new name of the role.
   * @param reason - The reason for the edit.
   * @returns The name of the channel.
   */
  setName(name: any, reason: any): any;

  /**
   * It edits the description of the channel
   * @param description - The new description of the channel.
   * @param reason - The reason for the edit.
   * @returns The description of the channel.
   */
  setDescription(description: any, reason: any): any;

  /**
   * It edits the tags of a message
   * @param tags - The new tags of the user.
   * @param reason - The reason for the edit.
   * @returns The return value of the edit method.
   */
  setTags(tags: any, reason: any): any;

  /**
   * It returns the guild object of the guild ID that is stored in the database
   * @returns The guild object.
   */
  guild: any;

  /**
   * It fetches the Nitro Pack from the Discord API and returns it
   * @returns The pack object.
   */
  fetchPack(): any;

  /**
   * It returns the URL of the sticker image
   * @param [options] - Object
   * @returns The URL of the sticker image.
   */
  imageURL(options?: any): any;

  /**
   * If the object passed in is not an instance of the Sticker class, return false. Otherwise, return
   * true if the name, description, or tags of the object passed in are equal to the name, description,
   * or tags of the object calling the function.
   * @param sticker - The sticker to compare to.
   * @returns a boolean value.
   */
  equals(sticker: any): any;
}

/**
 * It's a class that represents a sticker pack
 * @class
 * @extends Base
 */
export class StickerPack extends Base {
  /**
   * It's a class that represents a sticker pack
   * @class
   * @extends Base
   */
  constructor(data?: any, client?: any);

  /**
   * It fetches the sticker pack from Discord's API and returns it
   * @returns The sticker object.
   */
  fetch(): any;

  /**
   * It returns the URL of the banner image of the sticker pack.
   * @param options
   * @returns The URL of the banner image.
   */
  bannerURL(options: any): any;
}

/**
 * It's a class that represents a team in the Discord API
 * @class
 * @extends Base
 */
export class Team extends Base {
  /**
   * It's a class that represents a team in the Discord API
   * @class
   * @extends Base
   */
  constructor(data?: any, client?: any);

  /**
   * "If the team has an icon, return the icon URL, otherwise return null."
   *
   * The function takes an optional parameter, options, which is an object
   * @param [options] - Object
   * @returns The URL of the team icon.
   */
  iconURL(options?: any): any;
}

/**
 * It's a class that represents a team member
 * @class
 * @extends Base
 */
export class TeamMember extends Base {
  /**
   * It's a class that represents a team member
   * @class
   * @extends Base
   */
  constructor(data?: any, client?: any);
}

/**
 * It's a class that extends another class, and it has a constructor that takes in a data object, a
guildId, and a client
 * @class
 * @extends BaseGuildChannel
 */
export class TextChannel extends BaseGuildChannel {
  /**
    * It's a class that extends another class, and it has a constructor that takes in a data object, a
   guildId, and a client
    * @class
    * @extends BaseGuildChannel
    */
  constructor(data?: any, guildId?: any, client?: any);
}

/**
 * It's a class that represents a Discord Thread Channel
 * @class
 * @extends TextBasedChannels
 */
export class ThreadChannel extends TextBasedChannels {
  /**
   * It's a class that represents a Discord Thread Channel
   * @class
   * @extends TextBasedChannels
   */
  constructor(data?: any, guildId?: any, client?: any);

  /**
   * It returns a promise that resolves to the current object
   * @returns The members array.
   */
  join(): any;

  /**
   * It adds a member to the members collection.
   * @param member - The member to add to the set.
   * @returns The return value is a Promise that resolves to the result of the add() method.
   */
  add(member: any): any;

  /**
   * It removes a user from the members array.
   * @param user - The user to remove from the guild.
   * @returns The return value is the result of the remove method.
   */
  remove(user: any): any;

  /**
   * It fetches the owner of the guild
   * @param options - An object with the following properties:
   * @returns The owner of the guild.
   */
  fetchOwner(options: any): any;

  /**
   * It edits the channel's archived property to the value of the archived parameter, and the reason
   * property to the value of the reason parameter
   * @param archived - Boolean - Whether the channel should be archived or not.
   * @param reason - The reason for the edit.
   * @returns The return value of the edit function.
   */
  setArchived(archived: any, reason: any): any;

  /**
   * It sets the locked property of a channel to true or false
   * @param locked - Boolean - Whether the channel should be locked or not
   * @param reason - The reason for the lock.
   * @returns The return value of the edit method.
   */
  setLocked(locked: any, reason: any): any;

  /**
   * It sets the autoArchiveDuration of a channel
   * @param autoArchiveDuration - The duration in seconds after which the channel will be automatically
   * archived.
   * @param reason - The reason for the edit.
   * @returns The return value of the edit method.
   */
  setAutoArchiveDuration(autoArchiveDuration: any, reason: any): any;

  /**
   * It sets the invitable property of the guild.
   * @param invitable - Boolean - Whether the role should be invitable or not.
   * @param reason - The reason for the change (0-1024 characters)
   * @returns The return value of the edit method.
   */
  setInvitable(invitable: any, reason: any): any;

  /**
   * It sets the flags of a message
   * @param flags - The flags to set.
   * @param reason - The reason for the edit.
   * @returns The return value of the edit method.
   */
  setFlags(flags: any, reason: any): any;
}

/**
 * It's a class that represents a user in a thread
 * @class
 * @extends Base
 */
export class ThreadMember extends Base {
  /**
   * It's a class that represents a user in a thread
   * @class
   * @extends Base
   */
  constructor(data?: any, guildId?: any, threadId?: any, client?: any);

  /**
   * It removes a user from a thread
   * @returns The thread member object.
   */
  remove(): any;

  /**
   * It returns the guild object of the guild ID that is stored in the database
   * @returns The guild object.
   */
  guild: any;

  /**
   * It returns the channel object of the thread.
   * @returns The thread channel.
   */
  thread: any;

  /**
   * It returns the user object of the user who sent the message
   * @returns The user object.
   */
  user: any;
}

/**
 * It's a class that represents a triggered automod rule.
 * @class
 * @extends Base
 */
export class TriggeredAutoModRule extends Base {
  /**
   * It's a class that represents a triggered automod rule.
   * @class
   * @extends Base
   */
  constructor(data?: any, guildId?: any, client?: any);

  /**
   * It returns the guild object of the guild ID that is stored in the database
   * @returns The guild object.
   */
  guild: any;

  /**
   * It returns the channel object of the channel ID that is stored in the message object
   * @returns The channel object.
   */
  channel: any;

  /**
   * It returns the user object of the user who sent the message
   * @returns The user object.
   */
  user: any;

  /**
   * It returns a message object from the messageId
   * @returns The message object.
   */
  message: any;

  /**
   * It fetches the rule from the database
   * @param [options] - Object
   * @returns The rule object.
   */
  fetch(options?: any): any;

  /**
   * It edits a rule in the guild's automod
   * @param [options] - Object
   * @returns The return value is the edited rule.
   */
  edit(options?: any): any;

  /**
   * It deletes a rule from the database
   * @param reason - The reason for the deletion.
   * @returns The return value of the delete method.
   */
  delete(reason: any): any;

  /**
   * It edits the name of the channel
   * @param name - The new name of the channel.
   * @param reason - The reason for the edit.
   * @returns The name of the channel.
   */
  setName(name: any, reason: any): any;

  /**
   * It returns a promise that resolves to the result of calling the edit function with the eventType
   * and reason parameters.
   * @param eventType - The event type to set.
   * @param reason - The reason for the event.
   * @returns The return value of the edit function.
   */
  setEventType(eventType: any, reason: any): any;

  /**
   * It sets the triggerMetadata property of the current object to the value of the triggerMetadata
   * parameter
   * @param triggerMetadata - The metadata of the trigger.
   * @param reason - The reason for the edit.
   * @returns The return value of the edit function.
   */
  setTriggerMetadata(triggerMetadata: any, reason: any): any;

  /**
   * It edits the message with the given actions and reason
   * @param actions - An array of actions to set.
   * @param reason - The reason for the edit.
   * @returns The return value of the edit method.
   */
  setActions(actions: any, reason: any): any;

  /**
   * This function sets the enabled property of the command to the value of the enabled parameter, and
   * the reason property of the command to the value of the reason parameter.
   * @param enabled - Boolean - Whether the command should be enabled or disabled.
   * @param reason - The reason for the change (0-1024 characters).
   * @returns The return value of the edit function.
   */
  setEnabled(enabled: any, reason: any): any;

  /**
   * It sets the exempt roles of a role
   * @param exemptRoles - An array of role IDs that are exempt from the filter.
   * @param reason - The reason for the edit.
   * @returns The return value of the edit function.
   */
  setExemptRoles(exemptRoles: any, reason: any): any;

  /**
   * It edits the channel overwrites for a role
   * @param exemptChannels - An array of channel IDs that are exempt from the filter.
   * @param reason - The reason for the edit.
   * @returns The return value of the edit function.
   */
  setExemptChannels(exemptChannels: any, reason: any): any;
}

/**
 * It's a class that represents a user
 * @class
 * @extends Base
 */
export class User extends Base {
  /**
   * It's a class that represents a user
   * @class
   * @extends Base
   */
  constructor(data?: any, client?: any);

  /**
   * It fetches the user from the Discord API
   * @param options - An object with the following properties:
   * @returns The user object.
   */
  fetch(options: any): any;

  /**
   * It creates a DM channel with the user
   * @returns The user object.
   */
  createDM(): any;

  /**
   * It sends a message to a user
   * @param [options] - Object
   * @returns The user object.
   */
  send(options?: any): any;

  /**
   * It returns the default avatar URL of the user
   * @returns The default avatar URL for the user.
   */
  defaultAvatarURL(): any;

  /**
   * "If the user doesn't have an avatar, return the default avatar URL, otherwise return the user's
   * avatar URL."
   * @param [options] - dynamic, size, format
   * @returns The avatar URL of the user.
   */
  displayAvatarURL(options?: any): any;

  /**
   * "If the user has a banner, return the banner URL, otherwise return null."
   *
   * The function is called like this:
   * @param [options] - The options for the banner.
   * @returns The user's banner URL.
   */
  bannerURL(options?: any): any;

  /**
   * "If the user has an avatar decoration, return the URL of the avatar decoration, otherwise return
   * null."
   *
   * The function is called avatarDecorationURL because it returns the URL of the avatar decoration
   * @param [options]
   * @returns The avatar decoration URL.
   */
  avatarDecorationURL(options?: any): any;

  /**
   * If the accentColor property is not null, return a string that starts with a hash symbol and is
   * followed by the accentColor property converted to a string in base 16.
   * @returns The accent color in hexadecimal format.
   */
  hexAccentColor(): any;
}

/**
 * This class is used to create a new verification form field
 * @class
 * @extends Base
 */
export class VerificationFormFields extends Base {
  /**
   * This class is used to create a new verification form field
   * @class
   * @extends Base
   */
  constructor(data?: any, client?: any);
}

/**
 * The above function is a constructor function that takes in data, guildId, and client as parameters
 * and sets the rateLimitPerUser, lastMessageId, and nsfw properties to the data.rate_limit_per_user,
 * data.last_message_id, and data.nsfw properties respectively.
 * @param [data] - The data that was passed to the constructor.
 * @param guildId - The ID of the guild the channel is in.
 * @param client - The client that instantiated the channel.
 */
export class VoiceChannel {
  /**
   * The above function is a constructor function that takes in data, guildId, and client as parameters
   * and sets the rateLimitPerUser, lastMessageId, and nsfw properties to the data.rate_limit_per_user,
   * data.last_message_id, and data.nsfw properties respectively.
   * @param [data] - The data that was passed to the constructor.
   * @param guildId - The ID of the guild the channel is in.
   * @param client - The client that instantiated the channel.
   */
  constructor(data?: any, guildId?: any, client?: any);

  /**
   * It returns a new MessageManager object, which is a class that manages messages
   * @returns A new instance of the MessageManager class.
   */
  messages: any;

  /**
   * It sends a message to the channel
   * @param [options] - Object
   * @returns The return value is the result of the send() method.
   */
  send(options?: any): any;

  /**
   * It deletes messages in bulk
   * @param messages - The messages to delete.
   * @param reason - The reason for the bulk delete.
   * @returns The return value of the function.
   */
  bulkDelete(messages: any, reason: any): any;

  /**
   * It edits the channel's nsfw property
   * @param nsfw - Boolean - Whether the channel is nsfw or not.
   * @param reason - The reason for the edit.
   * @returns The edited channel.
   */
  setNsfw(nsfw: any, reason: any): any;

  /**
   * It edits the ratelimit of a command
   * @param ratelimit - The ratelimit to set.
   * @param reason - The reason for the ratelimit.
   * @returns The return value of the edit function.
   */
  setRateLimitPerUser(ratelimit: any, reason: any): any;

  /**
   * It sets the user limit of a channel
   * @param userLimit - The new user limit of the channel.
   * @param reason - The reason for the edit.
   * @returns The userLimit and reason are being returned.
   */
  setUserLimit(userLimit: any, reason: any): any;

  /**
   * This function sets the video quality mode to the given value, and returns a promise that resolves
   * to the new value of the video quality mode.
   * @param videoQualityMode - The video quality mode to set.
   * @param reason - The reason for the change.
   * @returns The return value of the edit function.
   */
  setVideoQualityMode(videoQualityMode: any, reason: any): any;

  /**
   * It triggers typing in the channel
   * @returns The return value of the function.
   */
  triggerTyping(): any;
}

/**
 * It's a class that represents a Discord voice region
 * @class
 * @extends Base
 */
export class VoiceRegion extends Base {
  /**
   * It's a class that represents a Discord voice region
   * @class
   * @extends Base
   */
  constructor(data?: any, client?: any);
}

/**
 * It's a class that represents a user's voice state in a guild
 * @class
 * @extends Base
 */
export class VoiceState extends Base {
  /**
   * It's a class that represents a user's voice state in a guild
   * @class
   * @extends Base
   */
  constructor(data?: any, guildId?: any, client?: any);

  /**
   * It edits the member's settings
   * @param options - An object containing the options to edit the member with.
   * @returns The return value is a Promise that resolves to the edited member.
   */
  edit(options: any): any;

  /**
   * It sets the channel of the invite
   * @param channel - The channel to move the member to, can be a voice channel or a category channel.
   * @param reason - The reason for the update.
   * @returns The channel that the message was sent in.
   */
  setChannel(channel: any, reason: any): any;

  /**
   * It sets the deaf property of the member to deaf, and the reason property of the member to reason
   * @param deaf - Boolean - Whether or not the member should be deafened
   * @param reason - The reason for the change.
   * @returns The deaf status of the member.
   */
  setDeaf(deaf: any, reason: any): any;

  /**
   * It sets the mute status of a user
   * @param mute - Boolean - Whether or not the member should be muted.
   * @param reason - The reason for the mute.
   * @returns The mute status and the reason for the mute.
   */
  setMute(mute: any, reason: any): any;

  /**
   * It sets the user's voice state to suppress
   * @param suppress - Boolean
   * @returns The voice state of the user.
   */
  setSuppress(suppress: any): any;

  /**
   * It sets the request to speak status of a user in a voice channel
   * @param requestToSpeak - boolean
   * @returns The return value is a Promise that resolves to the updated VoiceState.
   */
  setRequestToSpeak(requestToSpeak: any): any;

  /**
   * It returns the guild object of the guild ID that is stored in the database
   * @returns The guild object.
   */
  guild: any;

  /**
   * It returns the channel object of the channel ID that is stored in the message object
   * @returns The channel object.
   */
  channel: any;

  /**
   * It returns the user object of the user who sent the message
   * @returns The user object.
   */
  user: any;
}

/**
 * It's a class that represents a webhook
 * @class
 * @extends Base
 */
export class Webhook extends Base {
  /**
   * It's a class that represents a webhook
   * @class
   * @extends Base
   */
  constructor(data?: any, guildId?: any, client?: any);

  /**
   * It fetches a webhook from the Discord API
   * @param token - The token of the webhook.
   * @returns A new instance of the Webhook class.
   */
  fetch(token: any): any;

  /**
   * It edits a webhook
   * @param [options]
   * @returns A new instance of the Webhook class.
   */
  edit(options?: any): any;

  /**
   * It edits the name of the channel
   * @param name - The new name of the channel.
   * @param reason - The reason for the edit.
   * @returns The name of the channel.
   */
  setName(name: any, reason: any): any;

  /**
   * It sets the avatar of the bot
   * @param avatar - The new avatar of the bot.
   * @param reason - The reason for the change (0-1024 characters)
   * @returns The avatar of the user.
   */
  setAvatar(avatar: any, reason: any): any;

  /**
   * It sets the channel of the invite
   * @param channel - The channel to move the member to, can be a voice channel or a category channel.
   * @param reason - The reason for the update.
   * @returns The channel that the message was sent in.
   */
  setChannel(channel: any, reason: any): any;

  /**
   * It deletes a webhook
   * @param [options] - Object
   * @returns The webhook object.
   */
  delete(options?: any): any;

  /**
   * It returns the default avatar URL.
   * @returns The default avatar URL.
   */
  defaultAvatarURL(): any;

  /**
   * If the avatar is not set, return the default avatar URL, otherwise return the avatar URL.
   * @param [options] - Object
   * @returns The avatar URL of the webhook.
   */
  displayAvatarURL(options?: any): any;
}

/**
 * It's a class that allows you to send messages to a channel using a webhook.
 * @class
 * @extends Base
 */
export class WebhookClient extends Base {
  /**
   * It's a class that allows you to send messages to a channel using a webhook.
   * @class
   * @extends Base
   */
  constructor(data?: any, client?: any);

  /**
   * It fetches the webhook from the API and returns a new Webhook instance
   * @returns A new Webhook object.
   */
  fetchWebhook(): any;

  /**
   * It sends a message to a channel using a webhook
   * @param [options] - Object
   * @returns The message object.
   */
  send(options?: any): any;

  /**
   * It deletes a message from a thread.
   * @param message - The message object or message ID to delete.
   * @param thread - The thread ID of the thread you want to delete the message from.
   * @returns Nothing.
   */
  delete(message: any, thread: any): any;

  /**
   * It edits a message sent by a webhook
   * @param message - The message to edit.
   * @param [options] - The options to send to the message.
   * @param thread - The thread ID of the message to edit.
   * @returns The message that was edited.
   */
  edit(message: any, options?: any, thread?: any): any;

  /**
   * It fetches a message from a webhook
   * @param message - The message to fetch. Can be a message object, a message ID, or a message URL.
   * @param thread - The thread ID of the message.
   * @returns The message object.
   */
  fetch(message: any, thread: any): any;
}

/**
 * It's a class that represents a welcome screen for a guild
 * @class
 * @extends Base
 */
export class WelcomeScreen extends Base {
  /**
   * It's a class that represents a welcome screen for a guild
   * @class
   * @extends Base
   */
  constructor(data?: any, guildId?: any, client?: any);

  /**
   * It edits the welcome screen
   * @param [options] - Object
   * @returns The return value is the result of the edit function.
   */
  edit(options?: any): any;

  /**
   * This function sets the enabled property of the command to the value of the enabled parameter, and
   * the reason property of the command to the value of the reason parameter.
   * @param enabled - Boolean - Whether the command should be enabled or disabled.
   * @param reason - The reason for the change (0-1024 characters).
   * @returns The return value of the edit function.
   */
  setEnabled(enabled: any, reason: any): any;

  /**
   * It sets the welcome channels of the guild
   * @param channels - The channels to set the welcome channels to.
   * @param reason - The reason for the edit.
   * @returns The return value is the updated guild.
   */
  setWelcomeChannels(channels: any, reason: any): any;

  /**
   * It edits the description of the channel
   * @param description - The new description of the channel.
   * @param reason - The reason for the edit.
   * @returns The description of the channel.
   */
  setDescription(description: any, reason: any): any;

  /**
   * It returns the guild object of the guild ID that is stored in the database
   * @returns The guild object.
   */
  guild: any;
}

/**
 * It's a class that represents a welcome screen channel
 * @class
 * @extends Base
 */
export class WelcomeScreenChannel extends Base {
  /**
   * It's a class that represents a welcome screen channel
   * @class
   * @extends Base
   */
  constructor(data?: any, guildId?: any, client?: any);

  /**
   * It returns the channel object of the channel ID that is stored in the message object
   * @returns The channel object.
   */
  channel: any;

  /**
   * It returns the guild object of the guild ID that is stored in the database
   * @returns The guild object.
   */
  guild: any;
}

/**
 * Represents a set of flags that can be used to represent various activity options.
 * @extends Bitfield
 */
export class ActivityFlags {
  /**
   * Represents a set of flags that can be used to represent various activity options.
   * @extends Bitfield
   */
  constructor(bit: number);

  /**
   * The individual flags that can be used to represent activity options.
   * @type {Object<string, bigint>}
   * @readonly
   * @enum {bigint}
   */
  static Flags: bigint;

  /**
   * The default flag value.
   * @type {number}
   */
  static Default: number;

  /**
   * All available flag values.
   * @type {number}
   */
  static All: number;
}

/**
 * A bitfield for application flags.
 * @extends {Bitfield}
 */
export class ApplicationFlags {
  /**
   * A bitfield for application flags.
   * @extends {Bitfield}
   */
  constructor(bit: number);

  /**
   * Application flag bitfields.
   * @type {Object<string, bigint>}
   * @readonly
   * @enum {bigint}
   */
  static Flags: bigint;

  /**
   * Default application flag bitfield.
   * @type {number}
   */
  static Default: number;

  /**
   * All application flag bitfields.
   * @type {number}
   */
  static All: number;
}

/**
 * It's a class that allows you to create a bitfield, and then you can add, remove, and check if a
bitfield has a certain bit
 * @module Bitfield
 */
export module Bitfield {}

/**
 * Class representing bitfields of Channel flags.
 * @extends Bitfield
 */
export class ChannelFlags {
  /**
   * Class representing bitfields of Channel flags.
   * @extends Bitfield
   */
  constructor(bit: number);

  /**
   * Default value for the ChannelFlags class.
   * @type {bigint}
   */
  static Default: bigint;

  /**
   * Channel flags and their corresponding bit numbers.
   * @type {Object<string, bigint>}
   * @readonly
   * @enum {bigint}
   */
  static Flags: bigint;

  /**
   * Bitwise OR operation on all flags to get a bitfield with all flags.
   * @type {bigint}
   */
  static All: bigint;
}

/**
 * It creates an object with the keys being the index of the value in the array and the value being the
 * value in the array.
 * @param keys - An array of strings that will be used to create the enum.
 * @returns The return value is an object with the following properties:
 */
export var ActivityType: any;

/**
 * It resolves a file to a buffer
 * @module DataManager
 */
export module DataManager {}

/**
 * It transforms an emoji into a string that can be used in a message
 * @module EmojiResolver
 */
export module EmojiResolver {}

/**
 * A bitfield that represents flags for a guild member.
 * @extends {Bitfield}
 */
export class GuildMemberFlags {
  /**
   * A bitfield that represents flags for a guild member.
   * @extends {Bitfield}
   */
  constructor(bit: string);

  /**
   * The flags for a guild member.
   * @type {Object<string, bigint>}
   * @readonly
   * @enum {bigint}
   */
  static Flags: bigint;

  /**
   * The default value for a guild member's flags.
   * @type {bigint}
   * @readonly
   */
  static Default: bigint;

  /**
   * The value of all guild member flags combined.
   * @type {bigint}
   * @readonly
   */
  static All: bigint;
}

/**
 * Represents the intents that the bot wishes to subscribe to.
 */
export class Intents {
  /**
   * Represents the intents that the bot wishes to subscribe to.
   */
  constructor(bit: number);

  /**
   * The available flags for the Intents bitfield.
   * @type {Object<string, bigint>}
   * @readonly
   * @enum {bigint}
   */
  static Flags: bigint;

  /**
   * The default value for the Intents bitfield.
   * @readonly
   * @type {bigint}
   */
  static Default: bigint;

  /**
   * The value that represents all flags in the Intents bitfield.
   * @readonly
   * @type {bigint}
   */
  static All: bigint;
}

/**
 * IIt takes an object with properties that are used to create an invite
 * @module InvitePayload
 */
export module InvitePayload {}

/**
 * Represents a bitfield for Discord message flags.
 * @extends Bitfield
 */
export class MessageFlags {
  /**
   * Represents a bitfield for Discord message flags.
   * @extends Bitfield
   */
  constructor(bit: number);

  /**
   * An object mapping flag names to their corresponding bit positions.
   * @type {Object<string, bigint>}
   * @readonly
   * @enum {bigint}
   */
  static Flags: bigint;

  /**
   * The default bitfield value for a new instance.
   * @type {BigInt}
   * @readonly
   * @static
   */
  static Default: BigInt;

  /**
   * The bitfield value with all bits set to 1.
   * @type {BigInt}
   * @readonly
   * @static
   */
  static All: BigInt;
}

/**
 * It takes a payload object and returns a payload object
 * @module MessagePayload
 */
export module MessagePayload {}

/**
 * Class representing a Discord permission bitfield.
 * @extends Bitfield
 */
export class Permissions {
  /**
   * Class representing a Discord permission bitfield.
   * @extends Bitfield
   */
  constructor(bit: bigint);

  /**
   * Object containing bit flags for Permissions
   * @type {Object<string, bigint>}
   * @readonly
   * @enum {bigint}
   */
  static Flags: bigint;

  /**
   * The default Permissions bitfield value
   * @type {bigint}
   * @readonly
   */
  static Default: bigint;

  /**
   * Bitfield representing all permissions
   * @type {bigint}
   * @readonly
   */
  static All: bigint;
}

/**
 * Represents the possible flags for a Role
 * @extends {Bitfield}
 */
export class RoleFlags {
  /**
   * Represents the possible flags for a Role
   * @extends {Bitfield}
   */
  constructor(bit: bigint);

  /**
   * The flags for a role
   * @enum {bigint}
   */
  static Flags: bigint;

  /**
   * The default bit(s) for a role
   * @type {bigint}
   */
  static Default: bigint;

  /**
   * The total bit(s) of all the flags combined
   * @type {bigint}
   */
  static All: bigint;
}

/**
 * @typedef {Object} RoleFlagsResolvable
 * @property {string} [name] The name of the flag
 * @property {bigint|number} [bit] The bit of the flag
 */
export interface RoleFlagsResolvable {
  name?: string;
  bit?: bigint | number;
}

/**
 * It takes a snowflake and returns an object with the snowflake's creation date, timestamp, worker ID,
process ID, increment, and binary
 * @module Snowflake
 */
export module Snowflake {}

/**
 * It's a class that creates a payload for the VK API.
 * @module StickerPayload
 */
export module StickerPayload {}

/**
 * A bitfield that represents the system channel flags.
 * @extends {Bitfield}
 */
export class SystemChannelFlags {
  /**
   * A bitfield that represents the system channel flags.
   * @extends {Bitfield}
   */
  constructor(bit: number);

  /**
   * The default bitfield of a system channel.
   * @type {bigint}
   */
  static Default: bigint;

  /**
   * Available flags for a system channel.
   * @type {Object<string, bigint>}
   * @readonly
   * @enum {bigint}
   */
  static Flags: bigint;

  /**
   * All available flags for a system channel.
   * @type {bigint}
   */
  static All: bigint;
}

/**
 * A bitfield of flags for a thread member.
 * @extends {Bitfield}
 */
export class ThreadMemberFlags {
  /**
   * A bitfield of flags for a thread member.
   * @extends {Bitfield}
   */
  constructor(bit: bigint);

  /**
   * Thread member flags.
   * @type {Object<string, bigint>}
   * @readonly
   * @enum {bigint}
   */
  static Flags: bigint;

  /**
   * Default bit value for a thread member.
   * @type {bigint}
   * @static
   */
  static Default: bigint;

  /**
   * Bitfield representing all available thread member flags.
   * @type {bigint}
   * @static
   */
  static All: bigint;
}

/**
 * @typedef {Object} UserFlags
 * @property {bigint} value - The raw bitfield value.
 */
export interface UserFlags {
  value: bigint;
}

/**
 * It takes in a payload object, and returns a new object with the same keys, but with the values of
the keys being the values of the keys in the payload object, or undefined if the key doesn't exist
in the payload object
 * @module UserPayload
 */
export module UserPayload {}

/**
 * It's a class that contains static methods that are used to generate Discord timestamps, resolve
colors, get buffers, generate data URIs, generate files, convert base64 to buffers, and generate ISO
strings.
 * @module Util
 */
export module Util {}

export interface metadata {
  channelId: string;
  durationSeconds: number;
}
