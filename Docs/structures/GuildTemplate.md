---
title: GuildTemplate
sidebar:
  order: 38
---



## GuildTemplate ⇐ <code>Base</code>
Represents a guild template.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [GuildTemplate](#GuildTemplate) ⇐ <code>Base</code>
    * [new GuildTemplate([data], client)](#new_GuildTemplate_new)
    * [.guild](#GuildTemplate+guild) ⇒
    * [.fetch()](#GuildTemplate+fetch) ⇒ <code>Promise</code>
    * [.sync()](#GuildTemplate+sync) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.edit(options)](#GuildTemplate+edit) ⇒ <code>Promise</code>
    * [.delete()](#GuildTemplate+delete) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.setName(name)](#GuildTemplate+setName) ⇒ <code>Promise</code>
    * [.setDescription(description)](#GuildTemplate+setDescription) ⇒ <code>Promise</code>
    * [.createGuild(options)](#GuildTemplate+createGuild) ⇒ <code>Promise</code>

<a name="new_GuildTemplate_new"></a>

### new GuildTemplate([data], client)
Constructs a new instance of a data object.


| Param | Type | Description |
| --- | --- | --- |
| [data] | <code>Object</code> | The data for the guild template. |
| client | <code>Client</code> | The client instance. |

<a name="GuildTemplate+guild"></a>

### guildTemplate.guild ⇒
Get the guild object associated with this guild ID.

**Kind**: instance property of [<code>GuildTemplate</code>](#GuildTemplate)  
**Returns**: The guild object.  
<a name="GuildTemplate+fetch"></a>

### guildTemplate.fetch() ⇒ <code>Promise</code>
Fetches a guild template using the provided code.

**Kind**: instance method of [<code>GuildTemplate</code>](#GuildTemplate)  
**Returns**: <code>Promise</code> - A promise that resolves to the fetched guild template.  
<a name="GuildTemplate+sync"></a>

### guildTemplate.sync() ⇒ <code>Promise.&lt;void&gt;</code>
Synchronizes the guild templates with the provided code.

**Kind**: instance method of [<code>GuildTemplate</code>](#GuildTemplate)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the synchronization is complete.  
<a name="GuildTemplate+edit"></a>

### guildTemplate.edit(options) ⇒ <code>Promise</code>
Edits the guild template with the provided options.

**Kind**: instance method of [<code>GuildTemplate</code>](#GuildTemplate)  
**Returns**: <code>Promise</code> - A promise that resolves to the result of the template edit.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options to apply to the template edit. |

<a name="GuildTemplate+delete"></a>

### guildTemplate.delete() ⇒ <code>Promise.&lt;void&gt;</code>
Deletes the template with the specified code from the guild.

**Kind**: instance method of [<code>GuildTemplate</code>](#GuildTemplate)  
**Returns**: <code>Promise.&lt;void&gt;</code> - A promise that resolves when the template is successfully deleted.  
<a name="GuildTemplate+setName"></a>

### guildTemplate.setName(name) ⇒ <code>Promise</code>
Sets the name of an object asynchronously.

**Kind**: instance method of [<code>GuildTemplate</code>](#GuildTemplate)  
**Returns**: <code>Promise</code> - A promise that resolves when the name is successfully set.  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The new name to set. |

<a name="GuildTemplate+setDescription"></a>

### guildTemplate.setDescription(description) ⇒ <code>Promise</code>
Sets the description of an object and updates it.

**Kind**: instance method of [<code>GuildTemplate</code>](#GuildTemplate)  
**Returns**: <code>Promise</code> - - A promise that resolves when the description is successfully updated.  

| Param | Type | Description |
| --- | --- | --- |
| description | <code>string</code> | The new description to set. |

<a name="GuildTemplate+createGuild"></a>

### guildTemplate.createGuild(options) ⇒ <code>Promise</code>
Creates a new guild using the provided options.

**Kind**: instance method of [<code>GuildTemplate</code>](#GuildTemplate)  
**Returns**: <code>Promise</code> - A promise that resolves to the generated template for the guild.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options for creating the guild. |

