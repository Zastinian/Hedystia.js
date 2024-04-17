---
title: ReactionUserManager
sidebar:
  order: 35
---



## ReactionUserManager ⇐ <code>Base</code>
A class representing a manager for reaction users.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [ReactionUserManager](#ReactionUserManager) ⇐ <code>Base</code>
    * [new ReactionUserManager(reaction, channelId, messageId, emoji, client)](#new_ReactionUserManager_new)
    * _instance_
        * [.cache](#ReactionUserManager+cache) ⇒
        * [._add(users, [options])](#ReactionUserManager+_add) ⇒ <code>User</code> \| <code>null</code>
        * [.fetch(options)](#ReactionUserManager+fetch) ⇒ <code>Promise.&lt;Map.&lt;string, ReactionUser&gt;&gt;</code>
        * [.remove([user])](#ReactionUserManager+remove) ⇒ <code>Promise.&lt;Reaction&gt;</code>
    * _static_
        * [.transformOptions(o)](#ReactionUserManager.transformOptions) ⇒ <code>Object</code>

<a name="new_ReactionUserManager_new"></a>

### new ReactionUserManager(reaction, channelId, messageId, emoji, client)
Constructs a ReactionCollector instance.


| Param | Type | Description |
| --- | --- | --- |
| reaction | <code>Reaction</code> | The reaction object. |
| channelId | <code>string</code> | The ID of the channel where the reaction occurred. |
| messageId | <code>string</code> | The ID of the message where the reaction occurred. |
| emoji | <code>Emoji</code> | The emoji that was reacted with. |
| client | <code>Client</code> | The client instance. |

<a name="ReactionUserManager+cache"></a>

### reactionUserManager.cache ⇒
Getter method for the cache property.

**Kind**: instance property of [<code>ReactionUserManager</code>](#ReactionUserManager)  
**Returns**: The Collection object representing the cache.  
<a name="ReactionUserManager+_add"></a>

### reactionUserManager.\_add(users, [options]) ⇒ <code>User</code> \| <code>null</code>
Adds a user to the collection of users.

**Kind**: instance method of [<code>ReactionUserManager</code>](#ReactionUserManager)  
**Returns**: <code>User</code> \| <code>null</code> - The added user object or null if no user is provided.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| users | <code>User</code> \| <code>string</code> |  | The user object or user ID to add. |
| [options] | <code>Object</code> |  | Additional options for adding the user. |
| [options.cache] | <code>boolean</code> | <code>true</code> | Whether to cache the user object. |
| [options.force] | <code>boolean</code> | <code>false</code> | Whether to force fetching the user even if it is already cached. |

<a name="ReactionUserManager+fetch"></a>

### reactionUserManager.fetch(options) ⇒ <code>Promise.&lt;Map.&lt;string, ReactionUser&gt;&gt;</code>
Fetches reaction users for a specific message and emoji.

**Kind**: instance method of [<code>ReactionUserManager</code>](#ReactionUserManager)  
**Returns**: <code>Promise.&lt;Map.&lt;string, ReactionUser&gt;&gt;</code> - - A promise that resolves to a map of reaction users, where the keys are user IDs and the values are ReactionUser objects.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | <code>Object</code> |  | The options for the fetch request. |
| [options.cache] | <code>boolean</code> | <code>true</code> | Whether to cache the fetched data. |
| [options.force] | <code>boolean</code> | <code>false</code> | Whether to force the fetch request even if the data is already cached. |

<a name="ReactionUserManager+remove"></a>

### reactionUserManager.remove([user]) ⇒ <code>Promise.&lt;Reaction&gt;</code>
Removes a reaction from a message.

**Kind**: instance method of [<code>ReactionUserManager</code>](#ReactionUserManager)  
**Returns**: <code>Promise.&lt;Reaction&gt;</code> - The removed reaction.  
**Throws**:

- <code>RangeError</code> If no user is found.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [user] | <code>string</code> \| <code>User</code> | <code>&quot;this.client.user.id&quot;</code> | The user ID or User object of the user whose reaction should be removed. |

<a name="ReactionUserManager.transformOptions"></a>

### ReactionUserManager.transformOptions(o) ⇒ <code>Object</code>
Transforms the options object by extracting the "after" and "limit" properties.

**Kind**: static method of [<code>ReactionUserManager</code>](#ReactionUserManager)  
**Returns**: <code>Object</code> - - The transformed options object.  

| Param | Type | Description |
| --- | --- | --- |
| o | <code>Object</code> | The options object. |

