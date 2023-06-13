<a name="CategoryChannel"></a>

## CategoryChannel
**Kind**: global class  

* [CategoryChannel](#CategoryChannel)
    * [new CategoryChannel([data], guildId, client)](#new_CategoryChannel_new)
    * [.childrens](#CategoryChannel+childrens) ⇒
    * [.highest](#CategoryChannel+highest) ⇒

<a name="new_CategoryChannel_new"></a>

### new CategoryChannel([data], guildId, client)
It's a constructor for the class.


| Param | Description |
| --- | --- |
| [data] | The data that is passed to the constructor. |
| guildId | The ID of the guild the role is in. |
| client | The client that instantiated the object. |

<a name="CategoryChannel+childrens"></a>

### categoryChannel.childrens ⇒
It returns a collection of channels that are children of the current channel

**Kind**: instance property of [<code>CategoryChannel</code>](#CategoryChannel)  
**Returns**: A collection of channels that are children of this channel.  
<a name="CategoryChannel+highest"></a>

### categoryChannel.highest ⇒
It sorts the childrens array by position, and then returns the first element of the sorted array

**Kind**: instance property of [<code>CategoryChannel</code>](#CategoryChannel)  
**Returns**: The first channel in the array.  
