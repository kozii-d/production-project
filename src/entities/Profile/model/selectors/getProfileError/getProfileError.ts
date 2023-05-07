import { createSelector } from "@reduxjs/toolkit";
import { getProfileState } from "../getProfileState/getProfileState";

export const getProfileError = createSelector(getProfileState, (profile) => profile.data);
