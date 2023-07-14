<a name="DataManager"></a>

## DataManager
A utility class for managing data.

**Kind**: global class  
<a name="DataManager.resolveFile"></a>

### DataManager.resolveFile(file) ⇒ <code>Promise.&lt;(Buffer\|null)&gt;</code>
Resolves a file to be used in a function or operation.

**Kind**: static method of [<code>DataManager</code>](#DataManager)  
**Returns**: <code>Promise.&lt;(Buffer\|null)&gt;</code> - - A promise that resolves to the resolved file as a Buffer, or null if the file cannot be resolved.  

| Param | Type | Description |
| --- | --- | --- |
| file | <code>Buffer</code> \| <code>MessageAttachment</code> \| <code>Object</code> | The file to resolve. |

