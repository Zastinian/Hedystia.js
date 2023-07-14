<a name="ThreadMemberFlags"></a>

## ThreadMemberFlags ⇐ <code>Bitfield</code>
A bitfield of flags for a thread member.

**Kind**: global class  
**Extends**: <code>Bitfield</code>  

* [ThreadMemberFlags](#ThreadMemberFlags) ⇐ <code>Bitfield</code>
    * [new ThreadMemberFlags(...bit)](#new_ThreadMemberFlags_new)
    * [.Default](#ThreadMemberFlags.Default) : <code>bigint</code>
    * [.All](#ThreadMemberFlags.All) ⇒
    * [.Flags](#ThreadMemberFlags.Flags) : <code>enum</code>

<a name="new_ThreadMemberFlags_new"></a>

### new ThreadMemberFlags(...bit)
Constructs a new instance of the class.


| Param | Type | Description |
| --- | --- | --- |
| ...bit | <code>bigint</code> | The arguments to pass to the superclass constructor. |

<a name="ThreadMemberFlags.Default"></a>

### ThreadMemberFlags.Default : <code>bigint</code>
Sets the default value for the ThreadMemberFlags property.

**Kind**: static property of [<code>ThreadMemberFlags</code>](#ThreadMemberFlags)  
**Read only**: true  
<a name="ThreadMemberFlags.All"></a>

### ThreadMemberFlags.All ⇒
Calculates the bitwise OR of all the values in the ThreadMemberFlags.Flags objectand assigns the result to the ThreadMemberFlags.All property.

**Kind**: static property of [<code>ThreadMemberFlags</code>](#ThreadMemberFlags)  
**Returns**: The calculated value of ThreadMemberFlags.All.  

| Param | Type | Description |
| --- | --- | --- |
| All | <code>bigint</code> | All bit value. |

<a name="ThreadMemberFlags.Flags"></a>

### ThreadMemberFlags.Flags : <code>enum</code>
An object that represents the flags for a thread member.

**Kind**: static enum of [<code>ThreadMemberFlags</code>](#ThreadMemberFlags)  
**Read only**: true  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| Has_Interacted | <code>bigint</code> | <code></code> | 
| All_Messages | <code>bigint</code> | <code></code> | 
| Only_Mentions | <code>bigint</code> | <code></code> | 
| No_Messages | <code>bigint</code> | <code></code> | 

