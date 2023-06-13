<a name="ApplicationCommandManager"></a>

## ApplicationCommandManager

**Kind**: global class

- [ApplicationCommandManager](#ApplicationCommandManager)
  - [new ApplicationCommandManager(client)](#new_ApplicationCommandManager_new)
  - _instance_
    - [.permissions](#ApplicationCommandManager+permissions) ⇒
    - [.cache](#ApplicationCommandManager+cache) ⇒
    - [.\_add(commands, [guild], [options])](#ApplicationCommandManager+_add) ⇒
    - [.create([options], [guild])](#ApplicationCommandManager+create) ⇒
    - [.set([options], [guild])](#ApplicationCommandManager+set) ⇒
    - [.fetch(command, options)](#ApplicationCommandManager+fetch) ⇒
    - [.delete(command, [guild])](#ApplicationCommandManager+delete) ⇒
    - [.edit(command, [options], [guild])](#ApplicationCommandManager+edit) ⇒
    - [.\_fetchId(command, [cache], [force], [guild])](#ApplicationCommandManager+_fetchId) ⇒
  - _static_
    - [.transformOptions([options])](#ApplicationCommandManager.transformOptions) ⇒
    - [.transformPayload([payload])](#ApplicationCommandManager.transformPayload) ⇒

<a name="new_ApplicationCommandManager_new"></a>

### new ApplicationCommandManager(client)

It's a constructor function that takes a client parameter and passes it to the super function.

| Param  | Description        |
| ------ | ------------------ |
| client | The client object. |

<a name="ApplicationCommandManager+permissions"></a>

### applicationCommandManager.permissions ⇒

It returns a new ApplicationCommandPermissionManager object, which is a class that I made.

I'm not sure if this is the right place to ask this question, but I'm not sure where else to ask
it.

**Kind**: instance property of [<code>ApplicationCommandManager</code>](#ApplicationCommandManager)  
**Returns**: A new instance of the ApplicationCommandPermissionManager class.  
<a name="ApplicationCommandManager+cache"></a>

### applicationCommandManager.cache ⇒

It returns the Collection object.

**Kind**: instance property of [<code>ApplicationCommandManager</code>](#ApplicationCommandManager)  
**Returns**: The Collection object.  
<a name="ApplicationCommandManager+_add"></a>

### applicationCommandManager.\_add(commands, [guild], [options]) ⇒

\_add(commands, guild = this.guildId, options = {cache: true, force: false})

**Kind**: instance method of [<code>ApplicationCommandManager</code>](#ApplicationCommandManager)  
**Returns**: The command object.

| Param     | Description                     |
| --------- | ------------------------------- |
| commands  | The command or commands to add. |
| [guild]   | The guild ID                    |
| [options] | cache = true, force = false     |

<a name="ApplicationCommandManager+create"></a>

### applicationCommandManager.create([options], [guild]) ⇒

It creates a new command for the application

**Kind**: instance method of [<code>ApplicationCommandManager</code>](#ApplicationCommandManager)  
**Returns**: The command object.

| Param     | Description                                             |
| --------- | ------------------------------------------------------- |
| [options] | The options for the command.                            |
| [guild]   | The guild ID or guild object to create the command for. |

<a name="ApplicationCommandManager+set"></a>

### applicationCommandManager.set([options], [guild]) ⇒

It sets the commands for a guild

**Kind**: instance method of [<code>ApplicationCommandManager</code>](#ApplicationCommandManager)  
**Returns**: An array of objects.

| Param     | Description                                                |
| --------- | ---------------------------------------------------------- |
| [options] | An array of objects that contain the following properties: |
| [guild]   | The guild ID or guild object to set the commands for.      |

<a name="ApplicationCommandManager+fetch"></a>

### applicationCommandManager.fetch(command, options) ⇒

It fetches commands from the API

**Kind**: instance method of [<code>ApplicationCommandManager</code>](#ApplicationCommandManager)  
**Returns**: An array of objects.

| Param   | Description           |
| ------- | --------------------- |
| command | The command to fetch. |
| options |                       |

<a name="ApplicationCommandManager+delete"></a>

### applicationCommandManager.delete(command, [guild]) ⇒

It deletes a command from the application

**Kind**: instance method of [<code>ApplicationCommandManager</code>](#ApplicationCommandManager)  
**Returns**: The deleted command.

| Param   | Description                           |
| ------- | ------------------------------------- |
| command | The command to delete.                |
| [guild] | The guild to remove the command from. |

<a name="ApplicationCommandManager+edit"></a>

### applicationCommandManager.edit(command, [options], [guild]) ⇒

It edits an application command

**Kind**: instance method of [<code>ApplicationCommandManager</code>](#ApplicationCommandManager)  
**Returns**: The command object.

| Param     | Description                  |
| --------- | ---------------------------- |
| command   | The command to edit.         |
| [options] | The options for the command. |
| [guild]   | The guild ID                 |

<a name="ApplicationCommandManager+_fetchId"></a>

### applicationCommandManager.\_fetchId(command, [cache], [force], [guild]) ⇒

It fetches a command from the API and adds it to the cache

**Kind**: instance method of [<code>ApplicationCommandManager</code>](#ApplicationCommandManager)  
**Returns**: The command object.

| Param   | Default            | Description                                     |
| ------- | ------------------ | ----------------------------------------------- |
| command |                    | The command to fetch.                           |
| [cache] | <code>true</code>  | Whether or not to cache the command.            |
| [force] | <code>false</code> | If true, it will force the cache to be updated. |
| [guild] |                    | The guild to fetch the command from.            |

<a name="ApplicationCommandManager.transformOptions"></a>

### ApplicationCommandManager.transformOptions([options]) ⇒

If the option type is a sub command group or sub command, return a new instance of the respective
class, otherwise return a new instance of the SlashOption class

**Kind**: static method of [<code>ApplicationCommandManager</code>](#ApplicationCommandManager)  
**Returns**: The return value is a JSON object.

| Param     | Description |
| --------- | ----------- |
| [options] | Object      |

<a name="ApplicationCommandManager.transformPayload"></a>

### ApplicationCommandManager.transformPayload([payload]) ⇒

It takes a payload object and returns a transformed payload object

**Kind**: static method of [<code>ApplicationCommandManager</code>](#ApplicationCommandManager)  
**Returns**: The return is a new object with the properties of the payload object.

| Param     | Description                          |
| --------- | ------------------------------------ |
| [payload] | The payload that is sent to the API. |
