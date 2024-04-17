---
title: ApplicationFlags
sidebar:
  order: 3
---



## ApplicationFlags ⇐ <code>Bitfield</code>
**Kind**: global class  
**Extends**: <code>Bitfield</code>  

* [ApplicationFlags](#ApplicationFlags) ⇐ <code>Bitfield</code>
    * [new ApplicationFlags(...bit)](#new_ApplicationFlags_new)
    * [.Default](#ApplicationFlags.Default)
    * [.All](#ApplicationFlags.All) ⇒
    * [.Flags](#ApplicationFlags.Flags) : <code>enum</code>

<a name="new_ApplicationFlags_new"></a>

### new ApplicationFlags(...bit)
Constructs a new instance of the class.


| Param | Type | Description |
| --- | --- | --- |
| ...bit | <code>bigint</code> | The bits to set in the bitfield. |

<a name="ApplicationFlags.Default"></a>

### ApplicationFlags.Default
Sets the default value for the ApplicationFlags to 0n.

**Kind**: static property of [<code>ApplicationFlags</code>](#ApplicationFlags)  

| Param | Type | Description |
| --- | --- | --- |
| Default | <code>bigint</code> | The default bit value to set. |

<a name="ApplicationFlags.All"></a>

### ApplicationFlags.All ⇒
Combines all the values of the ApplicationFlags.Flags object using a bitwise OR operationand assigns the result to the ApplicationFlags.All property.

**Kind**: static property of [<code>ApplicationFlags</code>](#ApplicationFlags)  
**Returns**: The calculated value of ApplicationFlags.All.  

| Param | Type | Description |
| --- | --- | --- |
| All | <code>bigint</code> | All bit value. |

<a name="ApplicationFlags.Flags"></a>

### ApplicationFlags.Flags : <code>enum</code>
Represents the available application flags.

**Kind**: static enum of [<code>ApplicationFlags</code>](#ApplicationFlags)  
**Read only**: true  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| Gateway_Presence | <code>bigint</code> | <code></code> | 
| Gateway_Presence_Limited | <code>bigint</code> | <code></code> | 
| Gateway_Guild_Members | <code>bigint</code> | <code></code> | 
| Gateway_Guild_Members_Limited | <code>bigint</code> | <code></code> | 
| Verification_Pending_Guild_Limit | <code>bigint</code> | <code></code> | 
| Embedded | <code>bigint</code> | <code></code> | 
| Gateway_Message_Content | <code>bigint</code> | <code></code> | 
| Gateway_Message_Content_Limited | <code>bigint</code> | <code></code> | 
| Application_Command_Badge | <code>bigint</code> | <code></code> | 

