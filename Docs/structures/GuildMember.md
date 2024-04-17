---
title: GuildMember
sidebar:
  order: 33
---



## GuildMember ⇐ <code>Base</code>
Represents a member of a guild.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [GuildMember](#GuildMember) ⇐ <code>Base</code>
    * [new GuildMember(data, guildId, client)](#new_GuildMember_new)
    * [.guild](#GuildMember+guild) : <code>Guild</code> \| <code>null</code>
    * [.voice](#GuildMember+voice) : <code>VoiceState</code> \| <code>null</code>
    * [.presence](#GuildMember+presence) : <code>Presence</code> \| <code>null</code>
    * [.permissions](#GuildMember+permissions) : <code>Permissions</code>
    * [.user](#GuildMember+user) : <code>User</code> \| <code>null</code>
    * [.isCommunicationDisabled()](#GuildMember+isCommunicationDisabled) ⇒ <code>boolean</code>
    * [.fetch(options)](#GuildMember+fetch) ⇒ [<code>Promise.&lt;GuildMember&gt;</code>](#GuildMember)
    * [.kick(reason)](#GuildMember+kick) ⇒ [<code>Promise.&lt;GuildMember&gt;</code>](#GuildMember)
    * [.send(options)](#GuildMember+send) ⇒ <code>Promise.&lt;Message&gt;</code>
    * [.ban(options)](#GuildMember+ban) ⇒ [<code>Promise.&lt;GuildMember&gt;</code>](#GuildMember)
    * [.edit(options)](#GuildMember+edit) ⇒ [<code>Promise.&lt;GuildMember&gt;</code>](#GuildMember)
    * [.setNickname(nickname, reason)](#GuildMember+setNickname) ⇒ <code>Promise</code>
    * [.setMute(mute, reason)](#GuildMember+setMute) ⇒ <code>Promise</code>
    * [.setDeaf(deaf, reason)](#GuildMember+setDeaf) ⇒ <code>Promise</code>
    * [.setChannel(channel, reason)](#GuildMember+setChannel) ⇒ <code>Promise</code>
    * [.setCommunicationDisabled(channel, reason)](#GuildMember+setCommunicationDisabled) ⇒ <code>Promise</code>
    * [.bannerURL(options)](#GuildMember+bannerURL) ⇒ <code>string</code> \| <code>null</code>
    * [.displayAvatarURL(options)](#GuildMember+displayAvatarURL) ⇒ <code>string</code>
    * [.permissionsIn(channel)](#GuildMember+permissionsIn) ⇒ <code>PermissionOverwrites</code>
    * [.permissionHas(perm)](#GuildMember+permissionHas) ⇒ <code>boolean</code>

<a name="new_GuildMember_new"></a>

### new GuildMember(data, guildId, client)

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | The data for the member. |
| guildId | <code>string</code> | The ID of the guild the member belongs to. |
| client | <code>Client</code> | The client that instantiated this member. |

<a name="GuildMember+guild"></a>

### guildMember.guild : <code>Guild</code> \| <code>null</code>
The guild that the member belongs to.

**Kind**: instance property of [<code>GuildMember</code>](#GuildMember)  
<a name="GuildMember+voice"></a>

### guildMember.voice : <code>VoiceState</code> \| <code>null</code>
Gets the voice state for the member.

**Kind**: instance property of [<code>GuildMember</code>](#GuildMember)  
<a name="GuildMember+presence"></a>

### guildMember.presence : <code>Presence</code> \| <code>null</code>
Gets the presence for the member.

**Kind**: instance property of [<code>GuildMember</code>](#GuildMember)  
<a name="GuildMember+permissions"></a>

### guildMember.permissions : <code>Permissions</code>
Gets the resolved permissions for the member.

**Kind**: instance property of [<code>GuildMember</code>](#GuildMember)  
<a name="GuildMember+user"></a>

### guildMember.user : <code>User</code> \| <code>null</code>
The user object for the member.

**Kind**: instance property of [<code>GuildMember</code>](#GuildMember)  
<a name="GuildMember+isCommunicationDisabled"></a>

### guildMember.isCommunicationDisabled() ⇒ <code>boolean</code>
Checks if the member's communication is currently disabled.

**Kind**: instance method of [<code>GuildMember</code>](#GuildMember)  
**Returns**: <code>boolean</code> - - Whether communication is disabled.  
<a name="GuildMember+fetch"></a>

### guildMember.fetch(options) ⇒ [<code>Promise.&lt;GuildMember&gt;</code>](#GuildMember)
Fetches this member from the API.

**Kind**: instance method of [<code>GuildMember</code>](#GuildMember)  
**Returns**: [<code>Promise.&lt;GuildMember&gt;</code>](#GuildMember) - - The fetched member.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Optional options for the fetch. |

<a name="GuildMember+kick"></a>

### guildMember.kick(reason) ⇒ [<code>Promise.&lt;GuildMember&gt;</code>](#GuildMember)
Kicks this member from the guild.

**Kind**: instance method of [<code>GuildMember</code>](#GuildMember)  
**Returns**: [<code>Promise.&lt;GuildMember&gt;</code>](#GuildMember) - - The kicked member.  

| Param | Type | Description |
| --- | --- | --- |
| reason | <code>string</code> | The reason for the kick. |

<a name="GuildMember+send"></a>

### guildMember.send(options) ⇒ <code>Promise.&lt;Message&gt;</code>
Sends a DM to this member.

**Kind**: instance method of [<code>GuildMember</code>](#GuildMember)  
**Returns**: <code>Promise.&lt;Message&gt;</code> - - The sent message.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Options for the DM. |

<a name="GuildMember+ban"></a>

### guildMember.ban(options) ⇒ [<code>Promise.&lt;GuildMember&gt;</code>](#GuildMember)
Bans this member from the guild.

**Kind**: instance method of [<code>GuildMember</code>](#GuildMember)  
**Returns**: [<code>Promise.&lt;GuildMember&gt;</code>](#GuildMember) - - The banned member.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Options for the ban. |

<a name="GuildMember+edit"></a>

### guildMember.edit(options) ⇒ [<code>Promise.&lt;GuildMember&gt;</code>](#GuildMember)
Edits this member.

**Kind**: instance method of [<code>GuildMember</code>](#GuildMember)  
**Returns**: [<code>Promise.&lt;GuildMember&gt;</code>](#GuildMember) - - The edited member.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Options for the edit. |

<a name="GuildMember+setNickname"></a>

### guildMember.setNickname(nickname, reason) ⇒ <code>Promise</code>
Sets the member's nickname.

**Kind**: instance method of [<code>GuildMember</code>](#GuildMember)  
**Returns**: <code>Promise</code> - A promise that resolves with the updated member object.  

| Param | Type | Description |
| --- | --- | --- |
| nickname | <code>string</code> | The new nickname. |
| reason | <code>string</code> | The reason for setting the nickname (optional). |

<a name="GuildMember+setMute"></a>

### guildMember.setMute(mute, reason) ⇒ <code>Promise</code>
Sets whether the member is muted.

**Kind**: instance method of [<code>GuildMember</code>](#GuildMember)  
**Returns**: <code>Promise</code> - A promise that resolves with the updated member object.  

| Param | Type | Description |
| --- | --- | --- |
| mute | <code>boolean</code> | Whether to mute the member. |
| reason | <code>string</code> | The reason for setting the mute (optional). |

<a name="GuildMember+setDeaf"></a>

### guildMember.setDeaf(deaf, reason) ⇒ <code>Promise</code>
Sets whether the member is deafened.

**Kind**: instance method of [<code>GuildMember</code>](#GuildMember)  
**Returns**: <code>Promise</code> - A promise that resolves with the updated member object.  

| Param | Type | Description |
| --- | --- | --- |
| deaf | <code>boolean</code> | Whether to deafen the member. |
| reason | <code>string</code> | The reason for setting the deaf (optional). |

<a name="GuildMember+setChannel"></a>

### guildMember.setChannel(channel, reason) ⇒ <code>Promise</code>
Moves the member to a different voice channel.

**Kind**: instance method of [<code>GuildMember</code>](#GuildMember)  
**Returns**: <code>Promise</code> - A promise that resolves with the updated member object.  

| Param | Type | Description |
| --- | --- | --- |
| channel | <code>ChannelResolvable</code> | The new voice channel. |
| reason | <code>string</code> | The reason for moving the member (optional). |

<a name="GuildMember+setCommunicationDisabled"></a>

### guildMember.setCommunicationDisabled(channel, reason) ⇒ <code>Promise</code>
Moves the member to a different voice channel.

**Kind**: instance method of [<code>GuildMember</code>](#GuildMember)  
**Returns**: <code>Promise</code> - A promise that resolves with the updated member object.  

| Param | Type | Description |
| --- | --- | --- |
| channel | <code>ChannelResolvable</code> | The new voice channel. |
| reason | <code>string</code> | The reason for moving the member (optional). |

<a name="GuildMember+bannerURL"></a>

### guildMember.bannerURL(options) ⇒ <code>string</code> \| <code>null</code>
The URL to the member's guild banner image.

**Kind**: instance method of [<code>GuildMember</code>](#GuildMember)  
**Returns**: <code>string</code> \| <code>null</code> - The URL to the banner image, or null if the member does not have a banner.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Options for the banner URL (optional). |
| options.dynamic | <code>boolean</code> | Whether to use the dynamic version of the banner (default: true). |
| options.size | <code>number</code> | The size of the banner (default: 2048). |
| options.format | <code>string</code> | The format of the banner (default: "webp"). |

<a name="GuildMember+displayAvatarURL"></a>

### guildMember.displayAvatarURL(options) ⇒ <code>string</code>
Returns the URL to the member's display avatar.

**Kind**: instance method of [<code>GuildMember</code>](#GuildMember)  
**Returns**: <code>string</code> - The URL to the display avatar.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Options for the avatar URL (optional). |
| options.dynamic | <code>boolean</code> | Whether to use the dynamic version of the avatar (default: true). |
| options.size | <code>number</code> | The size of the avatar (default: 2048). |
| options.format | <code>string</code> | The format of the avatar (default: "webp"). |

<a name="GuildMember+permissionsIn"></a>

### guildMember.permissionsIn(channel) ⇒ <code>PermissionOverwrites</code>
Gets the permissions for the member in a given channel.

**Kind**: instance method of [<code>GuildMember</code>](#GuildMember)  
**Returns**: <code>PermissionOverwrites</code> - The resolved permissions for the member in the channel.  
**Throws**:

- <code>RangeError</code> Thrown if the channel is not cached.


| Param | Type | Description |
| --- | --- | --- |
| channel | <code>ChannelResolvable</code> | The channel to get permissions for. |

<a name="GuildMember+permissionHas"></a>

### guildMember.permissionHas(perm) ⇒ <code>boolean</code>
Checks if the member has a given permission.

**Kind**: instance method of [<code>GuildMember</code>](#GuildMember)  
**Returns**: <code>boolean</code> - Whether the member has the permission.  

| Param | Type | Description |
| --- | --- | --- |
| perm | <code>PermissionResolvable</code> | The permission to check for. |

