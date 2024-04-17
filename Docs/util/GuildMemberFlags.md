---
title: GuildMemberFlags
sidebar:
  order: 9
---



## GuildMemberFlags ⇐ <code>Bitfield</code>
A bitfield that represents flags for a guild member.

**Kind**: global class  
**Extends**: <code>Bitfield</code>  

* [GuildMemberFlags](#GuildMemberFlags) ⇐ <code>Bitfield</code>
    * [new GuildMemberFlags(...bit)](#new_GuildMemberFlags_new)
    * [.Default](#GuildMemberFlags.Default)
    * [.All](#GuildMemberFlags.All) ⇒
    * [.Flags](#GuildMemberFlags.Flags) : <code>enum</code>

<a name="new_GuildMemberFlags_new"></a>

### new GuildMemberFlags(...bit)
Constructs a new instance of the class.


| Param | Type | Description |
| --- | --- | --- |
| ...bit | <code>bigint</code> | The arguments to pass to the superclass constructor. |

<a name="GuildMemberFlags.Default"></a>

### GuildMemberFlags.Default
Sets the default value for the GuildMemberFlags to 0n.

**Kind**: static property of [<code>GuildMemberFlags</code>](#GuildMemberFlags)  

| Param | Type | Description |
| --- | --- | --- |
| Default | <code>bigint</code> | The default bit value to set. |

<a name="GuildMemberFlags.All"></a>

### GuildMemberFlags.All ⇒
Calculates the bitwise OR of all the values in the GuildMemberFlags.Flags objectand assigns the result to the GuildMemberFlags.All property.

**Kind**: static property of [<code>GuildMemberFlags</code>](#GuildMemberFlags)  
**Returns**: The calculated value of GuildMemberFlags.All.  

| Param | Type | Description |
| --- | --- | --- |
| All | <code>bigint</code> | All bit value. |

<a name="GuildMemberFlags.Flags"></a>

### GuildMemberFlags.Flags : <code>enum</code>
Represents the flags associated with a guild member.

**Kind**: static enum of [<code>GuildMemberFlags</code>](#GuildMemberFlags)  
**Read only**: true  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| Did_Rejoin | <code>bigint</code> | <code></code> | 
| Completed_Onboarding | <code>bigint</code> | <code></code> | 
| Bypasses_Verification | <code>bigint</code> | <code></code> | 
| Started_Onboarding | <code>bigint</code> | <code></code> | 

