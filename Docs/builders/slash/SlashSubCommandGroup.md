<a name="SlashSubCommandGroups"></a>

## SlashSubCommandGroups
Represents a sub-command group for a slash command.

**Kind**: global class  

* [SlashSubCommandGroups](#SlashSubCommandGroups)
    * [new SlashSubCommandGroups([data])](#new_SlashSubCommandGroups_new)
    * [.setName(name)](#SlashSubCommandGroups+setName) ⇒ [<code>SlashSubCommandGroups</code>](#SlashSubCommandGroups)
    * [.setDescription(description)](#SlashSubCommandGroups+setDescription) ⇒ [<code>SlashSubCommandGroups</code>](#SlashSubCommandGroups)
    * [.setDescriptionLocalizations(localizations)](#SlashSubCommandGroups+setDescriptionLocalizations) ⇒ [<code>SlashSubCommandGroups</code>](#SlashSubCommandGroups)
    * [.setNameLocalizations([localizations])](#SlashSubCommandGroups+setNameLocalizations) ⇒ [<code>SlashSubCommandGroups</code>](#SlashSubCommandGroups)
    * [.addSubCommands(fn)](#SlashSubCommandGroups+addSubCommands) ⇒ [<code>SlashSubCommandGroups</code>](#SlashSubCommandGroups)
    * [.toJSON()](#SlashSubCommandGroups+toJSON) ⇒ <code>Object</code>

<a name="new_SlashSubCommandGroups_new"></a>

### new SlashSubCommandGroups([data])

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [data] | <code>Object</code> | <code>{}</code> | The data for the sub-command group. |
| [data.name] | <code>string</code> |  | The name of the sub-command group. |
| [data.description] | <code>string</code> |  | The description of the sub-command group. |
| [data.nameLocalizations] | <code>Object</code> |  | The name localizations of the sub-command group. |
| [data.descriptionLocalizations] | <code>Object</code> |  | The description localizations of the sub-command group. |
| [data.options] | <code>Array.&lt;Object&gt;</code> |  | The sub-commands of the sub-command group. |

<a name="SlashSubCommandGroups+setName"></a>

### slashSubCommandGroups.setName(name) ⇒ [<code>SlashSubCommandGroups</code>](#SlashSubCommandGroups)
Sets the name of the sub-command group.

**Kind**: instance method of [<code>SlashSubCommandGroups</code>](#SlashSubCommandGroups)  
**Returns**: [<code>SlashSubCommandGroups</code>](#SlashSubCommandGroups) - The sub-command group object.  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name of the sub-command group. |

<a name="SlashSubCommandGroups+setDescription"></a>

### slashSubCommandGroups.setDescription(description) ⇒ [<code>SlashSubCommandGroups</code>](#SlashSubCommandGroups)
Sets the description of the sub-command group.

**Kind**: instance method of [<code>SlashSubCommandGroups</code>](#SlashSubCommandGroups)  
**Returns**: [<code>SlashSubCommandGroups</code>](#SlashSubCommandGroups) - The sub-command group object.  

| Param | Type | Description |
| --- | --- | --- |
| description | <code>string</code> | The description of the sub-command group. |

<a name="SlashSubCommandGroups+setDescriptionLocalizations"></a>

### slashSubCommandGroups.setDescriptionLocalizations(localizations) ⇒ [<code>SlashSubCommandGroups</code>](#SlashSubCommandGroups)
Sets the description localizations of the sub-command group.

**Kind**: instance method of [<code>SlashSubCommandGroups</code>](#SlashSubCommandGroups)  
**Returns**: [<code>SlashSubCommandGroups</code>](#SlashSubCommandGroups) - The sub-command group object.  

| Param | Type | Description |
| --- | --- | --- |
| localizations | <code>Object</code> | The description localizations of the sub-command group. |

<a name="SlashSubCommandGroups+setNameLocalizations"></a>

### slashSubCommandGroups.setNameLocalizations([localizations]) ⇒ [<code>SlashSubCommandGroups</code>](#SlashSubCommandGroups)
Sets the name localizations of the sub-command group.

**Kind**: instance method of [<code>SlashSubCommandGroups</code>](#SlashSubCommandGroups)  
**Returns**: [<code>SlashSubCommandGroups</code>](#SlashSubCommandGroups) - The sub-command group object.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [localizations] | <code>Object</code> | <code>{}</code> | The name localizations of the sub-command group. |

<a name="SlashSubCommandGroups+addSubCommands"></a>

### slashSubCommandGroups.addSubCommands(fn) ⇒ [<code>SlashSubCommandGroups</code>](#SlashSubCommandGroups)
Adds sub-commands to the sub-command group.

**Kind**: instance method of [<code>SlashSubCommandGroups</code>](#SlashSubCommandGroups)  
**Returns**: [<code>SlashSubCommandGroups</code>](#SlashSubCommandGroups) - The sub-command group object.  
**Throws**:

- <code>RangeError</code> Will throw an error if the sub-command builder is not of type 'SlashSubCommandBuilder'.


| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> \| <code>Array.&lt;Object&gt;</code> | The sub-command builder function or array of sub-command objects. |

<a name="SlashSubCommandGroups+toJSON"></a>

### slashSubCommandGroups.toJSON() ⇒ <code>Object</code>
Returns a JSON representation of the sub-command group.

**Kind**: instance method of [<code>SlashSubCommandGroups</code>](#SlashSubCommandGroups)  
**Returns**: <code>Object</code> - The JSON representation of the sub-command group.  
