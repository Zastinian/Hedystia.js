<a name="VoiceStateManager"></a>

## VoiceStateManager
**Kind**: global class  

* [VoiceStateManager](#VoiceStateManager)
    * [new VoiceStateManager(client)](#new_VoiceStateManager_new)
    * [.cache](#VoiceStateManager+cache) ⇒
    * [._add(voiceStates, [guildId], [options])](#VoiceStateManager+_add) ⇒

<a name="new_VoiceStateManager_new"></a>

### new VoiceStateManager(client)
It's a constructor function that takes a client parameter and passes it to the super function


| Param | Description |
| --- | --- |
| client | The client object. |

<a name="VoiceStateManager+cache"></a>

### voiceStateManager.cache ⇒
It returns the Collection object.

**Kind**: instance property of [<code>VoiceStateManager</code>](#VoiceStateManager)  
**Returns**: The Collection class  
<a name="VoiceStateManager+_add"></a>

### voiceStateManager.\_add(voiceStates, [guildId], [options]) ⇒
It adds a new voice state to the cache.

**Kind**: instance method of [<code>VoiceStateManager</code>](#VoiceStateManager)  
**Returns**: A new VoiceState object  

| Param | Description |
| --- | --- |
| voiceStates | The voice state object to add to the cache. |
| [guildId] | The guild ID to use for the voice state. |
| [options] | An object with the following properties: |

