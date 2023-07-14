<a name="CategoryChannel"></a>

## CategoryChannel ⇐ <code>Channel</code>
Represents a category channel in a guild.

**Kind**: global class  
**Extends**: <code>Channel</code>  

* [CategoryChannel](#CategoryChannel) ⇐ <code>Channel</code>
    * [new CategoryChannel([data], guildId, client)](#new_CategoryChannel_new)
    * [.childrens](#CategoryChannel+childrens) ⇒ <code>Collection.&lt;Snowflake, GuildChannel&gt;</code>
    * [.highest](#CategoryChannel+highest) ⇒

<a name="new_CategoryChannel_new"></a>

### new CategoryChannel([data], guildId, client)
Constructs a new instance of the class.


| Param | Type | Description |
| --- | --- | --- |
| [data] | <code>Object</code> | The data object to initialize the instance with. |
| guildId | <code>string</code> | The ID of the guild associated with the instance. |
| client | <code>Client</code> | The client instance associated with the instance. |

<a name="CategoryChannel+childrens"></a>

### categoryChannel.childrens ⇒ <code>Collection.&lt;Snowflake, GuildChannel&gt;</code>
Retrieves the child channels of the current channel.

**Kind**: instance property of [<code>CategoryChannel</code>](#CategoryChannel)  
**Returns**: <code>Collection.&lt;Snowflake, GuildChannel&gt;</code> - A collection of child channels.  
<a name="CategoryChannel+highest"></a>

### categoryChannel.highest ⇒
Get the highest child element based on their position property.

**Kind**: instance property of [<code>CategoryChannel</code>](#CategoryChannel)  
**Returns**: The highest child element.  
