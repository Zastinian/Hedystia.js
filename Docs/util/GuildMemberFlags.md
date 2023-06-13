<a name="GuildMemberFlags"></a>

## GuildMemberFlags ⇐ <code>Bitfield</code>
A bitfield that represents flags for a guild member.

**Kind**: global class  
**Extends**: <code>Bitfield</code>  

* [GuildMemberFlags](#GuildMemberFlags) ⇐ <code>Bitfield</code>
    * [new GuildMemberFlags(...bit)](#new_GuildMemberFlags_new)
    * [.Default](#GuildMemberFlags.Default) : <code>bigint</code>
    * [.All](#GuildMemberFlags.All) : <code>bigint</code>
    * [.Flags](#GuildMemberFlags.Flags) : <code>enum</code>

<a name="new_GuildMemberFlags_new"></a>

### new GuildMemberFlags(...bit)

| Param | Type | Description |
| --- | --- | --- |
| ...bit | <code>string</code> | The bits to set |

<a name="GuildMemberFlags.Default"></a>

### GuildMemberFlags.Default : <code>bigint</code>
The default value for a guild member's flags.

**Kind**: static property of [<code>GuildMemberFlags</code>](#GuildMemberFlags)  
**Read only**: true  
<a name="GuildMemberFlags.All"></a>

### GuildMemberFlags.All : <code>bigint</code>
The value of all guild member flags combined.

**Kind**: static property of [<code>GuildMemberFlags</code>](#GuildMemberFlags)  
**Read only**: true  
<a name="GuildMemberFlags.Flags"></a>

### GuildMemberFlags.Flags : <code>enum</code>
The flags for a guild member.

**Kind**: static enum of [<code>GuildMemberFlags</code>](#GuildMemberFlags)  
**Read only**: true  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| Did_Rejoin | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| Completed_Onboarding | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| Bypasses_Verification | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| Started_Onboarding | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 

