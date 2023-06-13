<a name="MessageActionRow"></a>

## MessageActionRow
Represents an action row containing components, such as buttons or selects, to be added to a message.

**Kind**: global class  

* [MessageActionRow](#MessageActionRow)
    * [new MessageActionRow(data)](#new_MessageActionRow_new)
    * [.addComponents(...components)](#MessageActionRow+addComponents) ⇒ [<code>MessageActionRow</code>](#MessageActionRow)
    * [.setComponents(...components)](#MessageActionRow+setComponents) ⇒ [<code>MessageActionRow</code>](#MessageActionRow)
    * [.validation()](#MessageActionRow+validation) ⇒ <code>void</code>
    * [.toJSON()](#MessageActionRow+toJSON) ⇒ <code>Object</code>

<a name="new_MessageActionRow_new"></a>

### new MessageActionRow(data)

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | The data for the action row. |
| data.components | <code>Array</code> | The components to be added to the action row. |

<a name="MessageActionRow+addComponents"></a>

### messageActionRow.addComponents(...components) ⇒ [<code>MessageActionRow</code>](#MessageActionRow)
Adds one or more components to the action row.

**Kind**: instance method of [<code>MessageActionRow</code>](#MessageActionRow)  
**Returns**: [<code>MessageActionRow</code>](#MessageActionRow) - - The action row with the new components added.  

| Param | Type | Description |
| --- | --- | --- |
| ...components | <code>any</code> | The components to be added to the action row. |

<a name="MessageActionRow+setComponents"></a>

### messageActionRow.setComponents(...components) ⇒ [<code>MessageActionRow</code>](#MessageActionRow)
Sets the components of the action row.

**Kind**: instance method of [<code>MessageActionRow</code>](#MessageActionRow)  
**Returns**: [<code>MessageActionRow</code>](#MessageActionRow) - - The action row with the new components set.  

| Param | Type | Description |
| --- | --- | --- |
| ...components | <code>any</code> | The components to be set as the action row's components. |

<a name="MessageActionRow+validation"></a>

### messageActionRow.validation() ⇒ <code>void</code>
Validates that the action row's type is valid.

**Kind**: instance method of [<code>MessageActionRow</code>](#MessageActionRow)  
**Throws**:

- <code>TypeError</code> If the action row's type is invalid.

<a name="MessageActionRow+toJSON"></a>

### messageActionRow.toJSON() ⇒ <code>Object</code>
Returns the action row's data in JSON format.

**Kind**: instance method of [<code>MessageActionRow</code>](#MessageActionRow)  
**Returns**: <code>Object</code> - - The action row's data in JSON format.  
