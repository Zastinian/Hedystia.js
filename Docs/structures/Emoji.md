<a name="Emoji"></a>

## Emoji
**Kind**: global class  

* [Emoji](#Emoji)
    * [new Emoji([data], guildId, client)](#new_Emoji_new)
    * [.fetch([options])](#Emoji+fetch) ⇒
    * [.edit([options])](#Emoji+edit) ⇒
    * [.setName(name, reason)](#Emoji+setName) ⇒
    * [.setRoles(roles, reason)](#Emoji+setRoles) ⇒
    * [.delete(reason)](#Emoji+delete) ⇒

<a name="new_Emoji_new"></a>

### new Emoji([data], guildId, client)
It's a constructor for the Emoji class


| Param | Description |
| --- | --- |
| [data] | The data that was passed to the constructor. |
| guildId | The ID of the guild this emoji is in. |
| client | The client that instantiated the Emoji |

<a name="Emoji+fetch"></a>

### emoji.fetch([options]) ⇒
`fetch` fetches the emoji from the guild

**Kind**: instance method of [<code>Emoji</code>](#Emoji)  
**Returns**: The emoji object  

| Param | Description |
| --- | --- |
| [options] | An object with the following properties: |

<a name="Emoji+edit"></a>

### emoji.edit([options]) ⇒
`edit` edits the emoji

**Kind**: instance method of [<code>Emoji</code>](#Emoji)  
**Returns**: The edited emoji.  

| Param | Description |
| --- | --- |
| [options] | An object containing the new properties of the emoji. |

<a name="Emoji+setName"></a>

### emoji.setName(name, reason) ⇒
`setName` sets the name of the channel

**Kind**: instance method of [<code>Emoji</code>](#Emoji)  
**Returns**: The name of the channel.  

| Param | Description |
| --- | --- |
| name | The new name of the channel. |
| reason | The reason for the change. |

<a name="Emoji+setRoles"></a>

### emoji.setRoles(roles, reason) ⇒
It sets the roles of a member

**Kind**: instance method of [<code>Emoji</code>](#Emoji)  
**Returns**: The roles of the member.  

| Param | Description |
| --- | --- |
| roles | The roles to set. |
| reason | The reason for the edit. |

<a name="Emoji+delete"></a>

### emoji.delete(reason) ⇒
`delete` deletes the emoji

**Kind**: instance method of [<code>Emoji</code>](#Emoji)  
**Returns**: The emoji object.  

| Param | Description |
| --- | --- |
| reason | The reason for the deletion. |

