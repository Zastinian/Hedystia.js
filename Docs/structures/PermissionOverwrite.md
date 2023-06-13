## Classes

<dl>
<dt><a href="#PermissionOverwrite">PermissionOverwrite</a> ⇐ <code>Base</code></dt>
<dd></dd>
<dt><a href="#PermissionOverwrite">PermissionOverwrite</a></dt>
<dd></dd>
</dl>

<a name="PermissionOverwrite"></a>

## PermissionOverwrite ⇐ <code>Base</code>
**Kind**: global class  
**Extends**: <code>Base</code>  

* [PermissionOverwrite](#PermissionOverwrite) ⇐ <code>Base</code>
    * [new PermissionOverwrite()](#new_PermissionOverwrite_new)
    * [new PermissionOverwrite([data], channelId, client)](#new_PermissionOverwrite_new)
    * [.channel](#PermissionOverwrite+channel) ⇒
    * [.delete(reason)](#PermissionOverwrite+delete) ⇒

<a name="new_PermissionOverwrite_new"></a>

### new PermissionOverwrite()
It's a class that represents a permission overwrite for a channel

<a name="new_PermissionOverwrite_new"></a>

### new PermissionOverwrite([data], channelId, client)
It's a constructor for a class called Overwrite.


| Param | Description |
| --- | --- |
| [data] | The data that was received from the API. |
| channelId | The ID of the channel this overwrite is for. |
| client | Discord.Client |

<a name="PermissionOverwrite+channel"></a>

### permissionOverwrite.channel ⇒
It returns the channel object of the channel ID that is stored in the message object

**Kind**: instance property of [<code>PermissionOverwrite</code>](#PermissionOverwrite)  
**Returns**: The channel object.  
<a name="PermissionOverwrite+delete"></a>

### permissionOverwrite.delete(reason) ⇒
It deletes a permission overwrite from a channel

**Kind**: instance method of [<code>PermissionOverwrite</code>](#PermissionOverwrite)  
**Returns**: The return value is a Promise that resolves with a Collection&lt;Snowflake,PermissionOverwrite&gt;.  

| Param | Description |
| --- | --- |
| reason | The reason for the deletion. |

<a name="PermissionOverwrite"></a>

## PermissionOverwrite
**Kind**: global class  

* [PermissionOverwrite](#PermissionOverwrite)
    * [new PermissionOverwrite()](#new_PermissionOverwrite_new)
    * [new PermissionOverwrite([data], channelId, client)](#new_PermissionOverwrite_new)
    * [.channel](#PermissionOverwrite+channel) ⇒
    * [.delete(reason)](#PermissionOverwrite+delete) ⇒

<a name="new_PermissionOverwrite_new"></a>

### new PermissionOverwrite()
It's a class that represents a permission overwrite for a channel

<a name="new_PermissionOverwrite_new"></a>

### new PermissionOverwrite([data], channelId, client)
It's a constructor for a class called Overwrite.


| Param | Description |
| --- | --- |
| [data] | The data that was received from the API. |
| channelId | The ID of the channel this overwrite is for. |
| client | Discord.Client |

<a name="PermissionOverwrite+channel"></a>

### permissionOverwrite.channel ⇒
It returns the channel object of the channel ID that is stored in the message object

**Kind**: instance property of [<code>PermissionOverwrite</code>](#PermissionOverwrite)  
**Returns**: The channel object.  
<a name="PermissionOverwrite+delete"></a>

### permissionOverwrite.delete(reason) ⇒
It deletes a permission overwrite from a channel

**Kind**: instance method of [<code>PermissionOverwrite</code>](#PermissionOverwrite)  
**Returns**: The return value is a Promise that resolves with a Collection&lt;Snowflake,PermissionOverwrite&gt;.  

| Param | Description |
| --- | --- |
| reason | The reason for the deletion. |

