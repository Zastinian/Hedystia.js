---
title: GuildMemberVerificationManager
sidebar:
  order: 20
---



## GuildMemberVerificationManager ⇐ <code>Base</code>
Represents a manager for guild member verification settings.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [GuildMemberVerificationManager](#GuildMemberVerificationManager) ⇐ <code>Base</code>
    * [new GuildMemberVerificationManager(guildId, client)](#new_GuildMemberVerificationManager_new)
    * _instance_
        * [.fetch([options])](#GuildMemberVerificationManager+fetch) ⇒ <code>Promise.&lt;GuildMemberVerification&gt;</code>
        * [.edit([options])](#GuildMemberVerificationManager+edit) ⇒ <code>Promise.&lt;GuildMemberVerification&gt;</code>
    * _static_
        * [.createFormFields(fields)](#GuildMemberVerificationManager.createFormFields) ⇒ <code>Object</code>

<a name="new_GuildMemberVerificationManager_new"></a>

### new GuildMemberVerificationManager(guildId, client)
Constructs a new instance of the class.


| Param | Type | Description |
| --- | --- | --- |
| guildId | <code>string</code> | The ID of the guild. |
| client | <code>Client</code> | The client instance. |

<a name="GuildMemberVerificationManager+fetch"></a>

### guildMemberVerificationManager.fetch([options]) ⇒ <code>Promise.&lt;GuildMemberVerification&gt;</code>
Fetches the member verification information for a guild.

**Kind**: instance method of [<code>GuildMemberVerificationManager</code>](#GuildMemberVerificationManager)  
**Returns**: <code>Promise.&lt;GuildMemberVerification&gt;</code> - - A promise that resolves with the fetched GuildMemberVerification object.  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | The options for the fetch request. |
| [options.withGuild] | <code>boolean</code> | Whether to include guild information in the response. |
| [options.inviteCode] | <code>string</code> \| <code>Object</code> | The invite code or object containing the invite code. |

<a name="GuildMemberVerificationManager+edit"></a>

### guildMemberVerificationManager.edit([options]) ⇒ <code>Promise.&lt;GuildMemberVerification&gt;</code>
Edits the member verification settings for the guild.

**Kind**: instance method of [<code>GuildMemberVerificationManager</code>](#GuildMemberVerificationManager)  
**Returns**: <code>Promise.&lt;GuildMemberVerification&gt;</code> - A promise that resolves with the updated GuildMemberVerification object.  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | The options for the member verification settings. |
| [options.enabled] | <code>boolean</code> | Whether member verification is enabled or not. |
| [options.fields] | <code>Array.&lt;Object&gt;</code> | An array of form field objects for member verification. |
| [options.description] | <code>string</code> | The description for the member verification form. |

<a name="GuildMemberVerificationManager.createFormFields"></a>

### GuildMemberVerificationManager.createFormFields(fields) ⇒ <code>Object</code>
Creates a form field object with the given fields.

**Kind**: static method of [<code>GuildMemberVerificationManager</code>](#GuildMemberVerificationManager)  
**Returns**: <code>Object</code> - - The created form field object.  

| Param | Type | Description |
| --- | --- | --- |
| fields | <code>Object</code> | The fields to include in the form field object. |

