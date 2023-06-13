<a name="StickerPack"></a>

## StickerPack ⇐ <code>Base</code>
It's a class that represents a sticker pack

**Kind**: global class  
**Extends**: <code>Base</code>  

* [StickerPack](#StickerPack) ⇐ <code>Base</code>
    * [new StickerPack([data], client)](#new_StickerPack_new)
    * [.fetch()](#StickerPack+fetch) ⇒
    * [.bannerURL(options)](#StickerPack+bannerURL) ⇒

<a name="new_StickerPack_new"></a>

### new StickerPack([data], client)
It's a constructor function that takes in data and a client, and then sets the data to the classproperties.


| Param | Description |
| --- | --- |
| [data] |  |
| client | Discord.js Client |

<a name="StickerPack+fetch"></a>

### stickerPack.fetch() ⇒
It fetches the sticker pack from Discord's API and returns it

**Kind**: instance method of [<code>StickerPack</code>](#StickerPack)  
**Returns**: The sticker object.  
<a name="StickerPack+bannerURL"></a>

### stickerPack.bannerURL(options) ⇒
It returns the URL of the banner image of the sticker pack.

**Kind**: instance method of [<code>StickerPack</code>](#StickerPack)  
**Returns**: The URL of the banner image.  

| Param |
| --- |
| options | 

