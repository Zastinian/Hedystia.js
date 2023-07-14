<a name="EmojiManager"></a>

## EmojiManager ⇐ <code>Base</code>
Represents a manager for handling emojis in a guild.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [EmojiManager](#EmojiManager) ⇐ <code>Base</code>
    * [new EmojiManager(client)](#new_EmojiManager_new)
    * _instance_
        * [.cache](#EmojiManager+cache) ⇒
        * [._add(emojis, [guildId], [options])](#EmojiManager+_add) ⇒ <code>Emoji</code> \| <code>null</code>
        * [.create([options])](#EmojiManager+create) ⇒ <code>Promise.&lt;Emoji&gt;</code>
        * [.edit(emoji, [options])](#EmojiManager+edit) ⇒ <code>Promise.&lt;Emoji&gt;</code>
        * [.delete(emoji, reason)](#EmojiManager+delete) ⇒ <code>Promise.&lt;Emoji&gt;</code>
        * [.fetch(emoji, [options])](#EmojiManager+fetch) ⇒ <code>Promise.&lt;EmojiCache&gt;</code>
        * [._fetchId(emoji, [cache], [force])](#EmojiManager+_fetchId) ⇒ <code>Promise.&lt;Emoji&gt;</code>
    * _static_
        * [.transformRoles(roles)](#EmojiManager.transformRoles) ⇒ <code>string</code> \| <code>undefined</code>
        * [.transformOptions(o)](#EmojiManager.transformOptions) ⇒ <code>Promise.&lt;Object&gt;</code>

<a name="new_EmojiManager_new"></a>

### new EmojiManager(client)
Constructs a new instance of the class.


| Param | Type | Description |
| --- | --- | --- |
| client | <code>Client</code> | The client object used for communication with the server. |

<a name="EmojiManager+cache"></a>

### emojiManager.cache ⇒
Getter method for the cache property.

**Kind**: instance property of [<code>EmojiManager</code>](#EmojiManager)  
**Returns**: The Collection object representing the cache.  
<a name="EmojiManager+_add"></a>

### emojiManager.\_add(emojis, [guildId], [options]) ⇒ <code>Emoji</code> \| <code>null</code>
Adds an emoji to the cache and returns the emoji object.

**Kind**: instance method of [<code>EmojiManager</code>](#EmojiManager)  
**Returns**: <code>Emoji</code> \| <code>null</code> - The added emoji object, or null if no emoji is provided.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| emojis | <code>string</code> \| <code>EmojiResolvable</code> |  | The emoji or emoji ID to add to the cache. |
| [guildId] | <code>string</code> | <code>&quot;this.guildId&quot;</code> | The ID of the guild where the emoji belongs. |
| [options] | <code>object</code> | <code>{cache: true, force: false}</code> | Additional options for adding the emoji. |
| [options.cache] | <code>boolean</code> | <code>true</code> | Whether to cache the emoji object. |
| [options.force] | <code>boolean</code> | <code>false</code> | Whether to force re-fetching the emoji from the API. |

<a name="EmojiManager+create"></a>

### emojiManager.create([options]) ⇒ <code>Promise.&lt;Emoji&gt;</code>
Creates a new emoji in the guild.

**Kind**: instance method of [<code>EmojiManager</code>](#EmojiManager)  
**Returns**: <code>Promise.&lt;Emoji&gt;</code> - A promise that resolves with the created emoji.  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | The options for creating the emoji. |
| [options.reason] | <code>string</code> | The reason for creating the emoji. |

<a name="EmojiManager+edit"></a>

### emojiManager.edit(emoji, [options]) ⇒ <code>Promise.&lt;Emoji&gt;</code>
Edits an emoji in the guild.

**Kind**: instance method of [<code>EmojiManager</code>](#EmojiManager)  
**Returns**: <code>Promise.&lt;Emoji&gt;</code> - A promise that resolves with the edited emoji.  

| Param | Type | Description |
| --- | --- | --- |
| emoji | <code>string</code> \| <code>Emoji</code> | The emoji to edit. Can be either the emoji ID or the Emoji object. |
| [options] | <code>Object</code> | Additional options for editing the emoji. |
| [options.reason] | <code>string</code> | The reason for editing the emoji. |

<a name="EmojiManager+delete"></a>

### emojiManager.delete(emoji, reason) ⇒ <code>Promise.&lt;Emoji&gt;</code>
Deletes an emoji from the guild.

**Kind**: instance method of [<code>EmojiManager</code>](#EmojiManager)  
**Returns**: <code>Promise.&lt;Emoji&gt;</code> - - The deleted emoji.  
**Throws**:

- <code>Error</code> - If the deletion fails.


| Param | Type | Description |
| --- | --- | --- |
| emoji | <code>string</code> \| <code>Emoji</code> | The emoji to delete. Can be either the emoji ID or the Emoji object. |
| reason | <code>string</code> | The reason for deleting the emoji. |

<a name="EmojiManager+fetch"></a>

### emojiManager.fetch(emoji, [options]) ⇒ <code>Promise.&lt;EmojiCache&gt;</code>
Fetches an emoji from the guild's emoji list.

**Kind**: instance method of [<code>EmojiManager</code>](#EmojiManager)  
**Returns**: <code>Promise.&lt;EmojiCache&gt;</code> - A promise that resolves to the fetched emoji.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| emoji | <code>string</code> \| <code>object</code> |  | The emoji to fetch. Can be either an emoji ID or a string representation of the emoji. |
| [options] | <code>object</code> |  | Additional options for the fetch operation. |
| [options.cache] | <code>boolean</code> | <code>true</code> | Whether to cache the fetched emoji. |
| [options.force] | <code>boolean</code> | <code>false</code> | Whether to force the fetch operation even if the emoji is already cached. |

<a name="EmojiManager+_fetchId"></a>

### emojiManager.\_fetchId(emoji, [cache], [force]) ⇒ <code>Promise.&lt;Emoji&gt;</code>
Fetches the ID of an emoji from the guild.

**Kind**: instance method of [<code>EmojiManager</code>](#EmojiManager)  
**Returns**: <code>Promise.&lt;Emoji&gt;</code> - - A promise that resolves to the fetched emoji.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| emoji | <code>string</code> \| <code>Emoji</code> |  | The emoji or the ID of the emoji to fetch. |
| [cache] | <code>boolean</code> | <code>true</code> | Whether to cache the fetched emoji. |
| [force] | <code>boolean</code> | <code>false</code> | Whether to force fetch the emoji even if it is already cached. |

<a name="EmojiManager.transformRoles"></a>

### EmojiManager.transformRoles(roles) ⇒ <code>string</code> \| <code>undefined</code>
Transforms the given roles object into a string or returns the id property of the roles object.

**Kind**: static method of [<code>EmojiManager</code>](#EmojiManager)  
**Returns**: <code>string</code> \| <code>undefined</code> - - The transformed roles as a string or the id property of the roles object.  

| Param | Type | Description |
| --- | --- | --- |
| roles | <code>Object</code> | The roles object to transform. |

<a name="EmojiManager.transformOptions"></a>

### EmojiManager.transformOptions(o) ⇒ <code>Promise.&lt;Object&gt;</code>
Transforms the given options object into a new object with modified properties.

**Kind**: static method of [<code>EmojiManager</code>](#EmojiManager)  
**Returns**: <code>Promise.&lt;Object&gt;</code> - - A promise that resolves to the transformed options object.  

| Param | Type | Description |
| --- | --- | --- |
| o | <code>Object</code> | The options object to transform. |

