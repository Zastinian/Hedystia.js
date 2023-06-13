<a name="ReactionManager"></a>

## ReactionManager
**Kind**: global class  

* [ReactionManager](#ReactionManager)
    * [new ReactionManager(reactions, messageId, channelId, guildId, client)](#new_ReactionManager_new)
    * [.guild](#ReactionManager+guild) ⇒
    * [.cache](#ReactionManager+cache) ⇒
    * [.resolve(reaction)](#ReactionManager+resolve) ⇒
    * [.removeAll()](#ReactionManager+removeAll) ⇒

<a name="new_ReactionManager_new"></a>

### new ReactionManager(reactions, messageId, channelId, guildId, client)
It's a constructor for the MessageReactionManager class


| Param | Description |
| --- | --- |
| reactions | The reactions of the message. |
| messageId | The ID of the message that the reactions are on. |
| channelId | The channel ID of the message |
| guildId | The ID of the guild the message is in. |
| client | The client instance |

<a name="ReactionManager+guild"></a>

### reactionManager.guild ⇒
`return this.client.guilds._add(this.guildId) ?? null`The `??` is a nullish coalescing operator. It's a fancy way of saying "if the left side is null orundefined, return the right side"

**Kind**: instance property of [<code>ReactionManager</code>](#ReactionManager)  
**Returns**: The guild object  
<a name="ReactionManager+cache"></a>

### reactionManager.cache ⇒
It returns the value of the `reactions` property

**Kind**: instance property of [<code>ReactionManager</code>](#ReactionManager)  
**Returns**: The reactions property of the object.  
<a name="ReactionManager+resolve"></a>

### reactionManager.resolve(reaction) ⇒
It takes a reaction object and returns a MessageReaction object

**Kind**: instance method of [<code>ReactionManager</code>](#ReactionManager)  
**Returns**: A new MessageReaction object  

| Param | Description |
| --- | --- |
| reaction | The reaction to resolve. This can be a string, a MessageReaction object, or a ReactionEmoji object. |

<a name="ReactionManager+removeAll"></a>

### reactionManager.removeAll() ⇒
It removes all reactions from a message

**Kind**: instance method of [<code>ReactionManager</code>](#ReactionManager)  
**Returns**: Nothing  
