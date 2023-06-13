<a name="UserManager"></a>

## UserManager
**Kind**: global class  

* [UserManager](#UserManager)
    * [new UserManager(client)](#new_UserManager_new)
    * [.cache](#UserManager+cache) ⇒
    * [._add(users, [options])](#UserManager+_add) ⇒
    * [.fetch(user, [options])](#UserManager+fetch) ⇒
    * [.edit([options])](#UserManager+edit) ⇒
    * [.createDM(user)](#UserManager+createDM) ⇒
    * [.send(user, [options])](#UserManager+send) ⇒

<a name="new_UserManager_new"></a>

### new UserManager(client)
It's a constructor function that takes a client parameter and passes it to the super function.


| Param | Description |
| --- | --- |
| client | The client object. |

<a name="UserManager+cache"></a>

### userManager.cache ⇒
The function returns a collection of objects that are stored in the cache.

**Kind**: instance property of [<code>UserManager</code>](#UserManager)  
**Returns**: The Collection class.  
<a name="UserManager+_add"></a>

### userManager.\_add(users, [options]) ⇒
It adds a user to the cache

**Kind**: instance method of [<code>UserManager</code>](#UserManager)  
**Returns**: A user object.  

| Param | Description |
| --- | --- |
| users | The user object or user ID to add to the cache. |
| [options] | cache = true, force = false |

<a name="UserManager+fetch"></a>

### userManager.fetch(user, [options]) ⇒
It fetches a user from the API and adds it to the cache

**Kind**: instance method of [<code>UserManager</code>](#UserManager)  
**Returns**: The user object.  

| Param | Description |
| --- | --- |
| user | The user object or user ID. |
| [options] | cache = true, force = false |

<a name="UserManager+edit"></a>

### userManager.edit([options]) ⇒
This function edits the user's profile.

**Kind**: instance method of [<code>UserManager</code>](#UserManager)  
**Returns**: The user object.  

| Param | Description |
| --- | --- |
| [options] | The options to pass to the edit function. |

<a name="UserManager+createDM"></a>

### userManager.createDM(user) ⇒
It creates a DM channel with the user you specify

**Kind**: instance method of [<code>UserManager</code>](#UserManager)  
**Returns**: The channel object.  

| Param | Description |
| --- | --- |
| user | The user to create a DM with. |

<a name="UserManager+send"></a>

### userManager.send(user, [options]) ⇒
It creates a message payload, creates a DM channel, and sends the message payload to the DMchannel.

**Kind**: instance method of [<code>UserManager</code>](#UserManager)  
**Returns**: The message that was sent.  

| Param | Description |
| --- | --- |
| user | The user to send the message to. |
| [options] | Object |

