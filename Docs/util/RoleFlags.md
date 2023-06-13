## Classes

<dl>
<dt><a href="#RoleFlags">RoleFlags</a> ⇐ <code>Bitfield</code></dt>
<dd><p>Represents the possible flags for a Role</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#RoleFlagsResolvable">RoleFlagsResolvable</a> : <code>Object</code></dt>
<dd></dd>
</dl>

<a name="RoleFlags"></a>

## RoleFlags ⇐ <code>Bitfield</code>
Represents the possible flags for a Role

**Kind**: global class  
**Extends**: <code>Bitfield</code>  

* [RoleFlags](#RoleFlags) ⇐ <code>Bitfield</code>
    * [new RoleFlags(...bit)](#new_RoleFlags_new)
    * [.Default](#RoleFlags.Default) : <code>bigint</code>
    * [.All](#RoleFlags.All) : <code>bigint</code>
    * [.Flags](#RoleFlags.Flags) : <code>enum</code>

<a name="new_RoleFlags_new"></a>

### new RoleFlags(...bit)

| Param | Type | Description |
| --- | --- | --- |
| ...bit | <code>bigint</code> | Bit positions to enable |

<a name="RoleFlags.Default"></a>

### RoleFlags.Default : <code>bigint</code>
The default bit(s) for a role

**Kind**: static property of [<code>RoleFlags</code>](#RoleFlags)  
<a name="RoleFlags.All"></a>

### RoleFlags.All : <code>bigint</code>
The total bit(s) of all the flags combined

**Kind**: static property of [<code>RoleFlags</code>](#RoleFlags)  
<a name="RoleFlags.Flags"></a>

### RoleFlags.Flags : <code>enum</code>
The flags for a role

**Kind**: static enum of [<code>RoleFlags</code>](#RoleFlags)  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| In_Prompt | <code>bigint</code> | <code></code> | 

<a name="RoleFlagsResolvable"></a>

## RoleFlagsResolvable : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [name] | <code>string</code> | The name of the flag |
| [bit] | <code>bigint</code> \| <code>number</code> | The bit of the flag |

