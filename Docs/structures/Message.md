<a name="Message"></a>

## Message ⇐ <code>Base</code>
It's a class that extends another class

**Kind**: global class  
**Extends**: <code>Base</code>  

* [Message](#Message) ⇐ <code>Base</code>
    * [new Message([data], guildId, channelId, client)](#new_Message_new)
    * [.channel](#Message+channel) ⇒
    * [.guild](#Message+guild) ⇒
    * [.system](#Message+system) ⇒
    * [.author](#Message+author) ⇒
    * [.edit(options)](#Message+edit) ⇒
    * [.delete(reason)](#Message+delete) ⇒
    * [.fetch([options])](#Message+fetch) ⇒
    * [.crosspost()](#Message+crosspost) ⇒
    * [.react(emoji)](#Message+react) ⇒
    * [.removeEmbeds()](#Message+removeEmbeds) ⇒
    * [.removeAttachments()](#Message+removeAttachments) ⇒
    * [.removeAttachment(attachment)](#Message+removeAttachment) ⇒
    * [.reply([options])](#Message+reply) ⇒
    * [.fetchReference()](#Message+fetchReference) ⇒
    * [.pin(reason)](#Message+pin) ⇒
    * [.unpin(reason)](#Message+unpin) ⇒
    * [.inGuild()](#Message+inGuild) ⇒
    * [.equals(message)](#Message+equals) ⇒
    * [.createThread([options])](#Message+createThread) ⇒
    * [.addAttachments([attachments])](#Message+addAttachments) ⇒

<a name="new_Message_new"></a>

### new Message([data], guildId, channelId, client)
It's a constructor for a class that extends another class


| Param | Description |
| --- | --- |
| [data] | The data that is passed to the constructor. |
| guildId | The ID of the guild the message is in. |
| channelId | The channel ID of the message |
| client | RaidenClient |

<a name="Message+channel"></a>

### message.channel ⇒
It returns the channel object if it exists, otherwise it returns null

**Kind**: instance property of [<code>Message</code>](#Message)  
**Returns**: The channel object.  
<a name="Message+guild"></a>

### message.guild ⇒
It returns the guild object if it exists, otherwise it returns null

**Kind**: instance property of [<code>Message</code>](#Message)  
**Returns**: The guild object.  
<a name="Message+system"></a>

### message.system ⇒
If the type is not one of the four types listed, then it's a system type

**Kind**: instance property of [<code>Message</code>](#Message)  
**Returns**: The value of the property "type" of the object "this".  
<a name="Message+author"></a>

### message.author ⇒
It returns the author of the message

**Kind**: instance property of [<code>Message</code>](#Message)  
**Returns**: The author of the message.  
<a name="Message+edit"></a>

### message.edit(options) ⇒
It edits a message

**Kind**: instance method of [<code>Message</code>](#Message)  
**Returns**: The message object.  

| Param | Description |
| --- | --- |
| options | Object |

<a name="Message+delete"></a>

### message.delete(reason) ⇒
It deletes a message

**Kind**: instance method of [<code>Message</code>](#Message)  
**Returns**: The message object.  

| Param | Description |
| --- | --- |
| reason | The reason for the deletion. |

<a name="Message+fetch"></a>

### message.fetch([options]) ⇒
It fetches the message from the channel

**Kind**: instance method of [<code>Message</code>](#Message)  
**Returns**: The message object.  

| Param | Description |
| --- | --- |
| [options] | An object containing additional options to pass to the method. |

<a name="Message+crosspost"></a>

### message.crosspost() ⇒
It crossposts a message

**Kind**: instance method of [<code>Message</code>](#Message)  
**Returns**: The message object.  
<a name="Message+react"></a>

### message.react(emoji) ⇒
It reacts to a message with an emoji

**Kind**: instance method of [<code>Message</code>](#Message)  
**Returns**: The message object.  

| Param | Description |
| --- | --- |
| emoji | The emoji to react with. Can be a string (e.g. "🤔") or a custom emoji object. |

<a name="Message+removeEmbeds"></a>

### message.removeEmbeds() ⇒
It removes embeds from a message

**Kind**: instance method of [<code>Message</code>](#Message)  
**Returns**: The message object.  
<a name="Message+removeAttachments"></a>

### message.removeAttachments() ⇒
It removes all attachments from a message

**Kind**: instance method of [<code>Message</code>](#Message)  
**Returns**: The message object.  
<a name="Message+removeAttachment"></a>

### message.removeAttachment(attachment) ⇒
It removes an attachment from a message

**Kind**: instance method of [<code>Message</code>](#Message)  
**Returns**: The message is being edited with the new attachments.  

| Param | Description |
| --- | --- |
| attachment | The attachment to remove. |

<a name="Message+reply"></a>

### message.reply([options]) ⇒
It sends a message to the channel that the message was sent in

**Kind**: instance method of [<code>Message</code>](#Message)  
**Returns**: The message object.  

| Param | Description |
| --- | --- |
| [options] | The options to pass to the send method. |

<a name="Message+fetchReference"></a>

### message.fetchReference() ⇒
It fetches a message from a channel

**Kind**: instance method of [<code>Message</code>](#Message)  
**Returns**: A promise that resolves to a Message object.  
<a name="Message+pin"></a>

### message.pin(reason) ⇒
It pins the message to the channel

**Kind**: instance method of [<code>Message</code>](#Message)  
**Returns**: The message object.  

| Param | Description |
| --- | --- |
| reason | The reason for pinning this message. |

<a name="Message+unpin"></a>

### message.unpin(reason) ⇒
It unpins a message

**Kind**: instance method of [<code>Message</code>](#Message)  
**Returns**: The unpinned message.  

| Param | Description |
| --- | --- |
| reason | The reason for unpinning the message. |

<a name="Message+inGuild"></a>

### message.inGuild() ⇒
If the guildId is defined, return true, otherwise return false.

**Kind**: instance method of [<code>Message</code>](#Message)  
**Returns**: The boolean value of the if statement.  
<a name="Message+equals"></a>

### message.equals(message) ⇒
It returns true if the message is a partial message and the type, guildId, and content are the same

**Kind**: instance method of [<code>Message</code>](#Message)  
**Returns**: The return value is a boolean.  

| Param | Description |
| --- | --- |
| message | The message to compare to. |

<a name="Message+createThread"></a>

### message.createThread([options]) ⇒
It creates a thread

**Kind**: instance method of [<code>Message</code>](#Message)  
**Returns**: The thread object.  

| Param | Description |
| --- | --- |
| [options] | Object |

<a name="Message+addAttachments"></a>

### message.addAttachments([attachments]) ⇒
It adds attachments to a message

**Kind**: instance method of [<code>Message</code>](#Message)  
**Returns**: The message is being edited with the attachments and files.  

| Param | Description |
| --- | --- |
| [attachments] | The attachments to add to the message. |

