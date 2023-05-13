import { createSelector } from "@reduxjs/toolkit";
import { getProfileState } from "../getProfileState/getProfileState";

export const getProfileValidateErrors = createSelector(getProfileState, (profile) => profile.validateErrors);
