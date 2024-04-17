---
title: GuildAutoMod
sidebar:
  order: 28
---

## Classes

<dl>
<dt><a href="#GuildAutoMod">GuildAutoMod</a> ⇐ <code>Base</code></dt>
<dd><p>Represents an auto-mod configuration for a guild.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#setEnabled">setEnabled(enabled, reason)</a> ⇒ <code>Promise</code></dt>
<dd><p>Enables or disables the feature.</p>
</dd>
<dt><a href="#setExemptRoles">setExemptRoles(exemptRoles, reason)</a> ⇒ <code>Promise</code></dt>
<dd><p>Sets the roles that are exempt from the feature.</p>
</dd>
<dt><a href="#setExemptChannels">setExemptChannels(exemptChannels, reason)</a> ⇒ <code>Promise</code></dt>
<dd><p>Sets the channels that are exempt from the feature.</p>
</dd>
</dl>

<a name="GuildAutoMod"></a>

## GuildAutoMod ⇐ <code>Base</code>
Represents an auto-mod configuration for a guild.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [GuildAutoMod](#GuildAutoMod) ⇐ <code>Base</code>
    * [new GuildAutoMod(data, guildId, client)](#new_GuildAutoMod_new)
    * [.guild](#GuildAutoMod+guild) : <code>Guild</code>
    * [.creator](#GuildAutoMod+creator) : <code>User</code>
    * [.fetch([options])](#GuildAutoMod+fetch) ⇒ [<code>Promise.&lt;GuildAutoMod&gt;</code>](#GuildAutoMod)
    * [.edit([options])](#GuildAutoMod+edit) ⇒ [<code>Promise.&lt;GuildAutoMod&gt;</code>](#GuildAutoMod)
    * [.delete([reason])](#GuildAutoMod+delete) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.setName(name, [reason])](#GuildAutoMod+setName) ⇒ [<code>Promise.&lt;GuildAutoMod&gt;</code>](#GuildAutoMod)
    * [.setEventType(eventType, [reason])](#GuildAutoMod+setEventType) ⇒ [<code>Promise.&lt;GuildAutoMod&gt;</code>](#GuildAutoMod)
    * [.setTriggerMetadata(triggerMetadata, [reason])](#GuildAutoMod+setTriggerMetadata) ⇒ [<code>Promise.&lt;GuildAutoMod&gt;</code>](#GuildAutoMod)
    * [.setActions(actions, [reason])](#GuildAutoMod+setActions) ⇒ [<code>Promise.&lt;GuildAutoMod&gt;</code>](#GuildAutoMod)

<a name="new_GuildAutoMod_new"></a>

### new GuildAutoMod(data, guildId, client)

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | The data for the auto-mod configuration |
| guildId | <code>Snowflake</code> | The ID of the guild the auto-mod is for |
| client | <code>Client</code> | The client instance |

<a name="GuildAutoMod+guild"></a>

### guildAutoMod.guild : <code>Guild</code>
The guild associated with this GuildAutoMod.

**Kind**: instance property of [<code>GuildAutoMod</code>](#GuildAutoMod)  
**Read only**: true  
<a name="GuildAutoMod+creator"></a>

### guildAutoMod.creator : <code>User</code>
The user who created this GuildAutoMod.

**Kind**: instance property of [<code>GuildAutoMod</code>](#GuildAutoMod)  
**Read only**: true  
<a name="GuildAutoMod+fetch"></a>

### guildAutoMod.fetch([options]) ⇒ [<code>Promise.&lt;GuildAutoMod&gt;</code>](#GuildAutoMod)
Fetches the GuildAutoMod's data from Discord.

**Kind**: instance method of [<code>GuildAutoMod</code>](#GuildAutoMod)  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | Additional options for the API request. |

<a name="GuildAutoMod+edit"></a>

### guildAutoMod.edit([options]) ⇒ [<code>Promise.&lt;GuildAutoMod&gt;</code>](#GuildAutoMod)
Edits the GuildAutoMod.

**Kind**: instance method of [<code>GuildAutoMod</code>](#GuildAutoMod)  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | The options to edit the GuildAutoMod with. |

<a name="GuildAutoMod+delete"></a>

### guildAutoMod.delete([reason]) ⇒ <code>Promise.&lt;void&gt;</code>
Deletes the GuildAutoMod.

**Kind**: instance method of [<code>GuildAutoMod</code>](#GuildAutoMod)  

| Param | Type | Description |
| --- | --- | --- |
| [reason] | <code>string</code> | Reason for deleting the GuildAutoMod. |

<a name="GuildAutoMod+setName"></a>

### guildAutoMod.setName(name, [reason]) ⇒ [<code>Promise.&lt;GuildAutoMod&gt;</code>](#GuildAutoMod)
Sets the name of the GuildAutoMod.

**Kind**: instance method of [<code>GuildAutoMod</code>](#GuildAutoMod)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The new name for the GuildAutoMod. |
| [reason] | <code>string</code> | Reason for changing the name. |

<a name="GuildAutoMod+setEventType"></a>

### guildAutoMod.setEventType(eventType, [reason]) ⇒ [<code>Promise.&lt;GuildAutoMod&gt;</code>](#GuildAutoMod)
Sets the event type of the GuildAutoMod.

**Kind**: instance method of [<code>GuildAutoMod</code>](#GuildAutoMod)  

| Param | Type | Description |
| --- | --- | --- |
| eventType | <code>string</code> \| <code>number</code> | The new event type for the GuildAutoMod. |
| [reason] | <code>string</code> | Reason for changing the event type. |

<a name="GuildAutoMod+setTriggerMetadata"></a>

### guildAutoMod.setTriggerMetadata(triggerMetadata, [reason]) ⇒ [<code>Promise.&lt;GuildAutoMod&gt;</code>](#GuildAutoMod)
Sets the trigger metadata of the GuildAutoMod.

**Kind**: instance method of [<code>GuildAutoMod</code>](#GuildAutoMod)  

| Param | Type | Description |
| --- | --- | --- |
| triggerMetadata | <code>Object</code> | The new trigger metadata for the GuildAutoMod. |
| triggerMetadata.keywordFilter | <code>Array.&lt;string&gt;</code> | The keyword filter to apply. |
| triggerMetadata.presets | <code>Array.&lt;string&gt;</code> \| <code>Array.&lt;number&gt;</code> | The presets to apply. |
| triggerMetadata.allowList | <code>Array.&lt;string&gt;</code> | The allow list to apply. |
| [reason] | <code>string</code> | Reason for changing the trigger metadata. |

<a name="GuildAutoMod+setActions"></a>

### guildAutoMod.setActions(actions, [reason]) ⇒ [<code>Promise.&lt;GuildAutoMod&gt;</code>](#GuildAutoMod)
Sets the actions of the GuildAutoMod.

**Kind**: instance method of [<code>GuildAutoMod</code>](#GuildAutoMod)  

| Param | Type | Description |
| --- | --- | --- |
| actions | <code>Array.&lt;Object&gt;</code> | The new actions for the GuildAutoMod. |
| [reason] | <code>string</code> | Reason for changing the actions. |

<a name="setEnabled"></a>

## setEnabled(enabled, reason) ⇒ <code>Promise</code>
Enables or disables the feature.

**Kind**: global function  
**Returns**: <code>Promise</code> - A promise that resolves with the result of the edit operation.  

| Param | Type | Description |
| --- | --- | --- |
| enabled | <code>boolean</code> | Indicates whether the feature should be enabled or disabled. |
| reason | <code>string</code> | The reason for enabling or disabling the feature. |

<a name="setExemptRoles"></a>

## setExemptRoles(exemptRoles, reason) ⇒ <code>Promise</code>
Sets the roles that are exempt from the feature.

**Kind**: global function  
**Returns**: <code>Promise</code> - A promise that resolves with the result of the edit operation.  

| Param | Type | Description |
| --- | --- | --- |
| exemptRoles | <code>Array.&lt;string&gt;</code> | An array of role IDs that should be exempt from the feature. |
| reason | <code>string</code> | The reason for setting the exempt roles. |

<a name="setExemptChannels"></a>

## setExemptChannels(exemptChannels, reason) ⇒ <code>Promise</code>
Sets the channels that are exempt from the feature.

**Kind**: global function  
**Returns**: <code>Promise</code> - A promise that resolves with the result of the edit operation.  

| Param | Type | Description |
| --- | --- | --- |
| exemptChannels | <code>Array.&lt;string&gt;</code> | An array of channel IDs that should be exempt from the feature. |
| reason | <code>string</code> | The reason for setting the exempt channels. |

