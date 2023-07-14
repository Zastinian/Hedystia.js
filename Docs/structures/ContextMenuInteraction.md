<a name="ContextMenuInteraction"></a>

## ContextMenuInteraction ⇐ <code>ApplicationCommandInteraction</code>
Represents a context menu interaction, extending the base ApplicationCommandInteraction class.

**Kind**: global class  
**Extends**: <code>ApplicationCommandInteraction</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| targetId | <code>string</code> \| <code>null</code> | The ID of the target of the interaction, if available. |
| resolved | <code>Object</code> \| <code>null</code> | The resolved data of the interaction, if available. |

<a name="new_ContextMenuInteraction_new"></a>

### new ContextMenuInteraction([data], guildId, client)
Constructs a new instance of the class.


| Param | Type | Description |
| --- | --- | --- |
| [data] | <code>Object</code> | The data object containing information about the interaction. |
| guildId | <code>string</code> | The ID of the guild where the interaction occurred. |
| client | <code>Client</code> | The client instance associated with the interaction. |

