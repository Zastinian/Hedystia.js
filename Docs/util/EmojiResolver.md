---
title: EmojiResolver
sidebar:
  order: 8
---



## EmojiResolver
A utility class for resolving and transforming emojis.

**Kind**: global class  
<a name="EmojiResolver.transformEmoji"></a>

### EmojiResolver.transformEmoji(emoji, client) ⇒ <code>string</code>
Transforms an emoji object or string into a formatted emoji string.

**Kind**: static method of [<code>EmojiResolver</code>](#EmojiResolver)  
**Returns**: <code>string</code> - The formatted emoji string.  
**Throws**:

- <code>RangeError</code> If the emoji is not found in the emoji cache.


| Param | Type | Description |
| --- | --- | --- |
| emoji | <code>Object</code> \| <code>string</code> | The emoji object or string to transform. |
| client | <code>Client</code> | The Discord client instance. |

