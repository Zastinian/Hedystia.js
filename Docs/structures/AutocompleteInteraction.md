<a name="AutocompleteInteraction"></a>

## AutocompleteInteraction

**Kind**: global class

- [AutocompleteInteraction](#AutocompleteInteraction)
  - [new AutocompleteInteraction([data], guildId, client)](#new_AutocompleteInteraction_new)
  - _instance_
    - [.getFocused()](#AutocompleteInteraction+getFocused) ⇒
    - [.respond(choices)](#AutocompleteInteraction+respond) ⇒
  - _static_
    - [.transformChoices([choices])](#AutocompleteInteraction.transformChoices) ⇒

<a name="new_AutocompleteInteraction_new"></a>

### new AutocompleteInteraction([data], guildId, client)

It's a constructor for the class.

| Param   | Description                                   |
| ------- | --------------------------------------------- |
| [data]  | The data that is passed to the constructor.   |
| guildId | The ID of the guild the role is in            |
| client  | The client that the command is being run from |

<a name="AutocompleteInteraction+getFocused"></a>

### autocompleteInteraction.getFocused() ⇒

If the data.options array has a focused property, then return the value of that property.

If it doesn't, then return null.

**Kind**: instance method of [<code>AutocompleteInteraction</code>](#AutocompleteInteraction)  
**Returns**: The value of the focused option.  
<a name="AutocompleteInteraction+respond"></a>

### autocompleteInteraction.respond(choices) ⇒

It sends a response to the interaction.

**Kind**: instance method of [<code>AutocompleteInteraction</code>](#AutocompleteInteraction)  
**Returns**: The response from the API.

| Param   | Description                                        |
| ------- | -------------------------------------------------- |
| choices | An array of objects with the following properties: |

<a name="AutocompleteInteraction.transformChoices"></a>

### AutocompleteInteraction.transformChoices([choices]) ⇒

It takes an object with a name and value property and returns an object with a name and value
property

**Kind**: static method of [<code>AutocompleteInteraction</code>](#AutocompleteInteraction)  
**Returns**: The transformed choices object.

| Param     |
| --------- |
| [choices] |
