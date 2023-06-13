<a name="PermissionOverwriteManager"></a>

## PermissionOverwriteManager
**Kind**: global class  

* [PermissionOverwriteManager](#PermissionOverwriteManager)
    * [new PermissionOverwriteManager(channelId, [overwrites], client)](#new_PermissionOverwriteManager_new)
    * _instance_
        * [.cache](#PermissionOverwriteManager+cache) ⇒
        * [.resolve(overwrites)](#PermissionOverwriteManager+resolve) ⇒
        * [.create(user, overwrites, [options])](#PermissionOverwriteManager+create) ⇒
        * [.set(overwrites, reason)](#PermissionOverwriteManager+set) ⇒
        * [.edit(userOrRole, [options], [overwriteOptions])](#PermissionOverwriteManager+edit) ⇒
        * [.delete(userOrRole, reason)](#PermissionOverwriteManager+delete) ⇒
    * _static_
        * [.editOverwrites(existing, overwrites, type)](#PermissionOverwriteManager.editOverwrites) ⇒
        * [.transformOverwrites(existing, [overwrites], type)](#PermissionOverwriteManager.transformOverwrites)

<a name="new_PermissionOverwriteManager_new"></a>

### new PermissionOverwriteManager(channelId, [overwrites], client)
It creates a new object with the properties of the overwrites object, and the channelId property.


| Param | Description |
| --- | --- |
| channelId | The ID of the channel to create the invite for. |
| [overwrites] | An object containing the overwrites for the channel. |
| client | The client that is creating the channel. |

<a name="PermissionOverwriteManager+cache"></a>

### permissionOverwriteManager.cache ⇒
It returns a collection of all the overwrites in the channel, mapped to their resolved permissionoverwrites

**Kind**: instance property of [<code>PermissionOverwriteManager</code>](#PermissionOverwriteManager)  
**Returns**: A collection of overwrites  
<a name="PermissionOverwriteManager+resolve"></a>

### permissionOverwriteManager.resolve(overwrites) ⇒
It takes an object, and returns a new PermissionOverwrite object

**Kind**: instance method of [<code>PermissionOverwriteManager</code>](#PermissionOverwriteManager)  
**Returns**: A new PermissionOverwrite object.  

| Param | Description |
| --- | --- |
| overwrites | The overwrites to resolve. |

<a name="PermissionOverwriteManager+create"></a>

### permissionOverwriteManager.create(user, overwrites, [options]) ⇒
It creates a new permission overwrite for a user or role

**Kind**: instance method of [<code>PermissionOverwriteManager</code>](#PermissionOverwriteManager)  
**Returns**: The channel object  

| Param | Description |
| --- | --- |
| user | The user or role to add the overwrite to. |
| overwrites | An object containing the permissions to overwrite. |
| [options] | Object |

<a name="PermissionOverwriteManager+set"></a>

### permissionOverwriteManager.set(overwrites, reason) ⇒
It takes an array of permission overwrites and sets them on the channel

**Kind**: instance method of [<code>PermissionOverwriteManager</code>](#PermissionOverwriteManager)  
**Returns**: The channel object  

| Param | Description |
| --- | --- |
| overwrites | An array of overwrites. |
| reason | The reason for the change. |

<a name="PermissionOverwriteManager+edit"></a>

### permissionOverwriteManager.edit(userOrRole, [options], [overwriteOptions]) ⇒
It edits the permission overwrites of a channel

**Kind**: instance method of [<code>PermissionOverwriteManager</code>](#PermissionOverwriteManager)  
**Returns**: The channel object  

| Param | Description |
| --- | --- |
| userOrRole | The user or role to edit the overwrite for. |
| [options] | The options to overwrite the permission with. |
| [overwriteOptions] | This is an object that contains the reason and type of the overwrite. |

<a name="PermissionOverwriteManager+delete"></a>

### permissionOverwriteManager.delete(userOrRole, reason) ⇒
It deletes a permission overwrite for a user or role in a channel

**Kind**: instance method of [<code>PermissionOverwriteManager</code>](#PermissionOverwriteManager)  
**Returns**: The channel object  

| Param | Description |
| --- | --- |
| userOrRole | The user or role to delete the permission overwrite for. |
| reason | The reason for the audit log entry. |

<a name="PermissionOverwriteManager.editOverwrites"></a>

### PermissionOverwriteManager.editOverwrites(existing, overwrites, type) ⇒
It takes an existing overwrite, overwrites it with the new overwrites, and returns the new overwrite

**Kind**: static method of [<code>PermissionOverwriteManager</code>](#PermissionOverwriteManager)  
**Returns**: An object with the following properties:  allow: A string representation of the permissions that are allowed.  deny: A string representation of the permissions that are denied.  type: The type of overwrite.  

| Param | Description |
| --- | --- |
| existing | The existing overwrite object. |
| overwrites | The overwrites to apply. |
| type | The type of overwrite. This can be a string or a number. |

<a name="PermissionOverwriteManager.transformOverwrites"></a>

### PermissionOverwriteManager.transformOverwrites(existing, [overwrites], type)
It takes an existing role, overwrites, and a type, and returns a new role with the overwritesapplied

**Kind**: static method of [<code>PermissionOverwriteManager</code>](#PermissionOverwriteManager)  

| Param | Description |
| --- | --- |
| existing | The existing permissions object. |
| [overwrites] | The overwrites object that is passed in from the user. |
| type | The type of the permission. This is either "role" or "member". |

