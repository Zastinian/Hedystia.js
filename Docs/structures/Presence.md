---
title: Presence
sidebar:
  order: 54
---



## Presence ⇐ <code>Base</code>
Represents the presence of a user.

**Kind**: global class  
**Extends**: <code>Base</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| partial | <code>boolean</code> | Whether the presence is partial or not. |
| user | <code>User</code> | The user associated with the presence. |
| status | <code>string</code> \| <code>null</code> | The status of the user. |
| activities | <code>Array.&lt;Activity&gt;</code> | The activities of the user. |
| clientStatus | <code>Object</code> \| <code>null</code> | The client status of the user. |

<a name="new_Presence_new"></a>

### new Presence([data], client)
Constructs a new instance of the class.


| Param | Type | Description |
| --- | --- | --- |
| [data] | <code>Object</code> | The data object containing presence information. |
| client | <code>Client</code> | The client instance. |

