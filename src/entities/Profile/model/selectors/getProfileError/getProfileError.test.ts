import { StateSchema } from "app/providers/StoreProvider";

import { getProfileError } from "./getProfileError";

describe("getProfileError", () => {
  test("Should return profile error from state", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: "Something went wrong",
      },
    };

    expect(getProfileError(state as StateSchema)).toEqual("Something went wrong");
  });

  test("Should return undefined if profile error is not present in state", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: undefined,
      },
    };

    expect(getProfileError(state as StateSchema)).toBeUndefined();
  });

  test("Should return undefined if profile state is not present", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileError(state as StateSchema)).toBeUndefined();
  });
});
