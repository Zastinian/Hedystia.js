---
title: StickerManager
sidebar:
  order: 40
---



## StickerManager ⇐ <code>Base</code>
Represents a Sticker Manager that handles operations related to stickers in a guild.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [StickerManager](#StickerManager) ⇐ <code>Base</code>
    * [new StickerManager(client)](#new_StickerManager_new)
    * [.cache](#StickerManager+cache) ⇒
    * [._add(stickers, [guildId], [options])](#StickerManager+_add) ⇒ <code>Sticker</code> \| <code>null</code>
    * [.fetch(sticker, [options])](#StickerManager+fetch) ⇒ <code>Promise.&lt;Sticker&gt;</code>
    * [._fetchId(sticker, [cache], [force])](#StickerManager+_fetchId) ⇒ <code>Promise.&lt;Sticker&gt;</code>
    * [.create([options])](#StickerManager+create) ⇒ <code>Promise.&lt;Sticker&gt;</code>
    * [.edit(sticker, [options])](#StickerManager+edit) ⇒ <code>Promise.&lt;Sticker&gt;</code>
    * [.delete(sticker, reason)](#StickerManager+delete) ⇒ <code>Promise.&lt;Sticker&gt;</code>

<a name="new_StickerManager_new"></a>

### new StickerManager(client)
Constructs a new instance of the class.


| Param | Type | Description |
| --- | --- | --- |
| client | <code>Client</code> | The client object used for communication with the server. |

<a name="StickerManager+cache"></a>

### stickerManager.cache ⇒
Getter method for the cache property.

**Kind**: instance property of [<code>StickerManager</code>](#StickerManager)  
**Returns**: The Collection object representing the cache.  
<a name="StickerManager+_add"></a>

### stickerManager.\_add(stickers, [guildId], [options]) ⇒ <code>Sticker</code> \| <code>null</code>
Adds a sticker to the cache and returns the sticker object.

**Kind**: instance method of [<code>StickerManager</code>](#StickerManager)  
**Returns**: <code>Sticker</code> \| <code>null</code> - The sticker object that was added to the cache  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| stickers | <code>string</code> \| <code>Sticker</code> |  | The sticker object or sticker ID to add to the cache. |
| [guildId] | <code>string</code> | <code>&quot;this.guildId&quot;</code> | The ID of the guild where the sticker belongs. |
| [options] | <code>object</code> | <code>{cache: true, force: false}</code> | Additional options for adding the sticker. |
| [options.cache] | <code>boolean</code> | <code>true</code> | Whether to cache the sticker object. |
| [options.force] | <code>boolean</code> | <code>false</code> | Whether to force fetching the sticker even if it is already in the cache. |

<a name="StickerManager+fetch"></a>

### stickerManager.fetch(sticker, [options]) ⇒ <code>Promise.&lt;Sticker&gt;</code>
Fetches a sticker from the server based on the provided sticker ID or options.

**Kind**: instance method of [<code>StickerManager</code>](#StickerManager)  
**Returns**: <code>Promise.&lt;Sticker&gt;</code> - - A promise that resolves to the fetched sticker.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| sticker | <code>string</code> \| <code>object</code> |  | The sticker ID or options object. |
| [options] | <code>object</code> |  | The options for fetching the sticker. |
| [options.cache] | <code>boolean</code> | <code>true</code> | Whether to cache the fetched sticker. |
| [options.force] | <code>boolean</code> | <code>false</code> | Whether to force fetch the sticker even if it is already cached. |

<a name="StickerManager+_fetchId"></a>

### stickerManager.\_fetchId(sticker, [cache], [force]) ⇒ <code>Promise.&lt;Sticker&gt;</code>
Fetches the ID of a sticker from the server.

**Kind**: instance method of [<code>StickerManager</code>](#StickerManager)  
**Returns**: <code>Promise.&lt;Sticker&gt;</code> - - A promise that resolves with the fetched sticker.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| sticker | <code>string</code> \| <code>Sticker</code> |  | The sticker or sticker ID to fetch. |
| [cache] | <code>boolean</code> | <code>true</code> | Whether to cache the fetched sticker. |
| [force] | <code>boolean</code> | <code>false</code> | Whether to force fetching the sticker even if it is already cached. |

<a name="StickerManager+create"></a>

### stickerManager.create([options]) ⇒ <code>Promise.&lt;Sticker&gt;</code>
Creates a sticker in the guild.

**Kind**: instance method of [<code>StickerManager</code>](#StickerManager)  
**Returns**: <code>Promise.&lt;Sticker&gt;</code> - A promise that resolves with the created sticker.  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | The options for creating the sticker. |
| [options.reason] | <code>string</code> | The reason for creating the sticker. |

<a name="StickerManager+edit"></a>

### stickerManager.edit(sticker, [options]) ⇒ <code>Promise.&lt;Sticker&gt;</code>
Edits a sticker with the given options.

**Kind**: instance method of [<code>StickerManager</code>](#StickerManager)  
**Returns**: <code>Promise.&lt;Sticker&gt;</code> - A promise that resolves with the edited sticker.  

| Param | Type | Description |
| --- | --- | --- |
| sticker | <code>string</code> \| <code>Sticker</code> | The sticker to edit. Can be either a sticker ID or a sticker object. |
| [options] | <code>Object</code> | The options for editing the sticker. |
| [options.reason] | <code>string</code> | The reason for editing the sticker. |

<a name="StickerManager+delete"></a>

### stickerManager.delete(sticker, reason) ⇒ <code>Promise.&lt;Sticker&gt;</code>
Deletes a sticker from the guild.

**Kind**: instance method of [<code>StickerManager</code>](#StickerManager)  
**Returns**: <code>Promise.&lt;Sticker&gt;</code> - - The deleted sticker object.  
**Throws**:

- <code>Error</code> - If the sticker deletion fails.


| Param | Type | Description |
| --- | --- | --- |
| sticker | <code>string</code> \| <code>Sticker</code> | The sticker to delete. Can be either a sticker ID or a sticker object. |
| reason | <code>string</code> | The reason for deleting the sticker. |

