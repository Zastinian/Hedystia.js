<a name="GuildChannelManager"></a>

## GuildChannelManager ⇐ <code>ChannelManager</code>
Represents a manager for guild channels.

**Kind**: global class  
**Extends**: <code>ChannelManager</code>  

* [GuildChannelManager](#GuildChannelManager) ⇐ <code>ChannelManager</code>
    * [new GuildChannelManager(guildId, client)](#new_GuildChannelManager_new)
    * [.cache](#GuildChannelManager+cache) ⇒ <code>Array</code>
    * [.create([options])](#GuildChannelManager+create) ⇒ <code>Promise.&lt;Channel&gt;</code>
    * [.modifyPosition([options])](#GuildChannelManager+modifyPosition) ⇒ <code>Promise</code>

<a name="new_GuildChannelManager_new"></a>

### new GuildChannelManager(guildId, client)
Constructs a new instance of the class.


| Param | Type | Description |
| --- | --- | --- |
| guildId | <code>string</code> | The ID of the guild. |
| client | <code>Client</code> | The client object. |

<a name="GuildChannelManager+cache"></a>

### guildChannelManager.cache ⇒ <code>Array</code>
Retrieves the cache for the current guild.

**Kind**: instance property of [<code>GuildChannelManager</code>](#GuildChannelManager)  
**Returns**: <code>Array</code> - - The filtered cache objects for the current guild.  
<a name="GuildChannelManager+create"></a>

### guildChannelManager.create([options]) ⇒ <code>Promise.&lt;Channel&gt;</code>
Creates a new channel in the guild.

**Kind**: instance method of [<code>GuildChannelManager</code>](#GuildChannelManager)  
**Returns**: <code>Promise.&lt;Channel&gt;</code> - A promise that resolves with the created channel.  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | The options for creating the channel. |
| [options.reason] | <code>string</code> | The reason for creating the channel. |

<a name="GuildChannelManager+modifyPosition"></a>

### guildChannelManager.modifyPosition([options]) ⇒ <code>Promise</code>
Modifies the position of channels in a guild.

**Kind**: instance method of [<code>GuildChannelManager</code>](#GuildChannelManager)  
**Returns**: <code>Promise</code> - A promise that resolves when the position is modified.  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | The options for modifying the position. |
| [options.reason] | <code>string</code> | The reason for modifying the position. |
| [options.data] | <code>Array</code> | The data containing the channels to modify. |

