<a name="VoiceChannel"></a>

## VoiceChannel ⇐ <code>VoiceBasedChannels</code>
Represents a voice channel in a guild.

**Kind**: global class  
**Extends**: <code>VoiceBasedChannels</code>  

* [VoiceChannel](#VoiceChannel) ⇐ <code>VoiceBasedChannels</code>
    * [new VoiceChannel([data], guildId, client)](#new_VoiceChannel_new)
    * [.messages](#VoiceChannel+messages) ⇒ <code>MessageManager</code>
    * [.send(options)](#VoiceChannel+send) ⇒ <code>Promise</code>
    * [.bulkDelete(messages, reason)](#VoiceChannel+bulkDelete) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.setNsfw(nsfw, reason)](#VoiceChannel+setNsfw) ⇒ <code>Promise</code>
    * [.setRateLimitPerUser(ratelimit, reason)](#VoiceChannel+setRateLimitPerUser) ⇒ <code>Promise</code>
    * [.setUserLimit(userLimit, reason)](#VoiceChannel+setUserLimit) ⇒ <code>Promise</code>
    * [.setVideoQualityMode(videoQualityMode, reason)](#VoiceChannel+setVideoQualityMode) ⇒ <code>Promise</code>
    * [.triggerTyping()](#VoiceChannel+triggerTyping) ⇒ <code>Promise.&lt;void&gt;</code>

<a name="new_VoiceChannel_new"></a>

### new VoiceChannel([data], guildId, client)
Constructs a new instance of the class.


| Param | Type | Description |
| --- | --- | --- |
| [data] | <code>Object</code> | The data object containing the properties for the instance. |
| guildId | <code>string</code> | The ID of the guild associated with the instance. |
| client | <code>Client</code> | The client object associated with the instance. |

<a name="VoiceChannel+messages"></a>

### voiceChannel.messages ⇒ <code>MessageManager</code>
Get the message manager for this channel.

**Kind**: instance property of [<code>VoiceChannel</code>](#VoiceChannel)  
**Returns**: <code>MessageManager</code> - The message manager object for this channel.  
<a name="VoiceChannel+send"></a>

### voiceChannel.send(options) ⇒ <code>Promise</code>
Sends a message using the specified options.

**Kind**: instance method of [<code>VoiceChannel</code>](#VoiceChannel)  
**Returns**: <code>Promise</code> - A promise that resolves when the message is sent.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> | The options for sending the message. |

<a name="VoiceChannel+bulkDelete"></a>

### voiceChannel.bulkDelete(messages, reason) ⇒ <code>Promise.&lt;void&gt;</code>
Bulk deletes the specified messages with the given reason.

**Kind**: instance method of [<code>VoiceChannel</code>](#VoiceChannel)  
**Returns**: <code>Promise.&lt;void&gt;</code> - A promise that resolves when the messages are deleted.  

| Param | Type | Description |
| --- | --- | --- |
| messages | <code>Array.&lt;Message&gt;</code> | The messages to be deleted. |
| reason | <code>string</code> | The reason for deleting the messages. |

<a name="VoiceChannel+setNsfw"></a>

### voiceChannel.setNsfw(nsfw, reason) ⇒ <code>Promise</code>
Sets the NSFW (Not Safe for Work) flag for the current item.

**Kind**: instance method of [<code>VoiceChannel</code>](#VoiceChannel)  
**Returns**: <code>Promise</code> - - A promise that resolves when the NSFW flag is set.  

| Param | Type | Description |
| --- | --- | --- |
| nsfw | <code>boolean</code> | The NSFW flag value to set. |
| reason | <code>string</code> | The reason for setting the NSFW flag. |

<a name="VoiceChannel+setRateLimitPerUser"></a>

### voiceChannel.setRateLimitPerUser(ratelimit, reason) ⇒ <code>Promise</code>
Sets the rate limit per user for a specific action.

**Kind**: instance method of [<code>VoiceChannel</code>](#VoiceChannel)  
**Returns**: <code>Promise</code> - - A promise that resolves when the rate limit is successfully set.  

| Param | Type | Description |
| --- | --- | --- |
| ratelimit | <code>number</code> | The new rate limit value to set. |
| reason | <code>string</code> | The reason for setting the rate limit. |

<a name="VoiceChannel+setUserLimit"></a>

### voiceChannel.setUserLimit(userLimit, reason) ⇒ <code>Promise</code>
Sets the user limit for the current channel and provides a reason for the change.

**Kind**: instance method of [<code>VoiceChannel</code>](#VoiceChannel)  
**Returns**: <code>Promise</code> - - A promise that resolves when the user limit is successfully set.  

| Param | Type | Description |
| --- | --- | --- |
| userLimit | <code>number</code> | The new user limit for the channel. |
| reason | <code>string</code> | The reason for changing the user limit. |

<a name="VoiceChannel+setVideoQualityMode"></a>

### voiceChannel.setVideoQualityMode(videoQualityMode, reason) ⇒ <code>Promise</code>
Sets the video quality mode with the given parameters.

**Kind**: instance method of [<code>VoiceChannel</code>](#VoiceChannel)  
**Returns**: <code>Promise</code> - - A promise that resolves when the video quality mode is set.  

| Param | Type | Description |
| --- | --- | --- |
| videoQualityMode | <code>string</code> | The video quality mode to set. |
| reason | <code>string</code> | The reason for setting the video quality mode. |

<a name="VoiceChannel+triggerTyping"></a>

### voiceChannel.triggerTyping() ⇒ <code>Promise.&lt;void&gt;</code>
Triggers a typing indicator in the channel where this method is called.

**Kind**: instance method of [<code>VoiceChannel</code>](#VoiceChannel)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the typing indicator is triggered.  
