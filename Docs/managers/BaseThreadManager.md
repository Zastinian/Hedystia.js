---
title: BaseThreadManager
sidebar:
  order: 6
---



## BaseThreadManager ⇐ <code>Base</code>
Represents a base thread manager that handles operations related to thread channels.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [BaseThreadManager](#BaseThreadManager) ⇐ <code>Base</code>
    * [new BaseThreadManager(client)](#new_BaseThreadManager_new)
    * [.cache](#BaseThreadManager+cache) ⇒
    * [._add(threads, [guildId], [options])](#BaseThreadManager+_add) ⇒ <code>ThreadChannel</code> \| <code>null</code>
    * [.create(message, options)](#BaseThreadManager+create)
    * [.fetch(thread, [options])](#BaseThreadManager+fetch) ⇒ <code>Promise</code>
    * [.fetchActive()](#BaseThreadManager+fetchActive) ⇒ <code>Promise.&lt;FetchedThreads&gt;</code>
    * [.fetchArchivedThread([options])](#BaseThreadManager+fetchArchivedThread) ⇒ <code>Promise.&lt;FetchedThreads&gt;</code>
    * [.fetchForumThreads([query])](#BaseThreadManager+fetchForumThreads) ⇒ <code>Promise.&lt;Object&gt;</code>

<a name="new_BaseThreadManager_new"></a>

### new BaseThreadManager(client)
Constructs a new instance of the class.


| Param | Type | Description |
| --- | --- | --- |
| client | <code>Client</code> | The client object used for communication with the server. |

<a name="BaseThreadManager+cache"></a>

### baseThreadManager.cache ⇒
Getter method for the cache property.

**Kind**: instance property of [<code>BaseThreadManager</code>](#BaseThreadManager)  
**Returns**: The Collection object representing the cache.  
<a name="BaseThreadManager+_add"></a>

### baseThreadManager.\_add(threads, [guildId], [options]) ⇒ <code>ThreadChannel</code> \| <code>null</code>
Adds a thread to the guild's thread cache.

**Kind**: instance method of [<code>BaseThreadManager</code>](#BaseThreadManager)  
**Returns**: <code>ThreadChannel</code> \| <code>null</code> - The added thread or null if no thread is provided.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| threads | <code>string</code> \| <code>ThreadChannelResolvable</code> |  | The thread or thread ID to add. |
| [guildId] | <code>Snowflake</code> | <code>this.guildId</code> | The ID of the guild where the thread belongs. |
| [options] | <code>Object</code> |  | Additional options for adding the thread. |
| [options.cache] | <code>boolean</code> | <code>true</code> | Whether to cache the thread. |
| [options.force] | <code>boolean</code> | <code>true</code> | Whether to force adding the thread even if it already exists in the cache. |

<a name="BaseThreadManager+create"></a>

### baseThreadManager.create(message, options)
Creates a new thread in the current channel with the given message and options.

**Kind**: instance method of [<code>BaseThreadManager</code>](#BaseThreadManager)  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>string</code> \| <code>object</code> | The message content or message object to start the thread with. |
| options | <code>object</code> | The options for creating the thread. |
| [options.reason] | <code>string</code> | The reason for creating the thread. |
| [options.name] | <code>string</code> | The name of the thread. |
| [options.type] | <code>string</code> \| <code>number</code> | The type of the thread. Can be a string or number. |
| [options.invitable] | <code>boolean</code> | Whether the thread is invitable. |
| [options.autoArchiveDuration] | <code>number</code> | The auto archive |

<a name="BaseThreadManager+fetch"></a>

### baseThreadManager.fetch(thread, [options]) ⇒ <code>Promise</code>
Fetches a thread from the client's channels.

**Kind**: instance method of [<code>BaseThreadManager</code>](#BaseThreadManager)  
**Returns**: <code>Promise</code> - A promise that resolves to the fetched thread.  

| Param | Type | Description |
| --- | --- | --- |
| thread | <code>string</code> | The ID of the thread to fetch. |
| [options] | <code>Object</code> | Additional options for the fetch request. |

<a name="BaseThreadManager+fetchActive"></a>

### baseThreadManager.fetchActive() ⇒ <code>Promise.&lt;FetchedThreads&gt;</code>
Fetches the active threads for the current guild.

**Kind**: instance method of [<code>BaseThreadManager</code>](#BaseThreadManager)  
**Returns**: <code>Promise.&lt;FetchedThreads&gt;</code> - - A promise that resolves to a FetchedThreads object containing the active threads.  
<a name="BaseThreadManager+fetchArchivedThread"></a>

### baseThreadManager.fetchArchivedThread([options]) ⇒ <code>Promise.&lt;FetchedThreads&gt;</code>
Fetches archived threads based on the provided options.

**Kind**: instance method of [<code>BaseThreadManager</code>](#BaseThreadManager)  
**Returns**: <code>Promise.&lt;FetchedThreads&gt;</code> - - A promise that resolves to a FetchedThreads object containing the fetched threads.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | The options for fetching archived threads. |
| [options.before] | <code>Date</code> |  | The date before which the threads should be fetched. |
| [options.limit] | <code>number</code> | <code>25</code> | The maximum number of threads to fetch. |
| [options.public] | <code>boolean</code> | <code>false</code> | Whether to fetch public or private archived threads. |

<a name="BaseThreadManager+fetchForumThreads"></a>

### baseThreadManager.fetchForumThreads([query]) ⇒ <code>Promise.&lt;Object&gt;</code>
Fetches forum threads based on the provided query parameters.

**Kind**: instance method of [<code>BaseThreadManager</code>](#BaseThreadManager)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [query] | <code>Object</code> |  | The query parameters for fetching forum threads. |
| [query.archived] | <code>boolean</code> |  | Whether to include archived threads. |
| [query.sortBy] | <code>string</code> | <code>&quot;\&quot;last_message_time\&quot;&quot;</code> | The field to sort the threads by. |
| [query.sortOrder] | <code>string</code> | <code>&quot;\&quot;desc\&quot;&quot;</code> | The order in which to sort the threads. |
| [query.limit] | <code>number</code> | <code>25</code> | The maximum number of threads to fetch. |
| [query.offset] | <code>number</code> | <code>50</code> | The offset from which to start fetching threads. |

