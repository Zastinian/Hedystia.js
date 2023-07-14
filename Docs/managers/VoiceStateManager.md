<a name="VoiceStateManager"></a>

## VoiceStateManager ⇐ <code>Base</code>
Represents a Voice State Manager that handles voice state related operations.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [VoiceStateManager](#VoiceStateManager) ⇐ <code>Base</code>
    * [new VoiceStateManager(client)](#new_VoiceStateManager_new)
    * [.cache](#VoiceStateManager+cache) ⇒
    * [._add(voiceStates, [guildId], [options])](#VoiceStateManager+_add) ⇒ <code>VoiceState</code> \| <code>null</code>

<a name="new_VoiceStateManager_new"></a>

### new VoiceStateManager(client)
Constructs a new instance of the class.


| Param | Type | Description |
| --- | --- | --- |
| client | <code>Client</code> | The client object used for communication with the server. |

<a name="VoiceStateManager+cache"></a>

### voiceStateManager.cache ⇒
Getter method for the cache property.

**Kind**: instance property of [<code>VoiceStateManager</code>](#VoiceStateManager)  
**Returns**: The Collection object representing the cache.  
<a name="VoiceStateManager+_add"></a>

### voiceStateManager.\_add(voiceStates, [guildId], [options]) ⇒ <code>VoiceState</code> \| <code>null</code>
Adds a voice state to the cache and returns the voice state object.

**Kind**: instance method of [<code>VoiceStateManager</code>](#VoiceStateManager)  
**Returns**: <code>VoiceState</code> \| <code>null</code> - The voice state object.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| voiceStates | <code>string</code> \| <code>VoiceState</code> |  | The voice state object or user ID. |
| [guildId] | <code>string</code> | <code>&quot;this.guildId&quot;</code> | The ID of the guild the voice state belongs to. |
| [options] | <code>object</code> | <code>{cache: true, force: false}</code> | Additional options for the operation. |
| [options.cache] | <code>boolean</code> | <code>true</code> | Whether to cache the voice state. |
| [options.force] | <code>boolean</code> | <code>false</code> | Whether to force update the voice state even if it is already cached. |

