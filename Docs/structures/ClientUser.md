<a name="ClientUser"></a>

## ClientUser ⇐ <code>User</code>
Represents a client user, extending the base User class.

**Kind**: global class  
**Extends**: <code>User</code>  

* [ClientUser](#ClientUser) ⇐ <code>User</code>
    * [new ClientUser([data], client)](#new_ClientUser_new)
    * [.setAvatar(avatar)](#ClientUser+setAvatar) ⇒ <code>Promise</code>
    * [.setUsername(username)](#ClientUser+setUsername) ⇒ <code>Promise</code>
    * [.setAvatarDecorations(avatarDecorations)](#ClientUser+setAvatarDecorations) ⇒ <code>Promise</code>
    * [.setPresence(presence)](#ClientUser+setPresence) ⇒ <code>void</code>
    * [.setStatus(status)](#ClientUser+setStatus) ⇒ <code>void</code>
    * [.setActivities(activities)](#ClientUser+setActivities) ⇒ <code>void</code>

<a name="new_ClientUser_new"></a>

### new ClientUser([data], client)
Constructs a new instance of the class.


| Param | Type | Description |
| --- | --- | --- |
| [data] | <code>Object</code> | The initial data for the instance. |
| client | <code>Client</code> | The client object. |

<a name="ClientUser+setAvatar"></a>

### clientUser.setAvatar(avatar) ⇒ <code>Promise</code>
Sets the avatar for the user.

**Kind**: instance method of [<code>ClientUser</code>](#ClientUser)  
**Returns**: <code>Promise</code> - A promise that resolves when the avatar is successfully set.  

| Param | Type | Description |
| --- | --- | --- |
| avatar | <code>string</code> | The URL or file path of the new avatar image. |

<a name="ClientUser+setUsername"></a>

### clientUser.setUsername(username) ⇒ <code>Promise</code>
Asynchronously sets the username for the current user.

**Kind**: instance method of [<code>ClientUser</code>](#ClientUser)  
**Returns**: <code>Promise</code> - A promise that resolves when the username is successfully set.  

| Param | Type | Description |
| --- | --- | --- |
| username | <code>string</code> | The new username to set. |

<a name="ClientUser+setAvatarDecorations"></a>

### clientUser.setAvatarDecorations(avatarDecorations) ⇒ <code>Promise</code>
Sets the avatar decorations for the user.

**Kind**: instance method of [<code>ClientUser</code>](#ClientUser)  
**Returns**: <code>Promise</code> - A promise that resolves when the avatar decorations are set.  

| Param | Type | Description |
| --- | --- | --- |
| avatarDecorations | <code>Object</code> | The avatar decorations to set. |

<a name="ClientUser+setPresence"></a>

### clientUser.setPresence(presence) ⇒ <code>void</code>
Sets the presence of the client.

**Kind**: instance method of [<code>ClientUser</code>](#ClientUser)  

| Param | Type | Description |
| --- | --- | --- |
| presence | <code>Presence</code> | The presence object containing the desired presence information. |

<a name="ClientUser+setStatus"></a>

### clientUser.setStatus(status) ⇒ <code>void</code>
Sets the status of the user.

**Kind**: instance method of [<code>ClientUser</code>](#ClientUser)  

| Param | Type | Description |
| --- | --- | --- |
| status | <code>string</code> | The status to set. |

<a name="ClientUser+setActivities"></a>

### clientUser.setActivities(activities) ⇒ <code>void</code>
Sets the activities for the presence of the user.

**Kind**: instance method of [<code>ClientUser</code>](#ClientUser)  

| Param | Type | Description |
| --- | --- | --- |
| activities | <code>Array</code> | An array of activity objects. |

