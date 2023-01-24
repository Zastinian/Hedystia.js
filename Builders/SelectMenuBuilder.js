class SelectMenu {
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

export default SelectMenu;
