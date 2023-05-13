import { StateSchema } from "app/providers/StoreProvider";
import { getProfileReadonly } from "./getProfileReadonly";

describe("getProfileReadonly", () => {
  test("Should return profile readonly state from state", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: false,
      },
    };

    expect(getProfileReadonly(state as StateSchema)).toBe(false);
  });

  test("Should return true if profile state is not present", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileReadonly(state as StateSchema)).toBe(true);
  });
});
