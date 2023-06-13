<a name="SlashOption"></a>

## SlashOption
**Kind**: global class  

* [SlashOption](#SlashOption)
    * [new SlashOption([data], client)](#new_SlashOption_new)
    * [.transformChoices([o])](#SlashOption.transformChoices) ⇒
    * [.transformChannelTypes([channel])](#SlashOption.transformChannelTypes) ⇒

<a name="new_SlashOption_new"></a>

### new SlashOption([data], client)
It takes in a JSON object and returns a SlashOption object


| Param | Description |
| --- | --- |
| [data] | The data that is passed to the constructor. |
| client | The client that instantiated the object. |

<a name="SlashOption.transformChoices"></a>

### SlashOption.transformChoices([o]) ⇒
It takes an object and returns a new object with the same keys but with the values transformed

**Kind**: static method of [<code>SlashOption</code>](#SlashOption)  
**Returns**: An object with the properties name and value.  

| Param | Description |
| --- | --- |
| [o] | The object to transform. |

<a name="SlashOption.transformChannelTypes"></a>

### SlashOption.transformChannelTypes([channel]) ⇒
It takes a channel object and returns the channel type

**Kind**: static method of [<code>SlashOption</code>](#SlashOption)  
**Returns**: The channel type is being returned.  

| Param | Description |
| --- | --- |
| [channel] | The channel to transform. |

