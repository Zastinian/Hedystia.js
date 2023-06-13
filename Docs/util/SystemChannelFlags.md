<a name="SystemChannelFlags"></a>

## SystemChannelFlags ⇐ <code>Bitfield</code>
A bitfield that represents the system channel flags.

**Kind**: global class  
**Extends**: <code>Bitfield</code>  

* [SystemChannelFlags](#SystemChannelFlags) ⇐ <code>Bitfield</code>
    * [new SystemChannelFlags(...bit)](#new_SystemChannelFlags_new)
    * [.Default](#SystemChannelFlags.Default) : <code>bigint</code>
    * [.All](#SystemChannelFlags.All) : <code>bigint</code>
    * [.Flags](#SystemChannelFlags.Flags) : <code>enum</code>

<a name="new_SystemChannelFlags_new"></a>

### new SystemChannelFlags(...bit)

| Param | Type | Description |
| --- | --- | --- |
| ...bit | <code>number</code> | Bit(s) to set initially. |

<a name="SystemChannelFlags.Default"></a>

### SystemChannelFlags.Default : <code>bigint</code>
The default bitfield of a system channel.

**Kind**: static property of [<code>SystemChannelFlags</code>](#SystemChannelFlags)  
<a name="SystemChannelFlags.All"></a>

### SystemChannelFlags.All : <code>bigint</code>
All available flags for a system channel.

**Kind**: static property of [<code>SystemChannelFlags</code>](#SystemChannelFlags)  
<a name="SystemChannelFlags.Flags"></a>

### SystemChannelFlags.Flags : <code>enum</code>
Available flags for a system channel.

**Kind**: static enum of [<code>SystemChannelFlags</code>](#SystemChannelFlags)  
**Read only**: true  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| Suppress_Join_Notifications | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| Suppress_Premium_Subscriptions | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| Suppress_Guild_Reminder_Notifications | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| Suppress_Join_Notification_Replies | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| Suppress_Role_Subscription_Purchase_Notifications | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| Suppress_Role_Subscription_Purchase_Notification_Replies | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 

