<a name="RoleSelect"></a>

## RoleSelect
Represents a Discord role select component that allows users to select one or more roles.

**Kind**: global class  

* [RoleSelect](#RoleSelect)
    * [new RoleSelect([data])](#new_RoleSelect_new)
    * _instance_
        * [.setCustomId(customId)](#RoleSelect+setCustomId) ⇒ [<code>RoleSelect</code>](#RoleSelect)
        * [.setPlaceholder(placeholder)](#RoleSelect+setPlaceholder) ⇒ [<code>RoleSelect</code>](#RoleSelect)
        * [.setMinValues(minValue)](#RoleSelect+setMinValues) ⇒ [<code>RoleSelect</code>](#RoleSelect)
        * [.setMaxValues(maxValue)](#RoleSelect+setMaxValues) ⇒ [<code>RoleSelect</code>](#RoleSelect)
        * [.setDisabled(disabled)](#RoleSelect+setDisabled) ⇒ [<code>RoleSelect</code>](#RoleSelect)
        * [.setOptions(options)](#RoleSelect+setOptions) ⇒ [<code>RoleSelect</code>](#RoleSelect)
        * [.toJSON()](#RoleSelect+toJSON) ⇒ <code>Object</code>
    * _static_
        * [.transformOptions(options)](#RoleSelect.transformOptions) ⇒ <code>Object</code>
        * [.transformEmoji(emoji)](#RoleSelect.transformEmoji) ⇒ <code>Object</code>

<a name="new_RoleSelect_new"></a>

### new RoleSelect([data])
Create a role select component.


| Param | Type | Description |
| --- | --- | --- |
| [data] | <code>Object</code> | The data to set in the component. |
| [data.custom_id] | <code>string</code> | The custom ID of the component. |
| [data.customId] | <code>string</code> | The custom ID of the component. |
| [data.options] | <code>Array.&lt;Object&gt;</code> | The options of the component. |
| [data.placeholder] | <code>string</code> | The placeholder text of the component. |
| [data.min_values] | <code>number</code> | The minimum number of values that can be selected. |
| [data.max_values] | <code>number</code> | The maximum number of values that can be selected. |
| [data.minValues] | <code>number</code> | The minimum number of values that can be selected. |
| [data.maxValues] | <code>number</code> | The maximum number of values that can be selected. |
| [data.disabled] | <code>boolean</code> | Whether the component is disabled or not. |

<a name="RoleSelect+setCustomId"></a>

### roleSelect.setCustomId(customId) ⇒ [<code>RoleSelect</code>](#RoleSelect)
Set the custom ID of the component.

**Kind**: instance method of [<code>RoleSelect</code>](#RoleSelect)  
**Returns**: [<code>RoleSelect</code>](#RoleSelect) - The RoleSelect object.  

| Param | Type | Description |
| --- | --- | --- |
| customId | <code>string</code> | The custom ID to set. |

<a name="RoleSelect+setPlaceholder"></a>

### roleSelect.setPlaceholder(placeholder) ⇒ [<code>RoleSelect</code>](#RoleSelect)
Set the placeholder text of the component.

**Kind**: instance method of [<code>RoleSelect</code>](#RoleSelect)  
**Returns**: [<code>RoleSelect</code>](#RoleSelect) - The RoleSelect object.  

| Param | Type | Description |
| --- | --- | --- |
| placeholder | <code>string</code> | The placeholder text to set. |

<a name="RoleSelect+setMinValues"></a>

### roleSelect.setMinValues(minValue) ⇒ [<code>RoleSelect</code>](#RoleSelect)
Set the minimum number of values that can be selected.

**Kind**: instance method of [<code>RoleSelect</code>](#RoleSelect)  
**Returns**: [<code>RoleSelect</code>](#RoleSelect) - The RoleSelect object.  

| Param | Type | Description |
| --- | --- | --- |
| minValue | <code>number</code> | The minimum number of values to set. |

<a name="RoleSelect+setMaxValues"></a>

### roleSelect.setMaxValues(maxValue) ⇒ [<code>RoleSelect</code>](#RoleSelect)
Set the maximum number of values that can be selected.

**Kind**: instance method of [<code>RoleSelect</code>](#RoleSelect)  
**Returns**: [<code>RoleSelect</code>](#RoleSelect) - The RoleSelect object.  

| Param | Type | Description |
| --- | --- | --- |
| maxValue | <code>number</code> | The maximum number of values to set. |

<a name="RoleSelect+setDisabled"></a>

### roleSelect.setDisabled(disabled) ⇒ [<code>RoleSelect</code>](#RoleSelect)
Set whether the component is disabled or not.

**Kind**: instance method of [<code>RoleSelect</code>](#RoleSelect)  
**Returns**: [<code>RoleSelect</code>](#RoleSelect) - The RoleSelect object.  

| Param | Type | Description |
| --- | --- | --- |
| disabled | <code>boolean</code> | Whether the component is disabled or not. |

<a name="RoleSelect+setOptions"></a>

### roleSelect.setOptions(options) ⇒ [<code>RoleSelect</code>](#RoleSelect)
Set the options of the component.

**Kind**: instance method of [<code>RoleSelect</code>](#RoleSelect)  
**Returns**: [<code>RoleSelect</code>](#RoleSelect) - The RoleSelect object.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Array.&lt;Object&gt;</code> | The options to set. |

<a name="RoleSelect+toJSON"></a>

### roleSelect.toJSON() ⇒ <code>Object</code>
Returns the component data in the format expected by Discord's API.

**Kind**: instance method of [<code>RoleSelect</code>](#RoleSelect)  
**Returns**: <code>Object</code> - The component data.  
<a name="RoleSelect.transformOptions"></a>

### RoleSelect.transformOptions(options) ⇒ <code>Object</code>
Transforms an option object into a format suitable for the component.

**Kind**: static method of [<code>RoleSelect</code>](#RoleSelect)  
**Returns**: <code>Object</code> - The transformed option object.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The option object to transform. |
| [options.label] | <code>string</code> | The text to display on the option. |
| [options.value] | <code>string</code> | The value to be sent to the server when the option is selected. |
| [options.description] | <code>string</code> | The text to display when hovering over the option. |
| [options.emoji] | <code>string</code> \| <code>Object</code> | The emoji to display next to the option. |
| [options.default] | <code>boolean</code> | Whether the option should be selected by default. |

<a name="RoleSelect.transformEmoji"></a>

### RoleSelect.transformEmoji(emoji) ⇒ <code>Object</code>
Transforms an emoji to the structure expected by Discord's API.

**Kind**: static method of [<code>RoleSelect</code>](#RoleSelect)  
**Returns**: <code>Object</code> - The transformed emoji.  

| Param | Type | Description |
| --- | --- | --- |
| emoji | <code>Object</code> | The emoji to transform. |

