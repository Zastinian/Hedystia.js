<a name="RaidenCol"></a>

## RaidenCol ⇐ <code>Map</code>
**Kind**: global class  
**Extends**: <code>Map</code>  

* [RaidenCol](#RaidenCol) ⇐ <code>Map</code>
    * [new RaidenCol()](#new_RaidenCol_new)
    * _instance_
        * [.size](#RaidenCol+size) ⇒
        * [.map(fn)](#RaidenCol+map)
        * [.mapVal(fn)](#RaidenCol+mapVal) ⇒
        * [.first()](#RaidenCol+first) ⇒
        * [.find(fn)](#RaidenCol+find) ⇒
        * [.filter(fn)](#RaidenCol+filter) ⇒
        * [.filterKey(fn)](#RaidenCol+filterKey) ⇒
        * [.last()](#RaidenCol+last) ⇒
        * [.lastKey()](#RaidenCol+lastKey) ⇒
        * [.tap(fn)](#RaidenCol+tap) ⇒
        * [.has(k)](#RaidenCol+has) ⇒
        * [.array()](#RaidenCol+array) ⇒
        * [.keyArray()](#RaidenCol+keyArray) ⇒
        * [.hasAll(...c)](#RaidenCol+hasAll) ⇒
        * [.hasAny(...keys)](#RaidenCol+hasAny) ⇒
        * [.some(fn)](#RaidenCol+some)
        * [.random()](#RaidenCol+random) ⇒
        * [.get(k)](#RaidenCol+get) ⇒
        * [.every(fn)](#RaidenCol+every)
        * [.each(fn)](#RaidenCol+each) ⇒
        * [.randomKey()](#RaidenCol+randomKey) ⇒
        * [.equals(collection)](#RaidenCol+equals) ⇒
        * [.difference(collection)](#RaidenCol+difference) ⇒
        * [.findKey(fn)](#RaidenCol+findKey) ⇒
        * [.sort([fn])](#RaidenCol+sort) ⇒
        * [.clear()](#RaidenCol+clear) ⇒
        * [.at([index])](#RaidenCol+at) ⇒
    * _static_
        * [.compareFunction(one, two)](#RaidenCol.compareFunction)

<a name="new_RaidenCol_new"></a>

### new RaidenCol()
It's a Map with some extra methods.

<a name="RaidenCol+size"></a>

### raidenCol.size ⇒
The size() method returns the number of elements in the array

**Kind**: instance property of [<code>RaidenCol</code>](#RaidenCol)  
**Returns**: The size of the array.  
<a name="RaidenCol+map"></a>

### raidenCol.map(fn)
It takes a function as an argument, and returns an array of the keys of the object, mapped to thefunction

**Kind**: instance method of [<code>RaidenCol</code>](#RaidenCol)  

| Param | Description |
| --- | --- |
| fn | A function that produces an element of the new Array, taking three arguments: |

<a name="RaidenCol+mapVal"></a>

### raidenCol.mapVal(fn) ⇒
It takes a function as an argument, and returns an array of the results of that function beingapplied to each value in the map.

**Kind**: instance method of [<code>RaidenCol</code>](#RaidenCol)  
**Returns**: An array of values that are returned from the function.  

| Param | Description |
| --- | --- |
| fn | The function to apply to each value in the Map. |

<a name="RaidenCol+first"></a>

### raidenCol.first() ⇒
If the size of the list is less than or equal to 0, return undefined. Otherwise, return the firstvalue in the list.

**Kind**: instance method of [<code>RaidenCol</code>](#RaidenCol)  
**Returns**: The first value in the Map.  
<a name="RaidenCol+find"></a>

### raidenCol.find(fn) ⇒
It takes a function as an argument and returns the first value in the array that returns true whenpassed to the function

**Kind**: instance method of [<code>RaidenCol</code>](#RaidenCol)  
**Returns**: The value of the first element in the array that satisfies the function.  

| Param | Description |
| --- | --- |
| fn | A function that returns a boolean value. |

<a name="RaidenCol+filter"></a>

### raidenCol.filter(fn) ⇒
If the function passed to filter returns true, then the key/value pair is added to the new Map.

**Kind**: instance method of [<code>RaidenCol</code>](#RaidenCol)  
**Returns**: A new Map object with the same keys and values as the original Map object, but with onlythe values that pass the test implemented by the provided function.  

| Param | Description |
| --- | --- |
| fn | The function to test each element of the map. |

<a name="RaidenCol+filterKey"></a>

### raidenCol.filterKey(fn) ⇒
If the key passes the test, add it to the new Map.

**Kind**: instance method of [<code>RaidenCol</code>](#RaidenCol)  
**Returns**: A new Map object with the same keys and values as the original Map object.  

| Param | Description |
| --- | --- |
| fn | The function to call for each key. |

<a name="RaidenCol+last"></a>

### raidenCol.last() ⇒
It returns the last element of the array.

**Kind**: instance method of [<code>RaidenCol</code>](#RaidenCol)  
**Returns**: The last value in the Map.  
<a name="RaidenCol+lastKey"></a>

### raidenCol.lastKey() ⇒
It returns the last key in the object.

**Kind**: instance method of [<code>RaidenCol</code>](#RaidenCol)  
**Returns**: The last key in the object.  
<a name="RaidenCol+tap"></a>

### raidenCol.tap(fn) ⇒
The tap function takes a function as an argument and calls it with the current object as anargument. It then returns the current object.

**Kind**: instance method of [<code>RaidenCol</code>](#RaidenCol)  
**Returns**: The object that was passed in.  

| Param | Description |
| --- | --- |
| fn | The function to call. |

<a name="RaidenCol+has"></a>

### raidenCol.has(k) ⇒
It checks if the key is present in the map.

**Kind**: instance method of [<code>RaidenCol</code>](#RaidenCol)  
**Returns**: The super.has(k) method is being returned.  

| Param | Description |
| --- | --- |
| k | The key of the element to test for presence in the Map object. |

<a name="RaidenCol+array"></a>

### raidenCol.array() ⇒
Return an array of the values in the Map.

**Kind**: instance method of [<code>RaidenCol</code>](#RaidenCol)  
**Returns**: An array of the values in the map.  
<a name="RaidenCol+keyArray"></a>

### raidenCol.keyArray() ⇒
It returns an array of the keys in the map.

**Kind**: instance method of [<code>RaidenCol</code>](#RaidenCol)  
**Returns**: An array of the keys in the map.  
<a name="RaidenCol+hasAll"></a>

### raidenCol.hasAll(...c) ⇒
If the first argument is an array, then check if every element in the array is in the set. If thefirst argument is not an array, then check if every argument is in the set.

**Kind**: instance method of [<code>RaidenCol</code>](#RaidenCol)  
**Returns**: The return value is a boolean.  

| Param | Description |
| --- | --- |
| ...c | The array of elements to check for. |

<a name="RaidenCol+hasAny"></a>

### raidenCol.hasAny(...keys) ⇒
If the first argument is an array, then check if any of the elements in the array are in the map,otherwise check if any of the arguments are in the map.

**Kind**: instance method of [<code>RaidenCol</code>](#RaidenCol)  
**Returns**: The return value is a boolean.  

| Param | Description |
| --- | --- |
| ...keys | The keys to check for. |

<a name="RaidenCol+some"></a>

### raidenCol.some(fn)
If the callback function returns true for any of the entries, return true, otherwise return false.

**Kind**: instance method of [<code>RaidenCol</code>](#RaidenCol)  

| Param | Description |
| --- | --- |
| fn | A function that takes two parameters: key and value. |

<a name="RaidenCol+random"></a>

### raidenCol.random() ⇒
It takes the values of the map, turns them into an array, and then returns a random element fromthat array.

**Kind**: instance method of [<code>RaidenCol</code>](#RaidenCol)  
**Returns**: a random element from the Map.  
<a name="RaidenCol+get"></a>

### raidenCol.get(k) ⇒
It returns the value of the key k.

**Kind**: instance method of [<code>RaidenCol</code>](#RaidenCol)  
**Returns**: The value of the key k.  

| Param | Description |
| --- | --- |
| k | The key to look up. |

<a name="RaidenCol+every"></a>

### raidenCol.every(fn)
It returns true if the callback function returns true for every element in the array

**Kind**: instance method of [<code>RaidenCol</code>](#RaidenCol)  

| Param | Description |
| --- | --- |
| fn | The function to test for each element, taking two arguments: |

<a name="RaidenCol+each"></a>

### raidenCol.each(fn) ⇒
The each function takes a function as an argument and calls the forEach function on the array,then returns the array.

**Kind**: instance method of [<code>RaidenCol</code>](#RaidenCol)  
**Returns**: the array.  

| Param | Description |
| --- | --- |
| fn | The function to execute on each element. |

<a name="RaidenCol+randomKey"></a>

### raidenCol.randomKey() ⇒
It returns a random key from the Map.

**Kind**: instance method of [<code>RaidenCol</code>](#RaidenCol)  
**Returns**: The random key from the map.  
<a name="RaidenCol+equals"></a>

### raidenCol.equals(collection) ⇒
If the collection is not defined, return false; if the size of the collection is not equal to thesize of the current collection, return false; if the current collection is the same as thecollection, return true; if the collection does not have the key or the value is not equal to thevalue of the collection, return false; otherwise, return true

**Kind**: instance method of [<code>RaidenCol</code>](#RaidenCol)  
**Returns**: a boolean value.  

| Param | Description |
| --- | --- |
| collection | The collection to compare against. |

<a name="RaidenCol+difference"></a>

### raidenCol.difference(collection) ⇒
It returns the difference between two sets

**Kind**: instance method of [<code>RaidenCol</code>](#RaidenCol)  
**Returns**: The difference between the two sets.  

| Param | Description |
| --- | --- |
| collection | The collection to compare against. |

<a name="RaidenCol+findKey"></a>

### raidenCol.findKey(fn) ⇒
It takes a function as an argument and returns the first key for which the function returns true

**Kind**: instance method of [<code>RaidenCol</code>](#RaidenCol)  
**Returns**: The key of the first element in the array that satisfies the provided testing function.  

| Param | Description |
| --- | --- |
| fn | A function that takes two parameters: key and value. |

<a name="RaidenCol+sort"></a>

### raidenCol.sort([fn]) ⇒
It sorts the RaidenCol by the given function

**Kind**: instance method of [<code>RaidenCol</code>](#RaidenCol)  
**Returns**: The sorted map.  

| Param | Description |
| --- | --- |
| [fn] | The function to use to sort the entries. |

<a name="RaidenCol+clear"></a>

### raidenCol.clear() ⇒
The function `clear()` is a method of the `Set` class. It removes all elements from the set.

**Kind**: instance method of [<code>RaidenCol</code>](#RaidenCol)  
**Returns**: The return value of the superclass method.  
<a name="RaidenCol+at"></a>

### raidenCol.at([index]) ⇒
The at() function returns the item at the specified index in the collection.

**Kind**: instance method of [<code>RaidenCol</code>](#RaidenCol)  
**Returns**: The first element of the array.  

| Param | Default | Description |
| --- | --- | --- |
| [index] | <code>0</code> | The index of the item you want to get. |

<a name="RaidenCol.compareFunction"></a>

### RaidenCol.compareFunction(one, two)
If one is greater than two, return 1. If one is equal to two, return 0. If one is less than two,return -1.

**Kind**: static method of [<code>RaidenCol</code>](#RaidenCol)  

| Param | Description |
| --- | --- |
| one | The first value to compare. |
| two | The second item to compare. |

