import { createSelector } from "@reduxjs/toolkit";
import { getProfileState } from "../getProfileState/getProfileState";

export const getProfileReadonly = createSelector(getProfileState, (profile) => profile.readonly);
