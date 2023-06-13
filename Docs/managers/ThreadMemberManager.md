<a name="ThreadMemberManager"></a>

## ThreadMemberManager
**Kind**: global class  

* [ThreadMemberManager](#ThreadMemberManager)
    * [new ThreadMemberManager(guildId, threadId, client)](#new_ThreadMemberManager_new)
    * [.cache](#ThreadMemberManager+cache) ⇒
    * [._add(members, [guildId], [threadId], [options])](#ThreadMemberManager+_add) ⇒
    * [.join()](#ThreadMemberManager+join) ⇒
    * [.fetch(user, options)](#ThreadMemberManager+fetch) ⇒
    * [._fetchId(user, [cache], [force])](#ThreadMemberManager+_fetchId) ⇒
    * [.add([user])](#ThreadMemberManager+add) ⇒
    * [.remove([user])](#ThreadMemberManager+remove) ⇒

<a name="new_ThreadMemberManager_new"></a>

### new ThreadMemberManager(guildId, threadId, client)
`constructor` is a function that runs when a new instance of the class is created


| Param | Description |
| --- | --- |
| guildId | The ID of the guild the thread is in. |
| threadId | The ID of the thread you want to get. |
| client | The client that the thread was created with. |

<a name="ThreadMemberManager+cache"></a>

### threadMemberManager.cache ⇒
It returns the Collection object.

**Kind**: instance property of [<code>ThreadMemberManager</code>](#ThreadMemberManager)  
**Returns**: The Collection class  
<a name="ThreadMemberManager+_add"></a>

### threadMemberManager.\_add(members, [guildId], [threadId], [options]) ⇒
It adds a member to the cache

**Kind**: instance method of [<code>ThreadMemberManager</code>](#ThreadMemberManager)  
**Returns**: A new ThreadMember object  

| Param | Description |
| --- | --- |
| members | The member(s) to add to the cache. This can be a single member, or an array of members. |
| [guildId] | The guild ID of the guild the thread is in. |
| [threadId] | The ID of the thread |
| [options] | cache = true, force = false |

<a name="ThreadMemberManager+join"></a>

### threadMemberManager.join() ⇒
It joins a thread

**Kind**: instance method of [<code>ThreadMemberManager</code>](#ThreadMemberManager)  
**Returns**: The user object  
<a name="ThreadMemberManager+fetch"></a>

### threadMemberManager.fetch(user, options) ⇒
It fetches the members of a thread

**Kind**: instance method of [<code>ThreadMemberManager</code>](#ThreadMemberManager)  
**Returns**: A new cache constructor  

| Param | Description |
| --- | --- |
| user | The user to fetch. Can be a user object, a user ID, or a user tag. |
| options | An object containing the following properties: |

<a name="ThreadMemberManager+_fetchId"></a>

### threadMemberManager.\_fetchId(user, [cache], [force]) ⇒
It fetches a user's ID from the API and returns it

**Kind**: instance method of [<code>ThreadMemberManager</code>](#ThreadMemberManager)  
**Returns**: The member object  

| Param | Default | Description |
| --- | --- | --- |
| user |  | The user to fetch. Can be a user object, a user ID, or a member object. |
| [cache] | <code>true</code> | Whether or not to cache the member. |
| [force] | <code>true</code> | If true, it will force the cache to be updated. |

<a name="ThreadMemberManager+add"></a>

### threadMemberManager.add([user]) ⇒
It adds a user to a thread

**Kind**: instance method of [<code>ThreadMemberManager</code>](#ThreadMemberManager)  
**Returns**: The user object  

| Param | Description |
| --- | --- |
| [user] | The user to add to the thread. |

<a name="ThreadMemberManager+remove"></a>

### threadMemberManager.remove([user]) ⇒
It removes a user from the thread

**Kind**: instance method of [<code>ThreadMemberManager</code>](#ThreadMemberManager)  
**Returns**: The deleted member  

| Param | Description |
| --- | --- |
| [user] | The user to remove from the thread. |

