---
title: GuildVanityManager
sidebar:
  order: 28
---



## GuildVanityManager ⇐ <code>Base</code>
Represents a manager for handling guild vanity URLs.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [GuildVanityManager](#GuildVanityManager) ⇐ <code>Base</code>
    * [new GuildVanityManager(guildId, client)](#new_GuildVanityManager_new)
    * [.fetch([guild])](#GuildVanityManager+fetch) ⇒ <code>Promise.&lt;GuildVanity&gt;</code>
    * [.edit(code, [guild])](#GuildVanityManager+edit) ⇒ <code>Promise.&lt;GuildVanity&gt;</code>

<a name="new_GuildVanityManager_new"></a>

### new GuildVanityManager(guildId, client)
Constructs a new instance of the class.


| Param | Type | Description |
| --- | --- | --- |
| guildId | <code>string</code> | The ID of the guild. |
| client | <code>Client</code> | The client object. |

<a name="GuildVanityManager+fetch"></a>

### guildVanityManager.fetch([guild]) ⇒ <code>Promise.&lt;GuildVanity&gt;</code>
Fetches the vanity URL for the specified guild.

**Kind**: instance method of [<code>GuildVanityManager</code>](#GuildVanityManager)  
**Returns**: <code>Promise.&lt;GuildVanity&gt;</code> - - A promise that resolves to a GuildVanity object containing the vanity URL information.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [guild] | <code>string</code> \| <code>Guild</code> | <code>&quot;this.guildId&quot;</code> | The guild ID or Guild object. Defaults to the current guild. |

<a name="GuildVanityManager+edit"></a>

### guildVanityManager.edit(code, [guild]) ⇒ <code>Promise.&lt;GuildVanity&gt;</code>
Edits the code for a guild's vanity URL.

**Kind**: instance method of [<code>GuildVanityManager</code>](#GuildVanityManager)  
**Returns**: <code>Promise.&lt;GuildVanity&gt;</code> - A promise that resolves with the updated GuildVanity object.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| code | <code>string</code> |  | The new code for the vanity URL. |
| [guild] | <code>string</code> \| <code>Guild</code> | <code>&quot;this.guildId&quot;</code> | The guild ID or guild object to edit the vanity URL for. |

