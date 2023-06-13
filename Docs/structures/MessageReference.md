<a name="MessageReference"></a>

## MessageReference ⇐ <code>Base</code>
It's a class that takes in a data object and a client, and then sets the properties of the class to
the values of the data object.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [MessageReference](#MessageReference) ⇐ <code>Base</code>
    * [new MessageReference([data], client)](#new_MessageReference_new)
    * [.toJSON()](#MessageReference+toJSON) ⇒

<a name="new_MessageReference_new"></a>

### new MessageReference([data], client)
It's a constructor function that takes in two parameters, data and client, and sets the value ofthis.messageId to data.message_id if it exists, otherwise it sets it to data.messageId if it exists,otherwise it sets it to null.It does the same thing for the other three variables.


| Param | Description |
| --- | --- |
| [data] | The data that is passed to the constructor. |
| client | The client that is sending the request |

<a name="MessageReference+toJSON"></a>

### messageReference.toJSON() ⇒
It returns an object with the message ID, channel ID, guild ID, and fail if not exists

**Kind**: instance method of [<code>MessageReference</code>](#MessageReference)  
**Returns**: The message ID, channel ID, guild ID, and fail if not exists.  
