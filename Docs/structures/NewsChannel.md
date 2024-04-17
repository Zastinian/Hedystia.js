---
title: NewsChannel
sidebar:
  order: 51
---



## NewsChannel ⇐ <code>BaseGuildChannel</code>
Represents a news channel in a guild.

**Kind**: global class  
**Extends**: <code>BaseGuildChannel</code>  

* [NewsChannel](#NewsChannel) ⇐ <code>BaseGuildChannel</code>
    * [new NewsChannel([data], guildId, client)](#new_NewsChannel_new)
    * [.follow(options)](#NewsChannel+follow) ⇒ <code>Promise</code>
    * [.crosspost(message)](#NewsChannel+crosspost) ⇒ <code>Promise.&lt;void&gt;</code>

<a name="new_NewsChannel_new"></a>

### new NewsChannel([data], guildId, client)
Constructs a new instance of the class.


| Param | Type | Description |
| --- | --- | --- |
| [data] | <code>Object</code> | The data object to initialize the instance with. |
| guildId | <code>string</code> | The ID of the guild associated with the instance. |
| client | <code>Client</code> | The client instance associated with the instance. |

<a name="NewsChannel+follow"></a>

### newsChannel.follow(options) ⇒ <code>Promise</code>
Follows the channel using the specified options.

**Kind**: instance method of [<code>NewsChannel</code>](#NewsChannel)  
**Returns**: <code>Promise</code> - A promise that resolves when the channel is successfully followed.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options for following the channel. |

<a name="NewsChannel+crosspost"></a>

### newsChannel.crosspost(message) ⇒ <code>Promise.&lt;void&gt;</code>
Crossposts a message to another channel.

**Kind**: instance method of [<code>NewsChannel</code>](#NewsChannel)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the crossposting is complete.  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>Message</code> | The message to crosspost. |

