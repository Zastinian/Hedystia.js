---
title: GuildWidgetSettings
sidebar:
  order: 41
---



## GuildWidgetSettings ⇐ <code>Base</code>
Represents the settings for a guild widget.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [GuildWidgetSettings](#GuildWidgetSettings) ⇐ <code>Base</code>
    * [new GuildWidgetSettings([data], guildId, client)](#new_GuildWidgetSettings_new)
    * [.guild](#GuildWidgetSettings+guild) ⇒
    * [.channel](#GuildWidgetSettings+channel) ⇒ <code>Channel</code> \| <code>null</code>
    * [.edit(options)](#GuildWidgetSettings+edit) ⇒ <code>Promise</code>
    * [.setEnabled(enabled, reason)](#GuildWidgetSettings+setEnabled) ⇒ <code>Promise</code>
    * [.setChannel(channel, reason)](#GuildWidgetSettings+setChannel) ⇒ <code>Promise.&lt;void&gt;</code>

<a name="new_GuildWidgetSettings_new"></a>

### new GuildWidgetSettings([data], guildId, client)
Constructs a new instance of the class.


| Param | Type | Description |
| --- | --- | --- |
| [data] | <code>Object</code> | The data for the guild widget settings. |
| guildId | <code>string</code> | The ID of the guild. |
| client | <code>Client</code> | The client instance. |

<a name="GuildWidgetSettings+guild"></a>

### guildWidgetSettings.guild ⇒
Retrieves the guild associated with this guildId.

**Kind**: instance property of [<code>GuildWidgetSettings</code>](#GuildWidgetSettings)  
**Returns**: The guild object if found, otherwise null.  
<a name="GuildWidgetSettings+channel"></a>

### guildWidgetSettings.channel ⇒ <code>Channel</code> \| <code>null</code>
Retrieves the channel object associated with this instance.

**Kind**: instance property of [<code>GuildWidgetSettings</code>](#GuildWidgetSettings)  
**Returns**: <code>Channel</code> \| <code>null</code> - The channel object, or null if it does not exist.  
<a name="GuildWidgetSettings+edit"></a>

### guildWidgetSettings.edit(options) ⇒ <code>Promise</code>
Edits the guild's widget with the given options.

**Kind**: instance method of [<code>GuildWidgetSettings</code>](#GuildWidgetSettings)  
**Returns**: <code>Promise</code> - A promise that resolves when the widget is successfully edited.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options to edit the widget with. |

<a name="GuildWidgetSettings+setEnabled"></a>

### guildWidgetSettings.setEnabled(enabled, reason) ⇒ <code>Promise</code>
Sets the enabled status of an item and provides a reason for the change.

**Kind**: instance method of [<code>GuildWidgetSettings</code>](#GuildWidgetSettings)  
**Returns**: <code>Promise</code> - - A promise that resolves when the edit is complete.  

| Param | Type | Description |
| --- | --- | --- |
| enabled | <code>boolean</code> | The new enabled status of the item. |
| reason | <code>string</code> | The reason for the change in enabled status. |

<a name="GuildWidgetSettings+setChannel"></a>

### guildWidgetSettings.setChannel(channel, reason) ⇒ <code>Promise.&lt;void&gt;</code>
Sets the channel for the current object and updates it with the given reason.

**Kind**: instance method of [<code>GuildWidgetSettings</code>](#GuildWidgetSettings)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the channel is successfully set.  

| Param | Type | Description |
| --- | --- | --- |
| channel | <code>Channel</code> | The channel to set. |
| reason | <code>string</code> | The reason for setting the channel. |

