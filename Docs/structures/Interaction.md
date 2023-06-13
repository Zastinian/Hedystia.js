<a name="Interaction"></a>

## Interaction ⇐ <code>Base</code>
It's a class that handles interactions with the Discord API.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [Interaction](#Interaction) ⇐ <code>Base</code>
    * [new Interaction(data, guildId, client)](#new_Interaction_new)
    * [.channel](#Interaction+channel) ⇒
    * [.guild](#Interaction+guild) ⇒
    * [.user](#Interaction+user) ⇒
    * [.isChatInput()](#Interaction+isChatInput) ⇒
    * [.isCommand()](#Interaction+isCommand) ⇒
    * [.isUser()](#Interaction+isUser) ⇒
    * [.isMessage()](#Interaction+isMessage) ⇒
    * [.isButton()](#Interaction+isButton) ⇒
    * [.isModal()](#Interaction+isModal) ⇒
    * [.isAutocomplete()](#Interaction+isAutocomplete) ⇒
    * [.isSelect()](#Interaction+isSelect) ⇒
    * [.isContext()](#Interaction+isContext) ⇒
    * [.isDM()](#Interaction+isDM) ⇒
    * [.getValue(name)](#Interaction+getValue) ⇒
    * [.fetchReply()](#Interaction+fetchReply) ⇒
    * [.reply(data)](#Interaction+reply) ⇒
    * [.deferReply(options)](#Interaction+deferReply) ⇒
    * [.modalSubmit(options)](#Interaction+modalSubmit) ⇒
    * [.deleteReply()](#Interaction+deleteReply) ⇒
    * [.editReply(options)](#Interaction+editReply) ⇒
    * [.followUp(options)](#Interaction+followUp) ⇒

<a name="new_Interaction_new"></a>

### new Interaction(data, guildId, client)
It's a constructor function that takes in data, guildId, and client as parameters.


| Param | Description |
| --- | --- |
| data | The data that is passed to the constructor. |
| guildId | The ID of the guild the user is in. |
| client | Discord.Client |

<a name="Interaction+channel"></a>

### interaction.channel ⇒
It returns the channel object of the channel ID that is stored in the message object

**Kind**: instance property of [<code>Interaction</code>](#Interaction)  
**Returns**: The channel object.  
<a name="Interaction+guild"></a>

### interaction.guild ⇒
It returns the guild object of the guild ID that is stored in the database

**Kind**: instance property of [<code>Interaction</code>](#Interaction)  
**Returns**: The guild object.  
<a name="Interaction+user"></a>

### interaction.user ⇒
It returns the user object of the user who sent the message

**Kind**: instance property of [<code>Interaction</code>](#Interaction)  
**Returns**: The user object.  
<a name="Interaction+isChatInput"></a>

### interaction.isChatInput() ⇒
If the commandType is Chat_Input or 1, return true, otherwise return false.

**Kind**: instance method of [<code>Interaction</code>](#Interaction)  
**Returns**: a boolean value.  
<a name="Interaction+isCommand"></a>

### interaction.isCommand() ⇒
If the type is either "Application_Command" or 2, return true, otherwise return false

**Kind**: instance method of [<code>Interaction</code>](#Interaction)  
**Returns**: The return value is a boolean.  
<a name="Interaction+isUser"></a>

### interaction.isUser() ⇒
If the commandType is either "User" or 2, then return true, otherwise return false.

**Kind**: instance method of [<code>Interaction</code>](#Interaction)  
**Returns**: a boolean value.  
<a name="Interaction+isMessage"></a>

### interaction.isMessage() ⇒
If the command type is either "Message" or 3, then return true, otherwise return false.

**Kind**: instance method of [<code>Interaction</code>](#Interaction)  
**Returns**: The return value is a boolean.  
<a name="Interaction+isButton"></a>

### interaction.isButton() ⇒
If the componentType is either "Button" or 2, then return true, otherwise return false.

**Kind**: instance method of [<code>Interaction</code>](#Interaction)  
**Returns**: a boolean value.  
<a name="Interaction+isModal"></a>

### interaction.isModal() ⇒
If the type is either "Modal_Submit" or 5, then return true, otherwise return false.

**Kind**: instance method of [<code>Interaction</code>](#Interaction)  
**Returns**: The return value is a boolean.  
<a name="Interaction+isAutocomplete"></a>

### interaction.isAutocomplete() ⇒
If the type is either "Application_Command_Autocomplete" or 4, return true, otherwise returnfalse.

**Kind**: instance method of [<code>Interaction</code>](#Interaction)  
**Returns**: The return value is a boolean.  
<a name="Interaction+isSelect"></a>

### interaction.isSelect() ⇒
If the componentType is either "Select_Menu" or 3, then return true, otherwise return false.

**Kind**: instance method of [<code>Interaction</code>](#Interaction)  
**Returns**: The return value is a boolean.  
<a name="Interaction+isContext"></a>

### interaction.isContext() ⇒
If the command type is a user, message, 2, or 3, then return true. Otherwise, return false

**Kind**: instance method of [<code>Interaction</code>](#Interaction)  
**Returns**: The return value is a boolean.  
<a name="Interaction+isDM"></a>

### interaction.isDM() ⇒
If the channel type is a DM, return true, otherwise return false

**Kind**: instance method of [<code>Interaction</code>](#Interaction)  
**Returns**: a boolean value.  
<a name="Interaction+getValue"></a>

### interaction.getValue(name) ⇒
It takes a name as an argument, and returns the value of the option with that name

**Kind**: instance method of [<code>Interaction</code>](#Interaction)  
**Returns**: The value of the option that matches the name.  

| Param | Description |
| --- | --- |
| name | The name of the option you want to get the value of. |

<a name="Interaction+fetchReply"></a>

### interaction.fetchReply() ⇒
It fetches the original message that the webhook was created with

**Kind**: instance method of [<code>Interaction</code>](#Interaction)  
**Returns**: The message object.  
<a name="Interaction+reply"></a>

### interaction.reply(data) ⇒
It sends a reply to the user

**Kind**: instance method of [<code>Interaction</code>](#Interaction)  
**Returns**: The reply method returns a Promise that resolves to the reply message.  

| Param | Description |
| --- | --- |
| data | The data to send to the user. |

<a name="Interaction+deferReply"></a>

### interaction.deferReply(options) ⇒
It takes an object of options, creates a payload from those options, and then sends that payload tothe API.

**Kind**: instance method of [<code>Interaction</code>](#Interaction)  
**Returns**: The response from the API.  

| Param |
| --- |
| options | 

<a name="Interaction+modalSubmit"></a>

### interaction.modalSubmit(options) ⇒
It takes an object, creates a new object with the original object and a number, and then sends thatnew object to a URL.

**Kind**: instance method of [<code>Interaction</code>](#Interaction)  
**Returns**: The response from the API.  

| Param | Description |
| --- | --- |
| options | The options object. |

<a name="Interaction+deleteReply"></a>

### interaction.deleteReply() ⇒
It deletes the message that was sent to the webhook

**Kind**: instance method of [<code>Interaction</code>](#Interaction)  
**Returns**: The message that was deleted.  
<a name="Interaction+editReply"></a>

### interaction.editReply(options) ⇒
It edits a message that was sent by a webhook

**Kind**: instance method of [<code>Interaction</code>](#Interaction)  
**Returns**: The message object.  

| Param |
| --- |
| options | 

<a name="Interaction+followUp"></a>

### interaction.followUp(options) ⇒
It takes an object of options, creates a message payload, and then sends it to the webhook.

**Kind**: instance method of [<code>Interaction</code>](#Interaction)  
**Returns**: The message object.  

| Param |
| --- |
| options | 

