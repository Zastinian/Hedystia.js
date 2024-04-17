---
title: GuildDiscovery
sidebar:
  order: 31
---



## GuildDiscovery ⇐ <code>Base</code>
Represents a guild's discovery metadata.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [GuildDiscovery](#GuildDiscovery) ⇐ <code>Base</code>
    * [new GuildDiscovery(data, guildId, client)](#new_GuildDiscovery_new)
    * [.partial](#GuildDiscovery+partial) : <code>boolean</code>
    * [.about](#GuildDiscovery+about) : <code>string</code>
    * [.guildId](#GuildDiscovery+guildId) : <code>Snowflake</code>
    * [.categoryIds](#GuildDiscovery+categoryIds) : <code>Array.&lt;string&gt;</code>
    * [.emojiDiscoverabilityEnabled](#GuildDiscovery+emojiDiscoverabilityEnabled) : <code>boolean</code>
    * [.published](#GuildDiscovery+published) : <code>boolean</code>
    * [.keywords](#GuildDiscovery+keywords) : <code>Array.&lt;string&gt;</code>
    * [.partnerActionedAt](#GuildDiscovery+partnerActionedAt) : <code>Date</code>
    * [.partnerActionedTimestamp](#GuildDiscovery+partnerActionedTimestamp) : <code>number</code>
    * [.partnerApplicationAt](#GuildDiscovery+partnerApplicationAt) : <code>Date</code>
    * [.partnerApplicationTimestamp](#GuildDiscovery+partnerApplicationTimestamp) : <code>number</code>
    * [.primaryCategoryId](#GuildDiscovery+primaryCategoryId) : <code>GuildPrimaryCategory</code>
    * [.reasonsToJoin](#GuildDiscovery+reasonsToJoin) : <code>Array.&lt;string&gt;</code>
    * [.socialLinks](#GuildDiscovery+socialLinks) : <code>Object</code>
    * [.guild](#GuildDiscovery+guild) ⇒ <code>Guild</code>
    * [.fetch()](#GuildDiscovery+fetch) ⇒ <code>Promise.&lt;DiscoveryMetadata&gt;</code>
    * [.edit()](#GuildDiscovery+edit) ⇒ <code>Promise.&lt;DiscoveryMetadata&gt;</code>
    * [.setEmojiDiscoverabilityEnabled(emojiDiscoverabilityEnabled)](#GuildDiscovery+setEmojiDiscoverabilityEnabled) ⇒ <code>Promise.&lt;DiscoveryMetadata&gt;</code>
    * [.setPublished(emojiDiscoverabilityEnabled)](#GuildDiscovery+setPublished) ⇒ <code>Promise.&lt;DiscoveryMetadata&gt;</code>
    * [.setAbout(about)](#GuildDiscovery+setAbout) ⇒ <code>Promise.&lt;DiscoveryMetadata&gt;</code>
    * [.setReasonsToJoin(reasonsToJoin)](#GuildDiscovery+setReasonsToJoin) ⇒ <code>Promise.&lt;Discovery&gt;</code>
    * [.setKeywords(keywords)](#GuildDiscovery+setKeywords) ⇒ <code>Promise.&lt;Discovery&gt;</code>
    * [.setPrimaryCategoryId(keywords)](#GuildDiscovery+setPrimaryCategoryId) ⇒ <code>Promise.&lt;Discovery&gt;</code>

<a name="new_GuildDiscovery_new"></a>

### new GuildDiscovery(data, guildId, client)

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | The data for the guild discovery metadata |
| guildId | <code>Snowflake</code> | The ID of the guild this discovery metadata belongs to |
| client | <code>Client</code> | The instantiating client |

<a name="GuildDiscovery+partial"></a>

### guildDiscovery.partial : <code>boolean</code>
Whether or not this guild discovery object is partial.

**Kind**: instance property of [<code>GuildDiscovery</code>](#GuildDiscovery)  
<a name="GuildDiscovery+about"></a>

### guildDiscovery.about : <code>string</code>
The about section of the guild discovery.

**Kind**: instance property of [<code>GuildDiscovery</code>](#GuildDiscovery)  
<a name="GuildDiscovery+guildId"></a>

### guildDiscovery.guildId : <code>Snowflake</code>
The ID of the guild.

**Kind**: instance property of [<code>GuildDiscovery</code>](#GuildDiscovery)  
<a name="GuildDiscovery+categoryIds"></a>

### guildDiscovery.categoryIds : <code>Array.&lt;string&gt;</code>
The category IDs of the guild discovery.

**Kind**: instance property of [<code>GuildDiscovery</code>](#GuildDiscovery)  
<a name="GuildDiscovery+emojiDiscoverabilityEnabled"></a>

### guildDiscovery.emojiDiscoverabilityEnabled : <code>boolean</code>
Whether or not emoji discoverability is enabled.

**Kind**: instance property of [<code>GuildDiscovery</code>](#GuildDiscovery)  
<a name="GuildDiscovery+published"></a>

### guildDiscovery.published : <code>boolean</code>
Whether or not the guild discovery is published.

**Kind**: instance property of [<code>GuildDiscovery</code>](#GuildDiscovery)  
<a name="GuildDiscovery+keywords"></a>

### guildDiscovery.keywords : <code>Array.&lt;string&gt;</code>
The keywords associated with the guild discovery.

**Kind**: instance property of [<code>GuildDiscovery</code>](#GuildDiscovery)  
<a name="GuildDiscovery+partnerActionedAt"></a>

### guildDiscovery.partnerActionedAt : <code>Date</code>
The date the guild was partner actioned.

**Kind**: instance property of [<code>GuildDiscovery</code>](#GuildDiscovery)  
<a name="GuildDiscovery+partnerActionedTimestamp"></a>

### guildDiscovery.partnerActionedTimestamp : <code>number</code>
The timestamp of when the guild was partner actioned.

**Kind**: instance property of [<code>GuildDiscovery</code>](#GuildDiscovery)  
<a name="GuildDiscovery+partnerApplicationAt"></a>

### guildDiscovery.partnerApplicationAt : <code>Date</code>
The date the guild applied for partnership.

**Kind**: instance property of [<code>GuildDiscovery</code>](#GuildDiscovery)  
<a name="GuildDiscovery+partnerApplicationTimestamp"></a>

### guildDiscovery.partnerApplicationTimestamp : <code>number</code>
The timestamp of when the guild applied for partnership.

**Kind**: instance property of [<code>GuildDiscovery</code>](#GuildDiscovery)  
<a name="GuildDiscovery+primaryCategoryId"></a>

### guildDiscovery.primaryCategoryId : <code>GuildPrimaryCategory</code>
The primary category ID of the guild discovery.

**Kind**: instance property of [<code>GuildDiscovery</code>](#GuildDiscovery)  
<a name="GuildDiscovery+reasonsToJoin"></a>

### guildDiscovery.reasonsToJoin : <code>Array.&lt;string&gt;</code>
The reasons to join the guild.

**Kind**: instance property of [<code>GuildDiscovery</code>](#GuildDiscovery)  
<a name="GuildDiscovery+socialLinks"></a>

### guildDiscovery.socialLinks : <code>Object</code>
The social links associated with the guild discovery.

**Kind**: instance property of [<code>GuildDiscovery</code>](#GuildDiscovery)  
<a name="GuildDiscovery+guild"></a>

### guildDiscovery.guild ⇒ <code>Guild</code>
Returns the guild associated with this discovery metadata.

**Kind**: instance property of [<code>GuildDiscovery</code>](#GuildDiscovery)  
**Returns**: <code>Guild</code> - The guild object.  
<a name="GuildDiscovery+fetch"></a>

### guildDiscovery.fetch() ⇒ <code>Promise.&lt;DiscoveryMetadata&gt;</code>
Fetches the discovery metadata for the guild.

**Kind**: instance method of [<code>GuildDiscovery</code>](#GuildDiscovery)  
**Returns**: <code>Promise.&lt;DiscoveryMetadata&gt;</code> - A promise that resolves with the discovery metadata object.  
<a name="GuildDiscovery+edit"></a>

### guildDiscovery.edit() ⇒ <code>Promise.&lt;DiscoveryMetadata&gt;</code>
Fetches the discovery metadata for the guild.

**Kind**: instance method of [<code>GuildDiscovery</code>](#GuildDiscovery)  
**Returns**: <code>Promise.&lt;DiscoveryMetadata&gt;</code> - A promise that resolves with the discovery metadata object.  
<a name="GuildDiscovery+setEmojiDiscoverabilityEnabled"></a>

### guildDiscovery.setEmojiDiscoverabilityEnabled(emojiDiscoverabilityEnabled) ⇒ <code>Promise.&lt;DiscoveryMetadata&gt;</code>
Sets whether the emoji discoverability is enabled for the guild.

**Kind**: instance method of [<code>GuildDiscovery</code>](#GuildDiscovery)  
**Returns**: <code>Promise.&lt;DiscoveryMetadata&gt;</code> - A promise that resolves with the updated discovery metadata object.  

| Param | Type | Description |
| --- | --- | --- |
| emojiDiscoverabilityEnabled | <code>boolean</code> | A boolean indicating whether the emoji discoverability is enabled. |

<a name="GuildDiscovery+setPublished"></a>

### guildDiscovery.setPublished(emojiDiscoverabilityEnabled) ⇒ <code>Promise.&lt;DiscoveryMetadata&gt;</code>
Sets whether the emoji discoverability is enabled for the guild.

**Kind**: instance method of [<code>GuildDiscovery</code>](#GuildDiscovery)  
**Returns**: <code>Promise.&lt;DiscoveryMetadata&gt;</code> - A promise that resolves with the updated discovery metadata object.  

| Param | Type | Description |
| --- | --- | --- |
| emojiDiscoverabilityEnabled | <code>boolean</code> | A boolean indicating whether the emoji discoverability is enabled. |

<a name="GuildDiscovery+setAbout"></a>

### guildDiscovery.setAbout(about) ⇒ <code>Promise.&lt;DiscoveryMetadata&gt;</code>
Sets the description of the guild for the discovery page.

**Kind**: instance method of [<code>GuildDiscovery</code>](#GuildDiscovery)  
**Returns**: <code>Promise.&lt;DiscoveryMetadata&gt;</code> - A promise that resolves with the updated discovery metadata object.  

| Param | Type | Description |
| --- | --- | --- |
| about | <code>string</code> | The description of the guild. |

<a name="GuildDiscovery+setReasonsToJoin"></a>

### guildDiscovery.setReasonsToJoin(reasonsToJoin) ⇒ <code>Promise.&lt;Discovery&gt;</code>
Sets the "Reasons to Join" section for the associated guild in the discovery settings.

**Kind**: instance method of [<code>GuildDiscovery</code>](#GuildDiscovery)  
**Returns**: <code>Promise.&lt;Discovery&gt;</code> - The updated discovery object.  

| Param | Type | Description |
| --- | --- | --- |
| reasonsToJoin | <code>string</code> | The new "Reasons to Join" section content. |

<a name="GuildDiscovery+setKeywords"></a>

### guildDiscovery.setKeywords(keywords) ⇒ <code>Promise.&lt;Discovery&gt;</code>
Sets the keywords associated with the associated guild in the discovery settings.

**Kind**: instance method of [<code>GuildDiscovery</code>](#GuildDiscovery)  
**Returns**: <code>Promise.&lt;Discovery&gt;</code> - The updated discovery object.  

| Param | Type | Description |
| --- | --- | --- |
| keywords | <code>Array.&lt;string&gt;</code> | The new keywords. |

<a name="GuildDiscovery+setPrimaryCategoryId"></a>

### guildDiscovery.setPrimaryCategoryId(keywords) ⇒ <code>Promise.&lt;Discovery&gt;</code>
Sets the keywords associated with the associated guild in the discovery settings.

**Kind**: instance method of [<code>GuildDiscovery</code>](#GuildDiscovery)  
**Returns**: <code>Promise.&lt;Discovery&gt;</code> - The updated discovery object.  

| Param | Type | Description |
| --- | --- | --- |
| keywords | <code>Array.&lt;string&gt;</code> | The new keywords. |

