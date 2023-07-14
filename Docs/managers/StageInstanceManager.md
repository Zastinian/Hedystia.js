<a name="StageInstanceManager"></a>

## StageInstanceManager ⇐ <code>Base</code>
Manages stage instances in a guild.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [StageInstanceManager](#StageInstanceManager) ⇐ <code>Base</code>
    * [new StageInstanceManager(client)](#new_StageInstanceManager_new)
    * _instance_
        * [.cache](#StageInstanceManager+cache) ⇒
        * [._add(stageInstances, [guildId], [options])](#StageInstanceManager+_add) ⇒ <code>StageInstance</code> \| <code>null</code>
        * [.fetch(channel, [options])](#StageInstanceManager+fetch) ⇒ <code>Promise.&lt;StageInstance&gt;</code>
        * [.create([options])](#StageInstanceManager+create) ⇒ <code>Promise.&lt;StageInstance&gt;</code>
        * [.edit(channel, [options])](#StageInstanceManager+edit) ⇒ <code>Promise.&lt;StageInstance&gt;</code>
        * [.delete(channel, reason)](#StageInstanceManager+delete) ⇒ <code>Promise.&lt;(StageInstance\|null)&gt;</code>
    * _static_
        * [.transformPayload([payload])](#StageInstanceManager.transformPayload) ⇒ <code>object</code>

<a name="new_StageInstanceManager_new"></a>

### new StageInstanceManager(client)
Constructs a new instance of the class.


| Param | Type | Description |
| --- | --- | --- |
| client | <code>Client</code> | The client object used for communication with the server. |

<a name="StageInstanceManager+cache"></a>

### stageInstanceManager.cache ⇒
Getter method for the cache property.

**Kind**: instance property of [<code>StageInstanceManager</code>](#StageInstanceManager)  
**Returns**: The Collection object representing the cache.  
<a name="StageInstanceManager+_add"></a>

### stageInstanceManager.\_add(stageInstances, [guildId], [options]) ⇒ <code>StageInstance</code> \| <code>null</code>
Adds a stage instance to the cache and returns the stage instance object.

**Kind**: instance method of [<code>StageInstanceManager</code>](#StageInstanceManager)  
**Returns**: <code>StageInstance</code> \| <code>null</code> - The stage  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| stageInstances | <code>string</code> \| <code>StageInstance</code> |  | The stage instance ID or the stage instance object. |
| [guildId] | <code>string</code> | <code>&quot;this.guildId&quot;</code> | The ID of the guild where the stage instance belongs to. |
| [options] | <code>object</code> | <code>{cache: true, force: false}</code> | Additional options for adding the stage instance. |
| [options.cache] | <code>boolean</code> | <code>true</code> | Whether to cache the stage instance or not. |
| [options.force] | <code>boolean</code> | <code>false</code> | Whether to force fetch the stage instance even if it is already in the cache. |

<a name="StageInstanceManager+fetch"></a>

### stageInstanceManager.fetch(channel, [options]) ⇒ <code>Promise.&lt;StageInstance&gt;</code>
Fetches a stage instance from the API.

**Kind**: instance method of [<code>StageInstanceManager</code>](#StageInstanceManager)  
**Returns**: <code>Promise.&lt;StageInstance&gt;</code> - A promise that resolves with the fetched stage instance.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| channel | <code>string</code> \| <code>Channel</code> |  | The channel or channel ID to fetch the stage instance from. |
| [options] | <code>Object</code> |  | Additional options for the fetch. |
| [options.cache] | <code>boolean</code> | <code>true</code> | Whether to cache the fetched stage instance. |
| [options.force] | <code>boolean</code> | <code>false</code> | Whether to force fetch the stage instance even if it is already cached. |

<a name="StageInstanceManager+create"></a>

### stageInstanceManager.create([options]) ⇒ <code>Promise.&lt;StageInstance&gt;</code>
Creates a new stage instance with the given options.

**Kind**: instance method of [<code>StageInstanceManager</code>](#StageInstanceManager)  
**Returns**: <code>Promise.&lt;StageInstance&gt;</code> - A promise that resolves with the created stage instance.  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | The options for creating the stage instance. |
| [options.reason] | <code>string</code> | The reason for creating the stage instance. |

<a name="StageInstanceManager+edit"></a>

### stageInstanceManager.edit(channel, [options]) ⇒ <code>Promise.&lt;StageInstance&gt;</code>
Edits a stage instance in a channel.

**Kind**: instance method of [<code>StageInstanceManager</code>](#StageInstanceManager)  
**Returns**: <code>Promise.&lt;StageInstance&gt;</code> - A promise that resolves with the updated stage instance.  

| Param | Type | Description |
| --- | --- | --- |
| channel | <code>string</code> \| <code>Channel</code> | The channel or channel ID where the stage instance is located. |
| [options] | <code>Object</code> | Additional options for editing the stage instance. |
| [options.reason] | <code>string</code> | The reason for editing the stage instance. |

<a name="StageInstanceManager+delete"></a>

### stageInstanceManager.delete(channel, reason) ⇒ <code>Promise.&lt;(StageInstance\|null)&gt;</code>
Deletes a stage instance from a channel.

**Kind**: instance method of [<code>StageInstanceManager</code>](#StageInstanceManager)  
**Returns**: <code>Promise.&lt;(StageInstance\|null)&gt;</code> - - A promise that resolves to the deleted stage instance, or null if it does not exist.  

| Param | Type | Description |
| --- | --- | --- |
| channel | <code>string</code> \| <code>Channel</code> | The channel or channel ID where the stage instance is located. |
| reason | <code>string</code> | The reason for deleting the stage instance. |

<a name="StageInstanceManager.transformPayload"></a>

### StageInstanceManager.transformPayload([payload]) ⇒ <code>object</code>
Transforms the given payload object into a new object with specific properties.

**Kind**: static method of [<code>StageInstanceManager</code>](#StageInstanceManager)  
**Returns**: <code>object</code> - - The transformed payload object.  

| Param | Type | Description |
| --- | --- | --- |
| [payload] | <code>object</code> | The payload object to transform. |

