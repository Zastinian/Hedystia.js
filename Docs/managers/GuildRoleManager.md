<a name="GuildRoleManager"></a>

## GuildRoleManager
**Kind**: global class  

* [GuildRoleManager](#GuildRoleManager)
    * [new GuildRoleManager(guildId, client)](#new_GuildRoleManager_new)
    * [.highest](#GuildRoleManager+highest) ⇒
    * [.everyone](#GuildRoleManager+everyone) ⇒
    * [.cache](#GuildRoleManager+cache) ⇒

<a name="new_GuildRoleManager_new"></a>

### new GuildRoleManager(guildId, client)
`constructor` is a function that runs when a new instance of the class is created


| Param | Description |
| --- | --- |
| guildId | The ID of the guild you want to get the settings for. |
| client | The client that the command is being run on. |

<a name="GuildRoleManager+highest"></a>

### guildRoleManager.highest ⇒
It sorts the roles in the cache by their position, and then returns the first one

**Kind**: instance property of [<code>GuildRoleManager</code>](#GuildRoleManager)  
**Returns**: The highest role in the guild.  
<a name="GuildRoleManager+everyone"></a>

### guildRoleManager.everyone ⇒
It returns the cached data for the guild

**Kind**: instance property of [<code>GuildRoleManager</code>](#GuildRoleManager)  
**Returns**: The cache is being returned.  
<a name="GuildRoleManager+cache"></a>

### guildRoleManager.cache ⇒
It returns the cache, but only the cache that has the same guild ID as the current guild

**Kind**: instance property of [<code>GuildRoleManager</code>](#GuildRoleManager)  
**Returns**: The cache of the super class, but filtered to only include objects that have a guild_id orguildId property that matches the guildId of the current class.  
