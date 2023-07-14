<a name="GuildPruneManager"></a>

## GuildPruneManager ⇐ <code>Base</code>
Represents a manager for pruning members in a guild.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [GuildPruneManager](#GuildPruneManager) ⇐ <code>Base</code>
    * [new GuildPruneManager(guildid, client)](#new_GuildPruneManager_new)
    * _instance_
        * [.prune([options])](#GuildPruneManager+prune) ⇒ <code>boolean</code>
        * [.fetchCount([options])](#GuildPruneManager+fetchCount) ⇒ <code>Promise.&lt;number&gt;</code>
    * _static_
        * [.transformRoles(roles)](#GuildPruneManager.transformRoles) ⇒ <code>Array</code>
        * [.transformOptions(o)](#GuildPruneManager.transformOptions) ⇒ <code>Object</code>

<a name="new_GuildPruneManager_new"></a>

### new GuildPruneManager(guildid, client)
Constructs a new instance of the class.


| Param | Type | Description |
| --- | --- | --- |
| guildid | <code>string</code> | The ID of the guild. |
| client | <code>Client</code> | The client instance. |

<a name="GuildPruneManager+prune"></a>

### guildPruneManager.prune([options]) ⇒ <code>boolean</code>
Prunes (removes) inactive members from the guild based on the specified options.

**Kind**: instance method of [<code>GuildPruneManager</code>](#GuildPruneManager)  
**Returns**: <code>boolean</code> - - True if the prune was successful, false otherwise.  
**Throws**:

- <code>Error</code> - If an error occurs during the prune process.


| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | The options for pruning. |
| [options.reason] | <code>string</code> | The reason for the prune. |

<a name="GuildPruneManager+fetchCount"></a>

### guildPruneManager.fetchCount([options]) ⇒ <code>Promise.&lt;number&gt;</code>
Fetches the count of pruned members in a guild based on the given options.

**Kind**: instance method of [<code>GuildPruneManager</code>](#GuildPruneManager)  
**Returns**: <code>Promise.&lt;number&gt;</code> - - A promise that resolves to the prune count.  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | The options for fetching the prune count. |

<a name="GuildPruneManager.transformRoles"></a>

### GuildPruneManager.transformRoles(roles) ⇒ <code>Array</code>
Transforms the given roles object into an array of role IDs.

**Kind**: static method of [<code>GuildPruneManager</code>](#GuildPruneManager)  
**Returns**: <code>Array</code> - - An array of role IDs.  

| Param | Type | Description |
| --- | --- | --- |
| roles | <code>Object</code> \| <code>Array</code> | The roles object to transform. |

<a name="GuildPruneManager.transformOptions"></a>

### GuildPruneManager.transformOptions(o) ⇒ <code>Object</code>
Transforms the options object for server deletion.

**Kind**: static method of [<code>GuildPruneManager</code>](#GuildPruneManager)  
**Returns**: <code>Object</code> - - The transformed options object.  
**Throws**:

- <code>RangeError</code> - If the days value is not between 1 and 30.


| Param | Type | Description |
| --- | --- | --- |
| o | <code>Object</code> | The options object. |
| o.days | <code>number</code> | The number of days for server deletion. Must be between 1 and 30. |
| o.count | <code>boolean</code> | Whether to include the complete prune count. Default is true. |
| o.roles | <code>Array.&lt;string&gt;</code> | The roles to include in the deletion. Default is undefined. |

