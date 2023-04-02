import { LoginSchema } from "../types/loginSchema";
import { initialState, loginActions, loginReducer } from "./loginSlice";
import { loginByUsername } from "../services/loginByUsername/loginByUsername";

describe("loginSlice reducer", () => {
  test("should return the initial state", () => {
    expect(loginReducer(undefined, { type: "unknown" })).toEqual(initialState);
  });

  test("should handle setUsername", () => {
    const username = "testUser";
    const action = loginActions.setUsername(username);
    const expectedState: LoginSchema = { ...initialState, username };
    expect(loginReducer(initialState, action)).toEqual(expectedState);
  });

  test("should handle setPassword", () => {
    const password = "test password";
    const action = loginActions.setPassword(password);
    const expectedState: LoginSchema = { ...initialState, password };
    expect(loginReducer(initialState, action)).toEqual(expectedState);
  });

  test("should handle clearError", () => {
    const stateWithError = { ...initialState, error: "test error" };
    const action = loginActions.clearError();
    const expectedState: LoginSchema = { ...initialState, error: undefined };
    expect(loginReducer(stateWithError, action)).toEqual(expectedState);
  });

  test("should handle loginByUsername.pending", () => {
    const action = { type: loginByUsername.pending.type };
    const expectedState: LoginSchema = { ...initialState, isLoading: true };
    expect(loginReducer(initialState, action)).toEqual(expectedState);
  });

  test("should handle loginByUsername.fulfilled", () => {
    const payload = { username: "testUser" };
    const action = { type: loginByUsername.fulfilled.type, payload };
    const expectedState: LoginSchema = {
      ...initialState,
      username: payload.username,
      password: "",
      isLoading: false,
    };
    expect(loginReducer(initialState, action)).toEqual(expectedState);
  });

  test("should handle loginByUsername.rejected", () => {
    const error = "test error";
    const action = { type: loginByUsername.rejected.type, payload: error };
    const expectedState: LoginSchema = { ...initialState, error, isLoading: false };
    expect(loginReducer(initialState, action)).toEqual(expectedState);
  });
});
