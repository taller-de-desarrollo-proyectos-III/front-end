import { RegExBuilder } from "$models/RegExBuilder";

describe("RegExBuilder positive test", () => {
  it("validates 8 digits phone numbers", () => {
    expect("12345678").toMatch(RegExBuilder.phoneNumber());
  });

  it("validates 8 digits phone numbers with area code", () => {
    expect("01123456789").toMatch(RegExBuilder.phoneNumber());
  });

  it("validates 10 digits phone numbers", () => {
    expect("1123456789").toMatch(RegExBuilder.phoneNumber());
  });

  it("validates 10 digits phone numbers with country code", () => {
    expect("541123456789").toMatch(RegExBuilder.phoneNumber());
  });

  it("validates 10 digits phone numbers with area and country code", () => {
    expect("5491123456789").toMatch(RegExBuilder.phoneNumber());
  });

  it("validates 10 digits phone numbers with area and country code and plus sign", () => {
    expect("+5491123456789").toMatch(RegExBuilder.phoneNumber());
  });

  it("validates 10 digits phone numbers with area code", () => {
    expect("91123456789").toMatch(RegExBuilder.phoneNumber());
  });

  it("validates USA standard phone numbers with country code and plus sign", () => {
    expect("+19142329901").toMatch(RegExBuilder.phoneNumber());
  });

  it("validates UK standard phone numbers with country code and plus sign", () => {
    expect("+442087599036").toMatch(RegExBuilder.phoneNumber());
  });
});

describe("RegExBuilder negative test", () => {
  it("returns false if the value contains a leading invalid character", () => {
    expect(RegExBuilder.phoneNumber().test("a12345678")).toBe(false);
  });

  it("returns false if the value contains a hyphen", () => {
    expect(RegExBuilder.phoneNumber().test("1234-5678")).toBe(false);
  });

  it("returns false if the value contains a traling invalid character", () => {
    expect(RegExBuilder.phoneNumber().test("12345678a")).toBe(false);
  });

  it("returns false if the value contains a duplicated plus sign", () => {
    expect(RegExBuilder.phoneNumber().test("++5412345678")).toBe(false);
  });
});
