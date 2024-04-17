---
title: GuildVoiceStateManager
sidebar:
  order: 29
---



## GuildVoiceStateManager ⇐ <code>VoiceStateManager</code>
Represents a voice state manager for a specific guild.

**Kind**: global class  
**Extends**: <code>VoiceStateManager</code>  

* [GuildVoiceStateManager](#GuildVoiceStateManager) ⇐ <code>VoiceStateManager</code>
    * [new GuildVoiceStateManager(guildId, client)](#new_GuildVoiceStateManager_new)
    * [.cache](#GuildVoiceStateManager+cache) ⇒ <code>Array</code>
    * [.edit(user, [options])](#GuildVoiceStateManager+edit) ⇒ <code>Promise.&lt;void&gt;</code>

<a name="new_GuildVoiceStateManager_new"></a>

### new GuildVoiceStateManager(guildId, client)
Constructs a new instance of the class.


| Param | Type | Description |
| --- | --- | --- |
| guildId | <code>string</code> | The ID of the guild. |
| client | <code>Client</code> | The client instance. |

<a name="GuildVoiceStateManager+cache"></a>

### guildVoiceStateManager.cache ⇒ <code>Array</code>
Retrieves the cache for the current guild.

**Kind**: instance property of [<code>GuildVoiceStateManager</code>](#GuildVoiceStateManager)  
**Returns**: <code>Array</code> - An array of objects from the cache that belong to the current guild.  
<a name="GuildVoiceStateManager+edit"></a>

### guildVoiceStateManager.edit(user, [options]) ⇒ <code>Promise.&lt;void&gt;</code>
Edits the voice state of a user in a guild.

**Kind**: instance method of [<code>GuildVoiceStateManager</code>](#GuildVoiceStateManager)  
**Returns**: <code>Promise.&lt;void&gt;</code> - A promise that resolves when the voice state is successfully edited.  

| Param | Type | Description |
| --- | --- | --- |
| user | <code>string</code> \| <code>User</code> | The user or user ID to edit the voice state for. |
| [options] | <code>Object</code> | The options for editing the voice state. |
| [options.channel] | <code>string</code> \| <code>Channel</code> | The channel or channel ID to move the user to. |
| [options.suppress] | <code>boolean</code> | Whether to suppress the user's audio. |
| [options.requestToSpeak] | <code>Date</code> | The timestamp for the user's request to speak. |

