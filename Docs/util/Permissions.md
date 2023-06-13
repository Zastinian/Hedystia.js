<a name="Permissions"></a>

## Permissions ⇐ <code>Bitfield</code>
Class representing a Discord permission bitfield.

**Kind**: global class  
**Extends**: <code>Bitfield</code>  

* [Permissions](#Permissions) ⇐ <code>Bitfield</code>
    * [new Permissions(...bit)](#new_Permissions_new)
    * [.Default](#Permissions.Default) : <code>bigint</code>
    * [.All](#Permissions.All) : <code>bigint</code>
    * [.Flags](#Permissions.Flags) : <code>enum</code>

<a name="new_Permissions_new"></a>

### new Permissions(...bit)
Create a new Permissions bitfield


| Param | Type | Description |
| --- | --- | --- |
| ...bit | <code>bigint</code> | Bit positions to enable |

<a name="Permissions.Default"></a>

### Permissions.Default : <code>bigint</code>
The default Permissions bitfield value

**Kind**: static property of [<code>Permissions</code>](#Permissions)  
**Read only**: true  
<a name="Permissions.All"></a>

### Permissions.All : <code>bigint</code>
Bitfield representing all permissions

**Kind**: static property of [<code>Permissions</code>](#Permissions)  
**Read only**: true  
<a name="Permissions.Flags"></a>

### Permissions.Flags : <code>enum</code>
Object containing bit flags for Permissions

**Kind**: static enum of [<code>Permissions</code>](#Permissions)  
**Read only**: true  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| Create_Instant_Invite | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| Kick_Members | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| Ban_Members | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| Administrator | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| Manage_Channels | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| Manage_Guild | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| Add_Reactions | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| View_Audit_Log | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| Priority_Speakers | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| Stream | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| View_Channel | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| Send_Messages | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| Send_TTS_Messages | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| Manage_Messages | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| Embed_Links | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| Attach_Files | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| Read_Message_History | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| Mention_Everyone | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| Use_External_Emojis | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| View_Guild_Analitics | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| Connect | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| Speak | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| Mute_Members | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| Deafen_Members | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| Move_Members | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| Use_Vad | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| Change_Nickname | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| Manage_Nicknames | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| Manage_Roles | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| Manage_Webhooks | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| Manage_Emojis_And_Stickers | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| Use_Applications_Commands | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| Request_To_Speak | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| Manage_Events | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| Manage_Threads | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| Create_Public_Threads | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| Create_Private_Threads | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| Use_External_Stickers | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| Send_Messages_In_Threads | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| Use_Embedded_Activities | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 
| Moderate_Members | <code>Object.&lt;string, bigint&gt;</code> | <code></code> | 

