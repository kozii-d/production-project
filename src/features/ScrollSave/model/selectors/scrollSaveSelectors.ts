import { createSelector } from "@reduxjs/toolkit";

import { StateSchema } from "app/providers/StoreProvider";

import { initialState } from "../slices/scrollSaveSlice";

const getScrollSaveState = (state: StateSchema) => state?.scrollSave || initialState;

export const getScrollSaveScroll = createSelector(getScrollSaveState, (scrollSave) => scrollSave.scroll);
export const getScrollSaveScrollByPath = createSelector(
  getScrollSaveScroll,
  (_: StateSchema, path: string) => path,
  (scroll, path) => scroll[path] || 0,
);
