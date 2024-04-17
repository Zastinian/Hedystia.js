---
title: GuildScheduledEventManager
sidebar:
  order: 23
---



## GuildScheduledEventManager ⇐ <code>ScheduledEventManager</code>
Represents a scheduled event manager for a specific guild.

**Kind**: global class  
**Extends**: <code>ScheduledEventManager</code>  

* [GuildScheduledEventManager](#GuildScheduledEventManager) ⇐ <code>ScheduledEventManager</code>
    * [new GuildScheduledEventManager(guildId, client)](#new_GuildScheduledEventManager_new)
    * [.cache](#GuildScheduledEventManager+cache) ⇒ <code>Array</code>

<a name="new_GuildScheduledEventManager_new"></a>

### new GuildScheduledEventManager(guildId, client)
Constructs a new instance of the GuildScheduledEvent class.


| Param | Type | Description |
| --- | --- | --- |
| guildId | <code>string</code> | The ID of the guild associated with the scheduled event. |
| client | <code>Client</code> | The Discord client object. |

<a name="GuildScheduledEventManager+cache"></a>

### guildScheduledEventManager.cache ⇒ <code>Array</code>
Retrieves the cache for the current guild.

**Kind**: instance property of [<code>GuildScheduledEventManager</code>](#GuildScheduledEventManager)  
**Returns**: <code>Array</code> - An array of objects from the cache that belong to the current guild.  
