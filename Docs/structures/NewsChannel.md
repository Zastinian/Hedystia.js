<a name="NewsChannel"></a>

## NewsChannel ⇐ <code>BaseGuildChannel</code>
It's a class that extends BaseGuildChannel, and it has two methods: follow and crosspost

**Kind**: global class  
**Extends**: <code>BaseGuildChannel</code>  

* [NewsChannel](#NewsChannel) ⇐ <code>BaseGuildChannel</code>
    * [new NewsChannel([data], guildId, client)](#new_NewsChannel_new)
    * [.follow([options])](#NewsChannel+follow) ⇒
    * [.crosspost(message)](#NewsChannel+crosspost) ⇒

<a name="new_NewsChannel_new"></a>

### new NewsChannel([data], guildId, client)
It's a constructor function that takes in three parameters, data, guildId, and client.


| Param | Description |
| --- | --- |
| [data] | The data that the role is being created with. |
| guildId | The ID of the guild the role is in. |
| client | The client that instantiated the object. |

<a name="NewsChannel+follow"></a>

### newsChannel.follow([options]) ⇒
This function is used to follow a channel

**Kind**: instance method of [<code>NewsChannel</code>](#NewsChannel)  
**Returns**: The channel object.  

| Param | Description |
| --- | --- |
| [options] | Object |

<a name="NewsChannel+crosspost"></a>

### newsChannel.crosspost(message) ⇒
It takes a message object and returns a promise that resolves to the message object

**Kind**: instance method of [<code>NewsChannel</code>](#NewsChannel)  
**Returns**: The return value of the function is the return value of the function that is beingcalled.  

| Param | Description |
| --- | --- |
| message | The message to crosspost. |

