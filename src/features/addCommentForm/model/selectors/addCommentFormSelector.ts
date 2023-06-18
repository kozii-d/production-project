import { StateSchema } from "app/providers/StoreProvider";
import { createSelector } from "@reduxjs/toolkit";
import { initialState } from "../slices/addCommentFormSlice";

const getAddCommentFormState = (state: StateSchema) => state?.addCommentForm || initialState;

export const getAddCommentFormText = createSelector(getAddCommentFormState, (addCommentForm) => addCommentForm.text);
export const getAddCommentFormError = createSelector(getAddCommentFormState, (addCommentForm) => addCommentForm.error);
