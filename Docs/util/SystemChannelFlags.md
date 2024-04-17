---
title: SystemChannelFlags
sidebar:
  order: 18
---



## SystemChannelFlags ⇐ <code>Bitfield</code>
A bitfield that represents the system channel flags.

**Kind**: global class  
**Extends**: <code>Bitfield</code>  

* [SystemChannelFlags](#SystemChannelFlags) ⇐ <code>Bitfield</code>
    * [new SystemChannelFlags(...bit)](#new_SystemChannelFlags_new)
    * [.Default](#SystemChannelFlags.Default) : <code>bigint</code>
    * [.All](#SystemChannelFlags.All) ⇒
    * [.Flags](#SystemChannelFlags.Flags) : <code>enum</code>

<a name="new_SystemChannelFlags_new"></a>

### new SystemChannelFlags(...bit)
Constructs a new instance of the class.


| Param | Type | Description |
| --- | --- | --- |
| ...bit | <code>bigint</code> | The arguments to pass to the superclass constructor. |

<a name="SystemChannelFlags.Default"></a>

### SystemChannelFlags.Default : <code>bigint</code>
Sets the default value for the SystemChannelFlags property.

**Kind**: static property of [<code>SystemChannelFlags</code>](#SystemChannelFlags)  
**Read only**: true  
<a name="SystemChannelFlags.All"></a>

### SystemChannelFlags.All ⇒
Calculates the value of the SystemChannelFlags.All property by performing a bitwise OR operationon all the values of the SystemChannelFlags.Flags object.

**Kind**: static property of [<code>SystemChannelFlags</code>](#SystemChannelFlags)  
**Returns**: The calculated value of SystemChannelFlags.All.  

| Param | Type | Description |
| --- | --- | --- |
| All | <code>bigint</code> | All bit value. |

<a name="SystemChannelFlags.Flags"></a>

### SystemChannelFlags.Flags : <code>enum</code>
Represents the flags for the system channel.

**Kind**: static enum of [<code>SystemChannelFlags</code>](#SystemChannelFlags)  
**Read only**: true  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| Suppress_Join_Notifications | <code>bigint</code> | <code></code> | 
| Suppress_Premium_Subscriptions | <code>bigint</code> | <code></code> | 
| Suppress_Guild_Reminder_Notifications | <code>bigint</code> | <code></code> | 
| Suppress_Join_Notification_Replies | <code>bigint</code> | <code></code> | 
| Suppress_Role_Subscription_Purchase_Notifications | <code>bigint</code> | <code></code> | 
| Suppress_Role_Subscription_Purchase_Notification_Replies | <code>bigint</code> | <code></code> | 

