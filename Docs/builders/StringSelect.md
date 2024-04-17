---
title: StringSelect
sidebar:
  order: 14
---



## StringSelect
Represents a select menu with string options.

**Kind**: global class  

* [StringSelect](#StringSelect)
    * [new StringSelect([data])](#new_StringSelect_new)
    * _instance_
        * [.setCustomId(customId)](#StringSelect+setCustomId) ⇒ [<code>StringSelect</code>](#StringSelect)
        * [.setPlaceholder(placeholder)](#StringSelect+setPlaceholder) ⇒ [<code>StringSelect</code>](#StringSelect)
        * [.setMinValues(minValue)](#StringSelect+setMinValues) ⇒ [<code>StringSelect</code>](#StringSelect)
        * [.setMaxValues(maxValue)](#StringSelect+setMaxValues) ⇒ [<code>StringSelect</code>](#StringSelect)
        * [.setDisabled(disabled)](#StringSelect+setDisabled) ⇒ [<code>StringSelect</code>](#StringSelect)
        * [.setOptions([options])](#StringSelect+setOptions) ⇒ [<code>StringSelect</code>](#StringSelect)
        * [.addOptions([options])](#StringSelect+addOptions) ⇒ [<code>StringSelect</code>](#StringSelect)
        * [.toJSON()](#StringSelect+toJSON) ⇒ <code>Object</code>
    * _static_
        * [.transformOptions([options])](#StringSelect.transformOptions) ⇒ <code>Object</code>
        * [.transformEmoji(emoji)](#StringSelect.transformEmoji) ⇒ <code>Object</code>

<a name="new_StringSelect_new"></a>

### new StringSelect([data])

| Param | Type | Description |
| --- | --- | --- |
| [data] | <code>Object</code> | The data for the select menu. |

<a name="StringSelect+setCustomId"></a>

### stringSelect.setCustomId(customId) ⇒ [<code>StringSelect</code>](#StringSelect)
Sets the custom ID for the select menu.

**Kind**: instance method of [<code>StringSelect</code>](#StringSelect)  
**Returns**: [<code>StringSelect</code>](#StringSelect) - - The updated StringSelect instance.  

| Param | Type | Description |
| --- | --- | --- |
| customId | <code>string</code> | The custom ID for the select menu. |

<a name="StringSelect+setPlaceholder"></a>

### stringSelect.setPlaceholder(placeholder) ⇒ [<code>StringSelect</code>](#StringSelect)
Sets the placeholder text for the select menu.

**Kind**: instance method of [<code>StringSelect</code>](#StringSelect)  
**Returns**: [<code>StringSelect</code>](#StringSelect) - - The updated StringSelect instance.  

| Param | Type | Description |
| --- | --- | --- |
| placeholder | <code>string</code> | The placeholder text for the select menu. |

<a name="StringSelect+setMinValues"></a>

### stringSelect.setMinValues(minValue) ⇒ [<code>StringSelect</code>](#StringSelect)
Sets the minimum number of values that can be selected in the select menu.

**Kind**: instance method of [<code>StringSelect</code>](#StringSelect)  
**Returns**: [<code>StringSelect</code>](#StringSelect) - - The updated StringSelect instance.  

| Param | Type | Description |
| --- | --- | --- |
| minValue | <code>number</code> | The minimum number of values that can be selected. |

<a name="StringSelect+setMaxValues"></a>

### stringSelect.setMaxValues(maxValue) ⇒ [<code>StringSelect</code>](#StringSelect)
Sets the maximum number of values that can be selected in the select menu.

**Kind**: instance method of [<code>StringSelect</code>](#StringSelect)  
**Returns**: [<code>StringSelect</code>](#StringSelect) - - The updated StringSelect instance.  

| Param | Type | Description |
| --- | --- | --- |
| maxValue | <code>number</code> | The maximum number of values that can be selected. |

<a name="StringSelect+setDisabled"></a>

### stringSelect.setDisabled(disabled) ⇒ [<code>StringSelect</code>](#StringSelect)
Sets whether the select menu is disabled.

**Kind**: instance method of [<code>StringSelect</code>](#StringSelect)  
**Returns**: [<code>StringSelect</code>](#StringSelect) - - The updated StringSelect instance.  

| Param | Type | Description |
| --- | --- | --- |
| disabled | <code>boolean</code> | Whether the select menu is disabled. |

<a name="StringSelect+setOptions"></a>

### stringSelect.setOptions([options]) ⇒ [<code>StringSelect</code>](#StringSelect)
Sets the options for the select menu.

**Kind**: instance method of [<code>StringSelect</code>](#StringSelect)  
**Returns**: [<code>StringSelect</code>](#StringSelect) - - The updated StringSelect instance.  
**Throws**:

- <code>RangeError</code> - If the options array has more than 25 items.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Array.&lt;Object&gt;</code> | <code>[]</code> | The options for the select menu. |

<a name="StringSelect+addOptions"></a>

### stringSelect.addOptions([options]) ⇒ [<code>StringSelect</code>](#StringSelect)
Adds options to the select menu.

**Kind**: instance method of [<code>StringSelect</code>](#StringSelect)  
**Returns**: [<code>StringSelect</code>](#StringSelect) - - The updated StringSelect instance.  
**Throws**:

- <code>RangeError</code> - If the options array has more items than can be added to the select menu.
- <code>RangeError</code> - If no options are provided to add to the select menu.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Array.&lt;Object&gt;</code> | <code>[]</code> | The options to add to the select menu. |

<a name="StringSelect+toJSON"></a>

### stringSelect.toJSON() ⇒ <code>Object</code>
Returns the JSON representation of the select menu.

**Kind**: instance method of [<code>StringSelect</code>](#StringSelect)  
**Returns**: <code>Object</code> - - The JSON representation of the select menu.  
<a name="StringSelect.transformOptions"></a>

### StringSelect.transformOptions([options]) ⇒ <code>Object</code>
Transforms an option object for a string select component into a simpler format.

**Kind**: static method of [<code>StringSelect</code>](#StringSelect)  
**Returns**: <code>Object</code> - - The transformed option object.  
**Throws**:

- <code>RangeError</code> - If the option object is missing the label or value properties, or if the default property is not a boolean.


| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | The option object to transform. |

<a name="StringSelect.transformEmoji"></a>

### StringSelect.transformEmoji(emoji) ⇒ <code>Object</code>
Transforms an emoji object for a string select component into a simpler format.

**Kind**: static method of [<code>StringSelect</code>](#StringSelect)  
**Returns**: <code>Object</code> - - The transformed emoji object.  

| Param | Type | Description |
| --- | --- | --- |
| emoji | <code>Object</code> | The emoji object to transform. |

