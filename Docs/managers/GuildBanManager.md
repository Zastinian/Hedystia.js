---
title: GuildBanManager
sidebar:
  order: 11
---



## GuildBanManager ⇐ <code>Base</code>
Represents a manager for handling guild bans.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [GuildBanManager](#GuildBanManager) ⇐ <code>Base</code>
    * [new GuildBanManager(guildId, client)](#new_GuildBanManager_new)
    * _instance_
        * [.cache](#GuildBanManager+cache) ⇒
        * [._add(bans, [guildId], [options])](#GuildBanManager+_add) ⇒ <code>GuildBan</code> \| <code>null</code>
        * [.create(user, [options])](#GuildBanManager+create) ⇒ <code>Promise.&lt;GuildBan&gt;</code>
        * [.remove(user, reason)](#GuildBanManager+remove) ⇒ <code>Promise.&lt;Ban&gt;</code>
        * [.fetch(ban, options)](#GuildBanManager+fetch) ⇒ <code>Promise.&lt;object&gt;</code>
        * [._fetchId(ban, [cache], [force])](#GuildBanManager+_fetchId) ⇒ <code>Promise.&lt;object&gt;</code>
    * _static_
        * [.transformPayloadd(o)](#GuildBanManager.transformPayloadd) ⇒ <code>Object</code>

<a name="new_GuildBanManager_new"></a>

### new GuildBanManager(guildId, client)
Constructs a new instance of the class.


| Param | Type | Description |
| --- | --- | --- |
| guildId | <code>string</code> | The ID of the guild. |
| client | <code>Client</code> | The client instance. |

<a name="GuildBanManager+cache"></a>

### guildBanManager.cache ⇒
Getter method for the cache property.

**Kind**: instance property of [<code>GuildBanManager</code>](#GuildBanManager)  
**Returns**: The Collection object representing the cache.  
<a name="GuildBanManager+_add"></a>

### guildBanManager.\_add(bans, [guildId], [options]) ⇒ <code>GuildBan</code> \| <code>null</code>
Adds a ban to the guild's ban cache.

**Kind**: instance method of [<code>GuildBanManager</code>](#GuildBanManager)  
**Returns**: <code>GuildBan</code> \| <code>null</code> - - The added GuildBan object, or null if the ban is  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| bans | <code>string</code> \| <code>GuildBan</code> |  | The ban ID or GuildBan object to add. |
| [guildId] | <code>string</code> | <code>&quot;this.guildId&quot;</code> | The ID of the guild to add the ban to. |
| [options] | <code>object</code> | <code>{cache: true, force: false}</code> | Additional options for adding the ban. |
| [options.cache] | <code>boolean</code> | <code>true</code> | Whether to cache the ban. |
| [options.force] | <code>boolean</code> | <code>false</code> | Whether to force adding the ban even if it already exists in the cache. |

<a name="GuildBanManager+create"></a>

### guildBanManager.create(user, [options]) ⇒ <code>Promise.&lt;GuildBan&gt;</code>
Creates a ban for a user in the guild.

**Kind**: instance method of [<code>GuildBanManager</code>](#GuildBanManager)  
**Returns**: <code>Promise.&lt;GuildBan&gt;</code> - A promise that resolves with the created GuildBan object.  
**Throws**:

- <code>Error</code> If the API request fails.


| Param | Type | Description |
| --- | --- | --- |
| user | <code>string</code> \| <code>User</code> | The user to ban. Can be a user ID or a User object. |
| [options] | <code>Object</code> | Additional options for the ban. |
| [options.reason] | <code>string</code> | The reason for the ban. |

<a name="GuildBanManager+remove"></a>

### guildBanManager.remove(user, reason) ⇒ <code>Promise.&lt;Ban&gt;</code>
Removes a user from the ban list in the guild.

**Kind**: instance method of [<code>GuildBanManager</code>](#GuildBanManager)  
**Returns**: <code>Promise.&lt;Ban&gt;</code> - A promise that resolves with the ban object of the removed user.  

| Param | Type | Description |
| --- | --- | --- |
| user | <code>string</code> \| <code>User</code> | The user to remove from the ban list. Can be a user ID or a User object. |
| reason | <code>string</code> | The reason for removing the user from the ban list. |

<a name="GuildBanManager+fetch"></a>

### guildBanManager.fetch(ban, options) ⇒ <code>Promise.&lt;object&gt;</code>
Fetches ban information from the server.

**Kind**: instance method of [<code>GuildBanManager</code>](#GuildBanManager)  
**Returns**: <code>Promise.&lt;object&gt;</code> - - A promise that resolves to the fetched ban information.  

| Param | Type | Description |
| --- | --- | --- |
| ban | <code>string</code> \| <code>object</code> | The ban ID or ban object. |
| options | <code>object</code> | Additional options for the fetch. |
| options.cache | <code>boolean</code> | Whether to use cached data. |
| options.force | <code>boolean</code> | Whether to force a fresh fetch. |

<a name="GuildBanManager+_fetchId"></a>

### guildBanManager.\_fetchId(ban, [cache], [force]) ⇒ <code>Promise.&lt;object&gt;</code>
Fetches the ID of a ban from the server.

**Kind**: instance method of [<code>GuildBanManager</code>](#GuildBanManager)  
**Returns**: <code>Promise.&lt;object&gt;</code> - - The fetched ban object.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| ban | <code>string</code> \| <code>object</code> |  | The ban object or the ID of the ban. |
| [cache] | <code>boolean</code> | <code>true</code> | Whether to cache the fetched ban. |
| [force] | <code>boolean</code> | <code>false</code> | Whether to force fetching the ban even if it is already cached. |

<a name="GuildBanManager.transformPayloadd"></a>

### GuildBanManager.transformPayloadd(o) ⇒ <code>Object</code>
Transforms the payload object for deleting messages.

**Kind**: static method of [<code>GuildBanManager</code>](#GuildBanManager)  
**Returns**: <code>Object</code> - The transformed payload object.  
**Throws**:

- <code>RangeError</code> If the days value is less than 0 or greater than 7.


| Param | Type | Description |
| --- | --- | --- |
| o | <code>Object</code> | The payload object. |
| o.days | <code>number</code> | The number of days to delete messages. |

