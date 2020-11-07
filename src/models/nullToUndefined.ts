import { isPlainObject, mapValues, isArray } from "lodash";

export const nullToUndefined = <Value>(value: Value): Value => {
  if (isPlainObject(value)) {
    return (mapValues((value as unknown) as object, nullToUndefined) as unknown) as Value;
  }
  if (isArray(value)) return (value.map(nullToUndefined) as unknown) as Value;
  if (value === null) return (undefined as unknown) as Value;
  return value;
};
