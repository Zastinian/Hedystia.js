---
title: UserManager
sidebar:
  order: 43
---



## UserManager ⇐ <code>Base</code>
Represents a user manager that handles user-related operations.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [UserManager](#UserManager) ⇐ <code>Base</code>
    * [new UserManager(client)](#new_UserManager_new)
    * [.cache](#UserManager+cache) ⇒
    * [._add(users, [options])](#UserManager+_add) ⇒ <code>User</code>
    * [.fetch(user, [options])](#UserManager+fetch) ⇒ <code>Promise.&lt;User&gt;</code>
    * [.edit(options)](#UserManager+edit) ⇒ <code>Promise.&lt;User&gt;</code>
    * [.createDM(user)](#UserManager+createDM) ⇒ <code>Promise.&lt;Channel&gt;</code>
    * [.send(user, [options])](#UserManager+send) ⇒ <code>Promise.&lt;Message&gt;</code>

<a name="new_UserManager_new"></a>

### new UserManager(client)
Constructs a new instance of the class.


| Param | Type | Description |
| --- | --- | --- |
| client | <code>Client</code> | The client object used for communication with the server. |

<a name="UserManager+cache"></a>

### userManager.cache ⇒
Getter method for the cache property.

**Kind**: instance property of [<code>UserManager</code>](#UserManager)  
**Returns**: The Collection object representing the cache.  
<a name="UserManager+_add"></a>

### userManager.\_add(users, [options]) ⇒ <code>User</code>
Adds a user to the collection.

**Kind**: instance method of [<code>UserManager</code>](#UserManager)  
**Returns**: <code>User</code> - The added user object.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| users | <code>User</code> \| <code>string</code> |  | The user object or user ID to add. |
| [options] | <code>Object</code> |  | Additional options for adding the user. |
| [options.cache] | <code>boolean</code> | <code>true</code> | Whether to cache the user object. |
| [options.force] | <code>boolean</code> | <code>false</code> | Whether to force fetching the user even if it is already cached. |

<a name="UserManager+fetch"></a>

### userManager.fetch(user, [options]) ⇒ <code>Promise.&lt;User&gt;</code>
Fetches user data from the server.

**Kind**: instance method of [<code>UserManager</code>](#UserManager)  
**Returns**: <code>Promise.&lt;User&gt;</code> - A promise that resolves to the fetched user data.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| user | <code>string</code> \| <code>User</code> |  | The user ID or user object. |
| [options] | <code>Object</code> |  | Additional options for the fetch request. |
| [options.cache] | <code>boolean</code> | <code>true</code> | Whether to cache the fetched user data. |
| [options.force] | <code>boolean</code> | <code>false</code> | Whether to force a fresh fetch even if the data is already cached. |

<a name="UserManager+edit"></a>

### userManager.edit(options) ⇒ <code>Promise.&lt;User&gt;</code>
Edits the user's profile with the provided options.

**Kind**: instance method of [<code>UserManager</code>](#UserManager)  
**Returns**: <code>Promise.&lt;User&gt;</code> - A promise that resolves with the updated user object.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options to edit the user's profile. |

<a name="UserManager+createDM"></a>

### userManager.createDM(user) ⇒ <code>Promise.&lt;Channel&gt;</code>
Creates a direct message channel with the specified user.

**Kind**: instance method of [<code>UserManager</code>](#UserManager)  
**Returns**: <code>Promise.&lt;Channel&gt;</code> - A promise that resolves with the created direct message channel.  
**Throws**:

- <code>RangeError</code> If no user is provided.


| Param | Type | Description |
| --- | --- | --- |
| user | <code>string</code> \| <code>User</code> | The user to create the direct message channel with. |

<a name="UserManager+send"></a>

### userManager.send(user, [options]) ⇒ <code>Promise.&lt;Message&gt;</code>
Sends a message to a user through a direct message channel.

**Kind**: instance method of [<code>UserManager</code>](#UserManager)  
**Returns**: <code>Promise.&lt;Message&gt;</code> - A promise that resolves to the sent message.  

| Param | Type | Description |
| --- | --- | --- |
| user | <code>User</code> | The user to send the message to. |
| [options] | <code>Object</code> | Additional options for creating the message payload. |

