<a name="Channel"></a>

## Channel
**Kind**: global class  

* [Channel](#Channel)
    * [new Channel([data], guildId, client)](#new_Channel_new)
    * [.parent](#Channel+parent) ⇒
    * [.guild](#Channel+guild) ⇒
    * [.fetch([options])](#Channel+fetch) ⇒
    * [.delete(reason)](#Channel+delete) ⇒
    * [.edit(options)](#Channel+edit) ⇒
    * [.fetchInvites()](#Channel+fetchInvites) ⇒
    * [.createInvite(options)](#Channel+createInvite) ⇒
    * [.clone()](#Channel+clone) ⇒
    * [.isGuildText()](#Channel+isGuildText) ⇒
    * [.isDM()](#Channel+isDM) ⇒
    * [.isStage()](#Channel+isStage) ⇒
    * [.isForum()](#Channel+isForum) ⇒
    * [.isGuildVoice()](#Channel+isGuildVoice) ⇒
    * [.isNews()](#Channel+isNews) ⇒
    * [.isCategory()](#Channel+isCategory) ⇒
    * [.isText()](#Channel+isText) ⇒
    * [.isThread()](#Channel+isThread) ⇒
    * [.isVoice()](#Channel+isVoice) ⇒
    * [.isDirectory()](#Channel+isDirectory) ⇒
    * [.inGuild()](#Channel+inGuild) ⇒
    * [.inCachedGuild()](#Channel+inCachedGuild) ⇒
    * [.isRuleChannel()](#Channel+isRuleChannel) ⇒
    * [.isSystemChannel()](#Channel+isSystemChannel) ⇒
    * [.bannerURL([options])](#Channel+bannerURL) ⇒
    * [.setName(name, reason)](#Channel+setName) ⇒
    * [.setType(type, reason)](#Channel+setType) ⇒
    * [.setTopic(topic, reason)](#Channel+setTopic) ⇒
    * [.setPosition(position, reason)](#Channel+setPosition) ⇒
    * [.setParent(parent, reason)](#Channel+setParent) ⇒
    * [.setDefaultAutoArchiveDuration(defaultAutoArchiveDuration, reason)](#Channel+setDefaultAutoArchiveDuration) ⇒
    * [.setFlags(flags, reason)](#Channel+setFlags) ⇒
    * [.lockPermissions()](#Channel+lockPermissions) ⇒
    * [.permissionsFor(userOrRole)](#Channel+permissionsFor) ⇒
    * [.fetchWebhooks()](#Channel+fetchWebhooks) ⇒
    * [.createWebhook([options])](#Channel+createWebhook) ⇒

<a name="new_Channel_new"></a>

### new Channel([data], guildId, client)
It's a constructor for a class that extends another class


| Param | Description |
| --- | --- |
| [data] | The data that was received from the API. |
| guildId | The ID of the guild the channel is in |
| client | DiscordClient |

<a name="Channel+parent"></a>

### channel.parent ⇒
If the parentId is not null, then return the parentId, otherwise return null.

**Kind**: instance property of [<code>Channel</code>](#Channel)  
**Returns**: The parent channel of the channel.  
<a name="Channel+guild"></a>

### channel.guild ⇒
It returns the guild object of the guild ID that is stored in the database

**Kind**: instance property of [<code>Channel</code>](#Channel)  
**Returns**: The guild object.  
<a name="Channel+fetch"></a>

### channel.fetch([options]) ⇒
It fetches the channel

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: The channel object.  

| Param | Description |
| --- | --- |
| [options] | An object containing additional options. |

<a name="Channel+delete"></a>

### channel.delete(reason) ⇒
It deletes a channel

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: The channel object.  

| Param | Description |
| --- | --- |
| reason | The reason for the deletion. |

<a name="Channel+edit"></a>

### channel.edit(options) ⇒
It edits the channel

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: The channel object.  

| Param | Description |
| --- | --- |
| options | Object |

<a name="Channel+fetchInvites"></a>

### channel.fetchInvites() ⇒
It fetches all the invites for a channel

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: An array of objects.  
<a name="Channel+createInvite"></a>

### channel.createInvite(options) ⇒
It creates an invite for the channel

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: The invite object.  

| Param | Description |
| --- | --- |
| options | Object |

<a name="Channel+clone"></a>

### channel.clone() ⇒
It clones the channel

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: The channel that was cloned.  
<a name="Channel+isGuildText"></a>

### channel.isGuildText() ⇒
If the type is Guild_Text, return true, otherwise return false.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: a boolean value.  
<a name="Channel+isDM"></a>

### channel.isDM() ⇒
If the type is Dm, return true, otherwise return false.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: The function isDM() is being returned.  
<a name="Channel+isStage"></a>

### channel.isStage() ⇒
If the type is Guild_Stage_Voice, return true, otherwise return false.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: A boolean value.  
<a name="Channel+isForum"></a>

### channel.isForum() ⇒
If the type is Guild_Forum, return true. Otherwise, return false.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: A boolean value.  
<a name="Channel+isGuildVoice"></a>

### channel.isGuildVoice() ⇒
If the type is Guild_Voice, return true, otherwise return false.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: A boolean value.  
<a name="Channel+isNews"></a>

### channel.isNews() ⇒
If the type is Guild_News, return true. Otherwise, return false.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: a boolean value.  
<a name="Channel+isCategory"></a>

### channel.isCategory() ⇒
If the type of the channel is Guild_Category, return true. Otherwise, return false

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: a boolean value.  
<a name="Channel+isText"></a>

### channel.isText() ⇒
If the type is one of the following, return true, otherwise return false.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: A boolean value.  
<a name="Channel+isThread"></a>

### channel.isThread() ⇒
If the type is one of the three types of threads, return true, otherwise return false.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: A boolean value.  
<a name="Channel+isVoice"></a>

### channel.isVoice() ⇒
If the type is Guild_Voice or Guild_Stage_Voice, return true, otherwise return false.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: A boolean value.  
<a name="Channel+isDirectory"></a>

### channel.isDirectory() ⇒
If the type is Guild_Directory, return true, otherwise return false.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: A boolean value.  
<a name="Channel+inGuild"></a>

### channel.inGuild() ⇒
If the guildId is defined, return true, otherwise return false.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: A boolean value.  
<a name="Channel+inCachedGuild"></a>

### channel.inCachedGuild() ⇒
If the client has the guild in its cache, return true, otherwise return false.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: A boolean value.  
<a name="Channel+isRuleChannel"></a>

### channel.isRuleChannel() ⇒
If the guild's rules channel ID is equal to the channel's ID, return true, otherwise return false.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: The return value is a boolean.  
<a name="Channel+isSystemChannel"></a>

### channel.isSystemChannel() ⇒
If the guild doesn't have a system channel, return null. If the guild has a system channel and it'sthe same as the channel, return true. Otherwise, return false.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: A boolean value.  
<a name="Channel+bannerURL"></a>

### channel.bannerURL([options]) ⇒
It returns the URL of the channel banner

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: The bannerURL method returns the URL of the channel's banner.  

| Param | Description |
| --- | --- |
| [options] | The options for the banner. |

<a name="Channel+setName"></a>

### channel.setName(name, reason) ⇒
It edits the name of the channel

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: The return value of the edit method.  

| Param | Description |
| --- | --- |
| name | The new name of the channel. |
| reason | The reason for the change (0-1024 characters). |

<a name="Channel+setType"></a>

### channel.setType(type, reason) ⇒
It edits the type of the channel.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: The edited message.  

| Param | Description |
| --- | --- |
| type | The type of the channel. |
| reason | The reason for the change. |

<a name="Channel+setTopic"></a>

### channel.setTopic(topic, reason) ⇒
It sets the topic of the channel

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: The return value of the edit function.  

| Param | Description |
| --- | --- |
| topic | The new topic of the channel. |
| reason | The reason for the change. |

<a name="Channel+setPosition"></a>

### channel.setPosition(position, reason) ⇒
It edits the position of a role in a guild

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: The return value of the edit function.  

| Param | Description |
| --- | --- |
| position | The position you want to move the role to. |
| reason | The reason for the move. |

<a name="Channel+setParent"></a>

### channel.setParent(parent, reason) ⇒
It edits the channel's parent

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: The return value of the edit method.  

| Param | Description |
| --- | --- |
| parent | The parent category to move this category to. |
| reason | The reason for the edit. |

<a name="Channel+setDefaultAutoArchiveDuration"></a>

### channel.setDefaultAutoArchiveDuration(defaultAutoArchiveDuration, reason) ⇒
It sets the default auto archive duration of a guild.Here's a more detailed explanation of the above function:It sets the default auto archive duration of a guild.Here's an example of the above function in use:

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: The return value of the edit function.  

| Param | Description |
| --- | --- |
| defaultAutoArchiveDuration | The default auto-archive duration for the guild. |
| reason | The reason for the change. |

<a name="Channel+setFlags"></a>

### channel.setFlags(flags, reason) ⇒
It edits the message with the given flags and reason

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: The return value of the edit method.  

| Param | Description |
| --- | --- |
| flags | The flags to set. |
| reason | The reason for the edit. |

<a name="Channel+lockPermissions"></a>

### channel.lockPermissions() ⇒
It takes the permission overwrites from the parent channel and applies them to the current channel

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: The permissionOverwrites of the parent channel.  
<a name="Channel+permissionsFor"></a>

### channel.permissionsFor(userOrRole) ⇒
It takes a user or role and returns the permissions that user or role has in the channel

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: A Permissions object.  

| Param | Description |
| --- | --- |
| userOrRole | The user or role to get the permissions for. |

<a name="Channel+fetchWebhooks"></a>

### channel.fetchWebhooks() ⇒
It fetches all webhooks in a channel and returns them in a RaidenCol

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: An array of webhooks.  
<a name="Channel+createWebhook"></a>

### channel.createWebhook([options]) ⇒
It creates a webhook for the channel

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: A webhook object.  

| Param | Description |
| --- | --- |
| [options] | Object |

