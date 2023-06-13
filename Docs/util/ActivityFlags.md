<a name="ActivityFlags"></a>

## ActivityFlags ⇐ <code>Bitfield</code>
Represents a set of flags that can be used to represent various activity options.

**Kind**: global class  
**Extends**: <code>Bitfield</code>  

* [ActivityFlags](#ActivityFlags) ⇐ <code>Bitfield</code>
    * [new ActivityFlags(...bit)](#new_ActivityFlags_new)
    * [.Default](#ActivityFlags.Default) : <code>number</code>
    * [.All](#ActivityFlags.All) : <code>number</code>
    * [.Flags](#ActivityFlags.Flags) : <code>enum</code>

<a name="new_ActivityFlags_new"></a>

### new ActivityFlags(...bit)
Creates a new ActivityFlags instance.


| Param | Type | Description |
| --- | --- | --- |
| ...bit | <code>number</code> | The bits to set for this ActivityFlags instance. |

<a name="ActivityFlags.Default"></a>

### ActivityFlags.Default : <code>number</code>
The default flag value.

**Kind**: static property of [<code>ActivityFlags</code>](#ActivityFlags)  
<a name="ActivityFlags.All"></a>

### ActivityFlags.All : <code>number</code>
All available flag values.

**Kind**: static property of [<code>ActivityFlags</code>](#ActivityFlags)  
<a name="ActivityFlags.Flags"></a>

### ActivityFlags.Flags : <code>enum</code>
The individual flags that can be used to represent activity options.

**Kind**: static enum of [<code>ActivityFlags</code>](#ActivityFlags)  
**Read only**: true  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| Instance | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| Join | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| Spectate | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| Join_Request | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| Sync | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| Play | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| Party_Privacy_Friends | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| Party_Privacy_Voice_Channel | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| Embedded | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 

