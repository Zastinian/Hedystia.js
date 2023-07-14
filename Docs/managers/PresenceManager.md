<a name="PresenceManager"></a>

## PresenceManager ⇐ <code>Base</code>
Represents a presence manager that handles the caching and retrieval of presence data.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [PresenceManager](#PresenceManager) ⇐ <code>Base</code>
    * [new PresenceManager(client)](#new_PresenceManager_new)
    * [.cache](#PresenceManager+cache) ⇒
    * [._add(presences, [options])](#PresenceManager+_add) ⇒ <code>Presence</code> \| <code>null</code>

<a name="new_PresenceManager_new"></a>

### new PresenceManager(client)
Constructs a new instance of the class.


| Param | Type | Description |
| --- | --- | --- |
| client | <code>Client</code> | The client instance. |

<a name="PresenceManager+cache"></a>

### presenceManager.cache ⇒
Getter method for the cache property.

**Kind**: instance property of [<code>PresenceManager</code>](#PresenceManager)  
**Returns**: The Collection object representing the cache.  
<a name="PresenceManager+_add"></a>

### presenceManager.\_add(presences, [options]) ⇒ <code>Presence</code> \| <code>null</code>
Adds a presence to the cache and returns the presence object.

**Kind**: instance method of [<code>PresenceManager</code>](#PresenceManager)  
**Returns**: <code>Presence</code> \| <code>null</code> - The presence object that was added to the cache, or null if presences is falsy.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| presences | <code>string</code> \| <code>Presence</code> |  | The presence object or the ID of the presence. |
| [options] | <code>object</code> |  | Additional options for adding the presence. |
| [options.cache] | <code>boolean</code> | <code>true</code> | Whether to cache the presence object. |
| [options.force] | <code>boolean</code> | <code>false</code> | Whether to force the retrieval of the presence from the cache. |

