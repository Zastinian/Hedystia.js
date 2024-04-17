---
title: TextBasedChannels
sidebar:
  order: 48
---



## TextBasedChannels
**Kind**: global class  

* [TextBasedChannels](#TextBasedChannels)
    * [new TextBasedChannels([data], guildId, client)](#new_TextBasedChannels_new)
    * [.messages](#TextBasedChannels+messages) ⇒ <code>MessageManager</code>
    * [.send(options)](#TextBasedChannels+send) ⇒ <code>Promise</code>
    * [.bulkDelete(messages, reason)](#TextBasedChannels+bulkDelete) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.setNsfw(nsfw, reason)](#TextBasedChannels+setNsfw) ⇒ <code>Promise</code>
    * [.setRateLimitPerUser(ratelimit, reason)](#TextBasedChannels+setRateLimitPerUser) ⇒ <code>Promise</code>
    * [.triggerTyping()](#TextBasedChannels+triggerTyping) ⇒ <code>Promise.&lt;void&gt;</code>

<a name="new_TextBasedChannels_new"></a>

### new TextBasedChannels([data], guildId, client)
Constructs a new instance of the Channel class.


| Param | Type | Description |
| --- | --- | --- |
| [data] | <code>Object</code> | The data object containing the channel information. |
| guildId | <code>string</code> | The ID of the guild that the channel belongs to. |
| client | <code>Client</code> | The client instance. |

<a name="TextBasedChannels+messages"></a>

### textBasedChannels.messages ⇒ <code>MessageManager</code>
Get the message manager for this channel.

**Kind**: instance property of [<code>TextBasedChannels</code>](#TextBasedChannels)  
**Returns**: <code>MessageManager</code> - The message manager object for this channel.  
<a name="TextBasedChannels+send"></a>

### textBasedChannels.send(options) ⇒ <code>Promise</code>
Sends a message using the specified options.

**Kind**: instance method of [<code>TextBasedChannels</code>](#TextBasedChannels)  
**Returns**: <code>Promise</code> - A promise that resolves when the message is sent.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> | The options for sending the message. |

<a name="TextBasedChannels+bulkDelete"></a>

### textBasedChannels.bulkDelete(messages, reason) ⇒ <code>Promise.&lt;void&gt;</code>
Bulk deletes the specified messages from the channel.

**Kind**: instance method of [<code>TextBasedChannels</code>](#TextBasedChannels)  
**Returns**: <code>Promise.&lt;void&gt;</code> - A promise that resolves when the messages are deleted.  

| Param | Type | Description |
| --- | --- | --- |
| messages | <code>Array.&lt;Message&gt;</code> | The messages to delete. |
| reason | <code>string</code> | The reason for deleting the messages. |

<a name="TextBasedChannels+setNsfw"></a>

### textBasedChannels.setNsfw(nsfw, reason) ⇒ <code>Promise</code>
Sets the NSFW (Not Safe for Work) flag for the current item.

**Kind**: instance method of [<code>TextBasedChannels</code>](#TextBasedChannels)  
**Returns**: <code>Promise</code> - - A promise that resolves when the NSFW flag is successfully set.  

| Param | Type | Description |
| --- | --- | --- |
| nsfw | <code>boolean</code> | The NSFW flag value to set. |
| reason | <code>string</code> | The reason for setting the NSFW flag. |

<a name="TextBasedChannels+setRateLimitPerUser"></a>

### textBasedChannels.setRateLimitPerUser(ratelimit, reason) ⇒ <code>Promise</code>
Sets the rate limit per user for a specific action.

**Kind**: instance method of [<code>TextBasedChannels</code>](#TextBasedChannels)  
**Returns**: <code>Promise</code> - - A promise that resolves when the rate limit is successfully set.  

| Param | Type | Description |
| --- | --- | --- |
| ratelimit | <code>number</code> | The new rate limit value to set. |
| reason | <code>string</code> | The reason for setting the rate limit. |

<a name="TextBasedChannels+triggerTyping"></a>

### textBasedChannels.triggerTyping() ⇒ <code>Promise.&lt;void&gt;</code>
Triggers a typing indicator in the channel where this method is called.

**Kind**: instance method of [<code>TextBasedChannels</code>](#TextBasedChannels)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the typing indicator is triggered.  
