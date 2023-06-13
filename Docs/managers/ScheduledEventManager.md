<a name="ScheduledEventManager"></a>

## ScheduledEventManager
**Kind**: global class  

* [ScheduledEventManager](#ScheduledEventManager)
    * [new ScheduledEventManager(client)](#new_ScheduledEventManager_new)
    * _instance_
        * [.cache](#ScheduledEventManager+cache) ⇒
        * [._add(events, [guildId], [options])](#ScheduledEventManager+_add) ⇒
        * [.create([options])](#ScheduledEventManager+create) ⇒
        * [.edit(event, [options])](#ScheduledEventManager+edit) ⇒
        * [.delete(event)](#ScheduledEventManager+delete) ⇒
        * [.fetch(events, options)](#ScheduledEventManager+fetch) ⇒
        * [._fetchId(events, [cache], [force])](#ScheduledEventManager+_fetchId) ⇒
    * _static_
        * [.transformOptions([o], [create])](#ScheduledEventManager.transformOptions) ⇒

<a name="new_ScheduledEventManager_new"></a>

### new ScheduledEventManager(client)
It's a constructor function that takes a client parameter and passes it to the super function


| Param | Description |
| --- | --- |
| client | The client object. |

<a name="ScheduledEventManager+cache"></a>

### scheduledEventManager.cache ⇒
It returns the Collection object.

**Kind**: instance property of [<code>ScheduledEventManager</code>](#ScheduledEventManager)  
**Returns**: The Collection class  
<a name="ScheduledEventManager+_add"></a>

### scheduledEventManager.\_add(events, [guildId], [options]) ⇒
It adds a scheduled event to the cache.

**Kind**: instance method of [<code>ScheduledEventManager</code>](#ScheduledEventManager)  
**Returns**: A new instance of the GuildScheduledEvent class.  

| Param | Description |
| --- | --- |
| events | The event to add. Can be a string or a GuildScheduledEvent object. |
| [guildId] | The ID of the guild the event is in. |
| [options] | cache = true, force = false |

<a name="ScheduledEventManager+create"></a>

### scheduledEventManager.create([options]) ⇒
It creates a scheduled event

**Kind**: instance method of [<code>ScheduledEventManager</code>](#ScheduledEventManager)  
**Returns**: A new ScheduledEvent instance.  

| Param | Description |
| --- | --- |
| [options] | An object containing the following parameters: |

<a name="ScheduledEventManager+edit"></a>

### scheduledEventManager.edit(event, [options]) ⇒
It edits a scheduled event

**Kind**: instance method of [<code>ScheduledEventManager</code>](#ScheduledEventManager)  
**Returns**: The event object  

| Param | Description |
| --- | --- |
| event | The event to edit. This can be a ScheduledEvent object, or the ID of the event. |
| [options] | The options to pass to the event. |

<a name="ScheduledEventManager+delete"></a>

### scheduledEventManager.delete(event) ⇒
It deletes an event from the database

**Kind**: instance method of [<code>ScheduledEventManager</code>](#ScheduledEventManager)  
**Returns**: The deleted event  

| Param | Description |
| --- | --- |
| event | The event to delete. Can be an event object or an event ID. |

<a name="ScheduledEventManager+fetch"></a>

### scheduledEventManager.fetch(events, options) ⇒
It fetches scheduled events from the API and returns a collection of them

**Kind**: instance method of [<code>ScheduledEventManager</code>](#ScheduledEventManager)  
**Returns**: A new cache constructor with the events mapped to the id and the _add function.  

| Param | Description |
| --- | --- |
| events | The event ID, or an object containing the following parameters: |
| options | The options object. |

<a name="ScheduledEventManager+_fetchId"></a>

### scheduledEventManager.\_fetchId(events, [cache], [force]) ⇒
It fetches an event by ID, and returns it

**Kind**: instance method of [<code>ScheduledEventManager</code>](#ScheduledEventManager)  
**Returns**: The event object  

| Param | Default | Description |
| --- | --- | --- |
| events |  | The event to fetch. Can be an event ID or an event object. |
| [cache] | <code>true</code> | Whether or not to cache the event. |
| [force] | <code>false</code> | If true, it will force the cache to be updated. |

<a name="ScheduledEventManager.transformOptions"></a>

### ScheduledEventManager.transformOptions([o], [create]) ⇒
It takes an object with the properties of the class, and returns an object with the properties ofthe API

**Kind**: static method of [<code>ScheduledEventManager</code>](#ScheduledEventManager)  
**Returns**: The return value is a promise that resolves to a GuildScheduledEvent object.  

| Param | Default | Description |
| --- | --- | --- |
| [o] |  | The options object. |
| [create] | <code>false</code> | Whether or not this is a create request. |

