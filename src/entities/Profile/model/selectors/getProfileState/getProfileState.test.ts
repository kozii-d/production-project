import { ProfileSchema } from "entities/Profile";

import { StateSchema } from "app/providers/StoreProvider";

import { initialState } from "../../slice/initialState";

import { getProfileState } from "./getProfileState";

describe("getProfileState", () => {
  test("Should return profile state from state", () => {
    const profileState: ProfileSchema = {
      data: { first: "John", age: 25 },
      isLoading: false,
      error: "Error message",
      readonly: true,
    };

    const state: DeepPartial<StateSchema> = {
      profile: profileState,
    };

    expect(getProfileState(state as StateSchema)).toEqual(profileState);
  });

  test("Should return initial state if profile state is not present in state", () => {
    expect(getProfileState({} as StateSchema)).toEqual(initialState);
  });
});
