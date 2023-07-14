<a name="GuildMemberManager"></a>

## GuildMemberManager ⇐ <code>Base</code>
Represents a manager for guild members.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [GuildMemberManager](#GuildMemberManager) ⇐ <code>Base</code>
    * [new GuildMemberManager(guildId, client)](#new_GuildMemberManager_new)
    * _instance_
        * [.cache](#GuildMemberManager+cache) ⇒
        * [._add(members, [guildId], [options])](#GuildMemberManager+_add) ⇒ <code>GuildMember</code> \| <code>null</code>
        * [.fetch(member, options)](#GuildMemberManager+fetch)
        * [.list([options])](#GuildMemberManager+list) ⇒ <code>Promise.&lt;Cache&gt;</code>
        * [.search(options)](#GuildMemberManager+search) ⇒ <code>Promise.&lt;Cache&gt;</code>
        * [.kick(member, reason)](#GuildMemberManager+kick) ⇒ <code>Promise.&lt;GuildMember&gt;</code>
        * [.ban(member, [options])](#GuildMemberManager+ban) ⇒ <code>Promise.&lt;GuildMember&gt;</code>
        * [.unban(user, reason)](#GuildMemberManager+unban) ⇒ <code>User</code>
        * [.edit(member, [options])](#GuildMemberManager+edit) ⇒ <code>Promise.&lt;GuildMember&gt;</code>
        * [._fetchId(member, [options])](#GuildMemberManager+_fetchId) ⇒ <code>Promise.&lt;Object&gt;</code>
    * _static_
        * [.transformTimeout(date)](#GuildMemberManager.transformTimeout) ⇒ <code>string</code> \| <code>null</code>
        * [.transformOptions(options, [edit])](#GuildMemberManager.transformOptions) ⇒ <code>Object</code>
        * [.transformPayload(payload)](#GuildMemberManager.transformPayload) ⇒ <code>string</code> \| <code>Array.&lt;string&gt;</code> \| <code>undefined</code>

<a name="new_GuildMemberManager_new"></a>

### new GuildMemberManager(guildId, client)
Constructs a new instance of the class.


| Param | Type | Description |
| --- | --- | --- |
| guildId | <code>string</code> | The ID of the guild. |
| client | <code>Client</code> | The client object. |

<a name="GuildMemberManager+cache"></a>

### guildMemberManager.cache ⇒
Returns the cache object.

**Kind**: instance property of [<code>GuildMemberManager</code>](#GuildMemberManager)  
**Returns**: The cache object.  
<a name="GuildMemberManager+_add"></a>

### guildMemberManager.\_add(members, [guildId], [options]) ⇒ <code>GuildMember</code> \| <code>null</code>
Adds a member to the guild.

**Kind**: instance method of [<code>GuildMemberManager</code>](#GuildMemberManager)  
**Returns**: <code>GuildMember</code> \| <code>null</code> - The added member object  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| members | <code>string</code> \| <code>GuildMember</code> |  | The member to add. Can be either a string representing the member's ID or a GuildMember object. |
| [guildId] | <code>string</code> | <code>&quot;this.guildId&quot;</code> | The ID of the guild to add the member to. |
| [options] | <code>object</code> | <code>{cache: true, force: false}</code> | Additional options for adding the member. |
| [options.cache] | <code>boolean</code> | <code>true</code> | Whether to cache the member object. |
| [options.force] | <code>boolean</code> | <code>false</code> | Whether to force adding the member even if it already exists in the cache. |

<a name="GuildMemberManager+fetch"></a>

### guildMemberManager.fetch(member, options)
Fetches guild members from the server.

**Kind**: instance method of [<code>GuildMemberManager</code>](#GuildMemberManager)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| member | <code>string</code> \| <code>object</code> |  | The member to fetch. Can be a member ID or a member object. |
| options | <code>object</code> |  | Additional options for the fetch. |
| [options.cache] | <code>boolean</code> | <code>true</code> | Whether to cache the fetched members. |
| [options.force] | <code>boolean</code> | <code>false</code> | Whether to force fetch the members even if they are already cached. |
| [options.query] | <code>string</code> | <code>&quot;\&quot;\&quot;&quot;</code> | A query string to filter the members. |
| [options.limit] | <code>number</code> | <code>1000</code> | The maximum number of members to fetch. |
| [options.presences] | <code>boolean</code> |  | Whether to include |

<a name="GuildMemberManager+list"></a>

### guildMemberManager.list([options]) ⇒ <code>Promise.&lt;Cache&gt;</code>
Retrieves a list of members from the guild.

**Kind**: instance method of [<code>GuildMemberManager</code>](#GuildMemberManager)  
**Returns**: <code>Promise.&lt;Cache&gt;</code> - - A promise that resolves to a Cache object containing the retrieved members.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | The options for listing members. |
| [options.limit] | <code>number</code> | <code>50</code> | The maximum number of members to retrieve. |

<a name="GuildMemberManager+search"></a>

### guildMemberManager.search(options) ⇒ <code>Promise.&lt;Cache&gt;</code>
Searches for members in a guild based on the provided query.

**Kind**: instance method of [<code>GuildMemberManager</code>](#GuildMemberManager)  
**Returns**: <code>Promise.&lt;Cache&gt;</code> - A Promise that resolves to a Cache object containing the search results.  
**Throws**:

- <code>RangeError</code> If the query is not provided.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | <code>Object</code> |  | The search options. |
| options.query | <code>string</code> |  | The query to search for. |
| [options.limit] | <code>number</code> | <code>50</code> | The maximum number of results to return. |

<a name="GuildMemberManager+kick"></a>

### guildMemberManager.kick(member, reason) ⇒ <code>Promise.&lt;GuildMember&gt;</code>
Kicks a member from the guild.

**Kind**: instance method of [<code>GuildMemberManager</code>](#GuildMemberManager)  
**Returns**: <code>Promise.&lt;GuildMember&gt;</code> - - The deleted member object.  
**Throws**:

- <code>RangeError</code> - If a valid GuildMember is not specified.


| Param | Type | Description |
| --- | --- | --- |
| member | <code>string</code> \| <code>GuildMember</code> | The member to kick. Can be either a string representing the member's ID or a GuildMember object. |
| reason | <code>string</code> | The reason for kicking the member. Optional. |

<a name="GuildMemberManager+ban"></a>

### guildMemberManager.ban(member, [options]) ⇒ <code>Promise.&lt;GuildMember&gt;</code>
Bans a member from the guild.

**Kind**: instance method of [<code>GuildMemberManager</code>](#GuildMemberManager)  
**Returns**: <code>Promise.&lt;GuildMember&gt;</code> - - The banned member.  

| Param | Type | Description |
| --- | --- | --- |
| member | <code>GuildMember</code> | The member to ban. |
| [options] | <code>Object</code> | Additional options for the ban. |

<a name="GuildMemberManager+unban"></a>

### guildMemberManager.unban(user, reason) ⇒ <code>User</code>
Unbans a user from the guild.

**Kind**: instance method of [<code>GuildMemberManager</code>](#GuildMemberManager)  
**Returns**: <code>User</code> - - The unbanned user.  
**Throws**:

- <code>Error</code> - If the user or guild is not found.


| Param | Type | Description |
| --- | --- | --- |
| user | <code>User</code> | The user to unban. |
| reason | <code>string</code> | The reason for unbanning the user. |

<a name="GuildMemberManager+edit"></a>

### guildMemberManager.edit(member, [options]) ⇒ <code>Promise.&lt;GuildMember&gt;</code>
Edits a guild member with the specified options.

**Kind**: instance method of [<code>GuildMemberManager</code>](#GuildMemberManager)  
**Returns**: <code>Promise.&lt;GuildMember&gt;</code> - A promise that resolves with the edited GuildMember object.  

| Param | Type | Description |
| --- | --- | --- |
| member | <code>string</code> \| <code>GuildMember</code> | The member to edit. Can be either a member ID or a GuildMember object. |
| [options] | <code>Object</code> | The options for editing the member. |
| [options.reason] | <code>string</code> | The reason for the edit. |

<a name="GuildMemberManager+_fetchId"></a>

### guildMemberManager.\_fetchId(member, [options]) ⇒ <code>Promise.&lt;Object&gt;</code>
Fetches the ID of a member from the guild.

**Kind**: instance method of [<code>GuildMemberManager</code>](#GuildMemberManager)  
**Returns**: <code>Promise.&lt;Object&gt;</code> - - A promise that resolves to the fetched member object.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| member | <code>string</code> \| <code>Object</code> |  | The member object or the ID of the member. |
| [options] | <code>Object</code> |  | Additional options for the fetch. |
| [options.force] | <code>boolean</code> |  | Whether to force the fetch even if the member is already cached. |
| [options.cache] | <code>boolean</code> | <code>true</code> | Whether to cache the fetched member. |

<a name="GuildMemberManager.transformTimeout"></a>

### GuildMemberManager.transformTimeout(date) ⇒ <code>string</code> \| <code>null</code>
Transforms a given date into an ISO string format.

**Kind**: static method of [<code>GuildMemberManager</code>](#GuildMemberManager)  
**Returns**: <code>string</code> \| <code>null</code> - - The transformed date in ISO string format, or null if the input is null.  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> \| <code>string</code> \| <code>null</code> | The date to transform. |

<a name="GuildMemberManager.transformOptions"></a>

### GuildMemberManager.transformOptions(options, [edit]) ⇒ <code>Object</code>
Transforms the given options object based on the provided parameters.

**Kind**: static method of [<code>GuildMemberManager</code>](#GuildMemberManager)  
**Returns**: <code>Object</code> - - The transformed options object.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | <code>Object</code> |  | The options object to transform. |
| [edit] | <code>boolean</code> | <code>false</code> | Indicates whether the transformation is for editing purposes. |

<a name="GuildMemberManager.transformPayload"></a>

### GuildMemberManager.transformPayload(payload) ⇒ <code>string</code> \| <code>Array.&lt;string&gt;</code> \| <code>undefined</code>
Transforms the given payload into a new format.

**Kind**: static method of [<code>GuildMemberManager</code>](#GuildMemberManager)  
**Returns**: <code>string</code> \| <code>Array.&lt;string&gt;</code> \| <code>undefined</code> - - The transformed payload.  

| Param | Type | Description |
| --- | --- | --- |
| payload | <code>any</code> | The payload to transform. |

