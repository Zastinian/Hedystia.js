<a name="ApplicationCommandPermission"></a>

## ApplicationCommandPermission

**Kind**: global class

- [ApplicationCommandPermission](#ApplicationCommandPermission)
  - [new ApplicationCommandPermission([data], guildId, client)](#new_ApplicationCommandPermission_new)
  - _instance_
    - [.command](#ApplicationCommandPermission+command) ⇒
    - [.guild](#ApplicationCommandPermission+guild) ⇒
    - [.fetch([options])](#ApplicationCommandPermission+fetch) ⇒
  - _static_
    - [.transformPermissions([permissions])](#ApplicationCommandPermission.transformPermissions) ⇒

<a name="new_ApplicationCommandPermission_new"></a>

### new ApplicationCommandPermission([data], guildId, client)

It's a constructor function that takes in a data object, a guildId, and a client, and then sets the
commandId to the id of the data object, or undefined if it doesn't exist, and sets the applicationId
to the application_id of the data object, or null if it doesn't exist. It then sets the guildId to
the guildId, and then sets the permissions to a new RaidenCol object, which is a collection class,
and then maps the permissions of the data object to a new array, and then sets the id of the object
to the id of the data object, and then sets the permissions of the object to the
ApplicationCommandPermission.transformPermissions function, which takes in the object.

| Param   | Description                                |
| ------- | ------------------------------------------ |
| [data]  | The data that is passed to the constructor |
| guildId | The guild id                               |
| client  | RaidenClient                               |

<a name="ApplicationCommandPermission+command"></a>

### applicationCommandPermission.command ⇒

If the command is in the client's cache, return it. If it's not, check if it's in the guild's cache.
If it's not, return null.

**Kind**: instance property of [<code>ApplicationCommandPermission</code>](#ApplicationCommandPermission)  
**Returns**: The command object.  
<a name="ApplicationCommandPermission+guild"></a>

### applicationCommandPermission.guild ⇒

It returns the guild object if it exists, otherwise it returns null.

**Kind**: instance property of [<code>ApplicationCommandPermission</code>](#ApplicationCommandPermission)  
**Returns**: The guild object.  
<a name="ApplicationCommandPermission+fetch"></a>

### applicationCommandPermission.fetch([options]) ⇒

It fetches the permissions of the command

**Kind**: instance method of [<code>ApplicationCommandPermission</code>](#ApplicationCommandPermission)  
**Returns**: The return value is the result of the await expression.

| Param     | Description |
| --------- | ----------- |
| [options] | Object      |

<a name="ApplicationCommandPermission.transformPermissions"></a>

### ApplicationCommandPermission.transformPermissions([permissions]) ⇒

It takes an object with a property called `type` that can be a number or a string, and if it's a
number, it converts it to a string using a lookup table.

The lookup table is defined in the `ApplicationCommandPermissionType` enum.

The function returns an object with the same properties as the input object, but with the `type`
property converted to a string if it was a number.

The function is called like this:

**Kind**: static method of [<code>ApplicationCommandPermission</code>](#ApplicationCommandPermission)  
**Returns**: The return value is an object with the following properties:
id: The id of the permission.
type: The type of the permission.
permission: The permission.

| Param         |
| ------------- |
| [permissions] |
