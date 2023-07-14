<a name="InvitePayload"></a>

## InvitePayload
A utility class for creating invite payloads.

**Kind**: global class  
<a name="InvitePayload.create"></a>

### InvitePayload.create(payload)
Creates an invite object with the given payload.

**Kind**: static method of [<code>InvitePayload</code>](#InvitePayload)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| payload | <code>Object</code> |  | The payload object containing the invite properties. |
| [payload.maxAge] | <code>number</code> | <code>86400</code> | The maximum age of the invite in seconds. |
| [payload.maxUses] | <code>number</code> \| <code>undefined</code> |  | The maximum number of times the invite can be used. |
| [payload.temporary] | <code>boolean</code> \| <code>undefined</code> |  | Whether the invite is temporary or not. |
| [payload.targetType] | <code>string</code> \| <code>undefined</code> |  | The type of target for the invite. |
| [payload.targetUser] | <code>string</code> \| <code>undefined</code> |  | The ID of the target user for the |

