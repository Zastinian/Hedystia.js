const BaseThreadManager = require("../Managers/BaseThreadManager");
const {RaidenCol} = require("../Util/@Collections/RaidenCol");
const BaseAction = require("./BaseAction");
class ThreadMembersUpdate extends BaseAction {
  constructor(data = {}, client) {
    super(client);

    this._patch(data);
  }

  _patch(data) {
    const packet = data.d;
    const thread = new BaseThreadManager(this.client);
    const threadChannel = thread._add(packet.id, packet.guild_id);
    const threadMemberManager = threadChannel.members;
    const added = new RaidenCol(
      packet.added_members?.map((o) => {
        return [o.user_id, threadMemberManager._add(o)];
      })
    );
    const removed = new RaidenCol(packet.removed_member_ids?.map((o) => [o, threadMemberManager._add(o)]));
    if (added.size > 0) {
      return this.client.emit("threadMemberAdd", added);
    }

    if (removed.size > 0) {
      this.client.emit("threadMemberRemove", removed);
      for (let members of packet.removed_member_ids) {
        const cachedMember = threadMemberManager.cache.get(members);
        if (cachedMember) threadMemberManager.cache.delete(members);
      }

      return;
    }
  }
}

module.exports = ThreadMembersUpdate;
