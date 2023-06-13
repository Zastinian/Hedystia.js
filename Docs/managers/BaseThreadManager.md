<a name="BaseThreadManager"></a>

## BaseThreadManager
**Kind**: global class  

* [BaseThreadManager](#BaseThreadManager)
    * [new BaseThreadManager(client)](#new_BaseThreadManager_new)
    * [.cache](#BaseThreadManager+cache) ⇒
    * [._add(threads, [guildId], [options])](#BaseThreadManager+_add) ⇒
    * [.create(message, options)](#BaseThreadManager+create) ⇒
    * [.fetch(thread, [options])](#BaseThreadManager+fetch) ⇒
    * [.fetchActive()](#BaseThreadManager+fetchActive) ⇒
    * [.fetchArchivedThread([options])](#BaseThreadManager+fetchArchivedThread) ⇒
    * [.fetchForumThreads([query])](#BaseThreadManager+fetchForumThreads) ⇒

<a name="new_BaseThreadManager_new"></a>

### new BaseThreadManager(client)
It's a constructor function that takes a client parameter and passes it to the super function


| Param | Description |
| --- | --- |
| client | The client object. |

<a name="BaseThreadManager+cache"></a>

### baseThreadManager.cache ⇒
It returns the Collection object.

**Kind**: instance property of [<code>BaseThreadManager</code>](#BaseThreadManager)  
**Returns**: The Collection class.  
<a name="BaseThreadManager+_add"></a>

### baseThreadManager.\_add(threads, [guildId], [options]) ⇒
It adds a thread to the cache

**Kind**: instance method of [<code>BaseThreadManager</code>](#BaseThreadManager)  
**Returns**: A thread object  

| Param | Description |
| --- | --- |
| threads | The thread object or thread ID. |
| [guildId] | The guild ID of the guild the thread is in. |
| [options] | cache = true, force = true |

<a name="BaseThreadManager+create"></a>

### baseThreadManager.create(message, options) ⇒
It creates a thread

**Kind**: instance method of [<code>BaseThreadManager</code>](#BaseThreadManager)  
**Returns**: A new thread is being returned.  

| Param | Description |
| --- | --- |
| message | The message to create the thread from. |
| options | An object containing the following parameters: |

<a name="BaseThreadManager+fetch"></a>

### baseThreadManager.fetch(thread, [options]) ⇒
It fetches a thread

**Kind**: instance method of [<code>BaseThreadManager</code>](#BaseThreadManager)  
**Returns**: A channel object.  

| Param | Description |
| --- | --- |
| thread | The thread ID. |
| [options] | An object containing additional options. |

<a name="BaseThreadManager+fetchActive"></a>

### baseThreadManager.fetchActive() ⇒
It fetches all the active threads in a guild

**Kind**: instance method of [<code>BaseThreadManager</code>](#BaseThreadManager)  
**Returns**: An array of threads  
<a name="BaseThreadManager+fetchArchivedThread"></a>

### baseThreadManager.fetchArchivedThread([options]) ⇒
This function fetches archived threads from a channel

**Kind**: instance method of [<code>BaseThreadManager</code>](#BaseThreadManager)  
**Returns**: A new FetchedThreads object  

| Param | Description |
| --- | --- |
| [options] | Object |

<a name="BaseThreadManager+fetchForumThreads"></a>

### baseThreadManager.fetchForumThreads([query]) ⇒
This function fetches forum threads from the specified channel

**Kind**: instance method of [<code>BaseThreadManager</code>](#BaseThreadManager)  
**Returns**: An array of threads  

| Param | Description |
| --- | --- |
| [query] | An object containing the following parameters: |

