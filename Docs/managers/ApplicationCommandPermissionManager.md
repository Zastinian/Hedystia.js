<a name="ApplicationCommandPermissionManager"></a>

## ApplicationCommandPermissionManager ⇐ <code>Base</code>
Manages application command permissions for a specific guild.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [ApplicationCommandPermissionManager](#ApplicationCommandPermissionManager) ⇐ <code>Base</code>
    * [new ApplicationCommandPermissionManager(client, guildId)](#new_ApplicationCommandPermissionManager_new)
    * _instance_
        * [.cache](#ApplicationCommandPermissionManager+cache) ⇒
        * [._add(commands, [guildId], [options])](#ApplicationCommandPermissionManager+_add) ⇒ <code>ApplicationCommandPermission</code>
        * [.fetch(commands, [options])](#ApplicationCommandPermissionManager+fetch) ⇒ <code>Promise.&lt;Cache&gt;</code>
        * [._fetchId(commands, [cache], [force], [guild])](#ApplicationCommandPermissionManager+_fetchId) ⇒ <code>Promise.&lt;any&gt;</code>
    * _static_
        * [.transformPermissions(o)](#ApplicationCommandPermissionManager.transformPermissions) ⇒ <code>Object</code>
        * [.transformPermission(o)](#ApplicationCommandPermissionManager.transformPermission) ⇒ <code>Object</code>
        * [.parseRemoveOptions(payload, fetchedData)](#ApplicationCommandPermissionManager.parseRemoveOptions) ⇒ <code>array</code>

<a name="new_ApplicationCommandPermissionManager_new"></a>

### new ApplicationCommandPermissionManager(client, guildId)
Constructs a new instance of the class.


| Param | Type | Description |
| --- | --- | --- |
| client | <code>Client</code> | The client instance. |
| guildId | <code>string</code> | The ID of the guild. |

<a name="ApplicationCommandPermissionManager+cache"></a>

### applicationCommandPermissionManager.cache ⇒
Getter method for the cache property.

**Kind**: instance property of [<code>ApplicationCommandPermissionManager</code>](#ApplicationCommandPermissionManager)  
**Returns**: The Collection object representing the cache.  
<a name="ApplicationCommandPermissionManager+_add"></a>

### applicationCommandPermissionManager.\_add(commands, [guildId], [options]) ⇒ <code>ApplicationCommandPermission</code>
Adds a command permission to the guild.

**Kind**: instance method of [<code>ApplicationCommandPermissionManager</code>](#ApplicationCommandPermissionManager)  
**Returns**: <code>ApplicationCommandPermission</code> - The added command permission.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| commands | <code>string</code> \| <code>ApplicationCommand</code> |  | The command ID or the command object. |
| [guildId] | <code>string</code> | <code>&quot;this.guildId&quot;</code> | The ID of the guild to add the permission to. |
| [options] | <code>object</code> | <code>{cache: true, force: false}</code> | Additional options for adding the permission. |
| [options.cache] | <code>boolean</code> | <code>true</code> | Whether to cache the permission. |
| [options.force] | <code>boolean</code> | <code>false</code> | Whether to force adding the permission even if it already exists in the cache. |

<a name="ApplicationCommandPermissionManager+fetch"></a>

### applicationCommandPermissionManager.fetch(commands, [options]) ⇒ <code>Promise.&lt;Cache&gt;</code>
Fetches commands from the API based on the provided parameters.

**Kind**: instance method of [<code>ApplicationCommandPermissionManager</code>](#ApplicationCommandPermissionManager)  
**Returns**: <code>Promise.&lt;Cache&gt;</code> - A promise that resolves to a cache object containing the fetched commands.  
**Throws**:

- <code>RangeError</code> If the guild ID is not provided.


| Param | Type | Description |
| --- | --- | --- |
| commands | <code>string</code> \| <code>object</code> | The command ID or an object containing the command details. |
| [options] | <code>object</code> | Additional options for the fetch operation. |
| [options.cache] | <code>boolean</code> | Whether to cache the fetched commands. |
| [options.force] | <code>boolean</code> | Whether to force fetch the commands even if they are already cached. |
| [options.guild] | <code>string</code> \| <code>Guild</code> | The ID or instance of the guild to fetch the commands for. |

<a name="ApplicationCommandPermissionManager+_fetchId"></a>

### applicationCommandPermissionManager.\_fetchId(commands, [cache], [force], [guild]) ⇒ <code>Promise.&lt;any&gt;</code>
Fetches the ID of a command from the server's command permissions.

**Kind**: instance method of [<code>ApplicationCommandPermissionManager</code>](#ApplicationCommandPermissionManager)  
**Returns**: <code>Promise.&lt;any&gt;</code> - - A promise that resolves to the fetched permissions.  
**Throws**:

- <code>RangeError</code> - If the guild ID is not provided.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| commands | <code>string</code> \| <code>Object</code> |  | The ID of the command or an object containing the command ID. |
| [cache] | <code>boolean</code> | <code>true</code> | Whether to cache the fetched permissions. |
| [force] | <code>boolean</code> | <code>false</code> | Whether to force fetching the permissions even if they are already cached. |
| [guild] | <code>string</code> \| <code>Object</code> | <code>&quot;this.guildId&quot;</code> | The ID of the guild or an object containing the guild ID. |

<a name="ApplicationCommandPermissionManager.transformPermissions"></a>

### ApplicationCommandPermissionManager.transformPermissions(o) ⇒ <code>Object</code>
Transforms a permissions object into the desired format.

**Kind**: static method of [<code>ApplicationCommandPermissionManager</code>](#ApplicationCommandPermissionManager)  
**Returns**: <code>Object</code> - - The transformed permissions object.- id: The ID of the permission. If the ID is a string, it is used as is. If it is an object, the "id" property is used. If neither is present, it is set to undefined.- type: The type of the permission. If the type is a string, it is converted to the corresponding ApplicationCommandPermissionType enum value. If it is already a valid enum value, it is used as is. If neither is present, it is set to 2 (USER).- permission: The  

| Param | Type | Description |
| --- | --- | --- |
| o | <code>Object</code> | The permissions object to transform. |

<a name="ApplicationCommandPermissionManager.transformPermission"></a>

### ApplicationCommandPermissionManager.transformPermission(o) ⇒ <code>Object</code>
Transforms a permission object into a new format.

**Kind**: static method of [<code>ApplicationCommandPermissionManager</code>](#ApplicationCommandPermissionManager)  
**Returns**: <code>Object</code> - - The transformed permission object.  

| Param | Type | Description |
| --- | --- | --- |
| o | <code>Object</code> | The permission object to transform. |

<a name="ApplicationCommandPermissionManager.parseRemoveOptions"></a>

### ApplicationCommandPermissionManager.parseRemoveOptions(payload, fetchedData) ⇒ <code>array</code>
Parses the remove options from the payload and fetched data to create an array of objectsthat should be removed.

**Kind**: static method of [<code>ApplicationCommandPermissionManager</code>](#ApplicationCommandPermissionManager)  
**Returns**: <code>array</code> - - An array of objects that should be removed based on the remove options.  

| Param | Type | Description |
| --- | --- | --- |
| payload | <code>object</code> | The payload object containing the remove options. |
| fetchedData | <code>array</code> | The fetched data array to filter and map. |

