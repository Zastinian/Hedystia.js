---
title: ClientApplication
sidebar:
  order: 12
---



## ClientApplication ⇐ <code>Base</code>
Represents a client application.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [ClientApplication](#ClientApplication) ⇐ <code>Base</code>
    * [new ClientApplication([data], client)](#new_ClientApplication_new)
    * [.commands](#ClientApplication+commands) ⇒ <code>ApplicationCommandManager</code>
    * [.fetch()](#ClientApplication+fetch) ⇒ <code>Promise.&lt;Application&gt;</code>
    * [.iconURL(options)](#ClientApplication+iconURL) ⇒ <code>string</code> \| <code>null</code>

<a name="new_ClientApplication_new"></a>

### new ClientApplication([data], client)
Constructs a new instance of the Application class.


| Param | Type | Description |
| --- | --- | --- |
| [data] | <code>Object</code> | The data object containing information about the client application. |
| client | <code>Client</code> | The client object associated with the application. |

<a name="ClientApplication+commands"></a>

### clientApplication.commands ⇒ <code>ApplicationCommandManager</code>
Get the commands for the application.

**Kind**: instance property of [<code>ClientApplication</code>](#ClientApplication)  
**Returns**: <code>ApplicationCommandManager</code> - - The application command manager.  
<a name="ClientApplication+fetch"></a>

### clientApplication.fetch() ⇒ <code>Promise.&lt;Application&gt;</code>
Fetches the application information for the authenticated user.

**Kind**: instance method of [<code>ClientApplication</code>](#ClientApplication)  
**Returns**: <code>Promise.&lt;Application&gt;</code> - A promise that resolves to the application object.  
<a name="ClientApplication+iconURL"></a>

### clientApplication.iconURL(options) ⇒ <code>string</code> \| <code>null</code>
Returns the URL of the icon for this application.

**Kind**: instance method of [<code>ClientApplication</code>](#ClientApplication)  
**Returns**: <code>string</code> \| <code>null</code> - The URL of the icon, or null if no icon is available.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | An optional object containing additional options for the icon URL. |
| options.dynamic | <code>boolean</code> | Whether the icon should be dynamically generated. |
| options.size | <code>number</code> | The desired size of the icon. |
| options.format | <code>string</code> | The desired format of the icon. |

