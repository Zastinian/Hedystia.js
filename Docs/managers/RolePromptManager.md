---
title: RolePromptManager
sidebar:
  order: 37
---



## RolePromptManager ⇐ <code>Base</code>
Represents a manager for role prompts in a guild.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [RolePromptManager](#RolePromptManager) ⇐ <code>Base</code>
    * [new RolePromptManager(guildId, client)](#new_RolePromptManager_new)
    * _instance_
        * [.cache](#RolePromptManager+cache) ⇒
        * [._add(prompts, [guildId], [options])](#RolePromptManager+_add) ⇒ <code>RolePrompt</code> \| <code>null</code>
        * [.fetch([options])](#RolePromptManager+fetch) ⇒ <code>Promise.&lt;Object&gt;</code>
        * [.set([options])](#RolePromptManager+set) ⇒ <code>Promise.&lt;Cache&gt;</code>
    * _static_
        * [.transformPayload(payload)](#RolePromptManager.transformPayload) ⇒ <code>object</code>
        * [.transformRoles(roles)](#RolePromptManager.transformRoles) ⇒ <code>Object</code>

<a name="new_RolePromptManager_new"></a>

### new RolePromptManager(guildId, client)
Constructs a new instance of the class.


| Param | Type | Description |
| --- | --- | --- |
| guildId | <code>string</code> | The ID of the guild. |
| client | <code>Client</code> | The client instance. |

<a name="RolePromptManager+cache"></a>

### rolePromptManager.cache ⇒
Getter method for the cache property.

**Kind**: instance property of [<code>RolePromptManager</code>](#RolePromptManager)  
**Returns**: The Collection object representing the cache.  
<a name="RolePromptManager+_add"></a>

### rolePromptManager.\_add(prompts, [guildId], [options]) ⇒ <code>RolePrompt</code> \| <code>null</code>
Adds a role prompt to the collection.

**Kind**: instance method of [<code>RolePromptManager</code>](#RolePromptManager)  
**Returns**: <code>RolePrompt</code> \| <code>null</code> - The added role prompt or null if prompts is falsy.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| prompts | <code>string</code> \| <code>RolePrompt</code> |  | The ID of the prompt or the prompt object itself. |
| [guildId] | <code>string</code> | <code>&quot;this.guildId&quot;</code> | The ID of the guild where the prompt is added. |
| [options] | <code>object</code> | <code>{cache: true, force: false}</code> | Additional options for adding the prompt. |
| [options.cache] | <code>boolean</code> | <code>true</code> | Whether to cache the prompt. |
| [options.force] | <code>boolean</code> | <code>false</code> | Whether to force adding the prompt even if it already exists in the cache. |

<a name="RolePromptManager+fetch"></a>

### rolePromptManager.fetch([options]) ⇒ <code>Promise.&lt;Object&gt;</code>
Fetches role prompts from the server.

**Kind**: instance method of [<code>RolePromptManager</code>](#RolePromptManager)  
**Returns**: <code>Promise.&lt;Object&gt;</code> - - A promise that resolves to the fetched role prompts.  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | Optional parameters for the fetch request. |
| [options.cache] | <code>boolean</code> | Whether to use cached data or not. |
| [options.force] | <code>boolean</code> | Whether to force a fresh fetch or not. |

<a name="RolePromptManager+set"></a>

### rolePromptManager.set([options]) ⇒ <code>Promise.&lt;Cache&gt;</code>
Sets the role prompts for the guild.

**Kind**: instance method of [<code>RolePromptManager</code>](#RolePromptManager)  
**Returns**: <code>Promise.&lt;Cache&gt;</code> - A promise that resolves with a new instance of the cachecontaining the updated role prompts.  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | The options for setting the role prompts. |
| [options.reason] | <code>string</code> | The reason for setting the role prompts. |

<a name="RolePromptManager.transformPayload"></a>

### RolePromptManager.transformPayload(payload) ⇒ <code>object</code>
Transforms the given payload object into a new object with specific properties.

**Kind**: static method of [<code>RolePromptManager</code>](#RolePromptManager)  
**Returns**: <code>object</code> - - The transformed object with properties: title, description, required, and roles.  

| Param | Type | Description |
| --- | --- | --- |
| payload | <code>object</code> | The payload object to transform. |

<a name="RolePromptManager.transformRoles"></a>

### RolePromptManager.transformRoles(roles) ⇒ <code>Object</code>
Transforms a roles object into a new format.

**Kind**: static method of [<code>RolePromptManager</code>](#RolePromptManager)  
**Returns**: <code>Object</code> - - The transformed roles object.  

| Param | Type | Description |
| --- | --- | --- |
| roles | <code>Object</code> | The roles object to transform. |

