<a name="GuildManager"></a>

## GuildManager ⇐ <code>Base</code>
Represents a manager for guild-related operations.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [GuildManager](#GuildManager) ⇐ <code>Base</code>
    * [new GuildManager(client, websocket)](#new_GuildManager_new)
    * _instance_
        * [.cache](#GuildManager+cache) ⇒
        * [._add(guilds, [options])](#GuildManager+_add) ⇒ <code>Guild</code> \| <code>null</code>
        * [.create(options)](#GuildManager+create) ⇒ <code>Promise</code>
        * [.fetch(guild, options)](#GuildManager+fetch) ⇒ <code>Promise.&lt;Cache&gt;</code>
        * [._fetchId(guild, [options])](#GuildManager+_fetchId) ⇒ <code>Promise.&lt;string&gt;</code>
        * [.edit(guilds, [options])](#GuildManager+edit) ⇒ <code>Promise.&lt;Guild&gt;</code>
        * [.delete(guild)](#GuildManager+delete) ⇒ <code>Promise.&lt;Guild&gt;</code>
        * [.fetchPreview(guild)](#GuildManager+fetchPreview) ⇒ <code>Promise.&lt;GuildPreview&gt;</code>
        * [.modifyMFALevel(guild, [options])](#GuildManager+modifyMFALevel) ⇒ <code>Promise.&lt;Guild&gt;</code>
    * _static_
        * [.transformPayload(payload)](#GuildManager.transformPayload) ⇒ <code>Object</code>
        * [.transformOptions(o)](#GuildManager.transformOptions) ⇒ <code>Object</code>

<a name="new_GuildManager_new"></a>

### new GuildManager(client, websocket)
Constructs a new instance of the class.


| Param | Type | Description |
| --- | --- | --- |
| client | <code>Client</code> | The client object. |
| websocket | <code>WebSocket</code> | The WebSocket object. |

<a name="GuildManager+cache"></a>

### guildManager.cache ⇒
Getter method for the cache property.

**Kind**: instance property of [<code>GuildManager</code>](#GuildManager)  
**Returns**: The Collection object representing the cache.  
<a name="GuildManager+_add"></a>

### guildManager.\_add(guilds, [options]) ⇒ <code>Guild</code> \| <code>null</code>
Adds a guild to the cache and returns the guild object.

**Kind**: instance method of [<code>GuildManager</code>](#GuildManager)  
**Returns**: <code>Guild</code> \| <code>null</code> - The guild object that was added to the cache, or null if the guild is not provided.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| guilds | <code>string</code> \| <code>Guild</code> |  | The guild ID or the guild object to add. |
| [options] | <code>object</code> |  | Additional options for adding the guild. |
| [options.cache] | <code>boolean</code> | <code>true</code> | Whether to cache the guild object. |
| [options.force] | <code>boolean</code> | <code>false</code> | Whether to force adding the guild even if it already exists in the cache. |

<a name="GuildManager+create"></a>

### guildManager.create(options) ⇒ <code>Promise</code>
Creates a new guild with the given options.

**Kind**: instance method of [<code>GuildManager</code>](#GuildManager)  
**Returns**: <code>Promise</code> - A promise that resolves with the created guild.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options for creating the guild. |

<a name="GuildManager+fetch"></a>

### guildManager.fetch(guild, options) ⇒ <code>Promise.&lt;Cache&gt;</code>
Fetches guild information from the Discord API.

**Kind**: instance method of [<code>GuildManager</code>](#GuildManager)  

| Param | Type | Description |
| --- | --- | --- |
| guild | <code>string</code> \| <code>object</code> | The guild ID or guild object to fetch. |
| options | <code>object</code> | Additional options for the fetch request. |
| options.cache | <code>boolean</code> | Whether to cache the fetched guild information. |
| options.force | <code>boolean</code> | Whether to force fetch the guild information even if it is already cached. |
| options.before | <code>string</code> | The ID of the guild to fetch guilds before. |
| options.after | <code>string</code> | The ID of the guild to fetch guilds after. |
| options.limit | <code>number</code> | The maximum number of guilds to fetch. |

<a name="GuildManager+_fetchId"></a>

### guildManager.\_fetchId(guild, [options]) ⇒ <code>Promise.&lt;string&gt;</code>
Fetches the ID of a guild asynchronously.

**Kind**: instance method of [<code>GuildManager</code>](#GuildManager)  
**Returns**: <code>Promise.&lt;string&gt;</code> - - A promise that resolves with the fetched guild ID.  

| Param | Type | Description |
| --- | --- | --- |
| guild | <code>string</code> \| <code>Guild</code> | The guild or guild ID to fetch the ID for. |
| [options] | <code>Object</code> | Additional options for the fetch. |
| [options.cache] | <code>boolean</code> | Whether to cache the fetched ID. |
| [options.force] | <code>boolean</code> | Whether to force the fetch even if the ID is already cached. |
| [options.withCounts] | <code>boolean</code> | Whether to include counts in the fetch query. |

<a name="GuildManager+edit"></a>

### guildManager.edit(guilds, [options]) ⇒ <code>Promise.&lt;Guild&gt;</code>
Edits a guild with the given options.

**Kind**: instance method of [<code>GuildManager</code>](#GuildManager)  
**Returns**: <code>Promise.&lt;Guild&gt;</code> - A promise that resolves with the edited guild.  

| Param | Type | Description |
| --- | --- | --- |
| guilds | <code>string</code> \| <code>Guild</code> | The ID or the Guild object of the guild to edit. |
| [options] | <code>Object</code> | The options to edit the guild with. |
| [options.reason] | <code>string</code> | The reason for the edit. |

<a name="GuildManager+delete"></a>

### guildManager.delete(guild) ⇒ <code>Promise.&lt;Guild&gt;</code>
Deletes a guild from the server.

**Kind**: instance method of [<code>GuildManager</code>](#GuildManager)  
**Returns**: <code>Promise.&lt;Guild&gt;</code> - - The deleted guild.  

| Param | Type | Description |
| --- | --- | --- |
| guild | <code>string</code> \| <code>Guild</code> | The guild to delete. Can be either a guild ID or a Guild object. |

<a name="GuildManager+fetchPreview"></a>

### guildManager.fetchPreview(guild) ⇒ <code>Promise.&lt;GuildPreview&gt;</code>
Fetches the preview information for a guild.

**Kind**: instance method of [<code>GuildManager</code>](#GuildManager)  
**Returns**: <code>Promise.&lt;GuildPreview&gt;</code> - - A promise that resolves to a GuildPreview object.  

| Param | Type | Description |
| --- | --- | --- |
| guild | <code>string</code> \| <code>Guild</code> | The guild ID or guild object. |

<a name="GuildManager+modifyMFALevel"></a>

### guildManager.modifyMFALevel(guild, [options]) ⇒ <code>Promise.&lt;Guild&gt;</code>
Modifies the MFA (Multi-Factor Authentication) level for a guild.

**Kind**: instance method of [<code>GuildManager</code>](#GuildManager)  
**Returns**: <code>Promise.&lt;Guild&gt;</code> - A promise that resolves with the modified guild.  
**Throws**:

- <code>RangeError</code> If no guild ID is specified.


| Param | Type | Description |
| --- | --- | --- |
| guild | <code>string</code> \| <code>Guild</code> | The guild or guild ID to modify. |
| [options] | <code>Object</code> | Additional options for the modification. |
| [options.reason] | <code>string</code> | The reason for the modification. |
| [options.mfaLevel] | <code>string</code> \| <code>number</code> | The new MFA level to set for the guild. |

<a name="GuildManager.transformPayload"></a>

### GuildManager.transformPayload(payload) ⇒ <code>Object</code>
Transforms the given payload object into a new format.

**Kind**: static method of [<code>GuildManager</code>](#GuildManager)  
**Returns**: <code>Object</code> - - The transformed payload object.  

| Param | Type | Description |
| --- | --- | --- |
| payload | <code>Object</code> | The payload object to transform. |

<a name="GuildManager.transformOptions"></a>

### GuildManager.transformOptions(o) ⇒ <code>Object</code>
Transforms the options object by extracting the "before" and "after" propertiesand setting them to their corresponding IDs if they are strings, or undefined if theyare not provided. The "limit" property is set to 200 if it is not provided.

**Kind**: static method of [<code>GuildManager</code>](#GuildManager)  
**Returns**: <code>Object</code> - - The transformed options object.  

| Param | Type | Description |
| --- | --- | --- |
| o | <code>Object</code> | The options object. |
| [o.before] | <code>string</code> | The "before" property of the options object. |
| [o.after] | <code>string</code> | The "after" property of the options object. |
| [o.limit] | <code>number</code> | The "limit" property of the options object. |

