<a name="RaidenCol"></a>

## RaidenCol ⇐ <code>Map</code>
**Kind**: global class  
**Extends**: <code>Map</code>  

* [RaidenCol](#RaidenCol) ⇐ <code>Map</code>
    * [new RaidenCol()](#new_RaidenCol_new)
    * _instance_
        * [.size](#RaidenCol+size) ⇒ <code>number</code>
        * [.map(fn)](#RaidenCol+map) ⇒ <code>Array</code>
        * [.mapVal(fn)](#RaidenCol+mapVal) ⇒ <code>Array</code>
        * [.first()](#RaidenCol+first) ⇒ <code>any</code> \| <code>undefined</code>
        * [.find(fn)](#RaidenCol+find) ⇒
        * [.filter(fn)](#RaidenCol+filter) ⇒ <code>Object</code>
        * [.filterKey(fn)](#RaidenCol+filterKey) ⇒
        * [.last()](#RaidenCol+last) ⇒ <code>any</code>
        * [.lastKey()](#RaidenCol+lastKey) ⇒
        * [.tap(fn)](#RaidenCol+tap) ⇒ <code>Object</code>
        * [.has(k)](#RaidenCol+has) ⇒ <code>boolean</code>
        * [.array()](#RaidenCol+array) ⇒ <code>Array</code>
        * [.keyArray()](#RaidenCol+keyArray) ⇒ <code>Array</code>
        * [.hasAll(...c)](#RaidenCol+hasAll) ⇒ <code>boolean</code>
        * [.hasAny(...keys)](#RaidenCol+hasAny) ⇒ <code>boolean</code>
        * [.some(fn)](#RaidenCol+some) ⇒ <code>boolean</code>
        * [.random()](#RaidenCol+random) ⇒
        * [.get(k)](#RaidenCol+get) ⇒
        * [.every(fn)](#RaidenCol+every) ⇒ <code>boolean</code>
        * [.each(fn)](#RaidenCol+each) ⇒ <code>Array</code>
        * [.randomKey()](#RaidenCol+randomKey) ⇒
        * [.equals(collection)](#RaidenCol+equals) ⇒ <code>boolean</code>
        * [.difference(collection)](#RaidenCol+difference) ⇒ <code>Array</code>
        * [.findKey(fn)](#RaidenCol+findKey) ⇒
        * [.sort([fn])](#RaidenCol+sort) ⇒ [<code>RaidenCol</code>](#RaidenCol)
        * [.clear()](#RaidenCol+clear) ⇒ <code>void</code>
        * [.at([index])](#RaidenCol+at) ⇒
    * _static_
        * [.compareFunction(one, two)](#RaidenCol.compareFunction) ⇒ <code>number</code>

<a name="new_RaidenCol_new"></a>

### new RaidenCol()
A custom implementation of a Map with additional utility methods.

<a name="RaidenCol+size"></a>

### raidenCol.size ⇒ <code>number</code>
Get the size of the Map object.

**Kind**: instance property of [<code>RaidenCol</code>](#RaidenCol)  
**Returns**: <code>number</code> - The number of key-value pairs in the Map object.  
<a name="RaidenCol+map"></a>

### raidenCol.map(fn) ⇒ <code>Array</code>
Maps over the elements of the Map object and applies a function to each element.

**Kind**: instance method of [<code>RaidenCol</code>](#RaidenCol)  
**Returns**: <code>Array</code> - - An array containing the results of applying the function to each element.  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | The function to apply to each element. |

<a name="RaidenCol+mapVal"></a>

### raidenCol.mapVal(fn) ⇒ <code>Array</code>
Maps each value in the Map object using the provided function and returns an array of the mapped values.

**Kind**: instance method of [<code>RaidenCol</code>](#RaidenCol)  
**Returns**: <code>Array</code> - - An array of the mapped values.  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | The function to apply to each value in the Map object. |

<a name="RaidenCol+first"></a>

### raidenCol.first() ⇒ <code>any</code> \| <code>undefined</code>
Returns the first element in the collection.

**Kind**: instance method of [<code>RaidenCol</code>](#RaidenCol)  
**Returns**: <code>any</code> \| <code>undefined</code> - The first element in the collection, or undefined if the collection is empty.  
<a name="RaidenCol+find"></a>

### raidenCol.find(fn) ⇒
Finds the first value in the Map that satisfies the provided testing function.

**Kind**: instance method of [<code>RaidenCol</code>](#RaidenCol)  
**Returns**: The first value that satisfies the condition, or undefined if no value satisfies the condition.  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | The testing function. It should return true if the value satisfies the condition, false otherwise. |

<a name="RaidenCol+filter"></a>

### raidenCol.filter(fn) ⇒ <code>Object</code>
Creates a new instance of the same class and returns a filtered version of the current instance.

**Kind**: instance method of [<code>RaidenCol</code>](#RaidenCol)  
**Returns**: <code>Object</code> - - A new instance of the same class with the filtered values.  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | The filter function to apply to each value in the instance. |

<a name="RaidenCol+filterKey"></a>

### raidenCol.filterKey(fn) ⇒
Filters the key-value pairs of a Map object based on a given function.

**Kind**: instance method of [<code>RaidenCol</code>](#RaidenCol)  
**Returns**: A new Map object containing the filtered key-value pairs.  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | The function used to filter the keys. |

<a name="RaidenCol+last"></a>

### raidenCol.last() ⇒ <code>any</code>
Returns the last element in the set.

**Kind**: instance method of [<code>RaidenCol</code>](#RaidenCol)  
**Returns**: <code>any</code> - The last element in the set, or undefined if the set is empty.  
<a name="RaidenCol+lastKey"></a>

### raidenCol.lastKey() ⇒
Returns the last key in the keyArray.

**Kind**: instance method of [<code>RaidenCol</code>](#RaidenCol)  
**Returns**: The last key in the keyArray.  
<a name="RaidenCol+tap"></a>

### raidenCol.tap(fn) ⇒ <code>Object</code>
Executes a function with the current object as its argument and returns the object itself.

**Kind**: instance method of [<code>RaidenCol</code>](#RaidenCol)  
**Returns**: <code>Object</code> - - The current object.  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | The function to be executed. |

<a name="RaidenCol+has"></a>

### raidenCol.has(k) ⇒ <code>boolean</code>
Checks if the specified key is present in the Map object.

**Kind**: instance method of [<code>RaidenCol</code>](#RaidenCol)  
**Returns**: <code>boolean</code> - - True if the key is present, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| k | <code>any</code> | The key to check for. |

<a name="RaidenCol+array"></a>

### raidenCol.array() ⇒ <code>Array</code>
Returns an array containing all the values of the current object.

**Kind**: instance method of [<code>RaidenCol</code>](#RaidenCol)  
**Returns**: <code>Array</code> - - An array containing all the values of the object.  
<a name="RaidenCol+keyArray"></a>

### raidenCol.keyArray() ⇒ <code>Array</code>
Returns an array containing all the keys in the Map object.

**Kind**: instance method of [<code>RaidenCol</code>](#RaidenCol)  
**Returns**: <code>Array</code> - An array containing all the keys in the Map object.  
<a name="RaidenCol+hasAll"></a>

### raidenCol.hasAll(...c) ⇒ <code>boolean</code>
Checks if all the given elements are present in the set.

**Kind**: instance method of [<code>RaidenCol</code>](#RaidenCol)  
**Returns**: <code>boolean</code> - - True if all elements are present, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| ...c | <code>any</code> | The elements to check for presence in the set. |

<a name="RaidenCol+hasAny"></a>

### raidenCol.hasAny(...keys) ⇒ <code>boolean</code>
Checks if any of the given keys exist in the Map.

**Kind**: instance method of [<code>RaidenCol</code>](#RaidenCol)  
**Returns**: <code>boolean</code> - - True if any of the keys exist in the Map, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| ...keys | <code>any</code> | The keys to check for existence in the Map. |

<a name="RaidenCol+some"></a>

### raidenCol.some(fn) ⇒ <code>boolean</code>
Checks if any key-value pair in the Map satisfies the given condition.

**Kind**: instance method of [<code>RaidenCol</code>](#RaidenCol)  
**Returns**: <code>boolean</code> - True if any key-value pair satisfies the condition, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | The condition function to be applied to each key-value pair.                       It should take two arguments: key and value. |

<a name="RaidenCol+random"></a>

### raidenCol.random() ⇒
Returns a random element from the Set.

**Kind**: instance method of [<code>RaidenCol</code>](#RaidenCol)  
**Returns**: A random element from the Set.  
<a name="RaidenCol+get"></a>

### raidenCol.get(k) ⇒
Retrieves the value associated with the specified key from the Map object.

**Kind**: instance method of [<code>RaidenCol</code>](#RaidenCol)  
**Returns**: The value associated with the specified key, or undefined if the key does not exist in the Map.  

| Param | Type | Description |
| --- | --- | --- |
| k | <code>any</code> | The key of the element to retrieve. |

<a name="RaidenCol+every"></a>

### raidenCol.every(fn) ⇒ <code>boolean</code>
Checks if every element in the collection satisfies the provided testing function.

**Kind**: instance method of [<code>RaidenCol</code>](#RaidenCol)  
**Returns**: <code>boolean</code> - - True if every element passes the test, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | The testing function to apply to each element.                       It should return a boolean value indicating whether the element passes the test.                       The function is invoked with two arguments: the element value and the element key. |

<a name="RaidenCol+each"></a>

### raidenCol.each(fn) ⇒ <code>Array</code>
Executes a provided function once for each element in the array.

**Kind**: instance method of [<code>RaidenCol</code>](#RaidenCol)  
**Returns**: <code>Array</code> - - The modified array.  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | The function to execute for each element. |

<a name="RaidenCol+randomKey"></a>

### raidenCol.randomKey() ⇒
Generates a random key from the Set object.

**Kind**: instance method of [<code>RaidenCol</code>](#RaidenCol)  
**Returns**: A random key from the Set object.  
<a name="RaidenCol+equals"></a>

### raidenCol.equals(collection) ⇒ <code>boolean</code>
Checks if the current collection is equal to the given collection.

**Kind**: instance method of [<code>RaidenCol</code>](#RaidenCol)  
**Returns**: <code>boolean</code> - True if the collections are equal, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| collection | <code>Collection</code> | The collection to compare with. |

<a name="RaidenCol+difference"></a>

### raidenCol.difference(collection) ⇒ <code>Array</code>
Calculates the difference between this Set and another collection.

**Kind**: instance method of [<code>RaidenCol</code>](#RaidenCol)  
**Returns**: <code>Array</code> - - An array of values that are present in the other collection but not in this Set.If the sizes of the two collections are different, returns a string indicating the size difference.  

| Param | Type | Description |
| --- | --- | --- |
| collection | <code>Collection</code> | The collection to compare against. |

<a name="RaidenCol+findKey"></a>

### raidenCol.findKey(fn) ⇒
Finds the key in the Map object that satisfies the given function.

**Kind**: instance method of [<code>RaidenCol</code>](#RaidenCol)  
**Returns**: The key that satisfies the function, or the Map object if no key is found.  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | The function to test each key-value pair of the Map object. |

<a name="RaidenCol+sort"></a>

### raidenCol.sort([fn]) ⇒ [<code>RaidenCol</code>](#RaidenCol)
Sorts the entries in the RaidenCol object based on the provided compare function or the default compare function.

**Kind**: instance method of [<code>RaidenCol</code>](#RaidenCol)  
**Returns**: [<code>RaidenCol</code>](#RaidenCol) - - The sorted RaidenCol object.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [fn] | <code>function</code> | <code>RaidenCol.compareFunction</code> | The compare function used to determine the order of the entries. If not provided, the default compare function of the RaidenCol object will be used. |

<a name="RaidenCol+clear"></a>

### raidenCol.clear() ⇒ <code>void</code>
Clears the current state of the object by calling the clear method of the superclass.

**Kind**: instance method of [<code>RaidenCol</code>](#RaidenCol)  
<a name="RaidenCol+at"></a>

### raidenCol.at([index]) ⇒
Retrieves the element at the specified index from the collection.

**Kind**: instance method of [<code>RaidenCol</code>](#RaidenCol)  
**Returns**: The element at the specified index.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [index] | <code>number</code> | <code>0</code> | The index of the element to retrieve. Defaults to 0 if not provided. |

<a name="RaidenCol.compareFunction"></a>

### RaidenCol.compareFunction(one, two) ⇒ <code>number</code>
Compare two values and return a number indicating their relative order.

**Kind**: static method of [<code>RaidenCol</code>](#RaidenCol)  
**Returns**: <code>number</code> - - A number indicating the relative order of the values:  -1 if `one` is less than `two`,   0 if `one` is equal to `two`,   1 if `one` is greater than `two`.  

| Param | Type | Description |
| --- | --- | --- |
| one | <code>any</code> | The first value to compare. |
| two | <code>any</code> | The second value to compare. |

