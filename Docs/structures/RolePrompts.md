<a name="RolePrompts"></a>

## RolePrompts ⇐ <code>Base</code>
It's a class that takes in data, guildId, and client.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [RolePrompts](#RolePrompts) ⇐ <code>Base</code>
    * [new RolePrompts([data], guildId, client)](#new_RolePrompts_new)
    * _instance_
        * [.guild](#RolePrompts+guild) ⇒
    * _static_
        * [.transformRolesData([roles])](#RolePrompts.transformRolesData) ⇒

<a name="new_RolePrompts_new"></a>

### new RolePrompts([data], guildId, client)
It's a constructor for a class that takes in data, guildId, and client.


| Param | Description |
| --- | --- |
| [data] | The data that is being passed in. |
| guildId | The guild ID |
| client | The client |

<a name="RolePrompts+guild"></a>

### rolePrompts.guild ⇒
It returns the guild object of the guild ID that is stored in the database

**Kind**: instance property of [<code>RolePrompts</code>](#RolePrompts)  
**Returns**: The guild object.  
<a name="RolePrompts.transformRolesData"></a>

### RolePrompts.transformRolesData([roles]) ⇒
It takes an object with keys that are either camelCase or snake_case and returns an object with keysthat are camelCase

**Kind**: static method of [<code>RolePrompts</code>](#RolePrompts)  
**Returns**: An object with the following properties:- emojiId- emojiName- name- rolesId  

| Param | Description |
| --- | --- |
| [roles] | The object that contains the data that needs to be transformed. |

