<a name="ClientUser"></a>

## ClientUser
**Kind**: global class  

* [ClientUser](#ClientUser)
    * [new ClientUser([data], client)](#new_ClientUser_new)
    * [.setAvatar(avatar)](#ClientUser+setAvatar) ⇒
    * [.setUsername(username)](#ClientUser+setUsername) ⇒
    * [.setAvatarDecorations(avatarDecorations)](#ClientUser+setAvatarDecorations) ⇒
    * [.setPresence(presence)](#ClientUser+setPresence) ⇒
    * [.setStatus(status)](#ClientUser+setStatus) ⇒
    * [.setActivities(activities)](#ClientUser+setActivities) ⇒

<a name="new_ClientUser_new"></a>

### new ClientUser([data], client)
It's a constructor function that takes in two parameters, data and client, and sets the dataparameter to an empty object if it's not passed in, and sets the client parameter to undefined ifit's not passed in.


| Param | Description |
| --- | --- |
| [data] | The data that was returned from the API. |
| client | The client that instantiated the object. Every Discordie object that |

<a name="ClientUser+setAvatar"></a>

### clientUser.setAvatar(avatar) ⇒
It sets the avatar of the bot

**Kind**: instance method of [<code>ClientUser</code>](#ClientUser)  
**Returns**: The user object.  

| Param | Description |
| --- | --- |
| avatar | The avatar to set. |

<a name="ClientUser+setUsername"></a>

### clientUser.setUsername(username) ⇒
It sets the username of the bot

**Kind**: instance method of [<code>ClientUser</code>](#ClientUser)  
**Returns**: The return value is a promise that resolves to the updated user object.  

| Param | Description |
| --- | --- |
| username | The new username for the user. |

<a name="ClientUser+setAvatarDecorations"></a>

### clientUser.setAvatarDecorations(avatarDecorations) ⇒
It sets the avatar decorations of the user

**Kind**: instance method of [<code>ClientUser</code>](#ClientUser)  
**Returns**: The user object.  

| Param | Description |
| --- | --- |
| avatarDecorations | A string of the avatar decorations. |

<a name="ClientUser+setPresence"></a>

### clientUser.setPresence(presence) ⇒
It sets the presence of the bot

**Kind**: instance method of [<code>ClientUser</code>](#ClientUser)  
**Returns**: The presence of the user.  

| Param | Description |
| --- | --- |
| presence | Presence |

<a name="ClientUser+setStatus"></a>

### clientUser.setStatus(status) ⇒
It sets the status of the bot

**Kind**: instance method of [<code>ClientUser</code>](#ClientUser)  
**Returns**: The return value of the setPresence method.  

| Param | Description |
| --- | --- |
| status | The status of the user. Can be one of: |

<a name="ClientUser+setActivities"></a>

### clientUser.setActivities(activities) ⇒
It sets the activities of the client

**Kind**: instance method of [<code>ClientUser</code>](#ClientUser)  
**Returns**: The return value is the promise that is returned by the setPresence method.  

| Param | Description |
| --- | --- |
| activities | An array of objects containing information about what the user is currently doing. |

