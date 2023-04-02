import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { getLoginPassword } from "./getLoginPassword";

describe("getLoginPassword.test", () => {
  test("Should return password", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: "qwerty",
      },
    };
    expect(getLoginPassword(state as StateSchema)).toEqual("qwerty");
  });
  test("Should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginPassword(state as StateSchema)).toEqual("");
  });
});
