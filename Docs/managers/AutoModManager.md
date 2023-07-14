<a name="AutoModManager"></a>

## AutoModManager ⇐ <code>Base</code>
Represents an AutoMod manager that handles the creation, editing, and deletion of auto-moderation rules for a guild.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [AutoModManager](#AutoModManager) ⇐ <code>Base</code>
    * [new AutoModManager(client)](#new_AutoModManager_new)
    * _instance_
        * [.cache](#AutoModManager+cache) ⇒
        * [._add(rules, [guildId], [options])](#AutoModManager+_add) ⇒ <code>Rule</code> \| <code>null</code>
        * [.fetch(rule, [options])](#AutoModManager+fetch) ⇒ <code>Promise.&lt;object&gt;</code>
        * [._fetchId(rule, [cache], [force])](#AutoModManager+_fetchId) ⇒ <code>Promise.&lt;any&gt;</code>
        * [.create([options])](#AutoModManager+create) ⇒ <code>Promise</code>
        * [.edit(rule, [options])](#AutoModManager+edit) ⇒ <code>Promise.&lt;Rule&gt;</code>
        * [.delete(rule, reason)](#AutoModManager+delete) ⇒ <code>Promise.&lt;Rule&gt;</code>
    * _static_
        * [.transformPayload(payload)](#AutoModManager.transformPayload) ⇒ <code>Object</code>
        * [.transformActions(actions)](#AutoModManager.transformActions) ⇒ <code>Object</code>
        * [.transformMetadata(metadata)](#AutoModManager.transformMetadata) ⇒ <code>Object</code>

<a name="new_AutoModManager_new"></a>

### new AutoModManager(client)
Constructs a new instance of the class.


| Param | Type | Description |
| --- | --- | --- |
| client | <code>Client</code> | The client object used for communication with the server. |

<a name="AutoModManager+cache"></a>

### autoModManager.cache ⇒
Getter method for the cache property.

**Kind**: instance property of [<code>AutoModManager</code>](#AutoModManager)  
**Returns**: The Collection object representing the cache.  
<a name="AutoModManager+_add"></a>

### autoModManager.\_add(rules, [guildId], [options]) ⇒ <code>Rule</code> \| <code>null</code>
Adds a rule to the guild's auto moderation system.

**Kind**: instance method of [<code>AutoModManager</code>](#AutoModManager)  
**Returns**: <code>Rule</code> \| <code>null</code> - The added rule, or null if  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| rules | <code>string</code> \| <code>Rule</code> |  | The rule to add. Can be either a rule ID or a Rule object. |
| [guildId] | <code>string</code> | <code>&quot;this.guildId&quot;</code> | The ID of the guild to add the rule to. |
| [options] | <code>object</code> | <code>{cache: true, force: false}</code> | Additional options for adding the rule. |
| [options.cache] | <code>boolean</code> | <code>true</code> | Whether to cache the added rule. |
| [options.force] | <code>boolean</code> | <code>false</code> | Whether to force adding the rule even if it already exists in the cache. |

<a name="AutoModManager+fetch"></a>

### autoModManager.fetch(rule, [options]) ⇒ <code>Promise.&lt;object&gt;</code>
Fetches auto-moderation rules from the server based on the provided rule and options.

**Kind**: instance method of [<code>AutoModManager</code>](#AutoModManager)  
**Returns**: <code>Promise.&lt;object&gt;</code> - - A promise that resolves to the fetched auto-moderation rules.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| rule | <code>string</code> \| <code>object</code> |  | The rule ID or an object containing the rule details. |
| [options] | <code>object</code> |  | Additional options for the fetch request. |
| [options.cache] | <code>boolean</code> | <code>true</code> | Whether to cache the fetched rules. |
| [options.force] | <code>boolean</code> | <code>false</code> | Whether to force the fetch request even if the rules are already cached. |

<a name="AutoModManager+_fetchId"></a>

### autoModManager.\_fetchId(rule, [cache], [force]) ⇒ <code>Promise.&lt;any&gt;</code>
Fetches the ID of a rule from the auto-moderation rules in a guild.

**Kind**: instance method of [<code>AutoModManager</code>](#AutoModManager)  
**Returns**: <code>Promise.&lt;any&gt;</code> - - A promise that resolves to the fetched rule.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| rule | <code>string</code> \| <code>Object</code> |  | The rule ID or an object containing the rule ID. |
| [cache] | <code>boolean</code> | <code>true</code> | Whether to cache the fetched rule. |
| [force] | <code>boolean</code> | <code>false</code> | Whether to force fetching the rule even if it is already cached. |

<a name="AutoModManager+create"></a>

### autoModManager.create([options]) ⇒ <code>Promise</code>
Creates a new auto-moderation rule for the guild.

**Kind**: instance method of [<code>AutoModManager</code>](#AutoModManager)  
**Returns**: <code>Promise</code> - A promise that resolves with the created rule.  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | The options for creating the rule. |
| [options.reason] | <code>string</code> | The reason for creating the rule. |

<a name="AutoModManager+edit"></a>

### autoModManager.edit(rule, [options]) ⇒ <code>Promise.&lt;Rule&gt;</code>
Edits an auto-moderation rule in the guild.

**Kind**: instance method of [<code>AutoModManager</code>](#AutoModManager)  
**Returns**: <code>Promise.&lt;Rule&gt;</code> - A promise that resolves with the edited rule.  

| Param | Type | Description |
| --- | --- | --- |
| rule | <code>string</code> \| <code>Rule</code> | The ID or the rule object to edit. |
| [options] | <code>Object</code> | Additional options for the edit operation. |
| [options.reason] | <code>string</code> | The reason for the edit. |

<a name="AutoModManager+delete"></a>

### autoModManager.delete(rule, reason) ⇒ <code>Promise.&lt;Rule&gt;</code>
Deletes an auto-moderation rule from the guild.

**Kind**: instance method of [<code>AutoModManager</code>](#AutoModManager)  
**Returns**: <code>Promise.&lt;Rule&gt;</code> - - The deleted rule object.  

| Param | Type | Description |
| --- | --- | --- |
| rule | <code>string</code> \| <code>Rule</code> | The ID or the rule object to delete. |
| reason | <code>string</code> | The reason for deleting the rule. |

<a name="AutoModManager.transformPayload"></a>

### AutoModManager.transformPayload(payload) ⇒ <code>Object</code>
Transforms the payload object into a new format.

**Kind**: static method of [<code>AutoModManager</code>](#AutoModManager)  
**Returns**: <code>Object</code> - - The transformed payload object.  

| Param | Type | Description |
| --- | --- | --- |
| payload | <code>Object</code> | The payload object to transform. |

<a name="AutoModManager.transformActions"></a>

### AutoModManager.transformActions(actions) ⇒ <code>Object</code>
Transforms the actions object into a new format.

**Kind**: static method of [<code>AutoModManager</code>](#AutoModManager)  
**Returns**: <code>Object</code> - - The transformed actions object.  

| Param | Type | Description |
| --- | --- | --- |
| actions | <code>Object</code> | The actions object to transform. |

<a name="AutoModManager.transformMetadata"></a>

### AutoModManager.transformMetadata(metadata) ⇒ <code>Object</code>
Transforms the given metadata object into a new format.

**Kind**: static method of [<code>AutoModManager</code>](#AutoModManager)  
**Returns**: <code>Object</code> - - The transformed metadata object.  

| Param | Type | Description |
| --- | --- | --- |
| metadata | <code>Object</code> | The metadata object to transform. |

