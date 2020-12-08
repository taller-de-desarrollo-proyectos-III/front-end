import { CommissionsSerializer } from "$models";

describe("CommissionsSerializer", () => {
  it("serializes all commissions by joining their names by commas", async () => {
    const commissions = [
      { uuid: "uuid", name: "firstCommission" },
      { uuid: "uuid", name: "secondCommission" }
    ];
    const serializedCommissions = CommissionsSerializer.serialize(commissions);
    expect(serializedCommissions).toEqual("firstCommission,secondCommission");
  });

  it("return an empty string if given an empty array", async () => {
    const serializedCommissions = CommissionsSerializer.serialize([]);
    expect(serializedCommissions).toEqual("");
  });
});
