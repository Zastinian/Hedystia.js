<a name="StageInstanceManager"></a>

## StageInstanceManager
**Kind**: global class  

* [StageInstanceManager](#StageInstanceManager)
    * [new StageInstanceManager(client)](#new_StageInstanceManager_new)
    * _instance_
        * [.cache](#StageInstanceManager+cache) ⇒
        * [._add(stageInstances, [guildId], [options])](#StageInstanceManager+_add) ⇒
        * [.fetch(channel, [options])](#StageInstanceManager+fetch) ⇒
        * [.create([options])](#StageInstanceManager+create) ⇒
        * [.edit(channel, [options])](#StageInstanceManager+edit) ⇒
        * [.delete(channel, reason)](#StageInstanceManager+delete) ⇒
    * _static_
        * [.transformPayload([payload])](#StageInstanceManager.transformPayload) ⇒

<a name="new_StageInstanceManager_new"></a>

### new StageInstanceManager(client)
A constructor function.


| Param | Description |
| --- | --- |
| client | The client object. |

<a name="StageInstanceManager+cache"></a>

### stageInstanceManager.cache ⇒
It returns the Collection object.

**Kind**: instance property of [<code>StageInstanceManager</code>](#StageInstanceManager)  
**Returns**: The Collection class.  
<a name="StageInstanceManager+_add"></a>

### stageInstanceManager.\_add(stageInstances, [guildId], [options]) ⇒
It adds a stage instance to the cache.

**Kind**: instance method of [<code>StageInstanceManager</code>](#StageInstanceManager)  
**Returns**: A new StageInstance object  

| Param | Description |
| --- | --- |
| stageInstances | This is the stage instance object or the stage instance ID. |
| [guildId] | The guild ID of the guild the stage instance is in. |
| [options] | cache = true, force = false |

<a name="StageInstanceManager+fetch"></a>

### stageInstanceManager.fetch(channel, [options]) ⇒
It fetches a stage instance from the API and adds it to the cache

**Kind**: instance method of [<code>StageInstanceManager</code>](#StageInstanceManager)  
**Returns**: The stage instance  

| Param | Description |
| --- | --- |
| channel | The channel to fetch. Can be a channel ID or a channel object. |
| [options] | Object |

<a name="StageInstanceManager+create"></a>

### stageInstanceManager.create([options]) ⇒
It creates a new stage instance.

**Kind**: instance method of [<code>StageInstanceManager</code>](#StageInstanceManager)  
**Returns**: A new StageInstance object  

| Param | Description |
| --- | --- |
| [options] | Object |

<a name="StageInstanceManager+edit"></a>

### stageInstanceManager.edit(channel, [options]) ⇒
It edits a stage instance

**Kind**: instance method of [<code>StageInstanceManager</code>](#StageInstanceManager)  
**Returns**: A stage instance object  

| Param | Description |
| --- | --- |
| channel | The channel to edit. |
| [options] | The options to pass to the API. |

<a name="StageInstanceManager+delete"></a>

### stageInstanceManager.delete(channel, reason) ⇒
It deletes a stage instance

**Kind**: instance method of [<code>StageInstanceManager</code>](#StageInstanceManager)  
**Returns**: The deleted stage  

| Param | Description |
| --- | --- |
| channel | The channel to delete. Can be a channel object or a channel ID. |
| reason | The reason for the deletion. |

<a name="StageInstanceManager.transformPayload"></a>

### StageInstanceManager.transformPayload([payload]) ⇒
It takes a payload object and returns a new object with the same properties, but with the`channel` property replaced with a `channel_id` property

**Kind**: static method of [<code>StageInstanceManager</code>](#StageInstanceManager)  
**Returns**: A new object with the properties channel_id, topic, and privacy_level.  

| Param | Description |
| --- | --- |
| [payload] | The payload object that is passed to the function. |

