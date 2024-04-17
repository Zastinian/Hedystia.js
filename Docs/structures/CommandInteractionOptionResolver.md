---
title: CommandInteractionOptionResolver
sidebar:
  order: 15
---

## Classes

<dl>
<dt><a href="#CommandInteractionOptionResolver">CommandInteractionOptionResolver</a> ⇐ <code>Base</code></dt>
<dd></dd>
<dt><a href="#CommandInteractionOptionResolver">CommandInteractionOptionResolver</a></dt>
<dd></dd>
</dl>

<a name="CommandInteractionOptionResolver"></a>

## CommandInteractionOptionResolver ⇐ <code>Base</code>
**Kind**: global class  
**Extends**: <code>Base</code>  

* [CommandInteractionOptionResolver](#CommandInteractionOptionResolver) ⇐ <code>Base</code>
    * [new CommandInteractionOptionResolver([data], guildId, channelId, client)](#new_CommandInteractionOptionResolver_new)
    * [new CommandInteractionOptionResolver([data], guildId, channelId, client)](#new_CommandInteractionOptionResolver_new)
    * [.guild](#CommandInteractionOptionResolver+guild) ⇒
    * [.channel](#CommandInteractionOptionResolver+channel) ⇒
    * [._parse([options])](#CommandInteractionOptionResolver+_parse) ⇒ <code>Array</code> \| <code>null</code>
    * [.getString(name, [required])](#CommandInteractionOptionResolver+getString) ⇒ <code>string</code> \| <code>null</code>
    * [.getNumber(name, [required])](#CommandInteractionOptionResolver+getNumber) ⇒ <code>number</code> \| <code>null</code>
    * [.getInteger(name, [required])](#CommandInteractionOptionResolver+getInteger) ⇒ <code>number</code> \| <code>null</code>
    * [.getBoolean(name, [required])](#CommandInteractionOptionResolver+getBoolean) ⇒ <code>boolean</code> \| <code>null</code>
    * [.getAttachment([required])](#CommandInteractionOptionResolver+getAttachment) ⇒ <code>MessageAttachment</code> \| <code>null</code>
    * [.getUser(name, [required])](#CommandInteractionOptionResolver+getUser) ⇒ <code>User</code> \| <code>null</code>
    * [.getMember(name, [required])](#CommandInteractionOptionResolver+getMember) ⇒ <code>GuildMember</code> \| <code>null</code>
    * [.getContextUser()](#CommandInteractionOptionResolver+getContextUser) ⇒ <code>User</code> \| <code>null</code>
    * [.getMessage()](#CommandInteractionOptionResolver+getMessage) ⇒ <code>Message</code> \| <code>null</code>
    * [.getChannel(name, [required])](#CommandInteractionOptionResolver+getChannel) ⇒ <code>Channel</code> \| <code>null</code>
    * [.getRole(name, [required])](#CommandInteractionOptionResolver+getRole) ⇒ <code>Role</code> \| <code>null</code>
    * [.getMentionable(name, [required])](#CommandInteractionOptionResolver+getMentionable) ⇒ <code>User</code> \| <code>GuildMember</code> \| <code>Role</code> \| <code>null</code>
    * [.getSubCommand([required])](#CommandInteractionOptionResolver+getSubCommand) ⇒ <code>string</code> \| <code>null</code>
    * [.getSubCommandGroup([required])](#CommandInteractionOptionResolver+getSubCommandGroup) ⇒ <code>string</code> \| <code>null</code>

<a name="new_CommandInteractionOptionResolver_new"></a>

### new CommandInteractionOptionResolver([data], guildId, channelId, client)
A class that provides methods to resolve command interaction options.


| Param | Type | Description |
| --- | --- | --- |
| [data] | <code>Object</code> | The data object containing the command interaction options. |
| guildId | <code>string</code> | The ID of the guild where the command interaction occurred. |
| channelId | <code>string</code> | The ID of the channel where the command interaction occurred. |
| client | <code>Client</code> | The client instance. |

<a name="new_CommandInteractionOptionResolver_new"></a>

### new CommandInteractionOptionResolver([data], guildId, channelId, client)
Constructs a new instance of the class.


| Param | Type | Description |
| --- | --- | --- |
| [data] | <code>Object</code> | The data object for the instance. |
| guildId | <code>string</code> | The ID of the guild. |
| channelId | <code>string</code> | The ID of the channel. |
| client | <code>Client</code> | The client object. |

<a name="CommandInteractionOptionResolver+guild"></a>

### commandInteractionOptionResolver.guild ⇒
Get the guild object associated with this guildId.

**Kind**: instance property of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: The guild object.  
<a name="CommandInteractionOptionResolver+channel"></a>

### commandInteractionOptionResolver.channel ⇒
Get the channel object associated with this instance.

**Kind**: instance property of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: The channel object.  
<a name="CommandInteractionOptionResolver+_parse"></a>

### commandInteractionOptionResolver.\_parse([options]) ⇒ <code>Array</code> \| <code>null</code>
Parses the options array and returns the parsed result.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: <code>Array</code> \| <code>null</code> - - The parsed options array or null if the data type is 2 or 3, or if the options array is empty.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Array</code> | <code>this.options</code> | The options array to parse. |

<a name="CommandInteractionOptionResolver+getString"></a>

### commandInteractionOptionResolver.getString(name, [required]) ⇒ <code>string</code> \| <code>null</code>
Retrieves the value of a string option by its name.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: <code>string</code> \| <code>null</code> - The value of the option, or null if the option is not found and not required.  
**Throws**:

- <code>RangeError</code> If the option is required and not found, or if the option is found but its type is not string.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> |  | The name of the option. |
| [required] | <code>boolean</code> | <code>false</code> | Indicates whether the option is required. If set to true and the option is not found, a RangeError is thrown. |

<a name="CommandInteractionOptionResolver+getNumber"></a>

### commandInteractionOptionResolver.getNumber(name, [required]) ⇒ <code>number</code> \| <code>null</code>
Retrieves the value of a number option by its name.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: <code>number</code> \| <code>null</code> - The value of the number option, or null if the option is not found.  
**Throws**:

- <code>RangeError</code> If the option is required and not found, or if the option type is not Number.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> |  | The name of the option. |
| [required] | <code>boolean</code> | <code>false</code> | Indicates whether the option is required. If set to true and the option is not found, a RangeError is thrown. |

<a name="CommandInteractionOptionResolver+getInteger"></a>

### commandInteractionOptionResolver.getInteger(name, [required]) ⇒ <code>number</code> \| <code>null</code>
Retrieves the integer value of the specified option name from the options list.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: <code>number</code> \| <code>null</code> - The integer value of the option, or null if the option is not found.  
**Throws**:

- <code>RangeError</code> If the option is required and not found, or if the option type is not an integer.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> |  | The name of the option to retrieve. |
| [required] | <code>boolean</code> | <code>false</code> | Indicates whether the option is required. If set to true and the option is not found, a RangeError will be thrown. |

<a name="CommandInteractionOptionResolver+getBoolean"></a>

### commandInteractionOptionResolver.getBoolean(name, [required]) ⇒ <code>boolean</code> \| <code>null</code>
Retrieves the boolean value of the specified option name from the options list.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: <code>boolean</code> \| <code>null</code> - - The boolean value of the option, or null if the option is not found and not required.  
**Throws**:

- <code>RangeError</code> - If the option is required and not found, or if the option type is not boolean.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> |  | The name of the option to retrieve. |
| [required] | <code>boolean</code> | <code>false</code> | Indicates whether the option is required. If set to true and the option is not found, a RangeError is thrown. |

<a name="CommandInteractionOptionResolver+getAttachment"></a>

### commandInteractionOptionResolver.getAttachment([required]) ⇒ <code>MessageAttachment</code> \| <code>null</code>
Retrieves an attachment from the message data based on the provided options.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: <code>MessageAttachment</code> \| <code>null</code> - - The retrieved attachment, or null if no attachment is found and it is not required.  
**Throws**:

- <code>RangeError</code> - If the required parameter is set to true and no attachment is found.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [required] | <code>boolean</code> | <code>false</code> | Indicates whether the attachment is required. If set to true and no attachment is found, a RangeError will be thrown. |

<a name="CommandInteractionOptionResolver+getUser"></a>

### commandInteractionOptionResolver.getUser(name, [required]) ⇒ <code>User</code> \| <code>null</code>
Retrieves a user based on the given name.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: <code>User</code> \| <code>null</code> - - The retrieved user object, or null if the user is not found and is not required.  
**Throws**:

- <code>RangeError</code> - If the option type is not User or if the option name does not match the specified option and is required.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> |  | The name of the user to retrieve. |
| [required] | <code>boolean</code> | <code>false</code> | Indicates whether the user is required. If set to true and the user is not found, a RangeError will be thrown. |

<a name="CommandInteractionOptionResolver+getMember"></a>

### commandInteractionOptionResolver.getMember(name, [required]) ⇒ <code>GuildMember</code> \| <code>null</code>
Retrieves a member by name from the guild's options.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: <code>GuildMember</code> \| <code>null</code> - The retrieved member, or null if not found (unless required is set to true).  
**Throws**:

- <code>RangeError</code> If the option type is not User or if the option name does not match the specified option (if required is set to true).


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> |  | The name of the member to retrieve. |
| [required] | <code>boolean</code> | <code>false</code> | Whether the member is required. If set to true and the member is not found, a RangeError will be thrown. |

<a name="CommandInteractionOptionResolver+getContextUser"></a>

### commandInteractionOptionResolver.getContextUser() ⇒ <code>User</code> \| <code>null</code>
Retrieves the context user from the data object.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: <code>User</code> \| <code>null</code> - The context user, or null if the data object is not available.  
**Throws**:

- <code>RangeError</code> If the data object is resolved and its type is not 2 (context user).

<a name="CommandInteractionOptionResolver+getMessage"></a>

### commandInteractionOptionResolver.getMessage() ⇒ <code>Message</code> \| <code>null</code>
Retrieves the message associated with the current context.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: <code>Message</code> \| <code>null</code> - The message object if found, otherwise null.  
**Throws**:

- <code>RangeError</code> If the message is not of type "Context Message".

<a name="CommandInteractionOptionResolver+getChannel"></a>

### commandInteractionOptionResolver.getChannel(name, [required]) ⇒ <code>Channel</code> \| <code>null</code>
Retrieves a channel based on its name from the available options.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: <code>Channel</code> \| <code>null</code> - - The retrieved channel or null if not found (unless required is set to true).  
**Throws**:

- <code>RangeError</code> - If the type of option is not Channel or if the name of the option does not match the selected option (if required is set to true).


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> |  | The name of the channel to retrieve. |
| [required] | <code>boolean</code> | <code>false</code> | Whether the channel is required. If set to true and the channel is not found, a RangeError will be thrown. |

<a name="CommandInteractionOptionResolver+getRole"></a>

### commandInteractionOptionResolver.getRole(name, [required]) ⇒ <code>Role</code> \| <code>null</code>
Retrieves the role with the specified name from the options.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: <code>Role</code> \| <code>null</code> - The role object if found, or null if not found and not required.  
**Throws**:

- <code>RangeError</code> If the option type is not Role and required is set to true, or if the name of the option does not match the selected option and required is set to true.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> |  | The name of the role to retrieve. |
| [required] | <code>boolean</code> | <code>false</code> | Whether the role is required. If set to true and the role is not found, a RangeError will be thrown. |

<a name="CommandInteractionOptionResolver+getMentionable"></a>

### commandInteractionOptionResolver.getMentionable(name, [required]) ⇒ <code>User</code> \| <code>GuildMember</code> \| <code>Role</code> \| <code>null</code>
Retrieves the mentionable value for the specified option name.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: <code>User</code> \| <code>GuildMember</code> \| <code>Role</code> \| <code>null</code> - The mentionable value for the option, or null if not found.  
**Throws**:

- <code>RangeError</code> If the option type is not Mentionable.
- <code>RangeError</code> If the name of the option does not match the selected option and is required.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> |  | The name of the option. |
| [required] | <code>boolean</code> | <code>false</code> | Indicates whether the option is required. |

<a name="CommandInteractionOptionResolver+getSubCommand"></a>

### commandInteractionOptionResolver.getSubCommand([required]) ⇒ <code>string</code> \| <code>null</code>
Retrieves the sub command name from the options array.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: <code>string</code> \| <code>null</code> - - The name of the sub command, or null if not found.  
**Throws**:

- <code>RangeError</code> - If the sub command is required but not found.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [required] | <code>boolean</code> | <code>false</code> | Indicates whether the sub command is required. |

<a name="CommandInteractionOptionResolver+getSubCommandGroup"></a>

### commandInteractionOptionResolver.getSubCommandGroup([required]) ⇒ <code>string</code> \| <code>null</code>
Retrieves the sub command group from the options array.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: <code>string</code> \| <code>null</code> - - The name of the sub command group, or null if not found.  
**Throws**:

- <code>RangeError</code> - If the sub command group is required but not found.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [required] | <code>boolean</code> | <code>false</code> | Indicates whether the sub command group is required. |

<a name="CommandInteractionOptionResolver"></a>

## CommandInteractionOptionResolver
**Kind**: global class  

* [CommandInteractionOptionResolver](#CommandInteractionOptionResolver)
    * [new CommandInteractionOptionResolver([data], guildId, channelId, client)](#new_CommandInteractionOptionResolver_new)
    * [new CommandInteractionOptionResolver([data], guildId, channelId, client)](#new_CommandInteractionOptionResolver_new)
    * [.guild](#CommandInteractionOptionResolver+guild) ⇒
    * [.channel](#CommandInteractionOptionResolver+channel) ⇒
    * [._parse([options])](#CommandInteractionOptionResolver+_parse) ⇒ <code>Array</code> \| <code>null</code>
    * [.getString(name, [required])](#CommandInteractionOptionResolver+getString) ⇒ <code>string</code> \| <code>null</code>
    * [.getNumber(name, [required])](#CommandInteractionOptionResolver+getNumber) ⇒ <code>number</code> \| <code>null</code>
    * [.getInteger(name, [required])](#CommandInteractionOptionResolver+getInteger) ⇒ <code>number</code> \| <code>null</code>
    * [.getBoolean(name, [required])](#CommandInteractionOptionResolver+getBoolean) ⇒ <code>boolean</code> \| <code>null</code>
    * [.getAttachment([required])](#CommandInteractionOptionResolver+getAttachment) ⇒ <code>MessageAttachment</code> \| <code>null</code>
    * [.getUser(name, [required])](#CommandInteractionOptionResolver+getUser) ⇒ <code>User</code> \| <code>null</code>
    * [.getMember(name, [required])](#CommandInteractionOptionResolver+getMember) ⇒ <code>GuildMember</code> \| <code>null</code>
    * [.getContextUser()](#CommandInteractionOptionResolver+getContextUser) ⇒ <code>User</code> \| <code>null</code>
    * [.getMessage()](#CommandInteractionOptionResolver+getMessage) ⇒ <code>Message</code> \| <code>null</code>
    * [.getChannel(name, [required])](#CommandInteractionOptionResolver+getChannel) ⇒ <code>Channel</code> \| <code>null</code>
    * [.getRole(name, [required])](#CommandInteractionOptionResolver+getRole) ⇒ <code>Role</code> \| <code>null</code>
    * [.getMentionable(name, [required])](#CommandInteractionOptionResolver+getMentionable) ⇒ <code>User</code> \| <code>GuildMember</code> \| <code>Role</code> \| <code>null</code>
    * [.getSubCommand([required])](#CommandInteractionOptionResolver+getSubCommand) ⇒ <code>string</code> \| <code>null</code>
    * [.getSubCommandGroup([required])](#CommandInteractionOptionResolver+getSubCommandGroup) ⇒ <code>string</code> \| <code>null</code>

<a name="new_CommandInteractionOptionResolver_new"></a>

### new CommandInteractionOptionResolver([data], guildId, channelId, client)
A class that provides methods to resolve command interaction options.


| Param | Type | Description |
| --- | --- | --- |
| [data] | <code>Object</code> | The data object containing the command interaction options. |
| guildId | <code>string</code> | The ID of the guild where the command interaction occurred. |
| channelId | <code>string</code> | The ID of the channel where the command interaction occurred. |
| client | <code>Client</code> | The client instance. |

<a name="new_CommandInteractionOptionResolver_new"></a>

### new CommandInteractionOptionResolver([data], guildId, channelId, client)
Constructs a new instance of the class.


| Param | Type | Description |
| --- | --- | --- |
| [data] | <code>Object</code> | The data object for the instance. |
| guildId | <code>string</code> | The ID of the guild. |
| channelId | <code>string</code> | The ID of the channel. |
| client | <code>Client</code> | The client object. |

<a name="CommandInteractionOptionResolver+guild"></a>

### commandInteractionOptionResolver.guild ⇒
Get the guild object associated with this guildId.

**Kind**: instance property of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: The guild object.  
<a name="CommandInteractionOptionResolver+channel"></a>

### commandInteractionOptionResolver.channel ⇒
Get the channel object associated with this instance.

**Kind**: instance property of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: The channel object.  
<a name="CommandInteractionOptionResolver+_parse"></a>

### commandInteractionOptionResolver.\_parse([options]) ⇒ <code>Array</code> \| <code>null</code>
Parses the options array and returns the parsed result.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: <code>Array</code> \| <code>null</code> - - The parsed options array or null if the data type is 2 or 3, or if the options array is empty.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Array</code> | <code>this.options</code> | The options array to parse. |

<a name="CommandInteractionOptionResolver+getString"></a>

### commandInteractionOptionResolver.getString(name, [required]) ⇒ <code>string</code> \| <code>null</code>
Retrieves the value of a string option by its name.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: <code>string</code> \| <code>null</code> - The value of the option, or null if the option is not found and not required.  
**Throws**:

- <code>RangeError</code> If the option is required and not found, or if the option is found but its type is not string.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> |  | The name of the option. |
| [required] | <code>boolean</code> | <code>false</code> | Indicates whether the option is required. If set to true and the option is not found, a RangeError is thrown. |

<a name="CommandInteractionOptionResolver+getNumber"></a>

### commandInteractionOptionResolver.getNumber(name, [required]) ⇒ <code>number</code> \| <code>null</code>
Retrieves the value of a number option by its name.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: <code>number</code> \| <code>null</code> - The value of the number option, or null if the option is not found.  
**Throws**:

- <code>RangeError</code> If the option is required and not found, or if the option type is not Number.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> |  | The name of the option. |
| [required] | <code>boolean</code> | <code>false</code> | Indicates whether the option is required. If set to true and the option is not found, a RangeError is thrown. |

<a name="CommandInteractionOptionResolver+getInteger"></a>

### commandInteractionOptionResolver.getInteger(name, [required]) ⇒ <code>number</code> \| <code>null</code>
Retrieves the integer value of the specified option name from the options list.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: <code>number</code> \| <code>null</code> - The integer value of the option, or null if the option is not found.  
**Throws**:

- <code>RangeError</code> If the option is required and not found, or if the option type is not an integer.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> |  | The name of the option to retrieve. |
| [required] | <code>boolean</code> | <code>false</code> | Indicates whether the option is required. If set to true and the option is not found, a RangeError will be thrown. |

<a name="CommandInteractionOptionResolver+getBoolean"></a>

### commandInteractionOptionResolver.getBoolean(name, [required]) ⇒ <code>boolean</code> \| <code>null</code>
Retrieves the boolean value of the specified option name from the options list.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: <code>boolean</code> \| <code>null</code> - - The boolean value of the option, or null if the option is not found and not required.  
**Throws**:

- <code>RangeError</code> - If the option is required and not found, or if the option type is not boolean.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> |  | The name of the option to retrieve. |
| [required] | <code>boolean</code> | <code>false</code> | Indicates whether the option is required. If set to true and the option is not found, a RangeError is thrown. |

<a name="CommandInteractionOptionResolver+getAttachment"></a>

### commandInteractionOptionResolver.getAttachment([required]) ⇒ <code>MessageAttachment</code> \| <code>null</code>
Retrieves an attachment from the message data based on the provided options.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: <code>MessageAttachment</code> \| <code>null</code> - - The retrieved attachment, or null if no attachment is found and it is not required.  
**Throws**:

- <code>RangeError</code> - If the required parameter is set to true and no attachment is found.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [required] | <code>boolean</code> | <code>false</code> | Indicates whether the attachment is required. If set to true and no attachment is found, a RangeError will be thrown. |

<a name="CommandInteractionOptionResolver+getUser"></a>

### commandInteractionOptionResolver.getUser(name, [required]) ⇒ <code>User</code> \| <code>null</code>
Retrieves a user based on the given name.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: <code>User</code> \| <code>null</code> - - The retrieved user object, or null if the user is not found and is not required.  
**Throws**:

- <code>RangeError</code> - If the option type is not User or if the option name does not match the specified option and is required.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> |  | The name of the user to retrieve. |
| [required] | <code>boolean</code> | <code>false</code> | Indicates whether the user is required. If set to true and the user is not found, a RangeError will be thrown. |

<a name="CommandInteractionOptionResolver+getMember"></a>

### commandInteractionOptionResolver.getMember(name, [required]) ⇒ <code>GuildMember</code> \| <code>null</code>
Retrieves a member by name from the guild's options.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: <code>GuildMember</code> \| <code>null</code> - The retrieved member, or null if not found (unless required is set to true).  
**Throws**:

- <code>RangeError</code> If the option type is not User or if the option name does not match the specified option (if required is set to true).


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> |  | The name of the member to retrieve. |
| [required] | <code>boolean</code> | <code>false</code> | Whether the member is required. If set to true and the member is not found, a RangeError will be thrown. |

<a name="CommandInteractionOptionResolver+getContextUser"></a>

### commandInteractionOptionResolver.getContextUser() ⇒ <code>User</code> \| <code>null</code>
Retrieves the context user from the data object.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: <code>User</code> \| <code>null</code> - The context user, or null if the data object is not available.  
**Throws**:

- <code>RangeError</code> If the data object is resolved and its type is not 2 (context user).

<a name="CommandInteractionOptionResolver+getMessage"></a>

### commandInteractionOptionResolver.getMessage() ⇒ <code>Message</code> \| <code>null</code>
Retrieves the message associated with the current context.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: <code>Message</code> \| <code>null</code> - The message object if found, otherwise null.  
**Throws**:

- <code>RangeError</code> If the message is not of type "Context Message".

<a name="CommandInteractionOptionResolver+getChannel"></a>

### commandInteractionOptionResolver.getChannel(name, [required]) ⇒ <code>Channel</code> \| <code>null</code>
Retrieves a channel based on its name from the available options.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: <code>Channel</code> \| <code>null</code> - - The retrieved channel or null if not found (unless required is set to true).  
**Throws**:

- <code>RangeError</code> - If the type of option is not Channel or if the name of the option does not match the selected option (if required is set to true).


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> |  | The name of the channel to retrieve. |
| [required] | <code>boolean</code> | <code>false</code> | Whether the channel is required. If set to true and the channel is not found, a RangeError will be thrown. |

<a name="CommandInteractionOptionResolver+getRole"></a>

### commandInteractionOptionResolver.getRole(name, [required]) ⇒ <code>Role</code> \| <code>null</code>
Retrieves the role with the specified name from the options.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: <code>Role</code> \| <code>null</code> - The role object if found, or null if not found and not required.  
**Throws**:

- <code>RangeError</code> If the option type is not Role and required is set to true, or if the name of the option does not match the selected option and required is set to true.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> |  | The name of the role to retrieve. |
| [required] | <code>boolean</code> | <code>false</code> | Whether the role is required. If set to true and the role is not found, a RangeError will be thrown. |

<a name="CommandInteractionOptionResolver+getMentionable"></a>

### commandInteractionOptionResolver.getMentionable(name, [required]) ⇒ <code>User</code> \| <code>GuildMember</code> \| <code>Role</code> \| <code>null</code>
Retrieves the mentionable value for the specified option name.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: <code>User</code> \| <code>GuildMember</code> \| <code>Role</code> \| <code>null</code> - The mentionable value for the option, or null if not found.  
**Throws**:

- <code>RangeError</code> If the option type is not Mentionable.
- <code>RangeError</code> If the name of the option does not match the selected option and is required.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> |  | The name of the option. |
| [required] | <code>boolean</code> | <code>false</code> | Indicates whether the option is required. |

<a name="CommandInteractionOptionResolver+getSubCommand"></a>

### commandInteractionOptionResolver.getSubCommand([required]) ⇒ <code>string</code> \| <code>null</code>
Retrieves the sub command name from the options array.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: <code>string</code> \| <code>null</code> - - The name of the sub command, or null if not found.  
**Throws**:

- <code>RangeError</code> - If the sub command is required but not found.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [required] | <code>boolean</code> | <code>false</code> | Indicates whether the sub command is required. |

<a name="CommandInteractionOptionResolver+getSubCommandGroup"></a>

### commandInteractionOptionResolver.getSubCommandGroup([required]) ⇒ <code>string</code> \| <code>null</code>
Retrieves the sub command group from the options array.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: <code>string</code> \| <code>null</code> - - The name of the sub command group, or null if not found.  
**Throws**:

- <code>RangeError</code> - If the sub command group is required but not found.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [required] | <code>boolean</code> | <code>false</code> | Indicates whether the sub command group is required. |

