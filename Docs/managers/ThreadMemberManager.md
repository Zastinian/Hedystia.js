---
title: ThreadMemberManager
sidebar:
  order: 42
---



## ThreadMemberManager ⇐ <code>Base</code>
Manages the members of a thread in a guild.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [ThreadMemberManager](#ThreadMemberManager) ⇐ <code>Base</code>
    * [new ThreadMemberManager(guildId, threadId, client)](#new_ThreadMemberManager_new)
    * [.cache](#ThreadMemberManager+cache) ⇒
    * [._add(members, [guildId], [threadId], [options])](#ThreadMemberManager+_add)
    * [.join()](#ThreadMemberManager+join) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.fetch(user, [options])](#ThreadMemberManager+fetch) ⇒ <code>Promise</code>
    * [._fetchId(user, [cache], [force])](#ThreadMemberManager+_fetchId) ⇒ <code>Promise.&lt;string&gt;</code>
    * [.add([user])](#ThreadMemberManager+add) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.remove([user])](#ThreadMemberManager+remove) ⇒ <code>Promise.&lt;(GuildMember\|null)&gt;</code>

<a name="new_ThreadMemberManager_new"></a>

### new ThreadMemberManager(guildId, threadId, client)
Constructs a new instance of the ThreadWatcher class.


| Param | Type | Description |
| --- | --- | --- |
| guildId | <code>string</code> | The ID of the guild the thread belongs to. |
| threadId | <code>string</code> | The ID of the thread. |
| client | <code>Client</code> | The client instance. |

<a name="ThreadMemberManager+cache"></a>

### threadMemberManager.cache ⇒
Getter method for the cache property.

**Kind**: instance property of [<code>ThreadMemberManager</code>](#ThreadMemberManager)  
**Returns**: The Collection object representing the cache.  
<a name="ThreadMemberManager+_add"></a>

### threadMemberManager.\_add(members, [guildId], [threadId], [options])
Adds a member to a thread.

**Kind**: instance method of [<code>ThreadMemberManager</code>](#ThreadMemberManager)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| members | <code>string</code> \| <code>Object</code> |  | The member or user ID to add to the thread. |
| [guildId] | <code>string</code> | <code>&quot;this.guildId&quot;</code> | The ID of the guild where the thread is located. |
| [threadId] | <code>string</code> | <code>&quot;this.threadId&quot;</code> | The ID of the thread. |
| [options] | <code>object</code> | <code>{ cache: true, force: false }</code> | Additional options for adding the member. |
| [options.cache] | <code>boolean</code> | <code>true</code> | Whether to cache the thread member. |
| [options.force] | <code>boolean</code> | <code>false</code> | Whether to force fetching the thread member even if it is already cached. |

<a name="ThreadMemberManager+join"></a>

### threadMemberManager.join() ⇒ <code>Promise.&lt;void&gt;</code>
Joins the current user to a thread in a channel.

**Kind**: instance method of [<code>ThreadMemberManager</code>](#ThreadMemberManager)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the user has successfully joined the thread.  
<a name="ThreadMemberManager+fetch"></a>

### threadMemberManager.fetch(user, [options]) ⇒ <code>Promise</code>
Fetches data for a user or thread from the server.

**Kind**: instance method of [<code>ThreadMemberManager</code>](#ThreadMemberManager)  
**Returns**: <code>Promise</code> - A promise that resolves with the fetched data.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| user | <code>string</code> \| <code>object</code> |  | The user ID or object containing user information. |
| [options] | <code>object</code> |  | Additional options for the fetch request. |
| [options.cache] | <code>boolean</code> | <code>true</code> | Whether to cache the fetched data. |
| [options.force] | <code>boolean</code> | <code>false</code> | Whether to force a fresh fetch from the server. |

<a name="ThreadMemberManager+_fetchId"></a>

### threadMemberManager.\_fetchId(user, [cache], [force]) ⇒ <code>Promise.&lt;string&gt;</code>
Fetches the ID of a user asynchronously.

**Kind**: instance method of [<code>ThreadMemberManager</code>](#ThreadMemberManager)  
**Returns**: <code>Promise.&lt;string&gt;</code> - A promise that resolves to the user ID.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| user | <code>string</code> \| <code>UserObject</code> |  | The user or user ID to fetch the ID for. |
| [cache] | <code>boolean</code> | <code>true</code> | Whether to cache the fetched ID. |
| [force] | <code>boolean</code> | <code>true</code> | Whether to force the fetch even if the ID is already cached. |

<a name="ThreadMemberManager+add"></a>

### threadMemberManager.add([user]) ⇒ <code>Promise.&lt;void&gt;</code>
Adds a user to the thread.

**Kind**: instance method of [<code>ThreadMemberManager</code>](#ThreadMemberManager)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the user has been added to the thread.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [user] | <code>string</code> \| <code>User</code> | <code>&quot;this.client.user.id&quot;</code> | The user to add to the thread. Can be a user ID or a User object. |

<a name="ThreadMemberManager+remove"></a>

### threadMemberManager.remove([user]) ⇒ <code>Promise.&lt;(GuildMember\|null)&gt;</code>
Removes a user from the thread.

**Kind**: instance method of [<code>ThreadMemberManager</code>](#ThreadMemberManager)  
**Returns**: <code>Promise.&lt;(GuildMember\|null)&gt;</code> - - A promise that resolves with the deleted member object, or null if the user was not found.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [user] | <code>string</code> \| <code>UserResolvable</code> | <code>&quot;this.client.user.id&quot;</code> | The user to remove from the thread. Defaults to the client's user ID. |

