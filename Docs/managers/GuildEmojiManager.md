<a name="GuildEmojiManager"></a>

## GuildEmojiManager
**Kind**: global class  

* [GuildEmojiManager](#GuildEmojiManager)
    * [new GuildEmojiManager(guildId, client)](#new_GuildEmojiManager_new)
    * [.cache](#GuildEmojiManager+cache) ⇒
    * [._add(emojis, [options])](#GuildEmojiManager+_add) ⇒

<a name="new_GuildEmojiManager_new"></a>

### new GuildEmojiManager(guildId, client)
This function is a constructor for the class


| Param | Description |
| --- | --- |
| guildId | The ID of the guild you want to get the settings for. |
| client | The client that the command is being run on. |

<a name="GuildEmojiManager+cache"></a>

### guildEmojiManager.cache ⇒
It returns the cache, but only the cache that has the same guildId as the current guild

**Kind**: instance property of [<code>GuildEmojiManager</code>](#GuildEmojiManager)  
**Returns**: The cache is being filtered by the guildId.  
<a name="GuildEmojiManager+_add"></a>

### guildEmojiManager.\_add(emojis, [options]) ⇒
`_add` is a function that adds emojis to a guild

**Kind**: instance method of [<code>GuildEmojiManager</code>](#GuildEmojiManager)  
**Returns**: The return value of the super._add method.  

| Param | Description |
| --- | --- |
| emojis | The emojis to add. This can be a single emoji, or an array of emojis. |
| [options] | cache = true, force = false |

