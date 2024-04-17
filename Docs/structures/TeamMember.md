---
title: TeamMember
sidebar:
  order: 63
---



## TeamMember ⇐ <code>Base</code>
Represents a team member.

**Kind**: global class  
**Extends**: <code>Base</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| state | <code>MembershipState</code> \| <code>null</code> | The membership state of the team member. |
| permissions | <code>Object</code> \| <code>undefined</code> | The permissions of the team member. |
| teamId | <code>string</code> \| <code>null</code> | The ID of the team that the member belongs to. |
| user | <code>User</code> \| <code>null</code> | The user object representing the team member. |

<a name="new_TeamMember_new"></a>

### new TeamMember([data], client)
Constructs a new instance of the class.


| Param | Type | Description |
| --- | --- | --- |
| [data] | <code>Object</code> | The data object containing information about the team member. |
| client | <code>Client</code> | The client object. |

