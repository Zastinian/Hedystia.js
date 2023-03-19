/**
 * A row of buttons to be added to a message component.
 * @class
 */
class Row {
  /**
   * @param {Object} [data={}] - The data for the row.
   * @param {Array<Object>} [data.components] - An array of button components to be included in the row.
   */
  constructor(data = {}) {
    /**
     * An array of button components included in the row.
     * @type {Array<Object>}
     */
    this.components = data.components;
    let row = {
      type: 1,
      components: this.components,
    };
    return row;
  }
}

module.exports = Row;
