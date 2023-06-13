<a name="ApplicationCommand"></a>

## ApplicationCommand
Class representing an application command.

**Kind**: global class  

* [ApplicationCommand](#ApplicationCommand)
    * [new ApplicationCommand(data, guildId, client)](#new_ApplicationCommand_new)
    * [.guild](#ApplicationCommand+guild) ⇒
    * [.fetch([options])](#ApplicationCommand+fetch) ⇒
    * [.edit([options])](#ApplicationCommand+edit) ⇒
    * [.delete()](#ApplicationCommand+delete) ⇒

<a name="new_ApplicationCommand_new"></a>

### new ApplicationCommand(data, guildId, client)
Create an application command object.


| Param | Description |
| --- | --- |
| data | The data object for the command. |
| guildId | The ID of the guild the command belongs to. |
| client | The client object for the command. |

<a name="ApplicationCommand+guild"></a>

### applicationCommand.guild ⇒
Get the guild object if it exists, otherwise return null.

**Kind**: instance property of [<code>ApplicationCommand</code>](#ApplicationCommand)  
**Returns**: The guild object or null.  
<a name="ApplicationCommand+fetch"></a>

### applicationCommand.fetch([options]) ⇒
Fetch the command from the guild or the client.

**Kind**: instance method of [<code>ApplicationCommand</code>](#ApplicationCommand)  
**Returns**: The command object.  

| Param | Description |
| --- | --- |
| [options] | The options to pass to the command. |

<a name="ApplicationCommand+edit"></a>

### applicationCommand.edit([options]) ⇒
Edit the command.

**Kind**: instance method of [<code>ApplicationCommand</code>](#ApplicationCommand)  
**Returns**: The return value of the edit method of the commands property of the guild or application object.  

| Param | Description |
| --- | --- |
| [options] | The options to edit the command with. |

<a name="ApplicationCommand+delete"></a>

### applicationCommand.delete() ⇒
Delete the command from the commands collection.

**Kind**: instance method of [<code>ApplicationCommand</code>](#ApplicationCommand)  
**Returns**: The return value of the delete method.  
