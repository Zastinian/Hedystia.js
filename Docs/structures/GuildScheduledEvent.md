<a name="GuildScheduledEvent"></a>

## GuildScheduledEvent ⇐ <code>Base</code>
Represents a scheduled event in a guild.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [GuildScheduledEvent](#GuildScheduledEvent) ⇐ <code>Base</code>
    * [new GuildScheduledEvent([data], guildId, client)](#new_GuildScheduledEvent_new)
    * [.guild](#GuildScheduledEvent+guild) ⇒
    * [.creator](#GuildScheduledEvent+creator) ⇒
    * [.fetch(options)](#GuildScheduledEvent+fetch) ⇒ <code>Promise</code>
    * [.edit(options)](#GuildScheduledEvent+edit) ⇒ <code>Promise</code>
    * [.delete()](#GuildScheduledEvent+delete) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.setName(name, reason)](#GuildScheduledEvent+setName) ⇒ <code>Promise</code>
    * [.setDescription(description, reason)](#GuildScheduledEvent+setDescription) ⇒ <code>Promise</code>
    * [.setPrivacyLevel(privacyLevel, reason)](#GuildScheduledEvent+setPrivacyLevel) ⇒ <code>Promise</code>
    * [.setEntityType(entityType, reason)](#GuildScheduledEvent+setEntityType) ⇒ <code>Promise</code>
    * [.setEntityMetadata(entityMetadata, reason)](#GuildScheduledEvent+setEntityMetadata) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.setImage(image, reason)](#GuildScheduledEvent+setImage) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.setScheduledStartTime(scheduledStartTime, reason)](#GuildScheduledEvent+setScheduledStartTime) ⇒ <code>Promise</code>
    * [.setScheduledEndTime(scheduledEndTime, reason)](#GuildScheduledEvent+setScheduledEndTime) ⇒ <code>Promise</code>
    * [.setStatus(status, reason)](#GuildScheduledEvent+setStatus) ⇒ <code>Promise.&lt;any&gt;</code>
    * [.coverImageURL(options)](#GuildScheduledEvent+coverImageURL) ⇒ <code>string</code> \| <code>null</code>
    * [.inviteURL()](#GuildScheduledEvent+inviteURL) ⇒ <code>string</code>

<a name="new_GuildScheduledEvent_new"></a>

### new GuildScheduledEvent([data], guildId, client)
Constructs a new GuildScheduledEvent object.

**Returns**: [<code>GuildScheduledEvent</code>](#GuildScheduledEvent) - - The constructed GuildScheduledEvent object.  

| Param | Type | Description |
| --- | --- | --- |
| [data] | <code>Object</code> | The data for the scheduled event. |
| guildId | <code>string</code> | The ID of the guild that the event belongs to. |
| client | <code>Client</code> | The client instance. |

<a name="GuildScheduledEvent+guild"></a>

### guildScheduledEvent.guild ⇒
Retrieves the guild associated with this guildId.

**Kind**: instance property of [<code>GuildScheduledEvent</code>](#GuildScheduledEvent)  
**Returns**: The guild object if found, otherwise null.  
<a name="GuildScheduledEvent+creator"></a>

### guildScheduledEvent.creator ⇒
Retrieves the creator of this object.

**Kind**: instance property of [<code>GuildScheduledEvent</code>](#GuildScheduledEvent)  
**Returns**: The user object representing the creator, or null if the creator is not found.  
<a name="GuildScheduledEvent+fetch"></a>

### guildScheduledEvent.fetch(options) ⇒ <code>Promise</code>
Fetches events for the guild using the provided options.

**Kind**: instance method of [<code>GuildScheduledEvent</code>](#GuildScheduledEvent)  
**Returns**: <code>Promise</code> - A promise that resolves with the fetched events.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> | The options for fetching events. |

<a name="GuildScheduledEvent+edit"></a>

### guildScheduledEvent.edit(options) ⇒ <code>Promise</code>
Edits the guild's events with the given options.

**Kind**: instance method of [<code>GuildScheduledEvent</code>](#GuildScheduledEvent)  
**Returns**: <code>Promise</code> - A promise that resolves when the events have been successfully edited.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options to edit the events with. |

<a name="GuildScheduledEvent+delete"></a>

### guildScheduledEvent.delete() ⇒ <code>Promise.&lt;void&gt;</code>
Deletes the current event from the guild's events collection.

**Kind**: instance method of [<code>GuildScheduledEvent</code>](#GuildScheduledEvent)  
**Returns**: <code>Promise.&lt;void&gt;</code> - A promise that resolves once the event is deleted.  
<a name="GuildScheduledEvent+setName"></a>

### guildScheduledEvent.setName(name, reason) ⇒ <code>Promise</code>
Sets the name and reason for an object.

**Kind**: instance method of [<code>GuildScheduledEvent</code>](#GuildScheduledEvent)  
**Returns**: <code>Promise</code> - - A promise that resolves when the name and reason are successfully set.  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The new name to set. |
| reason | <code>string</code> | The reason for setting the new name. |

<a name="GuildScheduledEvent+setDescription"></a>

### guildScheduledEvent.setDescription(description, reason) ⇒ <code>Promise</code>
Sets the description of an object and updates it with the provided reason.

**Kind**: instance method of [<code>GuildScheduledEvent</code>](#GuildScheduledEvent)  
**Returns**: <code>Promise</code> - - A promise that resolves when the description is successfully updated.  

| Param | Type | Description |
| --- | --- | --- |
| description | <code>string</code> | The new description to set. |
| reason | <code>string</code> | The reason for updating the description. |

<a name="GuildScheduledEvent+setPrivacyLevel"></a>

### guildScheduledEvent.setPrivacyLevel(privacyLevel, reason) ⇒ <code>Promise</code>
Sets the privacy level for the current user.

**Kind**: instance method of [<code>GuildScheduledEvent</code>](#GuildScheduledEvent)  
**Returns**: <code>Promise</code> - - A promise that resolves when the privacy level is successfully set.  

| Param | Type | Description |
| --- | --- | --- |
| privacyLevel | <code>string</code> | The privacy level to set. |
| reason | <code>string</code> | The reason for setting the privacy level. |

<a name="GuildScheduledEvent+setEntityType"></a>

### guildScheduledEvent.setEntityType(entityType, reason) ⇒ <code>Promise</code>
Sets the entity type and reason for the current entity.

**Kind**: instance method of [<code>GuildScheduledEvent</code>](#GuildScheduledEvent)  
**Returns**: <code>Promise</code> - - A promise that resolves when the entity type is successfully set.  

| Param | Type | Description |
| --- | --- | --- |
| entityType | <code>string</code> | The new entity type to set. |
| reason | <code>string</code> | The reason for the entity type change. |

<a name="GuildScheduledEvent+setEntityMetadata"></a>

### guildScheduledEvent.setEntityMetadata(entityMetadata, reason) ⇒ <code>Promise.&lt;void&gt;</code>
Sets the metadata of an entity with the given entityMetadata and reason.

**Kind**: instance method of [<code>GuildScheduledEvent</code>](#GuildScheduledEvent)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the metadata is successfully set.  

| Param | Type | Description |
| --- | --- | --- |
| entityMetadata | <code>any</code> | The metadata to set for the entity. |
| reason | <code>string</code> | The reason for setting the metadata. |

<a name="GuildScheduledEvent+setImage"></a>

### guildScheduledEvent.setImage(image, reason) ⇒ <code>Promise.&lt;void&gt;</code>
Sets the image of an object and updates it with the given reason.

**Kind**: instance method of [<code>GuildScheduledEvent</code>](#GuildScheduledEvent)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the image is set and updated.  

| Param | Type | Description |
| --- | --- | --- |
| image | <code>any</code> | The new image to set. |
| reason | <code>string</code> | The reason for updating the image. |

<a name="GuildScheduledEvent+setScheduledStartTime"></a>

### guildScheduledEvent.setScheduledStartTime(scheduledStartTime, reason) ⇒ <code>Promise</code>
Sets the scheduled start time and reason for an event.

**Kind**: instance method of [<code>GuildScheduledEvent</code>](#GuildScheduledEvent)  
**Returns**: <code>Promise</code> - - A promise that resolves when the edit is complete.  

| Param | Type | Description |
| --- | --- | --- |
| scheduledStartTime | <code>Date</code> | The scheduled start time for the event. |
| reason | <code>string</code> | The reason for the scheduled start time. |

<a name="GuildScheduledEvent+setScheduledEndTime"></a>

### guildScheduledEvent.setScheduledEndTime(scheduledEndTime, reason) ⇒ <code>Promise</code>
Sets the scheduled end time and reason for a task.

**Kind**: instance method of [<code>GuildScheduledEvent</code>](#GuildScheduledEvent)  
**Returns**: <code>Promise</code> - - A promise that resolves when the edit is complete.  

| Param | Type | Description |
| --- | --- | --- |
| scheduledEndTime | <code>Date</code> | The new scheduled end time for the task. |
| reason | <code>string</code> | The reason for the change in scheduled end time. |

<a name="GuildScheduledEvent+setStatus"></a>

### guildScheduledEvent.setStatus(status, reason) ⇒ <code>Promise.&lt;any&gt;</code>
Sets the status and reason of an object and returns the updated object.

**Kind**: instance method of [<code>GuildScheduledEvent</code>](#GuildScheduledEvent)  
**Returns**: <code>Promise.&lt;any&gt;</code> - - A promise that resolves to the updated object.  

| Param | Type | Description |
| --- | --- | --- |
| status | <code>any</code> | The new status value. |
| reason | <code>any</code> | The new reason value. |

<a name="GuildScheduledEvent+coverImageURL"></a>

### guildScheduledEvent.coverImageURL(options) ⇒ <code>string</code> \| <code>null</code>
Returns the URL of the cover image for the guild scheduled event.

**Kind**: instance method of [<code>GuildScheduledEvent</code>](#GuildScheduledEvent)  
**Returns**: <code>string</code> \| <code>null</code> - The URL of the cover image, or null if there is no image.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Optional parameters for generating the URL. |
| [options.dynamic] | <code>boolean</code> | Whether the image should be dynamically generated. |
| [options.size] | <code>string</code> | The desired size of the image. |
| [options.format] | <code>string</code> | The desired format of the image. |

<a name="GuildScheduledEvent+inviteURL"></a>

### guildScheduledEvent.inviteURL() ⇒ <code>string</code>
Generates an invite URL for a user.

**Kind**: instance method of [<code>GuildScheduledEvent</code>](#GuildScheduledEvent)  
**Returns**: <code>string</code> - The invite URL.  
