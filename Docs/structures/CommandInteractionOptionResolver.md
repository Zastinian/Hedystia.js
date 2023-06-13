<a name="CommandInteractionOptionResolver"></a>

## CommandInteractionOptionResolver
**Kind**: global class  

* [CommandInteractionOptionResolver](#CommandInteractionOptionResolver)
    * [new CommandInteractionOptionResolver([data], guildId, channelId, client)](#new_CommandInteractionOptionResolver_new)
    * [.guild](#CommandInteractionOptionResolver+guild) ⇒
    * [.channel](#CommandInteractionOptionResolver+channel) ⇒
    * [._parse([options])](#CommandInteractionOptionResolver+_parse) ⇒
    * [.getString(name, [required])](#CommandInteractionOptionResolver+getString) ⇒
    * [.getNumber(name, [required])](#CommandInteractionOptionResolver+getNumber) ⇒
    * [.getInteger(name, [required])](#CommandInteractionOptionResolver+getInteger) ⇒
    * [.getBoolean(name, [required])](#CommandInteractionOptionResolver+getBoolean) ⇒
    * [.getAttachment([required])](#CommandInteractionOptionResolver+getAttachment) ⇒
    * [.getUser(name, [required])](#CommandInteractionOptionResolver+getUser) ⇒
    * [.getMember(name, [required])](#CommandInteractionOptionResolver+getMember) ⇒
    * [.getContextUser()](#CommandInteractionOptionResolver+getContextUser) ⇒
    * [.getMessage()](#CommandInteractionOptionResolver+getMessage) ⇒
    * [.getChannel(name, [required])](#CommandInteractionOptionResolver+getChannel) ⇒
    * [.getRole(name, [required])](#CommandInteractionOptionResolver+getRole) ⇒
    * [.getMentionable(name, [required])](#CommandInteractionOptionResolver+getMentionable) ⇒
    * [.getSubCommand([required])](#CommandInteractionOptionResolver+getSubCommand) ⇒
    * [.getSubCommandGroup([required])](#CommandInteractionOptionResolver+getSubCommandGroup) ⇒

<a name="new_CommandInteractionOptionResolver_new"></a>

### new CommandInteractionOptionResolver([data], guildId, channelId, client)
This function is a constructor for the class, and it takes in a data object, a guildId, achannelId, and a client. It then sets the data object to the data object passed in, sets theoptions object to the options object in the data object, sets the guildId to the guildId passedin, and sets the channelId to the channelId passed in.


| Param | Description |
| --- | --- |
| [data] | The data that is passed to the constructor. |
| guildId | The ID of the guild the poll is in. |
| channelId | The channel ID of the channel the message is in. |
| client | The client that the message was sent from |

<a name="CommandInteractionOptionResolver+guild"></a>

### commandInteractionOptionResolver.guild ⇒
It returns the guild object of the guild ID that is stored in the database

**Kind**: instance property of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: The guild object.  
<a name="CommandInteractionOptionResolver+channel"></a>

### commandInteractionOptionResolver.channel ⇒
It returns the channel object of the channel ID that is stored in the message object

**Kind**: instance property of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: The channel object.  
<a name="CommandInteractionOptionResolver+_parse"></a>

### commandInteractionOptionResolver.\_parse([options]) ⇒
If the first element of the array is an object with a type of 2, then return the result of callingthe function again with the options of the first element.If the first element of the array is an object with a type of 1, then return the result of callingthe function again with the options of the first element.Otherwise, return the array.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: The first option of the first option of the first option of the first option of the firstoption of the first option of the first option of the first option of the first option of thefirst option of the first option of the first option of the first option of the first option ofthe first option of the first option of the first option of the first option of the first optionof the first option of  

| Param | Description |
| --- | --- |
| [options] | The options array from the JSON |

<a name="CommandInteractionOptionResolver+getString"></a>

### commandInteractionOptionResolver.getString(name, [required]) ⇒
It takes a string, and returns a string

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: The value of the option.  

| Param | Default | Description |
| --- | --- | --- |
| name |  | The name of the option you want to get the value of. |
| [required] | <code>false</code> | boolean |

<a name="CommandInteractionOptionResolver+getNumber"></a>

### commandInteractionOptionResolver.getNumber(name, [required]) ⇒
If the option type is not a number, throw an error, otherwise return the value of the option.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: The value of the option.  

| Param | Default | Description |
| --- | --- | --- |
| name |  | The name of the option to be retrieved. |
| [required] | <code>false</code> | boolean |

<a name="CommandInteractionOptionResolver+getInteger"></a>

### commandInteractionOptionResolver.getInteger(name, [required]) ⇒
It takes a string and a boolean as parameters, and returns a number or null.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: The value of the option.  

| Param | Default | Description |
| --- | --- | --- |
| name |  | The name of the option |
| [required] | <code>false</code> | boolean |

<a name="CommandInteractionOptionResolver+getBoolean"></a>

### commandInteractionOptionResolver.getBoolean(name, [required]) ⇒
It takes a string and a boolean as arguments, and returns a boolean.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: The value of the option.  

| Param | Default | Description |
| --- | --- | --- |
| name |  | The name of the option to be retrieved. |
| [required] | <code>false</code> | boolean |

<a name="CommandInteractionOptionResolver+getAttachment"></a>

### commandInteractionOptionResolver.getAttachment([required]) ⇒
It gets the attachment from the message

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: The attachment of the message.  

| Param | Default | Description |
| --- | --- | --- |
| [required] | <code>false</code> | boolean |

<a name="CommandInteractionOptionResolver+getUser"></a>

### commandInteractionOptionResolver.getUser(name, [required]) ⇒
It gets a user from the options

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: The user object.  

| Param | Default | Description |
| --- | --- | --- |
| name |  | The name of the option you want to get |
| [required] | <code>false</code> | boolean |

<a name="CommandInteractionOptionResolver+getMember"></a>

### commandInteractionOptionResolver.getMember(name, [required]) ⇒
It gets a member from the options

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: The member object.  

| Param | Default | Description |
| --- | --- | --- |
| name |  | The name of the option |
| [required] | <code>false</code> | boolean |

<a name="CommandInteractionOptionResolver+getContextUser"></a>

### commandInteractionOptionResolver.getContextUser() ⇒
If the data is not null, and the data is resolved and the data type is not 2, throw a range error.If the data is resolved, and the data type is 2, return the user.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: The user object.  
<a name="CommandInteractionOptionResolver+getMessage"></a>

### commandInteractionOptionResolver.getMessage() ⇒
It returns a message object from a message ID

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: A MessageManager object.  
<a name="CommandInteractionOptionResolver+getChannel"></a>

### commandInteractionOptionResolver.getChannel(name, [required]) ⇒
It gets the channel from the options.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: The channel object.  

| Param | Default | Description |
| --- | --- | --- |
| name |  | The name of the option you want to get. |
| [required] | <code>false</code> | boolean |

<a name="CommandInteractionOptionResolver+getRole"></a>

### commandInteractionOptionResolver.getRole(name, [required]) ⇒
It gets the role from the options

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: The role object.  

| Param | Default | Description |
| --- | --- | --- |
| name |  | The name of the option |
| [required] | <code>false</code> | boolean |

<a name="CommandInteractionOptionResolver+getMentionable"></a>

### commandInteractionOptionResolver.getMentionable(name, [required]) ⇒
It gets the mentionable object from the options

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: The user, member, or role that was selected.  

| Param | Default | Description |
| --- | --- | --- |
| name |  | The name of the option. |
| [required] | <code>false</code> | boolean |

<a name="CommandInteractionOptionResolver+getSubCommand"></a>

### commandInteractionOptionResolver.getSubCommand([required]) ⇒
It returns the name of the subcommand if it exists, otherwise it returns null.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: The name of the sub command.  

| Param | Default | Description |
| --- | --- | --- |
| [required] | <code>false</code> | boolean |

<a name="CommandInteractionOptionResolver+getSubCommandGroup"></a>

### commandInteractionOptionResolver.getSubCommandGroup([required]) ⇒
If the option has a filter, return the filter's name. If the option doesn't have a filter, returnnull

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: The Sub_Command_Group of the option.  

| Param | Default | Description |
| --- | --- | --- |
| [required] | <code>false</code> | boolean |

