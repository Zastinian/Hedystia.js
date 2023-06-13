<a name="ThreadManager"></a>

## ThreadManager
**Kind**: global class  

* [ThreadManager](#ThreadManager)
    * [new ThreadManager(channelId, guildId, client)](#new_ThreadManager_new)
    * [.cache](#ThreadManager+cache) ⇒

<a name="new_ThreadManager_new"></a>

### new ThreadManager(channelId, guildId, client)
`This function is a constructor for the class.`


| Param | Description |
| --- | --- |
| channelId | The channel ID of the channel you want to send the message to. |
| guildId | The ID of the guild the channel is in. |
| client | The client that the command is being run on. |

<a name="ThreadManager+cache"></a>

### threadManager.cache ⇒
It returns the cache, but only the cache items that have a parentId that matches the channelId

**Kind**: instance property of [<code>ThreadManager</code>](#ThreadManager)  
**Returns**: The cache property is being returned.  
