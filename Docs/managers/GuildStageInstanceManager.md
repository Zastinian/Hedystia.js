---
title: GuildStageInstanceManger
sidebar:
  order: 25
---



## GuildStageInstanceManger ⇐ <code>StageInstanceManager</code>
A class that extends the StageInstanceManager class and manages stage instances for a specific guild.

**Kind**: global class  
**Extends**: <code>StageInstanceManager</code>  

* [GuildStageInstanceManger](#GuildStageInstanceManger) ⇐ <code>StageInstanceManager</code>
    * [new GuildStageInstanceManger(guildId, client)](#new_GuildStageInstanceManger_new)
    * [.cache](#GuildStageInstanceManger+cache) ⇒ <code>Array</code>

<a name="new_GuildStageInstanceManger_new"></a>

### new GuildStageInstanceManger(guildId, client)
Constructs a new instance of the class.


| Param | Type | Description |
| --- | --- | --- |
| guildId | <code>string</code> | The ID of the guild. |
| client | <code>Client</code> | The client object. |

<a name="GuildStageInstanceManger+cache"></a>

### guildStageInstanceManger.cache ⇒ <code>Array</code>
Retrieves the cache for the current guild.

**Kind**: instance property of [<code>GuildStageInstanceManger</code>](#GuildStageInstanceManger)  
**Returns**: <code>Array</code> - - An array of objects from the cache that belong to the current guild.  
