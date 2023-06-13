<a name="GuildManager"></a>

## GuildManager

**Kind**: global class

- [GuildManager](#GuildManager)
  - [new GuildManager(client, websocket)](#new_GuildManager_new)
  - _instance_
    - [.cache](#GuildManager+cache) ⇒
    - [.\_add(guilds, [options])](#GuildManager+_add) ⇒
    - [.create([options])](#GuildManager+create) ⇒
    - [.fetch(guild, options)](#GuildManager+fetch) ⇒ <code>function</code>
    - [.\_fetchId(guild, options)](#GuildManager+_fetchId) ⇒
    - [.edit(guilds, [options])](#GuildManager+edit) ⇒
    - [.delete(guild)](#GuildManager+delete) ⇒
    - [.fetchPreview(guild)](#GuildManager+fetchPreview) ⇒
    - [.modifyMFALevel(guild, [options])](#GuildManager+modifyMFALevel) ⇒
  - _static_
    - [.transformPayload([payload])](#GuildManager.transformPayload) ⇒
    - [.transformOptions([o])](#GuildManager.transformOptions) ⇒

<a name="new_GuildManager_new"></a>

### new GuildManager(client, websocket)

It's a constructor function that takes in two parameters, client and websocket, and then calls the
super function with those two parameters.

| Param     | Description                                    |
| --------- | ---------------------------------------------- |
| client    | The client object                              |
| websocket | The websocket that the client is connected to. |

<a name="GuildManager+cache"></a>

### guildManager.cache ⇒

The function returns a collection of objects that are stored in the cache.

**Kind**: instance property of [<code>GuildManager</code>](#GuildManager)  
**Returns**: The Collection class.  
<a name="GuildManager+_add"></a>

### guildManager.\_add(guilds, [options]) ⇒

It adds a guild to the cache

**Kind**: instance method of [<code>GuildManager</code>](#GuildManager)  
**Returns**: A new instance of the Guild class.

| Param     | Description                                 |
| --------- | ------------------------------------------- |
| guilds    | The guild object or ID of the guild to add. |
| [options] | cache = true, force = false                 |

<a name="GuildManager+create"></a>

### guildManager.create([options]) ⇒

It creates a new guild

**Kind**: instance method of [<code>GuildManager</code>](#GuildManager)  
**Returns**: The guild object.

| Param     | Description |
| --------- | ----------- |
| [options] | Object      |

<a name="GuildManager+fetch"></a>

### guildManager.fetch(guild, options) ⇒ <code>function</code>

It fetches the guilds of the user

**Kind**: instance method of [<code>GuildManager</code>](#GuildManager)  
**Returns**: <code>function</code> - constructor cache

| Param   | Description         |
| ------- | ------------------- |
| guild   | The guild to fetch. |
| options |                     |

<a name="GuildManager+_fetchId"></a>

### guildManager.\_fetchId(guild, options) ⇒

It fetches a guild by ID

**Kind**: instance method of [<code>GuildManager</code>](#GuildManager)  
**Returns**: The guild object.

| Param   | Description            |
| ------- | ---------------------- |
| guild   | The guild object or ID |
| options |                        |

<a name="GuildManager+edit"></a>

### guildManager.edit(guilds, [options]) ⇒

It edits a guild

**Kind**: instance method of [<code>GuildManager</code>](#GuildManager)  
**Returns**: The guilds object.

| Param     | Description      |
| --------- | ---------------- |
| guilds    | The guild object |
| [options] | Object           |

<a name="GuildManager+delete"></a>

### guildManager.delete(guild) ⇒

It deletes a guild

**Kind**: instance method of [<code>GuildManager</code>](#GuildManager)  
**Returns**: The deleted guild.

| Param | Description          |
| ----- | -------------------- |
| guild | The guild to delete. |

<a name="GuildManager+fetchPreview"></a>

### guildManager.fetchPreview(guild) ⇒

It fetches the preview of a guild

**Kind**: instance method of [<code>GuildManager</code>](#GuildManager)  
**Returns**: A new GuildPreview object.

| Param | Description                         |
| ----- | ----------------------------------- |
| guild | The guild to fetch the preview for. |

<a name="GuildManager+modifyMFALevel"></a>

### guildManager.modifyMFALevel(guild, [options]) ⇒

It modifies the MFA level of a guild

**Kind**: instance method of [<code>GuildManager</code>](#GuildManager)  
**Returns**: The client.guilds.\_add(guildId)

| Param     | Description                           |
| --------- | ------------------------------------- |
| guild     | The guild to modify the MFA level of. |
| [options] | Object                                |

<a name="GuildManager.transformPayload"></a>

### GuildManager.transformPayload([payload]) ⇒

It takes a payload object, and returns a new object with the same keys, but with the values
transformed

**Kind**: static method of [<code>GuildManager</code>](#GuildManager)  
**Returns**: The payload is being returned.

| Param     |
| --------- |
| [payload] |

<a name="GuildManager.transformOptions"></a>

### GuildManager.transformOptions([o]) ⇒

It takes an object with optional properties `before`, `after`, and `limit`, and returns an object
with the same properties, but with the `before` and `after` properties converted to strings if
they are not already strings.

**Kind**: static method of [<code>GuildManager</code>](#GuildManager)  
**Returns**: The return value is an object with the following properties:

| Param | Description         |
| ----- | ------------------- |
| [o]   | The options object. |
