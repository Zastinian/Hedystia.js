<a name="GuildInviteManager"></a>

## GuildInviteManager
**Kind**: global class  

* [GuildInviteManager](#GuildInviteManager)
    * [new GuildInviteManager(guild, client)](#new_GuildInviteManager_new)
    * [.cache](#GuildInviteManager+cache) ⇒
    * [._add(invites, [guild], [options])](#GuildInviteManager+_add) ⇒
    * [.fetch([options])](#GuildInviteManager+fetch) ⇒
    * [.delete(invite, reason)](#GuildInviteManager+delete) ⇒

<a name="new_GuildInviteManager_new"></a>

### new GuildInviteManager(guild, client)
It's a constructor function that takes in a guild and a client, and sets the guild to the guild thatwas passed in


| Param | Description |
| --- | --- |
| guild | The guild object that the event is being emitted for. |
| client | The client that the command is being run on. |

<a name="GuildInviteManager+cache"></a>

### guildInviteManager.cache ⇒
`cache` is a getter that returns the `Collection` class

**Kind**: instance property of [<code>GuildInviteManager</code>](#GuildInviteManager)  
**Returns**: The Collection class  
<a name="GuildInviteManager+_add"></a>

### guildInviteManager.\_add(invites, [guild], [options]) ⇒
It adds an invite to the cache

**Kind**: instance method of [<code>GuildInviteManager</code>](#GuildInviteManager)  
**Returns**: The invite object  

| Param | Description |
| --- | --- |
| invites | The invite code or invite object. |
| [guild] | The guild the invite is for. |
| [options] | cache = true, force = false |

<a name="GuildInviteManager+fetch"></a>

### guildInviteManager.fetch([options]) ⇒
It fetches all the invites for the guild and returns a new cache of the invites

**Kind**: instance method of [<code>GuildInviteManager</code>](#GuildInviteManager)  
**Returns**: A new instance of the cache constructor.  

| Param | Description |
| --- | --- |
| [options] | Object |

<a name="GuildInviteManager+delete"></a>

### guildInviteManager.delete(invite, reason) ⇒
It deletes an invite

**Kind**: instance method of [<code>GuildInviteManager</code>](#GuildInviteManager)  
**Returns**: The invite object  

| Param | Description |
| --- | --- |
| invite | The invite code or invite object to delete. |
| reason | The reason for deleting the invite. |

