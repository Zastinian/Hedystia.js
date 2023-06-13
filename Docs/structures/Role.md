<a name="Role"></a>

## Role ⇐ <code>Base</code>
It's a class that represents a role in a guild

**Kind**: global class  
**Extends**: <code>Base</code>  

* [Role](#Role) ⇐ <code>Base</code>
    * [new Role([data], guildId, client)](#new_Role_new)
    * [.guild](#Role+guild) ⇒
    * [.members](#Role+members) ⇒
    * [.fetch([options])](#Role+fetch) ⇒
    * [.edit([options])](#Role+edit) ⇒
    * [.delete(reason)](#Role+delete) ⇒
    * [.clone()](#Role+clone) ⇒
    * [.setName(name, reason)](#Role+setName) ⇒
    * [.setPermissions(permissions, reason)](#Role+setPermissions) ⇒
    * [.setColor(color, reason)](#Role+setColor) ⇒
    * [.setHoist(hoist, reason)](#Role+setHoist) ⇒
    * [.setIcon(icon, reason)](#Role+setIcon) ⇒
    * [.setUnicodeEmoji(unicodeEmoji, reason)](#Role+setUnicodeEmoji) ⇒
    * [.setMentionable(mentionable, reason)](#Role+setMentionable) ⇒
    * [.setPosition(position, reason)](#Role+setPosition) ⇒
    * [.permissionsIn(channel)](#Role+permissionsIn) ⇒
    * [.deniedPermissionsIn(channel)](#Role+deniedPermissionsIn) ⇒
    * [.iconURL([options])](#Role+iconURL) ⇒

<a name="new_Role_new"></a>

### new Role([data], guildId, client)
It's a constructor for a class called Role.


| Param | Description |
| --- | --- |
| [data] | The data that was received from the API. |
| guildId | The ID of the guild the role is in |
| client | Discord.Client |

<a name="Role+guild"></a>

### role.guild ⇒
If the guild is not in the cache, add it to the cache. If it is in the cache, return it. If it isnot in the cache and cannot be added to the cache, return null.

**Kind**: instance property of [<code>Role</code>](#Role)  
**Returns**: The guild object.  
<a name="Role+members"></a>

### role.members ⇒
It returns an array of all the members that have the role

**Kind**: instance property of [<code>Role</code>](#Role)  
**Returns**: A collection of members that have the role.  
<a name="Role+fetch"></a>

### role.fetch([options]) ⇒
It fetches the role from the guild

**Kind**: instance method of [<code>Role</code>](#Role)  
**Returns**: The role object.  

| Param | Description |
| --- | --- |
| [options] | Fetch options. |

<a name="Role+edit"></a>

### role.edit([options]) ⇒
It edits the role

**Kind**: instance method of [<code>Role</code>](#Role)  
**Returns**: The return value is the edited role.  

| Param | Description |
| --- | --- |
| [options] | Object |

<a name="Role+delete"></a>

### role.delete(reason) ⇒
It deletes the role

**Kind**: instance method of [<code>Role</code>](#Role)  
**Returns**: The role object.  

| Param | Description |
| --- | --- |
| reason | The reason for the deletion. |

<a name="Role+clone"></a>

### role.clone() ⇒
It clones the role

**Kind**: instance method of [<code>Role</code>](#Role)  
**Returns**: The cloned role.  
<a name="Role+setName"></a>

### role.setName(name, reason) ⇒
It edits the name of the channel

**Kind**: instance method of [<code>Role</code>](#Role)  
**Returns**: The name of the channel.  

| Param | Description |
| --- | --- |
| name | The new name of the channel. |
| reason | The reason for the edit. |

<a name="Role+setPermissions"></a>

### role.setPermissions(permissions, reason) ⇒
It edits the permissions of a role

**Kind**: instance method of [<code>Role</code>](#Role)  
**Returns**: The permissions object.  

| Param | Description |
| --- | --- |
| permissions | The permissions to set on the role. |
| reason | The reason for the update. |

<a name="Role+setColor"></a>

### role.setColor(color, reason) ⇒
It sets the color of the embed

**Kind**: instance method of [<code>Role</code>](#Role)  
**Returns**: The color and reason.  

| Param | Description |
| --- | --- |
| color | The color of the embed. |
| reason | The reason for the role color change. |

<a name="Role+setHoist"></a>

### role.setHoist(hoist, reason) ⇒
It sets the role's hoist property to the value of the hoist parameter

**Kind**: instance method of [<code>Role</code>](#Role)  
**Returns**: The role object.  

| Param | Description |
| --- | --- |
| hoist | Boolean - Whether or not to hoist the role in the user list. |
| reason | The reason for the role update. |

<a name="Role+setIcon"></a>

### role.setIcon(icon, reason) ⇒
It sets the icon of the guild

**Kind**: instance method of [<code>Role</code>](#Role)  
**Returns**: The return value of the edit function.  

| Param | Description |
| --- | --- |
| icon | The icon of the guild. |
| reason | The reason for the change (maximum 256 characters) |

<a name="Role+setUnicodeEmoji"></a>

### role.setUnicodeEmoji(unicodeEmoji, reason) ⇒
This function edits the emoji with the unicode emoji and reason.

**Kind**: instance method of [<code>Role</code>](#Role)  
**Returns**: The return value of the edit method.  

| Param | Description |
| --- | --- |
| unicodeEmoji | The unicode emoji to set. |
| reason | The reason for the edit. |

<a name="Role+setMentionable"></a>

### role.setMentionable(mentionable, reason) ⇒
It sets the role to be mentionable or not.

**Kind**: instance method of [<code>Role</code>](#Role)  
**Returns**: The role object.  

| Param | Description |
| --- | --- |
| mentionable | Boolean - Whether the role should be mentionable or not |
| reason | The reason for the role update. |

<a name="Role+setPosition"></a>

### role.setPosition(position, reason) ⇒
It sets the position of a role

**Kind**: instance method of [<code>Role</code>](#Role)  
**Returns**: The role object.  

| Param | Description |
| --- | --- |
| position | The position you want to set the role to. |
| reason | The reason for the change. |

<a name="Role+permissionsIn"></a>

### role.permissionsIn(channel) ⇒
It returns the permissions of a user in a channel

**Kind**: instance method of [<code>Role</code>](#Role)  
**Returns**: The permissions of the user in the channel.  

| Param | Description |
| --- | --- |
| channel | The channel to get the permissions for. |

<a name="Role+deniedPermissionsIn"></a>

### role.deniedPermissionsIn(channel) ⇒
It returns the permissions that the role is denied in the channel

**Kind**: instance method of [<code>Role</code>](#Role)  
**Returns**: The permissions that are denied to the role.  

| Param | Description |
| --- | --- |
| channel | The channel to check the permissions in. |

<a name="Role+iconURL"></a>

### role.iconURL([options]) ⇒
"If the role has an icon, return the role's icon URL, otherwise return null."The function takes an optional parameter, options, which is an object

**Kind**: instance method of [<code>Role</code>](#Role)  
**Returns**: The URL of the role's icon.  

| Param | Description |
| --- | --- |
| [options] | Object |

