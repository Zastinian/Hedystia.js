const ApplicationCommandPermissionsUpdate = require("../Actions/APPLICATION_COMMAND_PERMISSIONS_UPDATE");
const AutoModerationActionExecution = require("../Actions/AUTO_MODERATION_ACTION_EXECUTION");
const AutoModerationRuleCreate = require("../Actions/AUTO_MODERATION_RULE_CREATE");
const AutoModerationRuleDelete = require("../Actions/AUTO_MODERATION_RULE_DELETE");
const AutoModerationRuleUpdate = require("../Actions/AUTO_MODERATION_RULE_UPDATE");
const ChannelCreate = require("../Actions/CHANNEL_CREATE");
const ChannelDelete = require("../Actions/CHANNEL_DELETE");
const ChannelUpdate = require("../Actions/CHANNEL_UPDATE");
const GuildBanAdd = require("../Actions/GUILD_BAN_ADD");
const GuildBanRemove = require("../Actions/GUILD_BAN_REMOVE");
const GuildCreate = require("../Actions/GUILD_CREATE");
const GuildDelete = require("../Actions/GUILD_DELETE");
const GuildEmojisCreate = require("../Actions/GUILD_EMOJIS_UPDATE");
const GuildMembersChunk = require("../Actions/GUILD_MEMBERS_CHUNK");
const GuildMemberAdd = require("../Actions/GUILD_MEMBER_ADD");
const GuildMemberRemove = require("../Actions/GUILD_MEMBER_REMOVE");
const GuildMemberUpdate = require("../Actions/GUILD_MEMBER_UPDATE");
const GuildScheduledEventAdd = require("../Actions/GUILD_SCHEDULED_EVENT_ADD");
const GuildScheduledEventDelete = require("../Actions/GUILD_SCHEDULED_EVENT_DELETE");
const GuildScheduledEventUpdate = require("../Actions/GUILD_SCHEDULED_EVENT_UPDATE");
const GuildScheduledEventUserAdd = require("../Actions/GUILD_SCHEDULED_EVENT_USER_ADD");
const GuildScheduledEventUserRemove = require("../Actions/GUILD_SCHEDULED_EVENT_USER_REMOVE");
const GuildUpdate = require("../Actions/GUILD_UPDATE");
const IntegrationCreate = require("../Actions/INTEGRATION_CREATE");
const IntegrationUpdate = require("../Actions/INTEGRATION_UPDATE");
const InteractionCreate = require("../Actions/INTERACTION_CREATE");
const InviteCreate = require("../Actions/INVITE_CREATE");
const InviteDelete = require("../Actions/INVITE_DELETE");
const MessageCreate = require("../Actions/MESSAGE_CREATE");
const MessageDelete = require("../Actions/MESSAGE_DELETE");
const MessageDeleteBulk = require("../Actions/MESSAGE_DELETE_BULK");
const MessageReactionAdd = require("../Actions/MESSAGE_REACTION_ADD");
const MessageReactionRemove = require("../Actions/MESSAGE_REACTION_REMOVE");
const MessageReactionRemoveEmoji = require("../Actions/MESSAGE_REACTION_REMOVE_EMOJI");
const MessageUpdate = require("../Actions/MESSAGE_UPDATE");
const PresenceUpdate = require("../Actions/PRESENCE_UPDATE");
const Ready = require("../Actions/READY");
const RoleCreate = require("../Actions/ROLE_CREATE");
const RoleDelete = require("../Actions/ROLE_DELETE");
const RolePromptCreate = require("../Actions/ROLE_PROMPT_CREATE");
const RoleUpdate = require("../Actions/ROLE_UPDATE");
const StageInstanceCreate = require("../Actions/STAGE_INSTANCE_CREATE");
const StageInstanceDelete = require("../Actions/STAGE_INSTANCE_DELETE");
const StageInstanceUpdate = require("../Actions/STAGE_INSTANCE_UPDATE");
const StickersUpdate = require("../Actions/STICKERS_UPDATE");
const ThreadCreate = require("../Actions/THREAD_CREATE");
const ThreadDelete = require("../Actions/THREAD_DELETE");
const ThreadListSync = require("../Actions/THREAD_LIST_SYNC");
const ThreadMembersUpdate = require("../Actions/THREAD_MEMBERS_UPDATE");
const ThreadUpdate = require("../Actions/THREAD_UPDATE");
const UserUpdate = require("../Actions/USER_UPDATE");
const VoiceStateUpdate = require("../Actions/VOICE_STATE_UPDATE");
const WebhooksUpdate = require("../Actions/WEBHOOKS_UPDATE");
const {Opcodes} = require("../Util/Constants");
/* It's a class that handles all the events that the client receives from the Discord API.
</code> */
class ActionsManager {
  /**
   * It defines a property called client, and sets it to the client variable
   * @param message - The message object that was sent.
   * @param client - The client that instantiated the message.
   */
  constructor(message, client) {
    Object.defineProperty(this, "client", {
      value: client,
    });

    this._patch(message);
  }

  /**
   * It takes a message from the websocket and returns a class that represents the message.
   * </code>
   * @param message - The message that was received from the websocket.
   * @returns The event is being returned.
   */
  _patch(message) {
    if (message.op === Opcodes.Heartbeat_Ack)
      this.client.emit(
        "debug",
        `[Heartbeat Acknowledged]: Successfully recognized heartbeat. Sending the next heartbeat in ${this.client.heartbeatInterval}ms`
      );
    this.client.seq = message.s;
    switch (message.t) {
      case "READY":
        return new Ready(message, this.client);
      case "MESSAGE_CREATE":
        return new MessageCreate(message, this.client);
      case "MESSAGE_UPDATE":
        return new MessageUpdate(message, this.client);
      case "MESSAGE_DELETE":
        return new MessageDelete(message, this.client);
      case "INTERACTION_CREATE":
        return new InteractionCreate(message, this.client);
      case "GUILD_CREATE":
        return new GuildCreate(message, this.client);
      case "GUILD_UPDATE":
        return new GuildUpdate(message, this.client);
      case "GUILD_DELETE":
        return new GuildDelete(message, this.client);
      case "CHANNEL_CREATE":
        return new ChannelCreate(message, this.client);
      case "CHANNEL_UPDATE":
        return new ChannelUpdate(message, this.client);
      case "CHANNEL_DELETE":
        return new ChannelDelete(message, this.client);
      case "GUILD_MEMBERS_CHUNK":
        return new GuildMembersChunk(message, this.client);
      case "USER_UPDATE":
        return new UserUpdate(message, this.client);
      case "INTEGRATION_CREATE":
        return new IntegrationCreate(message, this.client);
      case "INTEGRATION_UPDATE":
        return new IntegrationUpdate(message, this.client);
      case "GUILD_ROLE_CREATE":
        return new RoleCreate(message, this.client);
      case "GUILD_ROLE_UPDATE":
        return new RoleUpdate(message, this.client);
      case "GUILD_ROLE_DELETE":
        return new RoleDelete(message, this.client);
      case "GUILD_MEMBER_ADD":
        return new GuildMemberAdd(message, this.client);
      case "GUILD_MEMBER_UPDATE":
        return new GuildMemberUpdate(message, this.client);
      case "GUILD_MEMBER_REMOVE":
        return new GuildMemberRemove(message, this.client);
      case "GUILD_BAN_ADD":
        return new GuildBanAdd(message, this.client);
      case "GUILD_BAN_REMOVE":
        return new GuildBanRemove(message, this.client);
      case "GUILD_EMOJIS_UPDATE":
        return new GuildEmojisCreate(message, this.client);
      case "INVITE_CREATE":
        return new InviteCreate(message, this.client);
      case "INVITE_DELETE":
        return new InviteDelete(message, this.client);
      case "VOICE_STATE_UPDATE":
        return new VoiceStateUpdate(message, this.client);
      case "PRESENCE_UPDATE":
        return new PresenceUpdate(message, this.client);
      case "STAGE_INSTANCE_CREATE":
        return new StageInstanceCreate(message, this.client);
      case "STAGE_INSTANCE_UPDATE":
        return new StageInstanceUpdate(message, this.client);
      case "STAGE_INSTANCE_DELETE":
        return new StageInstanceDelete(message, this.client);
      case "GUILD_SCHEDULED_EVENT_CREATE":
        return new GuildScheduledEventAdd(message, this.client);
      case "GUILD_SCHEDULED_EVENT_UPDATE":
        return new GuildScheduledEventUpdate(message, this.client);
      case "GUILD_SCHEDULED_EVENT_DELETE":
        return new GuildScheduledEventDelete(message, this.client);
      case "GUILD_SCHEDULED_EVENT_USER_ADD":
        return new GuildScheduledEventUserAdd(message, this.client);
      case "GUILD_SCHEDULED_EVENT_USER_REMOVE":
        return new GuildScheduledEventUserRemove(message, this.client);
      case "GUILD_STICKERS_UPDATE":
        return new StickersUpdate(message, this.client);
      case "MESSAGE_REACTION_ADD":
        return new MessageReactionAdd(message, this.client);
      case "MESSAGE_REACTION_REMOVE":
        return new MessageReactionRemove(message, this.client);
      case "MESSAGE_REACTION_REMOVE_EMOJI":
        return new MessageReactionRemoveEmoji(message, this.client);
      case "MESSAGE_DELETE_BULK":
        return new MessageDeleteBulk(message, this.client);
      case "THREAD_CREATE":
        return new ThreadCreate(message, this.client);
      case "THREAD_UPDATE":
        return new ThreadUpdate(message, this.client);
      case "THREAD_DELETE":
        return new ThreadDelete(message, this.client);
      case "THREAD_MEMBERS_UPDATE":
        return new ThreadMembersUpdate(message, this.client);
      case "THREAD_LIST_SYNC":
        return new ThreadListSync(messaget, this.client);
      case "WEBHOOKS_UPDATE":
        return new WebhooksUpdate(message, this.client);
      case "APPLICATION_COMMAND_PERMISSIONS_UPDATE":
        return new ApplicationCommandPermissionsUpdate(message, this.client);
      case "AUTO_MODERATION_ACTION_EXECUTION":
        return new AutoModerationActionExecution(message, this.client);
      case "AUTO_MODERATION_RULE_CREATE":
        return new AutoModerationRuleCreate(message, this.client);
      case "AUTO_MODERATION_RULE_UPDATE":
        return new AutoModerationRuleUpdate(message, this.client);
      case "AUTO_MODERATION_RULE_DELETE":
        return new AutoModerationRuleDelete(message, this.client);
      case "ROLE_PROMPT_CREATE":
        return new RolePromptCreate(message, this.client);
    }
  }
}

module.exports = ActionsManager;
