<a name="GuildScheduledEvent"></a>

## GuildScheduledEvent ⇐ <code>Base</code>
It's a class that represents a scheduled event in a guild.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [GuildScheduledEvent](#GuildScheduledEvent) ⇐ <code>Base</code>
    * [new GuildScheduledEvent(data, guildId, client)](#new_GuildScheduledEvent_new)
    * [.guild](#GuildScheduledEvent+guild) ⇒
    * [.creator](#GuildScheduledEvent+creator) ⇒
    * [.fetch(options)](#GuildScheduledEvent+fetch) ⇒
    * [.edit([options])](#GuildScheduledEvent+edit) ⇒
    * [.delete()](#GuildScheduledEvent+delete) ⇒
    * [.setName(name, reason)](#GuildScheduledEvent+setName) ⇒
    * [.setDescription(description, reason)](#GuildScheduledEvent+setDescription) ⇒
    * [.setPrivacyLevel(privacyLevel, reason)](#GuildScheduledEvent+setPrivacyLevel) ⇒
    * [.setEntityType(entityType, reason)](#GuildScheduledEvent+setEntityType) ⇒
    * [.setEntityMetadata(entityMetadata, reason)](#GuildScheduledEvent+setEntityMetadata) ⇒
    * [.setImage(image, reason)](#GuildScheduledEvent+setImage) ⇒
    * [.setScheduledStartTime(scheduledStartTime, reason)](#GuildScheduledEvent+setScheduledStartTime) ⇒
    * [.setScheduledEndTime(scheduledEndTime, reason)](#GuildScheduledEvent+setScheduledEndTime) ⇒
    * [.setStatus(status, reason)](#GuildScheduledEvent+setStatus) ⇒
    * [.coverImageURL([options])](#GuildScheduledEvent+coverImageURL) ⇒
    * [.inviteURL()](#GuildScheduledEvent+inviteURL) ⇒

<a name="new_GuildScheduledEvent_new"></a>

### new GuildScheduledEvent(data, guildId, client)

| Param | Description |
| --- | --- |
| data | guildId, client |
| guildId | The ID of the guild the event is in |
| client | Discord.Client |

<a name="GuildScheduledEvent+guild"></a>

### guildScheduledEvent.guild ⇒
It returns the guild object of the guild ID that is stored in the database

**Kind**: instance property of [<code>GuildScheduledEvent</code>](#GuildScheduledEvent)  
**Returns**: The guild object.  
<a name="GuildScheduledEvent+creator"></a>

### guildScheduledEvent.creator ⇒
It returns the user object of the creator of the guild

**Kind**: instance property of [<code>GuildScheduledEvent</code>](#GuildScheduledEvent)  
**Returns**: The creator of the guild.  
<a name="GuildScheduledEvent+fetch"></a>

### guildScheduledEvent.fetch(options) ⇒
It fetches the event from the guild's event cache

**Kind**: instance method of [<code>GuildScheduledEvent</code>](#GuildScheduledEvent)  
**Returns**: The event object.  

| Param | Description |
| --- | --- |
| options | An object containing the following properties: |

<a name="GuildScheduledEvent+edit"></a>

### guildScheduledEvent.edit([options]) ⇒
It edits the event

**Kind**: instance method of [<code>GuildScheduledEvent</code>](#GuildScheduledEvent)  
**Returns**: The return value of the edit method.  

| Param | Description |
| --- | --- |
| [options] | Object |

<a name="GuildScheduledEvent+delete"></a>

### guildScheduledEvent.delete() ⇒
It deletes the event

**Kind**: instance method of [<code>GuildScheduledEvent</code>](#GuildScheduledEvent)  
**Returns**: The return value of the delete method of the events object of the guild object of theevent object.  
<a name="GuildScheduledEvent+setName"></a>

### guildScheduledEvent.setName(name, reason) ⇒
It edits the name of the channel

**Kind**: instance method of [<code>GuildScheduledEvent</code>](#GuildScheduledEvent)  
**Returns**: The name of the channel.  

| Param | Description |
| --- | --- |
| name | The new name of the channel. |
| reason | The reason for the edit. |

<a name="GuildScheduledEvent+setDescription"></a>

### guildScheduledEvent.setDescription(description, reason) ⇒
It edits the description of the channel

**Kind**: instance method of [<code>GuildScheduledEvent</code>](#GuildScheduledEvent)  
**Returns**: The description of the channel.  

| Param | Description |
| --- | --- |
| description | The new description of the channel. |
| reason | The reason for the edit. |

<a name="GuildScheduledEvent+setPrivacyLevel"></a>

### guildScheduledEvent.setPrivacyLevel(privacyLevel, reason) ⇒
This function sets the privacy level of the current channel to the privacy level specified in thefirst parameter, and sets the reason for the change to the reason specified in the secondparameter.

**Kind**: instance method of [<code>GuildScheduledEvent</code>](#GuildScheduledEvent)  
**Returns**: The return value of the edit function.  

| Param | Description |
| --- | --- |
| privacyLevel | The privacy level of the channel. |
| reason | The reason for the change. |

<a name="GuildScheduledEvent+setEntityType"></a>

### guildScheduledEvent.setEntityType(entityType, reason) ⇒
It returns a promise that resolves to the result of calling the edit function with the givenparameters.

**Kind**: instance method of [<code>GuildScheduledEvent</code>](#GuildScheduledEvent)  
**Returns**: The return value of the edit function.  

| Param | Description |
| --- | --- |
| entityType | The type of entity you want to change the entity to. |
| reason | The reason for the change. |

<a name="GuildScheduledEvent+setEntityMetadata"></a>

### guildScheduledEvent.setEntityMetadata(entityMetadata, reason) ⇒
It edits the entity metadata of the message

**Kind**: instance method of [<code>GuildScheduledEvent</code>](#GuildScheduledEvent)  
**Returns**: The return value of the edit function.  

| Param | Description |
| --- | --- |
| entityMetadata | The metadata of the entity. |
| reason | The reason for the edit. |

<a name="GuildScheduledEvent+setImage"></a>

### guildScheduledEvent.setImage(image, reason) ⇒
It edits the image of the embed

**Kind**: instance method of [<code>GuildScheduledEvent</code>](#GuildScheduledEvent)  
**Returns**: The return value of the edit function.  

| Param | Description |
| --- | --- |
| image | The image to set the avatar to. |
| reason | The reason for the edit. |

<a name="GuildScheduledEvent+setScheduledStartTime"></a>

### guildScheduledEvent.setScheduledStartTime(scheduledStartTime, reason) ⇒
It takes a scheduledStartTime and a reason, and then it returns the result of calling the editfunction with the scheduledStartTime and reason as arguments.The edit function is defined in the same file, and it looks like this:

**Kind**: instance method of [<code>GuildScheduledEvent</code>](#GuildScheduledEvent)  
**Returns**: The return value of the edit() method.  

| Param | Description |
| --- | --- |
| scheduledStartTime | The time at which the meeting is scheduled to start. |
| reason | The reason for the change. |

<a name="GuildScheduledEvent+setScheduledEndTime"></a>

### guildScheduledEvent.setScheduledEndTime(scheduledEndTime, reason) ⇒
It takes a time and a reason, and then it edits the event with the time and reason.

**Kind**: instance method of [<code>GuildScheduledEvent</code>](#GuildScheduledEvent)  
**Returns**: The return value of the edit method.  

| Param | Description |
| --- | --- |
| scheduledEndTime | The time at which the live stream is scheduled to end. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format. |
| reason | The reason for the change. |

<a name="GuildScheduledEvent+setStatus"></a>

### guildScheduledEvent.setStatus(status, reason) ⇒
It sets the status of the message.

**Kind**: instance method of [<code>GuildScheduledEvent</code>](#GuildScheduledEvent)  
**Returns**: The return value of the edit function.  

| Param | Description |
| --- | --- |
| status | The status of the embed. |
| reason | The reason for the edit. |

<a name="GuildScheduledEvent+coverImageURL"></a>

### guildScheduledEvent.coverImageURL([options]) ⇒
It returns the URL of the cover image of the event

**Kind**: instance method of [<code>GuildScheduledEvent</code>](#GuildScheduledEvent)  
**Returns**: The coverImageURL is being returned.  

| Param |
| --- |
| [options] | 

<a name="GuildScheduledEvent+inviteURL"></a>

### guildScheduledEvent.inviteURL() ⇒
It returns a URL to the invite

**Kind**: instance method of [<code>GuildScheduledEvent</code>](#GuildScheduledEvent)  
**Returns**: The inviteURL() method returns a string that is the invite URL for the event.  
