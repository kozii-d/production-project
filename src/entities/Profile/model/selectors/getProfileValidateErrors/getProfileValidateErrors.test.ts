import { StateSchema } from "app/providers/StoreProvider";

import { ValidateProfileError } from "../../types/profile";

import { getProfileValidateErrors } from "./getProfileValidateErrors";

describe("getProfileValidateErrors", () => {
  test("Should return profile validateErrors from state", () => {
    const validateErrors: ValidateProfileError[] = [
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
    ];

    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors,
      },
    };

    expect(getProfileValidateErrors(state as StateSchema)).toEqual(
      validateErrors,
    );
  });

  test("Should return undefined if profile state is not present", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileValidateErrors(state as StateSchema)).toBeUndefined();
  });
});
