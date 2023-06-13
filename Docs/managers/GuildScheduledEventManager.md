<a name="GuildScheduledEventManager"></a>

## GuildScheduledEventManager
**Kind**: global class  

* [GuildScheduledEventManager](#GuildScheduledEventManager)
    * [new GuildScheduledEventManager(guildId, client)](#new_GuildScheduledEventManager_new)
    * [.cache](#GuildScheduledEventManager+cache) ⇒

<a name="new_GuildScheduledEventManager_new"></a>

### new GuildScheduledEventManager(guildId, client)
It creates a new instance of the GuildScheduledEventUsersManager class.


| Param | Description |
| --- | --- |
| guildId | The ID of the guild the event is in |
| client | The client that the manager is being created for. |

<a name="GuildScheduledEventManager+cache"></a>

### guildScheduledEventManager.cache ⇒
It returns the cache, but only the cache that has the same guildId as the current guild

**Kind**: instance property of [<code>GuildScheduledEventManager</code>](#GuildScheduledEventManager)  
**Returns**: The cache is being filtered by the guildId.  
