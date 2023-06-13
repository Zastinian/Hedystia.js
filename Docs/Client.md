<a name="Client"></a>

## Client ⇐ <code>EventEmitter</code>

Client class representing a Discord bot client.

**Kind**: global class  
**Extends**: <code>EventEmitter</code>

- [Client](#Client) ⇐ <code>EventEmitter</code>
  - [new Client([options])](#new_Client_new)
  - _instance_
    - [.api](#Client+api) ⇒
    - [.cdn](#Client+cdn) ⇒
    - [.fetchInvite(invite, query)](#Client+fetchInvite) ⇒
    - [.fetchPreview(guild)](#Client+fetchPreview) ⇒
    - [.fetchGuildWidget(guild)](#Client+fetchGuildWidget) ⇒
    - [.fetchVoiceRegions()](#Client+fetchVoiceRegions) ⇒
    - [.generateTemplate(code, [options])](#Client+generateTemplate) ⇒
    - [.generateInvite([options])](#Client+generateInvite) ⇒
    - [.fetchSticker(sticker)](#Client+fetchSticker) ⇒
    - [.fetchNitroPacks()](#Client+fetchNitroPacks) ⇒
    - [.fetchGuildTemplate(code)](#Client+fetchGuildTemplate) ⇒
  - _static_
    - [.generateTemplateGuild([o])](#Client.generateTemplateGuild) ⇒
    - [.transformInviteOptions([o])](#Client.transformInviteOptions) ⇒
    - [.transformPresence([presence])](#Client.transformPresence) ⇒
    - [.transformActivities([activities])](#Client.transformActivities) ⇒

<a name="new_Client_new"></a>

### new Client([options])

| Param               | Type                              | Default                           | Description                                  |
| ------------------- | --------------------------------- | --------------------------------- | -------------------------------------------- |
| [options]           | <code>Object</code>               | <code>{}</code>                   | The options to set for the client.           |
| [options.intents]   | <code>Array.&lt;String&gt;</code> | <code>[&quot;GUILDS&quot;]</code> | The intents to use for the client.           |
| options.token       | <code>String</code>               |                                   | The bot token to use for authorization.      |
| [options.presence]  | <code>Object</code>               | <code>{}</code>                   | The presence options for the client.         |
| [options.maxShards] | <code>Number</code>               | <code>1</code>                    | The maximum number of shards for the client. |
| [options.shardId]   | <code>Number</code>               | <code>0</code>                    | The shard ID for the client.                 |
| [options.version]   | <code>String</code>               | <code>&quot;10&quot;</code>       | The API version to use for the client.       |
| [options.encoding]  | <code>String</code>               | <code>&quot;json&quot;</code>     | The encoding to use for the client.          |
| [options.timeout]   | <code>Number</code>               | <code>15000</code>                | The timeout for REST requests.               |
| [options.partials]  | <code>Array.&lt;String&gt;</code> | <code>[]</code>                   | The partials to use for the client.          |

<a name="Client+api"></a>

### client.api ⇒

It returns a new REST object with the token set to the token of the client.

**Kind**: instance property of [<code>Client</code>](#Client)  
**Returns**: A new instance of the REST class.  
<a name="Client+cdn"></a>

### client.cdn ⇒

The function returns the value of the CDN variable.

**Kind**: instance property of [<code>Client</code>](#Client)  
**Returns**: The CDN property.  
<a name="Client+fetchInvite"></a>

### client.fetchInvite(invite, query) ⇒

It fetches an invite from the Discord API

**Kind**: instance method of [<code>Client</code>](#Client)  
**Returns**: A new Invite object.

| Param  | Description     |
| ------ | --------------- |
| invite | The invite code |
| query  |                 |

<a name="Client+fetchPreview"></a>

### client.fetchPreview(guild) ⇒

It fetches the preview of a guild

**Kind**: instance method of [<code>Client</code>](#Client)  
**Returns**: A new GuildPreview object.

| Param | Description                         |
| ----- | ----------------------------------- |
| guild | The guild to fetch the preview for. |

<a name="Client+fetchGuildWidget"></a>

### client.fetchGuildWidget(guild) ⇒

It fetches the guild widget of a guild

**Kind**: instance method of [<code>Client</code>](#Client)  
**Returns**: A new instance of the GuildWidget class.

| Param | Description            |
| ----- | ---------------------- |
| guild | The guild object or ID |

<a name="Client+fetchVoiceRegions"></a>

### client.fetchVoiceRegions() ⇒

It fetches the voice regions from the Discord API and returns them as a RaidenCol

**Kind**: instance method of [<code>Client</code>](#Client)  
**Returns**: An array of objects.  
<a name="Client+generateTemplate"></a>

### client.generateTemplate(code, [options]) ⇒

It takes a template code and creates a new guild with the template

**Kind**: instance method of [<code>Client</code>](#Client)  
**Returns**: The guild object.

| Param     | Description                               |
| --------- | ----------------------------------------- |
| code      | The code of the template you want to use. |
| [options] | Object                                    |

<a name="Client+generateInvite"></a>

### client.generateInvite([options]) ⇒

The function generates an invite link for the user to invite the bot to their server

**Kind**: instance method of [<code>Client</code>](#Client)  
**Returns**: The URL to the OAuth2 page.

| Param     | Description |
| --------- | ----------- |
| [options] | Object      |

<a name="Client+fetchSticker"></a>

### client.fetchSticker(sticker) ⇒

It fetches a sticker from the API and returns a new Sticker object

**Kind**: instance method of [<code>Client</code>](#Client)  
**Returns**: A new Sticker object.

| Param   | Description              |
| ------- | ------------------------ |
| sticker | The sticker object or ID |

<a name="Client+fetchNitroPacks"></a>

### client.fetchNitroPacks() ⇒

It fetches the sticker packs from the API and returns them as a RaidenCol

**Kind**: instance method of [<code>Client</code>](#Client)  
**Returns**: A collection of sticker packs.  
<a name="Client+fetchGuildTemplate"></a>

### client.fetchGuildTemplate(code) ⇒

It fetches a guild template from the discord api

**Kind**: instance method of [<code>Client</code>](#Client)  
**Returns**: A new GuildTemplate object.

| Param | Description                                 |
| ----- | ------------------------------------------- |
| code  | The code of the template you want to fetch. |

<a name="Client.generateTemplateGuild"></a>

### Client.generateTemplateGuild([o]) ⇒

It takes an object with a name and icon property, and returns an object with a name and icon
property

**Kind**: static method of [<code>Client</code>](#Client)  
**Returns**: an object with the properties name and icon.

| Param | Description                              |
| ----- | ---------------------------------------- |
| [o]   | The object that contains the parameters. |

<a name="Client.transformInviteOptions"></a>

### Client.transformInviteOptions([o]) ⇒

It takes an object with properties that are camelCase and returns an object with properties that
are snake_case

**Kind**: static method of [<code>Client</code>](#Client)  
**Returns**: an object with the following properties:

| Param | Description         |
| ----- | ------------------- |
| [o]   | The options object. |

<a name="Client.transformPresence"></a>

### Client.transformPresence([presence]) ⇒

It transforms a presence object into a presence object

**Kind**: static method of [<code>Client</code>](#Client)  
**Returns**: The presence object is being returned.

| Param      | Description                       |
| ---------- | --------------------------------- |
| [presence] | The presence object to transform. |

<a name="Client.transformActivities"></a>

### Client.transformActivities([activities]) ⇒

It takes an object with a name, type, and url property, and returns an object with the same
properties, but with the type property converted to a number.

**Kind**: static method of [<code>Client</code>](#Client)  
**Returns**: An object with the properties name, type, and url.

| Param        |
| ------------ |
| [activities] |
