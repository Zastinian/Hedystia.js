<a name="MessageFlags"></a>

## MessageFlags ⇐ <code>Bitfield</code>
Represents a bitfield for Discord message flags.

**Kind**: global class  
**Extends**: <code>Bitfield</code>  

* [MessageFlags](#MessageFlags) ⇐ <code>Bitfield</code>
    * [new MessageFlags(...bit)](#new_MessageFlags_new)
    * [.Default](#MessageFlags.Default) : <code>BigInt</code>
    * [.All](#MessageFlags.All) : <code>BigInt</code>
    * [.Flags](#MessageFlags.Flags) : <code>enum</code>

<a name="new_MessageFlags_new"></a>

### new MessageFlags(...bit)

| Param | Type | Description |
| --- | --- | --- |
| ...bit | <code>number</code> | Positions to enable in the bitfield. |

<a name="MessageFlags.Default"></a>

### MessageFlags.Default : <code>BigInt</code>
The default bitfield value for a new instance.

**Kind**: static property of [<code>MessageFlags</code>](#MessageFlags)  
**Read only**: true  
<a name="MessageFlags.All"></a>

### MessageFlags.All : <code>BigInt</code>
The bitfield value with all bits set to 1.

**Kind**: static property of [<code>MessageFlags</code>](#MessageFlags)  
**Read only**: true  
<a name="MessageFlags.Flags"></a>

### MessageFlags.Flags : <code>enum</code>
An object mapping flag names to their corresponding bit positions.

**Kind**: static enum of [<code>MessageFlags</code>](#MessageFlags)  
**Read only**: true  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| Crossposted | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| Is_Crosspost | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| Suppress_Embeds | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| Source_Message_Deleted | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| Urgent | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| Has_Thread | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| Ephemeral | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| Loading | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| Failed_To_Mention_Some_Roles_In_Thread | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| Suppress_Notifications | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 

