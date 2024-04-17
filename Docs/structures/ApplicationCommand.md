---
title: ApplicationCommand
sidebar:
  order: 3
---



## ApplicationCommand ⇐ <code>Base</code>
Represents an application command.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [ApplicationCommand](#ApplicationCommand) ⇐ <code>Base</code>
    * [new ApplicationCommand([data], guildId, client)](#new_ApplicationCommand_new)
    * [.guild](#ApplicationCommand+guild) ⇒
    * [.fetch([options])](#ApplicationCommand+fetch) ⇒ <code>Promise</code>
    * [.edit(options)](#ApplicationCommand+edit) ⇒ <code>Promise</code>
    * [.delete()](#ApplicationCommand+delete) ⇒ <code>Promise.&lt;void&gt;</code>

<a name="new_ApplicationCommand_new"></a>

### new ApplicationCommand([data], guildId, client)
Create an application command object.


| Param | Type | Description |
| --- | --- | --- |
| [data] | <code>Object</code> | The data object containing the command information. |
| guildId | <code>string</code> | The ID of the guild the command belongs to. |
| client | <code>Client</code> | The client instance. |

<a name="ApplicationCommand+guild"></a>

### applicationCommand.guild ⇒
Get the guild object if it exists, otherwise return null.

**Kind**: instance property of [<code>ApplicationCommand</code>](#ApplicationCommand)  
**Returns**: The guild object or null.  
<a name="ApplicationCommand+fetch"></a>

### applicationCommand.fetch([options]) ⇒ <code>Promise</code>
Fetches the commands for a guild or the global application.

**Kind**: instance method of [<code>ApplicationCommand</code>](#ApplicationCommand)  
**Returns**: <code>Promise</code> - - A promise that resolves with the fetched commands.  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | Optional parameters for the fetch operation. |

<a name="ApplicationCommand+edit"></a>

### applicationCommand.edit(options) ⇒ <code>Promise</code>
Edits the command with the specified options.If the command is associated with a guild, it will edit the guild command.Otherwise, it will edit the global command.

**Kind**: instance method of [<code>ApplicationCommand</code>](#ApplicationCommand)  
**Returns**: <code>Promise</code> - A promise that resolves when the command is successfully edited.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options to edit the command with. |

<a name="ApplicationCommand+delete"></a>

### applicationCommand.delete() ⇒ <code>Promise.&lt;void&gt;</code>
Deletes the command from the guild or the global application.

**Kind**: instance method of [<code>ApplicationCommand</code>](#ApplicationCommand)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the command is successfully deleted.  
