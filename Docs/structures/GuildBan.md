---
title: GuildBan
sidebar:
  order: 30
---



## GuildBan ⇐ <code>Base</code>
Represents a ban for a user in a guild.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [GuildBan](#GuildBan) ⇐ <code>Base</code>
    * [new GuildBan(data, guildId, client)](#new_GuildBan_new)
    * [.partial](#GuildBan+partial) : <code>boolean</code>
    * [.reason](#GuildBan+reason) : <code>string</code>
    * [.user](#GuildBan+user)
    * [.guildId](#GuildBan+guildId) : <code>string</code>
    * [.guild](#GuildBan+guild) : <code>Guild</code>
    * [.fetch([options])](#GuildBan+fetch) ⇒ [<code>Promise.&lt;GuildBan&gt;</code>](#GuildBan)
    * [.remove([options])](#GuildBan+remove) ⇒ [<code>Promise.&lt;GuildBan&gt;</code>](#GuildBan)

<a name="new_GuildBan_new"></a>

### new GuildBan(data, guildId, client)

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | The data for the ban. |
| guildId | <code>string</code> | The ID of the guild. |
| client | <code>Client</code> | The instantiating client |

<a name="GuildBan+partial"></a>

### guildBan.partial : <code>boolean</code>
Whether or not the ban is partial.

**Kind**: instance property of [<code>GuildBan</code>](#GuildBan)  
<a name="GuildBan+reason"></a>

### guildBan.reason : <code>string</code>
The reason for the ban.

**Kind**: instance property of [<code>GuildBan</code>](#GuildBan)  
<a name="GuildBan+user"></a>

### guildBan.user
The user who was banned.

**Kind**: instance property of [<code>GuildBan</code>](#GuildBan)  
<a name="GuildBan+guildId"></a>

### guildBan.guildId : <code>string</code>
The ID of the guild the ban was issued in.

**Kind**: instance property of [<code>GuildBan</code>](#GuildBan)  
<a name="GuildBan+guild"></a>

### guildBan.guild : <code>Guild</code>
The guild that this ban was issued in.

**Kind**: instance property of [<code>GuildBan</code>](#GuildBan)  
**Read only**: true  
<a name="GuildBan+fetch"></a>

### guildBan.fetch([options]) ⇒ [<code>Promise.&lt;GuildBan&gt;</code>](#GuildBan)
Fetches this ban from the API.

**Kind**: instance method of [<code>GuildBan</code>](#GuildBan)  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | Additional options for the fetch. |

<a name="GuildBan+remove"></a>

### guildBan.remove([options]) ⇒ [<code>Promise.&lt;GuildBan&gt;</code>](#GuildBan)
Fetches this ban from the API.

**Kind**: instance method of [<code>GuildBan</code>](#GuildBan)  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | Additional options for the fetch. |

