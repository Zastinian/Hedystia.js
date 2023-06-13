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
Constructs a new `GuildAuditLog` object.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [data] | <code>Object</code> | <code>{}</code> | The audit log data. |
| guildId | <code>string</code> |  | The ID of the guild. |
| client | <code>Client</code> |  | The client object. |

<a name="GuildAuditLog+guild"></a>

### guildAuditLog.guild : <code>Guild</code>
Returns the guild object associated with this audit log.

**Kind**: instance property of [<code>GuildAuditLog</code>](#GuildAuditLog)  
**Read only**: true  
