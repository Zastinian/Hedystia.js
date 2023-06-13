<a name="AutoModManager"></a>

## AutoModManager
**Kind**: global class  

* [AutoModManager](#AutoModManager)
    * [new AutoModManager(client)](#new_AutoModManager_new)
    * _instance_
        * [.cache](#AutoModManager+cache) ⇒
        * [._add(rules, [guildId], [options])](#AutoModManager+_add) ⇒
        * [.fetch(rule, options)](#AutoModManager+fetch) ⇒
        * [._fetchId(rule, [cache], [force])](#AutoModManager+_fetchId) ⇒
        * [.create([options])](#AutoModManager+create) ⇒
        * [.edit(rule, [options])](#AutoModManager+edit) ⇒
        * [.delete(rule, reason)](#AutoModManager+delete) ⇒
    * _static_
        * [.transformPayload([payload])](#AutoModManager.transformPayload) ⇒
        * [.transformActions([actions])](#AutoModManager.transformActions) ⇒
        * [.transformMetadata([metadata])](#AutoModManager.transformMetadata) ⇒

<a name="new_AutoModManager_new"></a>

### new AutoModManager(client)
It's a constructor function that takes a client parameter and passes it to the super function


| Param | Description |
| --- | --- |
| client | The client object. |

<a name="AutoModManager+cache"></a>

### autoModManager.cache ⇒
It returns the Collection object.

**Kind**: instance property of [<code>AutoModManager</code>](#AutoModManager)  
**Returns**: The Collection class.  
<a name="AutoModManager+_add"></a>

### autoModManager.\_add(rules, [guildId], [options]) ⇒
It adds a rule to the cache

**Kind**: instance method of [<code>AutoModManager</code>](#AutoModManager)  
**Returns**: The rule object  

| Param | Description |
| --- | --- |
| rules | The rule object or ID of the rule to add. |
| [guildId] | The ID of the guild to fetch the rule from. |
| [options] | cache = true, force = false |

<a name="AutoModManager+fetch"></a>

### autoModManager.fetch(rule, options) ⇒
It fetches all the rules from the API and returns them in a cache

**Kind**: instance method of [<code>AutoModManager</code>](#AutoModManager)  
**Returns**: An array of objects.  

| Param | Description |
| --- | --- |
| rule | The rule ID or object. |
| options | An object containing the following properties: |

<a name="AutoModManager+_fetchId"></a>

### autoModManager.\_fetchId(rule, [cache], [force]) ⇒
It fetches a rule from the API and adds it to the cache

**Kind**: instance method of [<code>AutoModManager</code>](#AutoModManager)  
**Returns**: The rule object  

| Param | Default | Description |
| --- | --- | --- |
| rule |  | The rule to fetch. Can be a string or a rule object. |
| [cache] | <code>true</code> | Whether or not to cache the rule. |
| [force] | <code>false</code> | If true, it will force the cache to be updated. |

<a name="AutoModManager+create"></a>

### autoModManager.create([options]) ⇒
It creates a new rule

**Kind**: instance method of [<code>AutoModManager</code>](#AutoModManager)  
**Returns**: A new rule object  

| Param | Description |
| --- | --- |
| [options] | The options for the rule. |

<a name="AutoModManager+edit"></a>

### autoModManager.edit(rule, [options]) ⇒
It edits an existing rule

**Kind**: instance method of [<code>AutoModManager</code>](#AutoModManager)  
**Returns**: The rule that was edited.  

| Param | Description |
| --- | --- |
| rule | The rule to edit. Can be a rule object or a rule ID. |
| [options] | Object |

<a name="AutoModManager+delete"></a>

### autoModManager.delete(rule, reason) ⇒
It deletes a rule from the server

**Kind**: instance method of [<code>AutoModManager</code>](#AutoModManager)  
**Returns**: The deleted rule.  

| Param | Description |
| --- | --- |
| rule | The rule to delete. Can be a rule ID or a rule object. |
| reason | The reason for the deletion. |

<a name="AutoModManager.transformPayload"></a>

### AutoModManager.transformPayload([payload]) ⇒
It takes a payload object and returns a new object with the same properties, but with the valuestransformed to match the API's expected format

**Kind**: static method of [<code>AutoModManager</code>](#AutoModManager)  
**Returns**: The payload is being returned.  

| Param | Description |
| --- | --- |
| [payload] | The payload to transform. |

<a name="AutoModManager.transformActions"></a>

### AutoModManager.transformActions([actions]) ⇒
It takes an object with a `type` property and an optional `metadata` property, and returns anobject with a `type` property and an optional `metadata` property

**Kind**: static method of [<code>AutoModManager</code>](#AutoModManager)  
**Returns**: An object with a type and metadata property.  

| Param | Description |
| --- | --- |
| [actions] | The actions to transform. |

<a name="AutoModManager.transformMetadata"></a>

### AutoModManager.transformMetadata([metadata]) ⇒
It takes in a metadata object, and returns a new object with the same properties, but with theproperties renamed to match the new naming scheme

**Kind**: static method of [<code>AutoModManager</code>](#AutoModManager)  
**Returns**: The return value is the metadata object with the values of the metadata object beingassigned to the keys of the new object.  

| Param | Description |
| --- | --- |
| [metadata] | The metadata object that is passed to the constructor of the plugin. |

