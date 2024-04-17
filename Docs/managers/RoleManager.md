---
title: RoleManager
sidebar:
  order: 36
---



## RoleManager ⇐ <code>Base</code>
Represents a Role Manager that handles operations related to roles in a guild.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [RoleManager](#RoleManager) ⇐ <code>Base</code>
    * [new RoleManager(client)](#new_RoleManager_new)
    * _instance_
        * [.cache](#RoleManager+cache) ⇒
        * [._add(roles, [guildId], [options])](#RoleManager+_add) ⇒ <code>Role</code> \| <code>null</code>
        * [.fetch(roles, options)](#RoleManager+fetch) ⇒ <code>Promise</code>
        * [.create(options)](#RoleManager+create) ⇒ <code>Promise.&lt;Role&gt;</code>
        * [.edit(role, [options])](#RoleManager+edit) ⇒ <code>Promise.&lt;Role&gt;</code>
        * [.delete(role, reason)](#RoleManager+delete) ⇒ <code>Promise.&lt;Role&gt;</code>
        * [.clone([role])](#RoleManager+clone) ⇒ <code>Promise</code>
        * [.modifyPosition([options])](#RoleManager+modifyPosition) ⇒ <code>Promise</code>
    * _static_
        * [.transformPayload(o, [modifyPosition])](#RoleManager.transformPayload) ⇒ <code>Promise.&lt;object&gt;</code>

<a name="new_RoleManager_new"></a>

### new RoleManager(client)
Constructs a new instance of the class.


| Param | Type | Description |
| --- | --- | --- |
| client | <code>Client</code> | The client object used for communication with the server. |

<a name="RoleManager+cache"></a>

### roleManager.cache ⇒
Getter method for the cache property.

**Kind**: instance property of [<code>RoleManager</code>](#RoleManager)  
**Returns**: The Collection object representing the cache.  
<a name="RoleManager+_add"></a>

### roleManager.\_add(roles, [guildId], [options]) ⇒ <code>Role</code> \| <code>null</code>
Adds a role to the cache and returns the role object.

**Kind**: instance method of [<code>RoleManager</code>](#RoleManager)  
**Returns**: <code>Role</code> \| <code>null</code> - The role object that was added to the cache  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| roles | <code>string</code> \| <code>Role</code> |  | The role ID or role object to add to the cache. |
| [guildId] | <code>string</code> | <code>&quot;this.guildId&quot;</code> | The ID of the guild the role belongs to. |
| [options] | <code>object</code> | <code>{cache: true, force: false}</code> | Additional options for role caching. |
| [options.cache] | <code>boolean</code> | <code>true</code> | Whether to cache the role object. |
| [options.force] | <code>boolean</code> | <code>false</code> | Whether to force fetching the role from the API even if it is already in the cache. |

<a name="RoleManager+fetch"></a>

### roleManager.fetch(roles, options) ⇒ <code>Promise</code>
Fetches roles from the server based on the provided roles and options.

**Kind**: instance method of [<code>RoleManager</code>](#RoleManager)  
**Returns**: <code>Promise</code> - - A promise that resolves to the fetched roles.  

| Param | Type | Description |
| --- | --- | --- |
| roles | <code>string</code> \| <code>object</code> | The roles to fetch. Can be a string representing a role ID or an object containing options. |
| options | <code>object</code> | The options for fetching roles. Can contain properties like cache and force. |

<a name="RoleManager+create"></a>

### roleManager.create(options) ⇒ <code>Promise.&lt;Role&gt;</code>
Creates a new role in the guild with the given options.

**Kind**: instance method of [<code>RoleManager</code>](#RoleManager)  
**Returns**: <code>Promise.&lt;Role&gt;</code> - A promise that resolves with the created role.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options for creating the role. |
| options.reason | <code>string</code> | The reason for creating the role. |
| options.position | <code>number</code> | The position of the role in the hierarchy. |

<a name="RoleManager+edit"></a>

### roleManager.edit(role, [options]) ⇒ <code>Promise.&lt;Role&gt;</code>
Edits a role in the guild.

**Kind**: instance method of [<code>RoleManager</code>](#RoleManager)  
**Returns**: <code>Promise.&lt;Role&gt;</code> - A promise that resolves with the edited role object.  

| Param | Type | Description |
| --- | --- | --- |
| role | <code>string</code> \| <code>Role</code> | The role ID or role object to edit. |
| [options] | <code>Object</code> | Additional options for editing the role. |
| [options.reason] | <code>string</code> | The reason for editing the role. |
| [options.position] | <code>number</code> | The new position of the role. |

<a name="RoleManager+delete"></a>

### roleManager.delete(role, reason) ⇒ <code>Promise.&lt;Role&gt;</code>
Deletes a role from the guild.

**Kind**: instance method of [<code>RoleManager</code>](#RoleManager)  
**Returns**: <code>Promise.&lt;Role&gt;</code> - - The deleted role.  
**Throws**:

- <code>Error</code> - If the role cannot be deleted.


| Param | Type | Description |
| --- | --- | --- |
| role | <code>string</code> \| <code>Role</code> | The role to delete. Can be either the role ID or the Role object. |
| reason | <code>string</code> | The reason for deleting the role. |

<a name="RoleManager+clone"></a>

### roleManager.clone([role]) ⇒ <code>Promise</code>
Clones a role by creating a new instance of it.

**Kind**: instance method of [<code>RoleManager</code>](#RoleManager)  
**Returns**: <code>Promise</code> - - A promise that resolves with the cloned role.  
**Throws**:

- <code>RangeError</code> - If the role is not found in the cache.


| Param | Type | Description |
| --- | --- | --- |
| [role] | <code>string</code> \| <code>Object</code> | The role to clone. Can be either a role ID or a role object. |

<a name="RoleManager+modifyPosition"></a>

### roleManager.modifyPosition([options]) ⇒ <code>Promise</code>
Modifies the position of roles in a guild.

**Kind**: instance method of [<code>RoleManager</code>](#RoleManager)  
**Returns**: <code>Promise</code> - A promise that resolves with the modified roles.  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | The options for modifying the position. |
| [options.reason] | <code>string</code> | The reason for the modification. |
| [options.data] | <code>Array</code> | The data containing the roles to modify. |

<a name="RoleManager.transformPayload"></a>

### RoleManager.transformPayload(o, [modifyPosition]) ⇒ <code>Promise.&lt;object&gt;</code>
Transforms the payload object based on the provided parameters.

**Kind**: static method of [<code>RoleManager</code>](#RoleManager)  
**Returns**: <code>Promise.&lt;object&gt;</code> - - The transformed payload object.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| o | <code>object</code> |  | The payload object to transform. |
| [modifyPosition] | <code>boolean</code> | <code>false</code> | Whether to modify the position property. |

