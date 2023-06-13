<a name="PartialSticker"></a>

## PartialSticker ⇐ <code>Base</code>
It's a class that represents a partial sticker

**Kind**: global class  
**Extends**: <code>Base</code>  

* [PartialSticker](#PartialSticker) ⇐ <code>Base</code>
    * [new PartialSticker([data], client)](#new_PartialSticker_new)
    * [.fetch()](#PartialSticker+fetch) ⇒

<a name="new_PartialSticker_new"></a>

### new PartialSticker([data], client)
This function is a constructor for the Sticker class, which is a subclass of the Base class, and ittakes in a data object and a client object, and it sets the id, name, formatType, createdAt, andcreatedTimestamp properties of the Sticker class to the values of the id, name, format_type, id,and createdAt properties of the data object, respectively, and it returns the Sticker class.


| Param | Description |
| --- | --- |
| [data] | The data that was passed to the constructor. |
| client | The client that instantiated the object. |

<a name="PartialSticker+fetch"></a>

### partialSticker.fetch() ⇒
It fetches the sticker

**Kind**: instance method of [<code>PartialSticker</code>](#PartialSticker)  
**Returns**: The sticker object itself.  
