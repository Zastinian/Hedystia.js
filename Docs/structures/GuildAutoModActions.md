<a name="GuildAutoModActions"></a>

## GuildAutoModActions ⇐ <code>Base</code>
Represents an action taken by the guild automod system.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [GuildAutoModActions](#GuildAutoModActions) ⇐ <code>Base</code>
    * [new GuildAutoModActions(data, client)](#new_GuildAutoModActions_new)
    * [.type](#GuildAutoModActions+type) : <code>string</code>
    * [.metadata](#GuildAutoModActions+metadata) : <code>Object</code>

<a name="new_GuildAutoModActions_new"></a>

### new GuildAutoModActions(data, client)

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | The data for the action. |
| client | <code>Client</code> | The instantiating client |

<a name="GuildAutoModActions+type"></a>

### guildAutoModActions.type : <code>string</code>
The type of action taken by the automod system.

**Kind**: instance property of [<code>GuildAutoModActions</code>](#GuildAutoModActions)  
<a name="GuildAutoModActions+metadata"></a>

### guildAutoModActions.metadata : <code>Object</code>
The metadata for the action, if any.

**Kind**: instance property of [<code>GuildAutoModActions</code>](#GuildAutoModActions)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| channelId | <code>string</code> | The ID of the channel the action was taken in. |
| durationSeconds | <code>number</code> | The duration of the action, in seconds. |

