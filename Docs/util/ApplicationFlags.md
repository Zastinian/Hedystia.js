<a name="ApplicationFlags"></a>

## ApplicationFlags ⇐ <code>Bitfield</code>
A bitfield for application flags.

**Kind**: global class  
**Extends**: <code>Bitfield</code>  

* [ApplicationFlags](#ApplicationFlags) ⇐ <code>Bitfield</code>
    * [new ApplicationFlags(...bit)](#new_ApplicationFlags_new)
    * [.Default](#ApplicationFlags.Default) : <code>number</code>
    * [.All](#ApplicationFlags.All) : <code>number</code>
    * [.Flags](#ApplicationFlags.Flags) : <code>enum</code>

<a name="new_ApplicationFlags_new"></a>

### new ApplicationFlags(...bit)
Creates a new ApplicationFlags instance.


| Param | Type | Description |
| --- | --- | --- |
| ...bit | <code>number</code> | Bit(s) to set in the bitfield |

<a name="ApplicationFlags.Default"></a>

### ApplicationFlags.Default : <code>number</code>
Default application flag bitfield.

**Kind**: static property of [<code>ApplicationFlags</code>](#ApplicationFlags)  
<a name="ApplicationFlags.All"></a>

### ApplicationFlags.All : <code>number</code>
All application flag bitfields.

**Kind**: static property of [<code>ApplicationFlags</code>](#ApplicationFlags)  
<a name="ApplicationFlags.Flags"></a>

### ApplicationFlags.Flags : <code>enum</code>
Application flag bitfields.

**Kind**: static enum of [<code>ApplicationFlags</code>](#ApplicationFlags)  
**Read only**: true  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| Gateway_Presence | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| Gateway_Presence_Limited | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| Gateway_Guild_Members | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| Gateway_Guild_Members_Limited | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| Verification_Pending_Guild_Limit | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| Embedded | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| Gateway_Message_Content | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| Gateway_Message_Content_Limited | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| Application_Command_Badge | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 

