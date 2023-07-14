<a name="Message"></a>

## Message ⇐ <code>Base</code>
Represents a message in a chat channel.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [Message](#Message) ⇐ <code>Base</code>
    * [new Message(data, guildId, channelId, client)](#new_Message_new)
    * [.channel](#Message+channel) ⇒
    * [.guild](#Message+guild) ⇒
    * [.system](#Message+system) ⇒ <code>boolean</code> \| <code>null</code>
    * [.author](#Message+author) ⇒
    * [.edit(options)](#Message+edit) ⇒ <code>Promise</code>
    * [.delete(reason)](#Message+delete) ⇒ <code>Promise</code>
    * [.fetch([options])](#Message+fetch) ⇒ <code>Promise</code>
    * [.crosspost()](#Message+crosspost) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.react(emoji)](#Message+react) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.removeEmbeds()](#Message+removeEmbeds) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.removeAttachments()](#Message+removeAttachments) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.removeAttachment(attachment)](#Message+removeAttachment) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.reply(options)](#Message+reply) ⇒ [<code>Promise.&lt;Message&gt;</code>](#Message)
    * [.fetchReference()](#Message+fetchReference) ⇒ [<code>Promise.&lt;Message&gt;</code>](#Message)
    * [.pin(reason)](#Message+pin) ⇒ <code>Promise</code>
    * [.unpin(reason)](#Message+unpin) ⇒ <code>Promise</code>
    * [.inGuild()](#Message+inGuild) ⇒ <code>boolean</code>
    * [.equals(message)](#Message+equals) ⇒ <code>boolean</code> \| <code>null</code>
    * [.createThread([options])](#Message+createThread) ⇒ <code>Promise.&lt;Thread&gt;</code>
    * [.addAttachments(attachments)](#Message+addAttachments) ⇒ <code>Promise</code>

<a name="new_Message_new"></a>

### new Message(data, guildId, channelId, client)
Constructs a new instance of the Message class.


| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | The data object containing information about the message. |
| guildId | <code>string</code> | The ID of the guild the message belongs to. |
| channelId | <code>string</code> | The ID of the channel the message belongs to. |
| client | <code>Client</code> | The client instance. |

<a name="Message+channel"></a>

### message.channel ⇒
Retrieves the channel associated with this object.

**Kind**: instance property of [<code>Message</code>](#Message)  
**Returns**: The channel object if found, otherwise null.  
<a name="Message+guild"></a>

### message.guild ⇒
Retrieves the guild associated with this guildId from the client's guild cache.

**Kind**: instance property of [<code>Message</code>](#Message)  
**Returns**: The guild object if found, otherwise null.  
<a name="Message+system"></a>

### message.system ⇒ <code>boolean</code> \| <code>null</code>
Get the system value based on the type of the object.

**Kind**: instance property of [<code>Message</code>](#Message)  
**Returns**: <code>boolean</code> \| <code>null</code> - - The system value. Returns null if the type is not set.  
<a name="Message+author"></a>

### message.author ⇒
Get the author of this object.

**Kind**: instance property of [<code>Message</code>](#Message)  
**Returns**: The author of this object.  
<a name="Message+edit"></a>

### message.edit(options) ⇒ <code>Promise</code>
Edits the message with the given options.

**Kind**: instance method of [<code>Message</code>](#Message)  
**Returns**: <code>Promise</code> - A promise that resolves when the message has been edited.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options to edit the message with. |

<a name="Message+delete"></a>

### message.delete(reason) ⇒ <code>Promise</code>
Deletes the message from the channel.

**Kind**: instance method of [<code>Message</code>](#Message)  
**Returns**: <code>Promise</code> - A promise that resolves when the message is successfully deleted.  

| Param | Type | Description |
| --- | --- | --- |
| reason | <code>string</code> | The reason for deleting the message. |

<a name="Message+fetch"></a>

### message.fetch([options]) ⇒ <code>Promise</code>
Fetches messages from the channel using the given options.

**Kind**: instance method of [<code>Message</code>](#Message)  
**Returns**: <code>Promise</code> - - A promise that resolves with the fetched messages.  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | The options to customize the fetch request. |

<a name="Message+crosspost"></a>

### message.crosspost() ⇒ <code>Promise.&lt;void&gt;</code>
Crossposts a message to another channel.

**Kind**: instance method of [<code>Message</code>](#Message)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the crossposting is complete.  
<a name="Message+react"></a>

### message.react(emoji) ⇒ <code>Promise.&lt;void&gt;</code>
Reacts to a message with the specified emoji.

**Kind**: instance method of [<code>Message</code>](#Message)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the reaction is added.  

| Param | Type | Description |
| --- | --- | --- |
| emoji | <code>string</code> | The emoji to react with. |

<a name="Message+removeEmbeds"></a>

### message.removeEmbeds() ⇒ <code>Promise.&lt;void&gt;</code>
Removes embeds from a message.

**Kind**: instance method of [<code>Message</code>](#Message)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the embeds are successfully removed.  
<a name="Message+removeAttachments"></a>

### message.removeAttachments() ⇒ <code>Promise.&lt;void&gt;</code>
Removes all attachments from the message.

**Kind**: instance method of [<code>Message</code>](#Message)  
**Returns**: <code>Promise.&lt;void&gt;</code> - A promise that resolves when the attachments are successfully removed.  
**Throws**:

- <code>RangeError</code> If there are no attachments in the message.

<a name="Message+removeAttachment"></a>

### message.removeAttachment(attachment) ⇒ <code>Promise.&lt;void&gt;</code>
Removes the specified attachment from the message. If no attachment is provided,all attachments will be removed.

**Kind**: instance method of [<code>Message</code>](#Message)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves once the attachment is removed.  
**Throws**:

- <code>RangeError</code> - If the message does not have the specified attachment.


| Param | Type | Description |
| --- | --- | --- |
| attachment | <code>string</code> \| <code>Attachment</code> | The attachment or attachment ID to remove. |

<a name="Message+reply"></a>

### message.reply(options) ⇒ [<code>Promise.&lt;Message&gt;</code>](#Message)
Sends a reply message to the channel where the original message was received.

**Kind**: instance method of [<code>Message</code>](#Message)  
**Returns**: [<code>Promise.&lt;Message&gt;</code>](#Message) - - A promise that resolves to the sent message.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Additional options for the reply message. |

<a name="Message+fetchReference"></a>

### message.fetchReference() ⇒ [<code>Promise.&lt;Message&gt;</code>](#Message)
Fetches the reference message from the channel.

**Kind**: instance method of [<code>Message</code>](#Message)  
**Returns**: [<code>Promise.&lt;Message&gt;</code>](#Message) - A promise that resolves to the reference message.  
<a name="Message+pin"></a>

### message.pin(reason) ⇒ <code>Promise</code>
Pins the current message to the channel.

**Kind**: instance method of [<code>Message</code>](#Message)  
**Returns**: <code>Promise</code> - - A promise that resolves when the message is successfully pinned.  

| Param | Type | Description |
| --- | --- | --- |
| reason | <code>string</code> | The reason for pinning the message. |

<a name="Message+unpin"></a>

### message.unpin(reason) ⇒ <code>Promise</code>
Unpins the current message from the channel.

**Kind**: instance method of [<code>Message</code>](#Message)  
**Returns**: <code>Promise</code> - - A promise that resolves when the message is successfully unpinned.  

| Param | Type | Description |
| --- | --- | --- |
| reason | <code>string</code> | The reason for unpinning the message. |

<a name="Message+inGuild"></a>

### message.inGuild() ⇒ <code>boolean</code>
Checks if the current context is within a guild.

**Kind**: instance method of [<code>Message</code>](#Message)  
**Returns**: <code>boolean</code> - - True if the context is within a guild, false otherwise.  
<a name="Message+equals"></a>

### message.equals(message) ⇒ <code>boolean</code> \| <code>null</code>
Checks if the given object is equal to this Message object.

**Kind**: instance method of [<code>Message</code>](#Message)  
**Returns**: <code>boolean</code> \| <code>null</code> - - Returns true if the objects are equal, false if they are not equal, and null if the given object is not an instance of Message.  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>Object</code> | The object to compare with this Message object. |

<a name="Message+createThread"></a>

### message.createThread([options]) ⇒ <code>Promise.&lt;Thread&gt;</code>
Creates a new thread in a channel.

**Kind**: instance method of [<code>Message</code>](#Message)  
**Returns**: <code>Promise.&lt;Thread&gt;</code> - A promise that resolves with the created thread.  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | The options for creating the thread. |
| [options.reason] | <code>string</code> | The reason for creating the thread. |
| [options.name] | <code>string</code> | The name of the thread. |
| [options.autoArchiveDuration] | <code>number</code> | The duration in minutes to automatically archive the thread. |
| [options.ratelimit] | <code>number</code> | The rate limit per user in the thread. |

<a name="Message+addAttachments"></a>

### message.addAttachments(attachments) ⇒ <code>Promise</code>
Adds attachments to the message.

**Kind**: instance method of [<code>Message</code>](#Message)  
**Returns**: <code>Promise</code> - - A promise that resolves when the attachments have been added.  
**Throws**:

- <code>RangeError</code> - If the message has no attachments or if one of the specified attachments already exists.


| Param | Type | Description |
| --- | --- | --- |
| attachments | <code>Array</code> | An array of attachment objects to add to the message. |

