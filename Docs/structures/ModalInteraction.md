<a name="ModalInteraction"></a>

## ModalInteraction ⇐ <code>MessageComponentInteraction</code>

It's a class that allows you to get the values of a modal

**Kind**: global class  
**Extends**: <code>MessageComponentInteraction</code>

- [ModalInteraction](#ModalInteraction) ⇐ <code>MessageComponentInteraction</code>
  - [new ModalInteraction([data], guildId, client)](#new_ModalInteraction_new)
  - _instance_
    - [.getTextInput(customId, [required])](#ModalInteraction+getTextInput) ⇒
    - [.getSelect(customId, [required])](#ModalInteraction+getSelect) ⇒
  - _static_
    - [.transformResolvedFields([fields])](#ModalInteraction.transformResolvedFields) ⇒

<a name="new_ModalInteraction_new"></a>

### new ModalInteraction([data], guildId, client)

It takes a JSON object, and returns a new object with the same properties, but with the values
transformed.

| Param   | Description                                           |
| ------- | ----------------------------------------------------- |
| [data]  | The data that is passed to the constructor.           |
| guildId | The guild ID of the guild the modal is being sent to. |
| client  | Discord.Client                                        |

<a name="ModalInteraction+getTextInput"></a>

### modalInteraction.getTextInput(customId, [required]) ⇒

It takes a customId and returns the value of the first component in the modal with that customId

**Kind**: instance method of [<code>ModalInteraction</code>](#ModalInteraction)  
**Returns**: The value of the text input.

| Param      | Default            | Description                                |
| ---------- | ------------------ | ------------------------------------------ |
| customId   |                    | The custom id of the modal                 |
| [required] | <code>false</code> | boolean - If the modal is required or not. |

<a name="ModalInteraction+getSelect"></a>

### modalInteraction.getSelect(customId, [required]) ⇒

It takes a customId and returns the values of the first component in the module with that
customId.

**Kind**: instance method of [<code>ModalInteraction</code>](#ModalInteraction)  
**Returns**: The return value is a string.

| Param      | Default            | Description                                                                     |
| ---------- | ------------------ | ------------------------------------------------------------------------------- |
| customId   |                    | The custom id of the module you want to get the select from.                    |
| [required] | <code>false</code> | boolean - If the module is required, it will throw an error if it is not found. |

<a name="ModalInteraction.transformResolvedFields"></a>

### ModalInteraction.transformResolvedFields([fields]) ⇒

It takes an object with a property called "type" and a property called "components" and returns an
object with a property called "type" and a property called "components"

**Kind**: static method of [<code>ModalInteraction</code>](#ModalInteraction)  
**Returns**: An object with the following properties:

| Param    |
| -------- |
| [fields] |
