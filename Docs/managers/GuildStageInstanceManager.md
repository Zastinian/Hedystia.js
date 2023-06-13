<a name="GuildStageInstanceManger"></a>

## GuildStageInstanceManger
**Kind**: global class  

* [GuildStageInstanceManger](#GuildStageInstanceManger)
    * [new GuildStageInstanceManger(guildId, client)](#new_GuildStageInstanceManger_new)
    * [.cache](#GuildStageInstanceManger+cache) ⇒

<a name="new_GuildStageInstanceManger_new"></a>

### new GuildStageInstanceManger(guildId, client)
`constructor` is a function that runs when a new instance of the class is created


| Param | Description |
| --- | --- |
| guildId | The ID of the guild you want to get the settings for. |
| client | The client that the command is being run on. |

<a name="GuildStageInstanceManger+cache"></a>

### guildStageInstanceManger.cache ⇒
`return super.cache.filter((o) => o.guildId === this.guildId)`The `super` keyword is used to access and call functions on an object's parent

**Kind**: instance property of [<code>GuildStageInstanceManger</code>](#GuildStageInstanceManger)  
**Returns**: The cache property is being returned.  
