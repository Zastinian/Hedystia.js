<a name="GuildAuditLog"></a>

## GuildAuditLog ⇐ <code>Base</code>
Represents an audit log for a guild.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [GuildAuditLog](#GuildAuditLog) ⇐ <code>Base</code>
    * [new GuildAuditLog([data], guildId, client)](#new_GuildAuditLog_new)
    * [.guild](#GuildAuditLog+guild) : <code>Guild</code>

<a name="new_GuildAuditLog_new"></a>

### new GuildAuditLog([data], guildId, client)
Constructs a new instance of the Guild class.


| Param | Type | Description |
| --- | --- | --- |
| [data] | <code>Object</code> | The data object containing guild information. |
| guildId | <code>string</code> | The ID of the guild. |
| client | <code>Client</code> | The client instance. |

<a name="GuildAuditLog+guild"></a>

### guildAuditLog.guild : <code>Guild</code>
Returns the guild object associated with this audit log.

**Kind**: instance property of [<code>GuildAuditLog</code>](#GuildAuditLog)  
**Read only**: true  
