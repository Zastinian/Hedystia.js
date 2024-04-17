---
title: AutocompleteInteraction
sidebar:
  order: 7
---



## AutocompleteInteraction ⇐ <code>Interaction</code>
Represents an interaction with an autocomplete component.

**Kind**: global class  
**Extends**: <code>Interaction</code>  

* [AutocompleteInteraction](#AutocompleteInteraction) ⇐ <code>Interaction</code>
    * [new AutocompleteInteraction([data], guildId, client)](#new_AutocompleteInteraction_new)
    * _instance_
        * [.getFocused()](#AutocompleteInteraction+getFocused) ⇒
        * [.respond(choices)](#AutocompleteInteraction+respond) ⇒ <code>Promise</code>
    * _static_
        * [.transformChoices(choices)](#AutocompleteInteraction.transformChoices) ⇒ <code>Object</code>

<a name="new_AutocompleteInteraction_new"></a>

### new AutocompleteInteraction([data], guildId, client)
Constructs a new instance of the class.


| Param | Type | Description |
| --- | --- | --- |
| [data] | <code>Object</code> | The data object to initialize the instance with. |
| guildId | <code>string</code> | The ID of the guild associated with the instance. |
| client | <code>Client</code> | The client instance associated with the instance. |

<a name="AutocompleteInteraction+getFocused"></a>

### autocompleteInteraction.getFocused() ⇒
Retrieves the focused option from the data object.

**Kind**: instance method of [<code>AutocompleteInteraction</code>](#AutocompleteInteraction)  
**Returns**: The value of the focused option, or null if no option is focused or if the value is not available.  
<a name="AutocompleteInteraction+respond"></a>

### autocompleteInteraction.respond(choices) ⇒ <code>Promise</code>
Sends a response to an autocomplete interaction with the provided choices.

**Kind**: instance method of [<code>AutocompleteInteraction</code>](#AutocompleteInteraction)  
**Returns**: <code>Promise</code> - A promise that resolves when the response is sent.  

| Param | Type | Description |
| --- | --- | --- |
| choices | <code>Array</code> | An array of choices for the autocomplete interaction. |

<a name="AutocompleteInteraction.transformChoices"></a>

### AutocompleteInteraction.transformChoices(choices) ⇒ <code>Object</code>
Transforms the given choices object into a new object with the name and value properties.

**Kind**: static method of [<code>AutocompleteInteraction</code>](#AutocompleteInteraction)  
**Returns**: <code>Object</code> - - The transformed choices object with name and value properties.  
**Throws**:

- <code>RangeError</code> - If the length of the name property is less than 1 or greater than 100.


| Param | Type | Description |
| --- | --- | --- |
| choices | <code>Object</code> | The choices object to transform. |

