<a name="ChannelFlags"></a>

## ChannelFlags ⇐ <code>Bitfield</code>
Class representing bitfields of Channel flags.

**Kind**: global class  
**Extends**: <code>Bitfield</code>  

* [ChannelFlags](#ChannelFlags) ⇐ <code>Bitfield</code>
    * [new ChannelFlags(...bit)](#new_ChannelFlags_new)
    * [.Default](#ChannelFlags.Default) : <code>bigint</code>
    * [.All](#ChannelFlags.All) : <code>bigint</code>
    * [.Flags](#ChannelFlags.Flags) : <code>enum</code>

<a name="new_ChannelFlags_new"></a>

### new ChannelFlags(...bit)
Creates a new instance of the ChannelFlags class.


| Param | Type | Description |
| --- | --- | --- |
| ...bit | <code>number</code> | Bit numbers to include in the Bitfield. |

<a name="ChannelFlags.Default"></a>

### ChannelFlags.Default : <code>bigint</code>
Default value for the ChannelFlags class.

**Kind**: static property of [<code>ChannelFlags</code>](#ChannelFlags)  
<a name="ChannelFlags.All"></a>

### ChannelFlags.All : <code>bigint</code>
Bitwise OR operation on all flags to get a bitfield with all flags.

**Kind**: static property of [<code>ChannelFlags</code>](#ChannelFlags)  
<a name="ChannelFlags.Flags"></a>

### ChannelFlags.Flags : <code>enum</code>
Channel flags and their corresponding bit numbers.

**Kind**: static enum of [<code>ChannelFlags</code>](#ChannelFlags)  
**Read only**: true  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| Pinned | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| Require_Tag | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 

