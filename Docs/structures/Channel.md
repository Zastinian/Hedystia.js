---
title: Channel
sidebar:
  order: 11
---



## Channel ⇐ <code>Base</code>
Represents a channel in a guild or a direct message.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [Channel](#Channel) ⇐ <code>Base</code>
    * [new Channel([data], guildId, client)](#new_Channel_new)
    * [.parent](#Channel+parent) ⇒ [<code>Channel</code>](#Channel) \| <code>null</code>
    * [.guild](#Channel+guild) ⇒
    * [.fetch([options])](#Channel+fetch) ⇒ <code>Promise</code>
    * [.delete(reason)](#Channel+delete) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.edit(options)](#Channel+edit) ⇒ <code>Promise</code>
    * [.fetchInvites()](#Channel+fetchInvites) ⇒ <code>Promise.&lt;RaidenCol&gt;</code>
    * [.createInvite(options)](#Channel+createInvite) ⇒ <code>Promise.&lt;Invite&gt;</code>
    * [.clone()](#Channel+clone) ⇒ [<code>Promise.&lt;Channel&gt;</code>](#Channel)
    * [.isGuildText()](#Channel+isGuildText) ⇒ <code>boolean</code>
    * [.isDM()](#Channel+isDM) ⇒ <code>boolean</code>
    * [.isStage()](#Channel+isStage) ⇒ <code>boolean</code>
    * [.isForum()](#Channel+isForum) ⇒ <code>boolean</code>
    * [.isMedia()](#Channel+isMedia) ⇒ <code>boolean</code>
    * [.isGuildVoice()](#Channel+isGuildVoice) ⇒ <code>boolean</code>
    * [.isNews()](#Channel+isNews) ⇒ <code>boolean</code>
    * [.isCategory()](#Channel+isCategory) ⇒ <code>boolean</code>
    * [.isText()](#Channel+isText) ⇒ <code>boolean</code>
    * [.isThread()](#Channel+isThread) ⇒ <code>boolean</code>
    * [.isVoice()](#Channel+isVoice) ⇒ <code>boolean</code>
    * [.isDirectory()](#Channel+isDirectory) ⇒ <code>boolean</code>
    * [.inGuild()](#Channel+inGuild) ⇒ <code>boolean</code>
    * [.inCachedGuild()](#Channel+inCachedGuild) ⇒ <code>boolean</code>
    * [.isRuleChannel()](#Channel+isRuleChannel) ⇒ <code>boolean</code>
    * [.isSystemChannel()](#Channel+isSystemChannel) ⇒ <code>boolean</code> \| <code>null</code>
    * [.bannerURL(options)](#Channel+bannerURL) ⇒ <code>string</code> \| <code>null</code>
    * [.setName(name, reason)](#Channel+setName) ⇒ <code>Promise</code>
    * [.setType(type, reason)](#Channel+setType) ⇒ <code>Promise.&lt;any&gt;</code>
    * [.setTopic(topic, reason)](#Channel+setTopic) ⇒ <code>Promise</code>
    * [.setPosition(position, reason)](#Channel+setPosition) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.setParent(parent, reason)](#Channel+setParent) ⇒ <code>Promise</code>
    * [.setDefaultAutoArchiveDuration(defaultAutoArchiveDuration, reason)](#Channel+setDefaultAutoArchiveDuration) ⇒ <code>Promise</code>
    * [.setFlags(flags, reason)](#Channel+setFlags) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.lockPermissions()](#Channel+lockPermissions) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.permissionsFor(userOrRole)](#Channel+permissionsFor) ⇒ <code>Permissions</code>
    * [.fetchWebhooks()](#Channel+fetchWebhooks) ⇒ <code>Promise.&lt;RaidenCol&gt;</code>
    * [.createWebhook([options])](#Channel+createWebhook) ⇒ <code>Promise.&lt;Webhook&gt;</code>

<a name="new_Channel_new"></a>

### new Channel([data], guildId, client)
Constructs a new Channel object.


| Param | Type | Description |
| --- | --- | --- |
| [data] | <code>Object</code> | The data for the channel. |
| guildId | <code>string</code> | The ID of the guild that the channel belongs to. |
| client | <code>Client</code> | The client instance. |

<a name="Channel+parent"></a>

### channel.parent ⇒ [<code>Channel</code>](#Channel) \| <code>null</code>
Get the parent channel of this channel.

**Kind**: instance property of [<code>Channel</code>](#Channel)  
**Returns**: [<code>Channel</code>](#Channel) \| <code>null</code> - The parent channel if it exists, otherwise null.  
<a name="Channel+guild"></a>

### channel.guild ⇒
Retrieves the guild associated with this guildId.

**Kind**: instance property of [<code>Channel</code>](#Channel)  
**Returns**: The guild object if found, otherwise null.  
<a name="Channel+fetch"></a>

### channel.fetch([options]) ⇒ <code>Promise</code>
Fetches the channels using the provided options.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: <code>Promise</code> - - A promise that resolves to the fetched channels.  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | The options to be used for fetching the channels. |

<a name="Channel+delete"></a>

### channel.delete(reason) ⇒ <code>Promise.&lt;void&gt;</code>
Deletes the channel with the specified reason.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the channel is deleted.  

| Param | Type | Description |
| --- | --- | --- |
| reason | <code>string</code> | The reason for deleting the channel. |

<a name="Channel+edit"></a>

### channel.edit(options) ⇒ <code>Promise</code>
Edits the properties of a channel using the provided options.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: <code>Promise</code> - A promise that resolves when the channel has been successfully edited.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options object containing the properties to edit. |

<a name="Channel+fetchInvites"></a>

### channel.fetchInvites() ⇒ <code>Promise.&lt;RaidenCol&gt;</code>
Fetches the invites for the channel.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: <code>Promise.&lt;RaidenCol&gt;</code> - A promise that resolves to a collection of invites.  
<a name="Channel+createInvite"></a>

### channel.createInvite(options) ⇒ <code>Promise.&lt;Invite&gt;</code>
Creates an invite for the current channel using the specified options.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: <code>Promise.&lt;Invite&gt;</code> - A promise that resolves to the created invite.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options for creating the invite. |

<a name="Channel+clone"></a>

### channel.clone() ⇒ [<code>Promise.&lt;Channel&gt;</code>](#Channel)
Clones the channel.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: [<code>Promise.&lt;Channel&gt;</code>](#Channel) - A promise that resolves to the cloned channel.  
<a name="Channel+isGuildText"></a>

### channel.isGuildText() ⇒ <code>boolean</code>
Checks if the type of the object is "Guild_Text".

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: <code>boolean</code> - - true if the type is "Guild_Text", false otherwise.  
<a name="Channel+isDM"></a>

### channel.isDM() ⇒ <code>boolean</code>
Checks if the type of the object is "Dm".

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: <code>boolean</code> - - true if the type is "Dm", false otherwise.  
<a name="Channel+isStage"></a>

### channel.isStage() ⇒ <code>boolean</code>
Checks if the current stage is a Guild Stage Voice.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: <code>boolean</code> - - True if the current stage is a Guild Stage Voice, false otherwise.  
<a name="Channel+isForum"></a>

### channel.isForum() ⇒ <code>boolean</code>
Checks if the current page is a forum page.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: <code>boolean</code> - - true if the page is a forum page, false otherwise.  
<a name="Channel+isMedia"></a>

### channel.isMedia() ⇒ <code>boolean</code>
Checks if the current object is of media type.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: <code>boolean</code> - - true if the object is of media type, false otherwise.  
<a name="Channel+isGuildVoice"></a>

### channel.isGuildVoice() ⇒ <code>boolean</code>
Checks if the type of the object is "Guild_Voice".

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: <code>boolean</code> - - true if the type is "Guild_Voice", false otherwise.  
<a name="Channel+isNews"></a>

### channel.isNews() ⇒ <code>boolean</code>
Checks if the current type is "Guild_News".

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: <code>boolean</code> - - Returns true if the type is "Guild_News", otherwise returns false.  
<a name="Channel+isCategory"></a>

### channel.isCategory() ⇒ <code>boolean</code>
Checks if the current object is of the category type.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: <code>boolean</code> - - true if the object is of the category type, false otherwise.  
<a name="Channel+isText"></a>

### channel.isText() ⇒ <code>boolean</code>
Checks if the current text is of a specific type.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: <code>boolean</code> - - True if the text is of a specific type, false otherwise.  
<a name="Channel+isThread"></a>

### channel.isThread() ⇒ <code>boolean</code>
Checks if the current thread is a private, news, or public guild thread.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: <code>boolean</code> - - True if the thread is a private, news, or public guild thread, false otherwise.  
<a name="Channel+isVoice"></a>

### channel.isVoice() ⇒ <code>boolean</code>
Checks if the current object is of type "Guild_Voice" or "Guild_Stage_Voice".

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: <code>boolean</code> - - true if the object is of type "Guild_Voice" or "Guild_Stage_Voice", false otherwise.  
<a name="Channel+isDirectory"></a>

### channel.isDirectory() ⇒ <code>boolean</code>
Checks if the current object is a directory.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: <code>boolean</code> - - Returns true if the object is a directory, false otherwise.  
<a name="Channel+inGuild"></a>

### channel.inGuild() ⇒ <code>boolean</code>
Checks if the current context is within a guild.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: <code>boolean</code> - - True if the context is within a guild, false otherwise.  
<a name="Channel+inCachedGuild"></a>

### channel.inCachedGuild() ⇒ <code>boolean</code>
Checks if the guild is cached in the client's guild cache.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: <code>boolean</code> - - true if the guild is cached, false otherwise.  
<a name="Channel+isRuleChannel"></a>

### channel.isRuleChannel() ⇒ <code>boolean</code>
Checks if the current channel is the rules channel for the guild.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: <code>boolean</code> - - true if the current channel is the rules channel, false otherwise.  
<a name="Channel+isSystemChannel"></a>

### channel.isSystemChannel() ⇒ <code>boolean</code> \| <code>null</code>
Checks if the current channel is the system channel of the guild.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: <code>boolean</code> \| <code>null</code> - - Returns true if the channel is the system channel,
false if it is not, and null if the guild does not have a system channel.  
<a name="Channel+bannerURL"></a>

### channel.bannerURL(options) ⇒ <code>string</code> \| <code>null</code>
Returns the URL of the channel banner image.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: <code>string</code> \| <code>null</code> - The URL of the channel banner image, or null if no banner is set.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Optional parameters for generating the URL. |
| [options.dynamic] | <code>boolean</code> | Whether to generate a dynamic URL. |
| [options.size] | <code>string</code> | The desired size of the banner image. |
| [options.format] | <code>string</code> | The desired format of the banner image. |

<a name="Channel+setName"></a>

### channel.setName(name, reason) ⇒ <code>Promise</code>
Sets the name and reason for an object.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: <code>Promise</code> - - A promise that resolves when the name and reason are successfully set.  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The new name to set. |
| reason | <code>string</code> | The reason for setting the new name. |

<a name="Channel+setType"></a>

### channel.setType(type, reason) ⇒ <code>Promise.&lt;any&gt;</code>
Sets the type and reason of an object asynchronously.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: <code>Promise.&lt;any&gt;</code> - - A promise that resolves to the edited object.  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>any</code> | The type to set. |
| reason | <code>any</code> | The reason to set. |

<a name="Channel+setTopic"></a>

### channel.setTopic(topic, reason) ⇒ <code>Promise</code>
Sets the topic of the current object and provides a reason for the change.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: <code>Promise</code> - - A promise that resolves when the topic is successfully set.  

| Param | Type | Description |
| --- | --- | --- |
| topic | <code>string</code> | The new topic to set. |
| reason | <code>string</code> | The reason for changing the topic. |

<a name="Channel+setPosition"></a>

### channel.setPosition(position, reason) ⇒ <code>Promise.&lt;void&gt;</code>
Sets the position of an object and provides a reason for the change.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the position is successfully set.  

| Param | Type | Description |
| --- | --- | --- |
| position | <code>any</code> | The new position of the object. |
| reason | <code>string</code> | The reason for the position change. |

<a name="Channel+setParent"></a>

### channel.setParent(parent, reason) ⇒ <code>Promise</code>
Sets the parent of an object and provides a reason for the change.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: <code>Promise</code> - A promise that resolves when the parent is successfully set.  

| Param | Type | Description |
| --- | --- | --- |
| parent | <code>any</code> | The new parent object. |
| reason | <code>string</code> | The reason for setting the new parent. |

<a name="Channel+setDefaultAutoArchiveDuration"></a>

### channel.setDefaultAutoArchiveDuration(defaultAutoArchiveDuration, reason) ⇒ <code>Promise</code>
Sets the default auto-archive duration for a specific item.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: <code>Promise</code> - - A promise that resolves when the default auto-archive duration is successfully set.  

| Param | Type | Description |
| --- | --- | --- |
| defaultAutoArchiveDuration | <code>number</code> | The new default auto-archive duration to set. |
| reason | <code>string</code> | The reason for setting the new default auto-archive duration. |

<a name="Channel+setFlags"></a>

### channel.setFlags(flags, reason) ⇒ <code>Promise.&lt;void&gt;</code>
Sets the flags and reason for an object.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the flags are set.  

| Param | Type | Description |
| --- | --- | --- |
| flags | <code>any</code> | The flags to set. |
| reason | <code>string</code> | The reason for setting the flags. |

<a name="Channel+lockPermissions"></a>

### channel.lockPermissions() ⇒ <code>Promise.&lt;void&gt;</code>
Locks the permissions for the current object.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: <code>Promise.&lt;void&gt;</code> - A promise that resolves when the permissions are locked.  
<a name="Channel+permissionsFor"></a>

### channel.permissionsFor(userOrRole) ⇒ <code>Permissions</code>
Retrieves the permissions for a given user or role in the guild.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: <code>Permissions</code> - - The permissions for the user or role.  
**Throws**:

- <code>RangeError</code> - If the user or role is not found in the cache or is invalid.


| Param | Type | Description |
| --- | --- | --- |
| userOrRole | <code>string</code> \| <code>GuildMember</code> \| <code>Role</code> | The user or role to retrieve permissions for. |

<a name="Channel+fetchWebhooks"></a>

### channel.fetchWebhooks() ⇒ <code>Promise.&lt;RaidenCol&gt;</code>
Fetches the webhooks associated with the channel.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: <code>Promise.&lt;RaidenCol&gt;</code> - A promise that resolves to a collection of webhooks.  
<a name="Channel+createWebhook"></a>

### channel.createWebhook([options]) ⇒ <code>Promise.&lt;Webhook&gt;</code>
Creates a webhook for the current channel.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: <code>Promise.&lt;Webhook&gt;</code> - A promise that resolves with the created webhook.  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | Optional parameters for creating the webhook. |
| [options.reason] | <code>string</code> | The reason for creating the webhook. |
| [options.name] | <code>string</code> | The name of the webhook. |
| [options.avatar] | <code>string</code> | The avatar URL or file path of the webhook. |

