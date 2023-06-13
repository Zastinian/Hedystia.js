<a name="GuildVoiceStateManager"></a>

## GuildVoiceStateManager
**Kind**: global class  

* [GuildVoiceStateManager](#GuildVoiceStateManager)
    * [new GuildVoiceStateManager(guildId, client)](#new_GuildVoiceStateManager_new)
    * [.cache](#GuildVoiceStateManager+cache) ⇒
    * [.edit(user, [options])](#GuildVoiceStateManager+edit) ⇒

<a name="new_GuildVoiceStateManager_new"></a>

### new GuildVoiceStateManager(guildId, client)
It creates a new instance of the class.


| Param | Description |
| --- | --- |
| guildId | The ID of the guild you want to get the settings for. |
| client | The client that the command is being run on. |

<a name="GuildVoiceStateManager+cache"></a>

### guildVoiceStateManager.cache ⇒
`return super.cache.filter((o) => o.guildId === this.guildId);`The `super` keyword is used to access and call functions on an object's parent

**Kind**: instance property of [<code>GuildVoiceStateManager</code>](#GuildVoiceStateManager)  
**Returns**: The cache property is being returned.  
<a name="GuildVoiceStateManager+edit"></a>

### guildVoiceStateManager.edit(user, [options]) ⇒
It edits the voice state of a user in a guild

**Kind**: instance method of [<code>GuildVoiceStateManager</code>](#GuildVoiceStateManager)  
**Returns**: undefined  

| Param | Description |
| --- | --- |
| user | The user to edit the voice state of. |
| [options] | Object |

