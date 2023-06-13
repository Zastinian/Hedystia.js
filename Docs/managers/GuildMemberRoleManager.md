<a name="GuildMemberRoleManager"></a>

## GuildMemberRoleManager
**Kind**: global class  

* [GuildMemberRoleManager](#GuildMemberRoleManager)
    * [new GuildMemberRoleManager(guildId, member, client)](#new_GuildMemberRoleManager_new)
    * _instance_
        * [.highest](#GuildMemberRoleManager+highest) ⇒
        * [.cache](#GuildMemberRoleManager+cache) ⇒
        * [.add(roles, reason)](#GuildMemberRoleManager+add) ⇒
        * [.remove(roles, reason)](#GuildMemberRoleManager+remove) ⇒
        * [.set(roles, reason)](#GuildMemberRoleManager+set) ⇒
    * _static_
        * [.transformRole([role])](#GuildMemberRoleManager.transformRole) ⇒

<a name="new_GuildMemberRoleManager_new"></a>

### new GuildMemberRoleManager(guildId, member, client)
`This function is a constructor for the class.`


| Param | Description |
| --- | --- |
| guildId | The ID of the guild the member is in. |
| member | The member object of the member who left the guild. |
| client | The client that the command is being run from. |

<a name="GuildMemberRoleManager+highest"></a>

### guildMemberRoleManager.highest ⇒
It sorts the cache by position, then returns the first item in the sorted collection

**Kind**: instance property of [<code>GuildMemberRoleManager</code>](#GuildMemberRoleManager)  
**Returns**: The highest position in the cache.  
<a name="GuildMemberRoleManager+cache"></a>

### guildMemberRoleManager.cache ⇒
It returns the cache, but only if the cache's id is the same as the guild id, or if the member hasthe role

**Kind**: instance property of [<code>GuildMemberRoleManager</code>](#GuildMemberRoleManager)  
**Returns**: The cache is being filtered to only return objects that have the same id as the guildId orthe member's roles.  
<a name="GuildMemberRoleManager+add"></a>

### guildMemberRoleManager.add(roles, reason) ⇒
It adds a role to a member

**Kind**: instance method of [<code>GuildMemberRoleManager</code>](#GuildMemberRoleManager)  
**Returns**: The member object  

| Param | Description |
| --- | --- |
| roles | The role(s) to add to the member. |
| reason | The reason for the action. |

<a name="GuildMemberRoleManager+remove"></a>

### guildMemberRoleManager.remove(roles, reason) ⇒
It removes a role from a member

**Kind**: instance method of [<code>GuildMemberRoleManager</code>](#GuildMemberRoleManager)  
**Returns**: The member object  

| Param | Description |
| --- | --- |
| roles | The role(s) to remove from the member. |
| reason | The reason for the role removal. |

<a name="GuildMemberRoleManager+set"></a>

### guildMemberRoleManager.set(roles, reason) ⇒
It takes an array of role IDs and a reason, and then it returns a promise that resolves to theresult of the edit request.

**Kind**: instance method of [<code>GuildMemberRoleManager</code>](#GuildMemberRoleManager)  
**Returns**: The roles that the member has.  

| Param | Description |
| --- | --- |
| roles | The roles to set. |
| reason | The reason for the role change. |

<a name="GuildMemberRoleManager.transformRole"></a>

### GuildMemberRoleManager.transformRole([role]) ⇒
It takes a role object, array, or string and returns an array of role IDs

**Kind**: static method of [<code>GuildMemberRoleManager</code>](#GuildMemberRoleManager)  
**Returns**: The role is being returned.  

| Param | Description |
| --- | --- |
| [role] | The role to check for. Can be a string, a role object, or an array of either. |

