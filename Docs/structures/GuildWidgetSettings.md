<a name="GuildWidgetSettings"></a>

## GuildWidgetSettings ⇐ <code>Base</code>
It's a class that represents the settings of a guild's widget

**Kind**: global class  
**Extends**: <code>Base</code>  

* [GuildWidgetSettings](#GuildWidgetSettings) ⇐ <code>Base</code>
    * [new GuildWidgetSettings([data], guildId, client)](#new_GuildWidgetSettings_new)
    * [.guild](#GuildWidgetSettings+guild) ⇒
    * [.channel](#GuildWidgetSettings+channel) ⇒
    * [.edit([options])](#GuildWidgetSettings+edit) ⇒
    * [.setEnabled(enabled, reason)](#GuildWidgetSettings+setEnabled) ⇒
    * [.setChannel(channel, reason)](#GuildWidgetSettings+setChannel) ⇒

<a name="new_GuildWidgetSettings_new"></a>

### new GuildWidgetSettings([data], guildId, client)
This function is a constructor that takes in data, guildId, and client as parameters and sets thevalues of the properties of the class to the values of the parameters.


| Param | Description |
| --- | --- |
| [data] | The data that is passed to the constructor. |
| guildId | The ID of the guild the settings are for. |
| client | The client that the command is being run on. |

<a name="GuildWidgetSettings+guild"></a>

### guildWidgetSettings.guild ⇒
It returns the guild object of the guild ID that is stored in the database

**Kind**: instance property of [<code>GuildWidgetSettings</code>](#GuildWidgetSettings)  
**Returns**: The guild object.  
<a name="GuildWidgetSettings+channel"></a>

### guildWidgetSettings.channel ⇒
It returns the channel object of the message

**Kind**: instance property of [<code>GuildWidgetSettings</code>](#GuildWidgetSettings)  
**Returns**: The channel object.  
<a name="GuildWidgetSettings+edit"></a>

### guildWidgetSettings.edit([options]) ⇒
It edits the widget of the guild

**Kind**: instance method of [<code>GuildWidgetSettings</code>](#GuildWidgetSettings)  
**Returns**: The return value is a Promise that resolves to the edited widget.  

| Param | Description |
| --- | --- |
| [options] | Object |

<a name="GuildWidgetSettings+setEnabled"></a>

### guildWidgetSettings.setEnabled(enabled, reason) ⇒
`setEnabled` is an async function that takes two parameters, `enabled` and `reason`, and returns theresult of calling `edit` with an object containing the `enabled` and `reason` parameters.`CommandoCommand`.

**Kind**: instance method of [<code>GuildWidgetSettings</code>](#GuildWidgetSettings)  
**Returns**: The return value of the edit function.  

| Param | Description |
| --- | --- |
| enabled | Whether the command should be enabled or not. |
| reason | The reason for the action |

<a name="GuildWidgetSettings+setChannel"></a>

### guildWidgetSettings.setChannel(channel, reason) ⇒
It edits the channel of the voice connection

**Kind**: instance method of [<code>GuildWidgetSettings</code>](#GuildWidgetSettings)  
**Returns**: The channel that the message was sent in.  

| Param | Description |
| --- | --- |
| channel | The channel to move the member to, can be a voice channel or a category. |
| reason | The reason for the edit. |

