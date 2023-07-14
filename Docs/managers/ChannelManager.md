<a name="ChannelManager"></a>

## ChannelManager ⇐ <code>Base</code>
Represents a Channel Manager that handles operations related to channels.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [ChannelManager](#ChannelManager) ⇐ <code>Base</code>
    * [new ChannelManager(client)](#new_ChannelManager_new)
    * _instance_
        * [.cache](#ChannelManager+cache) ⇒
        * [._add(channels, [guildId], [options])](#ChannelManager+_add) ⇒ <code>Channel</code>
        * [.fetch(channel, [options])](#ChannelManager+fetch) ⇒ <code>Promise.&lt;object&gt;</code>
        * [._fetchId(channel, [cache], [force])](#ChannelManager+_fetchId) ⇒ <code>Promise.&lt;Channel&gt;</code>
        * [.edit(channel, [options])](#ChannelManager+edit) ⇒ <code>Promise.&lt;Channel&gt;</code>
        * [.delete(channel, reason)](#ChannelManager+delete) ⇒ <code>Promise.&lt;Channel&gt;</code>
        * [.createInvite(channel, [options])](#ChannelManager+createInvite) ⇒ <code>Promise.&lt;Invite&gt;</code>
        * [.follow(news, [options])](#ChannelManager+follow) ⇒ <code>Promise.&lt;string&gt;</code>
        * [.triggerTyping(channel)](#ChannelManager+triggerTyping) ⇒ <code>Promise.&lt;void&gt;</code>
        * [.clone(channel)](#ChannelManager+clone) ⇒ <code>Promise.&lt;Channel&gt;</code>
    * _static_
        * [.transformPayload(o, [position])](#ChannelManager.transformPayload) ⇒ <code>object</code>
        * [.transformOverwrites(p)](#ChannelManager.transformOverwrites) ⇒ <code>Object</code>

<a name="new_ChannelManager_new"></a>

### new ChannelManager(client)
Constructs a new instance of the class.


| Param | Type | Description |
| --- | --- | --- |
| client | <code>Client</code> | The client object used for communication with the server. |

<a name="ChannelManager+cache"></a>

### channelManager.cache ⇒
Getter method for the cache property.

**Kind**: instance property of [<code>ChannelManager</code>](#ChannelManager)  
**Returns**: The Collection object representing the cache.  
<a name="ChannelManager+_add"></a>

### channelManager.\_add(channels, [guildId], [options]) ⇒ <code>Channel</code>
Adds a channel to the cache and returns the channel object.

**Kind**: instance method of [<code>ChannelManager</code>](#ChannelManager)  
**Returns**: <code>Channel</code> - The added channel object.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| channels | <code>string</code> \| <code>Channel</code> |  | The channel ID or channel object to add. |
| [guildId] | <code>string</code> | <code>&quot;this.guildId&quot;</code> | The ID of the guild the channel belongs to. |
| [options] | <code>object</code> | <code>{cache: true, force: false}</code> | Additional options for adding the channel. |
| [options.cache] | <code>boolean</code> | <code>true</code> | Whether to cache the channel object. |
| [options.force] | <code>boolean</code> | <code>false</code> | Whether to force fetching the channel from the cache. |

<a name="ChannelManager+fetch"></a>

### channelManager.fetch(channel, [options]) ⇒ <code>Promise.&lt;object&gt;</code>
Fetches a channel from the server based on the provided channel ID or channel object.

**Kind**: instance method of [<code>ChannelManager</code>](#ChannelManager)  
**Returns**: <code>Promise.&lt;object&gt;</code> - - A promise that resolves to the fetched channel object.  

| Param | Type | Description |
| --- | --- | --- |
| channel | <code>string</code> \| <code>object</code> | The channel ID or channel object to fetch. |
| [options] | <code>object</code> | Additional options for the fetch operation. |
| [options.cache] | <code>boolean</code> | Whether to use the cache for the fetch operation. |
| [options.force] | <code>boolean</code> | Whether to force a fresh fetch from the server. |

<a name="ChannelManager+_fetchId"></a>

### channelManager.\_fetchId(channel, [cache], [force]) ⇒ <code>Promise.&lt;Channel&gt;</code>
Fetches the ID of a channel from the API.

**Kind**: instance method of [<code>ChannelManager</code>](#ChannelManager)  
**Returns**: <code>Promise.&lt;Channel&gt;</code> - - A promise that resolves to the fetched channel.  
**Throws**:

- <code>RangeError</code> - If the fetched channel is not a part of the guild.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| channel | <code>string</code> \| <code>Channel</code> |  | The channel or channel ID to fetch. |
| [cache] | <code>boolean</code> | <code>true</code> | Whether to cache the fetched channel. |
| [force] | <code>boolean</code> | <code>false</code> | Whether to force fetching the channel even if it is already cached. |

<a name="ChannelManager+edit"></a>

### channelManager.edit(channel, [options]) ⇒ <code>Promise.&lt;Channel&gt;</code>
Edits a channel with the given options.

**Kind**: instance method of [<code>ChannelManager</code>](#ChannelManager)  
**Returns**: <code>Promise.&lt;Channel&gt;</code> - A promise that resolves with the edited channel.  

| Param | Type | Description |
| --- | --- | --- |
| channel | <code>string</code> \| <code>Channel</code> | The channel to edit. Can be either a channel ID or a Channel object. |
| [options] | <code>Object</code> | The options for editing the channel. |
| [options.reason] | <code>string</code> | The reason for the channel edit. |

<a name="ChannelManager+delete"></a>

### channelManager.delete(channel, reason) ⇒ <code>Promise.&lt;Channel&gt;</code>
Deletes a channel.

**Kind**: instance method of [<code>ChannelManager</code>](#ChannelManager)  
**Returns**: <code>Promise.&lt;Channel&gt;</code> - - A promise that resolves with the deleted channel.  

| Param | Type | Description |
| --- | --- | --- |
| channel | <code>string</code> \| <code>Channel</code> | The channel to delete. Can be either a channel ID or a Channel object. |
| reason | <code>string</code> | The reason for deleting the channel. |

<a name="ChannelManager+createInvite"></a>

### channelManager.createInvite(channel, [options]) ⇒ <code>Promise.&lt;Invite&gt;</code>
Creates an invite for a given channel with optional options.

**Kind**: instance method of [<code>ChannelManager</code>](#ChannelManager)  
**Returns**: <code>Promise.&lt;Invite&gt;</code> - - A promise that resolves with the created invite.  

| Param | Type | Description |
| --- | --- | --- |
| channel | <code>string</code> \| <code>Channel</code> | The channel or channel ID to create the invite for. |
| [options] | <code>Object</code> | Optional parameters for creating the invite. |
| [options.reason] | <code>string</code> | The reason for creating the invite. |

<a name="ChannelManager+follow"></a>

### channelManager.follow(news, [options]) ⇒ <code>Promise.&lt;string&gt;</code>
Follows a news channel and adds it to the list of followed channels.

**Kind**: instance method of [<code>ChannelManager</code>](#ChannelManager)  
**Returns**: <code>Promise.&lt;string&gt;</code> - - A promise that resolves with the ID of the followed channel.  

| Param | Type | Description |
| --- | --- | --- |
| news | <code>string</code> \| <code>NewsChannel</code> | The news channel to follow. Can be either a string representing the channel ID or a NewsChannel object. |
| [options] | <code>Object</code> | Additional options for following the channel. |
| [options.reason] | <code>string</code> | The reason for following the channel. |
| [options.channel] | <code>string</code> \| <code>NewsChannel</code> | The channel to receive webhook notifications. Can be either a string representing the channel ID or a NewsChannel object. |

<a name="ChannelManager+triggerTyping"></a>

### channelManager.triggerTyping(channel) ⇒ <code>Promise.&lt;void&gt;</code>
Triggers the typing indicator in a given channel.

**Kind**: instance method of [<code>ChannelManager</code>](#ChannelManager)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the typing indicator is triggered.  

| Param | Type | Description |
| --- | --- | --- |
| channel | <code>string</code> \| <code>Channel</code> | The channel ID or the channel object. |

<a name="ChannelManager+clone"></a>

### channelManager.clone(channel) ⇒ <code>Promise.&lt;Channel&gt;</code>
Clones a channel by creating a new channel with the same properties and permission overwrites.

**Kind**: instance method of [<code>ChannelManager</code>](#ChannelManager)  
**Returns**: <code>Promise.&lt;Channel&gt;</code> - - A promise that resolves with the cloned channel.  
**Throws**:

- <code>RangeError</code> - If the channel is not found in the cache.


| Param | Type | Description |
| --- | --- | --- |
| channel | <code>string</code> \| <code>Channel</code> | The channel ID or the channel object to clone. |

<a name="ChannelManager.transformPayload"></a>

### ChannelManager.transformPayload(o, [position]) ⇒ <code>object</code>
Transforms the payload object into the desired format based on the given parameters.

**Kind**: static method of [<code>ChannelManager</code>](#ChannelManager)  
**Returns**: <code>object</code> - - The transformed payload object.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| o | <code>object</code> |  | The payload object to transform. |
| [position] | <code>boolean</code> | <code>false</code> | Indicates whether to include position-related properties in the transformed object. |

<a name="ChannelManager.transformOverwrites"></a>

### ChannelManager.transformOverwrites(p) ⇒ <code>Object</code>
Transforms an object of overwrite properties into a standardized format.

**Kind**: static method of [<code>ChannelManager</code>](#ChannelManager)  
**Returns**: <code>Object</code> - - The transformed overwrite object.  

| Param | Type | Description |
| --- | --- | --- |
| p | <code>Object</code> | The overwrite properties object. |
| p.id | <code>string</code> | The ID of the overwrite. |
| p.type | <code>string</code> | The type of the overwrite. |
| p.allow | <code>Array.&lt;string&gt;</code> | The permissions to allow for the overwrite. |
| p.deny | <code>Array.&lt;string&gt;</code> | The permissions to deny for the overwrite. |

