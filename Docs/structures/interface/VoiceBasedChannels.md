---
title: VoiceBasedChannels
sidebar:
  order: 49
---



## VoiceBasedChannels ⇐ <code>Channel</code>
Represents a voice-based channel in a guild.

**Kind**: global class  
**Extends**: <code>Channel</code>  

* [VoiceBasedChannels](#VoiceBasedChannels) ⇐ <code>Channel</code>
    * [new VoiceBasedChannels([data], guildId, client)](#new_VoiceBasedChannels_new)
    * [.members](#VoiceBasedChannels+members) ⇒ <code>Collection.&lt;Snowflake, GuildMember&gt;</code> \| <code>null</code>
    * [.join([options])](#VoiceBasedChannels+join) ⇒ <code>VoiceConnection</code>
    * [.disconnect()](#VoiceBasedChannels+disconnect) ⇒ <code>this</code>
    * [.setRtcRegion(rtcRegion, reason)](#VoiceBasedChannels+setRtcRegion) ⇒ <code>Promise</code>
    * [.setBitrate(bitrate, reason)](#VoiceBasedChannels+setBitrate) ⇒ <code>Promise</code>

<a name="new_VoiceBasedChannels_new"></a>

### new VoiceBasedChannels([data], guildId, client)
Constructs a new instance of a class, extending the base class.


| Param | Type | Description |
| --- | --- | --- |
| [data] | <code>Object</code> | The data object to initialize the instance with. |
| guildId | <code>string</code> | The ID of the guild associated with the instance. |
| client | <code>Object</code> | The client object associated with the instance. |

<a name="VoiceBasedChannels+members"></a>

### voiceBasedChannels.members ⇒ <code>Collection.&lt;Snowflake, GuildMember&gt;</code> \| <code>null</code>
Retrieves the members in the voice channel associated with the current guild.

**Kind**: instance property of [<code>VoiceBasedChannels</code>](#VoiceBasedChannels)  
**Returns**: <code>Collection.&lt;Snowflake, GuildMember&gt;</code> \| <code>null</code> - - A collection of guild members in the voice channel, or null if no members are found.  
<a name="VoiceBasedChannels+join"></a>

### voiceBasedChannels.join([options]) ⇒ <code>VoiceConnection</code>
Joins the voice channel associated with this VoiceConnection.

**Kind**: instance method of [<code>VoiceBasedChannels</code>](#VoiceBasedChannels)  
**Returns**: <code>VoiceConnection</code> - - The VoiceConnection instance.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | Optional parameters for joining the voice channel. |
| [options.selfMute] | <code>boolean</code> | <code>false</code> | Whether to mute the user's own audio. |
| [options.selfDeaf] | <code>boolean</code> | <code>false</code> | Whether to deafen the user's own audio. |

<a name="VoiceBasedChannels+disconnect"></a>

### voiceBasedChannels.disconnect() ⇒ <code>this</code>
Disconnects the voice connection by sending a voice state update to the server with a null channel ID.

**Kind**: instance method of [<code>VoiceBasedChannels</code>](#VoiceBasedChannels)  
**Returns**: <code>this</code> - - Returns the current instance of the class.  
<a name="VoiceBasedChannels+setRtcRegion"></a>

### voiceBasedChannels.setRtcRegion(rtcRegion, reason) ⇒ <code>Promise</code>
Sets the RTC (Real-Time Communication) region for the object.

**Kind**: instance method of [<code>VoiceBasedChannels</code>](#VoiceBasedChannels)  
**Returns**: <code>Promise</code> - - A promise that resolves when the RTC region is successfully set.  

| Param | Type | Description |
| --- | --- | --- |
| rtcRegion | <code>string</code> | The RTC region to set. |
| reason | <code>string</code> | The reason for setting the RTC region. |

<a name="VoiceBasedChannels+setBitrate"></a>

### voiceBasedChannels.setBitrate(bitrate, reason) ⇒ <code>Promise</code>
Sets the bitrate of the current object.

**Kind**: instance method of [<code>VoiceBasedChannels</code>](#VoiceBasedChannels)  
**Returns**: <code>Promise</code> - - A promise that resolves when the bitrate is successfully set.  

| Param | Type | Description |
| --- | --- | --- |
| bitrate | <code>number</code> | The new bitrate value to set. |
| reason | <code>string</code> | The reason for setting the bitrate. |

