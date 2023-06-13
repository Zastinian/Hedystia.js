<a name="ChannelManager"></a>

## ChannelManager

**Kind**: global class

- [ChannelManager](#ChannelManager)
  - [new ChannelManager(client)](#new_ChannelManager_new)
  - _instance_
    - [.cache](#ChannelManager+cache) ⇒
    - [.\_add(channels, [guildId], [options])](#ChannelManager+_add) ⇒
    - [.fetch(channel, options)](#ChannelManager+fetch) ⇒
    - [.\_fetchId(channel, [cache], [force])](#ChannelManager+_fetchId) ⇒
    - [.edit(channel, [options])](#ChannelManager+edit) ⇒
    - [.delete(channel, reason)](#ChannelManager+delete) ⇒
    - [.createInvite(channel, [options])](#ChannelManager+createInvite) ⇒
    - [.follow(news, [options])](#ChannelManager+follow) ⇒
    - [.triggerTyping(channel)](#ChannelManager+triggerTyping) ⇒
    - [.clone(channel)](#ChannelManager+clone) ⇒
  - _static_
    - [.transformPayload([o], [position])](#ChannelManager.transformPayload) ⇒
    - [.transformOverwrites([p])](#ChannelManager.transformOverwrites) ⇒

<a name="new_ChannelManager_new"></a>

### new ChannelManager(client)

It's a constructor function that takes a client parameter and passes it to the super function.

| Param  | Description        |
| ------ | ------------------ |
| client | The client object. |

<a name="ChannelManager+cache"></a>

### channelManager.cache ⇒

It returns the Collection object.

**Kind**: instance property of [<code>ChannelManager</code>](#ChannelManager)  
**Returns**: The Collection object.  
<a name="ChannelManager+_add"></a>

### channelManager.\_add(channels, [guildId], [options]) ⇒

It takes a channel object, and returns a channel object

**Kind**: instance method of [<code>ChannelManager</code>](#ChannelManager)  
**Returns**: A channel object.

| Param     | Description                            |
| --------- | -------------------------------------- |
| channels  | The channel object or channel ID.      |
| [guildId] | The ID of the guild the channel is in. |
| [options] | cache = true, force = false            |

<a name="ChannelManager+fetch"></a>

### channelManager.fetch(channel, options) ⇒

It fetches all the channels in a guild.

**Kind**: instance method of [<code>ChannelManager</code>](#ChannelManager)  
**Returns**: An array of objects.

| Param   | Description               |
| ------- | ------------------------- |
| channel | The channel ID or object. |
| options |                           |

<a name="ChannelManager+_fetchId"></a>

### channelManager.\_fetchId(channel, [cache], [force]) ⇒

It fetches the channel ID from the API and adds it to the cache

**Kind**: instance method of [<code>ChannelManager</code>](#ChannelManager)  
**Returns**: The channel object.

| Param   | Default            | Description                                     |
| ------- | ------------------ | ----------------------------------------------- |
| channel |                    | The channel to fetch.                           |
| [cache] | <code>true</code>  | Whether or not to cache the channel.            |
| [force] | <code>false</code> | If true, it will force the cache to be updated. |

<a name="ChannelManager+edit"></a>

### channelManager.edit(channel, [options]) ⇒

It edits a channel

**Kind**: instance method of [<code>ChannelManager</code>](#ChannelManager)  
**Returns**: The channel object.

| Param     | Description          |
| --------- | -------------------- |
| channel   | The channel to edit. |
| [options] | Object               |

<a name="ChannelManager+delete"></a>

### channelManager.delete(channel, reason) ⇒

It deletes a channel

**Kind**: instance method of [<code>ChannelManager</code>](#ChannelManager)  
**Returns**: The deleted channel.

| Param   | Description                  |
| ------- | ---------------------------- |
| channel | The channel to delete.       |
| reason  | The reason for the deletion. |

<a name="ChannelManager+createInvite"></a>

### channelManager.createInvite(channel, [options]) ⇒

It creates an invite for a channel

**Kind**: instance method of [<code>ChannelManager</code>](#ChannelManager)  
**Returns**: An invite object.

| Param     | Description                           |
| --------- | ------------------------------------- |
| channel   | The channel to create the invite for. |
| [options] | Object                                |

<a name="ChannelManager+follow"></a>

### channelManager.follow(news, [options]) ⇒

It follows a channel

**Kind**: instance method of [<code>ChannelManager</code>](#ChannelManager)  
**Returns**: The channel that was followed.

| Param     | Description                     |
| --------- | ------------------------------- |
| news      | The channel you want to follow. |
| [options] | Object                          |

<a name="ChannelManager+triggerTyping"></a>

### channelManager.triggerTyping(channel) ⇒

It triggers typing in a channel

**Kind**: instance method of [<code>ChannelManager</code>](#ChannelManager)  
**Returns**: Nothing.

| Param   | Description                                  |
| ------- | -------------------------------------------- |
| channel | The channel to send the typing indicator to. |

<a name="ChannelManager+clone"></a>

### channelManager.clone(channel) ⇒

**Kind**: instance method of [<code>ChannelManager</code>](#ChannelManager)  
**Returns**: The channel object.

| Param   | Description           |
| ------- | --------------------- |
| channel | The channel to clone. |

<a name="ChannelManager.transformPayload"></a>

### ChannelManager.transformPayload([o], [position]) ⇒

It transforms an object into another object

**Kind**: static method of [<code>ChannelManager</code>](#ChannelManager)  
**Returns**: an object with the properties of name, type, topic, bitrate, user_limit,
rate_limit_per_user, position, permission_overwrites, parent_id, nsfw, archived,
auto_archive_duration, locked, invitable, default_auto_archive_duration, video_quality_mode,
rtc_region, and

| Param      | Default            | Description                           |
| ---------- | ------------------ | ------------------------------------- |
| [o]        |                    | The object that is being transformed. |
| [position] | <code>false</code> | boolean                               |

<a name="ChannelManager.transformOverwrites"></a>

### ChannelManager.transformOverwrites([p]) ⇒

It takes an object with properties id, type, allow, and deny, and returns an object with the same
properties, but with the id property being a string, the type property being a number, and the
allow and deny properties being strings

**Kind**: static method of [<code>ChannelManager</code>](#ChannelManager)  
**Returns**: The return is an object with the properties id, type, allow, and deny.

| Param | Description            |
| ----- | ---------------------- |
| [p]   | The overwrites object. |
