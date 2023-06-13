<a name="GuildMemberVerificationFields"></a>

## GuildMemberVerificationFields
A class representing fields for guild member verification.

**Kind**: global class  

* [GuildMemberVerificationFields](#GuildMemberVerificationFields)
    * [new GuildMemberVerificationFields(data)](#new_GuildMemberVerificationFields_new)
    * _instance_
        * [.setEnabled(enabled)](#GuildMemberVerificationFields+setEnabled) ⇒ [<code>GuildMemberVerificationFields</code>](#GuildMemberVerificationFields)
        * [.setDescription(description)](#GuildMemberVerificationFields+setDescription) ⇒ [<code>GuildMemberVerificationFields</code>](#GuildMemberVerificationFields)
        * [.setFields(...fields)](#GuildMemberVerificationFields+setFields) ⇒ [<code>GuildMemberVerificationFields</code>](#GuildMemberVerificationFields)
        * [.addFields(...fields)](#GuildMemberVerificationFields+addFields) ⇒ [<code>GuildMemberVerificationFields</code>](#GuildMemberVerificationFields)
        * [.toJSON()](#GuildMemberVerificationFields+toJSON) ⇒ <code>Object</code>
    * _static_
        * [.transformFields(fields)](#GuildMemberVerificationFields.transformFields) ⇒ <code>Object</code>

<a name="new_GuildMemberVerificationFields_new"></a>

### new GuildMemberVerificationFields(data)
Constructs a new GuildMemberVerificationFields object.


| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | An object containing the data for the verification fields. |
| data.enabled | <code>boolean</code> | Whether or not the verification fields are enabled. |
| data.description | <code>string</code> | A description of the verification fields. |
| data.fields | <code>Array</code> | An array of objects representing the individual verification fields. |

<a name="GuildMemberVerificationFields+setEnabled"></a>

### guildMemberVerificationFields.setEnabled(enabled) ⇒ [<code>GuildMemberVerificationFields</code>](#GuildMemberVerificationFields)
Sets whether or not the verification fields are enabled.

**Kind**: instance method of [<code>GuildMemberVerificationFields</code>](#GuildMemberVerificationFields)  
**Returns**: [<code>GuildMemberVerificationFields</code>](#GuildMemberVerificationFields) - The GuildMemberVerificationFields object.  

| Param | Type | Description |
| --- | --- | --- |
| enabled | <code>boolean</code> | Whether or not the verification fields are enabled. |

<a name="GuildMemberVerificationFields+setDescription"></a>

### guildMemberVerificationFields.setDescription(description) ⇒ [<code>GuildMemberVerificationFields</code>](#GuildMemberVerificationFields)
Sets the description of the verification fields.

**Kind**: instance method of [<code>GuildMemberVerificationFields</code>](#GuildMemberVerificationFields)  
**Returns**: [<code>GuildMemberVerificationFields</code>](#GuildMemberVerificationFields) - The GuildMemberVerificationFields object.  

| Param | Type | Description |
| --- | --- | --- |
| description | <code>string</code> | A description of the verification fields. |

<a name="GuildMemberVerificationFields+setFields"></a>

### guildMemberVerificationFields.setFields(...fields) ⇒ [<code>GuildMemberVerificationFields</code>](#GuildMemberVerificationFields)
Sets the verification fields.

**Kind**: instance method of [<code>GuildMemberVerificationFields</code>](#GuildMemberVerificationFields)  
**Returns**: [<code>GuildMemberVerificationFields</code>](#GuildMemberVerificationFields) - The GuildMemberVerificationFields object.  

| Param | Type | Description |
| --- | --- | --- |
| ...fields | <code>Object</code> | One or more objects representing the individual verification fields. |

<a name="GuildMemberVerificationFields+addFields"></a>

### guildMemberVerificationFields.addFields(...fields) ⇒ [<code>GuildMemberVerificationFields</code>](#GuildMemberVerificationFields)
Adds one or more verification fields.

**Kind**: instance method of [<code>GuildMemberVerificationFields</code>](#GuildMemberVerificationFields)  
**Returns**: [<code>GuildMemberVerificationFields</code>](#GuildMemberVerificationFields) - The GuildMemberVerificationFields object.  

| Param | Type | Description |
| --- | --- | --- |
| ...fields | <code>Object</code> | One or more objects representing the individual verification fields. |

<a name="GuildMemberVerificationFields+toJSON"></a>

### guildMemberVerificationFields.toJSON() ⇒ <code>Object</code>
Returns the verification fields as a JSON object.

**Kind**: instance method of [<code>GuildMemberVerificationFields</code>](#GuildMemberVerificationFields)  
**Returns**: <code>Object</code> - The verification fields as a JSON object.  
<a name="GuildMemberVerificationFields.transformFields"></a>

### GuildMemberVerificationFields.transformFields(fields) ⇒ <code>Object</code>
Transforms an object representing a verification field into the required format.

**Kind**: static method of [<code>GuildMemberVerificationFields</code>](#GuildMemberVerificationFields)  
**Returns**: <code>Object</code> - An object representing the verification field in the required format.  

| Param | Type | Description |
| --- | --- | --- |
| fields | <code>Object</code> | An object representing a verification field. |

