<a name="MessageComponentInteraction"></a>

## MessageComponentInteraction ⇐ <code>Interaction</code>
It's a class that represents a message interaction

**Kind**: global class  
**Extends**: <code>Interaction</code>  

* [MessageComponentInteraction](#MessageComponentInteraction) ⇐ <code>Interaction</code>
    * [new MessageComponentInteraction([data], guildId, client)](#new_MessageComponentInteraction_new)
    * [.deferUpdate([options])](#MessageComponentInteraction+deferUpdate) ⇒
    * [.update([options])](#MessageComponentInteraction+update) ⇒

<a name="new_MessageComponentInteraction_new"></a>

### new MessageComponentInteraction([data], guildId, client)

| Param | Description |
| --- | --- |
| [data] | The data that is passed to the constructor. |
| guildId | The ID of the guild the message is in |
| client | Discord.Client |

<a name="MessageComponentInteraction+deferUpdate"></a>

### messageComponentInteraction.deferUpdate([options]) ⇒
It takes an object as an argument, creates a new MessagePayload object with the options and a 6,then posts to the API with the body of the MessagePayload object.

**Kind**: instance method of [<code>MessageComponentInteraction</code>](#MessageComponentInteraction)  
**Returns**: The response from the API.  

| Param | Description |
| --- | --- |
| [options] | Object |

<a name="MessageComponentInteraction+update"></a>

### messageComponentInteraction.update([options]) ⇒
It updates the message with the given options and returns the reply if fetchReply is true

**Kind**: instance method of [<code>MessageComponentInteraction</code>](#MessageComponentInteraction)  
**Returns**: The return value is the result of the await expression.  

| Param | Description |
| --- | --- |
| [options] | Object |

