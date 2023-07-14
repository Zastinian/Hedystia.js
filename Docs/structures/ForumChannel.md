<a name="ForumChannel"></a>

## ForumChannel ⇐ <code>Channel</code>
A class representing a forum channel on Discord.

**Kind**: global class  
**Extends**: <code>Channel</code>  

* [ForumChannel](#ForumChannel) ⇐ <code>Channel</code>
    * [new ForumChannel([data], [guildId], [client])](#new_ForumChannel_new)
    * [.createThread([options])](#ForumChannel+createThread) ⇒ <code>Promise.&lt;Object&gt;</code>

<a name="new_ForumChannel_new"></a>

### new ForumChannel([data], [guildId], [client])

| Param | Type | Description |
| --- | --- | --- |
| [data] | <code>Object</code> | The data for the forum channel |
| [guildId] | <code>string</code> | The ID of the guild that the channel belongs to |
| [client] | <code>Client</code> | The client that instantiated the channel |

<a name="ForumChannel+createThread"></a>

### forumChannel.createThread([options]) ⇒ <code>Promise.&lt;Object&gt;</code>
Creates a new thread in the forum channel.

**Kind**: instance method of [<code>ForumChannel</code>](#ForumChannel)  
**Returns**: <code>Promise.&lt;Object&gt;</code> - The thread data  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | The options for the thread |
| [options.name] | <code>string</code> | The name of the thread |
| [options.autoArchiveDuration] | <code>number</code> | The duration in minutes to automatically archive the thread |
| [options.rateLimitPerUser] | <code>number</code> | The rate limit per user for the thread in seconds |
| [options.reason] | <code>string</code> | The reason for creating the thread |
| [options.message] | <code>Message</code> | The message to use as a basis for the thread |

