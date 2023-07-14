<a name="ThreadManager"></a>

## ThreadManager ⇐ <code>BaseThreadManager</code>
A class representing a thread manager for a specific channel in a guild.Extends the BaseThreadManager class.

**Kind**: global class  
**Extends**: <code>BaseThreadManager</code>  

* [ThreadManager](#ThreadManager) ⇐ <code>BaseThreadManager</code>
    * [new ThreadManager(channelId, guildId, client)](#new_ThreadManager_new)
    * [.cache](#ThreadManager+cache) ⇒ <code>Array</code>

<a name="new_ThreadManager_new"></a>

### new ThreadManager(channelId, guildId, client)
Constructs a new instance of the class.


| Param | Type | Description |
| --- | --- | --- |
| channelId | <code>string</code> | The ID of the channel. |
| guildId | <code>string</code> | The ID of the guild. |
| client | <code>Client</code> | The client object. |

<a name="ThreadManager+cache"></a>

### threadManager.cache ⇒ <code>Array</code>
Retrieves the cache items that have a parentId matching the channelId of the current instance.

**Kind**: instance property of [<code>ThreadManager</code>](#ThreadManager)  
**Returns**: <code>Array</code> - An array of cache items that have a matching parentId.  
