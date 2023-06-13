<a name="GuildPreview"></a>

## GuildPreview ⇐ <code>Base</code>
Represents the preview for a guild.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [GuildPreview](#GuildPreview) ⇐ <code>Base</code>
    * [new GuildPreview(data, client)](#new_GuildPreview_new)
    * [.fetch()](#GuildPreview+fetch) ⇒ [<code>Promise.&lt;GuildPreview&gt;</code>](#GuildPreview)
    * [.iconURL(options)](#GuildPreview+iconURL) ⇒ <code>string</code>
    * [.splashURL([options])](#GuildPreview+splashURL) ⇒ <code>string</code>
    * [.discoverySplashURL([options])](#GuildPreview+discoverySplashURL) ⇒ <code>string</code>

<a name="new_GuildPreview_new"></a>

### new GuildPreview(data, client)

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | The data for the guild preview |
| client | <code>Client</code> | The instantiating client |

<a name="GuildPreview+fetch"></a>

### guildPreview.fetch() ⇒ [<code>Promise.&lt;GuildPreview&gt;</code>](#GuildPreview)
Fetches the previewed guild

**Kind**: instance method of [<code>GuildPreview</code>](#GuildPreview)  
<a name="GuildPreview+iconURL"></a>

### guildPreview.iconURL(options) ⇒ <code>string</code>
Returns the URL of the guild's icon

**Kind**: instance method of [<code>GuildPreview</code>](#GuildPreview)  
**Returns**: <code>string</code> - The URL of the guild's icon or null if no icon is available  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Options for the icon URL |
| options.dynamic | <code>boolean</code> | Whether the icon should be dynamically generated |
| options.size | <code>number</code> | The size of the icon in pixels |
| options.format | <code>string</code> | The format of the icon (e.g. "png" or "jpeg") |

<a name="GuildPreview+splashURL"></a>

### guildPreview.splashURL([options]) ⇒ <code>string</code>
Returns the URL for the guild splash image.

**Kind**: instance method of [<code>GuildPreview</code>](#GuildPreview)  
**Returns**: <code>string</code> - The URL for the guild splash image or null if no splash image is available.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | Options for the splash image. |
| [options.dynamic] | <code>boolean</code> | <code>false</code> | Whether to generate a dynamic or static image. |
| [options.size] | <code>number</code> |  | The size of the image in pixels. |
| [options.format] | <code>string</code> |  | The format of the image (e.g. "webp", "png", etc.). |

<a name="GuildPreview+discoverySplashURL"></a>

### guildPreview.discoverySplashURL([options]) ⇒ <code>string</code>
Returns the URL for the guild discovery splash image.

**Kind**: instance method of [<code>GuildPreview</code>](#GuildPreview)  
**Returns**: <code>string</code> - The URL for the guild discovery splash image or null if no discovery splash image is available.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | Options for the discovery splash image. |
| [options.dynamic] | <code>boolean</code> | <code>false</code> | Whether to generate a dynamic or static image. |
| [options.size] | <code>number</code> |  | The size of the image in pixels. |
| [options.format] | <code>string</code> |  | The format of the image (e.g. "webp", "png", etc.). |

