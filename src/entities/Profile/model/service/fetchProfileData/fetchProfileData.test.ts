import { Profile } from "entities/Profile";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import { fetchProfileData } from "./fetchProfileData";

const profileData: Profile = {
  first: "John",
  lastname: "Doe",
  age: 25,
  city: "Berlin",
  username: "johndoe",
  currency: Currency.EUR,
  country: Country.Germany,
};
describe("fetchProfileData.test", () => {
  test("Success", async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data: profileData }));
    const result = await thunk.callThunk("1");

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toBe(profileData);
  });

  test("Error", async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk("1");

    expect(result.meta.requestStatus).toBe("rejected");
  });
});
