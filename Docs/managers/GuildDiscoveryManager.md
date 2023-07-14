<a name="GuildDiscoveryManager"></a>

## GuildDiscoveryManager ⇐ <code>Base</code>
Represents a manager for guild discovery settings.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [GuildDiscoveryManager](#GuildDiscoveryManager) ⇐ <code>Base</code>
    * [new GuildDiscoveryManager(guildId, client)](#new_GuildDiscoveryManager_new)
    * _instance_
        * [._add(discovery)](#GuildDiscoveryManager+_add) ⇒ <code>GuildDiscovery</code> \| <code>null</code>
        * [.fetch([guild])](#GuildDiscoveryManager+fetch) ⇒ <code>Promise.&lt;DiscoveryMetadata&gt;</code>
        * [.edit(guild, options)](#GuildDiscoveryManager+edit) ⇒ <code>Promise</code>
    * _static_
        * [.transformPayload(payload)](#GuildDiscoveryManager.transformPayload) ⇒ <code>Object</code>

<a name="new_GuildDiscoveryManager_new"></a>

### new GuildDiscoveryManager(guildId, client)
Constructs a new instance of the class.


| Param | Type | Description |
| --- | --- | --- |
| guildId | <code>string</code> | The ID of the guild. |
| client | <code>Client</code> | The client object. |

<a name="GuildDiscoveryManager+_add"></a>

### guildDiscoveryManager.\_add(discovery) ⇒ <code>GuildDiscovery</code> \| <code>null</code>
Adds a GuildDiscovery object to the guild's discovery settings.

**Kind**: instance method of [<code>GuildDiscoveryManager</code>](#GuildDiscoveryManager)  
**Returns**: <code>GuildDiscovery</code> \| <code>null</code> - - The added GuildDiscovery object or null if discovery is falsy.  

| Param | Type | Description |
| --- | --- | --- |
| discovery | <code>string</code> \| <code>GuildDiscovery</code> | The discovery object or the guild ID. |

<a name="GuildDiscoveryManager+fetch"></a>

### guildDiscoveryManager.fetch([guild]) ⇒ <code>Promise.&lt;DiscoveryMetadata&gt;</code>
Fetches the discovery metadata for a guild.

**Kind**: instance method of [<code>GuildDiscoveryManager</code>](#GuildDiscoveryManager)  
**Returns**: <code>Promise.&lt;DiscoveryMetadata&gt;</code> - - A promise that resolves to the discovery metadata.  
**Throws**:

- <code>RangeError</code> - If the guild ID is not provided.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [guild] | <code>string</code> \| <code>Guild</code> | <code>&quot;this.guildId&quot;</code> | The guild ID or Guild object to fetch the metadata for. |

<a name="GuildDiscoveryManager+edit"></a>

### guildDiscoveryManager.edit(guild, options) ⇒ <code>Promise</code>
Edits the discovery metadata for a guild.

**Kind**: instance method of [<code>GuildDiscoveryManager</code>](#GuildDiscoveryManager)  
**Returns**: <code>Promise</code> - A promise that resolves with the updated discovery metadata.  
**Throws**:

- <code>RangeError</code> If the guild is not provided.


| Param | Type | Description |
| --- | --- | --- |
| guild | <code>string</code> \| <code>Guild</code> | The guild ID or guild object to edit the discovery metadata for. |
| options | <code>Object</code> | The options to update the discovery metadata. |

<a name="GuildDiscoveryManager.transformPayload"></a>

### GuildDiscoveryManager.transformPayload(payload) ⇒ <code>Object</code>
Transforms the given payload object into a new object with specific properties.

**Kind**: static method of [<code>GuildDiscoveryManager</code>](#GuildDiscoveryManager)  
**Returns**: <code>Object</code> - - The transformed object.  

| Param | Type | Description |
| --- | --- | --- |
| payload | <code>Object</code> | The payload object to transform. |

