<a name="GuildWidgetManager"></a>

## GuildWidgetManager ⇐ <code>Base</code>
Represents a manager for guild widget settings.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [GuildWidgetManager](#GuildWidgetManager) ⇐ <code>Base</code>
    * [new GuildWidgetManager(guildId, client)](#new_GuildWidgetManager_new)
    * _instance_
        * [.fetchSettings()](#GuildWidgetManager+fetchSettings) ⇒ <code>Promise.&lt;GuildWidgetSettings&gt;</code>
        * [.fetch()](#GuildWidgetManager+fetch) ⇒ <code>Promise.&lt;GuildWidget&gt;</code>
        * [.edit([options])](#GuildWidgetManager+edit) ⇒ <code>Promise.&lt;GuildWidgetSettings&gt;</code>
    * _static_
        * [.transformOptions(o)](#GuildWidgetManager.transformOptions) ⇒ <code>Object</code>

<a name="new_GuildWidgetManager_new"></a>

### new GuildWidgetManager(guildId, client)
Constructs a new instance of the class.


| Param | Type | Description |
| --- | --- | --- |
| guildId | <code>string</code> | The ID of the guild. |
| client | <code>Client</code> | The client object. |

<a name="GuildWidgetManager+fetchSettings"></a>

### guildWidgetManager.fetchSettings() ⇒ <code>Promise.&lt;GuildWidgetSettings&gt;</code>
Fetches the widget settings for the guild.

**Kind**: instance method of [<code>GuildWidgetManager</code>](#GuildWidgetManager)  
**Returns**: <code>Promise.&lt;GuildWidgetSettings&gt;</code> - - A promise that resolves to an instance of GuildWidgetSettings.  
<a name="GuildWidgetManager+fetch"></a>

### guildWidgetManager.fetch() ⇒ <code>Promise.&lt;GuildWidget&gt;</code>
Fetches the guild widget data for the current guild.

**Kind**: instance method of [<code>GuildWidgetManager</code>](#GuildWidgetManager)  
**Returns**: <code>Promise.&lt;GuildWidget&gt;</code> - A promise that resolves to a GuildWidget object representing the guild widget data.  
<a name="GuildWidgetManager+edit"></a>

### guildWidgetManager.edit([options]) ⇒ <code>Promise.&lt;GuildWidgetSettings&gt;</code>
Edits the guild widget settings with the provided options.

**Kind**: instance method of [<code>GuildWidgetManager</code>](#GuildWidgetManager)  
**Returns**: <code>Promise.&lt;GuildWidgetSettings&gt;</code> - A promise that resolves with the updated guild widget settings.  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | The options for editing the guild widget settings. |
| [options.reason] | <code>string</code> | The reason for the edit. |

<a name="GuildWidgetManager.transformOptions"></a>

### GuildWidgetManager.transformOptions(o) ⇒ <code>Object</code>
Transforms the given options object into a new object with specific properties.

**Kind**: static method of [<code>GuildWidgetManager</code>](#GuildWidgetManager)  
**Returns**: <code>Object</code> - - The transformed object with the following properties:  - enabled: A boolean indicating whether the option is enabled.  - channel_id: A string representing the channel ID, or null if not provided.  

| Param | Type | Description |
| --- | --- | --- |
| o | <code>Object</code> | The options object to transform. |

