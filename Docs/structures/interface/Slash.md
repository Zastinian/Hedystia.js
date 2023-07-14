<a name="Slash"></a>

## Slash ⇐ <code>Base</code>
Represents a Slash command.

**Kind**: global class  
**Extends**: <code>Base</code>  
**Constructor.**:   
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | The type of the Slash command. |
| name | <code>string</code> | The name of the Slash command. |
| description | <code>string</code> | The description of the Slash command. |
| options | <code>Array.&lt;SlashOption&gt;</code> | The options of the Slash command. |
| defaultMemberPermissions | <code>boolean</code> | The default member permissions of the Slash command. |

<a name="new_Slash_new"></a>

### new Slash([data], client)
Constructs a new instance of the ApplicationCommand class


| Param | Type | Description |
| --- | --- | --- |
| [data] | <code>Object</code> | The data object containing information about the Slash command. |
| client | <code>Client</code> | The client object. |

