<a name="GuildBanManager"></a>

## GuildBanManager
**Kind**: global class  

* [GuildBanManager](#GuildBanManager)
    * [new GuildBanManager(guildId, client)](#new_GuildBanManager_new)
    * _instance_
        * [.cache](#GuildBanManager+cache) ⇒
        * [._add(bans, [guildId], [options])](#GuildBanManager+_add) ⇒
        * [.create(user, [options])](#GuildBanManager+create) ⇒
        * [.remove(user, reason)](#GuildBanManager+remove) ⇒
        * [.fetch(ban, options)](#GuildBanManager+fetch) ⇒
        * [._fetchId(ban, [cache], [force])](#GuildBanManager+_fetchId) ⇒
    * _static_
        * [.transformPayloadd([o])](#GuildBanManager.transformPayloadd) ⇒

<a name="new_GuildBanManager_new"></a>

### new GuildBanManager(guildId, client)
This function is a constructor for the class


| Param | Description |
| --- | --- |
| guildId | The ID of the guild you want to get the settings for. |
| client | The client that the command is being run on. |

<a name="GuildBanManager+cache"></a>

### guildBanManager.cache ⇒
It returns the Collection object.

**Kind**: instance property of [<code>GuildBanManager</code>](#GuildBanManager)  
**Returns**: The Collection class  
<a name="GuildBanManager+_add"></a>

### guildBanManager.\_add(bans, [guildId], [options]) ⇒
It adds a ban to the cache

**Kind**: instance method of [<code>GuildBanManager</code>](#GuildBanManager)  
**Returns**: A new instance of the GuildBan class.  

| Param | Description |
| --- | --- |
| bans | The ban object or ID of the ban to add to the cache. |
| [guildId] | The ID of the guild to fetch the bans from. |
| [options] | Object |

<a name="GuildBanManager+create"></a>

### guildBanManager.create(user, [options]) ⇒
It bans a user from the guild.

**Kind**: instance method of [<code>GuildBanManager</code>](#GuildBanManager)  
**Returns**: A new instance of the GuildBanManager class.  

| Param | Description |
| --- | --- |
| user | The user to ban. |
| [options] | Object |

<a name="GuildBanManager+remove"></a>

### guildBanManager.remove(user, reason) ⇒
It removes a ban from a guild

**Kind**: instance method of [<code>GuildBanManager</code>](#GuildBanManager)  
**Returns**: A ban object  

| Param | Description |
| --- | --- |
| user | The user to ban. Can be a user object, user ID, or mention. |
| reason | The reason for the ban. |

<a name="GuildBanManager+fetch"></a>

### guildBanManager.fetch(ban, options) ⇒
It fetches a list of bans from the API and returns a cache of them

**Kind**: instance method of [<code>GuildBanManager</code>](#GuildBanManager)  
**Returns**: A new cache constructor  

| Param | Description |
| --- | --- |
| ban | The ban to fetch. Can be a ban object, a user object, a user ID, or a string. |
| options | An object containing the following properties: |

<a name="GuildBanManager+_fetchId"></a>

### guildBanManager.\_fetchId(ban, [cache], [force]) ⇒
It fetches a ban from the API and adds it to the cache

**Kind**: instance method of [<code>GuildBanManager</code>](#GuildBanManager)  
**Returns**: The ban object  

| Param | Default | Description |
| --- | --- | --- |
| ban |  | The ban object or id to fetch. |
| [cache] | <code>true</code> | Whether or not to cache the ban. |
| [force] | <code>false</code> | If true, it will force the cache to be updated. |

<a name="GuildBanManager.transformPayloadd"></a>

### GuildBanManager.transformPayloadd([o]) ⇒
It takes an object with a property called days, and if that property is less than 0 or greaterthan 7, it throws a RangeError. Otherwise, it returns an object with a property calleddelete_message_days

**Kind**: static method of [<code>GuildBanManager</code>](#GuildBanManager)  
**Returns**: The payload for the request.  

| Param | Description |
| --- | --- |
| [o] | The object that contains the parameters. |

