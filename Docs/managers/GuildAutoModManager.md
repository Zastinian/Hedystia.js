---
title: GuildAutoModManager
sidebar:
  order: 10
---



## GuildAutoModManager ⇐ <code>AutoModManager</code>
Represents a manager for guild-specific auto moderation settings.

**Kind**: global class  
**Extends**: <code>AutoModManager</code>  

* [GuildAutoModManager](#GuildAutoModManager) ⇐ <code>AutoModManager</code>
    * [new GuildAutoModManager(guildId, client)](#new_GuildAutoModManager_new)
    * [.cache](#GuildAutoModManager+cache) ⇒ <code>Array</code>

<a name="new_GuildAutoModManager_new"></a>

### new GuildAutoModManager(guildId, client)
Constructs a new instance of the class.


| Param | Type | Description |
| --- | --- | --- |
| guildId | <code>string</code> | The ID of the guild. |
| client | <code>Client</code> | The client object. |

<a name="GuildAutoModManager+cache"></a>

### guildAutoModManager.cache ⇒ <code>Array</code>
Retrieves the cache for the current guild.

**Kind**: instance property of [<code>GuildAutoModManager</code>](#GuildAutoModManager)  
**Returns**: <code>Array</code> - An array of objects from the cache that belong to the current guild.  
