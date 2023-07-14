<a name="StageChannel"></a>

## StageChannel ⇐ <code>VoiceBasedChannels</code>
Represents a stage channel, which is a type of voice-based channel.

**Kind**: global class  
**Extends**: <code>VoiceBasedChannels</code>  

* [StageChannel](#StageChannel) ⇐ <code>VoiceBasedChannels</code>
    * [new StageChannel([data], guildId, client)](#new_StageChannel_new)
    * [.stageInstance](#StageChannel+stageInstance) ⇒ <code>StageInstance</code> \| <code>null</code>
    * [.createStageInstance(options)](#StageChannel+createStageInstance) ⇒ <code>Promise.&lt;StageInstance&gt;</code>

<a name="new_StageChannel_new"></a>

### new StageChannel([data], guildId, client)
Constructs a new instance of the class.


| Param | Type | Description |
| --- | --- | --- |
| [data] | <code>Object</code> | The data object to initialize the instance with. |
| guildId | <code>string</code> | The ID of the guild associated with the instance. |
| client | <code>Client</code> | The client instance associated with the instance. |

<a name="StageChannel+stageInstance"></a>

### stageChannel.stageInstance ⇒ <code>StageInstance</code> \| <code>null</code>
Retrieves the stage instance associated with the channel.

**Kind**: instance property of [<code>StageChannel</code>](#StageChannel)  
**Returns**: <code>StageInstance</code> \| <code>null</code> - The stage instance object if found, otherwise null.  
<a name="StageChannel+createStageInstance"></a>

### stageChannel.createStageInstance(options) ⇒ <code>Promise.&lt;StageInstance&gt;</code>
Creates a stage instance in the specified channel.

**Kind**: instance method of [<code>StageChannel</code>](#StageChannel)  
**Returns**: <code>Promise.&lt;StageInstance&gt;</code> - A promise that resolves to the created stage instance.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options for creating the stage instance. |

