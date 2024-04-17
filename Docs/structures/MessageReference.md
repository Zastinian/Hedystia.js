---
title: MessageReference
sidebar:
  order: 49
---



## MessageReference ⇐ <code>Base</code>
Represents a reference to a message.

**Kind**: global class  
**Extends**: <code>Base</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| messageId | <code>string</code> \| <code>null</code> | The ID of the message. |
| channelId | <code>string</code> \| <code>null</code> | The ID of the channel. |
| guildId | <code>string</code> \| <code>null</code> | The ID of the guild. |
| failIfNotExists | <code>boolean</code> \| <code>null</code> | Indicates whether to fail if the entity does not exist. |


* [MessageReference](#MessageReference) ⇐ <code>Base</code>
    * [new MessageReference([data], client)](#new_MessageReference_new)
    * [.toJSON()](#MessageReference+toJSON) ⇒ <code>Object</code>

<a name="new_MessageReference_new"></a>

### new MessageReference([data], client)
Constructs a new instance of the class.


| Param | Type | Description |
| --- | --- | --- |
| [data] | <code>Object</code> | The data object containing the properties for the instance. |
| client | <code>Client</code> | The client object associated with the instance. |

<a name="MessageReference+toJSON"></a>

### messageReference.toJSON() ⇒ <code>Object</code>
Converts the current object to a JSON representation.

**Kind**: instance method of [<code>MessageReference</code>](#MessageReference)  
**Returns**: <code>Object</code> - - The JSON representation of the object.  
