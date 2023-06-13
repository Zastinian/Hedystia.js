<a name="PresenceManager"></a>

## PresenceManager
**Kind**: global class  

* [PresenceManager](#PresenceManager)
    * [new PresenceManager(client)](#new_PresenceManager_new)
    * [.cache](#PresenceManager+cache) ⇒
    * [._add(presences, [options])](#PresenceManager+_add) ⇒

<a name="new_PresenceManager_new"></a>

### new PresenceManager(client)
A constructor function.


| Param | Description |
| --- | --- |
| client | The client object. |

<a name="PresenceManager+cache"></a>

### presenceManager.cache ⇒
`cache` is a getter that returns the `Collection` class

**Kind**: instance property of [<code>PresenceManager</code>](#PresenceManager)  
**Returns**: The Collection class  
<a name="PresenceManager+_add"></a>

### presenceManager.\_add(presences, [options]) ⇒
It adds a presence to the cache

**Kind**: instance method of [<code>PresenceManager</code>](#PresenceManager)  
**Returns**: A presence object  

| Param | Description |
| --- | --- |
| presences | The presence(s) to add. Can be a string, a presence object, or an array of either. |
| [options] | cache = true, force = false |

