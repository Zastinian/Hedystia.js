<a name="MessageManager"></a>

## MessageManager

**Kind**: global class

- [MessageManager](#MessageManager)
  - [new MessageManager(guildId, channelId, client)](#new_MessageManager_new)
  - _instance_
    - [.guild](#MessageManager+guild) ⇒
    - [.cache](#MessageManager+cache) ⇒
    - [.\_add(messages, [guildId], [channelId], [options])](#MessageManager+_add) ⇒
    - [.send([channel], [options])](#MessageManager+send) ⇒
    - [.bulkDelete([channel], [message], reason)](#MessageManager+bulkDelete) ⇒
    - [.delete(message, reason)](#MessageManager+delete) ⇒
    - [.edit(message, options)](#MessageManager+edit) ⇒
    - [.fetch(message, options)](#MessageManager+fetch) ⇒
    - [.\_fetchId(message, [cache], [force])](#MessageManager+_fetchId) ⇒
    - [.crosspost(channel, message)](#MessageManager+crosspost) ⇒
    - [.react(message, emoji)](#MessageManager+react) ⇒
    - [.pins()](#MessageManager+pins) ⇒
    - [.unpin(message, reason)](#MessageManager+unpin) ⇒
    - [.pin(message, reason)](#MessageManager+pin) ⇒
  - _static_
    - [.transformOptions([o])](#MessageManager.transformOptions) ⇒

<a name="new_MessageManager_new"></a>

### new MessageManager(guildId, channelId, client)

The constructor function is a function that is called when an object is created from a class.

| Param     | Description                                                    |
| --------- | -------------------------------------------------------------- |
| guildId   | The ID of the guild you want to send the message to.           |
| channelId | The channel ID of the channel you want to send the message to. |
| client    | The client that the command is being run on.                   |

<a name="MessageManager+guild"></a>

### messageManager.guild ⇒

It returns the guild object if it exists, otherwise it returns null.

**Kind**: instance property of [<code>MessageManager</code>](#MessageManager)  
**Returns**: The guild object.  
<a name="MessageManager+cache"></a>

### messageManager.cache ⇒

It returns a collection of all the elements in the document that have the same tag name as the one
passed to the function.

**Kind**: instance property of [<code>MessageManager</code>](#MessageManager)  
**Returns**: The Collection class.  
<a name="MessageManager+_add"></a>

### messageManager.\_add(messages, [guildId], [channelId], [options]) ⇒

\_add(messages, guildId = this.guildId, channelId = this.channelId, options = {cache: true, force:
false})

**Kind**: instance method of [<code>MessageManager</code>](#MessageManager)  
**Returns**: The message object

| Param       | Description                                      |
| ----------- | ------------------------------------------------ |
| messages    | The message object                               |
| [guildId]   | The guild ID of the message                      |
| [channelId] | The channel ID of the channel the message is in. |
| [options]   | cache = true, force = false                      |

<a name="MessageManager+send"></a>

### messageManager.send([channel], [options]) ⇒

It sends a message to a channel

**Kind**: instance method of [<code>MessageManager</code>](#MessageManager)  
**Returns**: A message object.

| Param     | Description                         |
| --------- | ----------------------------------- |
| [channel] | The channel to send the message to. |
| [options] | The options for the message.        |

<a name="MessageManager+bulkDelete"></a>

### messageManager.bulkDelete([channel], [message], reason) ⇒

It deletes messages in bulk

**Kind**: instance method of [<code>MessageManager</code>](#MessageManager)  
**Returns**: An array of messages.

| Param     | Description                              |
| --------- | ---------------------------------------- |
| [channel] | The channel to delete the messages from. |
| [message] | The message to be deleted.               |
| reason    | The reason for the bulk delete.          |

<a name="MessageManager+delete"></a>

### messageManager.delete(message, reason) ⇒

It deletes a message from a channel.

**Kind**: instance method of [<code>MessageManager</code>](#MessageManager)  
**Returns**: The deleted message.

| Param   | Description                  |
| ------- | ---------------------------- |
| message | The message to delete.       |
| reason  | The reason for the deletion. |

<a name="MessageManager+edit"></a>

### messageManager.edit(message, options) ⇒

It edits a message.

**Kind**: instance method of [<code>MessageManager</code>](#MessageManager)  
**Returns**: A message object.

| Param   | Description          |
| ------- | -------------------- |
| message | The message to edit. |
| options |                      |

<a name="MessageManager+fetch"></a>

### messageManager.fetch(message, options) ⇒

It fetches messages from a channel

**Kind**: instance method of [<code>MessageManager</code>](#MessageManager)  
**Returns**: An array of objects.

| Param   | Description                                                               |
| ------- | ------------------------------------------------------------------------- |
| message | The message to fetch. Can be a message object, a message ID, or a string. |
| options |                                                                           |

<a name="MessageManager+_fetchId"></a>

### messageManager.\_fetchId(message, [cache], [force]) ⇒

It fetches a message from the API and adds it to the cache

**Kind**: instance method of [<code>MessageManager</code>](#MessageManager)  
**Returns**: The message object.

| Param   | Default            | Description                          |
| ------- | ------------------ | ------------------------------------ |
| message |                    | The message object or message ID     |
| [cache] | <code>true</code>  | Whether or not to cache the message. |
| [force] | <code>false</code> | true                                 |

<a name="MessageManager+crosspost"></a>

### messageManager.crosspost(channel, message) ⇒

It takes a message and a channel and crossposts the message to the channel

**Kind**: instance method of [<code>MessageManager</code>](#MessageManager)  
**Returns**: The message object.

| Param   | Description                              |
| ------- | ---------------------------------------- |
| channel | The channel to crosspost the message to. |
| message | The message to crosspost.                |

<a name="MessageManager+react"></a>

### messageManager.react(message, emoji) ⇒

It takes a message and an emoji and adds the emoji to the message.

**Kind**: instance method of [<code>MessageManager</code>](#MessageManager)  
**Returns**: The message object.

| Param   | Description              |
| ------- | ------------------------ |
| message | The message to react to. |
| emoji   | The emoji to react with. |

<a name="MessageManager+pins"></a>

### messageManager.pins() ⇒

It gets the pins from the channel and returns a cache of the pins

**Kind**: instance method of [<code>MessageManager</code>](#MessageManager)  
**Returns**: A new cache object.  
<a name="MessageManager+unpin"></a>

### messageManager.unpin(message, reason) ⇒

It deletes a message from the pinned messages list.

**Kind**: instance method of [<code>MessageManager</code>](#MessageManager)  
**Returns**: The message that was unpinned.

| Param   | Description               |
| ------- | ------------------------- |
| message | The message to unpin.     |
| reason  | The reason for the unpin. |

<a name="MessageManager+pin"></a>

### messageManager.pin(message, reason) ⇒

This function pins a message to a channel.

**Kind**: instance method of [<code>MessageManager</code>](#MessageManager)  
**Returns**: The message that was pinned.

| Param   | Description                         |
| ------- | ----------------------------------- |
| message | The message to pin.                 |
| reason  | The reason for pinning the message. |

<a name="MessageManager.transformOptions"></a>

### MessageManager.transformOptions([o]) ⇒

It takes an object with optional properties, and returns an object with the same optional
properties, but with the values transformed to a different type

**Kind**: static method of [<code>MessageManager</code>](#MessageManager)  
**Returns**: an object with the properties limit, around, before, and after.

| Param | Description        |
| ----- | ------------------ |
| [o]   | The options object |
