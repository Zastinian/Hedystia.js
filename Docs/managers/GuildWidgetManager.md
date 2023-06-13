<a name="GuildWidgetManager"></a>

## GuildWidgetManager
**Kind**: global class  

* [GuildWidgetManager](#GuildWidgetManager)
    * [new GuildWidgetManager(guildId, client)](#new_GuildWidgetManager_new)
    * _instance_
        * [.fetchSettings()](#GuildWidgetManager+fetchSettings) ⇒
        * [.fetch()](#GuildWidgetManager+fetch) ⇒
        * [.edit([options])](#GuildWidgetManager+edit) ⇒
    * _static_
        * [.transformOptions([o])](#GuildWidgetManager.transformOptions) ⇒

<a name="new_GuildWidgetManager_new"></a>

### new GuildWidgetManager(guildId, client)
`constructor` is a function that runs when a new instance of the class is created


| Param | Description |
| --- | --- |
| guildId | The ID of the guild you want to get the settings for. |
| client | The client that the command is being run on. |

<a name="GuildWidgetManager+fetchSettings"></a>

### guildWidgetManager.fetchSettings() ⇒
It fetches the guild widget settings and returns a new GuildWidgetSettings object.

**Kind**: instance method of [<code>GuildWidgetManager</code>](#GuildWidgetManager)  
**Returns**: A new instance of GuildWidgetSettings  
<a name="GuildWidgetManager+fetch"></a>

### guildWidgetManager.fetch() ⇒
It fetches the guild widget from the API and returns a new GuildWidget object.

**Kind**: instance method of [<code>GuildWidgetManager</code>](#GuildWidgetManager)  
**Returns**: A new instance of the GuildWidget class.  
<a name="GuildWidgetManager+edit"></a>

### guildWidgetManager.edit([options]) ⇒
It edits the widget settings of a guild

**Kind**: instance method of [<code>GuildWidgetManager</code>](#GuildWidgetManager)  
**Returns**: A new GuildWidgetSettings object.  

| Param | Description |
| --- | --- |
| [options] | The options to pass to the API. |

<a name="GuildWidgetManager.transformOptions"></a>

### GuildWidgetManager.transformOptions([o]) ⇒
It takes an object with the keys `enabled` and `channel` and returns an object with the keys`enabled` and `channel_id`

**Kind**: static method of [<code>GuildWidgetManager</code>](#GuildWidgetManager)  
**Returns**: The transformed options object.  

| Param | Description |
| --- | --- |
| [o] | The options object. |

