<a name="WebhookClient"></a>

## WebhookClient ⇐ <code>Base</code>
It's a class that allows you to send messages to a channel using a webhook.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [WebhookClient](#WebhookClient) ⇐ <code>Base</code>
    * [new WebhookClient([data], client)](#new_WebhookClient_new)
    * [.fetchWebhook()](#WebhookClient+fetchWebhook) ⇒
    * [.send([options])](#WebhookClient+send) ⇒
    * [.delete(message, thread)](#WebhookClient+delete) ⇒
    * [.edit(message, [options], thread)](#WebhookClient+edit) ⇒
    * [.fetch(message, thread)](#WebhookClient+fetch) ⇒

<a name="new_WebhookClient_new"></a>

### new WebhookClient([data], client)
The above function is a constructor function that takes in two parameters, data and client, andsets the id, token, and url properties of the object to the values of the data object's id, token,and url properties, or null if the data object doesn't have those properties.


| Param | Description |
| --- | --- |
| [data] | The data that is passed to the constructor. |
| client | The client that the webhook is being created for. |

<a name="WebhookClient+fetchWebhook"></a>

### webhookClient.fetchWebhook() ⇒
It fetches the webhook from the API and returns a new Webhook instance

**Kind**: instance method of [<code>WebhookClient</code>](#WebhookClient)  
**Returns**: A new Webhook object.  
<a name="WebhookClient+send"></a>

### webhookClient.send([options]) ⇒
It sends a message to a channel using a webhook

**Kind**: instance method of [<code>WebhookClient</code>](#WebhookClient)  
**Returns**: The message object.  

| Param | Description |
| --- | --- |
| [options] | Object |

<a name="WebhookClient+delete"></a>

### webhookClient.delete(message, thread) ⇒
It deletes a message from a thread.

**Kind**: instance method of [<code>WebhookClient</code>](#WebhookClient)  
**Returns**: Nothing.  

| Param | Description |
| --- | --- |
| message | The message object or message ID to delete. |
| thread | The thread ID of the thread you want to delete the message from. |

<a name="WebhookClient+edit"></a>

### webhookClient.edit(message, [options], thread) ⇒
It edits a message sent by a webhook

**Kind**: instance method of [<code>WebhookClient</code>](#WebhookClient)  
**Returns**: The message that was edited.  

| Param | Description |
| --- | --- |
| message | The message to edit. |
| [options] | The options to send to the message. |
| thread | The thread ID of the message to edit. |

<a name="WebhookClient+fetch"></a>

### webhookClient.fetch(message, thread) ⇒
It fetches a message from a webhook

**Kind**: instance method of [<code>WebhookClient</code>](#WebhookClient)  
**Returns**: The message object.  

| Param | Description |
| --- | --- |
| message | The message to fetch. Can be a message object, a message ID, or a message URL. |
| thread | The thread ID of the message. |

