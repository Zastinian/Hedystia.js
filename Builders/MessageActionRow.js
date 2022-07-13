const { ComponentType } = require("../Util/Constants");
const MessageButton = require("./MessageButton");
const InputText = require("./InputText");
const StringSelect = require("./StringSelect");
const UserSelect = require("./UserSelect");
const RoleSelect = require("./RoleSelect");
const ChannelSelect = require("./ChannelSelect");
class MessageActionRow {
  constructor(data = {}) {
    this.type = "ACTION_ROW";
    this.components = data.components?.map((o) =>
      MessageActionRow.transformComponents(o)
    );
  }

  static transformComponents(data) {
    const type =
      typeof data.type === "string" ? ComponentType[data.type] : data.type;
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

  addComponents(...components) {
    this.components = [];
    if (Array.isArray(components[0])) {
      components[0]?.map((o) =>
        this.components.push(MessageActionRow.transformComponents(o))
      );
    } else {
      components?.map((o) =>
        this.components.push(MessageActionRow.transformComponents(o))
      );
    }

    return this;
  }

  setComponents(...components) {
    if (Array.isArray(components[0])) {
      this.components = components[0]?.map((o) =>
        MessageActionRow.transformComponents(o)
      );
    } else {
      this.components = components?.map((o) =>
        MessageActionRow.transformComponents(o)
      );
    }

    return this;
  }

  validation() {
    if (!ComponentType[this.type])
      throw new TypeError(`ComponentType is invalid`);
    return;
  }

  toJSON() {
    this.validation();
    return {
      type: ComponentType[this.type],
      components: this.components,
    };
  }
}

module.exports = MessageActionRow;
