---
title: WebsocketManager
sidebar:
  order: 45
---



## WebsocketManager ⇐ <code>WebSocket</code>
Represents a WebSocket manager that extends the WebSocket class.

**Kind**: global class  
**Extends**: <code>WebSocket</code>  

* [WebsocketManager](#WebsocketManager) ⇐ <code>WebSocket</code>
    * [new WebsocketManager(client)](#new_WebsocketManager_new)
    * _instance_
        * [.connect()](#WebsocketManager+connect) ⇒
        * [.handleConnect()](#WebsocketManager+handleConnect) ⇒
        * [.handleClose(err)](#WebsocketManager+handleClose) ⇒ <code>null</code>
        * [.handleOpen()](#WebsocketManager+handleOpen) ⇒ <code>void</code>
        * [.handleResume()](#WebsocketManager+handleResume) ⇒ <code>void</code>
        * [.handleReconnect()](#WebsocketManager+handleReconnect) ⇒ <code>void</code>
        * [.destroy(closeCode)](#WebsocketManager+destroy) ⇒ <code>Promise</code>
        * [.handleError(error)](#WebsocketManager+handleError) ⇒ <code>void</code>
        * [.send(payload)](#WebsocketManager+send) ⇒ <code>Promise.&lt;void&gt;</code>
    * _static_
        * [.transformPayload(payload)](#WebsocketManager.transformPayload) ⇒ <code>object</code> \| <code>null</code>

<a name="new_WebsocketManager_new"></a>

### new WebsocketManager(client)
Constructs a new instance of the WebSocketClient class.


| Param | Type | Description |
| --- | --- | --- |
| client | <code>Client</code> | The client object. |

<a name="WebsocketManager+connect"></a>

### websocketManager.connect() ⇒
Establishes a connection to the WebSocket server.If the connection is not open, it will retry after a timeout.Retrieves the URL, shards, and session start limit from the bot gateway API.If the URL or session start limit is not available, or the remaining session start limit is less than 1,it logs an error message and exits the process.Sends an Identify opcode to the server with the client's token, intents, presence, and properties.Logs the WebSocket information.

**Kind**: instance method of [<code>WebsocketManager</code>](#WebsocketManager)  
**Returns**: None  
<a name="WebsocketManager+handleConnect"></a>

### websocketManager.handleConnect() ⇒
Handles the connection of the websocket.If the websocket is closed, it logs a debug message and returns.Otherwise, it listens for incoming messages and creates a new instance of ActionsManagerto handle the received data.It also listens for the "close" event and calls the handleClose method.

**Kind**: instance method of [<code>WebsocketManager</code>](#WebsocketManager)  
**Returns**: None  
<a name="WebsocketManager+handleClose"></a>

### websocketManager.handleClose(err) ⇒ <code>null</code>
Handles the closing of the resource and returns the result of the error handling.

**Kind**: instance method of [<code>WebsocketManager</code>](#WebsocketManager)  
**Returns**: <code>null</code> - - Returns null if the error handling is successful.  

| Param | Type | Description |
| --- | --- | --- |
| err | <code>Error</code> | The error object to handle. |

<a name="WebsocketManager+handleOpen"></a>

### websocketManager.handleOpen() ⇒ <code>void</code>
Handles the "open" event of the WebSocket connection.If the connection is successfully opened, it logs a debug message and calls the handleConnect() function.

**Kind**: instance method of [<code>WebsocketManager</code>](#WebsocketManager)  
<a name="WebsocketManager+handleResume"></a>

### websocketManager.handleResume() ⇒ <code>void</code>
Handles the resumption of a WebSocket connection.If no session ID is found, it will re-identify and establish a new connection.If a session ID is found, it will attempt to resume the connection using the session ID.

**Kind**: instance method of [<code>WebsocketManager</code>](#WebsocketManager)  
<a name="WebsocketManager+handleReconnect"></a>

### websocketManager.handleReconnect() ⇒ <code>void</code>
Handles the reconnection process for the WebSocket connection.If there is no resume gateway URL, it will re-identify and connect again.If the status is not "CLOSED" and reconnect is enabled, it will initiate a reconnect.It will clear the heartbeat interval if it exists.Sets the status to "RECONNECTING".Removes all event listeners.Sets a timeout to close the previous WebSocket connection and create a new one.If the previous connection is not closed, it will be forcefully closed.If the WebSocket is already closed, it will log a message.Creates a new WebSocket connection to the resume gateway URL.Sets the close sequence and marks the WebSocket as reconnected.

**Kind**: instance method of [<code>WebsocketManager</code>](#WebsocketManager)  
<a name="WebsocketManager+destroy"></a>

### websocketManager.destroy(closeCode) ⇒ <code>Promise</code>
Destroys the current instance of the object.

**Kind**: instance method of [<code>WebsocketManager</code>](#WebsocketManager)  
**Returns**: <code>Promise</code> - - A promise that resolves when the instance is successfully destroyed.  

| Param | Type | Description |
| --- | --- | --- |
| closeCode | <code>closeCode</code> | The code to use when closing the instance. |

<a name="WebsocketManager+handleError"></a>

### websocketManager.handleError(error) ⇒ <code>void</code>
Handles errors that occur during websocket communication.

**Kind**: instance method of [<code>WebsocketManager</code>](#WebsocketManager)  
**Throws**:

- <code>WebsocketError</code> - Throws a WebsocketError with the corresponding error message and code.


| Param | Type | Description |
| --- | --- | --- |
| error | <code>number</code> | The error code. |

<a name="WebsocketManager+send"></a>

### websocketManager.send(payload) ⇒ <code>Promise.&lt;void&gt;</code>
Sends a payload over the websocket connection.

**Kind**: instance method of [<code>WebsocketManager</code>](#WebsocketManager)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the payload has been sent.  

| Param | Type | Description |
| --- | --- | --- |
| payload | <code>any</code> | The payload to send. |

<a name="WebsocketManager.transformPayload"></a>

### WebsocketManager.transformPayload(payload) ⇒ <code>object</code> \| <code>null</code>
Transforms a payload object by converting the "op" property to its corresponding opcode value.

**Kind**: static method of [<code>WebsocketManager</code>](#WebsocketManager)  
**Returns**: <code>object</code> \| <code>null</code> - - The transformed payload object, or null if the "op" property is missing.  

| Param | Type | Description |
| --- | --- | --- |
| payload | <code>object</code> | The payload object to transform. |

