<a name="GuildTemplateManager"></a>

## GuildTemplateManager
**Kind**: global class  

* [GuildTemplateManager](#GuildTemplateManager)
    * [new GuildTemplateManager(guildId, client)](#new_GuildTemplateManager_new)
    * _instance_
        * [.cache](#GuildTemplateManager+cache) ⇒
        * [._add(templates, [options])](#GuildTemplateManager+_add) ⇒
        * [.fetch([options])](#GuildTemplateManager+fetch) ⇒
        * [.create([options])](#GuildTemplateManager+create) ⇒
        * [.edit(code, [options])](#GuildTemplateManager+edit) ⇒
        * [.sync(code)](#GuildTemplateManager+sync) ⇒
        * [.delete(code)](#GuildTemplateManager+delete) ⇒
    * _static_
        * [.transformPayload([o])](#GuildTemplateManager.transformPayload) ⇒

<a name="new_GuildTemplateManager_new"></a>

### new GuildTemplateManager(guildId, client)
`constructor(guildId, client)` is a function that takes two parameters, `guildId` and `client`, andsets the `guildId` property of the class to the `guildId` parameter, and the `client` property ofthe class to the `client` parameter


| Param | Description |
| --- | --- |
| guildId | The ID of the guild you want to get the settings for. |
| client | The client that the command is being run on. |

<a name="GuildTemplateManager+cache"></a>

### guildTemplateManager.cache ⇒
`return Collection;`

**Kind**: instance property of [<code>GuildTemplateManager</code>](#GuildTemplateManager)  
**Returns**: The cache property is being returned.  
<a name="GuildTemplateManager+_add"></a>

### guildTemplateManager.\_add(templates, [options]) ⇒
It adds a template to the cache

**Kind**: instance method of [<code>GuildTemplateManager</code>](#GuildTemplateManager)  
**Returns**: A new GuildTemplate object.  

| Param | Description |
| --- | --- |
| templates | The template code or template object. |
| [options] | An object with the following properties: |

<a name="GuildTemplateManager+fetch"></a>

### guildTemplateManager.fetch([options]) ⇒
It fetches all the templates from the API and returns a new cache of them

**Kind**: instance method of [<code>GuildTemplateManager</code>](#GuildTemplateManager)  
**Returns**: A new instance of the cache constructor.  

| Param | Description |
| --- | --- |
| [options] | Object |

<a name="GuildTemplateManager+create"></a>

### guildTemplateManager.create([options]) ⇒
`create` creates a new guild template

**Kind**: instance method of [<code>GuildTemplateManager</code>](#GuildTemplateManager)  
**Returns**: A new GuildTemplate instance.  

| Param | Description |
| --- | --- |
| [options] | Object |

<a name="GuildTemplateManager+edit"></a>

### guildTemplateManager.edit(code, [options]) ⇒
It edits a guild template

**Kind**: instance method of [<code>GuildTemplateManager</code>](#GuildTemplateManager)  
**Returns**: A new GuildTemplate instance.  

| Param | Description |
| --- | --- |
| code | The code of the template you want to edit. |
| [options] | Object |

<a name="GuildTemplateManager+sync"></a>

### guildTemplateManager.sync(code) ⇒
It syncs the template with the Discord API

**Kind**: instance method of [<code>GuildTemplateManager</code>](#GuildTemplateManager)  
**Returns**: A new instance of the GuildTemplate class.  

| Param | Description |
| --- | --- |
| code | The code of the template you want to sync. |

<a name="GuildTemplateManager+delete"></a>

### guildTemplateManager.delete(code) ⇒
It deletes a guild template

**Kind**: instance method of [<code>GuildTemplateManager</code>](#GuildTemplateManager)  
**Returns**: A new instance of the GuildTemplate class.  

| Param | Description |
| --- | --- |
| code | The code of the template you want to delete. |

<a name="GuildTemplateManager.transformPayload"></a>

### GuildTemplateManager.transformPayload([o]) ⇒
It takes an object and returns a new object with only the properties that are defined

**Kind**: static method of [<code>GuildTemplateManager</code>](#GuildTemplateManager)  
**Returns**: The transformPayload function is being returned.  

| Param | Description |
| --- | --- |
| [o] | The object to transform. |

