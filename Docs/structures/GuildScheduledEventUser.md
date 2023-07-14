<a name="GuildScheduledEventUser"></a>

## GuildScheduledEventUser ⇐ <code>Base</code>
Represents a user associated with a scheduled event in a guild.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [GuildScheduledEventUser](#GuildScheduledEventUser) ⇐ <code>Base</code>
    * [new GuildScheduledEventUser([data], guildId, eventId, client)](#new_GuildScheduledEventUser_new)
    * [.guild](#GuildScheduledEventUser+guild) ⇒
    * [.guildScheduledEvent](#GuildScheduledEventUser+guildScheduledEvent) ⇒ <code>ScheduledEvent</code> \| <code>null</code>

<a name="new_GuildScheduledEventUser_new"></a>

### new GuildScheduledEventUser([data], guildId, eventId, client)
Constructs a new instance of the Event class.


| Param | Type | Description |
| --- | --- | --- |
| [data] | <code>Object</code> | The data object containing information about the user. |
| guildId | <code>string</code> | The ID of the guild the user belongs to. |
| eventId | <code>string</code> | The ID of the scheduled event the user is associated with. |
| client | <code>Client</code> | The client instance. |

<a name="GuildScheduledEventUser+guild"></a>

### guildScheduledEventUser.guild ⇒
Retrieves the guild associated with this guildId.

**Kind**: instance property of [<code>GuildScheduledEventUser</code>](#GuildScheduledEventUser)  
**Returns**: The guild object if found, otherwise null.  
<a name="GuildScheduledEventUser+guildScheduledEvent"></a>

### guildScheduledEventUser.guildScheduledEvent ⇒ <code>ScheduledEvent</code> \| <code>null</code>
Retrieves the scheduled event associated with the guild.

**Kind**: instance property of [<code>GuildScheduledEventUser</code>](#GuildScheduledEventUser)  
**Returns**: <code>ScheduledEvent</code> \| <code>null</code> - The scheduled event object if found, otherwise null.  
