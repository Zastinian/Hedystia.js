---
title: AuditLogEntry
sidebar:
  order: 6
---



## AuditLogEntry ⇐ <code>Base</code>
Represents an entry in the audit log.

**Kind**: global class  
**Extends**: <code>Base</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| targetId | <code>string</code> \| <code>null</code> | The ID of the target of the audit log entry. |
| changes | <code>Array.&lt;Object&gt;</code> | An array of objects representing the changes made in the audit log entry. |
| userId | <code>string</code> \| <code>null</code> | The ID of the user who performed the action in the audit log entry. |
| id | <code>string</code> \| <code>null</code> | The ID of the audit log entry. |
| actionType | <code>string</code> \| <code>null</code> | The type of action performed |


* [AuditLogEntry](#AuditLogEntry) ⇐ <code>Base</code>
    * [new AuditLogEntry([data], client)](#new_AuditLogEntry_new)
    * [.executor](#AuditLogEntry+executor) ⇒
    * [.isUpdate()](#AuditLogEntry+isUpdate) ⇒ <code>boolean</code>

<a name="new_AuditLogEntry_new"></a>

### new AuditLogEntry([data], client)
Constructs a new instance of the class.


| Param | Type | Description |
| --- | --- | --- |
| [data] | <code>Object</code> | The data for the audit log entry. |
| client | <code>Client</code> | The client instance. |

<a name="AuditLogEntry+executor"></a>

### auditLogEntry.executor ⇒
Retrieves the executor of the action.

**Kind**: instance property of [<code>AuditLogEntry</code>](#AuditLogEntry)  
**Returns**: The user object representing the executor, or null if not found.  
<a name="AuditLogEntry+isUpdate"></a>

### auditLogEntry.isUpdate() ⇒ <code>boolean</code>
Checks if the action type of the guild audit log entry is an update action.

**Kind**: instance method of [<code>AuditLogEntry</code>](#AuditLogEntry)  
**Returns**: <code>boolean</code> - - True if the action type is an update action, false otherwise.  
