<a name="MessageMentions"></a>

## MessageMentions ⇐ <code>Base</code>
It's a class that stores mentions in a message

**Kind**: global class  
**Extends**: <code>Base</code>  

* [MessageMentions](#MessageMentions) ⇐ <code>Base</code>
    * [new MessageMentions([data], guildId, client)](#new_MessageMentions_new)
    * [.guild](#MessageMentions+guild) ⇒

<a name="new_MessageMentions_new"></a>

### new MessageMentions([data], guildId, client)
It takes in a data object, a guildId, and a client, and then it sets the guildId, users, members,roles, channels, and everyone properties of the object


| Param | Description |
| --- | --- |
| [data] | The data that is passed to the constructor. |
| guildId | The guild id |
| client | The client |

<a name="MessageMentions+guild"></a>

### messageMentions.guild ⇒
It returns the guild object of the guild ID that is stored in the database

**Kind**: instance property of [<code>MessageMentions</code>](#MessageMentions)  
**Returns**: The guild object.  
