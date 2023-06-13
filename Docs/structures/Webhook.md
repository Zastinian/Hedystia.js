<a name="Webhook"></a>

## Webhook ⇐ <code>Base</code>
It's a class that represents a webhook

**Kind**: global class  
**Extends**: <code>Base</code>  

* [Webhook](#Webhook) ⇐ <code>Base</code>
    * [new Webhook([data], guildId, client)](#new_Webhook_new)
    * [.fetch(token)](#Webhook+fetch) ⇒
    * [.edit([options])](#Webhook+edit) ⇒
    * [.setName(name, reason)](#Webhook+setName) ⇒
    * [.setAvatar(avatar, reason)](#Webhook+setAvatar) ⇒
    * [.setChannel(channel, reason)](#Webhook+setChannel) ⇒
    * [.delete([options])](#Webhook+delete) ⇒
    * [.defaultAvatarURL()](#Webhook+defaultAvatarURL) ⇒
    * [.displayAvatarURL([options])](#Webhook+displayAvatarURL) ⇒

<a name="new_Webhook_new"></a>

### new Webhook([data], guildId, client)
This function is used to create a new webhook object, and it takes in a data object, a guildId,and a client object.


| Param | Description |
| --- | --- |
| [data] | The data that was passed in. |
| guildId | The ID of the guild the webhook is in |
| client | Discord.Client |

<a name="Webhook+fetch"></a>

### webhook.fetch(token) ⇒
It fetches a webhook from the Discord API

**Kind**: instance method of [<code>Webhook</code>](#Webhook)  
**Returns**: A new instance of the Webhook class.  

| Param | Description |
| --- | --- |
| token | The token of the webhook. |

<a name="Webhook+edit"></a>

### webhook.edit([options]) ⇒
It edits a webhook

**Kind**: instance method of [<code>Webhook</code>](#Webhook)  
**Returns**: A new instance of the Webhook class.  

| Param |
| --- |
| [options] | 

<a name="Webhook+setName"></a>

### webhook.setName(name, reason) ⇒
It edits the name of the channel

**Kind**: instance method of [<code>Webhook</code>](#Webhook)  
**Returns**: The name of the channel.  

| Param | Description |
| --- | --- |
| name | The new name of the channel. |
| reason | The reason for the edit. |

<a name="Webhook+setAvatar"></a>

### webhook.setAvatar(avatar, reason) ⇒
It sets the avatar of the bot

**Kind**: instance method of [<code>Webhook</code>](#Webhook)  
**Returns**: The avatar of the user.  

| Param | Description |
| --- | --- |
| avatar | The new avatar of the bot. |
| reason | The reason for the change (0-1024 characters) |

<a name="Webhook+setChannel"></a>

### webhook.setChannel(channel, reason) ⇒
It sets the channel of the invite

**Kind**: instance method of [<code>Webhook</code>](#Webhook)  
**Returns**: The channel that the message was sent in.  

| Param | Description |
| --- | --- |
| channel | The channel to move the member to, can be a voice channel or a category channel. |
| reason | The reason for the update. |

<a name="Webhook+delete"></a>

### webhook.delete([options]) ⇒
It deletes a webhook

**Kind**: instance method of [<code>Webhook</code>](#Webhook)  
**Returns**: The webhook object.  

| Param | Description |
| --- | --- |
| [options] | Object |

<a name="Webhook+defaultAvatarURL"></a>

### webhook.defaultAvatarURL() ⇒
It returns the default avatar URL.

**Kind**: instance method of [<code>Webhook</code>](#Webhook)  
**Returns**: The default avatar URL.  
<a name="Webhook+displayAvatarURL"></a>

### webhook.displayAvatarURL([options]) ⇒
If the avatar is not set, return the default avatar URL, otherwise return the avatar URL.

**Kind**: instance method of [<code>Webhook</code>](#Webhook)  
**Returns**: The avatar URL of the webhook.  

| Param | Description |
| --- | --- |
| [options] | Object |

