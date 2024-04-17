---
title: GuildTemplateManager
sidebar:
  order: 27
---



## GuildTemplateManager ⇐ <code>Base</code>
Represents a manager for guild templates.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [GuildTemplateManager](#GuildTemplateManager) ⇐ <code>Base</code>
    * [new GuildTemplateManager(guildId, client)](#new_GuildTemplateManager_new)
    * _instance_
        * [.cache](#GuildTemplateManager+cache) ⇒
        * [._add(templates, [options])](#GuildTemplateManager+_add) ⇒ <code>GuildTemplate</code> \| <code>null</code>
        * [.fetch([options])](#GuildTemplateManager+fetch) ⇒ <code>Promise.&lt;Cache&gt;</code>
        * [.create(options)](#GuildTemplateManager+create) ⇒ <code>Promise.&lt;Object&gt;</code>
        * [.edit(code, [options])](#GuildTemplateManager+edit) ⇒ <code>Promise.&lt;GuildTemplate&gt;</code>
        * [.sync(code)](#GuildTemplateManager+sync) ⇒ <code>Promise.&lt;GuildTemplate&gt;</code>
        * [.delete(code)](#GuildTemplateManager+delete) ⇒ <code>Promise.&lt;GuildTemplate&gt;</code>
    * _static_
        * [.transformPayload(o)](#GuildTemplateManager.transformPayload) ⇒ <code>Object</code>

<a name="new_GuildTemplateManager_new"></a>

### new GuildTemplateManager(guildId, client)
Constructs a new instance of the class.


| Param | Type | Description |
| --- | --- | --- |
| guildId | <code>string</code> | The ID of the guild. |
| client | <code>Client</code> | The client instance. |

<a name="GuildTemplateManager+cache"></a>

### guildTemplateManager.cache ⇒
Getter method for the cache property.

**Kind**: instance property of [<code>GuildTemplateManager</code>](#GuildTemplateManager)  
**Returns**: The Collection object representing the cache.  
<a name="GuildTemplateManager+_add"></a>

### guildTemplateManager.\_add(templates, [options]) ⇒ <code>GuildTemplate</code> \| <code>null</code>
Adds a template to the cache and returns the template object.

**Kind**: instance method of [<code>GuildTemplateManager</code>](#GuildTemplateManager)  
**Returns**: <code>GuildTemplate</code> \| <code>null</code> - The template object if it exists, otherwise null.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| templates | <code>string</code> \| <code>Object</code> |  | The template code or an object containing the template code. |
| [options] | <code>object</code> |  | Optional options for the template. |
| [options.cache] | <code>boolean</code> | <code>true</code> | Whether to cache the template or not. |
| [options.force] | <code>boolean</code> | <code>false</code> | Whether to force the template to be retrieved from the cache or not. |

<a name="GuildTemplateManager+fetch"></a>

### guildTemplateManager.fetch([options]) ⇒ <code>Promise.&lt;Cache&gt;</code>
Fetches templates from the server.

**Kind**: instance method of [<code>GuildTemplateManager</code>](#GuildTemplateManager)  
**Returns**: <code>Promise.&lt;Cache&gt;</code> - - A promise that resolves to a cache object containing the fetched templates.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | Optional parameters for the fetch request. |
| [options.cache] | <code>boolean</code> | <code>true</code> | Whether to cache the fetched templates. |
| [options.force] | <code>boolean</code> | <code>false</code> | Whether to force the fetch request even if the templates are already cached. |

<a name="GuildTemplateManager+create"></a>

### guildTemplateManager.create(options) ⇒ <code>Promise.&lt;Object&gt;</code>
Creates a guild template with the given options.

**Kind**: instance method of [<code>GuildTemplateManager</code>](#GuildTemplateManager)  
**Returns**: <code>Promise.&lt;Object&gt;</code> - A promise that resolves to the created guild template.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options for creating the guild template. |

<a name="GuildTemplateManager+edit"></a>

### guildTemplateManager.edit(code, [options]) ⇒ <code>Promise.&lt;GuildTemplate&gt;</code>
Edits a guild template with the given code and options.

**Kind**: instance method of [<code>GuildTemplateManager</code>](#GuildTemplateManager)  
**Returns**: <code>Promise.&lt;GuildTemplate&gt;</code> - A promise that resolves with the edited GuildTemplate object.  
**Throws**:

- <code>RangeError</code> If the code is not provided.


| Param | Type | Description |
| --- | --- | --- |
| code | <code>string</code> \| <code>GuildTemplate</code> | The code or GuildTemplate object of the template to edit. |
| [options] | <code>Object</code> | The options for editing the template. |

<a name="GuildTemplateManager+sync"></a>

### guildTemplateManager.sync(code) ⇒ <code>Promise.&lt;GuildTemplate&gt;</code>
Synchronizes a guild template with the provided code.

**Kind**: instance method of [<code>GuildTemplateManager</code>](#GuildTemplateManager)  
**Returns**: <code>Promise.&lt;GuildTemplate&gt;</code> - - A promise that resolves with the synchronized GuildTemplate.  
**Throws**:

- <code>RangeError</code> - If the code is not provided.


| Param | Type | Description |
| --- | --- | --- |
| code | <code>string</code> \| <code>GuildTemplate</code> | The code or GuildTemplate object to sync. |

<a name="GuildTemplateManager+delete"></a>

### guildTemplateManager.delete(code) ⇒ <code>Promise.&lt;GuildTemplate&gt;</code>
Deletes a guild template.

**Kind**: instance method of [<code>GuildTemplateManager</code>](#GuildTemplateManager)  
**Returns**: <code>Promise.&lt;GuildTemplate&gt;</code> - A promise that resolves with the deleted template.  
**Throws**:

- <code>RangeError</code> If the code is not provided.


| Param | Type | Description |
| --- | --- | --- |
| code | <code>string</code> \| <code>GuildTemplate</code> | The code or GuildTemplate object of the template to delete. |

<a name="GuildTemplateManager.transformPayload"></a>

### GuildTemplateManager.transformPayload(o) ⇒ <code>Object</code>
Transforms the given payload object by extracting the "name" and "description" properties.If these properties are not present in the object, they will be set to undefined in the returned object.

**Kind**: static method of [<code>GuildTemplateManager</code>](#GuildTemplateManager)  
**Returns**: <code>Object</code> - - The transformed object with "name" and "description" properties.  

| Param | Type | Description |
| --- | --- | --- |
| o | <code>Object</code> | The payload object to transform. |

