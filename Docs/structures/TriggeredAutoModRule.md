<a name="TriggeredAutoModRule"></a>

## TriggeredAutoModRule ⇐ <code>Base</code>
It's a class that represents a triggered automod rule.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [TriggeredAutoModRule](#TriggeredAutoModRule) ⇐ <code>Base</code>
    * [new TriggeredAutoModRule([data], guildId, client)](#new_TriggeredAutoModRule_new)
    * [.guild](#TriggeredAutoModRule+guild) ⇒
    * [.channel](#TriggeredAutoModRule+channel) ⇒
    * [.user](#TriggeredAutoModRule+user) ⇒
    * [.message](#TriggeredAutoModRule+message) ⇒
    * [.fetch([options])](#TriggeredAutoModRule+fetch) ⇒
    * [.edit([options])](#TriggeredAutoModRule+edit) ⇒
    * [.delete(reason)](#TriggeredAutoModRule+delete) ⇒
    * [.setName(name, reason)](#TriggeredAutoModRule+setName) ⇒
    * [.setEventType(eventType, reason)](#TriggeredAutoModRule+setEventType) ⇒
    * [.setTriggerMetadata(triggerMetadata, reason)](#TriggeredAutoModRule+setTriggerMetadata) ⇒
    * [.setActions(actions, reason)](#TriggeredAutoModRule+setActions) ⇒
    * [.setEnabled(enabled, reason)](#TriggeredAutoModRule+setEnabled) ⇒
    * [.setExemptRoles(exemptRoles, reason)](#TriggeredAutoModRule+setExemptRoles) ⇒
    * [.setExemptChannels(exemptChannels, reason)](#TriggeredAutoModRule+setExemptChannels) ⇒

<a name="new_TriggeredAutoModRule_new"></a>

### new TriggeredAutoModRule([data], guildId, client)
"This function is used to create a new instance of the GuildAutoModRule class, which is used torepresent a rule that is used to automatically moderate a guild."


| Param | Description |
| --- | --- |
| [data] | The data that is passed in from the API. |
| guildId | The ID of the guild the alert is for. |
| client | Discord.Client |

<a name="TriggeredAutoModRule+guild"></a>

### triggeredAutoModRule.guild ⇒
It returns the guild object of the guild ID that is stored in the database

**Kind**: instance property of [<code>TriggeredAutoModRule</code>](#TriggeredAutoModRule)  
**Returns**: The guild object.  
<a name="TriggeredAutoModRule+channel"></a>

### triggeredAutoModRule.channel ⇒
It returns the channel object of the channel ID that is stored in the message object

**Kind**: instance property of [<code>TriggeredAutoModRule</code>](#TriggeredAutoModRule)  
**Returns**: The channel object.  
<a name="TriggeredAutoModRule+user"></a>

### triggeredAutoModRule.user ⇒
It returns the user object of the user who sent the message

**Kind**: instance property of [<code>TriggeredAutoModRule</code>](#TriggeredAutoModRule)  
**Returns**: The user object.  
<a name="TriggeredAutoModRule+message"></a>

### triggeredAutoModRule.message ⇒
It returns a message object from the messageId

**Kind**: instance property of [<code>TriggeredAutoModRule</code>](#TriggeredAutoModRule)  
**Returns**: The message object.  
<a name="TriggeredAutoModRule+fetch"></a>

### triggeredAutoModRule.fetch([options]) ⇒
It fetches the rule from the database

**Kind**: instance method of [<code>TriggeredAutoModRule</code>](#TriggeredAutoModRule)  
**Returns**: The rule object.  

| Param | Description |
| --- | --- |
| [options] | Object |

<a name="TriggeredAutoModRule+edit"></a>

### triggeredAutoModRule.edit([options]) ⇒
It edits a rule in the guild's automod

**Kind**: instance method of [<code>TriggeredAutoModRule</code>](#TriggeredAutoModRule)  
**Returns**: The return value is the edited rule.  

| Param | Description |
| --- | --- |
| [options] | Object |

<a name="TriggeredAutoModRule+delete"></a>

### triggeredAutoModRule.delete(reason) ⇒
It deletes a rule from the database

**Kind**: instance method of [<code>TriggeredAutoModRule</code>](#TriggeredAutoModRule)  
**Returns**: The return value of the delete method.  

| Param | Description |
| --- | --- |
| reason | The reason for the deletion. |

<a name="TriggeredAutoModRule+setName"></a>

### triggeredAutoModRule.setName(name, reason) ⇒
It edits the name of the channel

**Kind**: instance method of [<code>TriggeredAutoModRule</code>](#TriggeredAutoModRule)  
**Returns**: The name of the channel.  

| Param | Description |
| --- | --- |
| name | The new name of the channel. |
| reason | The reason for the edit. |

<a name="TriggeredAutoModRule+setEventType"></a>

### triggeredAutoModRule.setEventType(eventType, reason) ⇒
It returns a promise that resolves to the result of calling the edit function with the eventTypeand reason parameters.

**Kind**: instance method of [<code>TriggeredAutoModRule</code>](#TriggeredAutoModRule)  
**Returns**: The return value of the edit function.  

| Param | Description |
| --- | --- |
| eventType | The event type to set. |
| reason | The reason for the event. |

<a name="TriggeredAutoModRule+setTriggerMetadata"></a>

### triggeredAutoModRule.setTriggerMetadata(triggerMetadata, reason) ⇒
It sets the triggerMetadata property of the current object to the value of the triggerMetadataparameter

**Kind**: instance method of [<code>TriggeredAutoModRule</code>](#TriggeredAutoModRule)  
**Returns**: The return value of the edit function.  

| Param | Description |
| --- | --- |
| triggerMetadata | The metadata of the trigger. |
| reason | The reason for the edit. |

<a name="TriggeredAutoModRule+setActions"></a>

### triggeredAutoModRule.setActions(actions, reason) ⇒
It edits the message with the given actions and reason

**Kind**: instance method of [<code>TriggeredAutoModRule</code>](#TriggeredAutoModRule)  
**Returns**: The return value of the edit method.  

| Param | Description |
| --- | --- |
| actions | An array of actions to set. |
| reason | The reason for the edit. |

<a name="TriggeredAutoModRule+setEnabled"></a>

### triggeredAutoModRule.setEnabled(enabled, reason) ⇒
This function sets the enabled property of the command to the value of the enabled parameter, andthe reason property of the command to the value of the reason parameter.

**Kind**: instance method of [<code>TriggeredAutoModRule</code>](#TriggeredAutoModRule)  
**Returns**: The return value of the edit function.  

| Param | Description |
| --- | --- |
| enabled | Boolean - Whether the command should be enabled or disabled. |
| reason | The reason for the change (0-1024 characters). |

<a name="TriggeredAutoModRule+setExemptRoles"></a>

### triggeredAutoModRule.setExemptRoles(exemptRoles, reason) ⇒
It sets the exempt roles of a role

**Kind**: instance method of [<code>TriggeredAutoModRule</code>](#TriggeredAutoModRule)  
**Returns**: The return value of the edit function.  

| Param | Description |
| --- | --- |
| exemptRoles | An array of role IDs that are exempt from the filter. |
| reason | The reason for the edit. |

<a name="TriggeredAutoModRule+setExemptChannels"></a>

### triggeredAutoModRule.setExemptChannels(exemptChannels, reason) ⇒
It edits the channel overwrites for a role

**Kind**: instance method of [<code>TriggeredAutoModRule</code>](#TriggeredAutoModRule)  
**Returns**: The return value of the edit function.  

| Param | Description |
| --- | --- |
| exemptChannels | An array of channel IDs that are exempt from the filter. |
| reason | The reason for the edit. |

