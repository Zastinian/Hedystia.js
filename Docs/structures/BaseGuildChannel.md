<a name="BaseGuildChannel"></a>

## BaseGuildChannel ⇐ <code>TextBasedChannels</code>
Represents a base guild channel that extends the TextBasedChannels class.

**Kind**: global class  
**Extends**: <code>TextBasedChannels</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| threads | <code>ThreadManager</code> | The thread manager for this channel. |


* [BaseGuildChannel](#BaseGuildChannel) ⇐ <code>TextBasedChannels</code>
    * [new BaseGuildChannel(data, guildId, client)](#new_BaseGuildChannel_new)
    * [.fetchPrivateThreads([options])](#BaseGuildChannel+fetchPrivateThreads) ⇒ <code>Promise.&lt;FetchedThreads&gt;</code>

<a name="new_BaseGuildChannel_new"></a>

### new BaseGuildChannel(data, guildId, client)
Constructs a new instance of the ThreadChannel class.


| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | The data object containing information about the channel. |
| guildId | <code>string</code> | The ID of the guild that the channel belongs to. |
| client | <code>Client</code> | The client instance. |

<a name="BaseGuildChannel+fetchPrivateThreads"></a>

### baseGuildChannel.fetchPrivateThreads([options]) ⇒ <code>Promise.&lt;FetchedThreads&gt;</code>
Fetches private threads for the current channel.

**Kind**: instance method of [<code>BaseGuildChannel</code>](#BaseGuildChannel)  
**Returns**: <code>Promise.&lt;FetchedThreads&gt;</code> - - A promise that resolves to a FetchedThreads object containing the fetched threads.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | Optional parameters for the fetch request. |
| [options.before] | <code>string</code> |  | The ID of the thread to fetch threads before. |
| [options.limit] | <code>number</code> | <code>25</code> | The maximum number of threads to fetch. |

