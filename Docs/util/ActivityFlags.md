<a name="ActivityFlags"></a>

## ActivityFlags ⇐ <code>Bitfield</code>
**Kind**: global class  
**Extends**: <code>Bitfield</code>  

* [ActivityFlags](#ActivityFlags) ⇐ <code>Bitfield</code>
    * [new ActivityFlags(...bit)](#new_ActivityFlags_new)
    * [.Default](#ActivityFlags.Default)
    * [.All](#ActivityFlags.All) ⇒
    * [.Flags](#ActivityFlags.Flags) : <code>enum</code>

<a name="new_ActivityFlags_new"></a>

### new ActivityFlags(...bit)
Constructs a new instance of the class.


| Param | Type | Description |
| --- | --- | --- |
| ...bit | <code>bigint</code> | The bits to set in the bitfield. |

<a name="ActivityFlags.Default"></a>

### ActivityFlags.Default
Sets the default value for the ActivityFlags to 0n.

**Kind**: static property of [<code>ActivityFlags</code>](#ActivityFlags)  

| Param | Type | Description |
| --- | --- | --- |
| Default | <code>bigint</code> | The default bit value to set. |

<a name="ActivityFlags.All"></a>

### ActivityFlags.All ⇒
Calculates the value of the ActivityFlags.All by performing a bitwise OR operationon all the values of the ActivityFlags.Flags.

**Kind**: static property of [<code>ActivityFlags</code>](#ActivityFlags)  
**Returns**: The calculated value of ActivityFlags.All.  

| Param | Type | Description |
| --- | --- | --- |
| All | <code>bigint</code> | All bit value. |

<a name="ActivityFlags.Flags"></a>

### ActivityFlags.Flags : <code>enum</code>
Represents the available flags for activity settings.

**Kind**: static enum of [<code>ActivityFlags</code>](#ActivityFlags)  
**Read only**: true  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| Instance | <code>bigint</code> | <code></code> | 
| Join | <code>bigint</code> | <code></code> | 
| Spectate | <code>bigint</code> | <code></code> | 
| Join_Request | <code>bigint</code> | <code></code> | 
| Sync | <code>bigint</code> | <code></code> | 
| Play | <code>bigint</code> | <code></code> | 
| Party_Privacy_Friends | <code>bigint</code> | <code></code> | 
| Party_Privacy_Voice_Channel | <code>bigint</code> | <code></code> | 
| Embedded | <code>bigint</code> | <code></code> | 

