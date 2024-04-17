---
title: PermissionOverwriteManager
sidebar:
  order: 32
---



## PermissionOverwriteManager ⇐ <code>Base</code>
Represents a manager for permission overwrites in a channel.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [PermissionOverwriteManager](#PermissionOverwriteManager) ⇐ <code>Base</code>
    * [new PermissionOverwriteManager(channelId, [overwrites], client)](#new_PermissionOverwriteManager_new)
    * _instance_
        * [.cache](#PermissionOverwriteManager+cache) ⇒ <code>Collection</code>
        * [.resolve(overwrites)](#PermissionOverwriteManager+resolve) ⇒ <code>PermissionOverwrite</code> \| <code>undefined</code>
        * [.create(user, overwrites, [options])](#PermissionOverwriteManager+create) ⇒ <code>Promise.&lt;void&gt;</code>
        * [.set(overwrites, reason)](#PermissionOverwriteManager+set) ⇒ <code>Promise</code>
        * [.edit(userOrRole, [options], [overwriteOptions])](#PermissionOverwriteManager+edit) ⇒ <code>Promise.&lt;Channel&gt;</code>
        * [.delete(userOrRole, reason)](#PermissionOverwriteManager+delete) ⇒ <code>Promise.&lt;Channel&gt;</code>
    * _static_
        * [.editOverwrites(existing, overwrites, type)](#PermissionOverwriteManager.editOverwrites) ⇒ <code>object</code>
        * [.transformOverwrites(existing, [overwrites], type)](#PermissionOverwriteManager.transformOverwrites) ⇒ <code>Object</code>

<a name="new_PermissionOverwriteManager_new"></a>

### new PermissionOverwriteManager(channelId, [overwrites], client)
Constructs a new instance of the Channel class.


| Param | Type | Description |
| --- | --- | --- |
| channelId | <code>string</code> | The ID of the channel. |
| [overwrites] | <code>object</code> | The initial permission overwrites. |
| client | <code>Client</code> | The client instance. |

<a name="PermissionOverwriteManager+cache"></a>

### permissionOverwriteManager.cache ⇒ <code>Collection</code>
Get the cache collection.

**Kind**: instance property of [<code>PermissionOverwriteManager</code>](#PermissionOverwriteManager)  
**Returns**: <code>Collection</code> - - The cache collection.  
<a name="PermissionOverwriteManager+resolve"></a>

### permissionOverwriteManager.resolve(overwrites) ⇒ <code>PermissionOverwrite</code> \| <code>undefined</code>
Resolves the given `overwrites` parameter and returns a new `PermissionOverwrite` object.

**Kind**: instance method of [<code>PermissionOverwriteManager</code>](#PermissionOverwriteManager)  
**Returns**: <code>PermissionOverwrite</code> \| <code>undefined</code> - A new `PermissionOverwrite` object if `overwrites` is provided, otherwise `undefined`.  

| Param | Type | Description |
| --- | --- | --- |
| overwrites | <code>string</code> \| <code>PermissionOverwriteOptions</code> | The overwrites to resolve. Can be a string representing the ID of the overwrite or an object containing the overwrite options. |

<a name="PermissionOverwriteManager+create"></a>

### permissionOverwriteManager.create(user, overwrites, [options]) ⇒ <code>Promise.&lt;void&gt;</code>
Creates or edits permission overwrites for a user or role in a channel.

**Kind**: instance method of [<code>PermissionOverwriteManager</code>](#PermissionOverwriteManager)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the permission overwrites are created or edited.  
**Throws**:

- <code>RangeError</code> - If no user or role is found.


| Param | Type | Description |
| --- | --- | --- |
| user | <code>User</code> \| <code>Role</code> \| <code>string</code> | The user or role to create or edit permission overwrites for. |
| overwrites | <code>PermissionOverwriteOptions</code> | The permission overwrites to apply. |
| [options] | <code>CreateOptions</code> | Additional options for creating or editing permission overwrites. |
| [options.reason] | <code>string</code> | The reason for creating or editing the permission overwrites. |

<a name="PermissionOverwriteManager+set"></a>

### permissionOverwriteManager.set(overwrites, reason) ⇒ <code>Promise</code>
Sets the permission overwrites for a channel.

**Kind**: instance method of [<code>PermissionOverwriteManager</code>](#PermissionOverwriteManager)  
**Returns**: <code>Promise</code> - A promise that resolves when the permission overwrites are set.  

| Param | Type | Description |
| --- | --- | --- |
| overwrites | <code>Array</code> | An array of permission overwrite objects. |
| reason | <code>string</code> | The reason for setting the permission overwrites. |

<a name="PermissionOverwriteManager+edit"></a>

### permissionOverwriteManager.edit(userOrRole, [options], [overwriteOptions]) ⇒ <code>Promise.&lt;Channel&gt;</code>
Edits the permissions for a user or role in the channel.

**Kind**: instance method of [<code>PermissionOverwriteManager</code>](#PermissionOverwriteManager)  
**Returns**: <code>Promise.&lt;Channel&gt;</code> - A promise that resolves with the updated channel object.  
**Throws**:

- <code>RangeError</code> If no user or role is specified.


| Param | Type | Description |
| --- | --- | --- |
| userOrRole | <code>string</code> \| <code>User</code> \| <code>Role</code> | The user or role to edit permissions for. |
| [options] | <code>Object</code> | The options for the permission overwrite. |
| [overwriteOptions] | <code>Object</code> | The options for overwriting the permission overwrite. |
| [overwriteOptions.reason] | <code>string</code> | The reason for the permission overwrite. |
| [overwriteOptions.type] | <code>string</code> | The type of permission overwrite. |

<a name="PermissionOverwriteManager+delete"></a>

### permissionOverwriteManager.delete(userOrRole, reason) ⇒ <code>Promise.&lt;Channel&gt;</code>
Deletes the permission for a user or role in the channel.

**Kind**: instance method of [<code>PermissionOverwriteManager</code>](#PermissionOverwriteManager)  
**Returns**: <code>Promise.&lt;Channel&gt;</code> - A promise that resolves with the updated channel object.  

| Param | Type | Description |
| --- | --- | --- |
| userOrRole | <code>string</code> \| <code>User</code> \| <code>Role</code> | The user or role to delete the permission for. |
| reason | <code>string</code> | The reason for deleting the permission. |

<a name="PermissionOverwriteManager.editOverwrites"></a>

### PermissionOverwriteManager.editOverwrites(existing, overwrites, type) ⇒ <code>object</code>
Edits the existing overwrites with the provided overwrites and type.

**Kind**: static method of [<code>PermissionOverwriteManager</code>](#PermissionOverwriteManager)  
**Returns**: <code>object</code> - - The updated overwrites object.  

| Param | Type | Description |
| --- | --- | --- |
| existing | <code>object</code> | The existing overwrites object. |
| overwrites | <code>object</code> | The new overwrites to apply. |
| type | <code>string</code> \| <code>OverwriteType</code> | The type of overwrite. |

<a name="PermissionOverwriteManager.transformOverwrites"></a>

### PermissionOverwriteManager.transformOverwrites(existing, [overwrites], type) ⇒ <code>Object</code>
Transforms the existing overwrites with the provided overwrites and returns a new objectwith the updated allow and deny properties.

**Kind**: static method of [<code>PermissionOverwriteManager</code>](#PermissionOverwriteManager)  
**Returns**: <code>Object</code> - - The transformed overwrites object.  

| Param | Type | Description |
| --- | --- | --- |
| existing | <code>Object</code> | The existing overwrites object. |
| [overwrites] | <code>Object</code> | The new overwrites to apply. |
| type | <code>string</code> | The type of the overwrites. |

