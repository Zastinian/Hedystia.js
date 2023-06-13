<a name="GuildTemplate"></a>

## GuildTemplate ⇐ <code>Base</code>
It's a class that represents a guild template.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [GuildTemplate](#GuildTemplate) ⇐ <code>Base</code>
    * [new GuildTemplate([data], client)](#new_GuildTemplate_new)
    * [.guild](#GuildTemplate+guild) ⇒
    * [.fetch()](#GuildTemplate+fetch) ⇒
    * [.sync()](#GuildTemplate+sync) ⇒
    * [.edit([options])](#GuildTemplate+edit) ⇒
    * [.delete()](#GuildTemplate+delete) ⇒
    * [.setName(name)](#GuildTemplate+setName) ⇒
    * [.setDescription(description)](#GuildTemplate+setDescription) ⇒
    * [.createGuild([options])](#GuildTemplate+createGuild) ⇒

<a name="new_GuildTemplate_new"></a>

### new GuildTemplate([data], client)
It's a constructor for a class called Invite.


| Param | Description |
| --- | --- |
| [data] | The data that is passed to the constructor. |
| client | The client that the invite was fetched from. |

<a name="GuildTemplate+guild"></a>

### guildTemplate.guild ⇒
It returns the guild object of the guild that the channel is in

**Kind**: instance property of [<code>GuildTemplate</code>](#GuildTemplate)  
**Returns**: The guild object.  
<a name="GuildTemplate+fetch"></a>

### guildTemplate.fetch() ⇒
It fetches the guild template from the database

**Kind**: instance method of [<code>GuildTemplate</code>](#GuildTemplate)  
**Returns**: The return value of the async function is a Promise.  
<a name="GuildTemplate+sync"></a>

### guildTemplate.sync() ⇒
It syncs the template with the database

**Kind**: instance method of [<code>GuildTemplate</code>](#GuildTemplate)  
**Returns**: The return value of the sync() method.  
<a name="GuildTemplate+edit"></a>

### guildTemplate.edit([options]) ⇒
It edits a template

**Kind**: instance method of [<code>GuildTemplate</code>](#GuildTemplate)  
**Returns**: The return value of the function is the return value of the function that is beingcalled.  

| Param | Description |
| --- | --- |
| [options] | Object |

<a name="GuildTemplate+delete"></a>

### guildTemplate.delete() ⇒
It deletes the template from the database

**Kind**: instance method of [<code>GuildTemplate</code>](#GuildTemplate)  
**Returns**: The return value of the delete method of the templates object of the guild object.  
<a name="GuildTemplate+setName"></a>

### guildTemplate.setName(name) ⇒
It sets the name of the channel

**Kind**: instance method of [<code>GuildTemplate</code>](#GuildTemplate)  
**Returns**: The return value of the edit() method.  

| Param | Description |
| --- | --- |
| name | The name of the channel. |

<a name="GuildTemplate+setDescription"></a>

### guildTemplate.setDescription(description) ⇒
It edits the description of the channel

**Kind**: instance method of [<code>GuildTemplate</code>](#GuildTemplate)  
**Returns**: The description of the channel.  

| Param | Description |
| --- | --- |
| description | The new description of the channel. |

<a name="GuildTemplate+createGuild"></a>

### guildTemplate.createGuild([options]) ⇒
It creates a guild

**Kind**: instance method of [<code>GuildTemplate</code>](#GuildTemplate)  
**Returns**: The client.generateTemplate function is being returned.  

| Param | Description |
| --- | --- |
| [options] | The options for the guild. |

