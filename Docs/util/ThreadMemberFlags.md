<a name="ThreadMemberFlags"></a>

## ThreadMemberFlags ⇐ <code>Bitfield</code>
A bitfield of flags for a thread member.

**Kind**: global class  
**Extends**: <code>Bitfield</code>  

* [ThreadMemberFlags](#ThreadMemberFlags) ⇐ <code>Bitfield</code>
    * [new ThreadMemberFlags(...bit)](#new_ThreadMemberFlags_new)
    * [.Default](#ThreadMemberFlags.Default) : <code>bigint</code>
    * [.All](#ThreadMemberFlags.All) : <code>bigint</code>
    * [.Flags](#ThreadMemberFlags.Flags) : <code>enum</code>

<a name="new_ThreadMemberFlags_new"></a>

### new ThreadMemberFlags(...bit)

| Param | Type | Description |
| --- | --- | --- |
| ...bit | <code>bigint</code> | Bit(s) to set in the bitfield. |

<a name="ThreadMemberFlags.Default"></a>

### ThreadMemberFlags.Default : <code>bigint</code>
Default bit value for a thread member.

**Kind**: static property of [<code>ThreadMemberFlags</code>](#ThreadMemberFlags)  
<a name="ThreadMemberFlags.All"></a>

### ThreadMemberFlags.All : <code>bigint</code>
Bitfield representing all available thread member flags.

**Kind**: static property of [<code>ThreadMemberFlags</code>](#ThreadMemberFlags)  
<a name="ThreadMemberFlags.Flags"></a>

### ThreadMemberFlags.Flags : <code>enum</code>
Thread member flags.

**Kind**: static enum of [<code>ThreadMemberFlags</code>](#ThreadMemberFlags)  
**Read only**: true  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| Has_Interacted | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| All_Messages | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| Only_Mentions | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| No_Messages | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 

