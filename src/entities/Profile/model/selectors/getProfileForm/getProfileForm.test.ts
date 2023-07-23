import { Country } from "entities/Country";
import { Currency } from "entities/Currency";

import {
  StateSchema,
} from "app/providers/StoreProvider";

import { Profile } from "../../types/profile";

import { getProfileForm } from "./getProfileForm";

describe("getProfileForm", () => {
  test("Should return profile form from state", () => {
    const profileForm: Profile = {
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
        form: profileForm,
      },
    };

    expect(getProfileForm(state as StateSchema)).toEqual(profileForm);
  });

  test("Should return undefined if profile form is not present in state", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: undefined,
      },
    };

    expect(getProfileForm(state as StateSchema)).toBeUndefined();
  });

  test("Should return undefined if profile state is not present", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileForm(state as StateSchema)).toBeUndefined();
  });
});
