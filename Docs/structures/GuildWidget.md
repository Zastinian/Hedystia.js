---
title: GuildWidget
sidebar:
  order: 40
---



## GuildWidget ⇐ <code>Base</code>
Represents a guild widget.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [GuildWidget](#GuildWidget) ⇐ <code>Base</code>
    * [new GuildWidget([data], guildId, client)](#new_GuildWidget_new)
    * [.guild](#GuildWidget+guild) ⇒ <code>Guild</code> \| <code>null</code>
    * [.fetchSettings()](#GuildWidget+fetchSettings) ⇒ <code>Promise</code>

<a name="new_GuildWidget_new"></a>

### new GuildWidget([data], guildId, client)
Constructs a new instance of the Guild class.


| Param | Type | Description |
| --- | --- | --- |
| [data] | <code>Object</code> | The data object containing guild widget information. |
| guildId | <code>string</code> | The ID of the guild. |
| client | <code>Client</code> | The client instance. |

<a name="GuildWidget+guild"></a>

### guildWidget.guild ⇒ <code>Guild</code> \| <code>null</code>
Retrieves the guild associated with this object.

**Kind**: instance property of [<code>GuildWidget</code>](#GuildWidget)  
**Returns**: <code>Guild</code> \| <code>null</code> - The guild object if found, otherwise null.  
<a name="GuildWidget+fetchSettings"></a>

### guildWidget.fetchSettings() ⇒ <code>Promise</code>
Fetches the settings for the guild's widgets.

**Kind**: instance method of [<code>GuildWidget</code>](#GuildWidget)  
**Returns**: <code>Promise</code> - A promise that resolves to the fetched settings.  
