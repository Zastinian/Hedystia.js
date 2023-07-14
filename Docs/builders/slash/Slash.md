<a name="Slash"></a>

## Slash
A class representing a Discord Slash Command.

**Kind**: global class  

* [Slash](#Slash)
    * [new Slash([data])](#new_Slash_new)
    * [.setType(type)](#Slash+setType) ⇒ [<code>Slash</code>](#Slash)
    * [.setName(name)](#Slash+setName) ⇒ [<code>Slash</code>](#Slash)
    * [.setDescriptionLocalizations(description)](#Slash+setDescriptionLocalizations) ⇒ [<code>Slash</code>](#Slash)
    * [.setNameLocalizations([localizations])](#Slash+setNameLocalizations) ⇒ [<code>Slash</code>](#Slash)
    * [.setDescription(description)](#Slash+setDescription) ⇒ [<code>Slash</code>](#Slash)
    * [.setDefaultMemberPermissions(...permission)](#Slash+setDefaultMemberPermissions) ⇒ [<code>Slash</code>](#Slash)
    * [.setDmPermission(permission)](#Slash+setDmPermission) ⇒ [<code>Slash</code>](#Slash)
    * [.setOptions(fn)](#Slash+setOptions) ⇒ [<code>Slash</code>](#Slash)
    * [.addSubCommandGroups(fn)](#Slash+addSubCommandGroups) ⇒ [<code>Slash</code>](#Slash)
    * [.addSubCommands(fn)](#Slash+addSubCommands) ⇒ [<code>Slash</code>](#Slash)
    * [.validation()](#Slash+validation)
    * [.toJSON()](#Slash+toJSON) ⇒ <code>Object</code>

<a name="new_Slash_new"></a>

### new Slash([data])

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [data] | <code>Object</code> |  | The data for the Slash Command. |
| [data.type] | <code>number</code> \| <code>string</code> | <code>&quot;Chat_Input&quot;</code> | The type of the command. |
| [data.name] | <code>string</code> |  | The name of the command. |
| [data.name_localizations] | <code>Object</code> |  | The localizations of the command name. |
| [data.description] | <code>string</code> |  | The description of the command. |
| [data.description_localizations] | <code>Object</code> |  | The localizations of the command description. |
| [data.options] | <code>Array.&lt;Object&gt;</code> |  | The options of the command. |
| [data.default_member_permissions] | <code>string</code> |  | The default permissions of the command for members. |
| [data.dm_permission] | <code>boolean</code> | <code>true</code> | Whether the command can be used in DMs. |

<a name="Slash+setType"></a>

### slash.setType(type) ⇒ [<code>Slash</code>](#Slash)
Sets the type of the Slash Command.

**Kind**: instance method of [<code>Slash</code>](#Slash)  
**Returns**: [<code>Slash</code>](#Slash) - The Slash instance.  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>number</code> \| <code>string</code> | The type of the command. |

<a name="Slash+setName"></a>

### slash.setName(name) ⇒ [<code>Slash</code>](#Slash)
Sets the name of the Slash Command.

**Kind**: instance method of [<code>Slash</code>](#Slash)  
**Returns**: [<code>Slash</code>](#Slash) - The Slash instance.  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name of the command. |

<a name="Slash+setDescriptionLocalizations"></a>

### slash.setDescriptionLocalizations(description) ⇒ [<code>Slash</code>](#Slash)
Sets the description of the Slash Command.

**Kind**: instance method of [<code>Slash</code>](#Slash)  
**Returns**: [<code>Slash</code>](#Slash) - The Slash instance.  

| Param | Type | Description |
| --- | --- | --- |
| description | <code>string</code> | The description of the command. |

<a name="Slash+setNameLocalizations"></a>

### slash.setNameLocalizations([localizations]) ⇒ [<code>Slash</code>](#Slash)
Sets the localizations of the name of the Slash Command.

**Kind**: instance method of [<code>Slash</code>](#Slash)  
**Returns**: [<code>Slash</code>](#Slash) - The Slash instance.  

| Param | Type | Description |
| --- | --- | --- |
| [localizations] | <code>Object</code> | The localizations of the command name. |

<a name="Slash+setDescription"></a>

### slash.setDescription(description) ⇒ [<code>Slash</code>](#Slash)
Sets the description of the Slash Command.

**Kind**: instance method of [<code>Slash</code>](#Slash)  
**Returns**: [<code>Slash</code>](#Slash) - The Slash instance.  

| Param | Type | Description |
| --- | --- | --- |
| description | <code>string</code> | The description of the command. |

<a name="Slash+setDefaultMemberPermissions"></a>

### slash.setDefaultMemberPermissions(...permission) ⇒ [<code>Slash</code>](#Slash)
Sets the default member permissions of the Slash Command.

**Kind**: instance method of [<code>Slash</code>](#Slash)  
**Returns**: [<code>Slash</code>](#Slash) - The Slash instance.  

| Param | Type | Description |
| --- | --- | --- |
| ...permission | <code>number</code> | The permissions of the command for members. |

<a name="Slash+setDmPermission"></a>

### slash.setDmPermission(permission) ⇒ [<code>Slash</code>](#Slash)
Sets whether the Slash Command can be used in DMs.

**Kind**: instance method of [<code>Slash</code>](#Slash)  
**Returns**: [<code>Slash</code>](#Slash) - The Slash instance.  

| Param | Type | Description |
| --- | --- | --- |
| permission | <code>boolean</code> | Whether the command can be used in DMs. |

<a name="Slash+setOptions"></a>

### slash.setOptions(fn) ⇒ [<code>Slash</code>](#Slash)
Sets the options of the Slash Command.

**Kind**: instance method of [<code>Slash</code>](#Slash)  
**Returns**: [<code>Slash</code>](#Slash) - The Slash instance.  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>Array.&lt;Object&gt;</code> \| <code>function</code> | The options of the command or a function that returns options. |

<a name="Slash+addSubCommandGroups"></a>

### slash.addSubCommandGroups(fn) ⇒ [<code>Slash</code>](#Slash)
Adds sub-command groups to the Slash Command.

**Kind**: instance method of [<code>Slash</code>](#Slash)  
**Returns**: [<code>Slash</code>](#Slash) - The Slash instance.  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>Array.&lt;Object&gt;</code> \| <code>function</code> | The sub-command groups or a function that returns sub-command groups. |

<a name="Slash+addSubCommands"></a>

### slash.addSubCommands(fn) ⇒ [<code>Slash</code>](#Slash)
Adds sub-commands to the Slash Command.

**Kind**: instance method of [<code>Slash</code>](#Slash)  
**Returns**: [<code>Slash</code>](#Slash) - The Slash instance.  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>Array.&lt;Object&gt;</code> \| <code>function</code> | The sub-commands or a function that returns sub-commands. |

<a name="Slash+validation"></a>

### slash.validation()
Validates the properties of the ApplicationCommand object.

**Kind**: instance method of [<code>Slash</code>](#Slash)  
**Throws**:

- <code>TypeError</code> If the Application Command Type is invalid or dmPermission is not a boolean.
- <code>RangeError</code> If the context menu command has a description or options, or if the name or description length is invalid, or if the number of options exceeds 25.

<a name="Slash+toJSON"></a>

### slash.toJSON() ⇒ <code>Object</code>
Converts the ApplicationCommand object to JSON format.

**Kind**: instance method of [<code>Slash</code>](#Slash)  
**Returns**: <code>Object</code> - The ApplicationCommand object in JSON format.  
**Throws**:

- <code>TypeError</code> If the Application Command Type is invalid or dmPermission is not a boolean.
- <code>RangeError</code> If the context menu command has a description or options, or if the name or description length is invalid, or if the number of options exceeds 25.

