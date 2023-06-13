<a name="Invite"></a>

## Invite ⇐ <code>Base</code>
It's a class that represents an invite.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [Invite](#Invite) ⇐ <code>Base</code>
    * [new Invite(data, guild, client)](#new_Invite_new)
    * [.fetch(options)](#Invite+fetch) ⇒
    * [.delete(reason)](#Invite+delete) ⇒

<a name="new_Invite_new"></a>

### new Invite(data, guild, client)
It's a constructor function that takes in data, guild, and client as parameters.


| Param | Description |
| --- | --- |
| data | The data that was received from the API. |
| guild | Guild |
| client | Discord.Client |

<a name="Invite+fetch"></a>

### invite.fetch(options) ⇒
It fetches the invite from the Discord API

**Kind**: instance method of [<code>Invite</code>](#Invite)  
**Returns**: The invite object.  

| Param | Description |
| --- | --- |
| options | An object containing the following properties: |

<a name="Invite+delete"></a>

### invite.delete(reason) ⇒
It deletes the invite

**Kind**: instance method of [<code>Invite</code>](#Invite)  
**Returns**: The return value is the invite object.  

| Param | Description |
| --- | --- |
| reason | The reason for deleting the invite. |

