<a name="Intents"></a>

## Intents ⇐ <code>Bitfield</code>
Represents the intents that the bot wishes to subscribe to.

**Kind**: global class  
**Extends**: <code>Bitfield</code>  

* [Intents](#Intents) ⇐ <code>Bitfield</code>
    * [new Intents(...bit)](#new_Intents_new)
    * [.Default](#Intents.Default) : <code>bigint</code>
    * [.All](#Intents.All) ⇒
    * [.Flags](#Intents.Flags) : <code>enum</code>

<a name="new_Intents_new"></a>

### new Intents(...bit)
Constructs a new instance of the class.


| Param | Type | Description |
| --- | --- | --- |
| ...bit | <code>bigint</code> | The arguments to pass to the superclass constructor. |

<a name="Intents.Default"></a>

### Intents.Default : <code>bigint</code>
Sets the default value for the Intents enum to 0.

**Kind**: static property of [<code>Intents</code>](#Intents)  
**Read only**: true  
<a name="Intents.All"></a>

### Intents.All ⇒
Combines all the values of the Intents.Flags object using a bitwise OR operationand assigns the result to the Intents.All property.

**Kind**: static property of [<code>Intents</code>](#Intents)  
**Returns**: The calculated value of Intents.All.  

| Param | Type | Description |
| --- | --- | --- |
| All | <code>bigint</code> | All bit value. |

<a name="Intents.Flags"></a>

### Intents.Flags : <code>enum</code>
Represents the flags for different intents in Discord.

**Kind**: static enum of [<code>Intents</code>](#Intents)  
**Read only**: true  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| Guilds | <code>bigint</code> | <code></code> | 
| Guild_Members | <code>bigint</code> | <code></code> | 
| Guild_Moderation | <code>bigint</code> | <code></code> | 
| Guild_Emojis_And_Stickers | <code>bigint</code> | <code></code> | 
| Guild_Integrations | <code>bigint</code> | <code></code> | 
| Guild_Webhooks | <code>bigint</code> | <code></code> | 
| Guild_Invites | <code>bigint</code> | <code></code> | 
| Guild_Voice_States | <code>bigint</code> | <code></code> | 
| Guild_Presences | <code>bigint</code> | <code></code> | 
| Guild_Messages | <code>bigint</code> | <code></code> | 
| Guild_Message_Reactions | <code>bigint</code> | <code></code> | 
| Guild_Message_Typing | <code>bigint</code> | <code></code> | 
| Direct_Messages | <code>bigint</code> | <code></code> | 
| Direct_Message_Reactions | <code>bigint</code> | <code></code> | 
| Direct_Message_Typing | <code>bigint</code> | <code></code> | 
| Message_Content | <code>bigint</code> | <code></code> | 
| Guild_Scheduled_Events | <code>bigint</code> | <code></code> | 
| Auto_Moderation_Configuration | <code>bigint</code> | <code></code> | 
| Auto_Moderation_Execution | <code>bigint</code> | <code></code> | 

