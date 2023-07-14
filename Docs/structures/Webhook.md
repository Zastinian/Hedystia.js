<a name="Webhook"></a>

## Webhook ⇐ <code>Base</code>
Represents a webhook.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [Webhook](#Webhook) ⇐ <code>Base</code>
    * [new Webhook([data], guildId, client)](#new_Webhook_new)
    * [.fetch(token)](#Webhook+fetch) ⇒ [<code>Promise.&lt;Webhook&gt;</code>](#Webhook)
    * [.edit(options)](#Webhook+edit) ⇒ [<code>Webhook</code>](#Webhook)
    * [.setName(name, reason)](#Webhook+setName) ⇒ <code>Promise</code>
    * [.setAvatar(avatar, reason)](#Webhook+setAvatar) ⇒ <code>Promise</code>
    * [.setChannel(channel, reason)](#Webhook+setChannel) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.delete([options])](#Webhook+delete) ⇒ <code>Promise</code>
    * [.defaultAvatarURL()](#Webhook+defaultAvatarURL) ⇒ <code>string</code>
    * [.displayAvatarURL(options)](#Webhook+displayAvatarURL) ⇒ <code>string</code>

<a name="new_Webhook_new"></a>

### new Webhook([data], guildId, client)
Constructs a new instance of the Webhook class.


| Param | Type | Description |
| --- | --- | --- |
| [data] | <code>Object</code> | The data for the webhook. |
| guildId | <code>string</code> | The ID of the guild the webhook belongs to. |
| client | <code>Client</code> | The client that instantiated this webhook. |

<a name="Webhook+fetch"></a>

### webhook.fetch(token) ⇒ [<code>Promise.&lt;Webhook&gt;</code>](#Webhook)
Fetches a webhook using the provided token.

**Kind**: instance method of [<code>Webhook</code>](#Webhook)  
**Returns**: [<code>Promise.&lt;Webhook&gt;</code>](#Webhook) - A promise that resolves to the fetched webhook.  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>string</code> | The token used to authenticate the webhook. |

<a name="Webhook+edit"></a>

### webhook.edit(options) ⇒ [<code>Webhook</code>](#Webhook)
Edits the webhook with the specified options.

**Kind**: instance method of [<code>Webhook</code>](#Webhook)  
**Returns**: [<code>Webhook</code>](#Webhook) - - The edited webhook.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options for editing the webhook. |
| [options.reason] | <code>string</code> | The reason for the edit. |
| [options.name] | <code>string</code> | The new name for the webhook. |
| [options.avatar] | <code>string</code> \| <code>File</code> | The new avatar for the webhook. |
| [options.channel] | <code>string</code> \| <code>Channel</code> | The new channel for the webhook. |
| [options.token] | <code>string</code> | The token of the webhook. |

<a name="Webhook+setName"></a>

### webhook.setName(name, reason) ⇒ <code>Promise</code>
Sets the name and reason for an object.

**Kind**: instance method of [<code>Webhook</code>](#Webhook)  
**Returns**: <code>Promise</code> - - A promise that resolves when the name and reason are successfully set.  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The new name to set. |
| reason | <code>string</code> | The reason for setting the new name. |

<a name="Webhook+setAvatar"></a>

### webhook.setAvatar(avatar, reason) ⇒ <code>Promise</code>
Sets the avatar for the user.

**Kind**: instance method of [<code>Webhook</code>](#Webhook)  
**Returns**: <code>Promise</code> - - A promise that resolves when the avatar is successfully set.  

| Param | Type | Description |
| --- | --- | --- |
| avatar | <code>string</code> | The URL or file path of the new avatar image. |
| reason | <code>string</code> | The reason for setting the new avatar. |

<a name="Webhook+setChannel"></a>

### webhook.setChannel(channel, reason) ⇒ <code>Promise.&lt;void&gt;</code>
Sets the channel for the current object and updates it with the given reason.

**Kind**: instance method of [<code>Webhook</code>](#Webhook)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the channel is successfully set.  

| Param | Type | Description |
| --- | --- | --- |
| channel | <code>Channel</code> | The channel to set. |
| reason | <code>string</code> | The reason for setting the channel. |

<a name="Webhook+delete"></a>

### webhook.delete([options]) ⇒ <code>Promise</code>
Deletes the webhook.

**Kind**: instance method of [<code>Webhook</code>](#Webhook)  
**Returns**: <code>Promise</code> - A promise that resolves to the deleted webhook.  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | Optional parameters for the deletion. |
| [options.token] | <code>string</code> | The token associated with the webhook. |
| [options.reason] | <code>string</code> | The reason for the deletion. |

<a name="Webhook+defaultAvatarURL"></a>

### webhook.defaultAvatarURL() ⇒ <code>string</code>
Returns the default URL for an avatar image.

**Kind**: instance method of [<code>Webhook</code>](#Webhook)  
**Returns**: <code>string</code> - The URL of the default avatar image.  
<a name="Webhook+displayAvatarURL"></a>

### webhook.displayAvatarURL(options) ⇒ <code>string</code>
Returns the URL of the avatar for the user or webhook.

**Kind**: instance method of [<code>Webhook</code>](#Webhook)  
**Returns**: <code>string</code> - The URL of the avatar.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options for generating the avatar URL. |
| [options.dynamic] | <code>boolean</code> | Whether to generate a dynamic avatar URL. |
| [options.size] | <code>number</code> | The size of the avatar in pixels. |
| [options.format] | <code>string</code> | The format of the avatar image. |

