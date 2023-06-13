<a name="VoiceState"></a>

## VoiceState ⇐ <code>Base</code>
It's a class that represents a user's voice state in a guild

**Kind**: global class  
**Extends**: <code>Base</code>  

* [VoiceState](#VoiceState) ⇐ <code>Base</code>
    * [new VoiceState([data], guildId, client)](#new_VoiceState_new)
    * [.guild](#VoiceState+guild) ⇒
    * [.channel](#VoiceState+channel) ⇒
    * [.user](#VoiceState+user) ⇒
    * [.edit(options)](#VoiceState+edit) ⇒
    * [.setChannel(channel, reason)](#VoiceState+setChannel) ⇒
    * [.setDeaf(deaf, reason)](#VoiceState+setDeaf) ⇒
    * [.setMute(mute, reason)](#VoiceState+setMute) ⇒
    * [.setSuppress(suppress)](#VoiceState+setSuppress) ⇒
    * [.setRequestToSpeak(requestToSpeak)](#VoiceState+setRequestToSpeak) ⇒

<a name="new_VoiceState_new"></a>

### new VoiceState([data], guildId, client)
It's a constructor for a class that is used to store voice state data.


| Param | Description |
| --- | --- |
| [data] | The data that was received from the Discord API. |
| guildId | The ID of the guild the voice state is in. |
| client | Discord.Client |

<a name="VoiceState+guild"></a>

### voiceState.guild ⇒
It returns the guild object of the guild ID that is stored in the database

**Kind**: instance property of [<code>VoiceState</code>](#VoiceState)  
**Returns**: The guild object.  
<a name="VoiceState+channel"></a>

### voiceState.channel ⇒
It returns the channel object of the channel ID that is stored in the message object

**Kind**: instance property of [<code>VoiceState</code>](#VoiceState)  
**Returns**: The channel object.  
<a name="VoiceState+user"></a>

### voiceState.user ⇒
It returns the user object of the user who sent the message

**Kind**: instance property of [<code>VoiceState</code>](#VoiceState)  
**Returns**: The user object.  
<a name="VoiceState+edit"></a>

### voiceState.edit(options) ⇒
It edits the member's settings

**Kind**: instance method of [<code>VoiceState</code>](#VoiceState)  
**Returns**: The return value is a Promise that resolves to the edited member.  

| Param | Description |
| --- | --- |
| options | An object containing the options to edit the member with. |

<a name="VoiceState+setChannel"></a>

### voiceState.setChannel(channel, reason) ⇒
It sets the channel of the invite

**Kind**: instance method of [<code>VoiceState</code>](#VoiceState)  
**Returns**: The channel that the message was sent in.  

| Param | Description |
| --- | --- |
| channel | The channel to move the member to, can be a voice channel or a category channel. |
| reason | The reason for the update. |

<a name="VoiceState+setDeaf"></a>

### voiceState.setDeaf(deaf, reason) ⇒
It sets the deaf property of the member to deaf, and the reason property of the member to reason

**Kind**: instance method of [<code>VoiceState</code>](#VoiceState)  
**Returns**: The deaf status of the member.  

| Param | Description |
| --- | --- |
| deaf | Boolean - Whether or not the member should be deafened |
| reason | The reason for the change. |

<a name="VoiceState+setMute"></a>

### voiceState.setMute(mute, reason) ⇒
It sets the mute status of a user

**Kind**: instance method of [<code>VoiceState</code>](#VoiceState)  
**Returns**: The mute status and the reason for the mute.  

| Param | Description |
| --- | --- |
| mute | Boolean - Whether or not the member should be muted. |
| reason | The reason for the mute. |

<a name="VoiceState+setSuppress"></a>

### voiceState.setSuppress(suppress) ⇒
It sets the user's voice state to suppress

**Kind**: instance method of [<code>VoiceState</code>](#VoiceState)  
**Returns**: The voice state of the user.  

| Param | Description |
| --- | --- |
| suppress | Boolean |

<a name="VoiceState+setRequestToSpeak"></a>

### voiceState.setRequestToSpeak(requestToSpeak) ⇒
It sets the request to speak status of a user in a voice channel

**Kind**: instance method of [<code>VoiceState</code>](#VoiceState)  
**Returns**: The return value is a Promise that resolves to the updated VoiceState.  

| Param | Description |
| --- | --- |
| requestToSpeak | boolean |

