---
title: WelcomeScreenManager
sidebar:
  order: 46
---



## WelcomeScreenManager ⇐ <code>Base</code>
Represents a manager for the welcome screen of a guild.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [WelcomeScreenManager](#WelcomeScreenManager) ⇐ <code>Base</code>
    * [new WelcomeScreenManager(guildId, client)](#new_WelcomeScreenManager_new)
    * _instance_
        * [.fetch()](#WelcomeScreenManager+fetch) ⇒ <code>Promise.&lt;WelcomeScreen&gt;</code>
        * [.edit([options])](#WelcomeScreenManager+edit) ⇒ <code>Promise.&lt;WelcomeScreen&gt;</code>
    * _static_
        * [.transformChannels(channels)](#WelcomeScreenManager.transformChannels) ⇒ <code>Object</code>
        * [.transformOptions(o)](#WelcomeScreenManager.transformOptions) ⇒ <code>Object</code>

<a name="new_WelcomeScreenManager_new"></a>

### new WelcomeScreenManager(guildId, client)
Constructs a new instance of the class.


| Param | Type | Description |
| --- | --- | --- |
| guildId | <code>string</code> | The ID of the guild. |
| client | <code>Client</code> | The client instance. |

<a name="WelcomeScreenManager+fetch"></a>

### welcomeScreenManager.fetch() ⇒ <code>Promise.&lt;WelcomeScreen&gt;</code>
Fetches the welcome screen for the guild.

**Kind**: instance method of [<code>WelcomeScreenManager</code>](#WelcomeScreenManager)  
**Returns**: <code>Promise.&lt;WelcomeScreen&gt;</code> - A promise that resolves to a WelcomeScreen object representing the fetched welcome screen.  
<a name="WelcomeScreenManager+edit"></a>

### welcomeScreenManager.edit([options]) ⇒ <code>Promise.&lt;WelcomeScreen&gt;</code>
Edits the welcome screen settings for the guild.

**Kind**: instance method of [<code>WelcomeScreenManager</code>](#WelcomeScreenManager)  
**Returns**: <code>Promise.&lt;WelcomeScreen&gt;</code> - A promise that resolves with the updated WelcomeScreen object.  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | The options for editing the welcome screen. |
| [options.reason] | <code>string</code> | The reason for the edit. |

<a name="WelcomeScreenManager.transformChannels"></a>

### WelcomeScreenManager.transformChannels(channels) ⇒ <code>Object</code>
Transforms the given channels object into a new format.

**Kind**: static method of [<code>WelcomeScreenManager</code>](#WelcomeScreenManager)  
**Returns**: <code>Object</code> - - The transformed channels object.  

| Param | Type | Description |
| --- | --- | --- |
| channels | <code>Object</code> | The channels object to transform. |

<a name="WelcomeScreenManager.transformOptions"></a>

### WelcomeScreenManager.transformOptions(o) ⇒ <code>Object</code>
Transforms the options object into a new object with specific properties.

**Kind**: static method of [<code>WelcomeScreenManager</code>](#WelcomeScreenManager)  
**Returns**: <code>Object</code> - - The transformed object with specific properties.  

| Param | Type | Description |
| --- | --- | --- |
| o | <code>Object</code> | The options object to transform. |

