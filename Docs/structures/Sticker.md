<a name="Sticker"></a>

## Sticker ⇐ <code>Base</code>
Represents a Sticker object, extending the Base class.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [Sticker](#Sticker) ⇐ <code>Base</code>
    * [new Sticker([data], guildId, client)](#new_Sticker_new)
    * [.guild](#Sticker+guild) ⇒
    * [.fetch(options)](#Sticker+fetch) ⇒ <code>Promise</code>
    * [.edit(options)](#Sticker+edit) ⇒ <code>Promise</code>
    * [.delete(reason)](#Sticker+delete) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.setName(name, reason)](#Sticker+setName) ⇒ <code>Promise</code>
    * [.setDescription(description, reason)](#Sticker+setDescription) ⇒ <code>Promise</code>
    * [.setTags(tags, reason)](#Sticker+setTags) ⇒ <code>Promise</code>
    * [.fetchPack()](#Sticker+fetchPack) ⇒ <code>Promise.&lt;(NitroPack\|null)&gt;</code>
    * [.imageURL(options)](#Sticker+imageURL) ⇒ <code>string</code>
    * [.equals(sticker)](#Sticker+equals) ⇒ <code>boolean</code>

<a name="new_Sticker_new"></a>

### new Sticker([data], guildId, client)
Constructs a Sticker object.


| Param | Type | Description |
| --- | --- | --- |
| [data] | <code>Object</code> | The data object containing the sticker information. |
| guildId | <code>string</code> | The ID of the guild the sticker belongs to. |
| client | <code>Client</code> | The client instance. |

<a name="Sticker+guild"></a>

### sticker.guild ⇒
Retrieves the guild associated with this guildId.

**Kind**: instance property of [<code>Sticker</code>](#Sticker)  
**Returns**: The guild object if found, otherwise null.  
<a name="Sticker+fetch"></a>

### sticker.fetch(options) ⇒ <code>Promise</code>
Fetches stickers from the guild using the provided options.

**Kind**: instance method of [<code>Sticker</code>](#Sticker)  
**Returns**: <code>Promise</code> - - A promise that resolves to the fetched stickers.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options for fetching the stickers. |

<a name="Sticker+edit"></a>

### sticker.edit(options) ⇒ <code>Promise</code>
Edits the sticker with the given options.

**Kind**: instance method of [<code>Sticker</code>](#Sticker)  
**Returns**: <code>Promise</code> - A promise that resolves when the sticker is successfully edited.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options to edit the sticker. |

<a name="Sticker+delete"></a>

### sticker.delete(reason) ⇒ <code>Promise.&lt;void&gt;</code>
Deletes the sticker from the guild.

**Kind**: instance method of [<code>Sticker</code>](#Sticker)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the sticker is deleted.  

| Param | Type | Description |
| --- | --- | --- |
| reason | <code>string</code> | The reason for deleting the sticker. |

<a name="Sticker+setName"></a>

### sticker.setName(name, reason) ⇒ <code>Promise</code>
Sets the name and reason for an object.

**Kind**: instance method of [<code>Sticker</code>](#Sticker)  
**Returns**: <code>Promise</code> - - A promise that resolves when the name and reason are successfully set.  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The new name to set. |
| reason | <code>string</code> | The reason for setting the new name. |

<a name="Sticker+setDescription"></a>

### sticker.setDescription(description, reason) ⇒ <code>Promise</code>
Sets the description of an object and updates it with the provided reason.

**Kind**: instance method of [<code>Sticker</code>](#Sticker)  
**Returns**: <code>Promise</code> - - A promise that resolves when the description is successfully updated.  

| Param | Type | Description |
| --- | --- | --- |
| description | <code>string</code> | The new description to set. |
| reason | <code>string</code> | The reason for updating the description. |

<a name="Sticker+setTags"></a>

### sticker.setTags(tags, reason) ⇒ <code>Promise</code>
Sets the tags of an object and provides a reason for the change.

**Kind**: instance method of [<code>Sticker</code>](#Sticker)  
**Returns**: <code>Promise</code> - - A promise that resolves when the tags are successfully set.  

| Param | Type | Description |
| --- | --- | --- |
| tags | <code>Array</code> | The new tags to set. |
| reason | <code>string</code> | The reason for the change. |

<a name="Sticker+fetchPack"></a>

### sticker.fetchPack() ⇒ <code>Promise.&lt;(NitroPack\|null)&gt;</code>
Fetches the Nitro Pack with the specified packId from the client.

**Kind**: instance method of [<code>Sticker</code>](#Sticker)  
**Returns**: <code>Promise.&lt;(NitroPack\|null)&gt;</code> - A promise that resolves to the Nitro Pack object if found, or null if not found.  
<a name="Sticker+imageURL"></a>

### sticker.imageURL(options) ⇒ <code>string</code>
Generates the URL for the sticker image with the specified options.

**Kind**: instance method of [<code>Sticker</code>](#Sticker)  
**Returns**: <code>string</code> - The URL of the sticker image.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options for generating the URL. |
| [options.size] | <code>string</code> | The desired size of the image. |
| [options.format] | <code>string</code> | The desired format of the image. |

<a name="Sticker+equals"></a>

### sticker.equals(sticker) ⇒ <code>boolean</code>
Checks if the given object is equal to this sticker.

**Kind**: instance method of [<code>Sticker</code>](#Sticker)  
**Returns**: <code>boolean</code> - - True if the objects are equal, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| sticker | [<code>Sticker</code>](#Sticker) | The object to compare with this sticker. |

