<a name="User"></a>

## User ⇐ <code>Base</code>
Represents a user in the application.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [User](#User) ⇐ <code>Base</code>
    * [new User([data], client)](#new_User_new)
    * [.fetch(options)](#User+fetch) ⇒ <code>Promise</code>
    * [.createDM()](#User+createDM) ⇒ <code>Promise.&lt;DMChannel&gt;</code>
    * [.send(options)](#User+send) ⇒ <code>Promise</code>
    * [.defaultAvatarURL(format)](#User+defaultAvatarURL) ⇒ <code>string</code> \| <code>null</code>
    * [.displayAvatarURL(options)](#User+displayAvatarURL) ⇒ <code>string</code>
    * [.bannerURL(options)](#User+bannerURL) ⇒ <code>string</code> \| <code>null</code>
    * [.avatarDecorationURL(options)](#User+avatarDecorationURL) ⇒ <code>string</code> \| <code>null</code>
    * [.hexAccentColor()](#User+hexAccentColor) ⇒ <code>string</code> \| <code>null</code>

<a name="new_User_new"></a>

### new User([data], client)
Constructs a new User object.


| Param | Type | Description |
| --- | --- | --- |
| [data] | <code>Object</code> | The data object containing user information. |
| client | <code>Client</code> | The client object. |

<a name="User+fetch"></a>

### user.fetch(options) ⇒ <code>Promise</code>
Fetches user data using the provided options.

**Kind**: instance method of [<code>User</code>](#User)  
**Returns**: <code>Promise</code> - A promise that resolves with the fetched user data.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options for fetching user data. |

<a name="User+createDM"></a>

### user.createDM() ⇒ <code>Promise.&lt;DMChannel&gt;</code>
Creates a direct message (DM) channel with the user associated with this instance of the client.

**Kind**: instance method of [<code>User</code>](#User)  
**Returns**: <code>Promise.&lt;DMChannel&gt;</code> - A promise that resolves to the created DM channel.  
<a name="User+send"></a>

### user.send(options) ⇒ <code>Promise</code>
Sends a message to the user using the client's user send method.

**Kind**: instance method of [<code>User</code>](#User)  
**Returns**: <code>Promise</code> - A promise that resolves when the message is sent.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> | Optional parameters for sending the message. |

<a name="User+defaultAvatarURL"></a>

### user.defaultAvatarURL(format) ⇒ <code>string</code> \| <code>null</code>
Returns the URL of the default avatar for the user in the specified format.

**Kind**: instance method of [<code>User</code>](#User)  
**Returns**: <code>string</code> \| <code>null</code> - The URL of the default avatar image, or null if it is not available.  

| Param | Type | Description |
| --- | --- | --- |
| format | <code>string</code> | The format of the avatar image (e.g. "png", "jpg", "gif"). |

<a name="User+displayAvatarURL"></a>

### user.displayAvatarURL(options) ⇒ <code>string</code>
Returns the URL of the avatar for the user.

**Kind**: instance method of [<code>User</code>](#User)  
**Returns**: <code>string</code> - The URL of the user's avatar.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options for generating the avatar URL. |
| [options.dynamic] | <code>boolean</code> | Whether to generate a dynamic avatar URL. |
| [options.size] | <code>number</code> | The size of the avatar. |
| [options.format] | <code>string</code> | The format of the avatar image. |

<a name="User+bannerURL"></a>

### user.bannerURL(options) ⇒ <code>string</code> \| <code>null</code>
Generates the URL for the user's banner image.

**Kind**: instance method of [<code>User</code>](#User)  
**Returns**: <code>string</code> \| <code>null</code> - The URL of the user's banner image, or null if no banner is set.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Optional parameters for customizing the URL. |
| [options.dynamic] | <code>boolean</code> | Whether to include dynamic content in the URL. |
| [options.size] | <code>string</code> | The desired size of the banner image. |
| [options.format] | <code>string</code> | The desired format of the banner image. |

<a name="User+avatarDecorationURL"></a>

### user.avatarDecorationURL(options) ⇒ <code>string</code> \| <code>null</code>
Returns the URL of the avatar decoration for the user.

**Kind**: instance method of [<code>User</code>](#User)  
**Returns**: <code>string</code> \| <code>null</code> - The URL of the avatar decoration, or null if no decoration is set.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Optional parameters for the URL generation. |
| options.size | <code>number</code> | The desired size of the avatar decoration. |
| options.format | <code>string</code> | The desired format of the avatar decoration. |

<a name="User+hexAccentColor"></a>

### user.hexAccentColor() ⇒ <code>string</code> \| <code>null</code>
Returns the hexadecimal representation of the accent color.

**Kind**: instance method of [<code>User</code>](#User)  
**Returns**: <code>string</code> \| <code>null</code> - - The hexadecimal representation of the accent color, or null if the accent color is not set.  
