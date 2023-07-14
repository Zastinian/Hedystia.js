<a name="FetchedThreads"></a>

## FetchedThreads ⇐ <code>Base</code>
Represents a collection of fetched threads.

**Kind**: global class  
**Extends**: <code>Base</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| guildId | <code>string</code> | The ID of the guild the threads belong to. |
| threads | <code>RaidenCol</code> | A collection of threads, where each thread is represented by its ID and a channel object. |
| hasMore | <code>boolean</code> \| <code>null</code> | Indicates whether there are more threads to fetch. |

<a name="new_FetchedThreads_new"></a>

### new FetchedThreads([data], guildId, client)
Constructs a new instance of the class.


| Param | Type | Description |
| --- | --- | --- |
| [data] | <code>Object</code> | The data object containing information about the fetched threads. |
| guildId | <code>string</code> | The ID of the guild the threads belong to. |
| client | <code>Client</code> | The client instance. |

