const BaseAction = require("./BaseAction");
class RolePromptCreate extends BaseAction {
  constructor(data = {}, client) {
    super(client);

    this._patch(data);
  }

  _patch(data) {
    const packet = data.d;
    const guild = this.client.guilds._add(packet.guild_id);
    const rolePrompt = guild.rolePrompt._add(packet, packet.guild_id);
    return this.client.emit("rolePromptCreate", rolePrompt);
  }
}

module.exports = RolePromptCreate;
