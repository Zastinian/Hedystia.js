<a name="MessageButton"></a>

## MessageButton
A class representing a message button.

**Kind**: global class  

* [MessageButton](#MessageButton)
    * [new MessageButton([data])](#new_MessageButton_new)
    * [.setLabel(label)](#MessageButton+setLabel) ⇒ [<code>MessageButton</code>](#MessageButton)
    * [.setCustomId(customId)](#MessageButton+setCustomId) ⇒ [<code>MessageButton</code>](#MessageButton)
    * [.setDisabled(disabled)](#MessageButton+setDisabled) ⇒ [<code>MessageButton</code>](#MessageButton)
    * [.setStyle(style)](#MessageButton+setStyle) ⇒ [<code>MessageButton</code>](#MessageButton)
    * [.setURL(url)](#MessageButton+setURL) ⇒ [<code>MessageButton</code>](#MessageButton)
    * [.setEmoji(emoji)](#MessageButton+setEmoji) ⇒ [<code>MessageButton</code>](#MessageButton)
    * [.toJSON()](#MessageButton+toJSON) ⇒ <code>Object</code>

<a name="new_MessageButton_new"></a>

### new MessageButton([data])
Creates a new message button instance.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [data] | <code>Object</code> | <code>{}</code> | The data to initialize the message button with. |

<a name="MessageButton+setLabel"></a>

### messageButton.setLabel(label) ⇒ [<code>MessageButton</code>](#MessageButton)
Sets the label of the button.

**Kind**: instance method of [<code>MessageButton</code>](#MessageButton)  
**Returns**: [<code>MessageButton</code>](#MessageButton) - The message button instance.  

| Param | Type | Description |
| --- | --- | --- |
| label | <code>string</code> | The label to set. |

<a name="MessageButton+setCustomId"></a>

### messageButton.setCustomId(customId) ⇒ [<code>MessageButton</code>](#MessageButton)
Sets the custom ID of the button.

**Kind**: instance method of [<code>MessageButton</code>](#MessageButton)  
**Returns**: [<code>MessageButton</code>](#MessageButton) - The message button instance.  

| Param | Type | Description |
| --- | --- | --- |
| customId | <code>string</code> | The custom ID to set. |

<a name="MessageButton+setDisabled"></a>

### messageButton.setDisabled(disabled) ⇒ [<code>MessageButton</code>](#MessageButton)
Sets whether the button is disabled.

**Kind**: instance method of [<code>MessageButton</code>](#MessageButton)  
**Returns**: [<code>MessageButton</code>](#MessageButton) - The message button instance.  

| Param | Type | Description |
| --- | --- | --- |
| disabled | <code>boolean</code> | Whether the button is disabled. |

<a name="MessageButton+setStyle"></a>

### messageButton.setStyle(style) ⇒ [<code>MessageButton</code>](#MessageButton)
Sets the style of the button.

**Kind**: instance method of [<code>MessageButton</code>](#MessageButton)  
**Returns**: [<code>MessageButton</code>](#MessageButton) - The message button instance.  

| Param | Type | Description |
| --- | --- | --- |
| style | <code>string</code> | The style to set. |

<a name="MessageButton+setURL"></a>

### messageButton.setURL(url) ⇒ [<code>MessageButton</code>](#MessageButton)
Sets the URL of the button.

**Kind**: instance method of [<code>MessageButton</code>](#MessageButton)  
**Returns**: [<code>MessageButton</code>](#MessageButton) - The message button instance.  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The URL to set. |

<a name="MessageButton+setEmoji"></a>

### messageButton.setEmoji(emoji) ⇒ [<code>MessageButton</code>](#MessageButton)
Sets the emoji of the button.

**Kind**: instance method of [<code>MessageButton</code>](#MessageButton)  
**Returns**: [<code>MessageButton</code>](#MessageButton) - The message button instance.  

| Param | Type | Description |
| --- | --- | --- |
| emoji | <code>string</code> \| <code>Object</code> | The emoji to set. |

<a name="MessageButton+toJSON"></a>

### messageButton.toJSON() ⇒ <code>Object</code>
Converts the message button instance to a JSON representation.

**Kind**: instance method of [<code>MessageButton</code>](#MessageButton)  
**Returns**: <code>Object</code> - The JSON representation of the message button.  
