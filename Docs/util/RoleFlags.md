<a name="RoleFlags"></a>

## RoleFlags ⇐ <code>Bitfield</code>
Represents the possible flags for a Role

**Kind**: global class  
**Extends**: <code>Bitfield</code>  

* [RoleFlags](#RoleFlags) ⇐ <code>Bitfield</code>
    * [new RoleFlags(...bit)](#new_RoleFlags_new)
    * [.Default](#RoleFlags.Default) : <code>bigint</code>
    * [.All](#RoleFlags.All) ⇒
    * [.Flags](#RoleFlags.Flags) : <code>enum</code>

<a name="new_RoleFlags_new"></a>

### new RoleFlags(...bit)
Constructs a new instance of the class.


| Param | Type | Description |
| --- | --- | --- |
| ...bit | <code>bigint</code> | The arguments to pass to the superclass constructor. |

<a name="RoleFlags.Default"></a>

### RoleFlags.Default : <code>bigint</code>
Sets the RoleFlags.Default value to 0n.

**Kind**: static property of [<code>RoleFlags</code>](#RoleFlags)  
**Read only**: true  
<a name="RoleFlags.All"></a>

### RoleFlags.All ⇒
Calculates the bitwise OR of all the values in the RoleFlags.Flags object and assignsthe result to the RoleFlags.All property.

**Kind**: static property of [<code>RoleFlags</code>](#RoleFlags)  
**Returns**: The calculated value of RoleFlags.All.  

| Param | Type | Description |
| --- | --- | --- |
| All | <code>bigint</code> | All bit value. |

<a name="RoleFlags.Flags"></a>

### RoleFlags.Flags : <code>enum</code>
Represents the available role flags.

**Kind**: static enum of [<code>RoleFlags</code>](#RoleFlags)  
**Read only**: true  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| In_Prompt | <code>bigint</code> | <code></code> | 

