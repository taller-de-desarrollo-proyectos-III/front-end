export const RegExBuilder = {
  phoneNumber: () =>
    new RegExp(
      "^(\\+?\\d{0,4})?\\s?-?\\s?(\\(?\\d{3}\\)?)\\s?-?\\s?(\\(?\\d{3}\\)?)\\s?-?\\s?(\\(?\\d{4}\\)?)?$"
    )
};
