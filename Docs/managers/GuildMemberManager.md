<a name="GuildMemberManager"></a>

## GuildMemberManager

**Kind**: global class

- [GuildMemberManager](#GuildMemberManager)
  - [new GuildMemberManager(guildId, client)](#new_GuildMemberManager_new)
  - _instance_
    - [.cache](#GuildMemberManager+cache) ⇒
    - [.\_add(members, [guildId], [options])](#GuildMemberManager+_add) ⇒
    - [.fetch(member, options)](#GuildMemberManager+fetch) ⇒
    - [.list([options])](#GuildMemberManager+list) ⇒
    - [.search([options])](#GuildMemberManager+search) ⇒
    - [.kick(member, reason)](#GuildMemberManager+kick) ⇒
    - [.ban(member, [options])](#GuildMemberManager+ban) ⇒
    - [.unban(user, reason)](#GuildMemberManager+unban) ⇒
    - [.edit(member, [options])](#GuildMemberManager+edit) ⇒
    - [.\_fetchId(member, options)](#GuildMemberManager+_fetchId) ⇒
  - _static_
    - [.transformTimeout(date)](#GuildMemberManager.transformTimeout) ⇒
    - [.transformOptions([options], [edit])](#GuildMemberManager.transformOptions) ⇒
    - [.transformPayload([payload])](#GuildMemberManager.transformPayload) ⇒

<a name="new_GuildMemberManager_new"></a>

### new GuildMemberManager(guildId, client)

This function is a constructor for the class

| Param   | Description                                           |
| ------- | ----------------------------------------------------- |
| guildId | The ID of the guild you want to get the settings for. |
| client  | The client that the command is being run on.          |

<a name="GuildMemberManager+cache"></a>

### guildMemberManager.cache ⇒

It returns the value of the variable Collections.

**Kind**: instance property of [<code>GuildMemberManager</code>](#GuildMemberManager)  
**Returns**: The cache object  
<a name="GuildMemberManager+_add"></a>

### guildMemberManager.\_add(members, [guildId], [options]) ⇒

It creates a new GuildMember object if the member isn't cached, or returns the cached member if it
is

**Kind**: instance method of [<code>GuildMemberManager</code>](#GuildMemberManager)  
**Returns**: A new GuildMember object

| Param     | Description                                                                                  |
| --------- | -------------------------------------------------------------------------------------------- |
| members   | The member(s) to add to the cache. Can be a string, a user object, or a guild member object. |
| [guildId] | The ID of the guild the member is in.                                                        |
| [options] | cache = true, force = false                                                                  |

<a name="GuildMemberManager+fetch"></a>

### guildMemberManager.fetch(member, options) ⇒

It fetches the members of a guild

**Kind**: instance method of [<code>GuildMemberManager</code>](#GuildMemberManager)  
**Returns**: A promise that resolves to a new cache.constructor

| Param   | Description                                                                     |
| ------- | ------------------------------------------------------------------------------- |
| member  | The member to fetch. Can be a user ID, a user object, or a guild member object. |
| options |                                                                                 |

<a name="GuildMemberManager+list"></a>

### guildMemberManager.list([options]) ⇒

It gets a list of members from the API and returns a cache of the members

**Kind**: instance method of [<code>GuildMemberManager</code>](#GuildMemberManager)  
**Returns**: A new cache constructor

| Param     | Description |
| --------- | ----------- |
| [options] | Object      |

<a name="GuildMemberManager+search"></a>

### guildMemberManager.search([options]) ⇒

It searches for members in a guild

**Kind**: instance method of [<code>GuildMemberManager</code>](#GuildMemberManager)  
**Returns**: A new cache constructor

| Param     | Description |
| --------- | ----------- |
| [options] | Object      |

<a name="GuildMemberManager+kick"></a>

### guildMemberManager.kick(member, reason) ⇒

It kicks a member from the guild

**Kind**: instance method of [<code>GuildMemberManager</code>](#GuildMemberManager)  
**Returns**: The deleted member

| Param  | Description                                                                          |
| ------ | ------------------------------------------------------------------------------------ |
| member | The member to kick. Can be a GuildMember object, a User object, or a user ID string. |
| reason | The reason for the kick.                                                             |

<a name="GuildMemberManager+ban"></a>

### guildMemberManager.ban(member, [options]) ⇒

It bans a member from a guild

**Kind**: instance method of [<code>GuildMemberManager</code>](#GuildMemberManager)  
**Returns**: The member that was banned.

| Param     | Description        |
| --------- | ------------------ |
| member    | The member to ban. |
| [options] | Object             |

<a name="GuildMemberManager+unban"></a>

### guildMemberManager.unban(user, reason) ⇒

Unban a user from the guild.

**Kind**: instance method of [<code>GuildMemberManager</code>](#GuildMemberManager)  
**Returns**: The user that was unbanned.

| Param  | Description               |
| ------ | ------------------------- |
| user   | The user to unban.        |
| reason | The reason for the unban. |

<a name="GuildMemberManager+edit"></a>

### guildMemberManager.edit(member, [options]) ⇒

It edits a guild member

**Kind**: instance method of [<code>GuildMemberManager</code>](#GuildMemberManager)  
**Returns**: A new member object

| Param     | Description                     |
| --------- | ------------------------------- |
| member    | The member to edit.             |
| [options] | The options to pass to the API. |

<a name="GuildMemberManager+_fetchId"></a>

### guildMemberManager.\_fetchId(member, options) ⇒

It fetches a member from the API and returns the member object

**Kind**: instance method of [<code>GuildMemberManager</code>](#GuildMemberManager)  
**Returns**: The member object

| Param   | Description                                                              |
| ------- | ------------------------------------------------------------------------ |
| member  | The member to fetch. Can be a string, a member object, or a user object. |
| options | An object with the following properties:                                 |

<a name="GuildMemberManager.transformTimeout"></a>

### GuildMemberManager.transformTimeout(date) ⇒

If the date is null, return null. If the date is not null, return the date as an ISO string

**Kind**: static method of [<code>GuildMemberManager</code>](#GuildMemberManager)  
**Returns**: The date is being returned in ISO format.

| Param | Description                 |
| ----- | --------------------------- |
| date  | The date to be transformed. |

<a name="GuildMemberManager.transformOptions"></a>

### GuildMemberManager.transformOptions([options], [edit]) ⇒

It transforms the options object into a format that the API can understand

**Kind**: static method of [<code>GuildMemberManager</code>](#GuildMemberManager)  
**Returns**: an object with the keys limit, after, and the values of the options.limit, options.after,
and options.after?.user?.id, options.after?.id.

| Param     | Default            | Description                                    |
| --------- | ------------------ | ---------------------------------------------- |
| [options] |                    | The options object.                            |
| [edit]    | <code>false</code> | Whether or not the user is editing the member. |

<a name="GuildMemberManager.transformPayload"></a>

### GuildMemberManager.transformPayload([payload]) ⇒

If the payload is an array, map each element to its id, otherwise return the id of the payload

**Kind**: static method of [<code>GuildMemberManager</code>](#GuildMemberManager)  
**Returns**: The user id

| Param     | Description                                |
| --------- | ------------------------------------------ |
| [payload] | The payload that is being sent to the API. |
