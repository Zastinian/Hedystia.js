---
title: Invite
sidebar:
  order: 44
---



## Invite ⇐ <code>Base</code>
Represents an invite to a guild.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [Invite](#Invite) ⇐ <code>Base</code>
    * [new Invite([data], guild, client)](#new_Invite_new)
    * [.fetch(options)](#Invite+fetch) ⇒ <code>Promise</code>
    * [.delete(reason)](#Invite+delete) ⇒ <code>Promise.&lt;void&gt;</code>

<a name="new_Invite_new"></a>

### new Invite([data], guild, client)
Constructs a new instance of the Invite class.


| Param | Type | Description |
| --- | --- | --- |
| [data] | <code>Object</code> | The data for the invite. |
| guild | <code>Guild</code> | The guild that the invite belongs to. |
| client | <code>Client</code> | The client instance. |

<a name="Invite+fetch"></a>

### invite.fetch(options) ⇒ <code>Promise</code>
Fetches an invite using the provided options.

**Kind**: instance method of [<code>Invite</code>](#Invite)  
**Returns**: <code>Promise</code> - A promise that resolves to the fetched invite.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> | The options for fetching the invite. |

<a name="Invite+delete"></a>

### invite.delete(reason) ⇒ <code>Promise.&lt;void&gt;</code>
Deletes the invite associated with the guild.

**Kind**: instance method of [<code>Invite</code>](#Invite)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the invite is deleted.  

| Param | Type | Description |
| --- | --- | --- |
| reason | <code>string</code> | The reason for deleting the invite. |

