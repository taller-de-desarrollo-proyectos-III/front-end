import { nullToUndefined } from "$models";

describe("nullToUndefined", () => {
  it("replaces a null value to undefined in the given object", async () => {
    expect(nullToUndefined({ a: "", b: null })).toEqual({ a: "", b: undefined });
  });

  it("returns undefined if given a null value", async () => {
    expect(nullToUndefined(null)).toEqual(undefined);
  });

  it("replaces a null element of an array to undefined", async () => {
    expect(nullToUndefined([1, "something", null])).toEqual([1, "something", undefined]);
  });

  it("replaces a null element of an array inside an object to undefined", async () => {
    expect(nullToUndefined({ a: "value", array: [1, "something", null] })).toEqual({
      a: "value",
      array: [1, "something", undefined]
    });
  });
});
