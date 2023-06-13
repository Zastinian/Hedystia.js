<a name="GuildStickerManager"></a>

## GuildStickerManager
**Kind**: global class  

* [GuildStickerManager](#GuildStickerManager)
    * [new GuildStickerManager(guildId, client)](#new_GuildStickerManager_new)
    * [.cache](#GuildStickerManager+cache) ⇒

<a name="new_GuildStickerManager_new"></a>

### new GuildStickerManager(guildId, client)
`constructor(guildId, client)` is a function that takes two arguments, `guildId` and `client`, andassigns them to the `guildId` and `client` properties of the class.


| Param | Description |
| --- | --- |
| guildId | The ID of the guild you want to get the settings for. |
| client | The client that the command is being run on. |

<a name="GuildStickerManager+cache"></a>

### guildStickerManager.cache ⇒
`return super.cache.filter((o) => o.guildId === this.guildId)`The `super` keyword is used to access and call functions on an object's parent

**Kind**: instance property of [<code>GuildStickerManager</code>](#GuildStickerManager)  
**Returns**: The cache property is being returned.  
