const {ComponentType} = require("../Util/Constants");
const MessageButton = require("./MessageButton");
const InputText = require("./InputText");
const StringSelect = require("./StringSelect");
const UserSelect = require("./UserSelect");
const RoleSelect = require("./RoleSelect");
const ChannelSelect = require("./ChannelSelect");

/**
 * Represents an action row containing components, such as buttons or selects, to be added to a message.
 * @class
 */
class MessageActionRow {
  /**
   * @param {Object} data - The data for the action row.
   * @param {Array} data.components - The components to be added to the action row.
   */
  constructor(data = {}) {
    this.type = "Action_Row";
    this.components = data.components?.map((o) => MessageActionRow.transformComponents(o));
  }

  static transformComponents(data) {
    const type = typeof data.type === "string" ? ComponentType[data.type] : data.type;
    let arr = [];
    switch (type) {
      case 2:
        arr.push(new MessageButton(data).toJSON());
        break;
      case 3:
        arr.push(new StringSelect(data).toJSON());
        break;
      case 5:
        arr.push(new UserSelect(data).toJSON());
        break;
      case 6:
        arr.push(new RoleSelect(data).toJSON());
        break;
      case 8:
        arr.push(new ChannelSelect(data).toJSON());
        break;
      case 4:
        arr.push(new InputText(data).toJSON());
        break;
    }

    return arr.reduce((a, b) => a);
  }

  /**
   * Adds one or more components to the action row.
   * @param  {...any} components - The components to be added to the action row.
   * @returns {MessageActionRow} - The action row with the new components added.
   */
  addComponents(...components) {
    this.components = [];
    if (Array.isArray(components[0])) {
      components[0]?.map((o) => this.components.push(MessageActionRow.transformComponents(o)));
    } else {
      components?.map((o) => this.components.push(MessageActionRow.transformComponents(o)));
    }

    return this;
  }

  /**
   * Sets the components of the action row.
   * @param  {...any} components - The components to be set as the action row's components.
   * @returns {MessageActionRow} - The action row with the new components set.
   */
  setComponents(...components) {
    if (Array.isArray(components[0])) {
      this.components = components[0]?.map((o) => MessageActionRow.transformComponents(o));
    } else {
      this.components = components?.map((o) => MessageActionRow.transformComponents(o));
    }

    return this;
  }

  /**
   * Validates that the action row's type is valid.
   * @returns {void}
   * @throws {TypeError} If the action row's type is invalid.
   */
  validation() {
    if (!ComponentType[this.type]) throw new TypeError(`ComponentType is invalid`);
    return;
  }

  /**
   * Returns the action row's data in JSON format.
   * @returns {Object} - The action row's data in JSON format.
   */
  toJSON() {
    this.validation();
    return {
      type: ComponentType[this.type],
      components: this.components,
    };
  }
}

module.exports = MessageActionRow;
