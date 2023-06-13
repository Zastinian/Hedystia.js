<a name="GuildVanityManager"></a>

## GuildVanityManager
**Kind**: global class  

* [GuildVanityManager](#GuildVanityManager)
    * [new GuildVanityManager(guildId, client)](#new_GuildVanityManager_new)
    * [.fetch([guild])](#GuildVanityManager+fetch) ⇒
    * [.edit(code, [guild])](#GuildVanityManager+edit) ⇒

<a name="new_GuildVanityManager_new"></a>

### new GuildVanityManager(guildId, client)
The constructor function is a function that is called when an object is created from a class.


| Param | Description |
| --- | --- |
| guildId | The ID of the guild you want to get the settings for. |
| client | The client that the command is being run from. |

<a name="GuildVanityManager+fetch"></a>

### guildVanityManager.fetch([guild]) ⇒
It fetches the vanity url of a guild

**Kind**: instance method of [<code>GuildVanityManager</code>](#GuildVanityManager)  
**Returns**: A new instance of the GuildVanity class.  

| Param | Description |
| --- | --- |
| [guild] | The guild ID or guild object to fetch the vanity URL for. |

<a name="GuildVanityManager+edit"></a>

### guildVanityManager.edit(code, [guild]) ⇒
It edits the guild's vanity url

**Kind**: instance method of [<code>GuildVanityManager</code>](#GuildVanityManager)  
**Returns**: A new GuildVanity object.  

| Param | Description |
| --- | --- |
| code | The vanity code you want to set. |
| [guild] | The guild ID or guild object to edit the vanity URL for. |

