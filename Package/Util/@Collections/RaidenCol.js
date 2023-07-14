"use strict";

/**
 * A custom implementation of a Map with additional utility methods.
 * @class RaidenCol
 * @extends Map
 */
class RaidenCol extends Map {
  /**
   * Get the size of the Map object.
   * @returns {number} The number of key-value pairs in the Map object.
   */
  get size() {
    return super.size;
  }

  /**
   * Maps over the elements of the Map object and applies a function to each element.
   * @param {Function} fn - The function to apply to each element.
   * @returns {Array} - An array containing the results of applying the function to each element.
   */
  map(fn) {
    let array = [];
    for (let [key, val] of this) {
      array.push(key);
    }
    return array.map(fn);
  }

  /**
   * Maps each value in the Map object using the provided function and returns an array of the mapped values.
   * @param {Function} fn - The function to apply to each value in the Map object.
   * @returns {Array} - An array of the mapped values.
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
   * Returns the first element in the collection.
   * @returns {any | undefined} The first element in the collection, or undefined if the collection is empty.
   */
  first() {
    if (this.size <= 0) return undefined;
    return this.values().next().value;
  }

  /**
   * Finds the first value in the Map that satisfies the provided testing function.
   * @param {Function} fn - The testing function. It should return true if the value satisfies the condition, false otherwise.
   * @returns The first value that satisfies the condition, or undefined if no value satisfies the condition.
   */
  find(fn) {
    for (let [key, val] of this) {
      if (fn(val)) return val;
    }
    return undefined;
  }

  /**
   * Creates a new instance of the same class and returns a filtered version of the current instance.
   * @param {Function} fn - The filter function to apply to each value in the instance.
   * @returns {Object} - A new instance of the same class with the filtered values.
   */
  filter(fn) {
    let result = new this.constructor[Symbol.species]();
    for (let [key, val] of this) {
      if (fn(val)) result.set(key, val);
    }
    return result;
  }

  /**
   * Filters the key-value pairs of a Map object based on a given function.
   * @param {Function} fn - The function used to filter the keys.
   * @returns A new Map object containing the filtered key-value pairs.
   */
  filterKey(fn) {
    let result = new this.constructor[Symbol.species]();
    for (let [key, val] of this) {
      if (fn(key)) result.set(key, val);
    }
    return result;
  }

  /**
   * Returns the last element in the set.
   * @returns {any} The last element in the set, or undefined if the set is empty.
   */
  last() {
    if (this.size <= 0) return undefined;
    return Array.from(this.values())[Array.from(this.values()).length - 1];
  }

  /**
   * Returns the last key in the keyArray.
   * @returns The last key in the keyArray.
   */
  lastKey() {
    return this.keyArray()[this.keyArray().length - 1];
  }

  /**
   * Executes a function with the current object as its argument and returns the object itself.
   * @param {Function} fn - The function to be executed.
   * @returns {Object} - The current object.
   */
  tap(fn) {
    fn(this);
    return this;
  }

  /**
   * Checks if the specified key is present in the Map object.
   * @param {any} k - The key to check for.
   * @returns {boolean} - True if the key is present, false otherwise.
   */
  has(k) {
    return super.has(k);
  }

  /**
   * Returns an array containing all the values of the current object.
   * @returns {Array} - An array containing all the values of the object.
   */
  array() {
    return Array.from(this.values());
  }

  /**
   * Returns an array containing all the keys in the Map object.
   * @returns {Array} An array containing all the keys in the Map object.
   */
  keyArray() {
    return Array.from(this.keys());
  }

  /**
   * Checks if all the given elements are present in the set.
   * @param {...any} c - The elements to check for presence in the set.
   * @returns {boolean} - True if all elements are present, false otherwise.
   */
  hasAll(...c) {
    if (Array.isArray(c[0])) {
      return c[0].every((o) => super.has(o));
    } else {
      return c.every((o) => super.has(o));
    }
  }

  /**
   * Checks if any of the given keys exist in the Map.
   * @param {...any} keys - The keys to check for existence in the Map.
   * @returns {boolean} - True if any of the keys exist in the Map, false otherwise.
   */
  hasAny(...keys) {
    if (Array.isArray(keys[0])) {
      return keys[0]?.some((o) => super.has(o));
    } else {
      return keys?.some((o) => super.has(o));
    }
  }

  /**
   * Checks if any key-value pair in the Map satisfies the given condition.
   * @param {Function} fn - The condition function to be applied to each key-value pair.
   *                       It should take two arguments: key and value.
   * @returns {boolean} True if any key-value pair satisfies the condition, false otherwise.
   */
  some(fn) {
    for (const [key, val] of this.entries()) {
      if (fn(key, val)) return true;
    }
    return false;
  }

  /**
   * Returns a random element from the Set.
   * @returns A random element from the Set.
   */
  random() {
    let array = Array.from(this.values())[Math.floor(Math.random() * this.size)];
    return array;
  }

  /**
   * Retrieves the value associated with the specified key from the Map object.
   * @param {any} k - The key of the element to retrieve.
   * @returns The value associated with the specified key, or undefined if the key does not exist in the Map.
   */
  get(k) {
    return super.get(k);
  }

  /**
   * Checks if every element in the collection satisfies the provided testing function.
   * @param {Function} fn - The testing function to apply to each element.
   *                       It should return a boolean value indicating whether the element passes the test.
   *                       The function is invoked with two arguments: the element value and the element key.
   * @returns {boolean} - True if every element passes the test, false otherwise.
   */
  every(fn) {
    for (let [key, val] of this) {
      if (!fn(val, key)) return false;
    }
    return true;
  }

  /**
   * Executes a provided function once for each element in the array.
   * @param {function} fn - The function to execute for each element.
   * @returns {Array} - The modified array.
   */
  each(fn) {
    this.forEach(fn);
    return this;
  }

  /**
   * Generates a random key from the Set object.
   * @returns A random key from the Set object.
   */
  randomKey() {
    return Array.from(this.keys())[Math.floor(Math.random() * this.size)];
  }

  /**
   * Checks if the current collection is equal to the given collection.
   * @param {Collection} collection - The collection to compare with.
   * @returns {boolean} True if the collections are equal, false otherwise.
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
   * Calculates the difference between this Set and another collection.
   * @param {Collection} collection - The collection to compare against.
   * @returns {Array} - An array of values that are present in the other collection but not in this Set.
   * If the sizes of the two collections are different, returns a string indicating the size difference.
   */
  difference(collection) {
    if (this.size !== collection.size) return `size difference by: ${Math.abs(this.size - collection.size)}`;
    return Array.from(collection.keys()).filter((value) => !this.has(value));
  }

  /**
   * Finds the key in the Map object that satisfies the given function.
   * @param {Function} fn - The function to test each key-value pair of the Map object.
   * @returns The key that satisfies the function, or the Map object if no key is found.
   */
  findKey(fn) {
    for (let [key, val] of this) {
      if (fn(key, val)) return key;
    }
    return this;
  }

  /**
   * Sorts the entries in the RaidenCol object based on the provided compare function or the default compare function.
   * @param {function} [fn=RaidenCol.compareFunction] - The compare function used to determine the order of the entries. If not provided, the default compare function of the RaidenCol object will be used.
   * @returns {RaidenCol} - The sorted RaidenCol object.
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
   * Clears the current state of the object by calling the clear method of the superclass.
   * @returns {void}
   */
  clear() {
    return super.clear();
  }

  /**
   * Retrieves the element at the specified index from the collection.
   * @param {number} [index=0] - The index of the element to retrieve. Defaults to 0 if not provided.
   * @returns The element at the specified index.
   */
  at(index = 0) {
    const collectionArr = this.array();
    return collectionArr[index];
  }

  /**
   * Compare two values and return a number indicating their relative order.
   * @param {any} one - The first value to compare.
   * @param {any} two - The second value to compare.
   * @returns {number} - A number indicating the relative order of the values:
   *   -1 if `one` is less than `two`,
   *    0 if `one` is equal to `two`,
   *    1 if `one` is greater than `two`.
   */
  static compareFunction(one, two) {
    return Number(one > two || one === two) - 1;
  }
}

module.exports.RaidenCol = RaidenCol;
