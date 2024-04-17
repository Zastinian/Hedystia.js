---
title: Client
sidebar:
  order: 2
---

## Client ⇐ <code>EventEmitter</code>

Represents a Discord client.

**Kind**: global class  
**Extends**: <code>EventEmitter</code>

- [Client](#Client) ⇐ <code>EventEmitter</code>
  - [new Client([options])](#new_Client_new)
  - _instance_
    - [.api](#Client+api) ⇒ <code>REST</code>
    - [.cdn](#Client+cdn) ⇒
    - [.fetchInvite(invite, query)](#Client+fetchInvite) ⇒ <code>Promise.&lt;Invite&gt;</code>
    - [.fetchPreview(guild)](#Client+fetchPreview) ⇒ <code>Promise.&lt;GuildPreview&gt;</code>
    - [.fetchGuildWidget(guild)](#Client+fetchGuildWidget) ⇒ <code>Promise.&lt;GuildWidget&gt;</code>
    - [.fetchVoiceRegions()](#Client+fetchVoiceRegions) ⇒ <code>Promise.&lt;RaidenCol.&lt;VoiceRegion&gt;&gt;</code>
    - [.generateTemplate(code, [options])](#Client+generateTemplate) ⇒ <code>Promise.&lt;Guild&gt;</code>
    - [.generateInvite([options])](#Client+generateInvite) ⇒ <code>string</code> \| <code>undefined</code>
    - [.debug(message)](#Client+debug) ⇒
    - [.fetchSticker(sticker)](#Client+fetchSticker) ⇒ <code>Promise.&lt;Sticker&gt;</code>
    - [.fetchNitroPacks()](#Client+fetchNitroPacks) ⇒ <code>Promise.&lt;RaidenCol&gt;</code>
    - [.fetchGuildTemplate(code)](#Client+fetchGuildTemplate) ⇒ <code>Promise.&lt;GuildTemplate&gt;</code>
  - _static_
    - [.generateTemplateGuild(o)](#Client.generateTemplateGuild) ⇒ <code>Object</code>
    - [.transformInviteOptions(o)](#Client.transformInviteOptions) ⇒ <code>Object</code>
    - [.transformPresence([presence])](#Client.transformPresence) ⇒ <code>Object</code>
    - [.transformActivities(activities)](#Client.transformActivities) ⇒ <code>Object</code>

<a name="new_Client_new"></a>

### new Client([options])

| Param                        | Type                              | Default                           | Description                                           |
| ---------------------------- | --------------------------------- | --------------------------------- | ----------------------------------------------------- |
| [options]                    | <code>Object</code>               |                                   | The options to set for the client.                    |
| [options.intents]            | <code>Array.&lt;String&gt;</code> | <code>Intents.Flags.Guilds</code> | The intents to use for the client.                    |
| options.token                | <code>String</code>               |                                   | The bot token to use for authorization.               |
| [options.presence]           | <code>Object</code>               |                                   | The presence options for the client.                  |
| [options.maxShards]          | <code>Number</code>               | <code>1</code>                    | The maximum number of shards for the client.          |
| [options.shardId]            | <code>Number</code>               | <code>0</code>                    | The shard ID for the client.                          |
| [options.version]            | <code>String</code>               | <code>&quot;10&quot;</code>       | The API version to use for the client.                |
| [options.encoding]           | <code>String</code>               | <code>&quot;json&quot;</code>     | The encoding to use for the client.                   |
| [options.timeout]            | <code>Number</code>               | <code>15000</code>                | The timeout for REST requests.                        |
| [options.restRequestTimeout] | <code>Number</code>               | <code>15000</code>                | The timeout for REST requests in milliseconds.        |
| [options.restReadyTimeout]   | <code>Number</code>               | <code>2000</code>                 | The timeout for the REST ready event in milliseconds. |
| [options.partials]           | <code>Array.&lt;String&gt;</code> | <code>[]</code>                   | The partials to use for the client.                   |

<a name="Client+api"></a>

### client.api ⇒ <code>REST</code>

Getter method that returns a new instance of the REST class with the token set.

**Kind**: instance property of [<code>Client</code>](#Client)  
**Returns**: <code>REST</code> - - A new instance of the REST class with the token set.  
<a name="Client+cdn"></a>

### client.cdn ⇒

The function returns the value of the CDN variable.

**Kind**: instance property of [<code>Client</code>](#Client)  
**Returns**: The CDN property.  
<a name="Client+fetchInvite"></a>

### client.fetchInvite(invite, query) ⇒ <code>Promise.&lt;Invite&gt;</code>

Fetches an invitation using the provided invite code and query parameters.

**Kind**: instance method of [<code>Client</code>](#Client)  
**Returns**: <code>Promise.&lt;Invite&gt;</code> - A promise that resolves to an Invite object representing the fetched invitation.  
**Throws**:

- <code>RangeError</code> If no invitation code is specified.

| Param  | Type                                       | Description                                                  |
| ------ | ------------------------------------------ | ------------------------------------------------------------ |
| invite | <code>string</code> \| <code>object</code> | The invitation code or an object containing the invite code. |
| query  | <code>object</code>                        | The query parameters to include in the request.              |

<a name="Client+fetchPreview"></a>

### client.fetchPreview(guild) ⇒ <code>Promise.&lt;GuildPreview&gt;</code>

Fetches the preview information for a guild.

**Kind**: instance method of [<code>Client</code>](#Client)  
**Returns**: <code>Promise.&lt;GuildPreview&gt;</code> - - A promise that resolves to a GuildPreview object containing the preview information.

| Param | Type                                      | Description                                                  |
| ----- | ----------------------------------------- | ------------------------------------------------------------ |
| guild | <code>string</code> \| <code>Guild</code> | The guild ID or guild object for which to fetch the preview. |

<a name="Client+fetchGuildWidget"></a>

### client.fetchGuildWidget(guild) ⇒ <code>Promise.&lt;GuildWidget&gt;</code>

Fetches the guild widget for the specified guild.

**Kind**: instance method of [<code>Client</code>](#Client)  
**Returns**: <code>Promise.&lt;GuildWidget&gt;</code> - - A promise that resolves to a GuildWidget object representing the guild widget.

| Param | Type                                      | Description                                                 |
| ----- | ----------------------------------------- | ----------------------------------------------------------- |
| guild | <code>string</code> \| <code>Guild</code> | The guild ID or guild object for which to fetch the widget. |

<a name="Client+fetchVoiceRegions"></a>

### client.fetchVoiceRegions() ⇒ <code>Promise.&lt;RaidenCol.&lt;VoiceRegion&gt;&gt;</code>

Fetches the voice regions from the API.

**Kind**: instance method of [<code>Client</code>](#Client)  
**Returns**: <code>Promise.&lt;RaidenCol.&lt;VoiceRegion&gt;&gt;</code> - - A promise that resolves to a collection of VoiceRegion objects.  
<a name="Client+generateTemplate"></a>

### client.generateTemplate(code, [options]) ⇒ <code>Promise.&lt;Guild&gt;</code>

Generates a template using the provided code and options.

**Kind**: instance method of [<code>Client</code>](#Client)  
**Returns**: <code>Promise.&lt;Guild&gt;</code> - A promise that resolves with the created guild.  
**Throws**:

- <code>RangeError</code> If the server template code is not provided.

| Param     | Type                                       | Description                                     |
| --------- | ------------------------------------------ | ----------------------------------------------- |
| code      | <code>string</code> \| <code>object</code> | The code or URL of the server template.         |
| [options] | <code>object</code>                        | Additional options for generating the template. |

<a name="Client+generateInvite"></a>

### client.generateInvite([options]) ⇒ <code>string</code> \| <code>undefined</code>

Generates an invite URL for the bot with the specified options.

**Kind**: instance method of [<code>Client</code>](#Client)  
**Returns**: <code>string</code> \| <code>undefined</code>

| Param                  | Type                                      | Description                                           |
| ---------------------- | ----------------------------------------- | ----------------------------------------------------- |
| [options]              | <code>Object</code>                       | The options for generating the invite URL.            |
| [options.scopes]       | <code>Array.&lt;string&gt;</code>         | The scopes to request from the user.                  |
| [options.permissions]  | <code>Array.&lt;string&gt;</code>         | The permissions to request from the user.             |
| [options.guildSelect]  | <code>boolean</code>                      | Whether to enable guild selection in the invite flow. |
| [options.guild]        | <code>string</code> \| <code>Guild</code> | The guild to pre-select in the invite flow.           |
| [options.responseType] | <code>string</code>                       | The response type to use for the invite.              |

<a name="Client+debug"></a>

### client.debug(message) ⇒

Emits a debug event with the given message.

**Kind**: instance method of [<code>Client</code>](#Client)  
**Returns**: None

| Param   | Type             | Description                |
| ------- | ---------------- | -------------------------- |
| message | <code>any</code> | The debug message to emit. |

<a name="Client+fetchSticker"></a>

### client.fetchSticker(sticker) ⇒ <code>Promise.&lt;Sticker&gt;</code>

Fetches a sticker from the server.

**Kind**: instance method of [<code>Client</code>](#Client)  
**Returns**: <code>Promise.&lt;Sticker&gt;</code> - - A promise that resolves to a Sticker object.

| Param   | Type                                        | Description                           |
| ------- | ------------------------------------------- | ------------------------------------- |
| sticker | <code>string</code> \| <code>Sticker</code> | The sticker ID or the sticker object. |

<a name="Client+fetchNitroPacks"></a>

### client.fetchNitroPacks() ⇒ <code>Promise.&lt;RaidenCol&gt;</code>

Fetches the Nitro Packs from the API.

**Kind**: instance method of [<code>Client</code>](#Client)  
**Returns**: <code>Promise.&lt;RaidenCol&gt;</code> - - A promise that resolves to a RaidenCol object containing the fetched sticker packs.  
**Throws**:

- <code>Error</code> - If there is an error fetching the sticker packs.

<a name="Client+fetchGuildTemplate"></a>

### client.fetchGuildTemplate(code) ⇒ <code>Promise.&lt;GuildTemplate&gt;</code>

Fetches a guild template from the server using the provided code.

**Kind**: instance method of [<code>Client</code>](#Client)  
**Returns**: <code>Promise.&lt;GuildTemplate&gt;</code> - A promise that resolves to a GuildTemplate object.  
**Throws**:

- <code>RangeError</code> If the server template code is not provided.

| Param | Type                | Description                              |
| ----- | ------------------- | ---------------------------------------- |
| code  | <code>string</code> | The code of the guild template to fetch. |

<a name="Client.generateTemplateGuild"></a>

### Client.generateTemplateGuild(o) ⇒ <code>Object</code>

Generates a template guild object with optional properties.

**Kind**: static method of [<code>Client</code>](#Client)  
**Returns**: <code>Object</code> - - The generated guild object with optional properties.

| Param  | Type                | Description                                                                  |
| ------ | ------------------- | ---------------------------------------------------------------------------- |
| o      | <code>Object</code> | An object containing optional properties for the guild.                      |
| o.name | <code>string</code> | The name of the guild. If not provided, it will be set to undefined.         |
| o.icon | <code>string</code> | The icon of the guild. If provided, it will be converted to a base64 string. |

<a name="Client.transformInviteOptions"></a>

### Client.transformInviteOptions(o) ⇒ <code>Object</code>

Transforms the given invite options object into a new object with specific properties.

**Kind**: static method of [<code>Client</code>](#Client)  
**Returns**: <code>Object</code> - - The transformed invite options object.

| Param                   | Type                                          | Description                                  |
| ----------------------- | --------------------------------------------- | -------------------------------------------- |
| o                       | <code>Object</code>                           | The invite options object.                   |
| [o.withCounts]          | <code>boolean</code>                          | Whether to include counts in the invite.     |
| [o.withExpiration]      | <code>boolean</code>                          | Whether to include expiration in the invite. |
| [o.guildScheduledEvent] | <code>string</code> \| <code>undefined</code> | The ID of the guild scheduled event.         |

<a name="Client.transformPresence"></a>

### Client.transformPresence([presence]) ⇒ <code>Object</code>

Transforms a presence object into a new format.

**Kind**: static method of [<code>Client</code>](#Client)  
**Returns**: <code>Object</code> - - The transformed presence object.

| Param      | Type                | Description                       |
| ---------- | ------------------- | --------------------------------- |
| [presence] | <code>Object</code> | The presence object to transform. |

<a name="Client.transformActivities"></a>

### Client.transformActivities(activities) ⇒ <code>Object</code>

Transforms the activities object into a new format.

**Kind**: static method of [<code>Client</code>](#Client)  
**Returns**: <code>Object</code> - - The transformed activities object.

- name: The name of the activity. If not provided, it will be set to undefined.
- type: The type of the activity. If not provided or not a string, it will be set to 0.
- url: The URL of the activity. If not provided, it will be set to undefined.

| Param      | Type                | Description                         |
| ---------- | ------------------- | ----------------------------------- |
| activities | <code>Object</code> | The activities object to transform. |
