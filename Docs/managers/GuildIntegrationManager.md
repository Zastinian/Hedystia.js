<a name="GuildIntegrationManager"></a>

## GuildIntegrationManager ⇐ <code>Base</code>
Represents a manager for guild integrations.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [GuildIntegrationManager](#GuildIntegrationManager) ⇐ <code>Base</code>
    * [new GuildIntegrationManager(guildId, client)](#new_GuildIntegrationManager_new)
    * [.cache](#GuildIntegrationManager+cache) ⇒
    * [._add(integrations, [guildId], [options])](#GuildIntegrationManager+_add) ⇒ <code>Integration</code> \| <code>null</code>
    * [.fetch([options], [guild])](#GuildIntegrationManager+fetch) ⇒ <code>Promise.&lt;Cache&gt;</code>
    * [.delete(options, reason)](#GuildIntegrationManager+delete) ⇒ <code>Promise</code>

<a name="new_GuildIntegrationManager_new"></a>

### new GuildIntegrationManager(guildId, client)
Constructs a new instance of the class.


| Param | Type | Description |
| --- | --- | --- |
| guildId | <code>string</code> | The ID of the guild. |
| client | <code>Client</code> | The client instance. |

<a name="GuildIntegrationManager+cache"></a>

### guildIntegrationManager.cache ⇒
Getter method for the cache property.

**Kind**: instance property of [<code>GuildIntegrationManager</code>](#GuildIntegrationManager)  
**Returns**: The Collection object representing the cache.  
<a name="GuildIntegrationManager+_add"></a>

### guildIntegrationManager.\_add(integrations, [guildId], [options]) ⇒ <code>Integration</code> \| <code>null</code>
Adds an integration to the guild.

**Kind**: instance method of [<code>GuildIntegrationManager</code>](#GuildIntegrationManager)  
**Returns**: <code>Integration</code> \| <code>null</code> - - The added integration or null if integrations is falsy.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| integrations | <code>string</code> \| <code>Integration</code> |  | The integration ID or the integration object. |
| [guildId] | <code>string</code> | <code>&quot;this.guildId&quot;</code> | The ID of the guild to add the integration to. |
| [options] | <code>object</code> | <code>{cache: true, force: false}</code> | Additional options for adding the integration. |
| [options.cache] | <code>boolean</code> | <code>true</code> | Whether to cache the integration. |
| [options.force] | <code>boolean</code> | <code>false</code> | Whether to force adding the integration even if it is already cached. |

<a name="GuildIntegrationManager+fetch"></a>

### guildIntegrationManager.fetch([options], [guild]) ⇒ <code>Promise.&lt;Cache&gt;</code>
Fetches the integrations for a guild.

**Kind**: instance method of [<code>GuildIntegrationManager</code>](#GuildIntegrationManager)  
**Returns**: <code>Promise.&lt;Cache&gt;</code> - - A promise that resolves to a cache object containing the fetched integrations.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | Optional parameters for the fetch request. |
| [options.cache] | <code>boolean</code> |  | Whether to cache the fetched data. |
| [options.force] | <code>boolean</code> |  | Whether to force the fetch request even if the data is already cached. |
| [guild] | <code>string</code> \| <code>Guild</code> | <code>&quot;this.guildId&quot;</code> | The guild to fetch integrations for. Defaults to the current guild. |

<a name="GuildIntegrationManager+delete"></a>

### guildIntegrationManager.delete(options, reason) ⇒ <code>Promise</code>
Deletes an integration from a guild.

**Kind**: instance method of [<code>GuildIntegrationManager</code>](#GuildIntegrationManager)  
**Returns**: <code>Promise</code> - A promise that resolves when the integration is deleted and the deleted integration is added to the list of deleted integrations.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options for deleting the integration. |
| options.guild | <code>string</code> | The ID of the guild where the integration is located. |
| options.integration | <code>string</code> | The ID of the integration to delete. |
| reason | <code>string</code> | The reason for deleting the integration. |

