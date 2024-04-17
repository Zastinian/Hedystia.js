---
title: StageInstance
sidebar:
  order: 59
---



## StageInstance ⇐ <code>Base</code>
Represents a Stage Instance in a guild.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [StageInstance](#StageInstance) ⇐ <code>Base</code>
    * [new StageInstance([data], guildId, client)](#new_StageInstance_new)
    * [.guild](#StageInstance+guild) ⇒
    * [.channel](#StageInstance+channel) ⇒
    * [.guildScheduledEvent](#StageInstance+guildScheduledEvent) ⇒ <code>ScheduledEvent</code> \| <code>null</code>
    * [.fetch(options)](#StageInstance+fetch) ⇒ [<code>Promise.&lt;StageInstance&gt;</code>](#StageInstance)
    * [.edit(options)](#StageInstance+edit) ⇒ <code>Promise</code>
    * [.delete(reason)](#StageInstance+delete) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.setTopic(topic, reason)](#StageInstance+setTopic) ⇒ <code>Promise</code>
    * [.setPrivacyLevel(privacyLevel, reason)](#StageInstance+setPrivacyLevel) ⇒ <code>Promise</code>

<a name="new_StageInstance_new"></a>

### new StageInstance([data], guildId, client)
Constructs a new instance of a Channel object.


| Param | Type | Description |
| --- | --- | --- |
| [data] | <code>Object</code> | The data for the Stage Instance. |
| guildId | <code>string</code> | The ID of the guild the Stage Instance belongs to. |
| client | <code>Client</code> | The client instance. |

<a name="StageInstance+guild"></a>

### stageInstance.guild ⇒
Retrieves the guild associated with this guildId.

**Kind**: instance property of [<code>StageInstance</code>](#StageInstance)  
**Returns**: The guild object if found, otherwise null.  
<a name="StageInstance+channel"></a>

### stageInstance.channel ⇒
Retrieves the channel associated with this object.

**Kind**: instance property of [<code>StageInstance</code>](#StageInstance)  
**Returns**: The channel object if found, otherwise null.  
<a name="StageInstance+guildScheduledEvent"></a>

### stageInstance.guildScheduledEvent ⇒ <code>ScheduledEvent</code> \| <code>null</code>
Retrieves the scheduled event associated with the guild.

**Kind**: instance property of [<code>StageInstance</code>](#StageInstance)  
**Returns**: <code>ScheduledEvent</code> \| <code>null</code> - The scheduled event object if found, otherwise null.  
<a name="StageInstance+fetch"></a>

### stageInstance.fetch(options) ⇒ [<code>Promise.&lt;StageInstance&gt;</code>](#StageInstance)
Fetches the stage instance for the given channel ID using the provided options.

**Kind**: instance method of [<code>StageInstance</code>](#StageInstance)  
**Returns**: [<code>Promise.&lt;StageInstance&gt;</code>](#StageInstance) - A promise that resolves with the fetched stage instance.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options to pass to the fetch request. |

<a name="StageInstance+edit"></a>

### stageInstance.edit(options) ⇒ <code>Promise</code>
Edits the stage instance with the given options.

**Kind**: instance method of [<code>StageInstance</code>](#StageInstance)  
**Returns**: <code>Promise</code> - A promise that resolves when the stage instance is successfully edited.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options to edit the stage instance. |

<a name="StageInstance+delete"></a>

### stageInstance.delete(reason) ⇒ <code>Promise.&lt;void&gt;</code>
Deletes the stage instance associated with the channel.

**Kind**: instance method of [<code>StageInstance</code>](#StageInstance)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the stage instance is deleted.  

| Param | Type | Description |
| --- | --- | --- |
| reason | <code>string</code> | The reason for deleting the stage instance. |

<a name="StageInstance+setTopic"></a>

### stageInstance.setTopic(topic, reason) ⇒ <code>Promise</code>
Sets the topic of the current object and provides a reason for the change.

**Kind**: instance method of [<code>StageInstance</code>](#StageInstance)  
**Returns**: <code>Promise</code> - - A promise that resolves when the topic is successfully set.  

| Param | Type | Description |
| --- | --- | --- |
| topic | <code>string</code> | The new topic to set. |
| reason | <code>string</code> | The reason for changing the topic. |

<a name="StageInstance+setPrivacyLevel"></a>

### stageInstance.setPrivacyLevel(privacyLevel, reason) ⇒ <code>Promise</code>
Sets the privacy level for the current user.

**Kind**: instance method of [<code>StageInstance</code>](#StageInstance)  
**Returns**: <code>Promise</code> - - A promise that resolves when the privacy level is successfully set.  

| Param | Type | Description |
| --- | --- | --- |
| privacyLevel | <code>string</code> | The privacy level to set. |
| reason | <code>string</code> | The reason for setting the privacy level. |

