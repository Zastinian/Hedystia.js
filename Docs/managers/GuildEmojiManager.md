<a name="GuildEmojiManager"></a>

## GuildEmojiManager ⇐ <code>EmojiManager</code>
Represents a manager for guild emojis.

**Kind**: global class  
**Extends**: <code>EmojiManager</code>  

* [GuildEmojiManager](#GuildEmojiManager) ⇐ <code>EmojiManager</code>
    * [new GuildEmojiManager(guildId, client)](#new_GuildEmojiManager_new)
    * [.cache](#GuildEmojiManager+cache) ⇒ <code>Array</code>
    * [._add(emojis, [options])](#GuildEmojiManager+_add) ⇒ <code>Promise</code>

<a name="new_GuildEmojiManager_new"></a>

### new GuildEmojiManager(guildId, client)
Constructs a new instance of the class.


| Param | Type | Description |
| --- | --- | --- |
| guildId | <code>string</code> | The ID of the guild. |
| client | <code>Client</code> | The client object. |

<a name="GuildEmojiManager+cache"></a>

### guildEmojiManager.cache ⇒ <code>Array</code>
Retrieves the cache for the current guild.

**Kind**: instance property of [<code>GuildEmojiManager</code>](#GuildEmojiManager)  
**Returns**: <code>Array</code> - An array of objects from the cache that belong to the current guild.  
<a name="GuildEmojiManager+_add"></a>

### guildEmojiManager.\_add(emojis, [options]) ⇒ <code>Promise</code>
Adds emojis to the guild's emoji collection.

**Kind**: instance method of [<code>GuildEmojiManager</code>](#GuildEmojiManager)  
**Returns**: <code>Promise</code> - A promise that resolves when the emojis are added.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| emojis | <code>Array</code> |  | The emojis to add. |
| [options] | <code>Object</code> |  | Additional options for adding emojis. |
| [options.cache] | <code>boolean</code> | <code>true</code> | Whether to cache the added emojis. |
| [options.force] | <code>boolean</code> | <code>false</code> | Whether to force the addition of emojis. |

