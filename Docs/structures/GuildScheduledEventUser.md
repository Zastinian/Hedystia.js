<a name="GuildScheduledEventUser"></a>

## GuildScheduledEventUser ⇐ <code>Base</code>
It's a class that represents a user that is going to an event

**Kind**: global class  
**Extends**: <code>Base</code>  

* [GuildScheduledEventUser](#GuildScheduledEventUser) ⇐ <code>Base</code>
    * [new GuildScheduledEventUser([data], guildId, eventId, client)](#new_GuildScheduledEventUser_new)
    * [.guild](#GuildScheduledEventUser+guild) ⇒
    * [.guildScheduledEvent](#GuildScheduledEventUser+guildScheduledEvent) ⇒

<a name="new_GuildScheduledEventUser_new"></a>

### new GuildScheduledEventUser([data], guildId, eventId, client)
This function is used to create a new instance of the class GuildScheduledEventMember.


| Param | Description |
| --- | --- |
| [data] | The data that was received from the API. |
| guildId | The ID of the guild the event is in |
| eventId | The ID of the event |
| client | Discord.Client |

<a name="GuildScheduledEventUser+guild"></a>

### guildScheduledEventUser.guild ⇒
It returns the guild object of the guild ID that is stored in the database

**Kind**: instance property of [<code>GuildScheduledEventUser</code>](#GuildScheduledEventUser)  
**Returns**: The guild object.  
<a name="GuildScheduledEventUser+guildScheduledEvent"></a>

### guildScheduledEventUser.guildScheduledEvent ⇒
"If the guild exists, add the guildScheduledEventId to the events array, otherwise return null."

**Kind**: instance property of [<code>GuildScheduledEventUser</code>](#GuildScheduledEventUser)  
**Returns**: The guildScheduledEventId is being returned.  
