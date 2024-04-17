---
title: InputText
sidebar:
  order: 5
---



## InputText
Represents an Input Text component for a Discord interaction message.

**Kind**: global class  

* [InputText](#InputText)
    * [new InputText([data])](#new_InputText_new)
    * [.setCustomId(customId)](#InputText+setCustomId) ⇒ [<code>InputText</code>](#InputText)
    * [.setLabel(label)](#InputText+setLabel) ⇒ [<code>InputText</code>](#InputText)
    * [.setMaxLength(maxLength)](#InputText+setMaxLength) ⇒ [<code>InputText</code>](#InputText)
    * [.setMinLength(minLength)](#InputText+setMinLength) ⇒ [<code>InputText</code>](#InputText)
    * [.setRequired(required)](#InputText+setRequired) ⇒ [<code>InputText</code>](#InputText)
    * [.setPlaceholder(placeholder)](#InputText+setPlaceholder) ⇒ [<code>InputText</code>](#InputText)
    * [.setValue(value)](#InputText+setValue) ⇒ [<code>InputText</code>](#InputText)
    * [.setStyle(style)](#InputText+setStyle) ⇒ [<code>InputText</code>](#InputText)
    * [.toJSON()](#InputText+toJSON) ⇒ <code>Object</code>

<a name="new_InputText_new"></a>

### new InputText([data])
Constructs a new InputText component.


| Param | Type | Description |
| --- | --- | --- |
| [data] | <code>Object</code> | Optional data to set for the component. |
| [data.custom_id] | <code>string</code> | The custom ID of the component. |
| [data.style] | <code>string</code> \| <code>number</code> | The style of the component, can be a string or a number. |
| [data.label] | <code>string</code> | The label of the component. |
| [data.min_length] | <code>number</code> | The minimum length of the text input. |
| [data.max_length] | <code>number</code> | The maximum length of the text input. |
| [data.required] | <code>boolean</code> | Whether the component is required or not. |
| [data.value] | <code>string</code> | The value of the text input. |
| [data.placeholder] | <code>string</code> | The placeholder text for the text input. |

<a name="InputText+setCustomId"></a>

### inputText.setCustomId(customId) ⇒ [<code>InputText</code>](#InputText)
Sets the custom ID of the component.

**Kind**: instance method of [<code>InputText</code>](#InputText)  
**Returns**: [<code>InputText</code>](#InputText) - This component.  

| Param | Type | Description |
| --- | --- | --- |
| customId | <code>string</code> | The custom ID to set. |

<a name="InputText+setLabel"></a>

### inputText.setLabel(label) ⇒ [<code>InputText</code>](#InputText)
Sets the label of the component.

**Kind**: instance method of [<code>InputText</code>](#InputText)  
**Returns**: [<code>InputText</code>](#InputText) - This component.  

| Param | Type | Description |
| --- | --- | --- |
| label | <code>string</code> | The label to set. |

<a name="InputText+setMaxLength"></a>

### inputText.setMaxLength(maxLength) ⇒ [<code>InputText</code>](#InputText)
Sets the maximum length of the text input.

**Kind**: instance method of [<code>InputText</code>](#InputText)  
**Returns**: [<code>InputText</code>](#InputText) - This component.  

| Param | Type | Description |
| --- | --- | --- |
| maxLength | <code>number</code> | The maximum length to set. |

<a name="InputText+setMinLength"></a>

### inputText.setMinLength(minLength) ⇒ [<code>InputText</code>](#InputText)
Sets the minimum length of the text input.

**Kind**: instance method of [<code>InputText</code>](#InputText)  
**Returns**: [<code>InputText</code>](#InputText) - This component.  

| Param | Type | Description |
| --- | --- | --- |
| minLength | <code>number</code> | The minimum length to set. |

<a name="InputText+setRequired"></a>

### inputText.setRequired(required) ⇒ [<code>InputText</code>](#InputText)
Sets whether the component is required or not.

**Kind**: instance method of [<code>InputText</code>](#InputText)  
**Returns**: [<code>InputText</code>](#InputText) - This component.  

| Param | Type | Description |
| --- | --- | --- |
| required | <code>boolean</code> | Whether the component is required or not. |

<a name="InputText+setPlaceholder"></a>

### inputText.setPlaceholder(placeholder) ⇒ [<code>InputText</code>](#InputText)
Sets the placeholder text for the text input.

**Kind**: instance method of [<code>InputText</code>](#InputText)  
**Returns**: [<code>InputText</code>](#InputText) - This component.  

| Param | Type | Description |
| --- | --- | --- |
| placeholder | <code>string</code> | The placeholder text to set. |

<a name="InputText+setValue"></a>

### inputText.setValue(value) ⇒ [<code>InputText</code>](#InputText)
Sets the value of the text input.

**Kind**: instance method of [<code>InputText</code>](#InputText)  
**Returns**: [<code>InputText</code>](#InputText) - This component.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | The value to set. |

<a name="InputText+setStyle"></a>

### inputText.setStyle(style) ⇒ [<code>InputText</code>](#InputText)
Sets the style of the component.

**Kind**: instance method of [<code>InputText</code>](#InputText)  
**Returns**: [<code>InputText</code>](#InputText) - This component.  

| Param | Type | Description |
| --- | --- | --- |
| style | <code>string</code> \| <code>number</code> | The style to set, can be a string or a number. |

<a name="InputText+toJSON"></a>

### inputText.toJSON() ⇒ <code>Object</code>
Converts the component to a JSON representation.

**Kind**: instance method of [<code>InputText</code>](#InputText)  
**Returns**: <code>Object</code> - The JSON representation of the component.  
