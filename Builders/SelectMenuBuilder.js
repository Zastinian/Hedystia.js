/* It takes in an object with the following properties: customid, placeholder, disabled, minvalues,
maxvalues, options. It then assigns the properties to the object's properties. It then returns an
object with the following properties: type, custom_id, placeholder, options, min_values, max_values,
disabled. The problem is that I want to be able to pass in an object with the following properties:
customid, placeholder, disabled, minvalues, maxvalues, options. I want to be able to pass in an
object with the following properties: customid, placeholder, disabled, minvalues, maxvalues,
options. I want to be able to pass in an object with the following properties: customid,
placeholder, disabled, minvalues, maxvalues, options. I want to be able to pass in an object with
the following properties: customid, placeholder, disabled, minvalues, maxvalues, options. I want to
be able to pass in an object */
class SelectMenu {
  /**
   * It takes in an object with the following properties: customid, placeholder, disabled, minvalues,
   * maxvalues, options.
   *
   * It then assigns the properties to the object's properties.
   *
   * It then returns an object with the following properties: type, custom_id, placeholder, options,
   * min_values, max_values, disabled.
   *
   * The problem is that I want to be able to pass in an object with the following properties: customid,
   * placeholder, disabled, minvalues, maxvalues, options.
   *
   * I want to be able to pass in an object with the following properties: customid, placeholder,
   * disabled, minvalues, maxvalues, options.
   *
   * I want to be able to pass in an object with the following properties: customid, placeholder,
   * disabled, minvalues, maxvalues, options.
   *
   * I want to be able to pass in an object with
   * @returns The object that is being returned is the object that is being created.
   */
  constructor({customid, placeholder, disabled, minvalues, maxvalues, options}) {
    this.customid = customid ?? undefined;
    this.placeholder = placeholder ?? undefined;
    this.disabled = disabled ?? false;
    this.minvalues = minvalues ?? 1;
    this.maxvalues = maxvalues ?? 1;
    this.options = options ?? undefined;
    let select = {
      type: 3,
      custom_id: this.customid,
      placeholder: this.placeholder,
      options: this.options,
      min_values: this.min_values,
      max_values: this.max_values,
      disabled: this.disabled,
    };
    return select;
  }
}

module.exports = SelectMenu;
