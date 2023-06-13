<a name="WelcomeScreen"></a>

## WelcomeScreen ⇐ <code>Base</code>
It's a class that represents a welcome screen for a guild

**Kind**: global class  
**Extends**: <code>Base</code>  

* [WelcomeScreen](#WelcomeScreen) ⇐ <code>Base</code>
    * [new WelcomeScreen([data], guildId, client)](#new_WelcomeScreen_new)
    * [.guild](#WelcomeScreen+guild) ⇒
    * [.edit([options])](#WelcomeScreen+edit) ⇒
    * [.setEnabled(enabled, reason)](#WelcomeScreen+setEnabled) ⇒
    * [.setWelcomeChannels(channels, reason)](#WelcomeScreen+setWelcomeChannels) ⇒
    * [.setDescription(description, reason)](#WelcomeScreen+setDescription) ⇒

<a name="new_WelcomeScreen_new"></a>

### new WelcomeScreen([data], guildId, client)
It's a constructor for a class that takes in a data object, a guildId, and a client


| Param | Description |
| --- | --- |
| [data] | The data that is passed to the constructor. |
| guildId | The ID of the guild |
| client | The client |

<a name="WelcomeScreen+guild"></a>

### welcomeScreen.guild ⇒
It returns the guild object of the guild ID that is stored in the database

**Kind**: instance property of [<code>WelcomeScreen</code>](#WelcomeScreen)  
**Returns**: The guild object.  
<a name="WelcomeScreen+edit"></a>

### welcomeScreen.edit([options]) ⇒
It edits the welcome screen

**Kind**: instance method of [<code>WelcomeScreen</code>](#WelcomeScreen)  
**Returns**: The return value is the result of the edit function.  

| Param | Description |
| --- | --- |
| [options] | Object |

<a name="WelcomeScreen+setEnabled"></a>

### welcomeScreen.setEnabled(enabled, reason) ⇒
This function sets the enabled property of the command to the value of the enabled parameter, andthe reason property of the command to the value of the reason parameter.

**Kind**: instance method of [<code>WelcomeScreen</code>](#WelcomeScreen)  
**Returns**: The return value of the edit function.  

| Param | Description |
| --- | --- |
| enabled | Boolean - Whether the command should be enabled or disabled. |
| reason | The reason for the change (0-1024 characters). |

<a name="WelcomeScreen+setWelcomeChannels"></a>

### welcomeScreen.setWelcomeChannels(channels, reason) ⇒
It sets the welcome channels of the guild

**Kind**: instance method of [<code>WelcomeScreen</code>](#WelcomeScreen)  
**Returns**: The return value is the updated guild.  

| Param | Description |
| --- | --- |
| channels | The channels to set the welcome channels to. |
| reason | The reason for the edit. |

<a name="WelcomeScreen+setDescription"></a>

### welcomeScreen.setDescription(description, reason) ⇒
It edits the description of the channel

**Kind**: instance method of [<code>WelcomeScreen</code>](#WelcomeScreen)  
**Returns**: The description of the channel.  

| Param | Description |
| --- | --- |
| description | The new description of the channel. |
| reason | The reason for the edit. |

