<a name="BaseGuildChannel"></a>

## BaseGuildChannel
**Kind**: global class  

* [BaseGuildChannel](#BaseGuildChannel)
    * [new BaseGuildChannel(data, guildId, client)](#new_BaseGuildChannel_new)
    * [.fetchPrivateThreads([options])](#BaseGuildChannel+fetchPrivateThreads) ⇒

<a name="new_BaseGuildChannel_new"></a>

### new BaseGuildChannel(data, guildId, client)
It creates a new ThreadManager object and assigns it to the threads property


| Param | Description |
| --- | --- |
| data | The data from the database. |
| guildId | The ID of the guild the channel is in. |
| client | The client that the channel belongs to |

<a name="BaseGuildChannel+fetchPrivateThreads"></a>

### baseGuildChannel.fetchPrivateThreads([options]) ⇒
`Fetches the private threads in this channel.`

**Kind**: instance method of [<code>BaseGuildChannel</code>](#BaseGuildChannel)  
**Returns**: A new FetchedThreads object  

| Param | Description |
| --- | --- |
| [options] | An object with the following properties: |

