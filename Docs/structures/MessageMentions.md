<a name="MessageMentions"></a>

## MessageMentions ⇐ <code>Base</code>
Represents a message mention object.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [MessageMentions](#MessageMentions) ⇐ <code>Base</code>
    * [new MessageMentions([data], guildId, client)](#new_MessageMentions_new)
    * [.guild](#MessageMentions+guild) ⇒

<a name="new_MessageMentions_new"></a>

### new MessageMentions([data], guildId, client)
Constructs a new instance of the class.


| Param | Type | Description |
| --- | --- | --- |
| [data] | <code>Object</code> | The data for the message mention object. |
| guildId | <code>string</code> | The ID of the guild the mention is in. |
| client | <code>Client</code> | The client instance. |

<a name="MessageMentions+guild"></a>

### messageMentions.guild ⇒
Get the guild object associated with this guildId.

**Kind**: instance property of [<code>MessageMentions</code>](#MessageMentions)  
**Returns**: The guild object.  
