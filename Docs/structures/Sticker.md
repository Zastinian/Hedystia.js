<a name="Sticker"></a>

## Sticker ⇐ <code>Base</code>
It's a class that represents a sticker in a guild

**Kind**: global class  
**Extends**: <code>Base</code>  

* [Sticker](#Sticker) ⇐ <code>Base</code>
    * [new Sticker([data], guildId, client)](#new_Sticker_new)
    * [.guild](#Sticker+guild) ⇒
    * [.fetch(options)](#Sticker+fetch) ⇒
    * [.edit(options)](#Sticker+edit) ⇒
    * [.delete(reason)](#Sticker+delete) ⇒
    * [.setName(name, reason)](#Sticker+setName) ⇒
    * [.setDescription(description, reason)](#Sticker+setDescription) ⇒
    * [.setTags(tags, reason)](#Sticker+setTags) ⇒
    * [.fetchPack()](#Sticker+fetchPack) ⇒
    * [.imageURL([options])](#Sticker+imageURL) ⇒
    * [.equals(sticker)](#Sticker+equals) ⇒

<a name="new_Sticker_new"></a>

### new Sticker([data], guildId, client)
This function is used to create a new instance of the Sticker class, which is used to represent asticker in a guild.


| Param | Description |
| --- | --- |
| [data] | The data that was received from the API. |
| guildId | The ID of the guild the sticker is in |
| client | Discord.Client |

<a name="Sticker+guild"></a>

### sticker.guild ⇒
It returns the guild object of the guild ID that is stored in the database

**Kind**: instance property of [<code>Sticker</code>](#Sticker)  
**Returns**: The guild object.  
<a name="Sticker+fetch"></a>

### sticker.fetch(options) ⇒
It fetches the sticker from the server

**Kind**: instance method of [<code>Sticker</code>](#Sticker)  
**Returns**: The sticker object.  

| Param | Description |
| --- | --- |
| options | An object containing the following properties: |

<a name="Sticker+edit"></a>

### sticker.edit(options) ⇒
It edits the sticker

**Kind**: instance method of [<code>Sticker</code>](#Sticker)  
**Returns**: The sticker object.  

| Param | Description |
| --- | --- |
| options | Object |

<a name="Sticker+delete"></a>

### sticker.delete(reason) ⇒
It deletes the sticker

**Kind**: instance method of [<code>Sticker</code>](#Sticker)  
**Returns**: The return value of the delete method in the StickerManager class.  

| Param | Description |
| --- | --- |
| reason | The reason for the deletion. |

<a name="Sticker+setName"></a>

### sticker.setName(name, reason) ⇒
It edits the name of the channel

**Kind**: instance method of [<code>Sticker</code>](#Sticker)  
**Returns**: The name of the channel.  

| Param | Description |
| --- | --- |
| name | The new name of the role. |
| reason | The reason for the edit. |

<a name="Sticker+setDescription"></a>

### sticker.setDescription(description, reason) ⇒
It edits the description of the channel

**Kind**: instance method of [<code>Sticker</code>](#Sticker)  
**Returns**: The description of the channel.  

| Param | Description |
| --- | --- |
| description | The new description of the channel. |
| reason | The reason for the edit. |

<a name="Sticker+setTags"></a>

### sticker.setTags(tags, reason) ⇒
It edits the tags of a message

**Kind**: instance method of [<code>Sticker</code>](#Sticker)  
**Returns**: The return value of the edit method.  

| Param | Description |
| --- | --- |
| tags | The new tags of the user. |
| reason | The reason for the edit. |

<a name="Sticker+fetchPack"></a>

### sticker.fetchPack() ⇒
It fetches the Nitro Pack from the Discord API and returns it

**Kind**: instance method of [<code>Sticker</code>](#Sticker)  
**Returns**: The pack object.  
<a name="Sticker+imageURL"></a>

### sticker.imageURL([options]) ⇒
It returns the URL of the sticker image

**Kind**: instance method of [<code>Sticker</code>](#Sticker)  
**Returns**: The URL of the sticker image.  

| Param | Description |
| --- | --- |
| [options] | Object |

<a name="Sticker+equals"></a>

### sticker.equals(sticker) ⇒
If the object passed in is not an instance of the Sticker class, return false. Otherwise, returntrue if the name, description, or tags of the object passed in are equal to the name, description,or tags of the object calling the function.

**Kind**: instance method of [<code>Sticker</code>](#Sticker)  
**Returns**: a boolean value.  

| Param | Description |
| --- | --- |
| sticker | The sticker to compare to. |

