<a name="StageChannel"></a>

## StageChannel ⇐ <code>VoiceBasedChannels</code>
It's a class that extends the VoiceBasedChannels class, and adds a few extra methods to it.

**Kind**: global class  
**Extends**: <code>VoiceBasedChannels</code>  

* [StageChannel](#StageChannel) ⇐ <code>VoiceBasedChannels</code>
    * [new StageChannel([data], guildId, client)](#new_StageChannel_new)
    * [.stageInstance](#StageChannel+stageInstance) ⇒
    * [.createStageInstance([options])](#StageChannel+createStageInstance) ⇒

<a name="new_StageChannel_new"></a>

### new StageChannel([data], guildId, client)
It's a constructor function that takes in three parameters, data, guildId, and client.


| Param | Description |
| --- | --- |
| [data] | The data that the role is being created with. |
| guildId | The ID of the guild the role is in. |
| client | The client that instantiated the object. |

<a name="StageChannel+stageInstance"></a>

### stageChannel.stageInstance ⇒
If the guild exists, return the stage instance that has the same channel ID as the currentchannel, otherwise return null

**Kind**: instance property of [<code>StageChannel</code>](#StageChannel)  
**Returns**: The stageInstance is being returned.  
<a name="StageChannel+createStageInstance"></a>

### stageChannel.createStageInstance([options]) ⇒
It creates a new stage instance in the guild, and sets the channel to the current channel

**Kind**: instance method of [<code>StageChannel</code>](#StageChannel)  
**Returns**: The stage instance that was created.  

| Param | Description |
| --- | --- |
| [options] | The options to pass to the stage instance. |

