<a name="Interaction"></a>

## Interaction ⇐ <code>Base</code>
Represents an interaction with a user in a Discord server.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [Interaction](#Interaction) ⇐ <code>Base</code>
    * [new Interaction(data, guildId, client)](#new_Interaction_new)
    * [.guild](#Interaction+guild) ⇒
    * [.user](#Interaction+user) ⇒ <code>User</code> \| <code>null</code>
    * [.isChatInput()](#Interaction+isChatInput) ⇒ <code>boolean</code>
    * [.isCommand()](#Interaction+isCommand) ⇒ <code>boolean</code>
    * [.isUser()](#Interaction+isUser) ⇒ <code>boolean</code>
    * [.isMessage()](#Interaction+isMessage) ⇒ <code>boolean</code>
    * [.isButton()](#Interaction+isButton) ⇒ <code>boolean</code>
    * [.isModal()](#Interaction+isModal) ⇒ <code>boolean</code>
    * [.isAutocomplete()](#Interaction+isAutocomplete) ⇒ <code>boolean</code>
    * [.isSelect()](#Interaction+isSelect) ⇒ <code>boolean</code>
    * [.isContext()](#Interaction+isContext) ⇒ <code>boolean</code>
    * [.isDM()](#Interaction+isDM) ⇒ <code>boolean</code>
    * [.getValue(name)](#Interaction+getValue) ⇒
    * [.fetchReply()](#Interaction+fetchReply) ⇒ <code>Promise.&lt;Message&gt;</code>
    * [.reply(data)](#Interaction+reply) ⇒ <code>Promise.&lt;(Message\|null)&gt;</code>
    * [.deferReply(options)](#Interaction+deferReply) ⇒ <code>Promise</code>
    * [.modalSubmit(options)](#Interaction+modalSubmit) ⇒ <code>Promise</code>
    * [.deleteReply()](#Interaction+deleteReply) ⇒ <code>Promise.&lt;Message&gt;</code>
    * [.editReply(options)](#Interaction+editReply) ⇒ <code>Promise.&lt;Message&gt;</code>
    * [.followUp(options)](#Interaction+followUp) ⇒ <code>Promise.&lt;Message&gt;</code>

<a name="new_Interaction_new"></a>

### new Interaction(data, guildId, client)
Constructs a new instance of the Interaction class.


| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | The data object containing information about the interaction. |
| guildId | <code>string</code> | The ID of the guild where the interaction occurred. |
| client | <code>Client</code> | The client instance. |

<a name="Interaction+guild"></a>

### interaction.guild ⇒
Retrieves the guild associated with this guildId.

**Kind**: instance property of [<code>Interaction</code>](#Interaction)  
**Returns**: The guild object if found, otherwise null.  
<a name="Interaction+user"></a>

### interaction.user ⇒ <code>User</code> \| <code>null</code>
Get the user associated with this instance.

**Kind**: instance property of [<code>Interaction</code>](#Interaction)  
**Returns**: <code>User</code> \| <code>null</code> - The user object, or null if it is not available.  
<a name="Interaction+isChatInput"></a>

### interaction.isChatInput() ⇒ <code>boolean</code>
Checks if the command type is a chat input.

**Kind**: instance method of [<code>Interaction</code>](#Interaction)  
**Returns**: <code>boolean</code> - - true if the command type is a chat input, false otherwise.  
<a name="Interaction+isCommand"></a>

### interaction.isCommand() ⇒ <code>boolean</code>
Checks if the current object is a command.

**Kind**: instance method of [<code>Interaction</code>](#Interaction)  
**Returns**: <code>boolean</code> - - true if the object is a command, false otherwise.  
<a name="Interaction+isUser"></a>

### interaction.isUser() ⇒ <code>boolean</code>
Checks if the command type is "User" or 2.

**Kind**: instance method of [<code>Interaction</code>](#Interaction)  
**Returns**: <code>boolean</code> - - true if the command type is "User" or 2, false otherwise.  
<a name="Interaction+isMessage"></a>

### interaction.isMessage() ⇒ <code>boolean</code>
Checks if the command type is "Message" or 3.

**Kind**: instance method of [<code>Interaction</code>](#Interaction)  
**Returns**: <code>boolean</code> - - true if the command type is "Message" or 3, false otherwise.  
<a name="Interaction+isButton"></a>

### interaction.isButton() ⇒ <code>boolean</code>
Checks if the component type is a button.

**Kind**: instance method of [<code>Interaction</code>](#Interaction)  
**Returns**: <code>boolean</code> - - true if the component type is a button, false otherwise.  
<a name="Interaction+isModal"></a>

### interaction.isModal() ⇒ <code>boolean</code>
Checks if the current instance is a modal.

**Kind**: instance method of [<code>Interaction</code>](#Interaction)  
**Returns**: <code>boolean</code> - - Returns true if the instance is a modal, false otherwise.  
<a name="Interaction+isAutocomplete"></a>

### interaction.isAutocomplete() ⇒ <code>boolean</code>
Checks if the current object is an autocomplete.

**Kind**: instance method of [<code>Interaction</code>](#Interaction)  
**Returns**: <code>boolean</code> - - True if the object is an autocomplete, false otherwise.  
<a name="Interaction+isSelect"></a>

### interaction.isSelect() ⇒ <code>boolean</code>
Checks if the component type is a select menu.

**Kind**: instance method of [<code>Interaction</code>](#Interaction)  
**Returns**: <code>boolean</code> - - true if the component type is a select menu, false otherwise.  
<a name="Interaction+isContext"></a>

### interaction.isContext() ⇒ <code>boolean</code>
Checks if the current context is valid for the given command type.

**Kind**: instance method of [<code>Interaction</code>](#Interaction)  
**Returns**: <code>boolean</code> - - true if the context is valid, false otherwise.  
<a name="Interaction+isDM"></a>

### interaction.isDM() ⇒ <code>boolean</code>
Checks if the current channel is a direct message (DM) channel.

**Kind**: instance method of [<code>Interaction</code>](#Interaction)  
**Returns**: <code>boolean</code> - - True if the channel is a DM channel, false otherwise.  
<a name="Interaction+getValue"></a>

### interaction.getValue(name) ⇒
Retrieves the value associated with the given name from the options list.

**Kind**: instance method of [<code>Interaction</code>](#Interaction)  
**Returns**: The value associated with the given name.  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name of the option to retrieve the value for. |

<a name="Interaction+fetchReply"></a>

### interaction.fetchReply() ⇒ <code>Promise.&lt;Message&gt;</code>
Fetches the reply message from the Discord API using the provided webhook information.

**Kind**: instance method of [<code>Interaction</code>](#Interaction)  
**Returns**: <code>Promise.&lt;Message&gt;</code> - A promise that resolves to the fetched reply message.  
<a name="Interaction+reply"></a>

### interaction.reply(data) ⇒ <code>Promise.&lt;(Message\|null)&gt;</code>
Sends a reply to an interaction with the provided data.

**Kind**: instance method of [<code>Interaction</code>](#Interaction)  
**Returns**: <code>Promise.&lt;(Message\|null)&gt;</code> - - A promise that resolves to the sent message, or null if fetchReply is false.  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | The data to send as the reply. |

<a name="Interaction+deferReply"></a>

### interaction.deferReply(options) ⇒ <code>Promise</code>
Sends a deferred reply to an interaction.

**Kind**: instance method of [<code>Interaction</code>](#Interaction)  
**Returns**: <code>Promise</code> - A promise that resolves when the reply is sent.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options for creating the message payload. |

<a name="Interaction+modalSubmit"></a>

### interaction.modalSubmit(options) ⇒ <code>Promise</code>
Submits a modal form by sending a POST request to the specified endpoint.

**Kind**: instance method of [<code>Interaction</code>](#Interaction)  
**Returns**: <code>Promise</code> - A promise that resolves when the form submission is complete.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options for the modal form submission. |

<a name="Interaction+deleteReply"></a>

### interaction.deleteReply() ⇒ <code>Promise.&lt;Message&gt;</code>
Deletes the reply message associated with the current interaction.

**Kind**: instance method of [<code>Interaction</code>](#Interaction)  
**Returns**: <code>Promise.&lt;Message&gt;</code> - A promise that resolves to the deleted message.  
<a name="Interaction+editReply"></a>

### interaction.editReply(options) ⇒ <code>Promise.&lt;Message&gt;</code>
Edits the reply message of a webhook interaction.

**Kind**: instance method of [<code>Interaction</code>](#Interaction)  
**Returns**: <code>Promise.&lt;Message&gt;</code> - A promise that resolves with the edited message.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options for editing the reply message. |

<a name="Interaction+followUp"></a>

### interaction.followUp(options) ⇒ <code>Promise.&lt;Message&gt;</code>
Sends a follow-up message using the provided options.

**Kind**: instance method of [<code>Interaction</code>](#Interaction)  
**Returns**: <code>Promise.&lt;Message&gt;</code> - A promise that resolves to the sent message.  
**Throws**:

- <code>Error</code> If there was an error sending the follow-up message.


| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> | The options for the follow-up message. |

