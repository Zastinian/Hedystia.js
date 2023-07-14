<a name="ApplicationCommandPermission"></a>

## ApplicationCommandPermission ⇐ <code>Base</code>
Represents an application command permission.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [ApplicationCommandPermission](#ApplicationCommandPermission) ⇐ <code>Base</code>
    * [new ApplicationCommandPermission([data], guildId, client)](#new_ApplicationCommandPermission_new)
    * _instance_
        * [.command](#ApplicationCommandPermission+command) ⇒
        * [.guild](#ApplicationCommandPermission+guild) ⇒
        * [.fetch([options])](#ApplicationCommandPermission+fetch) ⇒ <code>Promise</code>
    * _static_
        * [.transformPermissions(permissions)](#ApplicationCommandPermission.transformPermissions) ⇒ <code>Object</code>

<a name="new_ApplicationCommandPermission_new"></a>

### new ApplicationCommandPermission([data], guildId, client)
Constructs a new instance of the CommandPermissions class.


| Param | Type | Description |
| --- | --- | --- |
| [data] | <code>Object</code> | The data object containing the command permission information. |
| guildId | <code>string</code> | The ID of the guild the command permission belongs to. |
| client | <code>Client</code> | The client instance. |

<a name="ApplicationCommandPermission+command"></a>

### applicationCommandPermission.command ⇒
Retrieves the command associated with this instance.

**Kind**: instance property of [<code>ApplicationCommandPermission</code>](#ApplicationCommandPermission)  
**Returns**: The command object if found, otherwise null.  
<a name="ApplicationCommandPermission+guild"></a>

### applicationCommandPermission.guild ⇒
Retrieves the guild associated with this guildId.

**Kind**: instance property of [<code>ApplicationCommandPermission</code>](#ApplicationCommandPermission)  
**Returns**: The guild object if found, otherwise null.  
<a name="ApplicationCommandPermission+fetch"></a>

### applicationCommandPermission.fetch([options]) ⇒ <code>Promise</code>
Fetches the permissions for the guild commands.

**Kind**: instance method of [<code>ApplicationCommandPermission</code>](#ApplicationCommandPermission)  
**Returns**: <code>Promise</code> - - A promise that resolves to the fetched permissions.  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | Optional parameters for the fetch request. |

<a name="ApplicationCommandPermission.transformPermissions"></a>

### ApplicationCommandPermission.transformPermissions(permissions) ⇒ <code>Object</code>
Transforms a permissions object into a formatted object with specific properties.

**Kind**: static method of [<code>ApplicationCommandPermission</code>](#ApplicationCommandPermission)  
**Returns**: <code>Object</code> - - The transformed permissions object.  

| Param | Type | Description |
| --- | --- | --- |
| permissions | <code>Object</code> | The permissions object to transform. |

