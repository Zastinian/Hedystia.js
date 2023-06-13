<a name="VoiceBasedChannels"></a>

## VoiceBasedChannels

**Kind**: global class

- [VoiceBasedChannels](#VoiceBasedChannels)
  - [new VoiceBasedChannels([data], guildId, client)](#new_VoiceBasedChannels_new)
  - [.members](#VoiceBasedChannels+members) ⇒
  - [.join([options])](#VoiceBasedChannels+join) ⇒
  - [.disconnect()](#VoiceBasedChannels+disconnect) ⇒
  - [.setRtcRegion(rtcRegion, reason)](#VoiceBasedChannels+setRtcRegion) ⇒
  - [.setBitrate(bitrate, reason)](#VoiceBasedChannels+setBitrate) ⇒

<a name="new_VoiceBasedChannels_new"></a>

### new VoiceBasedChannels([data], guildId, client)

It's a constructor function that takes in a data object, a guildId, and a client, and then sets the
userLimit, bitrate, rtcRegion, and videoQualityMode properties of the object to the values of the
corresponding properties of the data object, or null if the data object doesn't have those
properties.

| Param   | Description                                  |
| ------- | -------------------------------------------- |
| [data]  | The data that was sent from the Discord API. |
| guildId | The ID of the guild the voice channel is in. |
| client  | Discord.Client                               |

<a name="VoiceBasedChannels+members"></a>

### voiceBasedChannels.members ⇒

It returns an array of members in the voice channel

**Kind**: instance property of [<code>VoiceBasedChannels</code>](#VoiceBasedChannels)  
**Returns**: The members in the voice channel.  
<a name="VoiceBasedChannels+join"></a>

### voiceBasedChannels.join([options]) ⇒

It sends a packet to the Discord API to join the voice channel

**Kind**: instance method of [<code>VoiceBasedChannels</code>](#VoiceBasedChannels)  
**Returns**: The VoiceChannel object.

| Param     | Description |
| --------- | ----------- |
| [options] | Object      |

<a name="VoiceBasedChannels+disconnect"></a>

### voiceBasedChannels.disconnect() ⇒

It sends a packet to the Discord API to disconnect the bot from the voice channel

**Kind**: instance method of [<code>VoiceBasedChannels</code>](#VoiceBasedChannels)  
**Returns**: The VoiceConnection object.  
<a name="VoiceBasedChannels+setRtcRegion"></a>

### voiceBasedChannels.setRtcRegion(rtcRegion, reason) ⇒

This function sets the rtcRegion of the guild.

**Kind**: instance method of [<code>VoiceBasedChannels</code>](#VoiceBasedChannels)  
**Returns**: The return value of the edit function.

| Param     | Description                            |
| --------- | -------------------------------------- |
| rtcRegion | The region to set the voice server to. |
| reason    | The reason for the change.             |

<a name="VoiceBasedChannels+setBitrate"></a>

### voiceBasedChannels.setBitrate(bitrate, reason) ⇒

It sets the bitrate of the voice channel

**Kind**: instance method of [<code>VoiceBasedChannels</code>](#VoiceBasedChannels)  
**Returns**: The bitrate of the voice channel.

| Param   | Description                               |
| ------- | ----------------------------------------- |
| bitrate | The bitrate of the voice channel in bits. |
| reason  | The reason for the change.                |
