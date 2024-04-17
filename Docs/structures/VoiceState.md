---
title: VoiceState
sidebar:
  order: 72
---



## VoiceState ⇐ <code>Base</code>
Represents the state of a voice connection for a user in a guild.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [VoiceState](#VoiceState) ⇐ <code>Base</code>
    * [new VoiceState([data], guildId, client)](#new_VoiceState_new)
    * [.guild](#VoiceState+guild) ⇒
    * [.channel](#VoiceState+channel) ⇒ <code>Channel</code> \| <code>null</code>
    * [.user](#VoiceState+user) ⇒ <code>User</code> \| <code>null</code>
    * [.edit(options)](#VoiceState+edit) ⇒ <code>Promise</code>
    * [.setChannel(channel, reason)](#VoiceState+setChannel) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.setDeaf(deaf, reason)](#VoiceState+setDeaf) ⇒ <code>Promise</code>
    * [.setMute(mute, reason)](#VoiceState+setMute) ⇒ <code>Promise</code>
    * [.setSuppress(suppress)](#VoiceState+setSuppress) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.setRequestToSpeak(requestToSpeak)](#VoiceState+setRequestToSpeak) ⇒ <code>Promise.&lt;void&gt;</code>

<a name="new_VoiceState_new"></a>

### new VoiceState([data], guildId, client)
Constructs a new instance of the class.


| Param | Type | Description |
| --- | --- | --- |
| [data] | <code>Object</code> | The data for the voice state. |
| guildId | <code>string</code> | The ID of the guild the voice state belongs to. |
| client | <code>Client</code> | The client instance. |

<a name="VoiceState+guild"></a>

### voiceState.guild ⇒
Retrieves the guild associated with this guildId.

**Kind**: instance property of [<code>VoiceState</code>](#VoiceState)  
**Returns**: The guild object if found, otherwise null.  
<a name="VoiceState+channel"></a>

### voiceState.channel ⇒ <code>Channel</code> \| <code>null</code>
Retrieves the channel object associated with this instance.

**Kind**: instance property of [<code>VoiceState</code>](#VoiceState)  
**Returns**: <code>Channel</code> \| <code>null</code> - The channel object, or null if it does not exist.  
<a name="VoiceState+user"></a>

### voiceState.user ⇒ <code>User</code> \| <code>null</code>
Retrieves the user associated with this instance.

**Kind**: instance property of [<code>VoiceState</code>](#VoiceState)  
**Returns**: <code>User</code> \| <code>null</code> - The user object if found, otherwise null.  
<a name="VoiceState+edit"></a>

### voiceState.edit(options) ⇒ <code>Promise</code>
Edits the user's guild member profile with the given options.

**Kind**: instance method of [<code>VoiceState</code>](#VoiceState)  
**Returns**: <code>Promise</code> - A promise that resolves when the edit is complete.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options to edit the guild member profile. |

<a name="VoiceState+setChannel"></a>

### voiceState.setChannel(channel, reason) ⇒ <code>Promise.&lt;void&gt;</code>
Sets the channel for the current object and updates it with the given reason.

**Kind**: instance method of [<code>VoiceState</code>](#VoiceState)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the channel is successfully set.  

| Param | Type | Description |
| --- | --- | --- |
| channel | <code>Channel</code> | The channel to set. |
| reason | <code>string</code> | The reason for setting the channel. |

<a name="VoiceState+setDeaf"></a>

### voiceState.setDeaf(deaf, reason) ⇒ <code>Promise</code>
Sets the deaf status of the user.

**Kind**: instance method of [<code>VoiceState</code>](#VoiceState)  
**Returns**: <code>Promise</code> - - A promise that resolves when the deaf status is set.  

| Param | Type | Description |
| --- | --- | --- |
| deaf | <code>boolean</code> | Whether the user should be deafened or not. |
| reason | <code>string</code> | The reason for setting the deaf status. |

<a name="VoiceState+setMute"></a>

### voiceState.setMute(mute, reason) ⇒ <code>Promise</code>
Sets the mute status and reason for an object.

**Kind**: instance method of [<code>VoiceState</code>](#VoiceState)  
**Returns**: <code>Promise</code> - - A promise that resolves when the mute status and reason are set.  

| Param | Type | Description |
| --- | --- | --- |
| mute | <code>boolean</code> | The mute status to set. |
| reason | <code>string</code> | The reason for muting. |

<a name="VoiceState+setSuppress"></a>

### voiceState.setSuppress(suppress) ⇒ <code>Promise.&lt;void&gt;</code>
Sets the suppress property of the voice state for the user in the guild.

**Kind**: instance method of [<code>VoiceState</code>](#VoiceState)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the suppress property is set.  

| Param | Type | Description |
| --- | --- | --- |
| suppress | <code>boolean</code> | The value to set for the suppress property. |

<a name="VoiceState+setRequestToSpeak"></a>

### voiceState.setRequestToSpeak(requestToSpeak) ⇒ <code>Promise.&lt;void&gt;</code>
Sets the "request to speak" status for the user in the guild's voice channel.

**Kind**: instance method of [<code>VoiceState</code>](#VoiceState)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the request to speak status is set.  

| Param | Type | Description |
| --- | --- | --- |
| requestToSpeak | <code>boolean</code> | The value indicating whether the user wants to request to speak. |

