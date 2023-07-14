<a name="MessageEmbed"></a>

## MessageEmbed
Represents a message embed.

**Kind**: global class  

* [MessageEmbed](#MessageEmbed)
    * [new MessageEmbed([data])](#new_MessageEmbed_new)
    * _instance_
        * [.setTitle(title)](#MessageEmbed+setTitle) ⇒ [<code>MessageEmbed</code>](#MessageEmbed)
        * [.setDescription(description)](#MessageEmbed+setDescription) ⇒ [<code>MessageEmbed</code>](#MessageEmbed)
        * [.setURL(url)](#MessageEmbed+setURL) ⇒ [<code>MessageEmbed</code>](#MessageEmbed)
        * [.setTimestamp(timestamp)](#MessageEmbed+setTimestamp) ⇒ [<code>MessageEmbed</code>](#MessageEmbed)
        * [.setColor(color)](#MessageEmbed+setColor) ⇒ [<code>MessageEmbed</code>](#MessageEmbed)
        * [.setFooter(footer)](#MessageEmbed+setFooter) ⇒ [<code>MessageEmbed</code>](#MessageEmbed)
        * [.setImage(image)](#MessageEmbed+setImage) ⇒ [<code>MessageEmbed</code>](#MessageEmbed)
        * [.setThumbnail(thumbnail)](#MessageEmbed+setThumbnail) ⇒ [<code>MessageEmbed</code>](#MessageEmbed)
        * [.setAuthor(author)](#MessageEmbed+setAuthor) ⇒ [<code>MessageEmbed</code>](#MessageEmbed)
        * [.addFields(...fields)](#MessageEmbed+addFields) ⇒ [<code>MessageEmbed</code>](#MessageEmbed)
        * [.addField(name, value, [inline])](#MessageEmbed+addField) ⇒ [<code>MessageEmbed</code>](#MessageEmbed)
        * [.setFields(...fields)](#MessageEmbed+setFields) ⇒ [<code>MessageEmbed</code>](#MessageEmbed)
        * [.toJSON()](#MessageEmbed+toJSON) ⇒ <code>object</code>
    * _static_
        * [.transformFields(fields)](#MessageEmbed.transformFields) ⇒ <code>Object</code>

<a name="new_MessageEmbed_new"></a>

### new MessageEmbed([data])
Constructs a new MessageEmbed object.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [data] | <code>Object</code> |  | The data for the message embed. |
| [data.title] | <code>string</code> |  | The title of the message embed. |
| [data.type] | <code>string</code> | <code>&quot;\&quot;rich\&quot;&quot;</code> | The type of the message embed. |
| [data.description] | <code>string</code> |  | The description of the message embed. |
| [data.url] | <code>string</code> |  | The URL of the message embed. |
| [data.timestamp] | <code>string</code> |  | The timestamp of the message embed. |
| [data.color] | <code>string</code> |  | The color of the message embed. |
| [data.footer] | <code>Object</code> |  | The footer of the message embed. |
| [data.image] | <code>Object</code> |  | The image of the message embed. |
| [data.thumbnail] | <code>Object</code> |  | The thumbnail of the message embed. |
| [data.video] | <code>Object</code> |  | The video of the message embed. |
| [data.provider] | <code>Object</code> |  | The provider of the message embed. |
| [data.author] | <code>Object</code> |  | The author of the message embed. |
| [data.fields] | <code>Array.&lt;Object&gt;</code> | <code>[]</code> | The fields of the message embed. |

<a name="MessageEmbed+setTitle"></a>

### messageEmbed.setTitle(title) ⇒ [<code>MessageEmbed</code>](#MessageEmbed)
Sets the title of the embed.

**Kind**: instance method of [<code>MessageEmbed</code>](#MessageEmbed)  
**Returns**: [<code>MessageEmbed</code>](#MessageEmbed) - The MessageEmbed instance.  

| Param | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | The title of the embed. |

<a name="MessageEmbed+setDescription"></a>

### messageEmbed.setDescription(description) ⇒ [<code>MessageEmbed</code>](#MessageEmbed)
Sets the description of the embed.

**Kind**: instance method of [<code>MessageEmbed</code>](#MessageEmbed)  
**Returns**: [<code>MessageEmbed</code>](#MessageEmbed) - The MessageEmbed instance.  

| Param | Type | Description |
| --- | --- | --- |
| description | <code>string</code> | The description of the embed. |

<a name="MessageEmbed+setURL"></a>

### messageEmbed.setURL(url) ⇒ [<code>MessageEmbed</code>](#MessageEmbed)
Sets the URL of the embed.

**Kind**: instance method of [<code>MessageEmbed</code>](#MessageEmbed)  
**Returns**: [<code>MessageEmbed</code>](#MessageEmbed) - The MessageEmbed instance.  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The URL of the embed. |

<a name="MessageEmbed+setTimestamp"></a>

### messageEmbed.setTimestamp(timestamp) ⇒ [<code>MessageEmbed</code>](#MessageEmbed)
Sets the timestamp of the embed.

**Kind**: instance method of [<code>MessageEmbed</code>](#MessageEmbed)  
**Returns**: [<code>MessageEmbed</code>](#MessageEmbed) - The MessageEmbed instance.  

| Param | Type | Description |
| --- | --- | --- |
| timestamp | <code>Date</code> \| <code>number</code> \| <code>string</code> | The timestamp of the embed. |

<a name="MessageEmbed+setColor"></a>

### messageEmbed.setColor(color) ⇒ [<code>MessageEmbed</code>](#MessageEmbed)
Sets the color of the embed.

**Kind**: instance method of [<code>MessageEmbed</code>](#MessageEmbed)  
**Returns**: [<code>MessageEmbed</code>](#MessageEmbed) - The MessageEmbed instance.  

| Param | Type | Description |
| --- | --- | --- |
| color | <code>string</code> \| <code>number</code> | The color of the embed. |

<a name="MessageEmbed+setFooter"></a>

### messageEmbed.setFooter(footer) ⇒ [<code>MessageEmbed</code>](#MessageEmbed)
Sets the footer of the embed.

**Kind**: instance method of [<code>MessageEmbed</code>](#MessageEmbed)  
**Returns**: [<code>MessageEmbed</code>](#MessageEmbed) - The MessageEmbed instance.  

| Param | Type | Description |
| --- | --- | --- |
| footer | <code>string</code> | The footer of the embed. |

<a name="MessageEmbed+setImage"></a>

### messageEmbed.setImage(image) ⇒ [<code>MessageEmbed</code>](#MessageEmbed)
Sets the image of the embed.

**Kind**: instance method of [<code>MessageEmbed</code>](#MessageEmbed)  
**Returns**: [<code>MessageEmbed</code>](#MessageEmbed) - The MessageEmbed instance.  

| Param | Type | Description |
| --- | --- | --- |
| image | <code>object</code> | The image of the embed. |
| image.url | <code>string</code> | The URL of the image. |

<a name="MessageEmbed+setThumbnail"></a>

### messageEmbed.setThumbnail(thumbnail) ⇒ [<code>MessageEmbed</code>](#MessageEmbed)
Sets the thumbnail of the embed.

**Kind**: instance method of [<code>MessageEmbed</code>](#MessageEmbed)  
**Returns**: [<code>MessageEmbed</code>](#MessageEmbed) - The MessageEmbed instance.  

| Param | Type | Description |
| --- | --- | --- |
| thumbnail | <code>object</code> | The thumbnail of the embed. |
| thumbnail.url | <code>string</code> | The URL of the thumbnail. |

<a name="MessageEmbed+setAuthor"></a>

### messageEmbed.setAuthor(author) ⇒ [<code>MessageEmbed</code>](#MessageEmbed)
Sets the author of the embed.

**Kind**: instance method of [<code>MessageEmbed</code>](#MessageEmbed)  
**Returns**: [<code>MessageEmbed</code>](#MessageEmbed) - The MessageEmbed instance.  

| Param | Type | Description |
| --- | --- | --- |
| author | <code>string</code> | The author of the embed. |

<a name="MessageEmbed+addFields"></a>

### messageEmbed.addFields(...fields) ⇒ [<code>MessageEmbed</code>](#MessageEmbed)
Adds multiple fields to the embed.

**Kind**: instance method of [<code>MessageEmbed</code>](#MessageEmbed)  
**Returns**: [<code>MessageEmbed</code>](#MessageEmbed) - The MessageEmbed instance.  

| Param | Type | Description |
| --- | --- | --- |
| ...fields | <code>object</code> \| <code>Array.&lt;object&gt;</code> | The fields to add to the embed. |

<a name="MessageEmbed+addField"></a>

### messageEmbed.addField(name, value, [inline]) ⇒ [<code>MessageEmbed</code>](#MessageEmbed)
Adds a single field to the embed.

**Kind**: instance method of [<code>MessageEmbed</code>](#MessageEmbed)  
**Returns**: [<code>MessageEmbed</code>](#MessageEmbed) - The MessageEmbed instance.  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name of the field. |
| value | <code>string</code> | The value of the field. |
| [inline] | <code>boolean</code> | Whether the field should be displayed inline. |

<a name="MessageEmbed+setFields"></a>

### messageEmbed.setFields(...fields) ⇒ [<code>MessageEmbed</code>](#MessageEmbed)
Sets the fields of the embed.

**Kind**: instance method of [<code>MessageEmbed</code>](#MessageEmbed)  
**Returns**: [<code>MessageEmbed</code>](#MessageEmbed) - The MessageEmbed instance.  

| Param | Type | Description |
| --- | --- | --- |
| ...fields | <code>object</code> \| <code>Array.&lt;object&gt;</code> | The fields to set for the embed. |

<a name="MessageEmbed+toJSON"></a>

### messageEmbed.toJSON() ⇒ <code>object</code>
Converts the MessageEmbed instance to a plain object.

**Kind**: instance method of [<code>MessageEmbed</code>](#MessageEmbed)  
**Returns**: <code>object</code> - The plain object representation of the MessageEmbed instance.  
<a name="MessageEmbed.transformFields"></a>

### MessageEmbed.transformFields(fields) ⇒ <code>Object</code>
Transforms the input fields object to a new object with specific properties.

**Kind**: static method of [<code>MessageEmbed</code>](#MessageEmbed)  
**Returns**: <code>Object</code> - - A new object with transformed fields.  

| Param | Type | Description |
| --- | --- | --- |
| fields | <code>Object</code> | The input object containing fields to be transformed. |
| fields.name | <code>string</code> | The name of the field. |
| fields.value | <code>any</code> | The value of the field. |
| [fields.inline] | <code>boolean</code> \| <code>undefined</code> | Whether the field should be displayed inline. If not specified, defaults to undefined. |

