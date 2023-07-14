<a name="GuildStickerManager"></a>

## GuildStickerManager ⇐ <code>StickerManager</code>
Represents a sticker manager for a specific guild.

**Kind**: global class  
**Extends**: <code>StickerManager</code>  

* [GuildStickerManager](#GuildStickerManager) ⇐ <code>StickerManager</code>
    * [new GuildStickerManager(guildId, client)](#new_GuildStickerManager_new)
    * [.cache](#GuildStickerManager+cache) ⇒ <code>Array</code>

<a name="new_GuildStickerManager_new"></a>

### new GuildStickerManager(guildId, client)
Constructs a new instance of the class.


| Param | Type | Description |
| --- | --- | --- |
| guildId | <code>string</code> | The ID of the guild. |
| client | <code>Client</code> | The client object. |

<a name="GuildStickerManager+cache"></a>

### guildStickerManager.cache ⇒ <code>Array</code>
Retrieves the cache for the current guild.

**Kind**: instance property of [<code>GuildStickerManager</code>](#GuildStickerManager)  
**Returns**: <code>Array</code> - - An array of objects from the cache that belong to the current guild.  
