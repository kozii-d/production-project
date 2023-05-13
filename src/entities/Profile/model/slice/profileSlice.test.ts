import { Profile, ProfileSchema } from "entities/Profile";
import { ValidateProfileError } from "entities/Profile/model/types/profile";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import { updateProfileData } from "../service/updateProfileData/updateProfileData";
import { profileActions, profileReducer } from "./profileSlice";
import { initialState } from "./initialState";

const profileData: Profile = {
  first: "John",
  lastname: "Doe",
  age: 25,
  city: "Berlin",
  username: "johndoe",
  currency: Currency.EUR,
  country: Country.Germany,
};
describe("profileSlice reducer", () => {
  test("should return the initial state", () => {
    expect(profileReducer(undefined, { type: "unknown" })).toEqual(
      initialState,
    );
  });

  test("should handle setReadonly", () => {
    const readonly = false;
    const action = profileActions.setReadonly(readonly);
    const expectedState = { ...initialState, readonly };
    expect(profileReducer(initialState, action)).toEqual(expectedState);
  });

  test("test cancel edit", () => {
    const state: DeepPartial<ProfileSchema> = { data: profileData, form: { username: "" } };
    const action = profileActions.cancelEdit();
    const expectedState: DeepPartial<ProfileSchema> = {
      readonly: true,
      validateErrors: undefined,
      data: profileData,
      form: profileData,
    };

    expect(profileReducer(
      state as ProfileSchema,
      action,
    )).toEqual(expectedState);
  });

  test("test update profile", () => {
    const state: DeepPartial<ProfileSchema> = { form: { username: "test_user_name" } };
    const action = profileActions.updateProfile({
      username: "test_new_user_name",
    });
    const expectedState: DeepPartial<ProfileSchema> = {
      form: { username: "test_new_user_name" },
    };
    expect(profileReducer(
      state as ProfileSchema,
      action,
    )).toEqual(expectedState);
  });

  test("test update profile service pending", () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    };
    const action = updateProfileData.pending;
    const expectedState: DeepPartial<ProfileSchema> = {
      isLoading: true,
      validateErrors: undefined,
    };
    expect(profileReducer(
      state as ProfileSchema,
      action,
    )).toEqual(expectedState);
  });

  test("test update profile service fullfiled", () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };
    const action = updateProfileData.fulfilled(profileData, "");
    const expectedState: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: undefined,
      readonly: true,
      form: profileData,
      data: profileData,
    };
    expect(profileReducer(
      state as ProfileSchema,
      action,
    )).toEqual(expectedState);
  });
});
