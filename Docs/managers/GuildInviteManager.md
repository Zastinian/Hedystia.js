---
title: GuildInviteManager
sidebar:
  order: 16
---



## GuildInviteManager ⇐ <code>Base</code>
Represents a manager for handling guild invites.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [GuildInviteManager](#GuildInviteManager) ⇐ <code>Base</code>
    * [new GuildInviteManager(guild, client)](#new_GuildInviteManager_new)
    * [.cache](#GuildInviteManager+cache) ⇒
    * [._add(invites, [guild], [options])](#GuildInviteManager+_add) ⇒ <code>Invite</code> \| <code>null</code>
    * [.fetch([options])](#GuildInviteManager+fetch) ⇒ <code>Promise.&lt;CacheConstructor&gt;</code>
    * [.delete(invite, reason)](#GuildInviteManager+delete) ⇒ <code>Promise</code>

<a name="new_GuildInviteManager_new"></a>

### new GuildInviteManager(guild, client)
Constructs a new instance of the class.


| Param | Type | Description |
| --- | --- | --- |
| guild | <code>Guild</code> | The guild associated with the invite manager. |
| client | <code>Client</code> | The client instance. |

<a name="GuildInviteManager+cache"></a>

### guildInviteManager.cache ⇒
Getter method for the cache property.

**Kind**: instance property of [<code>GuildInviteManager</code>](#GuildInviteManager)  
**Returns**: The Collection object representing the cache.  
<a name="GuildInviteManager+_add"></a>

### guildInviteManager.\_add(invites, [guild], [options]) ⇒ <code>Invite</code> \| <code>null</code>
Adds an invite to the guild's invite cache.

**Kind**: instance method of [<code>GuildInviteManager</code>](#GuildInviteManager)  
**Returns**: <code>Invite</code> \| <code>null</code> - The added invite or null if no invite is provided.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| invites | <code>string</code> \| <code>Invite</code> |  | The invite code or Invite object to add. |
| [guild] | <code>Guild</code> | <code>this.guild</code> | The guild to add the invite to. |
| [options] | <code>Object</code> | <code>{cache: true, force: false}</code> | Additional options for adding the invite. |
| [options.cache] | <code>boolean</code> | <code>true</code> | Whether to cache the invite. |
| [options.force] | <code>boolean</code> | <code>false</code> | Whether to force the retrieval of the invite from the cache. |

<a name="GuildInviteManager+fetch"></a>

### guildInviteManager.fetch([options]) ⇒ <code>Promise.&lt;CacheConstructor&gt;</code>
Fetches guild invites from the API and returns a new cache constructor with the fetched data.

**Kind**: instance method of [<code>GuildInviteManager</code>](#GuildInviteManager)  
**Returns**: <code>Promise.&lt;CacheConstructor&gt;</code> - A promise that resolves to a new cache constructor with the fetched data.  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | Optional parameters for the fetch request. |
| [options.cache] | <code>boolean</code> | Whether to use cached data or not. |
| [options.force] | <code>boolean</code> | Whether to force a fresh fetch or not. |

<a name="GuildInviteManager+delete"></a>

### guildInviteManager.delete(invite, reason) ⇒ <code>Promise</code>
Deletes an invitation with the specified code and reason.

**Kind**: instance method of [<code>GuildInviteManager</code>](#GuildInviteManager)  
**Returns**: <code>Promise</code> - A promise that resolves with the deleted invitation.  
**Throws**:

- <code>RangeError</code> If no invitation code is specified.


| Param | Type | Description |
| --- | --- | --- |
| invite | <code>string</code> \| <code>object</code> | The invitation code or object to delete. |
| reason | <code>string</code> | The reason for deleting the invitation. |

