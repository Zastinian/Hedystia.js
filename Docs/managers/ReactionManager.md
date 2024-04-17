---
title: ReactionManager
sidebar:
  order: 34
---



## ReactionManager ⇐ <code>Base</code>
A class representing a reaction manager for a specific message in a channel.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [ReactionManager](#ReactionManager) ⇐ <code>Base</code>
    * [new ReactionManager(reactions, messageId, channelId, guildId, client)](#new_ReactionManager_new)
    * [.guild](#ReactionManager+guild) ⇒
    * [.cache](#ReactionManager+cache) ⇒
    * [.resolve(reaction)](#ReactionManager+resolve) ⇒ <code>MessageReaction</code>
    * [.removeAll()](#ReactionManager+removeAll) ⇒ <code>void</code>

<a name="new_ReactionManager_new"></a>

### new ReactionManager(reactions, messageId, channelId, guildId, client)
Constructs a new instance of the ReactionCollector class.


| Param | Type | Description |
| --- | --- | --- |
| reactions | <code>Array</code> | An array of reaction objects. |
| messageId | <code>string</code> | The ID of the message. |
| channelId | <code>string</code> | The ID of the channel. |
| guildId | <code>string</code> | The ID of the guild. |
| client | <code>Client</code> | The client instance. |

<a name="ReactionManager+guild"></a>

### reactionManager.guild ⇒
Retrieves the guild associated with this guildId.

**Kind**: instance property of [<code>ReactionManager</code>](#ReactionManager)  
**Returns**: The guild object if found, otherwise null.  
<a name="ReactionManager+cache"></a>

### reactionManager.cache ⇒
Get the cache of reactions.

**Kind**: instance property of [<code>ReactionManager</code>](#ReactionManager)  
**Returns**: The cache of reactions.  
<a name="ReactionManager+resolve"></a>

### reactionManager.resolve(reaction) ⇒ <code>MessageReaction</code>
Resolves a reaction object and returns a new MessageReaction instance.

**Kind**: instance method of [<code>ReactionManager</code>](#ReactionManager)  
**Returns**: <code>MessageReaction</code> - A new MessageReaction instance with the resolved reaction object.  

| Param | Type | Description |
| --- | --- | --- |
| reaction | <code>string</code> \| <code>MessageReaction</code> | The reaction object to resolve. Can be either a string or a MessageReaction instance. |

<a name="ReactionManager+removeAll"></a>

### reactionManager.removeAll() ⇒ <code>void</code>
Removes all reactions from a specific message in a channel.

**Kind**: instance method of [<code>ReactionManager</code>](#ReactionManager)  
