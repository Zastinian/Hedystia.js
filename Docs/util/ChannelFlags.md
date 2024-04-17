---
title: ChannelFlags
sidebar:
  order: 5
---



## ChannelFlags ⇐ <code>Bitfield</code>
**Kind**: global class  
**Extends**: <code>Bitfield</code>  

* [ChannelFlags](#ChannelFlags) ⇐ <code>Bitfield</code>
    * [new ChannelFlags(...bit)](#new_ChannelFlags_new)
    * [.Default](#ChannelFlags.Default)
    * [.All](#ChannelFlags.All) ⇒
    * [.Flags](#ChannelFlags.Flags) : <code>enum</code>

<a name="new_ChannelFlags_new"></a>

### new ChannelFlags(...bit)
Constructs a new instance of the class.


| Param | Type | Description |
| --- | --- | --- |
| ...bit | <code>bigint</code> | The bits to set in the bitfield. |

<a name="ChannelFlags.Default"></a>

### ChannelFlags.Default
Sets the default value for the ChannelFlags property to 0n.

**Kind**: static property of [<code>ChannelFlags</code>](#ChannelFlags)  

| Param | Type | Description |
| --- | --- | --- |
| Default | <code>bigint</code> | The default bit value to set. |

<a name="ChannelFlags.All"></a>

### ChannelFlags.All ⇒
Calculates the value of ChannelFlags.All by performing a bitwise OR operation on all the valuesin the ChannelFlags.Flags object.

**Kind**: static property of [<code>ChannelFlags</code>](#ChannelFlags)  
**Returns**: The calculated value of ChannelFlags.All.  

| Param | Type | Description |
| --- | --- | --- |
| All | <code>bigint</code> | All bit value. |

<a name="ChannelFlags.Flags"></a>

### ChannelFlags.Flags : <code>enum</code>
Channel flags and their corresponding bit numbers.

**Kind**: static enum of [<code>ChannelFlags</code>](#ChannelFlags)  
**Read only**: true  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| Pinned | <code>bigint</code> | <code></code> | 
| Require_Tag | <code>bigint</code> | <code></code> | 

