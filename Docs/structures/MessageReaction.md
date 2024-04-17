---
title: MessageReaction
sidebar:
  order: 48
---



## MessageReaction ⇐ <code>Base</code>
Represents a message reaction.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [MessageReaction](#MessageReaction) ⇐ <code>Base</code>
    * [new MessageReaction([data], guildId, channelId, messageId, client)](#new_MessageReaction_new)
    * [.channel](#MessageReaction+channel) ⇒
    * [.guild](#MessageReaction+guild) ⇒
    * [.fetch()](#MessageReaction+fetch) ⇒ <code>Promise.&lt;(Reaction\|null)&gt;</code>
    * [.remove()](#MessageReaction+remove) ⇒ <code>Promise.&lt;this&gt;</code>
    * [._addUsers(user)](#MessageReaction+_addUsers) ⇒ <code>void</code>
    * [._removeUsers(user)](#MessageReaction+_removeUsers) ⇒ <code>void</code>

<a name="new_MessageReaction_new"></a>

### new MessageReaction([data], guildId, channelId, messageId, client)
Constructs a Reaction object.


| Param | Type | Description |
| --- | --- | --- |
| [data] | <code>Object</code> | The data for the message reaction. |
| guildId | <code>string</code> | The ID of the guild the reaction belongs to. |
| channelId | <code>string</code> | The ID of the channel the reaction belongs to. |
| messageId | <code>string</code> | The ID of the message the reaction belongs to. |
| client | <code>Client</code> | The client instance. |

<a name="MessageReaction+channel"></a>

### messageReaction.channel ⇒
Retrieves the channel object associated with this instance.

**Kind**: instance property of [<code>MessageReaction</code>](#MessageReaction)  
**Returns**: The channel object.  
<a name="MessageReaction+guild"></a>

### messageReaction.guild ⇒
Get the guild associated with this channel.

**Kind**: instance property of [<code>MessageReaction</code>](#MessageReaction)  
**Returns**: The guild object associated with this channel.  
<a name="MessageReaction+fetch"></a>

### messageReaction.fetch() ⇒ <code>Promise.&lt;(Reaction\|null)&gt;</code>
Fetches a message from a channel and retrieves a reaction associated with it.

**Kind**: instance method of [<code>MessageReaction</code>](#MessageReaction)  
**Returns**: <code>Promise.&lt;(Reaction\|null)&gt;</code> - A Promise that resolves to the Reaction object if found, or null if not found.  
<a name="MessageReaction+remove"></a>

### messageReaction.remove() ⇒ <code>Promise.&lt;this&gt;</code>
Removes the reaction associated with this message.

**Kind**: instance method of [<code>MessageReaction</code>](#MessageReaction)  
**Returns**: <code>Promise.&lt;this&gt;</code> - - A promise that resolves to the current instance of the class.  
<a name="MessageReaction+_addUsers"></a>

### messageReaction.\_addUsers(user) ⇒ <code>void</code>
Adds a user to the list of users.

**Kind**: instance method of [<code>MessageReaction</code>](#MessageReaction)  

| Param | Type | Description |
| --- | --- | --- |
| user | <code>User</code> | The user to add. |

<a name="MessageReaction+_removeUsers"></a>

### messageReaction.\_removeUsers(user) ⇒ <code>void</code>
Removes a user from the list of users.

**Kind**: instance method of [<code>MessageReaction</code>](#MessageReaction)  

| Param | Type | Description |
| --- | --- | --- |
| user | <code>User</code> | The user to remove. |

