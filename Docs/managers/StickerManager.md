<a name="StickerManager"></a>

## StickerManager
**Kind**: global class  

* [StickerManager](#StickerManager)
    * [new StickerManager(client)](#new_StickerManager_new)
    * [.cache](#StickerManager+cache) ⇒
    * [._add(stickers, [guildId], [options])](#StickerManager+_add) ⇒
    * [.fetch(sticker, options)](#StickerManager+fetch) ⇒
    * [._fetchId(sticker, [cache], [force])](#StickerManager+_fetchId) ⇒
    * [.create([options])](#StickerManager+create) ⇒
    * [.edit(sticker, [options])](#StickerManager+edit) ⇒
    * [.delete(sticker, reason)](#StickerManager+delete) ⇒

<a name="new_StickerManager_new"></a>

### new StickerManager(client)
It's a constructor function that takes a client parameter and passes it to the super function


| Param | Description |
| --- | --- |
| client | The client object. |

<a name="StickerManager+cache"></a>

### stickerManager.cache ⇒
It returns the Collection object.

**Kind**: instance property of [<code>StickerManager</code>](#StickerManager)  
**Returns**: The Collection class  
<a name="StickerManager+_add"></a>

### stickerManager.\_add(stickers, [guildId], [options]) ⇒
It adds a sticker to the cache

**Kind**: instance method of [<code>StickerManager</code>](#StickerManager)  
**Returns**: A sticker object  

| Param | Description |
| --- | --- |
| stickers | The sticker object or sticker ID. |
| [guildId] | The guild ID to use for the sticker. |
| [options] | cache = true, force = false |

<a name="StickerManager+fetch"></a>

### stickerManager.fetch(sticker, options) ⇒
It fetches all the stickers in a guild

**Kind**: instance method of [<code>StickerManager</code>](#StickerManager)  
**Returns**: A new cache object with the sticker id and the sticker object  

| Param | Description |
| --- | --- |
| sticker | The sticker to fetch. Can be a sticker ID, a sticker object, or nothing. |
| options | An object containing the following properties: |

<a name="StickerManager+_fetchId"></a>

### stickerManager.\_fetchId(sticker, [cache], [force]) ⇒
It fetches a sticker from the API and adds it to the cache

**Kind**: instance method of [<code>StickerManager</code>](#StickerManager)  
**Returns**: The sticker object  

| Param | Default | Description |
| --- | --- | --- |
| sticker |  | The sticker object or ID. |
| [cache] | <code>true</code> | Whether or not to cache the sticker. |
| [force] | <code>false</code> | If true, it will force the cache to be updated. |

<a name="StickerManager+create"></a>

### stickerManager.create([options]) ⇒
It creates a sticker.

**Kind**: instance method of [<code>StickerManager</code>](#StickerManager)  
**Returns**: A new sticker object  

| Param | Description |
| --- | --- |
| [options] | Object |

<a name="StickerManager+edit"></a>

### stickerManager.edit(sticker, [options]) ⇒
It edits a sticker.

**Kind**: instance method of [<code>StickerManager</code>](#StickerManager)  
**Returns**: A sticker object  

| Param | Description |
| --- | --- |
| sticker | The sticker to edit. Can be a sticker object or a sticker ID. |
| [options] | Object |

<a name="StickerManager+delete"></a>

### stickerManager.delete(sticker, reason) ⇒
It deletes a sticker

**Kind**: instance method of [<code>StickerManager</code>](#StickerManager)  
**Returns**: The deleted sticker  

| Param | Description |
| --- | --- |
| sticker | The sticker to delete. Can be a sticker object or a sticker ID. |
| reason | The reason for the deletion. |

