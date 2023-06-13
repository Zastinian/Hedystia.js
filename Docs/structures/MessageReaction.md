<a name="MessageReaction"></a>

## MessageReaction ⇐ <code>Base</code>
It's a class that represents a reaction on a message

**Kind**: global class  
**Extends**: <code>Base</code>  

* [MessageReaction](#MessageReaction) ⇐ <code>Base</code>
    * [new MessageReaction([data], guildId, channelId, messageId, client)](#new_MessageReaction_new)
    * [.channel](#MessageReaction+channel) ⇒
    * [.guild](#MessageReaction+guild) ⇒
    * [.fetch()](#MessageReaction+fetch) ⇒
    * [.remove()](#MessageReaction+remove) ⇒
    * [._addUsers(user)](#MessageReaction+_addUsers) ⇒
    * [._removeUsers(user)](#MessageReaction+_removeUsers) ⇒

<a name="new_MessageReaction_new"></a>

### new MessageReaction([data], guildId, channelId, messageId, client)
It's a constructor for a class called Reaction.


| Param | Description |
| --- | --- |
| [data] | The data that is passed to the constructor. |
| guildId | The guild ID of the message |
| channelId | The channel ID of the message |
| messageId | The ID of the message that the reaction is on. |
| client | The client |

<a name="MessageReaction+channel"></a>

### messageReaction.channel ⇒
It returns the channel object of the channel ID that is stored in the message object

**Kind**: instance property of [<code>MessageReaction</code>](#MessageReaction)  
**Returns**: The channel object.  
<a name="MessageReaction+guild"></a>

### messageReaction.guild ⇒
It returns the guild object of the channel

**Kind**: instance property of [<code>MessageReaction</code>](#MessageReaction)  
**Returns**: The guild object.  
<a name="MessageReaction+fetch"></a>

### messageReaction.fetch() ⇒
It fetches the message, gets the reaction, and returns the reaction

**Kind**: instance method of [<code>MessageReaction</code>](#MessageReaction)  
**Returns**: The reaction object.  
<a name="MessageReaction+remove"></a>

### messageReaction.remove() ⇒
It removes a reaction from a message

**Kind**: instance method of [<code>MessageReaction</code>](#MessageReaction)  
**Returns**: The reaction object.  
<a name="MessageReaction+_addUsers"></a>

### messageReaction.\_addUsers(user) ⇒
**Kind**: instance method of [<code>MessageReaction</code>](#MessageReaction)  
**Returns**: the value of the if statement.  

| Param | Description |
| --- | --- |
| user | The user that was added to the channel. |

<a name="MessageReaction+_removeUsers"></a>

### messageReaction.\_removeUsers(user) ⇒
**Kind**: instance method of [<code>MessageReaction</code>](#MessageReaction)  
**Returns**: the value of the variable "this.me"  

| Param | Description |
| --- | --- |
| user | The user that was removed from the voice channel. |

