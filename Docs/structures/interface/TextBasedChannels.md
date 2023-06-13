<a name="TextBasedChannels"></a>

## TextBasedChannels
**Kind**: global class  

* [TextBasedChannels](#TextBasedChannels)
    * [new TextBasedChannels([data], guildId, client)](#new_TextBasedChannels_new)
    * [.messages](#TextBasedChannels+messages) ⇒
    * [.send(options)](#TextBasedChannels+send) ⇒
    * [.bulkDelete(messages, reason)](#TextBasedChannels+bulkDelete) ⇒
    * [.setNsfw(nsfw, reason)](#TextBasedChannels+setNsfw) ⇒
    * [.setRateLimitPerUser(ratelimit, reason)](#TextBasedChannels+setRateLimitPerUser) ⇒
    * [.triggerTyping()](#TextBasedChannels+triggerTyping) ⇒

<a name="new_TextBasedChannels_new"></a>

### new TextBasedChannels([data], guildId, client)
It's a constructor function that takes in a data object, a guildId, and a client, and then sets therateLimitPerUser, lastPinnedAt, lastPinnedTimestamp, lastMessageId, and nsfw properties of theobject to the values of the corresponding keys in the data object, or null if the key doesn't exist.


| Param | Description |
| --- | --- |
| [data] | The data that was passed to the constructor. |
| guildId | The ID of the guild the channel is in. |
| client | The client that instantiated the channel. |

<a name="TextBasedChannels+messages"></a>

### textBasedChannels.messages ⇒
It returns a new MessageManager object, which is a class that manages messages

**Kind**: instance property of [<code>TextBasedChannels</code>](#TextBasedChannels)  
**Returns**: A new instance of the MessageManager class.  
<a name="TextBasedChannels+send"></a>

### textBasedChannels.send(options) ⇒
It sends a message to the channel

**Kind**: instance method of [<code>TextBasedChannels</code>](#TextBasedChannels)  
**Returns**: The return value of the send() method.  

| Param | Description |
| --- | --- |
| options | An object containing the message to send. |

<a name="TextBasedChannels+bulkDelete"></a>

### textBasedChannels.bulkDelete(messages, reason) ⇒
It deletes messages in bulk

**Kind**: instance method of [<code>TextBasedChannels</code>](#TextBasedChannels)  
**Returns**: The return value of the function.  

| Param | Description |
| --- | --- |
| messages | The messages to delete. |
| reason | The reason for the bulk delete. |

<a name="TextBasedChannels+setNsfw"></a>

### textBasedChannels.setNsfw(nsfw, reason) ⇒
It edits the channel's nsfw property

**Kind**: instance method of [<code>TextBasedChannels</code>](#TextBasedChannels)  
**Returns**: The return value of the edit method.  

| Param | Description |
| --- | --- |
| nsfw | Boolean - Whether the channel is nsfw or not. |
| reason | The reason for the edit. |

<a name="TextBasedChannels+setRateLimitPerUser"></a>

### textBasedChannels.setRateLimitPerUser(ratelimit, reason) ⇒
It edits the ratelimit of the command

**Kind**: instance method of [<code>TextBasedChannels</code>](#TextBasedChannels)  
**Returns**: The return value of the edit function.  

| Param | Description |
| --- | --- |
| ratelimit | The ratelimit to set. |
| reason | The reason for the ratelimit. |

<a name="TextBasedChannels+triggerTyping"></a>

### textBasedChannels.triggerTyping() ⇒
It triggers typing in the channel

**Kind**: instance method of [<code>TextBasedChannels</code>](#TextBasedChannels)  
**Returns**: The return value of the function.  
