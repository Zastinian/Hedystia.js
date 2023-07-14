<a name="MessageFlags"></a>

## MessageFlags ⇐ <code>Bitfield</code>
Represents a bitfield for Discord message flags.

**Kind**: global class  
**Extends**: <code>Bitfield</code>  

* [MessageFlags](#MessageFlags) ⇐ <code>Bitfield</code>
    * [new MessageFlags(...bit)](#new_MessageFlags_new)
    * [.Default](#MessageFlags.Default) : <code>bigint</code>
    * [.All](#MessageFlags.All) ⇒
    * [.Flags](#MessageFlags.Flags) : <code>enum</code>

<a name="new_MessageFlags_new"></a>

### new MessageFlags(...bit)
Constructs a new instance of the class.


| Param | Type | Description |
| --- | --- | --- |
| ...bit | <code>bigint</code> | The arguments to pass to the superclass constructor. |

<a name="MessageFlags.Default"></a>

### MessageFlags.Default : <code>bigint</code>
Sets the default value for the MessageFlags to 0n.

**Kind**: static property of [<code>MessageFlags</code>](#MessageFlags)  
**Read only**: true  
<a name="MessageFlags.All"></a>

### MessageFlags.All ⇒
Combines all the values of the MessageFlags.Flags object using a bitwise OR operationand assigns the result to the MessageFlags.All property.

**Kind**: static property of [<code>MessageFlags</code>](#MessageFlags)  
**Returns**: The calculated value of Intents.All.  

| Param | Type | Description |
| --- | --- | --- |
| All | <code>bigint</code> | All bit value. |

<a name="MessageFlags.Flags"></a>

### MessageFlags.Flags : <code>enum</code>
Represents the different flags that can be applied to a message.

**Kind**: static enum of [<code>MessageFlags</code>](#MessageFlags)  
**Read only**: true  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| Crossposted | <code>bigint</code> | <code></code> | 
| Is_Crosspost | <code>bigint</code> | <code></code> | 
| Suppress_Embeds | <code>bigint</code> | <code></code> | 
| Source_Message_Deleted | <code>bigint</code> | <code></code> | 
| Urgent | <code>bigint</code> | <code></code> | 
| Has_Thread | <code>bigint</code> | <code></code> | 
| Ephemeral | <code>bigint</code> | <code></code> | 
| Loading | <code>bigint</code> | <code></code> | 
| Failed_To_Mention_Some_Roles_In_Thread | <code>bigint</code> | <code></code> | 
| Suppress_Notifications | <code>bigint</code> | <code></code> | 

