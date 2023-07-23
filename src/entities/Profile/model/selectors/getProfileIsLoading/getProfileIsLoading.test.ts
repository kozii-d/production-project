import { StateSchema } from "app/providers/StoreProvider";

import { getProfileIsLoading } from "./getProfileIsLoading";

describe("getProfileIsLoading", () => {
  test("Should return profile isLoading state from state", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: true,
      },
    };

    expect(getProfileIsLoading(state as StateSchema)).toBe(true);
  });

  test("Should return false if profile state is not present", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileIsLoading(state as StateSchema)).toBe(false);
  });
});
