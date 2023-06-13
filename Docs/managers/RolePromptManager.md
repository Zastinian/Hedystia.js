<a name="RolePromptManager"></a>

## RolePromptManager
**Kind**: global class  

* [RolePromptManager](#RolePromptManager)
    * [new RolePromptManager(guildId, client)](#new_RolePromptManager_new)
    * _instance_
        * [.cache](#RolePromptManager+cache) ⇒
        * [._add(prompts, [guildId], [options])](#RolePromptManager+_add) ⇒
        * [.fetch([options])](#RolePromptManager+fetch) ⇒
        * [.set([options])](#RolePromptManager+set) ⇒
    * _static_
        * [.transformPayload([payload])](#RolePromptManager.transformPayload) ⇒
        * [.transformRoles([roles])](#RolePromptManager.transformRoles)

<a name="new_RolePromptManager_new"></a>

### new RolePromptManager(guildId, client)
`constructor(guildId, client)` is a function that takes two arguments, `guildId` and `client`, andassigns them to the `guildId` and `client` properties of the class.


| Param | Description |
| --- | --- |
| guildId | The ID of the guild you want to get the settings for. |
| client | The client that the command is being run on. |

<a name="RolePromptManager+cache"></a>

### rolePromptManager.cache ⇒
It returns the Collection object.

**Kind**: instance property of [<code>RolePromptManager</code>](#RolePromptManager)  
**Returns**: The Collection class  
<a name="RolePromptManager+_add"></a>

### rolePromptManager.\_add(prompts, [guildId], [options]) ⇒
It adds a role prompt to the cache

**Kind**: instance method of [<code>RolePromptManager</code>](#RolePromptManager)  
**Returns**: A new RolePrompts object  

| Param | Description |
| --- | --- |
| prompts | This is the prompt you want to add. It can be a string or an object. If it's a string, it will be the prompt's ID. If it's an object, it will be the prompt's data. |
| [guildId] | The guild ID to use for the role prompt. |
| [options] | - |

<a name="RolePromptManager+fetch"></a>

### rolePromptManager.fetch([options]) ⇒
It fetches all role prompts from the API and returns them in a cache

**Kind**: instance method of [<code>RolePromptManager</code>](#RolePromptManager)  
**Returns**: A new instance of the cache constructor.  

| Param | Description |
| --- | --- |
| [options] | Object |

<a name="RolePromptManager+set"></a>

### rolePromptManager.set([options]) ⇒
It sets the role prompts for the guild

**Kind**: instance method of [<code>RolePromptManager</code>](#RolePromptManager)  
**Returns**: A new cache.constructor  

| Param | Description |
| --- | --- |
| [options] | Object |

<a name="RolePromptManager.transformPayload"></a>

### RolePromptManager.transformPayload([payload]) ⇒
It transforms the payload into a format that the API can understand.

**Kind**: static method of [<code>RolePromptManager</code>](#RolePromptManager)  
**Returns**: The payload is being returned with the title, description, required, and roles.  

| Param | Description |
| --- | --- |
| [payload] | The payload that is passed to the function. |

<a name="RolePromptManager.transformRoles"></a>

### RolePromptManager.transformRoles([roles])
It takes an object with the keys `emojiName`, `emojiId`, `name`, and `role` and returns an objectwith the keys `emoji_name`, `emoji_id`, `name`, and `role_id`

**Kind**: static method of [<code>RolePromptManager</code>](#RolePromptManager)  

| Param | Description |
| --- | --- |
| [roles] | The roles object. |

