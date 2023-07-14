<a name="SlashOption"></a>

## SlashOption
Represents an option for a slash command.

**Kind**: global class  

* [SlashOption](#SlashOption)
    * [new SlashOption([data])](#new_SlashOption_new)
    * _instance_
        * [.setType(type)](#SlashOption+setType) ⇒ [<code>SlashOption</code>](#SlashOption)
        * [.setName(name)](#SlashOption+setName) ⇒ [<code>SlashOption</code>](#SlashOption)
        * [.setDescription(description)](#SlashOption+setDescription) ⇒ [<code>SlashOption</code>](#SlashOption)
        * [.setRequired(required)](#SlashOption+setRequired) ⇒ [<code>SlashOption</code>](#SlashOption)
        * [.setDescriptionLocalizations(localizations)](#SlashOption+setDescriptionLocalizations) ⇒ [<code>SlashOption</code>](#SlashOption)
        * [.setNameLocalizations([localizations])](#SlashOption+setNameLocalizations) ⇒ [<code>SlashOption</code>](#SlashOption)
        * [.setChoices(...choices)](#SlashOption+setChoices) ⇒ [<code>SlashOption</code>](#SlashOption)
        * [.setChannelTypes(...channelTypes)](#SlashOption+setChannelTypes) ⇒ [<code>SlashOption</code>](#SlashOption)
        * [.setMinValue(minValue)](#SlashOption+setMinValue) ⇒ [<code>SlashOption</code>](#SlashOption)
        * [.setMaxValue(maxValue)](#SlashOption+setMaxValue) ⇒ [<code>SlashOption</code>](#SlashOption)
        * [.setMinLength(minLength)](#SlashOption+setMinLength) ⇒ [<code>SlashOption</code>](#SlashOption)
        * [.setMaxLength(maxLength)](#SlashOption+setMaxLength) ⇒ [<code>SlashOption</code>](#SlashOption)
        * [.setAutocomplete(autocomplete)](#SlashOption+setAutocomplete) ⇒ [<code>SlashOption</code>](#SlashOption)
        * [.validation()](#SlashOption+validation)
        * [.toJSON()](#SlashOption+toJSON) ⇒ <code>Object</code>
    * _static_
        * [.transformChannelType(channelType)](#SlashOption.transformChannelType) ⇒ <code>number</code>
        * [.transformChoices(choices)](#SlashOption.transformChoices) ⇒ <code>Object</code>

<a name="new_SlashOption_new"></a>

### new SlashOption([data])
Creates a new instance of the SlashOption class.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [data] | <code>Object</code> |  | The data for the option. |
| [data.type] | <code>string</code> \| <code>number</code> | <code>&quot;\&quot;String\&quot;&quot;</code> | The type of the option. |
| [data.name] | <code>string</code> |  | The name of the option. |
| [data.name_localizations] | <code>Object</code> |  | The localized names of the option. |
| [data.description] | <code>string</code> |  | The description of the option. |
| [data.description_localizations] | <code>Object</code> |  | The localized descriptions of the option. |
| [data.required] | <code>boolean</code> |  | Whether the option is required or not. |
| [data.choices] | <code>Array.&lt;Object&gt;</code> |  | The choices for the option. |
| [data.channel_types] | <code>Array.&lt;string&gt;</code> |  | The channel types that the option can be used with. |
| [data.min_value] | <code>number</code> |  | The minimum value for the option. |
| [data.max_value] | <code>number</code> |  | The maximum value for the option. |
| [data.min_length] | <code>number</code> |  | The minimum length for the option. |
| [data.max_length] | <code>number</code> |  | The maximum length for the option. |
| [data.autocomplete] | <code>boolean</code> |  | Whether the option should be autocompleted or not. |

<a name="SlashOption+setType"></a>

### slashOption.setType(type) ⇒ [<code>SlashOption</code>](#SlashOption)
Sets the type of the option.

**Kind**: instance method of [<code>SlashOption</code>](#SlashOption)  
**Returns**: [<code>SlashOption</code>](#SlashOption) - The updated instance of the SlashOption class.  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> \| <code>number</code> | The type of the option. |

<a name="SlashOption+setName"></a>

### slashOption.setName(name) ⇒ [<code>SlashOption</code>](#SlashOption)
Sets the name of the option.

**Kind**: instance method of [<code>SlashOption</code>](#SlashOption)  
**Returns**: [<code>SlashOption</code>](#SlashOption) - The updated instance of the SlashOption class.  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name of the option. |

<a name="SlashOption+setDescription"></a>

### slashOption.setDescription(description) ⇒ [<code>SlashOption</code>](#SlashOption)
Sets the description of the option.

**Kind**: instance method of [<code>SlashOption</code>](#SlashOption)  
**Returns**: [<code>SlashOption</code>](#SlashOption) - The updated instance of the SlashOption class.  

| Param | Type | Description |
| --- | --- | --- |
| description | <code>string</code> | The description of the option. |

<a name="SlashOption+setRequired"></a>

### slashOption.setRequired(required) ⇒ [<code>SlashOption</code>](#SlashOption)
Sets whether the option is required or not.

**Kind**: instance method of [<code>SlashOption</code>](#SlashOption)  
**Returns**: [<code>SlashOption</code>](#SlashOption) - The updated instance of the SlashOption class.  

| Param | Type | Description |
| --- | --- | --- |
| required | <code>boolean</code> | Whether the option is required or not. |

<a name="SlashOption+setDescriptionLocalizations"></a>

### slashOption.setDescriptionLocalizations(localizations) ⇒ [<code>SlashOption</code>](#SlashOption)
Sets the localized descriptions of the option.

**Kind**: instance method of [<code>SlashOption</code>](#SlashOption)  
**Returns**: [<code>SlashOption</code>](#SlashOption) - The updated instance of the SlashOption class.  

| Param | Type | Description |
| --- | --- | --- |
| localizations | <code>Object</code> | The localized descriptions of the option. |

<a name="SlashOption+setNameLocalizations"></a>

### slashOption.setNameLocalizations([localizations]) ⇒ [<code>SlashOption</code>](#SlashOption)
Sets the localized names of the option.

**Kind**: instance method of [<code>SlashOption</code>](#SlashOption)  
**Returns**: [<code>SlashOption</code>](#SlashOption) - The updated instance of the SlashOption class.  

| Param | Type | Description |
| --- | --- | --- |
| [localizations] | <code>Object</code> | The localized names of the option. |

<a name="SlashOption+setChoices"></a>

### slashOption.setChoices(...choices) ⇒ [<code>SlashOption</code>](#SlashOption)
Sets the choices for the option.

**Kind**: instance method of [<code>SlashOption</code>](#SlashOption)  
**Returns**: [<code>SlashOption</code>](#SlashOption) - The updated instance of the SlashOption class.  

| Param | Type | Description |
| --- | --- | --- |
| ...choices | <code>Object</code> \| <code>Array.&lt;Object&gt;</code> | The choices for the option. |

<a name="SlashOption+setChannelTypes"></a>

### slashOption.setChannelTypes(...channelTypes) ⇒ [<code>SlashOption</code>](#SlashOption)
Sets the channel types that the option can be used with.

**Kind**: instance method of [<code>SlashOption</code>](#SlashOption)  
**Returns**: [<code>SlashOption</code>](#SlashOption) - The updated instance of the SlashOption class.  

| Param | Type | Description |
| --- | --- | --- |
| ...channelTypes | <code>string</code> \| <code>Array.&lt;string&gt;</code> | The channel types that the option can be used with. |

<a name="SlashOption+setMinValue"></a>

### slashOption.setMinValue(minValue) ⇒ [<code>SlashOption</code>](#SlashOption)
Sets the minimum value allowed for the option.

**Kind**: instance method of [<code>SlashOption</code>](#SlashOption)  
**Returns**: [<code>SlashOption</code>](#SlashOption) - - The current instance of the SlashOption class.  

| Param | Type | Description |
| --- | --- | --- |
| minValue | <code>number</code> | The minimum value. |

<a name="SlashOption+setMaxValue"></a>

### slashOption.setMaxValue(maxValue) ⇒ [<code>SlashOption</code>](#SlashOption)
Sets the maximum value allowed for the option.

**Kind**: instance method of [<code>SlashOption</code>](#SlashOption)  
**Returns**: [<code>SlashOption</code>](#SlashOption) - - The current instance of the SlashOption class.  

| Param | Type | Description |
| --- | --- | --- |
| maxValue | <code>number</code> | The maximum value. |

<a name="SlashOption+setMinLength"></a>

### slashOption.setMinLength(minLength) ⇒ [<code>SlashOption</code>](#SlashOption)
Sets the minimum length allowed for the option.

**Kind**: instance method of [<code>SlashOption</code>](#SlashOption)  
**Returns**: [<code>SlashOption</code>](#SlashOption) - - The current instance of the SlashOption class.  

| Param | Type | Description |
| --- | --- | --- |
| minLength | <code>number</code> | The minimum length. |

<a name="SlashOption+setMaxLength"></a>

### slashOption.setMaxLength(maxLength) ⇒ [<code>SlashOption</code>](#SlashOption)
Sets the maximum length allowed for the option.

**Kind**: instance method of [<code>SlashOption</code>](#SlashOption)  
**Returns**: [<code>SlashOption</code>](#SlashOption) - - The current instance of the SlashOption class.  

| Param | Type | Description |
| --- | --- | --- |
| maxLength | <code>number</code> | The maximum length. |

<a name="SlashOption+setAutocomplete"></a>

### slashOption.setAutocomplete(autocomplete) ⇒ [<code>SlashOption</code>](#SlashOption)
Sets whether the option is autocompletable.

**Kind**: instance method of [<code>SlashOption</code>](#SlashOption)  
**Returns**: [<code>SlashOption</code>](#SlashOption) - - The current instance of the SlashOption class.  

| Param | Type | Description |
| --- | --- | --- |
| autocomplete | <code>boolean</code> | Whether the option is autocompletable. |

<a name="SlashOption+validation"></a>

### slashOption.validation()
Validates the option data and throws an error if any data is invalid.

**Kind**: instance method of [<code>SlashOption</code>](#SlashOption)  
**Throws**:

- <code>RangeError</code> - If option type is invalid, option name or description is empty, or length is greater than limit.
- <code>TypeError</code> - If option name or description is not a string, or option required or autocomplete is not a boolean.

<a name="SlashOption+toJSON"></a>

### slashOption.toJSON() ⇒ <code>Object</code>
Returns a JSON representation of the SlashOption instance, after performing validation.

**Kind**: instance method of [<code>SlashOption</code>](#SlashOption)  
**Returns**: <code>Object</code> - JSON object with the following properties:- type: The type of option, either as a string or an OptionType enum value.- name: The name of the option.- name_localizations: An object containing localized names for the option.- description: A description of the option.- description_localizations: An object containing localized descriptions for the option.- required: A boolean indicating whether the option is required.- choices: An array of choice objects for the option, if applicable.- channel_types: An array of channel type objects for the option, if applicable.- min_value: The minimum value for the option, if applicable.- max_value: The maximum value for the option, if applicable.- max_length: The maximum length of the option, if applicable.- min_length: The minimum length of the option, if applicable.- autocomplete: A boolean indicating whether the option supports autocomplete.  
<a name="SlashOption.transformChannelType"></a>

### SlashOption.transformChannelType(channelType) ⇒ <code>number</code>
Transforms a channel type string to its respective integer value.

**Kind**: static method of [<code>SlashOption</code>](#SlashOption)  
**Returns**: <code>number</code> - - The channel type integer value.  

| Param | Type | Description |
| --- | --- | --- |
| channelType | <code>string</code> | The channel type string. |

<a name="SlashOption.transformChoices"></a>

### SlashOption.transformChoices(choices) ⇒ <code>Object</code>
Transforms the choices object to a format suitable for the API.

**Kind**: static method of [<code>SlashOption</code>](#SlashOption)  
**Returns**: <code>Object</code> - - The transformed choices object.  

| Param | Type | Description |
| --- | --- | --- |
| choices | <code>Object</code> | The choices object. |
| [choices.name] | <code>string</code> | The name of the choice. |
| [choices.value] | <code>string</code> | The value of the choice. |
| [choices.nameLocalizations] | <code>Object.&lt;string, string&gt;</code> | The localized names of the choice. |

