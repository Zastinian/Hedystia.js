<a name="ThreadMember"></a>

## ThreadMember ⇐ <code>Base</code>
It's a class that represents a user in a thread

**Kind**: global class  
**Extends**: <code>Base</code>  

* [ThreadMember](#ThreadMember) ⇐ <code>Base</code>
    * [new ThreadMember([data], guildId, threadId, client)](#new_ThreadMember_new)
    * [.guild](#ThreadMember+guild) ⇒
    * [.thread](#ThreadMember+thread) ⇒
    * [.user](#ThreadMember+user) ⇒
    * [.remove()](#ThreadMember+remove) ⇒

<a name="new_ThreadMember_new"></a>

### new ThreadMember([data], guildId, threadId, client)
"This function is used to create a new ThreadMember object, which is used to represent a member ofa thread."


| Param | Description |
| --- | --- |
| [data] | The data that was received from the API. |
| guildId | The ID of the guild the thread is in. |
| threadId | The ID of the thread |
| client | Discord.Client |

<a name="ThreadMember+guild"></a>

### threadMember.guild ⇒
It returns the guild object of the guild ID that is stored in the database

**Kind**: instance property of [<code>ThreadMember</code>](#ThreadMember)  
**Returns**: The guild object.  
<a name="ThreadMember+thread"></a>

### threadMember.thread ⇒
It returns the channel object of the thread.

**Kind**: instance property of [<code>ThreadMember</code>](#ThreadMember)  
**Returns**: The thread channel.  
<a name="ThreadMember+user"></a>

### threadMember.user ⇒
It returns the user object of the user who sent the message

**Kind**: instance property of [<code>ThreadMember</code>](#ThreadMember)  
**Returns**: The user object.  
<a name="ThreadMember+remove"></a>

### threadMember.remove() ⇒
It removes a user from a thread

**Kind**: instance method of [<code>ThreadMember</code>](#ThreadMember)  
**Returns**: The thread member object.  
