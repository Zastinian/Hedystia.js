---
title: ThreadChannel
sidebar:
  order: 65
---



## ThreadChannel ⇐ <code>TextBasedChannels</code>
Represents a thread channel in Discord.

**Kind**: global class  
**Extends**: <code>TextBasedChannels</code>  

* [ThreadChannel](#ThreadChannel) ⇐ <code>TextBasedChannels</code>
    * [new ThreadChannel([data], guildId, client)](#new_ThreadChannel_new)
    * [.join()](#ThreadChannel+join) ⇒ <code>Promise.&lt;Group&gt;</code>
    * [.add(member)](#ThreadChannel+add) ⇒ <code>Promise</code>
    * [.remove(user)](#ThreadChannel+remove) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.fetchOwner(options)](#ThreadChannel+fetchOwner) ⇒ <code>Promise.&lt;(Object\|null)&gt;</code>
    * [.setArchived(archived, reason)](#ThreadChannel+setArchived) ⇒ <code>Promise</code>
    * [.setLocked(locked, reason)](#ThreadChannel+setLocked) ⇒ <code>Promise</code>
    * [.setAutoArchiveDuration(autoArchiveDuration, reason)](#ThreadChannel+setAutoArchiveDuration) ⇒ <code>Promise</code>
    * [.setInvitable(invitable, reason)](#ThreadChannel+setInvitable) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.setFlags(flags, reason)](#ThreadChannel+setFlags) ⇒ <code>Promise.&lt;void&gt;</code>

<a name="new_ThreadChannel_new"></a>

### new ThreadChannel([data], guildId, client)
Constructs a new instance of the ThreadChannel class.


| Param | Type | Description |
| --- | --- | --- |
| [data] | <code>Object</code> | The data object containing information about the thread channel. |
| guildId | <code>string</code> | The ID of the guild that the thread channel belongs to. |
| client | <code>Client</code> | The client instance. |

<a name="ThreadChannel+join"></a>

### threadChannel.join() ⇒ <code>Promise.&lt;Group&gt;</code>
Asynchronously joins all members of a group.

**Kind**: instance method of [<code>ThreadChannel</code>](#ThreadChannel)  
**Returns**: <code>Promise.&lt;Group&gt;</code> - A promise that resolves to the joined group.  
<a name="ThreadChannel+add"></a>

### threadChannel.add(member) ⇒ <code>Promise</code>
Adds a member to the collection asynchronously.

**Kind**: instance method of [<code>ThreadChannel</code>](#ThreadChannel)  
**Returns**: <code>Promise</code> - A promise that resolves when the member is added.  

| Param | Type | Description |
| --- | --- | --- |
| member | <code>GuildMember</code> | The member to add. |

<a name="ThreadChannel+remove"></a>

### threadChannel.remove(user) ⇒ <code>Promise.&lt;void&gt;</code>
Removes a user from the members list.

**Kind**: instance method of [<code>ThreadChannel</code>](#ThreadChannel)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the user is successfully removed.  

| Param | Type | Description |
| --- | --- | --- |
| user | <code>User</code> | The user to remove. |

<a name="ThreadChannel+fetchOwner"></a>

### threadChannel.fetchOwner(options) ⇒ <code>Promise.&lt;(Object\|null)&gt;</code>
Fetches the owner of the object.

**Kind**: instance method of [<code>ThreadChannel</code>](#ThreadChannel)  
**Returns**: <code>Promise.&lt;(Object\|null)&gt;</code> - - A promise that resolves to the owner object if found, or null if the ownerId is not set.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Additional options for the fetch operation. |

<a name="ThreadChannel+setArchived"></a>

### threadChannel.setArchived(archived, reason) ⇒ <code>Promise</code>
Sets the archived status and reason for an item.

**Kind**: instance method of [<code>ThreadChannel</code>](#ThreadChannel)  
**Returns**: <code>Promise</code> - - A promise that resolves when the item is successfully edited.  

| Param | Type | Description |
| --- | --- | --- |
| archived | <code>boolean</code> | The archived status to set. |
| reason | <code>string</code> | The reason for archiving the item. |

<a name="ThreadChannel+setLocked"></a>

### threadChannel.setLocked(locked, reason) ⇒ <code>Promise</code>
Sets the locked status and reason for an item.

**Kind**: instance method of [<code>ThreadChannel</code>](#ThreadChannel)  
**Returns**: <code>Promise</code> - - A promise that resolves when the edit is complete.  

| Param | Type | Description |
| --- | --- | --- |
| locked | <code>boolean</code> | The locked status to set. |
| reason | <code>string</code> | The reason for locking the item. |

<a name="ThreadChannel+setAutoArchiveDuration"></a>

### threadChannel.setAutoArchiveDuration(autoArchiveDuration, reason) ⇒ <code>Promise</code>
Sets the auto archive duration for a specific item and provides a reason for the change.

**Kind**: instance method of [<code>ThreadChannel</code>](#ThreadChannel)  
**Returns**: <code>Promise</code> - - A promise that resolves when the operation is complete.  

| Param | Type | Description |
| --- | --- | --- |
| autoArchiveDuration | <code>number</code> | The new auto archive duration in seconds. |
| reason | <code>string</code> | The reason for changing the auto archive duration. |

<a name="ThreadChannel+setInvitable"></a>

### threadChannel.setInvitable(invitable, reason) ⇒ <code>Promise.&lt;void&gt;</code>
Sets the invitable property and reason for the object.

**Kind**: instance method of [<code>ThreadChannel</code>](#ThreadChannel)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the edit is complete.  

| Param | Type | Description |
| --- | --- | --- |
| invitable | <code>boolean</code> | The new value for the invitable property. |
| reason | <code>string</code> | The reason for the change. |

<a name="ThreadChannel+setFlags"></a>

### threadChannel.setFlags(flags, reason) ⇒ <code>Promise.&lt;void&gt;</code>
Sets the flags and reason for an object.

**Kind**: instance method of [<code>ThreadChannel</code>](#ThreadChannel)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the flags are set.  

| Param | Type | Description |
| --- | --- | --- |
| flags | <code>any</code> | The flags to set. |
| reason | <code>string</code> | The reason for setting the flags. |

