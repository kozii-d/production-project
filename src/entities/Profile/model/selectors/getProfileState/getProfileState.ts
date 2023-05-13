import { StateSchema } from "app/providers/StoreProvider";

import { initialState } from "../../slice/initialState";

export const getProfileState = (state: StateSchema) => state?.profile || initialState;
