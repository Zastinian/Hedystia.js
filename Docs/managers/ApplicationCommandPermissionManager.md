<a name="ApplicationCommandPermissionManager"></a>

## ApplicationCommandPermissionManager

**Kind**: global class

- [ApplicationCommandPermissionManager](#ApplicationCommandPermissionManager)
  - [new ApplicationCommandPermissionManager(client, guildId)](#new_ApplicationCommandPermissionManager_new)
  - _instance_
    - [.cache](#ApplicationCommandPermissionManager+cache) ⇒
    - [.\_add(commands, [guildId], [options])](#ApplicationCommandPermissionManager+_add) ⇒
    - [.fetch(commands, options)](#ApplicationCommandPermissionManager+fetch) ⇒
    - [.\_fetchId(commands, [cache], [force], [guild])](#ApplicationCommandPermissionManager+_fetchId) ⇒
  - _static_
    - [.transformPermissions([o])](#ApplicationCommandPermissionManager.transformPermissions) ⇒
    - [.transformPermission([o])](#ApplicationCommandPermissionManager.transformPermission) ⇒
    - [.parseRemoveOptions(payload, fetchedData)](#ApplicationCommandPermissionManager.parseRemoveOptions) ⇒

<a name="new_ApplicationCommandPermissionManager_new"></a>

### new ApplicationCommandPermissionManager(client, guildId)

This function is a constructor for the class GuildSettings. It takes in a client and a guildId and
sets the guildId to the guildId that was passed in.

| Param   | Description                                           |
| ------- | ----------------------------------------------------- |
| client  | The client object                                     |
| guildId | The ID of the guild you want to get the settings for. |

<a name="ApplicationCommandPermissionManager+cache"></a>

### applicationCommandPermissionManager.cache ⇒

It returns the Collection object.

**Kind**: instance property of [<code>ApplicationCommandPermissionManager</code>](#ApplicationCommandPermissionManager)  
**Returns**: The Collection object.  
<a name="ApplicationCommandPermissionManager+_add"></a>

### applicationCommandPermissionManager.\_add(commands, [guildId], [options]) ⇒

\_add(commands, guildId = this.guildId, options = {cache: true, force: false})

**Kind**: instance method of [<code>ApplicationCommandPermissionManager</code>](#ApplicationCommandPermissionManager)  
**Returns**: The return value is a new instance of the ApplicationCommandPermission class.

| Param     | Description                                     |
| --------- | ----------------------------------------------- |
| commands  | The command or command ID to add.               |
| [guildId] | The ID of the guild to get the permissions for. |
| [options] | cache = true, force = false                     |

<a name="ApplicationCommandPermissionManager+fetch"></a>

### applicationCommandPermissionManager.fetch(commands, options) ⇒

It fetches the command permissions for a guild

**Kind**: instance method of [<code>ApplicationCommandPermissionManager</code>](#ApplicationCommandPermissionManager)  
**Returns**: The return value is a new instance of the cache constructor.

| Param    | Description                                         |
| -------- | --------------------------------------------------- |
| commands | The command ID or an array of command IDs to fetch. |
| options  |                                                     |

<a name="ApplicationCommandPermissionManager+_fetchId"></a>

### applicationCommandPermissionManager.\_fetchId(commands, [cache], [force], [guild]) ⇒

It fetches the permissions of a command from the API

**Kind**: instance method of [<code>ApplicationCommandPermissionManager</code>](#ApplicationCommandPermissionManager)  
**Returns**: The permissions of the command.

| Param    | Default            | Description                                      |
| -------- | ------------------ | ------------------------------------------------ |
| commands |                    | The command to fetch permissions for.            |
| [cache]  | <code>true</code>  | Whether or not to cache the command permissions. |
| [force]  | <code>false</code> | If true, it will force the cache to be updated.  |
| [guild]  |                    | The guild to fetch the command permissions for.  |

<a name="ApplicationCommandPermissionManager.transformPermissions"></a>

### ApplicationCommandPermissionManager.transformPermissions([o]) ⇒

"If the object has an id property, and that property is a string, then return that property,
otherwise if the object has an id property, and that property has an id property, then return that
property, otherwise return undefined."

**Kind**: static method of [<code>ApplicationCommandPermissionManager</code>](#ApplicationCommandPermissionManager)  
**Returns**: The return value is an object with the following properties:

| Param | Description                                 |
| ----- | ------------------------------------------- |
| [o]   | This is the object that is being passed in. |

<a name="ApplicationCommandPermissionManager.transformPermission"></a>

### ApplicationCommandPermissionManager.transformPermission([o]) ⇒

It takes an object with a command property and a permissions property, and returns an object with
an id property and a permissions property

**Kind**: static method of [<code>ApplicationCommandPermissionManager</code>](#ApplicationCommandPermissionManager)  
**Returns**: The return value is an object with two properties: id and permissions.

| Param | Description                           |
| ----- | ------------------------------------- |
| [o]   | The object that is being transformed. |

<a name="ApplicationCommandPermissionManager.parseRemoveOptions"></a>

### ApplicationCommandPermissionManager.parseRemoveOptions(payload, fetchedData) ⇒

It takes a payload and fetched data, and returns an array of objects that are not in the payload

**Kind**: static method of [<code>ApplicationCommandPermissionManager</code>](#ApplicationCommandPermissionManager)  
**Returns**: An array of objects.

| Param       | Description                             |
| ----------- | --------------------------------------- |
| payload     | The payload that is sent to the server. |
| fetchedData | Array of objects                        |
