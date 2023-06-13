<a name="ThreadChannel"></a>

## ThreadChannel ⇐ <code>TextBasedChannels</code>
It's a class that represents a Discord Thread Channel

**Kind**: global class  
**Extends**: <code>TextBasedChannels</code>  

* [ThreadChannel](#ThreadChannel) ⇐ <code>TextBasedChannels</code>
    * [new ThreadChannel([data], guildId, client)](#new_ThreadChannel_new)
    * [.join()](#ThreadChannel+join) ⇒
    * [.add(member)](#ThreadChannel+add) ⇒
    * [.remove(user)](#ThreadChannel+remove) ⇒
    * [.fetchOwner(options)](#ThreadChannel+fetchOwner) ⇒
    * [.setArchived(archived, reason)](#ThreadChannel+setArchived) ⇒
    * [.setLocked(locked, reason)](#ThreadChannel+setLocked) ⇒
    * [.setAutoArchiveDuration(autoArchiveDuration, reason)](#ThreadChannel+setAutoArchiveDuration) ⇒
    * [.setInvitable(invitable, reason)](#ThreadChannel+setInvitable) ⇒
    * [.setFlags(flags, reason)](#ThreadChannel+setFlags) ⇒

<a name="new_ThreadChannel_new"></a>

### new ThreadChannel([data], guildId, client)
"This function is used to create a new instance of the Thread class."


| Param | Description |
| --- | --- |
| [data] | The data that is passed to the constructor. |
| guildId | The ID of the guild the channel is in. |
| client | Discord.Client |

<a name="ThreadChannel+join"></a>

### threadChannel.join() ⇒
It returns a promise that resolves to the current object

**Kind**: instance method of [<code>ThreadChannel</code>](#ThreadChannel)  
**Returns**: The members array.  
<a name="ThreadChannel+add"></a>

### threadChannel.add(member) ⇒
It adds a member to the members collection.

**Kind**: instance method of [<code>ThreadChannel</code>](#ThreadChannel)  
**Returns**: The return value is a Promise that resolves to the result of the add() method.  

| Param | Description |
| --- | --- |
| member | The member to add to the set. |

<a name="ThreadChannel+remove"></a>

### threadChannel.remove(user) ⇒
It removes a user from the members array.

**Kind**: instance method of [<code>ThreadChannel</code>](#ThreadChannel)  
**Returns**: The return value is the result of the remove method.  

| Param | Description |
| --- | --- |
| user | The user to remove from the guild. |

<a name="ThreadChannel+fetchOwner"></a>

### threadChannel.fetchOwner(options) ⇒
It fetches the owner of the guild

**Kind**: instance method of [<code>ThreadChannel</code>](#ThreadChannel)  
**Returns**: The owner of the guild.  

| Param | Description |
| --- | --- |
| options | An object with the following properties: |

<a name="ThreadChannel+setArchived"></a>

### threadChannel.setArchived(archived, reason) ⇒
It edits the channel's archived property to the value of the archived parameter, and the reasonproperty to the value of the reason parameter

**Kind**: instance method of [<code>ThreadChannel</code>](#ThreadChannel)  
**Returns**: The return value of the edit function.  

| Param | Description |
| --- | --- |
| archived | Boolean - Whether the channel should be archived or not. |
| reason | The reason for the edit. |

<a name="ThreadChannel+setLocked"></a>

### threadChannel.setLocked(locked, reason) ⇒
It sets the locked property of a channel to true or false

**Kind**: instance method of [<code>ThreadChannel</code>](#ThreadChannel)  
**Returns**: The return value of the edit method.  

| Param | Description |
| --- | --- |
| locked | Boolean - Whether the channel should be locked or not |
| reason | The reason for the lock. |

<a name="ThreadChannel+setAutoArchiveDuration"></a>

### threadChannel.setAutoArchiveDuration(autoArchiveDuration, reason) ⇒
It sets the autoArchiveDuration of a channel

**Kind**: instance method of [<code>ThreadChannel</code>](#ThreadChannel)  
**Returns**: The return value of the edit method.  

| Param | Description |
| --- | --- |
| autoArchiveDuration | The duration in seconds after which the channel will be automatically archived. |
| reason | The reason for the edit. |

<a name="ThreadChannel+setInvitable"></a>

### threadChannel.setInvitable(invitable, reason) ⇒
It sets the invitable property of the guild.

**Kind**: instance method of [<code>ThreadChannel</code>](#ThreadChannel)  
**Returns**: The return value of the edit method.  

| Param | Description |
| --- | --- |
| invitable | Boolean - Whether the role should be invitable or not. |
| reason | The reason for the change (0-1024 characters) |

<a name="ThreadChannel+setFlags"></a>

### threadChannel.setFlags(flags, reason) ⇒
It sets the flags of a message

**Kind**: instance method of [<code>ThreadChannel</code>](#ThreadChannel)  
**Returns**: The return value of the edit method.  

| Param | Description |
| --- | --- |
| flags | The flags to set. |
| reason | The reason for the edit. |

