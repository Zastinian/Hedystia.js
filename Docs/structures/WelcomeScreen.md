<a name="WelcomeScreen"></a>

## WelcomeScreen ⇐ <code>Base</code>
Represents a welcome screen for a guild.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [WelcomeScreen](#WelcomeScreen) ⇐ <code>Base</code>
    * [new WelcomeScreen([data], guildId, client)](#new_WelcomeScreen_new)
    * [.guild](#WelcomeScreen+guild) ⇒
    * [.edit(options)](#WelcomeScreen+edit) ⇒ <code>Promise</code>
    * [.setEnabled(enabled, reason)](#WelcomeScreen+setEnabled) ⇒ <code>Promise</code>
    * [.setWelcomeChannels(channels, reason)](#WelcomeScreen+setWelcomeChannels) ⇒ <code>Promise</code>
    * [.setDescription(description, reason)](#WelcomeScreen+setDescription) ⇒ <code>Promise</code>

<a name="new_WelcomeScreen_new"></a>

### new WelcomeScreen([data], guildId, client)
Constructs a new instance of the WelcomeScreen class.


| Param | Type | Description |
| --- | --- | --- |
| [data] | <code>Object</code> | The data for the welcome screen. |
| guildId | <code>string</code> | The ID of the guild. |
| client | <code>Client</code> | The client instance. |

<a name="WelcomeScreen+guild"></a>

### welcomeScreen.guild ⇒
Retrieves the guild associated with this guildId.

**Kind**: instance property of [<code>WelcomeScreen</code>](#WelcomeScreen)  
**Returns**: The guild object if found, otherwise null.  
<a name="WelcomeScreen+edit"></a>

### welcomeScreen.edit(options) ⇒ <code>Promise</code>
Edits the welcome screen of the guild with the provided options.

**Kind**: instance method of [<code>WelcomeScreen</code>](#WelcomeScreen)  
**Returns**: <code>Promise</code> - A promise that resolves when the welcome screen is successfully edited.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options to update the welcome screen with. |

<a name="WelcomeScreen+setEnabled"></a>

### welcomeScreen.setEnabled(enabled, reason) ⇒ <code>Promise</code>
Sets the enabled status of an item and provides a reason for the change.

**Kind**: instance method of [<code>WelcomeScreen</code>](#WelcomeScreen)  
**Returns**: <code>Promise</code> - - A promise that resolves when the edit is complete.  

| Param | Type | Description |
| --- | --- | --- |
| enabled | <code>boolean</code> | The new enabled status of the item. |
| reason | <code>string</code> | The reason for the change in enabled status. |

<a name="WelcomeScreen+setWelcomeChannels"></a>

### welcomeScreen.setWelcomeChannels(channels, reason) ⇒ <code>Promise</code>
Sets the welcome channels for a specific entity.

**Kind**: instance method of [<code>WelcomeScreen</code>](#WelcomeScreen)  
**Returns**: <code>Promise</code> - - A promise that resolves when the welcome channels are set.  

| Param | Type | Description |
| --- | --- | --- |
| channels | <code>Array</code> | The channels to set as welcome channels. |
| reason | <code>string</code> | The reason for setting the welcome channels. |

<a name="WelcomeScreen+setDescription"></a>

### welcomeScreen.setDescription(description, reason) ⇒ <code>Promise</code>
Sets the description of an object and updates it with the provided reason.

**Kind**: instance method of [<code>WelcomeScreen</code>](#WelcomeScreen)  
**Returns**: <code>Promise</code> - - A promise that resolves when the description is successfully updated.  

| Param | Type | Description |
| --- | --- | --- |
| description | <code>string</code> | The new description to set. |
| reason | <code>string</code> | The reason for updating the description. |

