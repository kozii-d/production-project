import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AddCommentFormSchema } from "../types/addCommentForm";

export const initialState: AddCommentFormSchema = {
  text: "",
  error: undefined,
};

export const addCommentFormSlice = createSlice({
  name: "addCommentForm",
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(loginByUsername.pending, (state) => {
  //     state.error = undefined;
  //     state.isLoading = true;
  //   });
  //   builder.addCase(loginByUsername.fulfilled, (state, action) => {
  //     state.isLoading = false;
  //     state.username = action.payload.username;
  //     state.password = "";
  //   });
  //   builder.addCase(loginByUsername.rejected, (state, action) => {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   });
  // },
});

export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;
