import {
  configureStore, Reducer, ReducersMapObject, CombinedState,
} from "@reduxjs/toolkit";

import { $api } from "shared/api/api";

import { counterReducer } from "entities/Counter";
import { userReducer } from "entities/User";

import { scrollSaveReducer } from "features/ScrollSave";

import { StateSchema, ThunkExtraArg } from "./StateSchema";
import { createReducerManager } from "./reducerManager";

// ReducersMapObject это тип, для объекта редюсеров,
// который в данном случае дженериком принимает тип нашего стейта
// и формирует объект где ключом является название стейта, а значением - сам редюсер
export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
    scrollSave: scrollSaveReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const extraArg: ThunkExtraArg = {
    api: $api,
  };

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: extraArg,
      },
    }),
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
