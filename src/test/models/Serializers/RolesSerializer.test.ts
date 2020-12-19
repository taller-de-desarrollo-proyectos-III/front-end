import { RolesSerializer } from "$models";

describe("RolesSerializer", () => {
  it("serializes all roles by joining their names by commas", async () => {
    const commissions = [
      { uuid: "uuid", name: "firstRole", description: "first role" },
      { uuid: "uuid", name: "secondRole", description: "second role" }
    ];
    const serializedRoles = RolesSerializer.serialize(commissions);
    expect(serializedRoles).toEqual("firstRole, secondRole");
  });

  it("return an empty string if given an empty array", async () => {
    const serializedRoles = RolesSerializer.serialize([]);
    expect(serializedRoles).toEqual("");
  });
});
