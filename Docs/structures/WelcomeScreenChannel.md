<a name="WelcomeScreenChannel"></a>

## WelcomeScreenChannel ⇐ <code>Base</code>
Represents a welcome screen channel.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [WelcomeScreenChannel](#WelcomeScreenChannel) ⇐ <code>Base</code>
    * [new WelcomeScreenChannel([data], guildId, client)](#new_WelcomeScreenChannel_new)
    * [.channel](#WelcomeScreenChannel+channel) ⇒ <code>Channel</code> \| <code>null</code>
    * [.guild](#WelcomeScreenChannel+guild) ⇒

<a name="new_WelcomeScreenChannel_new"></a>

### new WelcomeScreenChannel([data], guildId, client)
Constructs a new instance of the class.


| Param | Type | Description |
| --- | --- | --- |
| [data] | <code>Object</code> | The data object containing the properties for the instance. |
| guildId | <code>string</code> | The ID of the guild associated with the instance. |
| client | <code>Client</code> | The client object used to interact with the Discord API. |

<a name="WelcomeScreenChannel+channel"></a>

### welcomeScreenChannel.channel ⇒ <code>Channel</code> \| <code>null</code>
Retrieves the channel object associated with this instance.

**Kind**: instance property of [<code>WelcomeScreenChannel</code>](#WelcomeScreenChannel)  
**Returns**: <code>Channel</code> \| <code>null</code> - The channel object, or null if it does not exist.  
<a name="WelcomeScreenChannel+guild"></a>

### welcomeScreenChannel.guild ⇒
Get the guild object associated with this guildId.

**Kind**: instance property of [<code>WelcomeScreenChannel</code>](#WelcomeScreenChannel)  
**Returns**: The guild object.  
