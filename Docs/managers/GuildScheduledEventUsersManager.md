<a name="GuildScheduledEventUsersManager"></a>

## GuildScheduledEventUsersManager ⇐ <code>Base</code>
Represents a manager for handling guild scheduled event users.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [GuildScheduledEventUsersManager](#GuildScheduledEventUsersManager) ⇐ <code>Base</code>
    * [new GuildScheduledEventUsersManager(event, guildId, client)](#new_GuildScheduledEventUsersManager_new)
    * _instance_
        * [.resolve(scheduledEventUser, event)](#GuildScheduledEventUsersManager+resolve) ⇒ <code>GuildScheduledEventUser</code> \| <code>null</code>
        * [.fetch([event], [options])](#GuildScheduledEventUsersManager+fetch) ⇒ <code>Promise.&lt;RaidenCol&gt;</code>
    * _static_
        * [.transformQuery(query)](#GuildScheduledEventUsersManager.transformQuery) ⇒ <code>Object</code>

<a name="new_GuildScheduledEventUsersManager_new"></a>

### new GuildScheduledEventUsersManager(event, guildId, client)
Constructs a new instance of the class.


| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | The event object. |
| guildId | <code>string</code> | The ID of the guild. |
| client | <code>Client</code> | The client object. |

<a name="GuildScheduledEventUsersManager+resolve"></a>

### guildScheduledEventUsersManager.resolve(scheduledEventUser, event) ⇒ <code>GuildScheduledEventUser</code> \| <code>null</code>
Resolves a scheduled event user and returns a GuildScheduledEventUser object.

**Kind**: instance method of [<code>GuildScheduledEventUsersManager</code>](#GuildScheduledEventUsersManager)  
**Returns**: <code>GuildScheduledEventUser</code> \| <code>null</code> - - The resolved GuildScheduledEventUser object or null if scheduledEventUser is falsy.  

| Param | Type | Description |
| --- | --- | --- |
| scheduledEventUser | <code>string</code> \| <code>null</code> | The scheduled event user to resolve. |
| event | <code>object</code> | The event object. |

<a name="GuildScheduledEventUsersManager+fetch"></a>

### guildScheduledEventUsersManager.fetch([event], [options]) ⇒ <code>Promise.&lt;RaidenCol&gt;</code>
Fetches the users associated with a scheduled event in a guild.

**Kind**: instance method of [<code>GuildScheduledEventUsersManager</code>](#GuildScheduledEventUsersManager)  
**Returns**: <code>Promise.&lt;RaidenCol&gt;</code> - - A promise that resolves to a RaidenCol object containing the fetched users.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [event] | <code>Event</code> \| <code>string</code> | <code>this.event</code> | The event object or event ID. |
| [options] | <code>object</code> |  | Additional options for the fetch request. |

<a name="GuildScheduledEventUsersManager.transformQuery"></a>

### GuildScheduledEventUsersManager.transformQuery(query) ⇒ <code>Object</code>
Transforms a query object into a formatted query object with default values andproper type checking.

**Kind**: static method of [<code>GuildScheduledEventUsersManager</code>](#GuildScheduledEventUsersManager)  
**Returns**: <code>Object</code> - - The transformed query object.  

| Param | Type | Description |
| --- | --- | --- |
| query | <code>Object</code> | The query object to transform. |

