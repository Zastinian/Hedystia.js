<a name="StickerPayload"></a>

## StickerPayload
Represents a sticker payload.

**Kind**: global class  

* [StickerPayload](#StickerPayload)
    * [.create(payload)](#StickerPayload.create) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.resolveData([data])](#StickerPayload.resolveData) ⇒ <code>Object</code>

<a name="StickerPayload.create"></a>

### StickerPayload.create(payload) ⇒ <code>Promise.&lt;Object&gt;</code>
Creates a payload for an API request.

**Kind**: static method of [<code>StickerPayload</code>](#StickerPayload)  
**Returns**: <code>Promise.&lt;Object&gt;</code> - - The created payload.  

| Param | Type | Description |
| --- | --- | --- |
| payload | <code>Object</code> | The payload object. |

<a name="StickerPayload.resolveData"></a>

### StickerPayload.resolveData([data]) ⇒ <code>Object</code>
Resolves the data object by validating and formatting its properties.

**Kind**: static method of [<code>StickerPayload</code>](#StickerPayload)  
**Returns**: <code>Object</code> - - The resolved data object with validated and formatted properties.  
**Throws**:

- <code>RangeError</code> - If the name property is not between 2 and 30 characters.
- <code>RangeError</code> - If the description property is not between 2 and 100 characters.
- <code>RangeError</code> - If the tags property is longer than 200 characters.


| Param | Type | Description |
| --- | --- | --- |
| [data] | <code>Object</code> | The data object to resolve. |

