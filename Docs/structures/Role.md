---
title: Role
sidebar:
  order: 55
---



## Role ⇐ <code>Base</code>
Represents a role in a guild.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [Role](#Role) ⇐ <code>Base</code>
    * [new Role([data], guildId, client)](#new_Role_new)
    * [.guild](#Role+guild) ⇒
    * [.members](#Role+members) ⇒ <code>Collection.&lt;Snowflake, GuildMember&gt;</code>
    * [.fetch([options])](#Role+fetch) ⇒ <code>Promise</code>
    * [.edit(options)](#Role+edit) ⇒ <code>Promise</code>
    * [.delete(reason)](#Role+delete) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.clone()](#Role+clone) ⇒ [<code>Promise.&lt;Role&gt;</code>](#Role)
    * [.setName(name, reason)](#Role+setName) ⇒ <code>Promise</code>
    * [.setPermissions(permissions, reason)](#Role+setPermissions) ⇒ <code>Promise</code>
    * [.setColor(color, reason)](#Role+setColor) ⇒ <code>Promise</code>
    * [.setHoist(hoist, reason)](#Role+setHoist) ⇒ <code>Promise</code>
    * [.setIcon(icon, reason)](#Role+setIcon) ⇒ <code>Promise</code>
    * [.setUnicodeEmoji(unicodeEmoji, reason)](#Role+setUnicodeEmoji) ⇒ <code>Promise</code>
    * [.setMentionable(mentionable, reason)](#Role+setMentionable) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.setPosition(position, reason)](#Role+setPosition) ⇒ [<code>Promise.&lt;Role&gt;</code>](#Role)
    * [.permissionsIn(channel)](#Role+permissionsIn) ⇒ <code>Permissions</code>
    * [.deniedPermissionsIn(channel)](#Role+deniedPermissionsIn) ⇒ <code>PermissionFlags</code> \| <code>null</code>
    * [.iconURL(options)](#Role+iconURL) ⇒ <code>string</code> \| <code>null</code>

<a name="new_Role_new"></a>

### new Role([data], guildId, client)
Constructs a new Role object.


| Param | Type | Description |
| --- | --- | --- |
| [data] | <code>Object</code> | The data for the role. |
| guildId | <code>string</code> | The ID of the guild that the role belongs to. |
| client | <code>Client</code> | The client instance. |

<a name="Role+guild"></a>

### role.guild ⇒
Retrieves the guild associated with this guildId.

**Kind**: instance property of [<code>Role</code>](#Role)  
**Returns**: The guild object if found, otherwise null.  
<a name="Role+members"></a>

### role.members ⇒ <code>Collection.&lt;Snowflake, GuildMember&gt;</code>
Retrieves the members of the guild who have the specified role.

**Kind**: instance property of [<code>Role</code>](#Role)  
**Returns**: <code>Collection.&lt;Snowflake, GuildMember&gt;</code> - A collection of guild members who have the role.  
<a name="Role+fetch"></a>

### role.fetch([options]) ⇒ <code>Promise</code>
Fetches the roles for the guild.

**Kind**: instance method of [<code>Role</code>](#Role)  
**Returns**: <code>Promise</code> - A promise that resolves with the fetched roles.  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | Optional parameters for the fetch operation. |

<a name="Role+edit"></a>

### role.edit(options) ⇒ <code>Promise</code>
Edits the role with the specified options.

**Kind**: instance method of [<code>Role</code>](#Role)  
**Returns**: <code>Promise</code> - A promise that resolves when the role has been edited.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options to edit the role with. |

<a name="Role+delete"></a>

### role.delete(reason) ⇒ <code>Promise.&lt;void&gt;</code>
Deletes the role from the guild.

**Kind**: instance method of [<code>Role</code>](#Role)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the role is deleted.  

| Param | Type | Description |
| --- | --- | --- |
| reason | <code>string</code> | The reason for deleting the role. |

<a name="Role+clone"></a>

### role.clone() ⇒ [<code>Promise.&lt;Role&gt;</code>](#Role)
Clones the current role.

**Kind**: instance method of [<code>Role</code>](#Role)  
**Returns**: [<code>Promise.&lt;Role&gt;</code>](#Role) - A promise that resolves to the cloned role.  
<a name="Role+setName"></a>

### role.setName(name, reason) ⇒ <code>Promise</code>
Sets the name of an object and provides a reason for the change.

**Kind**: instance method of [<code>Role</code>](#Role)  
**Returns**: <code>Promise</code> - A promise that resolves when the name is successfully set.  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The new name to set. |
| reason | <code>string</code> | The reason for changing the name. |

<a name="Role+setPermissions"></a>

### role.setPermissions(permissions, reason) ⇒ <code>Promise</code>
Sets the permissions for an entity with the given reason.

**Kind**: instance method of [<code>Role</code>](#Role)  
**Returns**: <code>Promise</code> - - A promise that resolves when the permissions are set.  

| Param | Type | Description |
| --- | --- | --- |
| permissions | <code>Object</code> | The permissions to set for the entity. |
| reason | <code>string</code> | The reason for setting the permissions. |

<a name="Role+setColor"></a>

### role.setColor(color, reason) ⇒ <code>Promise</code>
Sets the color of an object and provides a reason for the change.

**Kind**: instance method of [<code>Role</code>](#Role)  
**Returns**: <code>Promise</code> - - A promise that resolves when the color is successfully set.  

| Param | Type | Description |
| --- | --- | --- |
| color | <code>string</code> | The new color to set. |
| reason | <code>string</code> | The reason for the color change. |

<a name="Role+setHoist"></a>

### role.setHoist(hoist, reason) ⇒ <code>Promise</code>
Sets the hoist value and reason for a specific item.

**Kind**: instance method of [<code>Role</code>](#Role)  
**Returns**: <code>Promise</code> - - A promise that resolves when the hoist value is set.  

| Param | Type | Description |
| --- | --- | --- |
| hoist | <code>boolean</code> | The hoist value to set. |
| reason | <code>string</code> | The reason for setting the hoist value. |

<a name="Role+setIcon"></a>

### role.setIcon(icon, reason) ⇒ <code>Promise</code>
Sets the icon of an object and provides a reason for the change.

**Kind**: instance method of [<code>Role</code>](#Role)  
**Returns**: <code>Promise</code> - A promise that resolves when the icon is successfully set.  

| Param | Type | Description |
| --- | --- | --- |
| icon | <code>any</code> | The new icon to set. |
| reason | <code>string</code> | The reason for changing the icon. |

<a name="Role+setUnicodeEmoji"></a>

### role.setUnicodeEmoji(unicodeEmoji, reason) ⇒ <code>Promise</code>
Sets the unicode emoji for an entity.

**Kind**: instance method of [<code>Role</code>](#Role)  
**Returns**: <code>Promise</code> - A promise that resolves when the unicode emoji is set.  

| Param | Type | Description |
| --- | --- | --- |
| unicodeEmoji | <code>string</code> | The unicode emoji to set. |
| reason | <code>string</code> | The reason for setting the unicode emoji. |

<a name="Role+setMentionable"></a>

### role.setMentionable(mentionable, reason) ⇒ <code>Promise.&lt;void&gt;</code>
Sets the mentionable status of an entity.

**Kind**: instance method of [<code>Role</code>](#Role)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the mentionable status is set.  

| Param | Type | Description |
| --- | --- | --- |
| mentionable | <code>boolean</code> | Whether the entity should be mentionable or not. |
| reason | <code>string</code> | The reason for setting the mentionable status. |

<a name="Role+setPosition"></a>

### role.setPosition(position, reason) ⇒ [<code>Promise.&lt;Role&gt;</code>](#Role)
Sets the position of the role within the guild's role hierarchy.

**Kind**: instance method of [<code>Role</code>](#Role)  
**Returns**: [<code>Promise.&lt;Role&gt;</code>](#Role) - - A promise that resolves to the modified Role object.  

| Param | Type | Description |
| --- | --- | --- |
| position | <code>number</code> | The new position of the role. |
| reason | <code>string</code> | The reason for modifying the role's position. |

<a name="Role+permissionsIn"></a>

### role.permissionsIn(channel) ⇒ <code>Permissions</code>
Retrieves the permissions of the bot in the specified channel.

**Kind**: instance method of [<code>Role</code>](#Role)  
**Returns**: <code>Permissions</code> - - The permissions of the bot in the channel.  
**Throws**:

- <code>RangeError</code> - If the channel is not cached.


| Param | Type | Description |
| --- | --- | --- |
| channel | <code>string</code> \| <code>Channel</code> | The channel to check permissions in. |

<a name="Role+deniedPermissionsIn"></a>

### role.deniedPermissionsIn(channel) ⇒ <code>PermissionFlags</code> \| <code>null</code>
Retrieves the denied permissions for the specified channel.

**Kind**: instance method of [<code>Role</code>](#Role)  
**Returns**: <code>PermissionFlags</code> \| <code>null</code> - - The denied permissions for the channel, or null if no permissions are found.  
**Throws**:

- <code>RangeError</code> - If the channel is not cached.


| Param | Type | Description |
| --- | --- | --- |
| channel | <code>string</code> \| <code>Channel</code> | The channel or channel ID to retrieve the permissions from. |

<a name="Role+iconURL"></a>

### role.iconURL(options) ⇒ <code>string</code> \| <code>null</code>
Returns the URL of the icon for this role.

**Kind**: instance method of [<code>Role</code>](#Role)  
**Returns**: <code>string</code> \| <code>null</code> - The URL of the icon, or null if no icon is available.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | An optional object containing additional options for the icon URL. |
| [options.dynamic] | <code>boolean</code> | Whether the icon should be dynamically generated. |
| [options.size] | <code>number</code> | The desired size of the icon. |
| [options.format] | <code>string</code> | The desired format of the icon. |

