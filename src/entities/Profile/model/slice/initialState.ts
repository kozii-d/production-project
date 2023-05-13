import { ProfileSchema } from "entities/Profile";

export const initialState: ProfileSchema = {
  readonly: true,
  isLoading: false,
  error: undefined,
  data: undefined,
};
