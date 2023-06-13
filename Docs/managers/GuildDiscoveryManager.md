<a name="GuildDiscoveryManager"></a>

## GuildDiscoveryManager
**Kind**: global class  

* [GuildDiscoveryManager](#GuildDiscoveryManager)
    * [new GuildDiscoveryManager(guildId, client)](#new_GuildDiscoveryManager_new)
    * _instance_
        * [._add(discovery)](#GuildDiscoveryManager+_add) ⇒
        * [.fetch([guild])](#GuildDiscoveryManager+fetch) ⇒
        * [.edit([guild], [options])](#GuildDiscoveryManager+edit) ⇒
    * _static_
        * [.transformPayload([payload])](#GuildDiscoveryManager.transformPayload) ⇒

<a name="new_GuildDiscoveryManager_new"></a>

### new GuildDiscoveryManager(guildId, client)
This function is a constructor for the class


| Param | Description |
| --- | --- |
| guildId | The ID of the guild you want to get the settings for. |
| client | The client that the command is being run on. |

<a name="GuildDiscoveryManager+_add"></a>

### guildDiscoveryManager.\_add(discovery) ⇒
`_add` is a function that takes a `discovery` parameter and returns a new `GuildDiscovery` object.

**Kind**: instance method of [<code>GuildDiscoveryManager</code>](#GuildDiscoveryManager)  
**Returns**: A new GuildDiscovery object  

| Param | Description |
| --- | --- |
| discovery | The discovery object or ID |

<a name="GuildDiscoveryManager+fetch"></a>

### guildDiscoveryManager.fetch([guild]) ⇒
`fetch` fetches the discovery metadata for a guild

**Kind**: instance method of [<code>GuildDiscoveryManager</code>](#GuildDiscoveryManager)  
**Returns**: The discovery metadata for the guild.  

| Param | Description |
| --- | --- |
| [guild] | The guild to fetch the discovery metadata for. |

<a name="GuildDiscoveryManager+edit"></a>

### guildDiscoveryManager.edit([guild], [options]) ⇒
`edit` edits the discovery metadata of a guild

**Kind**: instance method of [<code>GuildDiscoveryManager</code>](#GuildDiscoveryManager)  
**Returns**: The discovery object  

| Param | Description |
| --- | --- |
| [guild] | The guild ID or guild object to edit the discovery metadata for. |
| [options] | Object |

<a name="GuildDiscoveryManager.transformPayload"></a>

### GuildDiscoveryManager.transformPayload([payload]) ⇒
It takes a payload object and returns a new object with the same keys, but with the valuestransformed to match the API's expectations

**Kind**: static method of [<code>GuildDiscoveryManager</code>](#GuildDiscoveryManager)  
**Returns**: The transformed payload.  

| Param | Description |
| --- | --- |
| [payload] | The payload that is sent to the API. |

