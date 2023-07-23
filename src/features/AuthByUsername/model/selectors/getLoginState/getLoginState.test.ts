import { StateSchema } from "app/providers/StoreProvider";

import { initialState } from "../../slice/loginSlice";
import { LoginSchema } from "../../types/loginSchema";

import { getLoginState } from "./getLoginState";

describe("getLoginState.test", () => {
  test("Should return loginForm state when it is present", () => {
    const loginState: LoginSchema = {
      username: "admin",
      password: "password123",
      isLoading: false,
      error: "Invalid credentials",
    };

    const state: DeepPartial<StateSchema> = {
      loginForm: loginState,
    };

    expect(getLoginState(state as StateSchema)).toEqual(loginState);
  });

  test("Should return initial state when loginForm state is not present", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginState(state as StateSchema)).toEqual(initialState);
  });
});
