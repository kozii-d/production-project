import { Country } from "entities/Country";
import { Currency } from "entities/Currency";

import { StateSchema } from "app/providers/StoreProvider";

import { Profile } from "../../types/profile";

import { getProfileData } from "./getProfileData";

describe("getProfileData", () => {
  test("Should return profile data from state", () => {
    const profileData: Profile = {
      first: "John",
      lastname: "Doe",
      age: 25,
      city: "Berlin",
      username: "johndoe",
      currency: Currency.EUR,
      country: Country.Germany,
    };

    const state: DeepPartial<StateSchema> = {
      profile: {
        data: profileData,
      },
    };

    expect(getProfileData(state as StateSchema)).toEqual(profileData);
  });

  test("Should return undefined if profile data is not present in state", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        data: undefined,
      },
    };

    expect(getProfileData(state as StateSchema)).toBeUndefined();
  });

  test("Should return undefined if profile state is not present", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileData(state as StateSchema)).toBeUndefined();
  });
});
