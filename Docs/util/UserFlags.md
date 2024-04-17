---
title: UserFlags
sidebar:
  order: 20
---



## UserFlags ⇐ <code>Bitfield</code>
Represents a set of user flags using a bitfield.

**Kind**: global class  
**Extends**: <code>Bitfield</code>  

* [UserFlags](#UserFlags) ⇐ <code>Bitfield</code>
    * [new UserFlags(...bit)](#new_UserFlags_new)
    * [.Default](#UserFlags.Default) : <code>bigint</code>
    * [.All](#UserFlags.All) ⇒
    * [.Flags](#UserFlags.Flags) : <code>enum</code>

<a name="new_UserFlags_new"></a>

### new UserFlags(...bit)
Constructs a new instance of the class.


| Param | Type | Description |
| --- | --- | --- |
| ...bit | <code>bigint</code> | The arguments to pass to the superclass constructor. |

<a name="UserFlags.Default"></a>

### UserFlags.Default : <code>bigint</code>
Sets the default value for the UserFlags to 0n.

**Kind**: static property of [<code>UserFlags</code>](#UserFlags)  
**Read only**: true  
<a name="UserFlags.All"></a>

### UserFlags.All ⇒
Combines all the values of the UserFlags.Flags object using a bitwise OR operationand assigns the result to the UserFlags.All property.

**Kind**: static property of [<code>UserFlags</code>](#UserFlags)  
**Returns**: The calculated value of UserFlags.All.  

| Param | Type | Description |
| --- | --- | --- |
| All | <code>bigint</code> | All bit value. |

<a name="UserFlags.Flags"></a>

### UserFlags.Flags : <code>enum</code>
An object that represents various user flags in Discord.Each flag is represented as a bit in a BigInt value.

**Kind**: static enum of [<code>UserFlags</code>](#UserFlags)  
**Read only**: true  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| Staff | <code>bigint</code> | <code></code> | 
| Partner | <code>bigint</code> | <code></code> | 
| Hypesquad | <code>bigint</code> | <code></code> | 
| Bug_Hunter_Level_1 | <code>bigint</code> | <code></code> | 
| Hypesquad_Online_House_1 | <code>bigint</code> | <code></code> | 
| Hypesquad_Online_House_2 | <code>bigint</code> | <code></code> | 
| Hypesquad_Online_House_3 | <code>bigint</code> | <code></code> | 
| Premium_Early_Supporter | <code>bigint</code> | <code></code> | 
| Team_Pseudo_User | <code>bigint</code> | <code></code> | 
| Bug_Hunter_Level_2 | <code>bigint</code> | <code></code> | 
| Verified_Bot | <code>bigint</code> | <code></code> | 
| Verified_Developer | <code>bigint</code> | <code></code> | 
| Certified_Moderator | <code>bigint</code> | <code></code> | 
| Bot_Http_Interactions | <code>bigint</code> | <code></code> | 
| Active_Developer | <code>bigint</code> | <code></code> | 

