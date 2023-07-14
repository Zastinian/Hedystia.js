<a name="GuildRoleManager"></a>

## GuildRoleManager ⇐ <code>RoleManager</code>
A class representing a manager for guild roles.

**Kind**: global class  
**Extends**: <code>RoleManager</code>  

* [GuildRoleManager](#GuildRoleManager) ⇐ <code>RoleManager</code>
    * [new GuildRoleManager(guildId, client)](#new_GuildRoleManager_new)
    * [.highest](#GuildRoleManager+highest) ⇒
    * [.everyone](#GuildRoleManager+everyone) ⇒
    * [.cache](#GuildRoleManager+cache) ⇒ <code>Array</code>

<a name="new_GuildRoleManager_new"></a>

### new GuildRoleManager(guildId, client)
Constructs a new instance of the class.


| Param | Type | Description |
| --- | --- | --- |
| guildId | <code>string</code> | The ID of the guild. |
| client | <code>Client</code> | The client object. |

<a name="GuildRoleManager+highest"></a>

### guildRoleManager.highest ⇒
Get the highest role from the cache based on position.

**Kind**: instance property of [<code>GuildRoleManager</code>](#GuildRoleManager)  
**Returns**: The highest role object.  
<a name="GuildRoleManager+everyone"></a>

### guildRoleManager.everyone ⇒
Get the cached data for everyone in the guild.

**Kind**: instance property of [<code>GuildRoleManager</code>](#GuildRoleManager)  
**Returns**: The cached data for everyone in the guild.  
<a name="GuildRoleManager+cache"></a>

### guildRoleManager.cache ⇒ <code>Array</code>
Retrieves the cache for the current guild.

**Kind**: instance property of [<code>GuildRoleManager</code>](#GuildRoleManager)  
**Returns**: <code>Array</code> - - The filtered cache objects for the current guild.  
