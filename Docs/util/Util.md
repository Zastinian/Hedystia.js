<a name="Util"></a>

## Util
Utility class with various helper functions.

**Kind**: global class  

* [Util](#Util)
    * [.generateDiscordTimestamp(time, style)](#Util.generateDiscordTimestamp) ⇒ <code>string</code>
    * [.resolveColor(color)](#Util.resolveColor) ⇒ <code>number</code>
    * [.getBuffer(file)](#Util.getBuffer) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.generateDataURI(base64)](#Util.generateDataURI) ⇒ <code>string</code> \| <code>undefined</code>
    * [.generateFile(buffer, [filename])](#Util.generateFile) ⇒
    * [.base64ToBuffer(base64)](#Util.base64ToBuffer) ⇒ <code>Buffer</code>
    * [.generateISOString([date])](#Util.generateISOString) ⇒ <code>string</code> \| <code>null</code>

<a name="Util.generateDiscordTimestamp"></a>

### Util.generateDiscordTimestamp(time, style) ⇒ <code>string</code>
Generates a Discord timestamp string based on the given time and style.

**Kind**: static method of [<code>Util</code>](#Util)  
**Returns**: <code>string</code> - - The formatted Discord timestamp string.  

| Param | Type | Description |
| --- | --- | --- |
| time | <code>number</code> | The Unix timestamp to format. |
| style | <code>string</code> | The style of the timestamp. Valid values are "t" (short time), "T" (long time), "d" (short date), "D" (long date), "f" (short date/time), "F" (long date/time), "R" (relative time), "r" (relative time with seconds), "c" (calendar time), "C" (calendar time with seconds). |

<a name="Util.resolveColor"></a>

### Util.resolveColor(color) ⇒ <code>number</code>
Resolves a color value to its corresponding integer representation.

**Kind**: static method of [<code>Util</code>](#Util)  
**Returns**: <code>number</code> - - The resolved color value as an integer.  

| Param | Type | Description |
| --- | --- | --- |
| color | <code>string</code> \| <code>number</code> | The color value to resolve. Can be a string representing a color name or a hexadecimal color code, or a number representing a color value. |

<a name="Util.getBuffer"></a>

### Util.getBuffer(file) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Retrieves the buffer data from the given file.

**Kind**: static method of [<code>Util</code>](#Util)  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - - The buffer data of the file.  

| Param | Type | Description |
| --- | --- | --- |
| file | <code>Buffer</code> \| <code>MessageAttachment</code> \| <code>string</code> | The file to retrieve the buffer data from. |

<a name="Util.generateDataURI"></a>

### Util.generateDataURI(base64) ⇒ <code>string</code> \| <code>undefined</code>
Generates a data URI from a base64 string or a Buffer object.

**Kind**: static method of [<code>Util</code>](#Util)  
**Returns**: <code>string</code> \| <code>undefined</code> - - The data URI string or undefined if base64 is falsy.  

| Param | Type | Description |
| --- | --- | --- |
| base64 | <code>string</code> \| <code>Buffer</code> | The base64 string or Buffer object. |

<a name="Util.generateFile"></a>

### Util.generateFile(buffer, [filename]) ⇒
Generates a file with the given buffer and filename.

**Kind**: static method of [<code>Util</code>](#Util)  
**Returns**: None  

| Param | Type | Description |
| --- | --- | --- |
| buffer | <code>Buffer</code> \| <code>string</code> | The buffer or path to the file content. |
| [filename] | <code>string</code> | The name of the file to be generated. If not provided, "file.txt" will be used as the default filename. |

<a name="Util.base64ToBuffer"></a>

### Util.base64ToBuffer(base64) ⇒ <code>Buffer</code>
Converts a base64 encoded string to a buffer.

**Kind**: static method of [<code>Util</code>](#Util)  
**Returns**: <code>Buffer</code> - - The buffer representation of the base64 string.  

| Param | Type | Description |
| --- | --- | --- |
| base64 | <code>string</code> | The base64 encoded string. |

<a name="Util.generateISOString"></a>

### Util.generateISOString([date]) ⇒ <code>string</code> \| <code>null</code>
Generates an ISO string representation of the given date.

**Kind**: static method of [<code>Util</code>](#Util)  
**Returns**: <code>string</code> \| <code>null</code> - - The ISO string representation of the date, or null if the input is null.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [date] | <code>number</code> \| <code>Date</code> | <code>Date.now()</code> | The date to convert to an ISO string. If not provided, the current date and time will be used. |

