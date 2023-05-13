import { Profile } from "entities/Profile";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import { ValidateProfileError } from "entities/Profile/model/types/profile";
import { updateProfileData } from "./updateProfileData";

const profileData: Profile = {
  first: "John",
  lastname: "Doe",
  age: 25,
  city: "Berlin",
  username: "johndoe",
  currency: Currency.EUR,
  country: Country.Germany,
};
describe("updateProfileData", () => {
  test("Success", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { form: profileData },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ data: profileData }));
    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toBe(profileData);
  });

  test("Error", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { form: profileData },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
  });

  test("Validate error", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { form: { ...profileData, lastname: "" } },
    });
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });
});
