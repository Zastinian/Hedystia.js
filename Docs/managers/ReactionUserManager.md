<a name="ReactionUserManager"></a>

## ReactionUserManager
**Kind**: global class  

* [ReactionUserManager](#ReactionUserManager)
    * [new ReactionUserManager(reaction, channelId, messageId, emoji, client)](#new_ReactionUserManager_new)
    * _instance_
        * [.cache](#ReactionUserManager+cache) ⇒
        * [._add(users, [options])](#ReactionUserManager+_add) ⇒
        * [.fetch(options)](#ReactionUserManager+fetch) ⇒
        * [.remove([user])](#ReactionUserManager+remove) ⇒
    * _static_
        * [.transformOptions([o])](#ReactionUserManager.transformOptions) ⇒

<a name="new_ReactionUserManager_new"></a>

### new ReactionUserManager(reaction, channelId, messageId, emoji, client)
It's a constructor for the Reaction class


| Param | Description |
| --- | --- |
| reaction | The reaction object |
| channelId | The channel ID of the message that was reacted to. |
| messageId | The ID of the message that was reacted to |
| emoji | The emoji used |
| client | The client that instantiated the event |

<a name="ReactionUserManager+cache"></a>

### reactionUserManager.cache ⇒
`return Collection`

**Kind**: instance property of [<code>ReactionUserManager</code>](#ReactionUserManager)  
**Returns**: The Collection class  
<a name="ReactionUserManager+_add"></a>

### reactionUserManager.\_add(users, [options]) ⇒
It adds a user to the cache

**Kind**: instance method of [<code>ReactionUserManager</code>](#ReactionUserManager)  
**Returns**: A new user object  

| Param | Description |
| --- | --- |
| users | The user(s) to add to the cache. |
| [options] | An object with the following properties: |

<a name="ReactionUserManager+fetch"></a>

### reactionUserManager.fetch(options) ⇒
It fetches the users that reacted to a message with a specific emoji

**Kind**: instance method of [<code>ReactionUserManager</code>](#ReactionUserManager)  
**Returns**: A new instance of the cache constructor.  

| Param | Description |
| --- | --- |
| options | An object containing the following properties: |

<a name="ReactionUserManager+remove"></a>

### reactionUserManager.remove([user]) ⇒
It removes a reaction from a message

**Kind**: instance method of [<code>ReactionUserManager</code>](#ReactionUserManager)  
**Returns**: The reaction  

| Param | Description |
| --- | --- |
| [user] | The user to remove the reaction from. |

<a name="ReactionUserManager.transformOptions"></a>

### ReactionUserManager.transformOptions([o]) ⇒
It takes an object with optional `after` and `limit` properties, and returns an object with `after`and `limit` properties, where `after` is a string and `limit` is a number

**Kind**: static method of [<code>ReactionUserManager</code>](#ReactionUserManager)  
**Returns**: The transformed options object.  

| Param | Description |
| --- | --- |
| [o] | The options object that is passed to the function. |

