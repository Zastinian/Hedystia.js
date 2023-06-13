<a name="VoiceChannel"></a>

## VoiceChannel
**Kind**: global class  

* [VoiceChannel](#VoiceChannel)
    * [new VoiceChannel([data], guildId, client)](#new_VoiceChannel_new)
    * [.messages](#VoiceChannel+messages) ⇒
    * [.send([options])](#VoiceChannel+send) ⇒
    * [.bulkDelete(messages, reason)](#VoiceChannel+bulkDelete) ⇒
    * [.setNsfw(nsfw, reason)](#VoiceChannel+setNsfw) ⇒
    * [.setRateLimitPerUser(ratelimit, reason)](#VoiceChannel+setRateLimitPerUser) ⇒
    * [.setUserLimit(userLimit, reason)](#VoiceChannel+setUserLimit) ⇒
    * [.setVideoQualityMode(videoQualityMode, reason)](#VoiceChannel+setVideoQualityMode) ⇒
    * [.triggerTyping()](#VoiceChannel+triggerTyping) ⇒

<a name="new_VoiceChannel_new"></a>

### new VoiceChannel([data], guildId, client)
The above function is a constructor function that takes in data, guildId, and client as parametersand sets the rateLimitPerUser, lastMessageId, and nsfw properties to the data.rate_limit_per_user,data.last_message_id, and data.nsfw properties respectively.


| Param | Description |
| --- | --- |
| [data] | The data that was passed to the constructor. |
| guildId | The ID of the guild the channel is in. |
| client | The client that instantiated the channel. |

<a name="VoiceChannel+messages"></a>

### voiceChannel.messages ⇒
It returns a new MessageManager object, which is a class that manages messages

**Kind**: instance property of [<code>VoiceChannel</code>](#VoiceChannel)  
**Returns**: A new instance of the MessageManager class.  
<a name="VoiceChannel+send"></a>

### voiceChannel.send([options]) ⇒
It sends a message to the channel

**Kind**: instance method of [<code>VoiceChannel</code>](#VoiceChannel)  
**Returns**: The return value is the result of the send() method.  

| Param | Description |
| --- | --- |
| [options] | Object |

<a name="VoiceChannel+bulkDelete"></a>

### voiceChannel.bulkDelete(messages, reason) ⇒
It deletes messages in bulk

**Kind**: instance method of [<code>VoiceChannel</code>](#VoiceChannel)  
**Returns**: The return value of the function.  

| Param | Description |
| --- | --- |
| messages | The messages to delete. |
| reason | The reason for the bulk delete. |

<a name="VoiceChannel+setNsfw"></a>

### voiceChannel.setNsfw(nsfw, reason) ⇒
It edits the channel's nsfw property

**Kind**: instance method of [<code>VoiceChannel</code>](#VoiceChannel)  
**Returns**: The edited channel.  

| Param | Description |
| --- | --- |
| nsfw | Boolean - Whether the channel is nsfw or not. |
| reason | The reason for the edit. |

<a name="VoiceChannel+setRateLimitPerUser"></a>

### voiceChannel.setRateLimitPerUser(ratelimit, reason) ⇒
It edits the ratelimit of a command

**Kind**: instance method of [<code>VoiceChannel</code>](#VoiceChannel)  
**Returns**: The return value of the edit function.  

| Param | Description |
| --- | --- |
| ratelimit | The ratelimit to set. |
| reason | The reason for the ratelimit. |

<a name="VoiceChannel+setUserLimit"></a>

### voiceChannel.setUserLimit(userLimit, reason) ⇒
It sets the user limit of a channel

**Kind**: instance method of [<code>VoiceChannel</code>](#VoiceChannel)  
**Returns**: The userLimit and reason are being returned.  

| Param | Description |
| --- | --- |
| userLimit | The new user limit of the channel. |
| reason | The reason for the edit. |

<a name="VoiceChannel+setVideoQualityMode"></a>

### voiceChannel.setVideoQualityMode(videoQualityMode, reason) ⇒
This function sets the video quality mode to the given value, and returns a promise that resolvesto the new value of the video quality mode.

**Kind**: instance method of [<code>VoiceChannel</code>](#VoiceChannel)  
**Returns**: The return value of the edit function.  

| Param | Description |
| --- | --- |
| videoQualityMode | The video quality mode to set. |
| reason | The reason for the change. |

<a name="VoiceChannel+triggerTyping"></a>

### voiceChannel.triggerTyping() ⇒
It triggers typing in the channel

**Kind**: instance method of [<code>VoiceChannel</code>](#VoiceChannel)  
**Returns**: The return value of the function.  
