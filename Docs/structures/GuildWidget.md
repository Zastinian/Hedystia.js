<a name="GuildWidget"></a>

## GuildWidget ⇐ <code>Base</code>
It's a class that represents a guild widget

**Kind**: global class  
**Extends**: <code>Base</code>  

* [GuildWidget](#GuildWidget) ⇐ <code>Base</code>
    * [new GuildWidget([data], guildId, client)](#new_GuildWidget_new)
    * [.guild](#GuildWidget+guild) ⇒
    * [.fetchSettings()](#GuildWidget+fetchSettings) ⇒

<a name="new_GuildWidget_new"></a>

### new GuildWidget([data], guildId, client)
It takes in a data object, a guild id, and a client, and then it sets the id, name, instantInvite,channels, members, and presenceCount properties of the class to the values of the data object, theguild id, and the client


| Param | Description |
| --- | --- |
| [data] | The data that is passed to the constructor. |
| guildId | The ID of the guild |
| client | The client |

<a name="GuildWidget+guild"></a>

### guildWidget.guild ⇒
It adds the guild to the cache if it's not already there, and then returns the guild

**Kind**: instance property of [<code>GuildWidget</code>](#GuildWidget)  
**Returns**: The guild object.  
<a name="GuildWidget+fetchSettings"></a>

### guildWidget.fetchSettings() ⇒
It fetches the settings of the widget

**Kind**: instance method of [<code>GuildWidget</code>](#GuildWidget)  
**Returns**: The settings of the widget.  
