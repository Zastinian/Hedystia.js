<a name="GuildChannelManager"></a>

## GuildChannelManager
**Kind**: global class  

* [GuildChannelManager](#GuildChannelManager)
    * [new GuildChannelManager(guildId, client)](#new_GuildChannelManager_new)
    * [.cache](#GuildChannelManager+cache) ⇒
    * [.create([options])](#GuildChannelManager+create) ⇒
    * [.modifyPosition([options])](#GuildChannelManager+modifyPosition) ⇒

<a name="new_GuildChannelManager_new"></a>

### new GuildChannelManager(guildId, client)
It's a constructor function that takes in a guildId and a client, and then sets the guildId to theguildId that was passed in, and then sets the client to the client that was passed in.


| Param | Description |
| --- | --- |
| guildId | The ID of the guild you want to get the settings for. |
| client | The client that the command is being run from. |

<a name="GuildChannelManager+cache"></a>

### guildChannelManager.cache ⇒
It filters the cache to only include objects that have a guild_id or guildId property that matchesthe guildId of the current instance

**Kind**: instance property of [<code>GuildChannelManager</code>](#GuildChannelManager)  
**Returns**: The cache is being filtered to only return the objects that have the same guildId as theguildId of the current guild.  
<a name="GuildChannelManager+create"></a>

### guildChannelManager.create([options]) ⇒
It creates a new channel in the guild.

**Kind**: instance method of [<code>GuildChannelManager</code>](#GuildChannelManager)  
**Returns**: The channel object.  

| Param | Description |
| --- | --- |
| [options] | Object |

<a name="GuildChannelManager+modifyPosition"></a>

### guildChannelManager.modifyPosition([options]) ⇒
It takes an array of objects, transforms them, and then sends them to the API

**Kind**: instance method of [<code>GuildChannelManager</code>](#GuildChannelManager)  
**Returns**: A new cache object.  

| Param | Description |
| --- | --- |
| [options] | Object |

