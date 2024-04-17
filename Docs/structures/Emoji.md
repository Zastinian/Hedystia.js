---
title: Emoji
sidebar:
  order: 21
---



## Emoji ⇐ <code>Base</code>
Represents an Emoji object.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [Emoji](#Emoji) ⇐ <code>Base</code>
    * [new Emoji([data], guildId, client)](#new_Emoji_new)
    * [.guild](#Emoji+guild) ⇒
    * [.fetch(options)](#Emoji+fetch) ⇒ <code>Promise</code>
    * [.edit(options)](#Emoji+edit) ⇒ <code>Promise</code>
    * [.setName(name, reason)](#Emoji+setName) ⇒ <code>Promise</code>
    * [.setRoles(roles, reason)](#Emoji+setRoles) ⇒ <code>Promise</code>
    * [.delete(reason)](#Emoji+delete) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.imageURL(options)](#Emoji+imageURL) ⇒ <code>string</code>
    * [.equals(emoji)](#Emoji+equals) ⇒ <code>boolean</code>

<a name="new_Emoji_new"></a>

### new Emoji([data], guildId, client)
Constructs a new instance of the GuildEmoji class.

**Returns**: <code>GuildEmoji</code> - - The newly created GuildEmoji instance.  

| Param | Type | Description |
| --- | --- | --- |
| [data] | <code>Object</code> | The data object containing the emoji information. |
| guildId | <code>string</code> | The ID of the guild that the emoji belongs to. |
| client | <code>Client</code> | The client instance. |

<a name="Emoji+guild"></a>

### emoji.guild ⇒
Get the guild object associated with this guildId.

**Kind**: instance property of [<code>Emoji</code>](#Emoji)  
**Returns**: The guild object.  
<a name="Emoji+fetch"></a>

### emoji.fetch(options) ⇒ <code>Promise</code>
Fetches emojis from the guild.

**Kind**: instance method of [<code>Emoji</code>](#Emoji)  
**Returns**: <code>Promise</code> - A promise that resolves to the fetched emojis.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Optional parameters for the fetch operation. |

<a name="Emoji+edit"></a>

### emoji.edit(options) ⇒ <code>Promise</code>
Edits the current emoji with the provided options.

**Kind**: instance method of [<code>Emoji</code>](#Emoji)  
**Returns**: <code>Promise</code> - A promise that resolves with the updated emoji.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options to update the emoji with. |

<a name="Emoji+setName"></a>

### emoji.setName(name, reason) ⇒ <code>Promise</code>
Sets the name and reason for an object.

**Kind**: instance method of [<code>Emoji</code>](#Emoji)  
**Returns**: <code>Promise</code> - - A promise that resolves when the name and reason are successfully set.  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The new name to set. |
| reason | <code>string</code> | The reason for setting the new name. |

<a name="Emoji+setRoles"></a>

### emoji.setRoles(roles, reason) ⇒ <code>Promise</code>
Sets the roles for the current object.

**Kind**: instance method of [<code>Emoji</code>](#Emoji)  
**Returns**: <code>Promise</code> - A promise that resolves when the roles are successfully set.  

| Param | Type | Description |
| --- | --- | --- |
| roles | <code>Array</code> | The roles to set. |
| reason | <code>string</code> | The reason for setting the roles. |

<a name="Emoji+delete"></a>

### emoji.delete(reason) ⇒ <code>Promise.&lt;void&gt;</code>
Deletes the emoji from the guild.

**Kind**: instance method of [<code>Emoji</code>](#Emoji)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the emoji is deleted.  

| Param | Type | Description |
| --- | --- | --- |
| reason | <code>string</code> | The reason for deleting the emoji. |

<a name="Emoji+imageURL"></a>

### emoji.imageURL(options) ⇒ <code>string</code>
Generates the URL for the image of this emoji.

**Kind**: instance method of [<code>Emoji</code>](#Emoji)  
**Returns**: <code>string</code> - The URL of the image.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options for generating the URL. |
| options.size | <code>number</code> | The desired size of the image. |
| options.format | <code>string</code> | The desired format of the image. |
| options.quality | <code>number</code> | The desired quality of the image. |

<a name="Emoji+equals"></a>

### emoji.equals(emoji) ⇒ <code>boolean</code>
Checks if the given object is equal to this Emoji object.

**Kind**: instance method of [<code>Emoji</code>](#Emoji)  
**Returns**: <code>boolean</code> - True if the objects are equal, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| emoji | [<code>Emoji</code>](#Emoji) | The object to compare with this Emoji. |

