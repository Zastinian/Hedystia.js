<a name="StageInstance"></a>

## StageInstance ⇐ <code>Base</code>

It's a class that represents a stage instance.

**Kind**: global class  
**Extends**: <code>Base</code>

- [StageInstance](#StageInstance) ⇐ <code>Base</code>
  - [new StageInstance([data], guildId, client)](#new_StageInstance_new)
  - [.guild](#StageInstance+guild) ⇒
  - [.channel](#StageInstance+channel) ⇒
  - [.guildScheduledEvent](#StageInstance+guildScheduledEvent) ⇒
  - [.fetch(options)](#StageInstance+fetch) ⇒
  - [.edit(options)](#StageInstance+edit) ⇒
  - [.delete(reason)](#StageInstance+delete) ⇒
  - [.setTopic(topic, reason)](#StageInstance+setTopic) ⇒
  - [.setPrivacyLevel(privacyLevel, reason)](#StageInstance+setPrivacyLevel) ⇒

<a name="new_StageInstance_new"></a>

### new StageInstance([data], guildId, client)

| Param   | Description                                   |
| ------- | --------------------------------------------- |
| [data]  | The data that was passed into the constructor |
| guildId | The ID of the guild the voice channel is in.  |
| client  | Discord.Client                                |

<a name="StageInstance+guild"></a>

### stageInstance.guild ⇒

It returns the guild object of the guild ID that is stored in the database

**Kind**: instance property of [<code>StageInstance</code>](#StageInstance)  
**Returns**: The guild object.  
<a name="StageInstance+channel"></a>

### stageInstance.channel ⇒

It returns the channel object of the message

**Kind**: instance property of [<code>StageInstance</code>](#StageInstance)  
**Returns**: The channel object.  
<a name="StageInstance+guildScheduledEvent"></a>

### stageInstance.guildScheduledEvent ⇒

If the guild exists, return the event with the id of the guildScheduledEventId, otherwise return
null.

**Kind**: instance property of [<code>StageInstance</code>](#StageInstance)  
**Returns**: The guildScheduledEventId is being returned.  
<a name="StageInstance+fetch"></a>

### stageInstance.fetch(options) ⇒

It fetches the stage instance from the guild's stage instances.

**Kind**: instance method of [<code>StageInstance</code>](#StageInstance)  
**Returns**: The stage instance.

| Param   | Description                                    |
| ------- | ---------------------------------------------- |
| options | An object containing the following properties: |

<a name="StageInstance+edit"></a>

### stageInstance.edit(options) ⇒

It edits the stage instance

**Kind**: instance method of [<code>StageInstance</code>](#StageInstance)  
**Returns**: The return value of the edit method.

| Param   |
| ------- |
| options |

<a name="StageInstance+delete"></a>

### stageInstance.delete(reason) ⇒

It deletes the stage instance

**Kind**: instance method of [<code>StageInstance</code>](#StageInstance)  
**Returns**: The return value of the delete method of the StageInstances class.

| Param  | Description                  |
| ------ | ---------------------------- |
| reason | The reason for the deletion. |

<a name="StageInstance+setTopic"></a>

### stageInstance.setTopic(topic, reason) ⇒

It sets the topic of the channel

**Kind**: instance method of [<code>StageInstance</code>](#StageInstance)  
**Returns**: The return value of the edit function.

| Param  | Description                                    |
| ------ | ---------------------------------------------- |
| topic  | The new topic of the channel.                  |
| reason | The reason for the change (0-1024 characters). |

<a name="StageInstance+setPrivacyLevel"></a>

### stageInstance.setPrivacyLevel(privacyLevel, reason) ⇒

This function sets the privacy level of the current channel to the privacy level specified in the
first parameter, and sets the reason for the change to the reason specified in the second
parameter.

**Kind**: instance method of [<code>StageInstance</code>](#StageInstance)  
**Returns**: The return value of the edit function.

| Param        | Description                       |
| ------------ | --------------------------------- |
| privacyLevel | The privacy level of the channel. |
| reason       | The reason for the change.        |
