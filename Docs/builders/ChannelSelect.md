<a name="ChannelSelect"></a>

## ChannelSelect
Class representing a Channel Select component for Discord message components.

**Kind**: global class  

* [ChannelSelect](#ChannelSelect)
    * [new ChannelSelect(data)](#new_ChannelSelect_new)
    * _instance_
        * [.setCustomId(customId)](#ChannelSelect+setCustomId) ⇒ [<code>ChannelSelect</code>](#ChannelSelect)
        * [.setPlaceholder(placeholder)](#ChannelSelect+setPlaceholder) ⇒ [<code>ChannelSelect</code>](#ChannelSelect)
        * [.setMinValues(minValue)](#ChannelSelect+setMinValues) ⇒ [<code>ChannelSelect</code>](#ChannelSelect)
        * [.setMaxValues(maxValue)](#ChannelSelect+setMaxValues) ⇒ [<code>ChannelSelect</code>](#ChannelSelect)
        * [.setDisabled(maxValue)](#ChannelSelect+setDisabled) ⇒ [<code>ChannelSelect</code>](#ChannelSelect)
        * [.setOptions(options)](#ChannelSelect+setOptions) ⇒ [<code>ChannelSelect</code>](#ChannelSelect)
        * [.toJSON()](#ChannelSelect+toJSON) ⇒ <code>Object</code>
    * _static_
        * [.transformOptions(options)](#ChannelSelect.transformOptions) ⇒ <code>Object</code>
        * [.transformEmoji(emoji)](#ChannelSelect.transformEmoji) ⇒ <code>Object</code>

<a name="new_ChannelSelect_new"></a>

### new ChannelSelect(data)
Creates a new instance of the ChannelSelect class.


| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | The data to initialize the channel select component with. |
| data.custom_id | <code>string</code> | The unique identifier for the component. |
| data.options | <code>Array</code> | The options for the select component. |
| data.options.label | <code>Object</code> | The label for the option. |
| data.options.value | <code>Object</code> | The value for the option. |
| data.options.description | <code>Object</code> | The description for the option. |
| data.options.emoji | <code>Object</code> | The emoji for the option. |
| data.options.default | <code>boolean</code> | Whether the option is the default option. |
| data.placeholder | <code>string</code> | The placeholder text for the select component. |
| data.min_values | <code>number</code> | The minimum number of options that can be selected. |
| data.max_values | <code>number</code> | The maximum number of options that can be selected. |
| data.disabled | <code>boolean</code> | Whether the component is disabled. |

<a name="ChannelSelect+setCustomId"></a>

### channelSelect.setCustomId(customId) ⇒ [<code>ChannelSelect</code>](#ChannelSelect)
Sets the custom ID of the select component.

**Kind**: instance method of [<code>ChannelSelect</code>](#ChannelSelect)  
**Returns**: [<code>ChannelSelect</code>](#ChannelSelect) - The ChannelSelect instance.  

| Param | Type | Description |
| --- | --- | --- |
| customId | <code>string</code> | The custom ID to set. |

<a name="ChannelSelect+setPlaceholder"></a>

### channelSelect.setPlaceholder(placeholder) ⇒ [<code>ChannelSelect</code>](#ChannelSelect)
Sets the placeholder text of the select component.

**Kind**: instance method of [<code>ChannelSelect</code>](#ChannelSelect)  
**Returns**: [<code>ChannelSelect</code>](#ChannelSelect) - The ChannelSelect instance.  

| Param | Type | Description |
| --- | --- | --- |
| placeholder | <code>string</code> | The placeholder text to set. |

<a name="ChannelSelect+setMinValues"></a>

### channelSelect.setMinValues(minValue) ⇒ [<code>ChannelSelect</code>](#ChannelSelect)
Set the minimum number of options that can be selected.

**Kind**: instance method of [<code>ChannelSelect</code>](#ChannelSelect)  
**Returns**: [<code>ChannelSelect</code>](#ChannelSelect) - The ChannelSelect instance.  

| Param | Type | Description |
| --- | --- | --- |
| minValue | <code>number</code> | The minimum number of options that can be selected. |

<a name="ChannelSelect+setMaxValues"></a>

### channelSelect.setMaxValues(maxValue) ⇒ [<code>ChannelSelect</code>](#ChannelSelect)
Set the maximum number of options that can be selected.

**Kind**: instance method of [<code>ChannelSelect</code>](#ChannelSelect)  
**Returns**: [<code>ChannelSelect</code>](#ChannelSelect) - The ChannelSelect instance.  

| Param | Type | Description |
| --- | --- | --- |
| maxValue | <code>number</code> | The maximum number of options that can be selected. |

<a name="ChannelSelect+setDisabled"></a>

### channelSelect.setDisabled(maxValue) ⇒ [<code>ChannelSelect</code>](#ChannelSelect)
Set the maximum number of options that can be selected.

**Kind**: instance method of [<code>ChannelSelect</code>](#ChannelSelect)  
**Returns**: [<code>ChannelSelect</code>](#ChannelSelect) - The ChannelSelect instance.  

| Param | Type | Description |
| --- | --- | --- |
| maxValue | <code>number</code> | The maximum number of options that can be selected. |

<a name="ChannelSelect+setOptions"></a>

### channelSelect.setOptions(options) ⇒ [<code>ChannelSelect</code>](#ChannelSelect)
Set the options for the select menu.

**Kind**: instance method of [<code>ChannelSelect</code>](#ChannelSelect)  
**Returns**: [<code>ChannelSelect</code>](#ChannelSelect) - The ChannelSelect instance.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Array.&lt;Object&gt;</code> | An array of option objects for the select menu. |

<a name="ChannelSelect+toJSON"></a>

### channelSelect.toJSON() ⇒ <code>Object</code>
Convert the ChannelSelect instance to a plain object for sending to Discord API.

**Kind**: instance method of [<code>ChannelSelect</code>](#ChannelSelect)  
**Returns**: <code>Object</code> - The plain object representation of the ChannelSelect.  
<a name="ChannelSelect.transformOptions"></a>

### ChannelSelect.transformOptions(options) ⇒ <code>Object</code>
Transforms the given options data into a format compatible with the select component.

**Kind**: static method of [<code>ChannelSelect</code>](#ChannelSelect)  
**Returns**: <code>Object</code> - The transformed options data.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options data to transform. |
| options.label | <code>string</code> | The label for the option. |
| options.value | <code>string</code> | The value for the option. |
| options.description | <code>string</code> | The description for the option. |
| options.emoji | <code>string</code> | The emoji for the option. |
| options.default | <code>boolean</code> | Whether the option is the default option. |

<a name="ChannelSelect.transformEmoji"></a>

### ChannelSelect.transformEmoji(emoji) ⇒ <code>Object</code>
Transforms the given emoji data into a format compatible with the select component.

**Kind**: static method of [<code>ChannelSelect</code>](#ChannelSelect)  
**Returns**: <code>Object</code> - The transformed emoji data.  

| Param | Type | Description |
| --- | --- | --- |
| emoji | <code>Object</code> \| <code>string</code> | The emoji data to transform. |
| emoji.name | <code>string</code> | The name of the emoji. |
| emoji.id | <code>string</code> | The ID of the emoji. |
| emoji.animated | <code>boolean</code> | Whether the emoji is animated. |

