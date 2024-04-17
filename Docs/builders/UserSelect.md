---
title: UserSelect
sidebar:
  order: 15
---



## UserSelect
Represents a user select component in a Discord interaction.

**Kind**: global class  

* [UserSelect](#UserSelect)
    * [new UserSelect([data])](#new_UserSelect_new)
    * _instance_
        * [.setCustomId(customId)](#UserSelect+setCustomId) ⇒ [<code>UserSelect</code>](#UserSelect)
        * [.setPlaceholder(placeholder)](#UserSelect+setPlaceholder) ⇒ [<code>UserSelect</code>](#UserSelect)
        * [.setMinValues(minValue)](#UserSelect+setMinValues) ⇒ [<code>UserSelect</code>](#UserSelect)
        * [.setMaxValues(maxValue)](#UserSelect+setMaxValues) ⇒ [<code>UserSelect</code>](#UserSelect)
        * [.setDisabled(disabled)](#UserSelect+setDisabled) ⇒ [<code>UserSelect</code>](#UserSelect)
        * [.setOptions(options)](#UserSelect+setOptions) ⇒ [<code>UserSelect</code>](#UserSelect)
        * [.toJSON()](#UserSelect+toJSON) ⇒ <code>Object</code>
    * _static_
        * [.transformOptions([options])](#UserSelect.transformOptions) ⇒ <code>Object</code>
        * [.transformEmoji(emoji)](#UserSelect.transformEmoji) ⇒ <code>Object</code>

<a name="new_UserSelect_new"></a>

### new UserSelect([data])
Creates a new instance of UserSelect.


| Param | Type | Description |
| --- | --- | --- |
| [data] | <code>Object</code> | The data to create the UserSelect instance. |
| [data.custom_id] | <code>string</code> | The custom ID of the user select. |
| [data.options] | <code>Array.&lt;Object&gt;</code> | The options for the user select. |
| [data.options.label] | <code>string</code> | The label for the option. |
| [data.options.value] | <code>string</code> | The value for the option. |
| [data.options.description] | <code>string</code> | The description for the option. |
| [data.options.emoji] | <code>string</code> \| <code>Object</code> | The emoji for the option. |
| [data.options.emoji.name] | <code>string</code> | The name of the emoji. |
| [data.options.emoji.id] | <code>string</code> | The ID of the emoji. |
| [data.options.emoji.animated] | <code>boolean</code> | Whether the emoji is animated. |
| [data.options.default] | <code>boolean</code> | Whether the option is the default one. |
| [data.placeholder] | <code>string</code> | The placeholder text for the user select. |
| [data.min_values] | <code>number</code> | The minimum number of values that can be selected. |
| [data.max_values] | <code>number</code> | The maximum number of values that can be selected. |
| [data.disabled] | <code>boolean</code> | Whether the user select is disabled. |

<a name="UserSelect+setCustomId"></a>

### userSelect.setCustomId(customId) ⇒ [<code>UserSelect</code>](#UserSelect)
Sets the custom ID for the user select component.

**Kind**: instance method of [<code>UserSelect</code>](#UserSelect)  
**Returns**: [<code>UserSelect</code>](#UserSelect) - - The updated user select component.  

| Param | Type | Description |
| --- | --- | --- |
| customId | <code>string</code> | The custom ID to set. |

<a name="UserSelect+setPlaceholder"></a>

### userSelect.setPlaceholder(placeholder) ⇒ [<code>UserSelect</code>](#UserSelect)
Sets the placeholder text for the user select component.

**Kind**: instance method of [<code>UserSelect</code>](#UserSelect)  
**Returns**: [<code>UserSelect</code>](#UserSelect) - - The updated user select component.  

| Param | Type | Description |
| --- | --- | --- |
| placeholder | <code>string</code> | The placeholder text to set. |

<a name="UserSelect+setMinValues"></a>

### userSelect.setMinValues(minValue) ⇒ [<code>UserSelect</code>](#UserSelect)
Sets the minimum number of values that can be selected in the user select component.

**Kind**: instance method of [<code>UserSelect</code>](#UserSelect)  
**Returns**: [<code>UserSelect</code>](#UserSelect) - - The updated user select component.  

| Param | Type | Description |
| --- | --- | --- |
| minValue | <code>number</code> | The minimum number of values to set. |

<a name="UserSelect+setMaxValues"></a>

### userSelect.setMaxValues(maxValue) ⇒ [<code>UserSelect</code>](#UserSelect)
Sets the maximum number of values that can be selected in the user select component.

**Kind**: instance method of [<code>UserSelect</code>](#UserSelect)  
**Returns**: [<code>UserSelect</code>](#UserSelect) - - The updated user select component.  

| Param | Type | Description |
| --- | --- | --- |
| maxValue | <code>number</code> | The maximum number of values to set. |

<a name="UserSelect+setDisabled"></a>

### userSelect.setDisabled(disabled) ⇒ [<code>UserSelect</code>](#UserSelect)
Sets whether the user select component is disabled.

**Kind**: instance method of [<code>UserSelect</code>](#UserSelect)  
**Returns**: [<code>UserSelect</code>](#UserSelect) - - The updated user select component.  

| Param | Type | Description |
| --- | --- | --- |
| disabled | <code>boolean</code> | Whether the user select component is disabled. |

<a name="UserSelect+setOptions"></a>

### userSelect.setOptions(options) ⇒ [<code>UserSelect</code>](#UserSelect)
Sets the options for the user select component.

**Kind**: instance method of [<code>UserSelect</code>](#UserSelect)  
**Returns**: [<code>UserSelect</code>](#UserSelect) - - The updated user select component.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Array.&lt;Object&gt;</code> | An array of option objects to set. |

<a name="UserSelect+toJSON"></a>

### userSelect.toJSON() ⇒ <code>Object</code>
Converts the user select component to a plain object that can be sent in a Discord message.

**Kind**: instance method of [<code>UserSelect</code>](#UserSelect)  
**Returns**: <code>Object</code> - - The user select component as a plain object.  
<a name="UserSelect.transformOptions"></a>

### UserSelect.transformOptions([options]) ⇒ <code>Object</code>
Transforms an option object for a user select component into a simpler format.

**Kind**: static method of [<code>UserSelect</code>](#UserSelect)  
**Returns**: <code>Object</code> - - The transformed option object.  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | The option object to transform. |

<a name="UserSelect.transformEmoji"></a>

### UserSelect.transformEmoji(emoji) ⇒ <code>Object</code>
Transforms a Discord emoji object or string into a simpler format.

**Kind**: static method of [<code>UserSelect</code>](#UserSelect)  
**Returns**: <code>Object</code> - - The transformed emoji object.  

| Param | Type | Description |
| --- | --- | --- |
| emoji | <code>Object</code> \| <code>string</code> | The Discord emoji object or string to transform. |

