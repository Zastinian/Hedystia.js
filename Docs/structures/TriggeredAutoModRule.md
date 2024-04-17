---
title: TriggeredAutoModRule
sidebar:
  order: 67
---



## TriggeredAutoModRule ⇐ <code>Base</code>
Represents a triggered auto moderation rule.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [TriggeredAutoModRule](#TriggeredAutoModRule) ⇐ <code>Base</code>
    * [new TriggeredAutoModRule([data], guildId, client)](#new_TriggeredAutoModRule_new)
    * [.guild](#TriggeredAutoModRule+guild) ⇒
    * [.channel](#TriggeredAutoModRule+channel) ⇒
    * [.user](#TriggeredAutoModRule+user) ⇒
    * [.message](#TriggeredAutoModRule+message) ⇒
    * [.fetch(options)](#TriggeredAutoModRule+fetch) ⇒ <code>Promise</code>
    * [.edit(options)](#TriggeredAutoModRule+edit) ⇒ <code>Promise</code>
    * [.delete(reason)](#TriggeredAutoModRule+delete) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.setName(name, reason)](#TriggeredAutoModRule+setName) ⇒ <code>Promise</code>
    * [.setEventType(eventType, reason)](#TriggeredAutoModRule+setEventType) ⇒ <code>Promise</code>
    * [.setTriggerMetadata(triggerMetadata, reason)](#TriggeredAutoModRule+setTriggerMetadata) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.setActions(actions, reason)](#TriggeredAutoModRule+setActions) ⇒ <code>Promise.&lt;any&gt;</code>
    * [.setEnabled(enabled, reason)](#TriggeredAutoModRule+setEnabled) ⇒ <code>Promise</code>
    * [.setExemptRoles(exemptRoles, reason)](#TriggeredAutoModRule+setExemptRoles) ⇒ <code>Promise</code>
    * [.setExemptChannels(exemptChannels, reason)](#TriggeredAutoModRule+setExemptChannels) ⇒ <code>Promise</code>

<a name="new_TriggeredAutoModRule_new"></a>

### new TriggeredAutoModRule([data], guildId, client)
Constructs a GuildAutoModRule object.


| Param | Type | Description |
| --- | --- | --- |
| [data] | <code>Object</code> | The data for the triggered auto moderation rule. |
| guildId | <code>string</code> | The ID of the guild that the rule belongs to. |
| client | <code>Client</code> | The client instance. |

<a name="TriggeredAutoModRule+guild"></a>

### triggeredAutoModRule.guild ⇒
Get the guild object associated with this guildId.

**Kind**: instance property of [<code>TriggeredAutoModRule</code>](#TriggeredAutoModRule)  
**Returns**: The guild object.  
<a name="TriggeredAutoModRule+channel"></a>

### triggeredAutoModRule.channel ⇒
Retrieves the channel object associated with this instance.

**Kind**: instance property of [<code>TriggeredAutoModRule</code>](#TriggeredAutoModRule)  
**Returns**: The channel object.  
<a name="TriggeredAutoModRule+user"></a>

### triggeredAutoModRule.user ⇒
Get the user object associated with this instance.

**Kind**: instance property of [<code>TriggeredAutoModRule</code>](#TriggeredAutoModRule)  
**Returns**: The user object.  
<a name="TriggeredAutoModRule+message"></a>

### triggeredAutoModRule.message ⇒
Retrieves the message from the channel using the specified message ID.

**Kind**: instance property of [<code>TriggeredAutoModRule</code>](#TriggeredAutoModRule)  
**Returns**: The retrieved message object.  
<a name="TriggeredAutoModRule+fetch"></a>

### triggeredAutoModRule.fetch(options) ⇒ <code>Promise</code>
Fetches the automod rule with the specified ruleId from the guild.

**Kind**: instance method of [<code>TriggeredAutoModRule</code>](#TriggeredAutoModRule)  
**Returns**: <code>Promise</code> - A promise that resolves to the fetched automod rule.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> | Optional parameters for the fetch request. |

<a name="TriggeredAutoModRule+edit"></a>

### triggeredAutoModRule.edit(options) ⇒ <code>Promise</code>
Edits the automod rule with the specified options.

**Kind**: instance method of [<code>TriggeredAutoModRule</code>](#TriggeredAutoModRule)  
**Returns**: <code>Promise</code> - A promise that resolves when the automod rule has been successfully edited.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options to update the automod rule. |

<a name="TriggeredAutoModRule+delete"></a>

### triggeredAutoModRule.delete(reason) ⇒ <code>Promise.&lt;void&gt;</code>
Deletes the automod rule with the specified reason.

**Kind**: instance method of [<code>TriggeredAutoModRule</code>](#TriggeredAutoModRule)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the rule is successfully deleted.  

| Param | Type | Description |
| --- | --- | --- |
| reason | <code>string</code> | The reason for deleting the rule. |

<a name="TriggeredAutoModRule+setName"></a>

### triggeredAutoModRule.setName(name, reason) ⇒ <code>Promise</code>
Sets the name and reason for an object.

**Kind**: instance method of [<code>TriggeredAutoModRule</code>](#TriggeredAutoModRule)  
**Returns**: <code>Promise</code> - - A promise that resolves when the name and reason are successfully set.  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The new name to set. |
| reason | <code>string</code> | The reason for setting the new name. |

<a name="TriggeredAutoModRule+setEventType"></a>

### triggeredAutoModRule.setEventType(eventType, reason) ⇒ <code>Promise</code>
Sets the event type and reason for the current object.

**Kind**: instance method of [<code>TriggeredAutoModRule</code>](#TriggeredAutoModRule)  
**Returns**: <code>Promise</code> - - A promise that resolves when the edit is complete.  

| Param | Type | Description |
| --- | --- | --- |
| eventType | <code>string</code> | The type of event to set. |
| reason | <code>string</code> | The reason for the event. |

<a name="TriggeredAutoModRule+setTriggerMetadata"></a>

### triggeredAutoModRule.setTriggerMetadata(triggerMetadata, reason) ⇒ <code>Promise.&lt;void&gt;</code>
Sets the trigger metadata for the current object and updates it with the given reason.

**Kind**: instance method of [<code>TriggeredAutoModRule</code>](#TriggeredAutoModRule)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the trigger metadata is successfully set.  

| Param | Type | Description |
| --- | --- | --- |
| triggerMetadata | <code>any</code> | The new trigger metadata to set. |
| reason | <code>string</code> | The reason for updating the trigger metadata. |

<a name="TriggeredAutoModRule+setActions"></a>

### triggeredAutoModRule.setActions(actions, reason) ⇒ <code>Promise.&lt;any&gt;</code>
Sets the actions and reason for editing a resource.

**Kind**: instance method of [<code>TriggeredAutoModRule</code>](#TriggeredAutoModRule)  
**Returns**: <code>Promise.&lt;any&gt;</code> - - A promise that resolves to the result of the edit operation.  

| Param | Type | Description |
| --- | --- | --- |
| actions | <code>any</code> | The actions to be set. |
| reason | <code>string</code> | The reason for the edit. |

<a name="TriggeredAutoModRule+setEnabled"></a>

### triggeredAutoModRule.setEnabled(enabled, reason) ⇒ <code>Promise</code>
Sets the enabled status of an item and provides a reason for the change.

**Kind**: instance method of [<code>TriggeredAutoModRule</code>](#TriggeredAutoModRule)  
**Returns**: <code>Promise</code> - - A promise that resolves when the edit is complete.  

| Param | Type | Description |
| --- | --- | --- |
| enabled | <code>boolean</code> | The new enabled status of the item. |
| reason | <code>string</code> | The reason for the change in enabled status. |

<a name="TriggeredAutoModRule+setExemptRoles"></a>

### triggeredAutoModRule.setExemptRoles(exemptRoles, reason) ⇒ <code>Promise</code>
Sets the exempt roles for a certain action and provides a reason for the change.

**Kind**: instance method of [<code>TriggeredAutoModRule</code>](#TriggeredAutoModRule)  
**Returns**: <code>Promise</code> - - A promise that resolves when the exempt roles are successfully set.  

| Param | Type | Description |
| --- | --- | --- |
| exemptRoles | <code>Array</code> | The roles that are exempt from the action. |
| reason | <code>string</code> | The reason for setting the exempt roles. |

<a name="TriggeredAutoModRule+setExemptChannels"></a>

### triggeredAutoModRule.setExemptChannels(exemptChannels, reason) ⇒ <code>Promise</code>
Sets the exempt channels for a specific action and provides a reason.

**Kind**: instance method of [<code>TriggeredAutoModRule</code>](#TriggeredAutoModRule)  
**Returns**: <code>Promise</code> - - A promise that resolves when the exempt channels are set.  

| Param | Type | Description |
| --- | --- | --- |
| exemptChannels | <code>Array</code> | The channels to exempt from the action. |
| reason | <code>string</code> | The reason for setting the exempt channels. |

