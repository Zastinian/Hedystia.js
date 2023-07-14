<a name="MessagePayload"></a>

## MessagePayload
Represents a message payload and provides methods for creating and resolving message data.

**Kind**: global class  

* [MessagePayload](#MessagePayload)
    * [.create(payload, type)](#MessagePayload.create) ⇒ <code>Promise.&lt;Object&gt;</code> \| <code>Object</code>
    * [.resolveFiles(file)](#MessagePayload.resolveFiles) ⇒ <code>Promise.&lt;(Buffer\|null)&gt;</code>
    * [.resolveData([payload])](#MessagePayload.resolveData) ⇒ <code>Object</code>
    * [.resolveMessageFlags(flags)](#MessagePayload.resolveMessageFlags) ⇒ <code>number</code> \| <code>undefined</code>
    * [.resolveModal(data, type)](#MessagePayload.resolveModal) ⇒ <code>Object</code>
    * [.resolveWebhook(payload, extras)](#MessagePayload.resolveWebhook) ⇒ <code>object</code>
    * [.resolveDefers(data, [type])](#MessagePayload.resolveDefers) ⇒ <code>object</code>

<a name="MessagePayload.create"></a>

### MessagePayload.create(payload, type) ⇒ <code>Promise.&lt;Object&gt;</code> \| <code>Object</code>
Creates a payload for a given type.

**Kind**: static method of [<code>MessagePayload</code>](#MessagePayload)  
**Returns**: <code>Promise.&lt;Object&gt;</code> \| <code>Object</code> - - The created payload.  

| Param | Type | Description |
| --- | --- | --- |
| payload | <code>Object</code> | The payload object. |
| type | <code>string</code> | The type of payload to create. |

<a name="MessagePayload.resolveFiles"></a>

### MessagePayload.resolveFiles(file) ⇒ <code>Promise.&lt;(Buffer\|null)&gt;</code>
Resolves a file to a Buffer object.

**Kind**: static method of [<code>MessagePayload</code>](#MessagePayload)  
**Returns**: <code>Promise.&lt;(Buffer\|null)&gt;</code> - - A Promise that resolves to a Buffer object or null if the file cannot be resolved.  

| Param | Type | Description |
| --- | --- | --- |
| file | <code>Buffer</code> \| <code>MessageAttachment</code> \| <code>string</code> | The file to resolve. |

<a name="MessagePayload.resolveData"></a>

### MessagePayload.resolveData([payload]) ⇒ <code>Object</code>
Resolves the data payload for a message.

**Kind**: static method of [<code>MessagePayload</code>](#MessagePayload)  
**Returns**: <code>Object</code> - - The resolved data payload for the message.  

| Param | Type | Description |
| --- | --- | --- |
| [payload] | <code>Object</code> | The payload object containing the message data. |

<a name="MessagePayload.resolveMessageFlags"></a>

### MessagePayload.resolveMessageFlags(flags) ⇒ <code>number</code> \| <code>undefined</code>
Resolves the message flags and returns the parsed bitfield value.

**Kind**: static method of [<code>MessagePayload</code>](#MessagePayload)  
**Returns**: <code>number</code> \| <code>undefined</code> - The parsed bitfield value of the message flags.  

| Param | Type | Description |
| --- | --- | --- |
| flags | <code>number</code> | The message flags to resolve. |

<a name="MessagePayload.resolveModal"></a>

### MessagePayload.resolveModal(data, type) ⇒ <code>Object</code>
Resolves the modal data and returns an object with the specified type and data.

**Kind**: static method of [<code>MessagePayload</code>](#MessagePayload)  
**Returns**: <code>Object</code> - - An object with the specified type and data.  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | The modal data object. |
| type | <code>string</code> | The type of the modal. |

<a name="MessagePayload.resolveWebhook"></a>

### MessagePayload.resolveWebhook(payload, extras) ⇒ <code>object</code>
Resolves a webhook payload by merging it with additional extras.

**Kind**: static method of [<code>MessagePayload</code>](#MessagePayload)  
**Returns**: <code>object</code> - - The resolved webhook payload with merged extras.  

| Param | Type | Description |
| --- | --- | --- |
| payload | <code>object</code> | The webhook payload object. |
| extras | <code>object</code> | Additional extras to merge with the payload. |

<a name="MessagePayload.resolveDefers"></a>

### MessagePayload.resolveDefers(data, [type]) ⇒ <code>object</code>
Resolves deferred data by assigning the appropriate flags and returning the resolved data.

**Kind**: static method of [<code>MessagePayload</code>](#MessagePayload)  
**Returns**: <code>object</code> - - The resolved data object with assigned flags.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | <code>object</code> |  | The data object to resolve. |
| [type] | <code>number</code> | <code>5</code> | The type of the resolved data. |

