<a name="User"></a>

## User ⇐ <code>Base</code>
It's a class that represents a user

**Kind**: global class  
**Extends**: <code>Base</code>  

* [User](#User) ⇐ <code>Base</code>
    * [new User([data], client)](#new_User_new)
    * [.fetch(options)](#User+fetch) ⇒
    * [.createDM()](#User+createDM) ⇒
    * [.send([options])](#User+send) ⇒
    * [.defaultAvatarURL()](#User+defaultAvatarURL) ⇒
    * [.displayAvatarURL([options])](#User+displayAvatarURL) ⇒
    * [.bannerURL([options])](#User+bannerURL) ⇒
    * [.avatarDecorationURL([options])](#User+avatarDecorationURL) ⇒
    * [.hexAccentColor()](#User+hexAccentColor) ⇒

<a name="new_User_new"></a>

### new User([data], client)
It's a constructor for a class that extends another class.


| Param | Description |
| --- | --- |
| [data] | The data that is passed to the constructor. |
| client | DiscordClient |

<a name="User+fetch"></a>

### user.fetch(options) ⇒
It fetches the user from the Discord API

**Kind**: instance method of [<code>User</code>](#User)  
**Returns**: The user object.  

| Param | Description |
| --- | --- |
| options | An object with the following properties: |

<a name="User+createDM"></a>

### user.createDM() ⇒
It creates a DM channel with the user

**Kind**: instance method of [<code>User</code>](#User)  
**Returns**: The user object.  
<a name="User+send"></a>

### user.send([options]) ⇒
It sends a message to a user

**Kind**: instance method of [<code>User</code>](#User)  
**Returns**: The user object.  

| Param | Description |
| --- | --- |
| [options] | Object |

<a name="User+defaultAvatarURL"></a>

### user.defaultAvatarURL() ⇒
It returns the default avatar URL of the user

**Kind**: instance method of [<code>User</code>](#User)  
**Returns**: The default avatar URL for the user.  
<a name="User+displayAvatarURL"></a>

### user.displayAvatarURL([options]) ⇒
"If the user doesn't have an avatar, return the default avatar URL, otherwise return the user'savatar URL."

**Kind**: instance method of [<code>User</code>](#User)  
**Returns**: The avatar URL of the user.  

| Param | Description |
| --- | --- |
| [options] | dynamic, size, format |

<a name="User+bannerURL"></a>

### user.bannerURL([options]) ⇒
"If the user has a banner, return the banner URL, otherwise return null."The function is called like this:

**Kind**: instance method of [<code>User</code>](#User)  
**Returns**: The user's banner URL.  

| Param | Description |
| --- | --- |
| [options] | The options for the banner. |

<a name="User+avatarDecorationURL"></a>

### user.avatarDecorationURL([options]) ⇒
"If the user has an avatar decoration, return the URL of the avatar decoration, otherwise returnnull."The function is called avatarDecorationURL because it returns the URL of the avatar decoration

**Kind**: instance method of [<code>User</code>](#User)  
**Returns**: The avatar decoration URL.  

| Param |
| --- |
| [options] | 

<a name="User+hexAccentColor"></a>

### user.hexAccentColor() ⇒
If the accentColor property is not null, return a string that starts with a hash symbol and isfollowed by the accentColor property converted to a string in base 16.

**Kind**: instance method of [<code>User</code>](#User)  
**Returns**: The accent color in hexadecimal format.  
