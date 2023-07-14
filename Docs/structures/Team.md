<a name="Team"></a>

## Team ⇐ <code>Base</code>
Represents a team object.

**Kind**: global class  
**Extends**: <code>Base</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| icon | <code>string</code> \| <code>undefined</code> | The icon of the team. |
| id | <code>string</code> \| <code>undefined</code> | The ID of the team. |
| members | <code>RaidenCol</code> | A collection of team members. |
| createdAt | <code>Date</code> \| <code>undefined</code> | The creation date of the team. |
| createdTimestamp | <code>number</code> \| <code>undefined</code> | The timestamp of the team's creation date. |
| name | <code>string</code> \| <code>undefined</code> | The name of the team. |


* [Team](#Team) ⇐ <code>Base</code>
    * [new Team([data], client)](#new_Team_new)
    * [.iconURL(options)](#Team+iconURL) ⇒ <code>string</code> \| <code>null</code>

<a name="new_Team_new"></a>

### new Team([data], client)
Constructs a new instance of the class.


| Param | Type | Description |
| --- | --- | --- |
| [data] | <code>Object</code> | The data object containing the team information. |
| client | <code>Client</code> | The client object. |

<a name="Team+iconURL"></a>

### team.iconURL(options) ⇒ <code>string</code> \| <code>null</code>
Returns the URL of the icon for this team.

**Kind**: instance method of [<code>Team</code>](#Team)  
**Returns**: <code>string</code> \| <code>null</code> - The URL of the team's icon, or null if no icon is available.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Optional parameters for customizing the icon URL. |
| [options.dynamic] | <code>boolean</code> | Whether to use a dynamic icon. |
| [options.size] | <code>number</code> | The desired size of the icon. |
| [options.format] | <code>string</code> | The desired format of the icon. |

