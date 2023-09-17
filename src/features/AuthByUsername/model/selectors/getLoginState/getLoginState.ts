import { StateSchema } from "app/providers/StoreProvider";

import { initialState } from "../../slices/loginSlice";

export const getLoginState = (state: StateSchema) => state?.loginForm || initialState;
