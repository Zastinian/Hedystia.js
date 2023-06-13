<a name="GuildMemberVerification"></a>

## GuildMemberVerification ⇐ <code>Base</code>
Represents the verification requirements for a guild member.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [GuildMemberVerification](#GuildMemberVerification) ⇐ <code>Base</code>
    * [new GuildMemberVerification(data, guildId, client)](#new_GuildMemberVerification_new)
    * _instance_
        * [.guild](#GuildMemberVerification+guild) : <code>Guild</code>
        * [.fetch([options])](#GuildMemberVerification+fetch) ⇒ [<code>Promise.&lt;GuildMemberVerification&gt;</code>](#GuildMemberVerification)
        * [.edit([options])](#GuildMemberVerification+edit) ⇒ [<code>Promise.&lt;GuildMemberVerification&gt;</code>](#GuildMemberVerification)
        * [.setEnabled(enabled, [reason])](#GuildMemberVerification+setEnabled) ⇒ [<code>Promise.&lt;GuildMemberVerification&gt;</code>](#GuildMemberVerification)
        * [.setDescription(description, [reason])](#GuildMemberVerification+setDescription) ⇒ [<code>Promise.&lt;GuildMemberVerification&gt;</code>](#GuildMemberVerification)
        * [.addFields(fields)](#GuildMemberVerification+addFields) ⇒ [<code>Promise.&lt;GuildMemberVerification&gt;</code>](#GuildMemberVerification)
        * [.removeFields()](#GuildMemberVerification+removeFields) ⇒ [<code>Promise.&lt;GuildMemberVerification&gt;</code>](#GuildMemberVerification)
    * _static_
        * [.transformoptions(fields)](#GuildMemberVerification.transformoptions) ⇒ <code>Object</code>

<a name="new_GuildMemberVerification_new"></a>

### new GuildMemberVerification(data, guildId, client)

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | The data for the verification. |
| guildId | <code>string</code> | The ID of the guild the verification is for. |
| client | <code>Client</code> | The client that instantiated this object. |

<a name="GuildMemberVerification+guild"></a>

### guildMemberVerification.guild : <code>Guild</code>
The guild the verification is for.

**Kind**: instance property of [<code>GuildMemberVerification</code>](#GuildMemberVerification)  
**Read only**: true  
<a name="GuildMemberVerification+fetch"></a>

### guildMemberVerification.fetch([options]) ⇒ [<code>Promise.&lt;GuildMemberVerification&gt;</code>](#GuildMemberVerification)
Fetches this verification's settings.

**Kind**: instance method of [<code>GuildMemberVerification</code>](#GuildMemberVerification)  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>BaseFetchOptions</code> | Additional options for the fetch. |

<a name="GuildMemberVerification+edit"></a>

### guildMemberVerification.edit([options]) ⇒ [<code>Promise.&lt;GuildMemberVerification&gt;</code>](#GuildMemberVerification)
Edits this verification's settings.

**Kind**: instance method of [<code>GuildMemberVerification</code>](#GuildMemberVerification)  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>GuildMemberVerificationEditOptions</code> | The options to edit the verification. |

<a name="GuildMemberVerification+setEnabled"></a>

### guildMemberVerification.setEnabled(enabled, [reason]) ⇒ [<code>Promise.&lt;GuildMemberVerification&gt;</code>](#GuildMemberVerification)
Sets whether this verification is enabled.

**Kind**: instance method of [<code>GuildMemberVerification</code>](#GuildMemberVerification)  

| Param | Type | Description |
| --- | --- | --- |
| enabled | <code>boolean</code> | Whether the verification is enabled. |
| [reason] | <code>string</code> | The reason for the change. |

<a name="GuildMemberVerification+setDescription"></a>

### guildMemberVerification.setDescription(description, [reason]) ⇒ [<code>Promise.&lt;GuildMemberVerification&gt;</code>](#GuildMemberVerification)
Sets the description for this verification.

**Kind**: instance method of [<code>GuildMemberVerification</code>](#GuildMemberVerification)  

| Param | Type | Description |
| --- | --- | --- |
| description | <code>string</code> | The new description for the verification. |
| [reason] | <code>string</code> | The reason for the change. |

<a name="GuildMemberVerification+addFields"></a>

### guildMemberVerification.addFields(fields) ⇒ [<code>Promise.&lt;GuildMemberVerification&gt;</code>](#GuildMemberVerification)
Adds new fields to this verification.

**Kind**: instance method of [<code>GuildMemberVerification</code>](#GuildMemberVerification)  

| Param | Type | Description |
| --- | --- | --- |
| fields | <code>Array.&lt;VerificationFormFields&gt;</code> | The fields to add to the verification. |

<a name="GuildMemberVerification+removeFields"></a>

### guildMemberVerification.removeFields() ⇒ [<code>Promise.&lt;GuildMemberVerification&gt;</code>](#GuildMemberVerification)
Removes all fields from this verification.

**Kind**: instance method of [<code>GuildMemberVerification</code>](#GuildMemberVerification)  
<a name="GuildMemberVerification.transformoptions"></a>

### GuildMemberVerification.transformoptions(fields) ⇒ <code>Object</code>
Transforms options for a verification form field.

**Kind**: static method of [<code>GuildMemberVerification</code>](#GuildMemberVerification)  
**Returns**: <code>Object</code> - The transformed form fields.  

| Param | Type | Description |
| --- | --- | --- |
| fields | <code>Object</code> | The fields to transform. |
| fields.type | <code>string</code> | The type of the form field. |
| fields.label | <code>string</code> | The label for the form field. |
| fields.required | <code>boolean</code> | Whether the field is required or not. |
| fields.values | <code>Array</code> | The values for the field. |
| fields.choices | <code>Array</code> | The choices for the field. |

