import { RolesSerializer } from "$models";

describe("RolesSerializer", () => {
  it("serializes all roles by joining their names by commas", async () => {
    const roles = [
      { uuid: "uuid", name: "firstRole" },
      { uuid: "uuid", name: "secondRole" }
    ];
    const serializedRoles = RolesSerializer.serialize(roles);
    expect(serializedRoles).toEqual("firstRole, secondRole");
  });

  it("return an empty string if given an empty array", async () => {
    const serializedRoles = RolesSerializer.serialize([]);
    expect(serializedRoles).toEqual("");
  });
});
