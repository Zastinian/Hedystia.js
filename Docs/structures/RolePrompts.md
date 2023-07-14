<a name="RolePrompts"></a>

## RolePrompts ⇐ <code>Base</code>
Represents a RolePrompts object that extends the Base class.

**Kind**: global class  
**Extends**: <code>Base</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| partial | <code>boolean</code> | Indicates if the RolePrompts object is partial or not. |
| guildId | <code>string</code> | The ID of the guild associated with the RolePrompts. |
| description | <code>string</code> \| <code>null</code> | The description of the RolePrompts. |
|  | <code>boolean</code> \| <code>null</code> |  |


* [RolePrompts](#RolePrompts) ⇐ <code>Base</code>
    * [new RolePrompts([data], guildId, client)](#new_RolePrompts_new)
    * _instance_
        * [.guild](#RolePrompts+guild) ⇒
    * _static_
        * [.transformRolesData(roles)](#RolePrompts.transformRolesData) ⇒ <code>Object</code>

<a name="new_RolePrompts_new"></a>

### new RolePrompts([data], guildId, client)
Constructs a new instance of the class.


| Param | Type | Description |
| --- | --- | --- |
| [data] | <code>Object</code> | The data object containing the properties of the RolePrompts. |
| guildId | <code>string</code> | The ID of the guild associated with the RolePrompts. |
| client | <code>Client</code> | The client object associated with the RolePrompts. |

<a name="RolePrompts+guild"></a>

### rolePrompts.guild ⇒
Get the guild object associated with this guildId.

**Kind**: instance property of [<code>RolePrompts</code>](#RolePrompts)  
**Returns**: The guild object.  
<a name="RolePrompts.transformRolesData"></a>

### RolePrompts.transformRolesData(roles) ⇒ <code>Object</code>
Transforms the roles data object by extracting specific properties and assigning default values if necessary.

**Kind**: static method of [<code>RolePrompts</code>](#RolePrompts)  
**Returns**: <code>Object</code> - - The transformed roles data object with extracted properties and default values.  

| Param | Type | Description |
| --- | --- | --- |
| roles | <code>Object</code> | The roles data object. |

