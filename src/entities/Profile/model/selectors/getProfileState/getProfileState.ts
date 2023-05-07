import { StateSchema } from "app/providers/StoreProvider";
import { initialState } from "../../slice/profileSlice";

export const getProfileState = (state: StateSchema) => state?.profile || initialState;
