import { VolunteerSerializer } from "$models";

describe("VolunteerSerializer", () => {
  const volunteerAttributes = {
    uuid: "uuid",
    dni: "33333333",
    name: "John",
    surname: "Doe",
    email: "johnDoe@gmail.com",
    linkedin: "John Doe ",
    phoneNumber: "116528767",
    telegram: "@JohnD",
    admissionYear: "2016",
    graduationYear: "2016",
    country: "Argentina"
  };

  it("serializes a volunteer with commissions an roles", async () => {
    const volunteer = {
      ...volunteerAttributes,
      commissions: [
        { uuid: "uuid", name: "firstCommission" },
        { uuid: "uuid", name: "secondCommission" }
      ],
      roles: [
        { uuid: "uuid", name: "firstRole" },
        { uuid: "uuid", name: "secondRole" }
      ]
    };
    const serializedVolunteer = VolunteerSerializer.serialize(volunteer);
    const { uuid, commissions, roles, ...attributes } = volunteer;
    expect(serializedVolunteer).toEqual({
      ...attributes,
      commissions: "firstCommission,secondCommission",
      roles: "firstRole,secondRole"
    });
  });

  it("serializes a volunteer with no commissions nor roles", async () => {
    const volunteer = { ...volunteerAttributes, commissions: [], roles: [] };
    const serializedVolunteer = VolunteerSerializer.serialize(volunteer);
    const { uuid, ...attributes } = volunteerAttributes;
    expect(serializedVolunteer).toEqual({ ...attributes, commissions: "", roles: "" });
  });
});
