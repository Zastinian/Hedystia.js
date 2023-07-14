<a name="Bitfield"></a>

## Bitfield
**Kind**: global class  

* [Bitfield](#Bitfield)
    * [new Bitfield([bit])](#new_Bitfield_new)
    * _instance_
        * [.any(...bit)](#Bitfield+any) ⇒ <code>boolean</code>
        * [.has(...bit)](#Bitfield+has) ⇒ <code>boolean</code>
        * [.add(...bit)](#Bitfield+add) ⇒ <code>this</code>
        * [.remove(...bits)](#Bitfield+remove) ⇒ [<code>Bitfield</code>](#Bitfield)
        * [.toArray()](#Bitfield+toArray) ⇒ <code>Array</code>
        * [.toString()](#Bitfield+toString) ⇒ <code>string</code>
        * [.serialize()](#Bitfield+serialize) ⇒ <code>Object</code>
        * [.freeze()](#Bitfield+freeze) ⇒
    * _static_
        * [.Flags](#Bitfield.Flags) : <code>object</code>
        * [.defaultBit](#Bitfield.defaultBit)
        * [.resolve(bit)](#Bitfield.resolve) ⇒ <code>number</code> \| <code>bigint</code>

<a name="new_Bitfield_new"></a>

### new Bitfield([bit])
Constructs a new instance of the class.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [bit] | <code>number</code> | <code>this.constructor.defaultBit</code> | The bit value to initialize the instance with. |

<a name="Bitfield+any"></a>

### bitfield.any(...bit) ⇒ <code>boolean</code>
Checks if any of the given bit(s) are set in the bitfield.

**Kind**: instance method of [<code>Bitfield</code>](#Bitfield)  
**Returns**: <code>boolean</code> - True if any of the given bit(s) are set, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| ...bit | <code>bigint</code> | The bit(s) to check. |

<a name="Bitfield+has"></a>

### bitfield.has(...bit) ⇒ <code>boolean</code>
Checks if the given bit(s) are set in the bitfield.

**Kind**: instance method of [<code>Bitfield</code>](#Bitfield)  
**Returns**: <code>boolean</code> - True if the bit(s) are set, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| ...bit | <code>bigint</code> | The bit(s) to check. |

<a name="Bitfield+add"></a>

### bitfield.add(...bit) ⇒ <code>this</code>
Adds one or more bit(s) to the current bitfield.

**Kind**: instance method of [<code>Bitfield</code>](#Bitfield)  
**Returns**: <code>this</code> - The modified instance of the class.  

| Param | Type | Description |
| --- | --- | --- |
| ...bit | <code>bigint</code> | The bit(s) to add. |

<a name="Bitfield+remove"></a>

### bitfield.remove(...bits) ⇒ [<code>Bitfield</code>](#Bitfield)
Removes one or more bits from the bitfield.

**Kind**: instance method of [<code>Bitfield</code>](#Bitfield)  
**Returns**: [<code>Bitfield</code>](#Bitfield) - A new Bitfield object with the specified bits removed.  

| Param | Type | Description |
| --- | --- | --- |
| ...bits | <code>bigint</code> | The bits to remove from the bitfield. |

<a name="Bitfield+toArray"></a>

### bitfield.toArray() ⇒ <code>Array</code>
Converts the flags of an object into an array of keys.

**Kind**: instance method of [<code>Bitfield</code>](#Bitfield)  
**Returns**: <code>Array</code> - An array of keys representing the flags that are set in the object.  
<a name="Bitfield+toString"></a>

### bitfield.toString() ⇒ <code>string</code>
Returns a string representation of the bitfield.

**Kind**: instance method of [<code>Bitfield</code>](#Bitfield)  
**Returns**: <code>string</code> - - The string representation of the bitfield.  
<a name="Bitfield+serialize"></a>

### bitfield.serialize() ⇒ <code>Object</code>
Serializes the current object into a JSON object.

**Kind**: instance method of [<code>Bitfield</code>](#Bitfield)  
**Returns**: <code>Object</code> - - The serialized object.  
<a name="Bitfield+freeze"></a>

### bitfield.freeze() ⇒
Freezes the current object, making it immutable.

**Kind**: instance method of [<code>Bitfield</code>](#Bitfield)  
**Returns**: None  
<a name="Bitfield.Flags"></a>

### Bitfield.Flags : <code>object</code>
An empty object representing a set of flags for a bitfield.

**Kind**: static property of [<code>Bitfield</code>](#Bitfield)  
<a name="Bitfield.defaultBit"></a>

### Bitfield.defaultBit
Sets the default bit value for the Bitfield class.

**Kind**: static property of [<code>Bitfield</code>](#Bitfield)  

| Param | Type | Description |
| --- | --- | --- |
| defaultBit | <code>bigint</code> | The default bit value to set. |

<a name="Bitfield.resolve"></a>

### Bitfield.resolve(bit) ⇒ <code>number</code> \| <code>bigint</code>
Resolves a bit value based on the given input.

**Kind**: static method of [<code>Bitfield</code>](#Bitfield)  
**Returns**: <code>number</code> \| <code>bigint</code> - - The resolved bit value.  
**Throws**:

- <code>BitfieldInvalid</code> - If the specified bitfield is invalid or not found.


| Param | Type | Description |
| --- | --- | --- |
| bit | <code>any</code> | The bit value to resolve. |

