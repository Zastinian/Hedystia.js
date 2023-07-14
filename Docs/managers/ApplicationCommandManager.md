<a name="ApplicationCommandManager"></a>

## ApplicationCommandManager ⇐ <code>Base</code>
Represents a manager for application commands.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [ApplicationCommandManager](#ApplicationCommandManager) ⇐ <code>Base</code>
    * [new ApplicationCommandManager(client)](#new_ApplicationCommandManager_new)
    * _instance_
        * [.permissions](#ApplicationCommandManager+permissions) ⇒ <code>ApplicationCommandPermissionManager</code>
        * [.cache](#ApplicationCommandManager+cache) ⇒
        * [._add(commands, [guild], [options])](#ApplicationCommandManager+_add) ⇒ <code>ApplicationCommand</code>
        * [.create([options], [guild])](#ApplicationCommandManager+create) ⇒ <code>Promise.&lt;ApplicationCommand&gt;</code>
        * [.set([options], [guild])](#ApplicationCommandManager+set) ⇒ <code>Promise.&lt;Cache&gt;</code>
        * [.fetch(command, options)](#ApplicationCommandManager+fetch) ⇒ <code>Promise</code>
        * [.delete(command, [guild])](#ApplicationCommandManager+delete) ⇒ <code>Promise.&lt;ApplicationCommand&gt;</code>
        * [.edit(command, [options], [guild])](#ApplicationCommandManager+edit) ⇒ <code>Promise.&lt;ApplicationCommand&gt;</code>
        * [._fetchId(command, [cache], [force], [guild])](#ApplicationCommandManager+_fetchId) ⇒ <code>Promise.&lt;object&gt;</code>
    * _static_
        * [.transformOptions(options)](#ApplicationCommandManager.transformOptions) ⇒ <code>object</code>
        * [.transformPayload(payload)](#ApplicationCommandManager.transformPayload) ⇒ <code>Object</code>

<a name="new_ApplicationCommandManager_new"></a>

### new ApplicationCommandManager(client)
Constructs a new instance of the class.


| Param | Type | Description |
| --- | --- | --- |
| client | <code>Client</code> | The client object used for communication with the server. |

<a name="ApplicationCommandManager+permissions"></a>

### applicationCommandManager.permissions ⇒ <code>ApplicationCommandPermissionManager</code>
Returns the ApplicationCommandPermissionManager for managing permissions of application commands in a guild.

**Kind**: instance property of [<code>ApplicationCommandManager</code>](#ApplicationCommandManager)  
**Returns**: <code>ApplicationCommandPermissionManager</code> - The ApplicationCommandPermissionManager instance.  
<a name="ApplicationCommandManager+cache"></a>

### applicationCommandManager.cache ⇒
Getter method for the cache property.

**Kind**: instance property of [<code>ApplicationCommandManager</code>](#ApplicationCommandManager)  
**Returns**: The Collection object representing the cache.  
<a name="ApplicationCommandManager+_add"></a>

### applicationCommandManager.\_add(commands, [guild], [options]) ⇒ <code>ApplicationCommand</code>
Adds a command to the command cache.

**Kind**: instance method of [<code>ApplicationCommandManager</code>](#ApplicationCommandManager)  
**Returns**: <code>ApplicationCommand</code> - The added command.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| commands | <code>string</code> \| <code>ApplicationCommand</code> |  | The command or command ID to add. |
| [guild] | <code>string</code> | <code>&quot;this.guildId&quot;</code> | The ID of the guild to add the command to. |
| [options] | <code>object</code> | <code>{cache: true, force: false}</code> | Additional options for adding the command. |
| [options.cache] | <code>boolean</code> | <code>true</code> | Whether to cache the command. |
| [options.force] | <code>boolean</code> | <code>false</code> | Whether to force adding the command even if it already exists in the cache. |

<a name="ApplicationCommandManager+create"></a>

### applicationCommandManager.create([options], [guild]) ⇒ <code>Promise.&lt;ApplicationCommand&gt;</code>
Creates a new application command.

**Kind**: instance method of [<code>ApplicationCommandManager</code>](#ApplicationCommandManager)  
**Returns**: <code>Promise.&lt;ApplicationCommand&gt;</code> - A promise that resolves with the created application command.  
**Throws**:

- <code>Error</code> If the command creation fails.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | The options for the command. |
| [guild] | <code>string</code> \| <code>Guild</code> | <code>&quot;this.guildId&quot;</code> | The guild ID or guild object where the command should be created. |

<a name="ApplicationCommandManager+set"></a>

### applicationCommandManager.set([options], [guild]) ⇒ <code>Promise.&lt;Cache&gt;</code>
Sets the application commands for the specified guild or globally.

**Kind**: instance method of [<code>ApplicationCommandManager</code>](#ApplicationCommandManager)  
**Returns**: <code>Promise.&lt;Cache&gt;</code> - A promise that resolves to a new instance of the cache with the updated commands.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Array.&lt;Object&gt;</code> | <code>[{}]</code> | An array of options for the application commands. |
| [guild] | <code>string</code> \| <code>Guild</code> | <code>&quot;this.guildId&quot;</code> | The guild ID or guild object to set the commands for. |

<a name="ApplicationCommandManager+fetch"></a>

### applicationCommandManager.fetch(command, options) ⇒ <code>Promise</code>
Fetches commands from the API based on the provided command and options.

**Kind**: instance method of [<code>ApplicationCommandManager</code>](#ApplicationCommandManager)  
**Returns**: <code>Promise</code> - A promise that resolves to the fetched commands.  

| Param | Type | Description |
| --- | --- | --- |
| command | <code>string</code> \| <code>ApplicationCommand</code> | The command to fetch. Can be an ID, a string, or an object. |
| options | <code>object</code> | The options for fetching the commands. |
| options.cache | <code>boolean</code> | Whether to use the cache for fetching the commands. |
| options.force | <code>boolean</code> | Whether to force fetch the commands. |
| options.guild | <code>string</code> | The ID of the guild to fetch the commands from. |
| options.withLocalizations | <code>boolean</code> | Whether to include localizations in the fetched commands. |

<a name="ApplicationCommandManager+delete"></a>

### applicationCommandManager.delete(command, [guild]) ⇒ <code>Promise.&lt;ApplicationCommand&gt;</code>
Deletes an application command from the specified guild or the default guild.

**Kind**: instance method of [<code>ApplicationCommandManager</code>](#ApplicationCommandManager)  
**Returns**: <code>Promise.&lt;ApplicationCommand&gt;</code> - - The deleted ApplicationCommand object.  
**Throws**:

- <code>RangeError</code> - If no command ID is specified.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| command | <code>string</code> \| <code>ApplicationCommand</code> |  | The ID or the ApplicationCommand object to delete. |
| [guild] | <code>string</code> \| <code>Guild</code> | <code>&quot;this.guildId&quot;</code> | The ID or the Guild object where the command is located. |

<a name="ApplicationCommandManager+edit"></a>

### applicationCommandManager.edit(command, [options], [guild]) ⇒ <code>Promise.&lt;ApplicationCommand&gt;</code>
Edits an application command with the given command ID and options.

**Kind**: instance method of [<code>ApplicationCommandManager</code>](#ApplicationCommandManager)  
**Returns**: <code>Promise.&lt;ApplicationCommand&gt;</code> - A promise that resolves with the updated command object.  
**Throws**:

- <code>RangeError</code> If the application command is required but not provided.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| command | <code>string</code> \| <code>ApplicationCommand</code> |  | The command ID or the command object to edit. |
| [options] | <code>object</code> |  | The options to update the command with. |
| [guild] | <code>string</code> \| <code>Guild</code> | <code>&quot;this.guildId&quot;</code> | The guild ID or the guild object where the command is located. |

<a name="ApplicationCommandManager+_fetchId"></a>

### applicationCommandManager.\_fetchId(command, [cache], [force], [guild]) ⇒ <code>Promise.&lt;object&gt;</code>
Fetches the ID of a command from the API.

**Kind**: instance method of [<code>ApplicationCommandManager</code>](#ApplicationCommandManager)  
**Returns**: <code>Promise.&lt;object&gt;</code> - - A promise that resolves to the fetched command object.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| command | <code>string</code> \| <code>object</code> |  | The command ID or command object. |
| [cache] | <code>boolean</code> | <code>true</code> | Whether to cache the fetched command. |
| [force] | <code>boolean</code> | <code>false</code> | Whether to force fetch the command even if it is already cached. |
| [guild] | <code>string</code> \| <code>object</code> | <code>&quot;this.guildId&quot;</code> | The guild ID or guild object. Defaults to the guild ID of the instance. |

<a name="ApplicationCommandManager.transformOptions"></a>

### ApplicationCommandManager.transformOptions(options) ⇒ <code>object</code>
Transforms the given options object into the appropriate JSON format based on its type.

**Kind**: static method of [<code>ApplicationCommandManager</code>](#ApplicationCommandManager)  
**Returns**: <code>object</code> - The transformed options object in JSON format.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> | The options object to transform. |

<a name="ApplicationCommandManager.transformPayload"></a>

### ApplicationCommandManager.transformPayload(payload) ⇒ <code>Object</code>
Transforms the payload object into a standardized format for application commands.

**Kind**: static method of [<code>ApplicationCommandManager</code>](#ApplicationCommandManager)  
**Returns**: <code>Object</code> - - The transformed payload object.  
**Throws**:

- <code>RangeError</code> - If the payload is missing required fields or if the field values are out of range.


| Param | Type | Description |
| --- | --- | --- |
| payload | <code>Object</code> | The payload object containing the command details. |

