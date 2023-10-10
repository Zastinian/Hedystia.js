/**
 * Class representing a select menu component.
 * @class
 */
class SelectMenu {
  /**
   * Create a select menu.
   * @param {Object} options - The options for the select menu.
   * @param {string} options.customid - The custom ID for the select menu.
   * @param {string} options.placeholder - The placeholder text for the select menu.
   * @param {boolean} [options.disabled=false] - Whether the select menu is disabled.
   * @param {number} [options.minvalues=1] - The minimum number of values that can be selected.
   * @param {number} [options.maxvalues=1] - The maximum number of values that can be selected.
   * @param {Array} [options.options] - The options for the select menu.
   * @returns {Object} - The select menu component.
   */
  constructor({type, customid, placeholder, disabled, minvalues, maxvalues, options}) {
    this.type = type ?? 3;
    this.customid = customid ?? undefined;
    this.placeholder = placeholder ?? undefined;
    this.disabled = disabled ?? false;
    this.minvalues = minvalues ?? 1;
    this.maxvalues = maxvalues ?? 1;
    this.options = options ?? undefined;
    let select = {
      type: this.type,
      custom_id: this.customid,
      placeholder: this.placeholder,
      options: this.options,
      min_values: this.minvalues,
      max_values: this.maxvalues,
      disabled: this.disabled,
    };
    return select;
  }
}

module.exports = SelectMenu;
