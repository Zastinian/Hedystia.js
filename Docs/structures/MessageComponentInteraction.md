---
title: MessageComponentInteraction
sidebar:
  order: 46
---



## MessageComponentInteraction ⇐ <code>Interaction</code>
Represents a message component interaction.

**Kind**: global class  
**Extends**: <code>Interaction</code>  

* [MessageComponentInteraction](#MessageComponentInteraction) ⇐ <code>Interaction</code>
    * [new MessageComponentInteraction([data], guildId, client)](#new_MessageComponentInteraction_new)
    * [.deferUpdate(options)](#MessageComponentInteraction+deferUpdate) ⇒ <code>Promise</code>
    * [.update([options])](#MessageComponentInteraction+update) ⇒ <code>Promise.&lt;(null\|Message)&gt;</code>

<a name="new_MessageComponentInteraction_new"></a>

### new MessageComponentInteraction([data], guildId, client)
Constructs a new instance of the Component class.


| Param | Type | Description |
| --- | --- | --- |
| [data] | <code>Object</code> | The data object containing component information. |
| guildId | <code>string</code> | The ID of the guild the component belongs to. |
| client | <code>Client</code> | The client instance. |

<a name="MessageComponentInteraction+deferUpdate"></a>

### messageComponentInteraction.deferUpdate(options) ⇒ <code>Promise</code>
Defers the update of an interaction callback and sends a response to the interaction.

**Kind**: instance method of [<code>MessageComponentInteraction</code>](#MessageComponentInteraction)  
**Returns**: <code>Promise</code> - A promise that resolves when the update is deferred and the response is sent.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Additional options for the deferred update. |

<a name="MessageComponentInteraction+update"></a>

### messageComponentInteraction.update([options]) ⇒ <code>Promise.&lt;(null\|Message)&gt;</code>
Updates the interaction with the specified options.

**Kind**: instance method of [<code>MessageComponentInteraction</code>](#MessageComponentInteraction)  
**Returns**: <code>Promise.&lt;(null\|Message)&gt;</code> - - A promise that resolves to null or a Message object.  
**Throws**:

- <code>Error</code> - If there is an error while updating the interaction.


| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | The options to update the interaction. |

