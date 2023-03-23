"use strict";

/**
 * It's a Map with some extra methods.
 * @class RaidenCol
 * @extends Map
 */
class RaidenCol extends Map {
  /**
   * The size() method returns the number of elements in the array
   * @returns The size of the array.
   */
  get size() {
    return super.size;
  }

  /**
   * It takes a function as an argument, and returns an array of the keys of the object, mapped to the
   * function
   * @param fn - A function that produces an element of the new Array, taking three arguments:
   */
  map(fn) {
    let array = [];
    for (let [key, val] of this) {
      array.push(key);
    }
    return array.map(fn);
  }

  /**
   * It takes a function as an argument, and returns an array of the results of that function being
   * applied to each value in the map.
   * @param fn - The function to apply to each value in the Map.
   * @returns An array of values that are returned from the function.
   */
  mapVal(fn) {
    let val = this.values();
    return Array.from(
      {
        length: this.size,
      },
      () => {
        let values = val.next();
        return fn(values.value);
      }
    ).filter((item) => item);
  }

  /**
   * If the size of the list is less than or equal to 0, return undefined. Otherwise, return the first
   * value in the list.
   * @returns The first value in the Map.
   */
  first() {
    if (this.size <= 0) return undefined;
    return this.values().next().value;
  }

  /**
   * It takes a function as an argument and returns the first value in the array that returns true when
   * passed to the function
   * @param fn - A function that returns a boolean value.
   * @returns The value of the first element in the array that satisfies the function.
   */
  find(fn) {
    for (let [key, val] of this) {
      if (fn(val)) return val;
    }
    return undefined;
  }

  /**
   * If the function passed to filter returns true, then the key/value pair is added to the new Map.
   * @param fn - The function to test each element of the map.
   * @returns A new Map object with the same keys and values as the original Map object, but with only
   * the values that pass the test implemented by the provided function.
   */
  filter(fn) {
    let result = new this.constructor[Symbol.species]();
    for (let [key, val] of this) {
      if (fn(val)) result.set(key, val);
    }
    return result;
  }

  /**
   * If the key passes the test, add it to the new Map.
   * @param fn - The function to call for each key.
   * @returns A new Map object with the same keys and values as the original Map object.
   */
  filterKey(fn) {
    let result = new this.constructor[Symbol.species]();
    for (let [key, val] of this) {
      if (fn(key)) result.set(key, val);
    }
    return result;
  }

  /**
   * It returns the last element of the array.
   * @returns The last value in the Map.
   */
  last() {
    if (this.size <= 0) return undefined;
    return Array.from(this.values())[Array.from(this.values()).length - 1];
  }

  /**
   * It returns the last key in the object.
   * @returns The last key in the object.
   */
  lastKey() {
    return this.keyArray()[this.keyArray().length - 1];
  }

  /**
   * The tap function takes a function as an argument and calls it with the current object as an
   * argument. It then returns the current object.
   * @param fn - The function to call.
   * @returns The object that was passed in.
   */
  tap(fn) {
    fn(this);
    return this;
  }

  /**
   * It checks if the key is present in the map.
   * @param k - The key of the element to test for presence in the Map object.
   * @returns The super.has(k) method is being returned.
   */
  has(k) {
    return super.has(k);
  }

  /**
   * Return an array of the values in the Map.
   * @returns An array of the values in the map.
   */
  array() {
    return Array.from(this.values());
  }

  /**
   * It returns an array of the keys in the map.
   * @returns An array of the keys in the map.
   */
  keyArray() {
    return Array.from(this.keys());
  }

  /**
   * If the first argument is an array, then check if every element in the array is in the set. If the
   * first argument is not an array, then check if every argument is in the set.
   * @param c - The array of elements to check for.
   * @returns The return value is a boolean.
   */
  hasAll(...c) {
    if (Array.isArray(c[0])) {
      return c[0].every((o) => super.has(o));
    } else {
      return c.every((o) => super.has(o));
    }
  }

  /**
   * If the first argument is an array, then check if any of the elements in the array are in the map,
   * otherwise check if any of the arguments are in the map.
   * @param keys - The keys to check for.
   * @returns The return value is a boolean.
   */
  hasAny(...keys) {
    if (Array.isArray(keys[0])) {
      return keys[0]?.some((o) => super.has(o));
    } else {
      return keys?.some((o) => super.has(o));
    }
  }

  /**
   * If the callback function returns true for any of the entries, return true, otherwise return false.
   * @param fn - A function that takes two parameters: key and value.
   */
  some(fn) {
    for (const [key, val] of this.entries()) {
      if (fn(key, val)) return true;
    }

    return false;
  }

  /**
   * It takes the values of the map, turns them into an array, and then returns a random element from
   * that array.
   * @returns a random element from the Map.
   */
  random() {
    let array = Array.from(this.values())[Math.floor(Math.random() * this.size)];
    return array;
  }

  /**
   * It returns the value of the key k.
   * @param k - The key to look up.
   * @returns The value of the key k.
   */
  get(k) {
    return super.get(k);
  }

  /**
   * It returns true if the callback function returns true for every element in the array
   * @param fn - The function to test for each element, taking two arguments:
   */
  every(fn) {
    for (let [key, val] of this) {
      if (!fn(val, key)) return false;
    }
    return true;
  }

  /**
   * The each function takes a function as an argument and calls the forEach function on the array,
   * then returns the array.
   * @param fn - The function to execute on each element.
   * @returns the array.
   */
  each(fn) {
    this.forEach(fn);
    return this;
  }

  /**
   * It returns a random key from the Map.
   * @returns The random key from the map.
   */
  randomKey() {
    return Array.from(this.keys())[Math.floor(Math.random() * this.size)];
  }

  /**
   * If the collection is not defined, return false; if the size of the collection is not equal to the
   * size of the current collection, return false; if the current collection is the same as the
   * collection, return true; if the collection does not have the key or the value is not equal to the
   * value of the collection, return false; otherwise, return true
   * @param collection - The collection to compare against.
   * @returns a boolean value.
   */
  equals(collection) {
    if (!collection) return false;
    if (this.size !== collection.size) return false;
    if (this === collection) return true;
    for (let [key, val] of this) {
      if (collection.has(key) || val !== collection.get(key)) return false;
    }
    return true;
  }

  /**
   * It returns the difference between two sets
   * @param collection - The collection to compare against.
   * @returns The difference between the two sets.
   */
  difference(collection) {
    if (this.size !== collection.size) return `size difference by: ${Math.abs(this.size - collection.size)}`;
    return Array.from(collection.keys()).filter((value) => !this.has(value));
  }

  /**
   * It takes a function as an argument and returns the first key for which the function returns true
   * @param fn - A function that takes two parameters: key and value.
   * @returns The key of the first element in the array that satisfies the provided testing function.
   */
  findKey(fn) {
    for (let [key, val] of this) {
      if (fn(key, val)) return key;
    }
    return this;
  }

  /**
   * It sorts the RaidenCol by the given function
   * @param [fn] - The function to use to sort the entries.
   * @returns The sorted map.
   */
  sort(fn = RaidenCol.compareFunction) {
    const entries = [...this.entries()];
    entries.sort((a, b) => fn(a[1], b[1], a[0], b[0]));
    super.clear();
    for (let [key, val] of entries) {
      super.set(key, val);
    }
    return this;
  }

  /**
   * The function `clear()` is a method of the `Set` class. It removes all elements from the set.
   * @returns The return value of the superclass method.
   */
  clear() {
    return super.clear();
  }

  /**
   * The at() function returns the item at the specified index in the collection.
   * @param [index=0] - The index of the item you want to get.
   * @returns The first element of the array.
   */
  at(index = 0) {
    const collectionArr = this.array();
    return collectionArr[index];
  }
  
  /**
   * If one is greater than two, return 1. If one is equal to two, return 0. If one is less than two,
   * return -1.
   * @param one - The first value to compare.
   * @param two - The second item to compare.
   */
  static compareFunction(one, two) {
    return Number(one > two || one === two) - 1;
  }
}

module.exports.RaidenCol = RaidenCol;
