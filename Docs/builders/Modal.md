---
title: Modal
sidebar:
  order: 10
---



## Modal
A modal message with components.

**Kind**: global class  

* [Modal](#Modal)
    * [new Modal(data)](#new_Modal_new)
    * [.addComponents(...components)](#Modal+addComponents) ⇒ [<code>Modal</code>](#Modal)
    * [.toJSON()](#Modal+toJSON) ⇒ <code>Object</code>

<a name="new_Modal_new"></a>

### new Modal(data)

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | The data for the modal message. |
| data.title | <code>string</code> | The title of the modal. |
| data.custom_id | <code>string</code> | The custom ID of the modal. |

<a name="Modal+addComponents"></a>

### modal.addComponents(...components) ⇒ [<code>Modal</code>](#Modal)
Adds one or more components to the modal.

**Kind**: instance method of [<code>Modal</code>](#Modal)  
**Returns**: [<code>Modal</code>](#Modal) - This modal instance.  

| Param | Type | Description |
| --- | --- | --- |
| ...components | <code>Array.&lt;Object&gt;</code> | The components to add. |

<a name="Modal+toJSON"></a>

### modal.toJSON() ⇒ <code>Object</code>
Returns a JSON representation of the modal.

**Kind**: instance method of [<code>Modal</code>](#Modal)  
**Returns**: <code>Object</code> - The JSON representation of the modal.  
