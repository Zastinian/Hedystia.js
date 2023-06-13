<a name="WelcomeScreenManager"></a>

## WelcomeScreenManager
**Kind**: global class  

* [WelcomeScreenManager](#WelcomeScreenManager)
    * [new WelcomeScreenManager(guildId, client)](#new_WelcomeScreenManager_new)
    * _instance_
        * [.fetch()](#WelcomeScreenManager+fetch) ⇒
        * [.edit([options])](#WelcomeScreenManager+edit) ⇒
    * _static_
        * [.transformChannels([channels])](#WelcomeScreenManager.transformChannels) ⇒
        * [.transformOptions([o])](#WelcomeScreenManager.transformOptions) ⇒

<a name="new_WelcomeScreenManager_new"></a>

### new WelcomeScreenManager(guildId, client)
This function is a constructor for the class Guild. It takes in a guildId and a client, and setsthe guildId to the guildId passed in, and sets the client to the client passed in.


| Param | Description |
| --- | --- |
| guildId | The ID of the guild you want to get the member count of. |
| client | The client that the command is being run from. |

<a name="WelcomeScreenManager+fetch"></a>

### welcomeScreenManager.fetch() ⇒
It fetches the welcome screen of a guild

**Kind**: instance method of [<code>WelcomeScreenManager</code>](#WelcomeScreenManager)  
**Returns**: A new instance of the WelcomeScreen class.  
<a name="WelcomeScreenManager+edit"></a>

### welcomeScreenManager.edit([options]) ⇒
It edits the welcome screen of a guild.

**Kind**: instance method of [<code>WelcomeScreenManager</code>](#WelcomeScreenManager)  
**Returns**: A new WelcomeScreen object.  

| Param | Description |
| --- | --- |
| [options] | Object |

<a name="WelcomeScreenManager.transformChannels"></a>

### WelcomeScreenManager.transformChannels([channels]) ⇒
It takes an object with a property called `id` that can be either a string or an object with aproperty called `id` that is a string

**Kind**: static method of [<code>WelcomeScreenManager</code>](#WelcomeScreenManager)  
**Returns**: An object with the following properties:- channel_id- description- emoji_id- emoji_name  

| Param | Description |
| --- | --- |
| [channels] | The channel object that you want to transform. |

<a name="WelcomeScreenManager.transformOptions"></a>

### WelcomeScreenManager.transformOptions([o]) ⇒
It takes an object with a property called "channels" which is an array of objects, and returns anobject with a property called "welcome_channels" which is an array of objects.

**Kind**: static method of [<code>WelcomeScreenManager</code>](#WelcomeScreenManager)  
**Returns**: an object with the properties enabled, welcome_channels, and description.  

| Param | Description |
| --- | --- |
| [o] | The object that is passed in. |

