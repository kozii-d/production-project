import { Country } from "entities/Country";

import { Profile, ValidateProfileError } from "../../types/profile";

import { validateProfileData } from "./validateProfileData";

describe("validateProfileData", () => {
  test("should return an error if no profile data is provided", () => {
    const errors = validateProfileData();
    expect(errors).toEqual([ValidateProfileError.NO_DATA]);
  });

  test("should return an error if first name is missing", () => {
    const profile: Profile = {
      lastname: "Doe",
      age: 25,
      country: Country.France,
    };

    const errors = validateProfileData(profile);
    expect(errors).toContain(ValidateProfileError.INCORRECT_USER_DATA);
  });

  test("should return an error if last name is missing", () => {
    const profile: Profile = {
      first: "John",
      age: 25,
      country: Country.France,
    };

    const errors = validateProfileData(profile);
    expect(errors).toContain(ValidateProfileError.INCORRECT_USER_DATA);
  });

  test("should return an error if age is not an integer", () => {
    const profile: Profile = {
      first: "John",
      lastname: "Doe",
      age: 25.5,
      country: Country.Ukraine,
    };

    const errors = validateProfileData(profile);
    expect(errors).toContain(ValidateProfileError.INCORRECT_AGE);
  });

  test("should return an error if country is missing", () => {
    const profile: Profile = {
      first: "John",
      lastname: "Doe",
      age: 25,
    };

    const errors = validateProfileData(profile);
    expect(errors).toContain(ValidateProfileError.INCORRECT_COUNTRY);
  });

  test("should return an empty array if all profile data is valid", () => {
    const profile: Profile = {
      first: "John",
      lastname: "Doe",
      age: 25,
      country: Country.Germany,
    };

    const errors = validateProfileData(profile);
    expect(errors).toEqual([]);
  });

  test("should return errors if profile data is an empty object", () => {
    const profile = {};

    const errors = validateProfileData(profile);
    expect(errors).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });
});
