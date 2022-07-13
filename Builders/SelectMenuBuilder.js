class SelectMenu {
  constructor({
    customid,
    placeholder,
    disabled,
    minvalues,
    maxvalues,
    options,
  }) {
    this.customid = customid;
    this.placeholder = placeholder;
    this.disabled = disabled;
    this.minvalues = minvalues;
    this.maxvalues = maxvalues;
    this.options = options;
    if (!this.customid) this.customid = "";
    if (!this.placeholder) this.placeholder = "";
    if (!this.disabled) this.disabled = false;
    if (!this.minvalues) this.minvalues = 1;
    if (!this.maxvalues) this.maxvalues = 1;
    if (!this.options) this.options = "";
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
