<a name="GuildMemberVerificationManager"></a>

## GuildMemberVerificationManager
**Kind**: global class  

* [GuildMemberVerificationManager](#GuildMemberVerificationManager)
    * [new GuildMemberVerificationManager(guildId, client)](#new_GuildMemberVerificationManager_new)
    * _instance_
        * [.fetch([options])](#GuildMemberVerificationManager+fetch) ⇒
        * [.edit([options])](#GuildMemberVerificationManager+edit) ⇒
    * _static_
        * [.createFormFields([fields])](#GuildMemberVerificationManager.createFormFields) ⇒

<a name="new_GuildMemberVerificationManager_new"></a>

### new GuildMemberVerificationManager(guildId, client)
`constructor(guildId, client)` is a function that takes two arguments, `guildId` and `client`, andassigns them to the `guildId` and `client` properties of the class.


| Param | Description |
| --- | --- |
| guildId | The ID of the guild you want to get the settings for. |
| client | The client that the command is being run on. |

<a name="GuildMemberVerificationManager+fetch"></a>

### guildMemberVerificationManager.fetch([options]) ⇒
`fetch` fetches the guild's member verification settings

**Kind**: instance method of [<code>GuildMemberVerificationManager</code>](#GuildMemberVerificationManager)  
**Returns**: A new GuildMemberVerification object  

| Param | Description |
| --- | --- |
| [options] | Object |

<a name="GuildMemberVerificationManager+edit"></a>

### guildMemberVerificationManager.edit([options]) ⇒
It edits the verification form

**Kind**: instance method of [<code>GuildMemberVerificationManager</code>](#GuildMemberVerificationManager)  
**Returns**: A new GuildMemberVerification object  

| Param | Description |
| --- | --- |
| [options] | Object |

<a name="GuildMemberVerificationManager.createFormFields"></a>

### GuildMemberVerificationManager.createFormFields([fields]) ⇒
It takes an object with any of the following keys: `fieldType`, `field_type`, `type`, `label`,`required`, `values`, `choices` and returns an object with the following keys: `field_type`,`label`, `required`, `values`, `choices`

**Kind**: static method of [<code>GuildMemberVerificationManager</code>](#GuildMemberVerificationManager)  
**Returns**: An object with the following properties:  field_type: The type of field.  label: The label of the field.  required: Whether or not the field is required.  values: The values of the field.  choices: The choices of the field.  

| Param | Description |
| --- | --- |
| [fields] | The fields object that is passed in from the form. |

