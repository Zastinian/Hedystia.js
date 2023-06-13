<a name="GuildIntegration"></a>

## GuildIntegration ⇐ <code>Base</code>
Represents a Guild Integration on Discord.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [GuildIntegration](#GuildIntegration) ⇐ <code>Base</code>
    * [new GuildIntegration(data, guildId, client)](#new_GuildIntegration_new)
    * [.guild](#GuildIntegration+guild) : <code>Guild</code>

<a name="new_GuildIntegration_new"></a>

### new GuildIntegration(data, guildId, client)

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | The data for the guild integration. |
| guildId | <code>Snowflake</code> | The ID of the guild this integration belongs to. |
| client | <code>Client</code> | The client that instantiated this integration. |

<a name="GuildIntegration+guild"></a>

### guildIntegration.guild : <code>Guild</code>
The `Guild` object corresponding to this `GuildIntegration`.

**Kind**: instance property of [<code>GuildIntegration</code>](#GuildIntegration)  
**Read only**: true  
