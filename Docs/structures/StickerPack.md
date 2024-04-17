---
title: StickerPack
sidebar:
  order: 61
---



## StickerPack ⇐ <code>Base</code>
Represents a sticker pack.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [StickerPack](#StickerPack) ⇐ <code>Base</code>
    * [new StickerPack([data], client)](#new_StickerPack_new)
    * [.fetch()](#StickerPack+fetch) ⇒ <code>Promise.&lt;(Sticker\|null)&gt;</code>
    * [.bannerURL(options)](#StickerPack+bannerURL) ⇒ <code>string</code> \| <code>null</code>

<a name="new_StickerPack_new"></a>

### new StickerPack([data], client)
Constructs a new instance of the class.


| Param | Type | Description |
| --- | --- | --- |
| [data] | <code>Object</code> | The data object containing the properties for the instance. |
| client | <code>Client</code> | The client object. |

<a name="StickerPack+fetch"></a>

### stickerPack.fetch() ⇒ <code>Promise.&lt;(Sticker\|null)&gt;</code>
Fetches the nitro pack with the specified ID from the client's nitro packs.

**Kind**: instance method of [<code>StickerPack</code>](#StickerPack)  
**Returns**: <code>Promise.&lt;(Sticker\|null)&gt;</code> - A promise that resolves to the found nitro pack or null if not found.  
<a name="StickerPack+bannerURL"></a>

### stickerPack.bannerURL(options) ⇒ <code>string</code> \| <code>null</code>
Retrieves the URL of the banner image for the sticker pack.

**Kind**: instance method of [<code>StickerPack</code>](#StickerPack)  
**Returns**: <code>string</code> \| <code>null</code> - The URL of the banner image, or null if the bannerAssetId is not set.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options for the banner image. |
| options.size | <code>string</code> | The desired size of the banner image. |
| options.format | <code>string</code> | The desired format of the banner image. |

