---
title: SlashOption
sidebar:
  order: 45
---



## SlashOption ⇐ <code>Base</code>
Represents a slash command option.

**Kind**: global class  
**Extends**: <code>Base</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | The type of the option. |
| name | <code>string</code> | The name of the option. |
| description | <code>string</code> | The description of the option. |
| required | <code>boolean</code> | Whether the option is required or not. |
| choices | <code>Array.&lt;Object&gt;</code> | The choices available for the option. |
| channelTypes | <code>Array.&lt;string&gt;</code> | The types of channels the option can be used in. |
| minValue | <code>number</code> |  |


* [SlashOption](#SlashOption) ⇐ <code>Base</code>
    * [new SlashOption([data], client)](#new_SlashOption_new)
    * [.transformChoices(o)](#SlashOption.transformChoices) ⇒ <code>Object</code>
    * [.transformChannelTypes(channel)](#SlashOption.transformChannelTypes) ⇒ <code>string</code> \| <code>object</code>

<a name="new_SlashOption_new"></a>

### new SlashOption([data], client)
Constructs a new instance of the SlashOption class.


| Param | Type | Description |
| --- | --- | --- |
| [data] | <code>Object</code> | The data object containing the option properties. |
| client | <code>Client</code> | The client object. |

<a name="SlashOption.transformChoices"></a>

### SlashOption.transformChoices(o) ⇒ <code>Object</code>
Transforms an object into a new object with the properties "name" and "value".If the original object does not have a "name" or "value" property, the correspondingproperty in the new object will be set to undefined.

**Kind**: static method of [<code>SlashOption</code>](#SlashOption)  
**Returns**: <code>Object</code> - - The transformed object with "name" and "value" properties.  

| Param | Type | Description |
| --- | --- | --- |
| o | <code>Object</code> | The original object to transform. |

<a name="SlashOption.transformChannelTypes"></a>

### SlashOption.transformChannelTypes(channel) ⇒ <code>string</code> \| <code>object</code>
Transforms the channel type from a number to its corresponding string representation.

**Kind**: static method of [<code>SlashOption</code>](#SlashOption)  
**Returns**: <code>string</code> \| <code>object</code> - - The transformed channel type.  

| Param | Type | Description |
| --- | --- | --- |
| channel | <code>number</code> \| <code>object</code> | The channel type to transform. If it is a number, it will be converted to its string representation. If it is an object, it will be returned as is. |

