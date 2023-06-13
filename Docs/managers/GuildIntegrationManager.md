<a name="GuildIntegrationManager"></a>

## GuildIntegrationManager
**Kind**: global class  

* [GuildIntegrationManager](#GuildIntegrationManager)
    * [new GuildIntegrationManager(guildId, client)](#new_GuildIntegrationManager_new)
    * [.cache](#GuildIntegrationManager+cache) ⇒
    * [._add(integrations, [guildId], [options])](#GuildIntegrationManager+_add) ⇒
    * [.fetch([options], [guild])](#GuildIntegrationManager+fetch) ⇒
    * [.delete([options], reason)](#GuildIntegrationManager+delete) ⇒

<a name="new_GuildIntegrationManager_new"></a>

### new GuildIntegrationManager(guildId, client)
It's a constructor function that takes in a guildId and a client, and then sets the guildId to theguildId that was passed in, and then sets the client to the client that was passed in.


| Param | Description |
| --- | --- |
| guildId | The ID of the guild you want to get the settings for. |
| client | The client that the command is being run from. |

<a name="GuildIntegrationManager+cache"></a>

### guildIntegrationManager.cache ⇒
It returns a collection of all the elements in the document with the given tag name.

**Kind**: instance property of [<code>GuildIntegrationManager</code>](#GuildIntegrationManager)  
**Returns**: The Collection class.  
<a name="GuildIntegrationManager+_add"></a>

### guildIntegrationManager.\_add(integrations, [guildId], [options]) ⇒
_add(integrations, guildId = this.guildId, options = {cache: true, force: false})

**Kind**: instance method of [<code>GuildIntegrationManager</code>](#GuildIntegrationManager)  
**Returns**: The integration object  

| Param | Description |
| --- | --- |
| integrations | The integrations object |
| [guildId] | The ID of the guild |
| [options] | cache = true, force = false |

<a name="GuildIntegrationManager+fetch"></a>

### guildIntegrationManager.fetch([options], [guild]) ⇒
It fetches the integrations for a guild

**Kind**: instance method of [<code>GuildIntegrationManager</code>](#GuildIntegrationManager)  
**Returns**: An array of objects.  

| Param | Description |
| --- | --- |
| [options] | cache = true, force = false |
| [guild] | The guild ID or guild object. |

<a name="GuildIntegrationManager+delete"></a>

### guildIntegrationManager.delete([options], reason) ⇒
It deletes an integration from a guild.

**Kind**: instance method of [<code>GuildIntegrationManager</code>](#GuildIntegrationManager)  
**Returns**: The integration object.  

| Param | Description |
| --- | --- |
| [options] | Object |
| reason | The reason for the audit log. |

