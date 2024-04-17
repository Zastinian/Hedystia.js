---
title: GuildMemberRoleManager
sidebar:
  order: 19
---



## GuildMemberRoleManager ⇐ <code>RoleManager</code>
Represents a manager for handling roles of a guild member.

**Kind**: global class  
**Extends**: <code>RoleManager</code>  

* [GuildMemberRoleManager](#GuildMemberRoleManager) ⇐ <code>RoleManager</code>
    * [new GuildMemberRoleManager(guildId, member, client)](#new_GuildMemberRoleManager_new)
    * _instance_
        * [.highest](#GuildMemberRoleManager+highest) ⇒
        * [.cache](#GuildMemberRoleManager+cache) ⇒ <code>Array</code>
        * [.add(roles, reason)](#GuildMemberRoleManager+add) ⇒ <code>Promise.&lt;void&gt;</code>
        * [.remove(roles, reason)](#GuildMemberRoleManager+remove) ⇒ <code>Promise.&lt;null&gt;</code>
        * [.set(roles, reason)](#GuildMemberRoleManager+set) ⇒ <code>Promise.&lt;void&gt;</code>
    * _static_
        * [.transformRole(role)](#GuildMemberRoleManager.transformRole) ⇒ <code>Array.&lt;string&gt;</code>

<a name="new_GuildMemberRoleManager_new"></a>

### new GuildMemberRoleManager(guildId, member, client)
Constructs a new instance of the class.


| Param | Type | Description |
| --- | --- | --- |
| guildId | <code>string</code> | The ID of the guild. |
| member | <code>GuildMember</code> | The guild member object. |
| client | <code>Client</code> | The client object. |

<a name="GuildMemberRoleManager+highest"></a>

### guildMemberRoleManager.highest ⇒
Get the highest positioned item from the cache collection.

**Kind**: instance property of [<code>GuildMemberRoleManager</code>](#GuildMemberRoleManager)  
**Returns**: The highest positioned item from the cache collection.  
<a name="GuildMemberRoleManager+cache"></a>

### guildMemberRoleManager.cache ⇒ <code>Array</code>
Retrieves the cache of objects, filtered based on the guild ID and member roles.

**Kind**: instance property of [<code>GuildMemberRoleManager</code>](#GuildMemberRoleManager)  
**Returns**: <code>Array</code> - An array of objects from the cache that match the guild ID or are included in the member roles.  
<a name="GuildMemberRoleManager+add"></a>

### guildMemberRoleManager.add(roles, reason) ⇒ <code>Promise.&lt;void&gt;</code>
Adds roles to a member in a guild.

**Kind**: instance method of [<code>GuildMemberRoleManager</code>](#GuildMemberRoleManager)  
**Returns**: <code>Promise.&lt;void&gt;</code> - A promise that resolves when the roles have been added.  
**Throws**:

- <code>RangeError</code> If an invalid role is specified or if the role cache is empty.


| Param | Type | Description |
| --- | --- | --- |
| roles | <code>Array.&lt;string&gt;</code> \| <code>RaidenCol</code> | The roles to add. Can be an array of role IDs or a RaidenCol object. |
| reason | <code>string</code> | The reason for adding the roles. |

<a name="GuildMemberRoleManager+remove"></a>

### guildMemberRoleManager.remove(roles, reason) ⇒ <code>Promise.&lt;null&gt;</code>
Removes the specified roles from the member.

**Kind**: instance method of [<code>GuildMemberRoleManager</code>](#GuildMemberRoleManager)  
**Returns**: <code>Promise.&lt;null&gt;</code> - A promise that resolves to null when the roles have been removed.  

| Param | Type | Description |
| --- | --- | --- |
| roles | <code>Array.&lt;string&gt;</code> \| <code>RaidenCol</code> | The roles to remove. Can be an array of role IDs or a RaidenCol object. |
| reason | <code>string</code> | The reason for removing the roles. |

<a name="GuildMemberRoleManager+set"></a>

### guildMemberRoleManager.set(roles, reason) ⇒ <code>Promise.&lt;void&gt;</code>
Sets the roles for a guild member.

**Kind**: instance method of [<code>GuildMemberRoleManager</code>](#GuildMemberRoleManager)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the roles are set.  

| Param | Type | Description |
| --- | --- | --- |
| roles | <code>Array.&lt;string&gt;</code> | The roles to set for the guild member. |
| reason | <code>string</code> | The reason for setting the roles. |

<a name="GuildMemberRoleManager.transformRole"></a>

### GuildMemberRoleManager.transformRole(role) ⇒ <code>Array.&lt;string&gt;</code>
Transforms the given role into an array of role IDs.

**Kind**: static method of [<code>GuildMemberRoleManager</code>](#GuildMemberRoleManager)  
**Returns**: <code>Array.&lt;string&gt;</code> - - An array of role IDs.  

| Param | Type | Description |
| --- | --- | --- |
| role | <code>RaidenCol</code> \| <code>string</code> | The role to transform. |

