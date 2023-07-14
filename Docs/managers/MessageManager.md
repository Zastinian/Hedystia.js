<a name="MessageManager"></a>

## MessageManager ⇐ <code>Base</code>
Represents a message manager for a specific guild and channel.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [MessageManager](#MessageManager) ⇐ <code>Base</code>
    * [new MessageManager(guildId, channelId, client)](#new_MessageManager_new)
    * _instance_
        * [.guild](#MessageManager+guild) ⇒
        * [.cache](#MessageManager+cache) ⇒
        * [._add(messages, [guildId], [channelId], [options])](#MessageManager+_add)
        * [.send([channel], [options])](#MessageManager+send) ⇒ <code>Promise.&lt;Message&gt;</code>
        * [.bulkDelete([channel], [message], [reason])](#MessageManager+bulkDelete) ⇒ <code>Promise.&lt;Array&gt;</code>
        * [.delete(message, reason)](#MessageManager+delete) ⇒ <code>Promise.&lt;Message&gt;</code>
        * [.edit(message, options)](#MessageManager+edit) ⇒ <code>Promise.&lt;Message&gt;</code>
        * [.fetch(message, [options])](#MessageManager+fetch) ⇒ <code>Promise.&lt;(Message\|Map.&lt;string, Message&gt;)&gt;</code>
        * [._fetchId(message, [cache], [force])](#MessageManager+_fetchId) ⇒ <code>Promise.&lt;object&gt;</code>
        * [.crosspost(channel, message)](#MessageManager+crosspost) ⇒ <code>Promise.&lt;Message&gt;</code>
        * [.react(message, emoji)](#MessageManager+react) ⇒ <code>Promise.&lt;void&gt;</code>
        * [.pins()](#MessageManager+pins) ⇒ <code>Promise.&lt;Cache&gt;</code>
        * [.unpin(message, reason)](#MessageManager+unpin) ⇒ <code>Promise.&lt;void&gt;</code>
        * [.pin(message, reason)](#MessageManager+pin) ⇒ <code>Promise.&lt;void&gt;</code>
    * _static_
        * [.transformOptions(o)](#MessageManager.transformOptions) ⇒ <code>Object</code> \| <code>null</code>

<a name="new_MessageManager_new"></a>

### new MessageManager(guildId, channelId, client)
Constructs a new instance of the class.


| Param | Type | Description |
| --- | --- | --- |
| guildId | <code>string</code> | The ID of the guild. |
| channelId | <code>string</code> | The ID of the channel. |
| client | <code>Client</code> | The client instance. |

<a name="MessageManager+guild"></a>

### messageManager.guild ⇒
Retrieves the guild associated with this guildId.

**Kind**: instance property of [<code>MessageManager</code>](#MessageManager)  
**Returns**: The guild object if found, otherwise null.  
<a name="MessageManager+cache"></a>

### messageManager.cache ⇒
Getter method for the cache property.

**Kind**: instance property of [<code>MessageManager</code>](#MessageManager)  
**Returns**: The Collection object representing the cache.  
<a name="MessageManager+_add"></a>

### messageManager.\_add(messages, [guildId], [channelId], [options])
Adds a message to the cache and returns the message object.

**Kind**: instance method of [<code>MessageManager</code>](#MessageManager)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| messages | <code>string</code> \| <code>Message</code> |  | The message or message ID to add to the cache. |
| [guildId] | <code>string</code> | <code>&quot;this.guildId&quot;</code> | The ID of the guild the message belongs to. |
| [channelId] | <code>string</code> | <code>&quot;this.channelId&quot;</code> | The ID of the channel the message belongs to. |
| [options] | <code>object</code> | <code>{cache: true, force: false}</code> | Additional options for adding the message. |
| [options.cache] | <code>boolean</code> | <code>true</code> | Whether to cache the message. |
| [options.force] | <code>boolean</code> | <code>false</code> | Whether to force adding the message to the cache even if it |

<a name="MessageManager+send"></a>

### messageManager.send([channel], [options]) ⇒ <code>Promise.&lt;Message&gt;</code>
Sends a message to a specified channel.

**Kind**: instance method of [<code>MessageManager</code>](#MessageManager)  
**Returns**: <code>Promise.&lt;Message&gt;</code> - A promise that resolves with the sent message.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [channel] | <code>string</code> \| <code>Channel</code> | <code>&quot;this.channelId&quot;</code> | The channel to send the message to. Can be either a channel ID or a Channel object. |
| [options] | <code>object</code> |  | Additional options for the message. |

<a name="MessageManager+bulkDelete"></a>

### messageManager.bulkDelete([channel], [message], [reason]) ⇒ <code>Promise.&lt;Array&gt;</code>
Bulk deletes messages in a channel.

**Kind**: instance method of [<code>MessageManager</code>](#MessageManager)  
**Returns**: <code>Promise.&lt;Array&gt;</code> - - A promise that resolves to an array of deleted message IDs and their corresponding Message objects.  
**Throws**:

- <code>RangeError</code> 


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [channel] | <code>string</code> \| <code>Channel</code> | <code>&quot;this.channelId&quot;</code> | The channel ID or Channel object where the messages should be deleted. |
| [message] | <code>Array.&lt;Message&gt;</code> \| <code>Map.&lt;string, Message&gt;</code> \| <code>number</code> | <code>[]</code> | The messages to be deleted. Can be an array of Message objects, a Map of Message objects, or a number representing the number of messages to fetch and delete. |
| [reason] | <code>string</code> |  | The reason for deleting the messages. |

<a name="MessageManager+delete"></a>

### messageManager.delete(message, reason) ⇒ <code>Promise.&lt;Message&gt;</code>
Deletes a message from the channel.

**Kind**: instance method of [<code>MessageManager</code>](#MessageManager)  
**Returns**: <code>Promise.&lt;Message&gt;</code> - - A promise that resolves to the deleted message object.  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>string</code> \| <code>Message</code> | The message to delete. Can be either the message ID or the message object itself. |
| reason | <code>string</code> | The reason for deleting the message. |

<a name="MessageManager+edit"></a>

### messageManager.edit(message, options) ⇒ <code>Promise.&lt;Message&gt;</code>
Edits a message with the given options.

**Kind**: instance method of [<code>MessageManager</code>](#MessageManager)  
**Returns**: <code>Promise.&lt;Message&gt;</code> - A promise that resolves with the edited message.  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>string</code> \| <code>Message</code> | The message or message ID to edit. |
| options | <code>Object</code> | The options to update the message with. |

<a name="MessageManager+fetch"></a>

### messageManager.fetch(message, [options]) ⇒ <code>Promise.&lt;(Message\|Map.&lt;string, Message&gt;)&gt;</code>
Fetches a message or a list of messages from the server.

**Kind**: instance method of [<code>MessageManager</code>](#MessageManager)  
**Returns**: <code>Promise.&lt;(Message\|Map.&lt;string, Message&gt;)&gt;</code> - - A single message object if a message ID is provided, or a map of message IDs to message objects if options are provided.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| message | <code>string</code> \| <code>object</code> |  | The ID of the message to fetch or an object containing options for fetching messages. |
| [options] | <code>object</code> |  | Additional options for fetching messages. |
| [options.cache] | <code>boolean</code> | <code>true</code> | Whether to cache the fetched messages. |
| [options.force] | <code>boolean</code> | <code>false</code> | Whether to force fetch the messages even if they are already cached. |

<a name="MessageManager+_fetchId"></a>

### messageManager.\_fetchId(message, [cache], [force]) ⇒ <code>Promise.&lt;object&gt;</code>
Fetches a message by its ID from the channel.

**Kind**: instance method of [<code>MessageManager</code>](#MessageManager)  
**Returns**: <code>Promise.&lt;object&gt;</code> - - A promise that resolves to the fetched message object.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| message | <code>string</code> \| <code>object</code> |  | The ID of the message or the message object itself. |
| [cache] | <code>boolean</code> | <code>true</code> | Whether to cache the fetched message. |
| [force] | <code>boolean</code> | <code>false</code> | Whether to force fetch the message even if it is already cached. |

<a name="MessageManager+crosspost"></a>

### messageManager.crosspost(channel, message) ⇒ <code>Promise.&lt;Message&gt;</code>
Crossposts a message to a specified channel.

**Kind**: instance method of [<code>MessageManager</code>](#MessageManager)  
**Returns**: <code>Promise.&lt;Message&gt;</code> - - A promise that resolves to the crossposted message.  

| Param | Type | Description |
| --- | --- | --- |
| channel | <code>string</code> \| <code>Channel</code> | The channel to crosspost the message to. |
| message | <code>string</code> \| <code>Message</code> | The message to crosspost. |

<a name="MessageManager+react"></a>

### messageManager.react(message, emoji) ⇒ <code>Promise.&lt;void&gt;</code>
Reacts to a message with the specified emoji.

**Kind**: instance method of [<code>MessageManager</code>](#MessageManager)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the reaction is successfully added.  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>string</code> \| <code>Message</code> | The message to react to. Can be either a message ID or a Message object. |
| emoji | <code>string</code> | The emoji to react with. |

<a name="MessageManager+pins"></a>

### messageManager.pins() ⇒ <code>Promise.&lt;Cache&gt;</code>
Retrieves the pinned messages in the current channel.

**Kind**: instance method of [<code>MessageManager</code>](#MessageManager)  
**Returns**: <code>Promise.&lt;Cache&gt;</code> - A Promise that resolves to a Cache object containing the pinned messages.  
<a name="MessageManager+unpin"></a>

### messageManager.unpin(message, reason) ⇒ <code>Promise.&lt;void&gt;</code>
Unpins a message from the channel.

**Kind**: instance method of [<code>MessageManager</code>](#MessageManager)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the message is successfully unpinned.  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>string</code> \| <code>Message</code> | The message or message ID to unpin. |
| reason | <code>string</code> | The reason for unpinning the message. |

<a name="MessageManager+pin"></a>

### messageManager.pin(message, reason) ⇒ <code>Promise.&lt;void&gt;</code>
Pins a message in the channel.

**Kind**: instance method of [<code>MessageManager</code>](#MessageManager)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the message is pinned.  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>string</code> \| <code>Message</code> | The message or message ID to pin. |
| reason | <code>string</code> | The reason for pinning the message. |

<a name="MessageManager.transformOptions"></a>

### MessageManager.transformOptions(o) ⇒ <code>Object</code> \| <code>null</code>
Transforms the given options object into a new object with specific properties.

**Kind**: static method of [<code>MessageManager</code>](#MessageManager)  
**Returns**: <code>Object</code> \| <code>null</code> - - The transformed object or null if the input is null.  

| Param | Type | Description |
| --- | --- | --- |
| o | <code>Object</code> | The options object to transform. |

