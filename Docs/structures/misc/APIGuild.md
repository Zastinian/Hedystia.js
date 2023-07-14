<a name="APIGuild"></a>

## APIGuild ⇐ <code>Base</code>
Represents a guild in the API.

**Kind**: global class  
**Extends**: <code>Base</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>string</code> \| <code>null</code> | The name of the guild. |
| description | <code>string</code> \| <code>null</code> | The description of the guild. |
| region | <code>string</code> \| <code>null</code> | The region of the guild. |
| verificationLevel | <code>VerificationLevel</code> \| <code>null</code> | The verification level of the guild. |
| defaultMessageNotifications | <code>DefaultMessageNotifications</code> \| <code>null</code> | The default message notifications setting of the guild. |
| explicitContentFilter | <code>ExplicitContentFilter</code> \| <code>null</code> |  |

<a name="new_APIGuild_new"></a>

### new APIGuild([data], client)
It takes in a data object and a client, and then sets the properties of the class to the values ofthe data object


| Param | Type | Description |
| --- | --- | --- |
| [data] | <code>Object</code> | The data object containing guild information. |
| client | <code>Client</code> | The client instance. |

