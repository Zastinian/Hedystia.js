<a name="GuildPruneManager"></a>

## GuildPruneManager
**Kind**: global class  

* [GuildPruneManager](#GuildPruneManager)
    * [new GuildPruneManager(guildid, client)](#new_GuildPruneManager_new)
    * _instance_
        * [.prune([options])](#GuildPruneManager+prune) ⇒
        * [.fetchCount([options])](#GuildPruneManager+fetchCount) ⇒
    * _static_
        * [.transformRoles([roles])](#GuildPruneManager.transformRoles) ⇒
        * [.transformOptions([o])](#GuildPruneManager.transformOptions) ⇒

<a name="new_GuildPruneManager_new"></a>

### new GuildPruneManager(guildid, client)
`constructor(guildid, client)` is a function that takes two arguments, `guildid` and `client`, andsets the `guildid` property of the class to the `guildid` argument, and the `client` property of theclass to the `client` argument


| Param | Description |
| --- | --- |
| guildid | The ID of the guild you want to get the settings for. |
| client | The client object |

<a name="GuildPruneManager+prune"></a>

### guildPruneManager.prune([options]) ⇒
It prunes members from a guild

**Kind**: instance method of [<code>GuildPruneManager</code>](#GuildPruneManager)  
**Returns**: The number of members that were pruned.  

| Param | Description |
| --- | --- |
| [options] | An object containing the following parameters: |

<a name="GuildPruneManager+fetchCount"></a>

### guildPruneManager.fetchCount([options]) ⇒
It fetches the prune count of a guild

**Kind**: instance method of [<code>GuildPruneManager</code>](#GuildPruneManager)  
**Returns**: The number of members that would be pruned.  

| Param | Description |
| --- | --- |
| [options] | An object containing the following parameters: |

<a name="GuildPruneManager.transformRoles"></a>

### GuildPruneManager.transformRoles([roles]) ⇒
It takes an array of role objects or strings and returns an array of role IDs

**Kind**: static method of [<code>GuildPruneManager</code>](#GuildPruneManager)  
**Returns**: An array of strings  

| Param | Description |
| --- | --- |
| [roles] | The roles to check against. This can be a single role, an array of roles, or an object with a `roles` property. |

<a name="GuildPruneManager.transformOptions"></a>

### GuildPruneManager.transformOptions([o]) ⇒
It takes an object with the keys `days`, `count`, and `roles`, and returns an object with the keys`days`, `complete_prune_count`, and `include_roles`

**Kind**: static method of [<code>GuildPruneManager</code>](#GuildPruneManager)  
**Returns**: The transformed options for the prune command.  

| Param | Description |
| --- | --- |
| [o] | The options object. |

