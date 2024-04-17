---
title: ModalInteraction
sidebar:
  order: 50
---



## ModalInteraction ⇐ <code>MessageComponentInteraction</code>
**Kind**: global class  
**Extends**: <code>MessageComponentInteraction</code>  

* [ModalInteraction](#ModalInteraction) ⇐ <code>MessageComponentInteraction</code>
    * [new ModalInteraction([data], guildId, client)](#new_ModalInteraction_new)
    * _instance_
        * [.getTextInput(customId, [required])](#ModalInteraction+getTextInput) ⇒ <code>string</code> \| <code>null</code>
        * [.getSelect(customId, [required])](#ModalInteraction+getSelect) ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
    * _static_
        * [.transformResolvedFields(fields)](#ModalInteraction.transformResolvedFields) ⇒ <code>Object</code>

<a name="new_ModalInteraction_new"></a>

### new ModalInteraction([data], guildId, client)
Constructs a new instance of the Input_Text component.


| Param | Type | Description |
| --- | --- | --- |
| [data] | <code>Object</code> | The data object for the interaction. |
| guildId | <code>string</code> | The ID of the guild where the interaction occurred. |
| client | <code>Client</code> | The client instance. |

<a name="ModalInteraction+getTextInput"></a>

### modalInteraction.getTextInput(customId, [required]) ⇒ <code>string</code> \| <code>null</code>
Retrieves the value of a text input field with the specified custom ID.

**Kind**: instance method of [<code>ModalInteraction</code>](#ModalInteraction)  
**Returns**: <code>string</code> \| <code>null</code> - The value of the text input field, or null if the field is not found and not required.  
**Throws**:

- <code>RangeError</code> If the specified custom ID is not found or if the field is not of type "Input_Text".


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| customId | <code>string</code> |  | The custom ID of the text input field. |
| [required] | <code>boolean</code> | <code>false</code> | Indicates whether the text input field is required. If set to true and the field is not found, a RangeError will be thrown. |

<a name="ModalInteraction+getSelect"></a>

### modalInteraction.getSelect(customId, [required]) ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
Retrieves the values of a Select component with the specified custom ID.

**Kind**: instance method of [<code>ModalInteraction</code>](#ModalInteraction)  
**Returns**: <code>Array.&lt;string&gt;</code> \| <code>null</code> - - The values of the Select component, or null if not found and not required.  
**Throws**:

- <code>RangeError</code> - If the Select component is not found and is required, or if the mode type selected is not String_Select.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| customId | <code>string</code> |  | The custom ID of the Select component. |
| [required] | <code>boolean</code> | <code>false</code> | Indicates whether the Select component is required. |

<a name="ModalInteraction.transformResolvedFields"></a>

### ModalInteraction.transformResolvedFields(fields) ⇒ <code>Object</code>
Transforms the resolved fields object by converting the "type" property from a number to its corresponding string value from the ComponentType enum.Also, maps the "components" array and transforms each object by converting the "type" property from a number to its corresponding string value from the ComponentType enum.

**Kind**: static method of [<code>ModalInteraction</code>](#ModalInteraction)  
**Returns**: <code>Object</code> - - The transformed fields object.  

| Param | Type | Description |
| --- | --- | --- |
| fields | <code>Object</code> | The resolved fields object to transform. |

