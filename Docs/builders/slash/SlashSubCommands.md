---
title: SlashSubCommands
sidebar:
  order: 17
---



## SlashSubCommands
A class representing a slash subcommand for Discord slash commands.

**Kind**: global class  

* [SlashSubCommands](#SlashSubCommands)
    * [new SlashSubCommands(data)](#new_SlashSubCommands_new)
    * [.setName(name)](#SlashSubCommands+setName) ⇒ [<code>SlashSubCommands</code>](#SlashSubCommands)
    * [.setDescription(description)](#SlashSubCommands+setDescription) ⇒ [<code>SlashSubCommands</code>](#SlashSubCommands)
    * [.setDescriptionLocalizations(localizations)](#SlashSubCommands+setDescriptionLocalizations) ⇒ [<code>SlashSubCommands</code>](#SlashSubCommands)
    * [.setNameLocalizations(localizations)](#SlashSubCommands+setNameLocalizations) ⇒ [<code>SlashSubCommands</code>](#SlashSubCommands)
    * [.setOptions(fn)](#SlashSubCommands+setOptions) ⇒ [<code>SlashSubCommands</code>](#SlashSubCommands)
    * [.toJSON()](#SlashSubCommands+toJSON) ⇒ <code>Object</code>

<a name="new_SlashSubCommands_new"></a>

### new SlashSubCommands(data)
Create a new SlashSubCommands instance.


| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | The data for the subcommand. |
| data.name | <code>string</code> | The name of the subcommand. |
| data.description | <code>string</code> | The description of the subcommand. |
| data.name_localizations | <code>Object</code> | The localized names of the subcommand. |
| data.description_localizations | <code>Object</code> | The localized descriptions of the subcommand. |
| data.options | <code>Array.&lt;Object&gt;</code> | The options for the subcommand. |

<a name="SlashSubCommands+setName"></a>

### slashSubCommands.setName(name) ⇒ [<code>SlashSubCommands</code>](#SlashSubCommands)
Set the name of the subcommand.

**Kind**: instance method of [<code>SlashSubCommands</code>](#SlashSubCommands)  
**Returns**: [<code>SlashSubCommands</code>](#SlashSubCommands) - The updated SlashSubCommands instance.  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name of the subcommand. |

<a name="SlashSubCommands+setDescription"></a>

### slashSubCommands.setDescription(description) ⇒ [<code>SlashSubCommands</code>](#SlashSubCommands)
Set the description of the subcommand.

**Kind**: instance method of [<code>SlashSubCommands</code>](#SlashSubCommands)  
**Returns**: [<code>SlashSubCommands</code>](#SlashSubCommands) - The updated SlashSubCommands instance.  

| Param | Type | Description |
| --- | --- | --- |
| description | <code>string</code> | The description of the subcommand. |

<a name="SlashSubCommands+setDescriptionLocalizations"></a>

### slashSubCommands.setDescriptionLocalizations(localizations) ⇒ [<code>SlashSubCommands</code>](#SlashSubCommands)
Set the localized descriptions of the subcommand.

**Kind**: instance method of [<code>SlashSubCommands</code>](#SlashSubCommands)  
**Returns**: [<code>SlashSubCommands</code>](#SlashSubCommands) - The updated SlashSubCommands instance.  

| Param | Type | Description |
| --- | --- | --- |
| localizations | <code>Object</code> | The localized descriptions of the subcommand. |

<a name="SlashSubCommands+setNameLocalizations"></a>

### slashSubCommands.setNameLocalizations(localizations) ⇒ [<code>SlashSubCommands</code>](#SlashSubCommands)
Set the localized names of the subcommand.

**Kind**: instance method of [<code>SlashSubCommands</code>](#SlashSubCommands)  
**Returns**: [<code>SlashSubCommands</code>](#SlashSubCommands) - The updated SlashSubCommands instance.  

| Param | Type | Description |
| --- | --- | --- |
| localizations | <code>Object</code> | The localized names of the subcommand. |

<a name="SlashSubCommands+setOptions"></a>

### slashSubCommands.setOptions(fn) ⇒ [<code>SlashSubCommands</code>](#SlashSubCommands)
Set the options for the subcommand.

**Kind**: instance method of [<code>SlashSubCommands</code>](#SlashSubCommands)  
**Returns**: [<code>SlashSubCommands</code>](#SlashSubCommands) - The updated SlashSubCommands instance.  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>Object</code> \| <code>function</code> | The options for the subcommand. |

<a name="SlashSubCommands+toJSON"></a>

### slashSubCommands.toJSON() ⇒ <code>Object</code>
Convert the SlashSubCommands instance to a JSON object.

**Kind**: instance method of [<code>SlashSubCommands</code>](#SlashSubCommands)  
**Returns**: <code>Object</code> - The JSON representation of the SlashSubCommands instance.  
