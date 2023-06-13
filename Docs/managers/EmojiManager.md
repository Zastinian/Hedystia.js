<a name="EmojiManager"></a>

## EmojiManager
**Kind**: global class  

* [EmojiManager](#EmojiManager)
    * [new EmojiManager(client)](#new_EmojiManager_new)
    * _instance_
        * [.cache](#EmojiManager+cache) ⇒
        * [._add(emojis, [guildId], [options])](#EmojiManager+_add) ⇒
        * [.create([options])](#EmojiManager+create) ⇒
        * [.edit(emoji, [options])](#EmojiManager+edit) ⇒
        * [.delete(emoji, reason)](#EmojiManager+delete) ⇒
        * [.fetch(emoji, options)](#EmojiManager+fetch) ⇒
        * [._fetchId(emoji, [cache], [force])](#EmojiManager+_fetchId) ⇒
    * _static_
        * [.transformRoles([roles])](#EmojiManager.transformRoles) ⇒
        * [.transformOptions(o)](#EmojiManager.transformOptions) ⇒

<a name="new_EmojiManager_new"></a>

### new EmojiManager(client)
It's a constructor function that takes a client parameter and passes it to the super function


| Param | Description |
| --- | --- |
| client | The client object. |

<a name="EmojiManager+cache"></a>

### emojiManager.cache ⇒
`return Collection`

**Kind**: instance property of [<code>EmojiManager</code>](#EmojiManager)  
**Returns**: The Collection class  
<a name="EmojiManager+_add"></a>

### emojiManager.\_add(emojis, [guildId], [options]) ⇒
It takes an emoji object, and returns an emoji object

**Kind**: instance method of [<code>EmojiManager</code>](#EmojiManager)  
**Returns**: A new Emoji object  

| Param | Description |
| --- | --- |
| emojis | The emoji(s) to add to the cache. Can be an emoji object, an emoji ID, or an emoji name. |
| [guildId] | The ID of the guild the emoji is in. |
| [options] | cache = true, force = false |

<a name="EmojiManager+create"></a>

### emojiManager.create([options]) ⇒
It creates a new emoji

**Kind**: instance method of [<code>EmojiManager</code>](#EmojiManager)  
**Returns**: A new emoji object  

| Param | Description |
| --- | --- |
| [options] | Object |

<a name="EmojiManager+edit"></a>

### emojiManager.edit(emoji, [options]) ⇒
It edits an emoji

**Kind**: instance method of [<code>EmojiManager</code>](#EmojiManager)  
**Returns**: The emoji object  

| Param | Description |
| --- | --- |
| emoji | The emoji to edit. Can be an emoji object, or an emoji ID. |
| [options] | Object |

<a name="EmojiManager+delete"></a>

### emojiManager.delete(emoji, reason) ⇒
It deletes an emoji from the guild

**Kind**: instance method of [<code>EmojiManager</code>](#EmojiManager)  
**Returns**: The deleted emoji  

| Param | Description |
| --- | --- |
| emoji | The emoji to delete. Can be a string or an Emoji object. |
| reason | The reason for the deletion. |

<a name="EmojiManager+fetch"></a>

### emojiManager.fetch(emoji, options) ⇒
It fetches all the emojis in the guild

**Kind**: instance method of [<code>EmojiManager</code>](#EmojiManager)  
**Returns**: A new cache constructor  

| Param | Description |
| --- | --- |
| emoji | The emoji to fetch. Can be an emoji object, an emoji ID, or an emoji name. |
| options | An object containing the following properties: |

<a name="EmojiManager+_fetchId"></a>

### emojiManager.\_fetchId(emoji, [cache], [force]) ⇒
It fetches an emoji from the API and adds it to the cache

**Kind**: instance method of [<code>EmojiManager</code>](#EmojiManager)  
**Returns**: The emoji object  

| Param | Default | Description |
| --- | --- | --- |
| emoji |  | The emoji to fetch. Can be a string or an Emoji object. |
| [cache] | <code>true</code> | Whether or not to cache the emoji. |
| [force] | <code>false</code> | If true, it will force the cache to be updated. |

<a name="EmojiManager.transformRoles"></a>

### EmojiManager.transformRoles([roles]) ⇒
It transforms the roles object into a string.

**Kind**: static method of [<code>EmojiManager</code>](#EmojiManager)  
**Returns**: The roles object is being returned.  

| Param | Description |
| --- | --- |
| [roles] | The roles that the user has. |

<a name="EmojiManager.transformOptions"></a>

### EmojiManager.transformOptions(o) ⇒
It takes an object with a name, image, and roles property, and returns an object with the sameproperties, but with the image property being a data URI

**Kind**: static method of [<code>EmojiManager</code>](#EmojiManager)  
**Returns**: A new object with the name, image, and roles properties.  

| Param | Description |
| --- | --- |
| o | The options object. |

