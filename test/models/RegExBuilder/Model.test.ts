import { RegExBuilder } from "$models/RegExBuilder";

describe("RegExBuilder", () => {
  it("validates different phone numbers formats", () => {
    expect("12345678").toMatch(RegExBuilder.phoneNumber());
    expect("01123456789").toMatch(RegExBuilder.phoneNumber());
    expect("1123456789").toMatch(RegExBuilder.phoneNumber());
    expect("541123456789").toMatch(RegExBuilder.phoneNumber());
    expect("5491123456789").toMatch(RegExBuilder.phoneNumber());
    expect("+5491123456789").toMatch(RegExBuilder.phoneNumber());
    expect("91123456789").toMatch(RegExBuilder.phoneNumber());
    expect("+19142329901").toMatch(RegExBuilder.phoneNumber());
    expect("+442087599036").toMatch(RegExBuilder.phoneNumber());
  });

  it("validates invalid phone numbers formats for negative output", () => {
    expect("a12345678".match(RegExBuilder.phoneNumber())).toBeFalsy();
    expect("1234-5678".match(RegExBuilder.phoneNumber())).toBeFalsy();
    expect("12345678a".match(RegExBuilder.phoneNumber())).toBeFalsy();
    expect("++5412345678".match(RegExBuilder.phoneNumber())).toBeFalsy();
  });
});
