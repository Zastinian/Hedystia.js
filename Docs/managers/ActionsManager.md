<a name="ActionsManager"></a>

## ActionsManager
**Kind**: global class  

* [ActionsManager](#ActionsManager)
    * [new ActionsManager(message, client)](#new_ActionsManager_new)
    * [._patch(message)](#ActionsManager+_patch) ⇒

<a name="new_ActionsManager_new"></a>

### new ActionsManager(message, client)
It defines a property called client, and sets it to the client variable


| Param | Description |
| --- | --- |
| message | The message object that was sent. |
| client | The client that instantiated the message. |

<a name="ActionsManager+_patch"></a>

### actionsManager.\_patch(message) ⇒
It takes a message from the websocket and returns a class that represents the message.

**Kind**: instance method of [<code>ActionsManager</code>](#ActionsManager)  
**Returns**: The event is being returned.  

| Param | Description |
| --- | --- |
| message | The message that was received from the websocket. |

