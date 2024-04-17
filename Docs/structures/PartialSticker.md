---
title: PartialSticker
sidebar:
  order: 52
---



## PartialSticker ⇐ <code>Base</code>
Represents a partial sticker object.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [PartialSticker](#PartialSticker) ⇐ <code>Base</code>
    * [new PartialSticker([data], client)](#new_PartialSticker_new)
    * [.fetch()](#PartialSticker+fetch) ⇒ <code>Promise</code>

<a name="new_PartialSticker_new"></a>

### new PartialSticker([data], client)
Constructs a new instance of the Sticker class.


| Param | Type | Description |
| --- | --- | --- |
| [data] | <code>Object</code> | The data object containing the sticker information. |
| client | <code>Client</code> | The client instance. |

<a name="PartialSticker+fetch"></a>

### partialSticker.fetch() ⇒ <code>Promise</code>
Fetches a sticker using the client's fetchSticker method.

**Kind**: instance method of [<code>PartialSticker</code>](#PartialSticker)  
**Returns**: <code>Promise</code> - A promise that resolves with the fetched sticker.  
