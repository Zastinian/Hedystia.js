<a name="WebhookClient"></a>

## WebhookClient ⇐ <code>Base</code>
Represents a webhook client that can interact with webhooks.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [WebhookClient](#WebhookClient) ⇐ <code>Base</code>
    * [new WebhookClient([data], client)](#new_WebhookClient_new)
    * [.fetchWebhook()](#WebhookClient+fetchWebhook) ⇒ <code>Promise.&lt;Webhook&gt;</code>
    * [.send([options])](#WebhookClient+send) ⇒ <code>Promise.&lt;(Message\|undefined)&gt;</code>
    * [.delete(message, thread)](#WebhookClient+delete) ⇒ <code>void</code>
    * [.edit(message, [options], [thread])](#WebhookClient+edit) ⇒ <code>void</code>
    * [.fetch(message, thread)](#WebhookClient+fetch) ⇒ <code>Promise.&lt;(Message\|undefined)&gt;</code>

<a name="new_WebhookClient_new"></a>

### new WebhookClient([data], client)
Constructs a new instance of the class.


| Param | Type | Description |
| --- | --- | --- |
| [data] | <code>Object</code> | The data object containing the properties for the instance. |
| client | <code>Client</code> | The client object associated with the instance. |

<a name="WebhookClient+fetchWebhook"></a>

### webhookClient.fetchWebhook() ⇒ <code>Promise.&lt;Webhook&gt;</code>
Fetches a webhook from the server.

**Kind**: instance method of [<code>WebhookClient</code>](#WebhookClient)  
**Returns**: <code>Promise.&lt;Webhook&gt;</code> - A promise that resolves to a Webhook object.  
<a name="WebhookClient+send"></a>

### webhookClient.send([options]) ⇒ <code>Promise.&lt;(Message\|undefined)&gt;</code>
Sends a message using a webhook.

**Kind**: instance method of [<code>WebhookClient</code>](#WebhookClient)  
**Returns**: <code>Promise.&lt;(Message\|undefined)&gt;</code> - - A promise that resolves to the sent message, or undefined if the message failed to send.  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | The options for sending the message. |
| [options.wait] | <code>number</code> | The time to wait before sending the message. |
| [options.thread] | <code>string</code> \| <code>Object</code> | The thread ID or thread object to send the message to. |

<a name="WebhookClient+delete"></a>

### webhookClient.delete(message, thread) ⇒ <code>void</code>
Deletes a message from a thread.

**Kind**: instance method of [<code>WebhookClient</code>](#WebhookClient)  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>string</code> \| <code>Message</code> | The ID or the message object to delete. |
| thread | <code>string</code> \| <code>Thread</code> | The ID or the thread object where the message is located. |

<a name="WebhookClient+edit"></a>

### webhookClient.edit(message, [options], [thread]) ⇒ <code>void</code>
Edits a message in a channel using the Discord API.

**Kind**: instance method of [<code>WebhookClient</code>](#WebhookClient)  
**Throws**:

- <code>RangeError</code> If the channel is not cached.


| Param | Type | Description |
| --- | --- | --- |
| message | <code>string</code> \| <code>Message</code> | The ID or the message object to edit. |
| [options] | <code>Object</code> | The options for editing the message. |
| [thread] | <code>string</code> \| <code>ThreadChannel</code> | The ID or the thread channel object where the message is located. |

<a name="WebhookClient+fetch"></a>

### webhookClient.fetch(message, thread) ⇒ <code>Promise.&lt;(Message\|undefined)&gt;</code>
Fetches a webhook message from the specified thread.

**Kind**: instance method of [<code>WebhookClient</code>](#WebhookClient)  
**Returns**: <code>Promise.&lt;(Message\|undefined)&gt;</code> - - A promise that resolves to the fetched message, or undefined if the channel is not found.  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>string</code> \| <code>Message</code> | The ID or the message object to fetch. |
| thread | <code>string</code> \| <code>ThreadChannel</code> | The ID or the thread object to fetch the message from. |

