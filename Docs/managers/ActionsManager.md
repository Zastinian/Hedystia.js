---
title: ActionsManager
sidebar:
  order: 2
---



## ActionsManager
It's a class that handles all the events that the client receives from the Discord API.

**Kind**: global class  

* [ActionsManager](#ActionsManager)
    * [new ActionsManager(message, client)](#new_ActionsManager_new)
    * [._patch(message)](#ActionsManager+_patch) ⇒ <code>Object</code>

<a name="new_ActionsManager_new"></a>

### new ActionsManager(message, client)
It defines a property called client, and sets it to the client variable


| Param | Type | Description |
| --- | --- | --- |
| message | <code>Object</code> | The message object that was sent. |
| client | <code>Client</code> | The client that instantiated the message. |

<a name="ActionsManager+_patch"></a>

### actionsManager.\_patch(message) ⇒ <code>Object</code>
Parses and handles different types of Discord gateway messages.

**Kind**: instance method of [<code>ActionsManager</code>](#ActionsManager)  
**Returns**: <code>Object</code> - - An instance of the corresponding message class.  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>Object</code> | The message object received from the gateway. |

