<a name="MessageAttachment"></a>

## MessageAttachment
Represents a message attachment.

**Kind**: global class  

* [MessageAttachment](#MessageAttachment)
    * [new MessageAttachment(url, data, filename)](#new_MessageAttachment_new)
    * [.setFile(file)](#MessageAttachment+setFile) ⇒ [<code>MessageAttachment</code>](#MessageAttachment)
    * [.setFilename(filename)](#MessageAttachment+setFilename) ⇒ [<code>MessageAttachment</code>](#MessageAttachment)
    * [.setDescription(description)](#MessageAttachment+setDescription) ⇒ [<code>MessageAttachment</code>](#MessageAttachment)
    * [.setSpoiler()](#MessageAttachment+setSpoiler) ⇒ [<code>MessageAttachment</code>](#MessageAttachment)

<a name="new_MessageAttachment_new"></a>

### new MessageAttachment(url, data, filename)
Constructs a new MessageAttachment object.


| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The URL of the attachment. |
| data | <code>Object</code> | Additional data for the attachment. |
| filename | <code>string</code> | The name of the file. |

<a name="MessageAttachment+setFile"></a>

### messageAttachment.setFile(file) ⇒ [<code>MessageAttachment</code>](#MessageAttachment)
Sets the file for the attachment.

**Kind**: instance method of [<code>MessageAttachment</code>](#MessageAttachment)  
**Returns**: [<code>MessageAttachment</code>](#MessageAttachment) - This attachment.  

| Param | Type | Description |
| --- | --- | --- |
| file | <code>BufferResolvable</code> \| <code>Stream</code> | The file to attach. |

<a name="MessageAttachment+setFilename"></a>

### messageAttachment.setFilename(filename) ⇒ [<code>MessageAttachment</code>](#MessageAttachment)
Sets the name of the file.

**Kind**: instance method of [<code>MessageAttachment</code>](#MessageAttachment)  
**Returns**: [<code>MessageAttachment</code>](#MessageAttachment) - This attachment.  

| Param | Type | Description |
| --- | --- | --- |
| filename | <code>string</code> | The name of the file. |

<a name="MessageAttachment+setDescription"></a>

### messageAttachment.setDescription(description) ⇒ [<code>MessageAttachment</code>](#MessageAttachment)
Sets the description of the attachment.

**Kind**: instance method of [<code>MessageAttachment</code>](#MessageAttachment)  
**Returns**: [<code>MessageAttachment</code>](#MessageAttachment) - This attachment.  

| Param | Type | Description |
| --- | --- | --- |
| description | <code>string</code> | The description of the attachment. |

<a name="MessageAttachment+setSpoiler"></a>

### messageAttachment.setSpoiler() ⇒ [<code>MessageAttachment</code>](#MessageAttachment)
Sets the attachment as a spoiler.

**Kind**: instance method of [<code>MessageAttachment</code>](#MessageAttachment)  
**Returns**: [<code>MessageAttachment</code>](#MessageAttachment) - This attachment.  
