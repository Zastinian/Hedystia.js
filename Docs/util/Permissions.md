<a name="Permissions"></a>

## Permissions ⇐ <code>Bitfield</code>
Class representing a Discord permission bitfield.

**Kind**: global class  
**Extends**: <code>Bitfield</code>  

* [Permissions](#Permissions) ⇐ <code>Bitfield</code>
    * [new Permissions(...bit)](#new_Permissions_new)
    * [.Default](#Permissions.Default) : <code>bigint</code>
    * [.All](#Permissions.All) ⇒
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

### Permissions.All ⇒
Bitfield representing all permissions

**Kind**: static property of [<code>Permissions</code>](#Permissions)  
**Returns**: The calculated value of Intents.All.  

| Param | Type | Description |
| --- | --- | --- |
| All | <code>bigint</code> | All bit value. |

<a name="Permissions.Flags"></a>

### Permissions.Flags : <code>enum</code>
Object containing bit flags for Permissions

**Kind**: static enum of [<code>Permissions</code>](#Permissions)  
**Read only**: true  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| Create_Instant_Invite | <code>bigint</code> | <code></code> | 
| Kick_Members | <code>bigint</code> | <code></code> | 
| Ban_Members | <code>bigint</code> | <code></code> | 
| Administrator | <code>bigint</code> | <code></code> | 
| Manage_Channels | <code>bigint</code> | <code></code> | 
| Manage_Guild | <code>bigint</code> | <code></code> | 
| Add_Reactions | <code>bigint</code> | <code></code> | 
| View_Audit_Log | <code>bigint</code> | <code></code> | 
| Priority_Speakers | <code>bigint</code> | <code></code> | 
| Stream | <code>bigint</code> | <code></code> | 
| View_Channel | <code>bigint</code> | <code></code> | 
| Send_Messages | <code>bigint</code> | <code></code> | 
| Send_TTS_Messages | <code>bigint</code> | <code></code> | 
| Manage_Messages | <code>bigint</code> | <code></code> | 
| Embed_Links | <code>bigint</code> | <code></code> | 
| Attach_Files | <code>bigint</code> | <code></code> | 
| Read_Message_History | <code>bigint</code> | <code></code> | 
| Mention_Everyone | <code>bigint</code> | <code></code> | 
| Use_External_Emojis | <code>bigint</code> | <code></code> | 
| View_Guild_Analitics | <code>bigint</code> | <code></code> | 
| Connect | <code>bigint</code> | <code></code> | 
| Speak | <code>bigint</code> | <code></code> | 
| Mute_Members | <code>bigint</code> | <code></code> | 
| Deafen_Members | <code>bigint</code> | <code></code> | 
| Move_Members | <code>bigint</code> | <code></code> | 
| Use_Vad | <code>bigint</code> | <code></code> | 
| Change_Nickname | <code>bigint</code> | <code></code> | 
| Manage_Nicknames | <code>bigint</code> | <code></code> | 
| Manage_Roles | <code>bigint</code> | <code></code> | 
| Manage_Webhooks | <code>bigint</code> | <code></code> | 
| Manage_Emojis_And_Stickers | <code>bigint</code> | <code></code> | 
| Use_Applications_Commands | <code>bigint</code> | <code></code> | 
| Request_To_Speak | <code>bigint</code> | <code></code> | 
| Manage_Events | <code>bigint</code> | <code></code> | 
| Manage_Threads | <code>bigint</code> | <code></code> | 
| Create_Public_Threads | <code>bigint</code> | <code></code> | 
| Create_Private_Threads | <code>bigint</code> | <code></code> | 
| Use_External_Stickers | <code>bigint</code> | <code></code> | 
| Send_Messages_In_Threads | <code>bigint</code> | <code></code> | 
| Use_Embedded_Activities | <code>bigint</code> | <code></code> | 
| Moderate_Members | <code>bigint</code> | <code></code> | 

