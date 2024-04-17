---
title: PermissionOverwrite
sidebar:
  order: 53
---



## PermissionOverwrite ⇐ <code>Base</code>
Represents a permission overwrite for a channel in Discord.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [PermissionOverwrite](#PermissionOverwrite) ⇐ <code>Base</code>
    * [new PermissionOverwrite([data], channelId, client)](#new_PermissionOverwrite_new)
    * [.channel](#PermissionOverwrite+channel) ⇒
    * [.delete(reason)](#PermissionOverwrite+delete) ⇒ <code>Promise.&lt;boolean&gt;</code>

<a name="new_PermissionOverwrite_new"></a>

### new PermissionOverwrite([data], channelId, client)
Constructs a new instance of the Overwrite class.


| Param | Type | Description |
| --- | --- | --- |
| [data] | <code>Object</code> | The data for the permission overwrite. |
| channelId | <code>string</code> | The ID of the channel that the permission overwrite belongs to. |
| client | <code>Client</code> | The client instance. |

<a name="PermissionOverwrite+channel"></a>

### permissionOverwrite.channel ⇒
Retrieves the channel object associated with this instance.

**Kind**: instance property of [<code>PermissionOverwrite</code>](#PermissionOverwrite)  
**Returns**: The channel object.  
<a name="PermissionOverwrite+delete"></a>

### permissionOverwrite.delete(reason) ⇒ <code>Promise.&lt;boolean&gt;</code>
Deletes the permission overwrite for this channel.

**Kind**: instance method of [<code>PermissionOverwrite</code>](#PermissionOverwrite)  
**Returns**: <code>Promise.&lt;boolean&gt;</code> - - A promise that resolves to true if the deletion was successful, or false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| reason | <code>string</code> | The reason for deleting the permission overwrite. |

