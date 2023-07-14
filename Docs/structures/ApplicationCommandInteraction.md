<a name="ApplicationCommandInteraction"></a>

## ApplicationCommandInteraction ⇐ <code>Interaction</code>
Represents an application command interaction.

**Kind**: global class  
**Extends**: <code>Interaction</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| commandId | <code>string</code> \| <code>null</code> | The ID of the command associated with the interaction. |
| commandName | <code>string</code> \| <code>null</code> | The name of the command associated with the interaction. |
| commandType | <code>string</code> \| <code>null</code> | The type of the command associated with the interaction. |
| options | <code>CommandInteractionOptionResolver</code> | The resolver for the command interaction options. |

<a name="new_ApplicationCommandInteraction_new"></a>

### new ApplicationCommandInteraction([data], guildId, client)
Constructs a new instance of the CommandInteraction class.


| Param | Type | Description |
| --- | --- | --- |
| [data] | <code>Object</code> | The data object containing information about the interaction. |
| guildId | <code>string</code> | The ID of the guild where the interaction occurred. |
| client | <code>Client</code> | The client instance. |

