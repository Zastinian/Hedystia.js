<a name="RoleManager"></a>

## RoleManager
**Kind**: global class  

* [RoleManager](#RoleManager)
    * [new RoleManager(client)](#new_RoleManager_new)
    * _instance_
        * [.cache](#RoleManager+cache) ⇒
        * [._add(roles, [guildId], [options])](#RoleManager+_add) ⇒
        * [.fetch(roles, options)](#RoleManager+fetch) ⇒
        * [.create([options])](#RoleManager+create) ⇒
        * [.edit(role, [options])](#RoleManager+edit) ⇒
        * [.delete(role, reason)](#RoleManager+delete) ⇒
        * [.clone([role])](#RoleManager+clone) ⇒
        * [.modifyPosition([options])](#RoleManager+modifyPosition) ⇒
    * _static_
        * [.transformPayload([o], [modifyPosition])](#RoleManager.transformPayload) ⇒

<a name="new_RoleManager_new"></a>

### new RoleManager(client)
It's a constructor function that takes a client parameter and passes it to the super function


| Param | Description |
| --- | --- |
| client | The client object. |

<a name="RoleManager+cache"></a>

### roleManager.cache ⇒
It returns the Collection object.

**Kind**: instance property of [<code>RoleManager</code>](#RoleManager)  
**Returns**: The Collection class.  
<a name="RoleManager+_add"></a>

### roleManager.\_add(roles, [guildId], [options]) ⇒
It adds a role to the cache

**Kind**: instance method of [<code>RoleManager</code>](#RoleManager)  
**Returns**: A role object  

| Param | Description |
| --- | --- |
| roles | The role object or role ID to add to the cache. |
| [guildId] | The guild ID to use for the role. |
| [options] | cache = true, force = false |

<a name="RoleManager+fetch"></a>

### roleManager.fetch(roles, options) ⇒
It fetches all the roles in a guild and returns them

**Kind**: instance method of [<code>RoleManager</code>](#RoleManager)  
**Returns**: The role object  

| Param | Description |
| --- | --- |
| roles | The role(s) to fetch. Can be a role ID, a role object, or an array of role objects. |
| options | An object containing the following properties: |

<a name="RoleManager+create"></a>

### roleManager.create([options]) ⇒
It creates a role

**Kind**: instance method of [<code>RoleManager</code>](#RoleManager)  
**Returns**: A new role object  

| Param | Description |
| --- | --- |
| [options] | Object |

<a name="RoleManager+edit"></a>

### roleManager.edit(role, [options]) ⇒
It edits a role

**Kind**: instance method of [<code>RoleManager</code>](#RoleManager)  
**Returns**: The role object  

| Param | Description |
| --- | --- |
| role | The role to edit. Can be a role object or a role ID. |
| [options] | Object |

<a name="RoleManager+delete"></a>

### roleManager.delete(role, reason) ⇒
`delete` deletes a role

**Kind**: instance method of [<code>RoleManager</code>](#RoleManager)  
**Returns**: The deleted role  

| Param | Description |
| --- | --- |
| role | The role to delete. Can be a role object or a role ID. |
| reason | The reason for the role deletion. |

<a name="RoleManager+clone"></a>

### roleManager.clone([role]) ⇒
`clone` clones a role

**Kind**: instance method of [<code>RoleManager</code>](#RoleManager)  
**Returns**: A new role object  

| Param | Description |
| --- | --- |
| [role] | The role to clone. |

<a name="RoleManager+modifyPosition"></a>

### roleManager.modifyPosition([options]) ⇒
It takes an array of role objects, transforms them into a format that the API can understand, andthen sends them to the API

**Kind**: instance method of [<code>RoleManager</code>](#RoleManager)  
**Returns**: A new cache object with the roles that were modified.  

| Param | Description |
| --- | --- |
| [options] | Object |

<a name="RoleManager.transformPayload"></a>

### RoleManager.transformPayload([o], [modifyPosition]) ⇒
It takes an object, and returns an object with the same properties, but with some of them modified

**Kind**: static method of [<code>RoleManager</code>](#RoleManager)  
**Returns**: A function that takes two parameters, o and modifyPosition.  

| Param | Default | Description |
| --- | --- | --- |
| [o] |  | The object to transform. |
| [modifyPosition] | <code>false</code> | Whether or not to modify the position of the role. |

