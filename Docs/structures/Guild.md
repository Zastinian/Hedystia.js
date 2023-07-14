<a name="Guild"></a>

## Guild ⇐ <code>Base</code>
Represents a guild in Discord.

**Kind**: global class  
**Extends**: <code>Base</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| partial | <code>boolean</code> | Whether the guild is partial or not. |
| id | <code>string</code> \| <code>null</code> | The ID of the guild. |
| name | <code>string</code> \| <code>null</code> | The name of the guild. |
| icon | <code>string</code> \| <code>null</code> | The icon of the guild. |
| iconHash | <code>string</code> \| <code>null</code> | The hash of the guild's icon. |
| splash | <code>string</code> \| <code>null</code> | The splash image of the guild. |
|  | <code>string</code> \| <code>null</code> |  |


* [Guild](#Guild) ⇐ <code>Base</code>
    * [new Guild([data], client)](#new_Guild_new)
    * [.me](#Guild+me) ⇒ <code>GuildMember</code>
    * [.afkChannel](#Guild+afkChannel) ⇒ <code>VoiceChannel</code>
    * [.widgetChannel](#Guild+widgetChannel) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
    * [.systemChannel](#Guild+systemChannel) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
    * [.rulesChannel](#Guild+rulesChannel) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
    * [.publicUpdatesChannel](#Guild+publicUpdatesChannel) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
    * [.welcomeScreen](#Guild+welcomeScreen) ⇒ <code>WelcomeScreenManager</code>
    * [.integrations](#Guild+integrations) ⇒ <code>GuildIntegrationManager</code>
    * [.vanity](#Guild+vanity) ⇒ <code>GuildVanityManager</code>
    * [.commands](#Guild+commands) ⇒ <code>GuildApplicationCommandManager</code>
    * [.fetch([options])](#Guild+fetch) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
    * [.edit([options])](#Guild+edit) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
    * [.delete()](#Guild+delete) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
    * [.setName(name, [reason])](#Guild+setName) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
    * [.setDescription(description, [reason])](#Guild+setDescription) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
    * [.setVerificationLevel(verificationLevel, [reason])](#Guild+setVerificationLevel) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
    * [.setDefaultMessageNotifications(defaultMessageNotifications, [reason])](#Guild+setDefaultMessageNotifications) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
    * [.setExplicitContentFilter(explicitContentFilter, [reason])](#Guild+setExplicitContentFilter) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
    * [.setAfkChannel(afkChannel, [reason])](#Guild+setAfkChannel) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
    * [.setAfkTimeout(afkTimeout, [reason])](#Guild+setAfkTimeout) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
    * [.setIcon(icon, [reason])](#Guild+setIcon) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
    * [.setOwner(owner, [reason])](#Guild+setOwner) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
    * [.setSplash(splash, [reason])](#Guild+setSplash) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
    * [.setDiscoverySplash(discoverySplash, [reason])](#Guild+setDiscoverySplash) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
    * [.setBanner(banner, [reason])](#Guild+setBanner) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
    * [.setSystemChannel(systemChannel, [reason])](#Guild+setSystemChannel) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
    * [.setPreferredLocale(preferredLocale, [reason])](#Guild+setPreferredLocale) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
    * [.setSystemChannelFlags(systemChannelFlags, [reason])](#Guild+setSystemChannelFlags) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
    * [.setFeatures(features, [reason])](#Guild+setFeatures) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
    * [.setPremiumProgressBar(premiumProgressBar, reason)](#Guild+setPremiumProgressBar) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
    * [.iconURL([options])](#Guild+iconURL) ⇒ <code>string</code>
    * [.bannerURL([options])](#Guild+bannerURL) ⇒ <code>string</code>
    * [.splashURL([options])](#Guild+splashURL) ⇒ <code>string</code>
    * [.discoverySplashURL([options])](#Guild+discoverySplashURL) ⇒ <code>string</code>
    * [.fetchOwner([options])](#Guild+fetchOwner) ⇒ <code>Promise.&lt;GuildMember&gt;</code>
    * [.fetchPreview()](#Guild+fetchPreview) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.fetchActiveThreads()](#Guild+fetchActiveThreads) ⇒ <code>Promise.&lt;FetchedThreads&gt;</code>
    * [.fetchAuditLogs([options])](#Guild+fetchAuditLogs) ⇒ <code>Promise.&lt;GuildAuditLog&gt;</code>
    * [.fetchMe([options])](#Guild+fetchMe) ⇒ <code>Promise.&lt;GuildMember&gt;</code>
    * [.fetchWebhooks()](#Guild+fetchWebhooks) ⇒ <code>Promise.&lt;RaidenCol.&lt;string, Webhook&gt;&gt;</code>
    * [.fetchFeed()](#Guild+fetchFeed) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.modifyMFALevel(mfaLevel, [reason])](#Guild+modifyMFALevel) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
    * [.getVoiceBasedChannels()](#Guild+getVoiceBasedChannels) ⇒ <code>Collection.&lt;Snowflake, GuildChannel&gt;</code>
    * [.getTextBasedChannels()](#Guild+getTextBasedChannels) ⇒ <code>Collection.&lt;Snowflake, GuildChannel&gt;</code>
    * [.getCategories()](#Guild+getCategories) ⇒ <code>Collection.&lt;Snowflake, GuildChannel&gt;</code>

<a name="new_Guild_new"></a>

### new Guild([data], client)
Constructs a new Guild object.


| Param | Type | Description |
| --- | --- | --- |
| [data] | <code>Object</code> | The data object containing guild information. |
| client | <code>Client</code> | The client object associated with the guild. |

<a name="Guild+me"></a>

### guild.me ⇒ <code>GuildMember</code>
Returns the GuildMember instance of the bot user in this guild.

**Kind**: instance property of [<code>Guild</code>](#Guild)  
**Returns**: <code>GuildMember</code> - The GuildMember instance of the bot user in this guild.  
<a name="Guild+afkChannel"></a>

### guild.afkChannel ⇒ <code>VoiceChannel</code>
Returns the voice channel where users are moved after being AFK for too long.

**Kind**: instance property of [<code>Guild</code>](#Guild)  
**Returns**: <code>VoiceChannel</code> - The voice channel where users are moved after being AFK for too long.  
<a name="Guild+widgetChannel"></a>

### guild.widgetChannel ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
Returns the widget channel of the guild.

**Kind**: instance property of [<code>Guild</code>](#Guild)  
**Returns**: [<code>Promise.&lt;Guild&gt;</code>](#Guild) - The widget channel of the guild.  
<a name="Guild+systemChannel"></a>

### guild.systemChannel ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
Returns the system channel of the guild.

**Kind**: instance property of [<code>Guild</code>](#Guild)  
**Returns**: [<code>Promise.&lt;Guild&gt;</code>](#Guild) - The system channel of the guild.  
<a name="Guild+rulesChannel"></a>

### guild.rulesChannel ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
Returns the rules channel of the guild.

**Kind**: instance property of [<code>Guild</code>](#Guild)  
**Returns**: [<code>Promise.&lt;Guild&gt;</code>](#Guild) - The rules channel of the guild.  
<a name="Guild+publicUpdatesChannel"></a>

### guild.publicUpdatesChannel ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
Returns the public updates channel of the guild.

**Kind**: instance property of [<code>Guild</code>](#Guild)  
**Returns**: [<code>Promise.&lt;Guild&gt;</code>](#Guild) - The public updates channel of the guild.  
<a name="Guild+welcomeScreen"></a>

### guild.welcomeScreen ⇒ <code>WelcomeScreenManager</code>
Returns the welcome screen manager for the guild.

**Kind**: instance property of [<code>Guild</code>](#Guild)  
**Returns**: <code>WelcomeScreenManager</code> - The welcome screen manager for the guild.  
<a name="Guild+integrations"></a>

### guild.integrations ⇒ <code>GuildIntegrationManager</code>
Returns the integration manager for the guild.

**Kind**: instance property of [<code>Guild</code>](#Guild)  
**Returns**: <code>GuildIntegrationManager</code> - The integration manager for the guild.  
<a name="Guild+vanity"></a>

### guild.vanity ⇒ <code>GuildVanityManager</code>
Returns the vanity manager for the guild.

**Kind**: instance property of [<code>Guild</code>](#Guild)  
**Returns**: <code>GuildVanityManager</code> - The vanity manager for the guild.  
<a name="Guild+commands"></a>

### guild.commands ⇒ <code>GuildApplicationCommandManager</code>
Returns the application command manager for the guild.

**Kind**: instance property of [<code>Guild</code>](#Guild)  
**Returns**: <code>GuildApplicationCommandManager</code> - The application command manager for the guild.  
<a name="Guild+fetch"></a>

### guild.fetch([options]) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
Fetches the guild.

**Kind**: instance method of [<code>Guild</code>](#Guild)  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | Options for fetching the guild. |

<a name="Guild+edit"></a>

### guild.edit([options]) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
Edits the guild.

**Kind**: instance method of [<code>Guild</code>](#Guild)  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | Options for editing the guild. |

<a name="Guild+delete"></a>

### guild.delete() ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
Deletes the guild.

**Kind**: instance method of [<code>Guild</code>](#Guild)  
<a name="Guild+setName"></a>

### guild.setName(name, [reason]) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
Sets the name of the guild.

**Kind**: instance method of [<code>Guild</code>](#Guild)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The new name for the guild. |
| [reason] | <code>string</code> | Reason for changing the name. |

<a name="Guild+setDescription"></a>

### guild.setDescription(description, [reason]) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
Sets the description of the guild.

**Kind**: instance method of [<code>Guild</code>](#Guild)  

| Param | Type | Description |
| --- | --- | --- |
| description | <code>string</code> | The new description for the guild. |
| [reason] | <code>string</code> | Reason for changing the description. |

<a name="Guild+setVerificationLevel"></a>

### guild.setVerificationLevel(verificationLevel, [reason]) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
Sets the verification level of the guild.

**Kind**: instance method of [<code>Guild</code>](#Guild)  

| Param | Type | Description |
| --- | --- | --- |
| verificationLevel | <code>number</code> | The new verification level for the guild. |
| [reason] | <code>string</code> | Reason for changing the verification level. |

<a name="Guild+setDefaultMessageNotifications"></a>

### guild.setDefaultMessageNotifications(defaultMessageNotifications, [reason]) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
Sets the default message notifications of the guild.

**Kind**: instance method of [<code>Guild</code>](#Guild)  

| Param | Type | Description |
| --- | --- | --- |
| defaultMessageNotifications | <code>number</code> | The new default message notifications for the guild. |
| [reason] | <code>string</code> | Reason for changing the default message notifications. |

<a name="Guild+setExplicitContentFilter"></a>

### guild.setExplicitContentFilter(explicitContentFilter, [reason]) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
Sets the explicit content filter level of the guild.

**Kind**: instance method of [<code>Guild</code>](#Guild)  

| Param | Type | Description |
| --- | --- | --- |
| explicitContentFilter | <code>number</code> | The new explicit content filter level for the guild. |
| [reason] | <code>string</code> | Reason for changing the explicit content filter level. |

<a name="Guild+setAfkChannel"></a>

### guild.setAfkChannel(afkChannel, [reason]) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
Sets the AFK channel of the guild.

**Kind**: instance method of [<code>Guild</code>](#Guild)  

| Param | Type | Description |
| --- | --- | --- |
| afkChannel | <code>Channel</code> | The new AFK channel for the guild. |
| [reason] | <code>string</code> | Reason for changing the AFK channel. |

<a name="Guild+setAfkTimeout"></a>

### guild.setAfkTimeout(afkTimeout, [reason]) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
Sets the AFK timeout of the guild.

**Kind**: instance method of [<code>Guild</code>](#Guild)  

| Param | Type | Description |
| --- | --- | --- |
| afkTimeout | <code>number</code> | The new AFK timeout for the guild. |
| [reason] | <code>string</code> | Reason for changing the AFK timeout. |

<a name="Guild+setIcon"></a>

### guild.setIcon(icon, [reason]) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
Sets the icon of the guild.

**Kind**: instance method of [<code>Guild</code>](#Guild)  

| Param | Type | Description |
| --- | --- | --- |
| icon | <code>string</code> | The new icon for the guild. |
| [reason] | <code>string</code> | Reason for changing the icon. |

<a name="Guild+setOwner"></a>

### guild.setOwner(owner, [reason]) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
Set the owner of the guild.

**Kind**: instance method of [<code>Guild</code>](#Guild)  
**Returns**: [<code>Promise.&lt;Guild&gt;</code>](#Guild) - The updated guild.  

| Param | Type | Description |
| --- | --- | --- |
| owner | <code>GuildMemberResolvable</code> | The new owner of the guild. |
| [reason] | <code>string</code> | The reason for setting the owner. |

<a name="Guild+setSplash"></a>

### guild.setSplash(splash, [reason]) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
Set the splash image for the guild.

**Kind**: instance method of [<code>Guild</code>](#Guild)  
**Returns**: [<code>Promise.&lt;Guild&gt;</code>](#Guild) - The updated guild.  

| Param | Type | Description |
| --- | --- | --- |
| splash | <code>BufferResolvable</code> \| <code>Base64Resolvable</code> \| <code>null</code> | The new splash image for the guild. Can be a Buffer or a base64-encoded string or null to remove the current splash image. |
| [reason] | <code>string</code> | The reason for setting the splash. |

<a name="Guild+setDiscoverySplash"></a>

### guild.setDiscoverySplash(discoverySplash, [reason]) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
Set the discovery splash image for the guild.

**Kind**: instance method of [<code>Guild</code>](#Guild)  
**Returns**: [<code>Promise.&lt;Guild&gt;</code>](#Guild) - The updated guild.  

| Param | Type | Description |
| --- | --- | --- |
| discoverySplash | <code>BufferResolvable</code> \| <code>Base64Resolvable</code> \| <code>null</code> | The new discovery splash image for the guild. Can be a Buffer or a base64-encoded string or null to remove the current discovery splash image. |
| [reason] | <code>string</code> | The reason for setting the discovery splash. |

<a name="Guild+setBanner"></a>

### guild.setBanner(banner, [reason]) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
Set the banner image for the guild.

**Kind**: instance method of [<code>Guild</code>](#Guild)  
**Returns**: [<code>Promise.&lt;Guild&gt;</code>](#Guild) - The updated guild.  

| Param | Type | Description |
| --- | --- | --- |
| banner | <code>BufferResolvable</code> \| <code>Base64Resolvable</code> \| <code>null</code> | The new banner image for the guild. Can be a Buffer or a base64-encoded string or null to remove the current banner image. |
| [reason] | <code>string</code> | The reason for setting the banner. |

<a name="Guild+setSystemChannel"></a>

### guild.setSystemChannel(systemChannel, [reason]) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
Set the system channel for the guild.

**Kind**: instance method of [<code>Guild</code>](#Guild)  
**Returns**: [<code>Promise.&lt;Guild&gt;</code>](#Guild) - The updated guild.  

| Param | Type | Description |
| --- | --- | --- |
| systemChannel | <code>GuildChannelResolvable</code> | The new system channel for the guild. |
| [reason] | <code>string</code> | The reason for setting the system channel. |

<a name="Guild+setPreferredLocale"></a>

### guild.setPreferredLocale(preferredLocale, [reason]) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
Set the preferred locale for the guild.

**Kind**: instance method of [<code>Guild</code>](#Guild)  
**Returns**: [<code>Promise.&lt;Guild&gt;</code>](#Guild) - The updated guild.  

| Param | Type | Description |
| --- | --- | --- |
| preferredLocale | <code>string</code> | The new preferred locale for the guild. |
| [reason] | <code>string</code> | The reason for setting the preferred locale. |

<a name="Guild+setSystemChannelFlags"></a>

### guild.setSystemChannelFlags(systemChannelFlags, [reason]) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
Set the system channel flags for the guild.

**Kind**: instance method of [<code>Guild</code>](#Guild)  
**Returns**: [<code>Promise.&lt;Guild&gt;</code>](#Guild) - The updated guild.  

| Param | Type | Description |
| --- | --- | --- |
| systemChannelFlags | <code>number</code> | The new system channel flags for the guild. |
| [reason] | <code>string</code> | The reason for setting the system channel flags. |

<a name="Guild+setFeatures"></a>

### guild.setFeatures(features, [reason]) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
Set the features of the guild.

**Kind**: instance method of [<code>Guild</code>](#Guild)  
**Returns**: [<code>Promise.&lt;Guild&gt;</code>](#Guild) - The updated guild.  

| Param | Type | Description |
| --- | --- | --- |
| features | <code>Array.&lt;GuildFeature&gt;</code> | The new features of the guild. |
| [reason] | <code>string</code> | The reason for setting the features. |

<a name="Guild+setPremiumProgressBar"></a>

### guild.setPremiumProgressBar(premiumProgressBar, reason) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
Sets the premium progress bar of the guild.

**Kind**: instance method of [<code>Guild</code>](#Guild)  
**Returns**: [<code>Promise.&lt;Guild&gt;</code>](#Guild) - The updated guild.  

| Param | Type | Description |
| --- | --- | --- |
| premiumProgressBar | <code>string</code> | The new premium progress bar. |
| reason | <code>string</code> | The reason for setting the premium progress bar. |

<a name="Guild+iconURL"></a>

### guild.iconURL([options]) ⇒ <code>string</code>
Returns the URL of the guild's icon.

**Kind**: instance method of [<code>Guild</code>](#Guild)  
**Returns**: <code>string</code> - The URL of the guild's icon, or `null` if the guild has no icon.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | Additional options for the URL. |
| [options.dynamic] | <code>boolean</code> | <code>false</code> | Whether to return a dynamic icon. |
| [options.size] | <code>number</code> |  | The size of the icon to return. |
| [options.format] | <code>string</code> |  | The format of the icon to return. |

<a name="Guild+bannerURL"></a>

### guild.bannerURL([options]) ⇒ <code>string</code>
Returns the URL of the guild's banner.

**Kind**: instance method of [<code>Guild</code>](#Guild)  
**Returns**: <code>string</code> - The URL of the guild's banner, or `null` if the guild has no banner.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | Additional options for the URL. |
| [options.dynamic] | <code>boolean</code> | <code>false</code> | Whether to return a dynamic banner. |
| [options.size] | <code>number</code> |  | The size of the banner to return. |
| [options.format] | <code>string</code> |  | The format of the banner to return. |

<a name="Guild+splashURL"></a>

### guild.splashURL([options]) ⇒ <code>string</code>
Returns the URL of the guild's splash.

**Kind**: instance method of [<code>Guild</code>](#Guild)  
**Returns**: <code>string</code> - The URL of the guild's splash, or `null` if the guild has no splash.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | Additional options for the URL. |
| [options.dynamic] | <code>boolean</code> | <code>false</code> | Whether to return a dynamic splash. |
| [options.size] | <code>number</code> |  | The size of the splash to return. |
| [options.format] | <code>string</code> |  | The format of the splash to return. |

<a name="Guild+discoverySplashURL"></a>

### guild.discoverySplashURL([options]) ⇒ <code>string</code>
Returns the URL of the guild's discovery splash.

**Kind**: instance method of [<code>Guild</code>](#Guild)  
**Returns**: <code>string</code> - The URL of the guild's discovery splash, or `null` if the guild has no discovery splash.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | Additional options for the URL. |
| [options.dynamic] | <code>boolean</code> | <code>false</code> | Whether to return a dynamic discovery splash. |
| [options.size] | <code>number</code> |  | The size of the discovery splash to return. |
| [options.format] | <code>string</code> |  | The format of the discovery splash to return. |

<a name="Guild+fetchOwner"></a>

### guild.fetchOwner([options]) ⇒ <code>Promise.&lt;GuildMember&gt;</code>
Fetches the owner of the guild.

**Kind**: instance method of [<code>Guild</code>](#Guild)  
**Returns**: <code>Promise.&lt;GuildMember&gt;</code> - A promise that resolves with the GuildMember instance of the guild owner.  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>BaseFetchOptions</code> | The options to fetch the owner with. |

<a name="Guild+fetchPreview"></a>

### guild.fetchPreview() ⇒ <code>Promise.&lt;Object&gt;</code>
Fetches a preview of the guild.

**Kind**: instance method of [<code>Guild</code>](#Guild)  
**Returns**: <code>Promise.&lt;Object&gt;</code> - A promise that resolves with the preview of the guild.  
<a name="Guild+fetchActiveThreads"></a>

### guild.fetchActiveThreads() ⇒ <code>Promise.&lt;FetchedThreads&gt;</code>
Fetches the active threads in the guild.

**Kind**: instance method of [<code>Guild</code>](#Guild)  
**Returns**: <code>Promise.&lt;FetchedThreads&gt;</code> - A promise that resolves with the active threads in the guild.  
<a name="Guild+fetchAuditLogs"></a>

### guild.fetchAuditLogs([options]) ⇒ <code>Promise.&lt;GuildAuditLog&gt;</code>
Fetches the audit logs for the guild.

**Kind**: instance method of [<code>Guild</code>](#Guild)  
**Returns**: <code>Promise.&lt;GuildAuditLog&gt;</code> - A promise that resolves with the fetched audit logs.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | The options for fetching audit logs. |
| [options.user] | <code>UserResolvable</code> |  | The user to filter the audit log by. |
| [options.actionType] | <code>string</code> |  | The type of action to filter the audit log by. |
| [options.before] | <code>Snowflake</code> \| <code>GuildAuditLogEntry</code> |  | The entry to get audit logs before. |
| [options.limit] | <code>number</code> | <code>50</code> | The maximum number of audit logs to fetch. |

<a name="Guild+fetchMe"></a>

### guild.fetchMe([options]) ⇒ <code>Promise.&lt;GuildMember&gt;</code>
Fetches the bot's own member object for the guild.

**Kind**: instance method of [<code>Guild</code>](#Guild)  
**Returns**: <code>Promise.&lt;GuildMember&gt;</code> - A promise that resolves with the bot's own member object for the guild.  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | The options for fetching the member object. |

<a name="Guild+fetchWebhooks"></a>

### guild.fetchWebhooks() ⇒ <code>Promise.&lt;RaidenCol.&lt;string, Webhook&gt;&gt;</code>
Fetches the webhooks for the guild.

**Kind**: instance method of [<code>Guild</code>](#Guild)  
**Returns**: <code>Promise.&lt;RaidenCol.&lt;string, Webhook&gt;&gt;</code> - A promise that resolves with the fetched webhooks for the guild.  
<a name="Guild+fetchFeed"></a>

### guild.fetchFeed() ⇒ <code>Promise.&lt;Object&gt;</code>
Fetches the guild feed for the guild.

**Kind**: instance method of [<code>Guild</code>](#Guild)  
**Returns**: <code>Promise.&lt;Object&gt;</code> - A promise that resolves with the fetched guild feed.  
<a name="Guild+modifyMFALevel"></a>

### guild.modifyMFALevel(mfaLevel, [reason]) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
Modifies the MFA (multi-factor authentication) level of the guild.

**Kind**: instance method of [<code>Guild</code>](#Guild)  
**Returns**: [<code>Promise.&lt;Guild&gt;</code>](#Guild) - A promise that resolves with the guild object with the modified MFA level.  

| Param | Type | Description |
| --- | --- | --- |
| mfaLevel | <code>number</code> | The new MFA level for the guild. |
| [reason] | <code>string</code> | The reason for modifying the MFA level. |

<a name="Guild+getVoiceBasedChannels"></a>

### guild.getVoiceBasedChannels() ⇒ <code>Collection.&lt;Snowflake, GuildChannel&gt;</code>
Gets all the voice-based channels in the guild.

**Kind**: instance method of [<code>Guild</code>](#Guild)  
**Returns**: <code>Collection.&lt;Snowflake, GuildChannel&gt;</code> - A collection of all the voice-based channels in the guild.  
<a name="Guild+getTextBasedChannels"></a>

### guild.getTextBasedChannels() ⇒ <code>Collection.&lt;Snowflake, GuildChannel&gt;</code>
Gets all the text-based channels in the guild.

**Kind**: instance method of [<code>Guild</code>](#Guild)  
**Returns**: <code>Collection.&lt;Snowflake, GuildChannel&gt;</code> - A collection of all the text-based channels in the guild.  
<a name="Guild+getCategories"></a>

### guild.getCategories() ⇒ <code>Collection.&lt;Snowflake, GuildChannel&gt;</code>
Gets all the categories in the guild.

**Kind**: instance method of [<code>Guild</code>](#Guild)  
**Returns**: <code>Collection.&lt;Snowflake, GuildChannel&gt;</code> - A collection of all the categories in the guild.  
