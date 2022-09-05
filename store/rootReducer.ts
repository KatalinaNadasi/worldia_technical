import { AnyAction, combineReducers } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

import { counterReducer } from "./features/counter/counterSlice";

const combinedReducer = combineReducers({
  counter: counterReducer,
});

export const rootReducer = (
  state: ReturnType<typeof combinedReducer> | undefined,
  action: AnyAction
) => {
  switch (action.type) {
    case HYDRATE: {
      const nextState = {
        ...state,
        ...action.payload,
      };
      return nextState;
    }
    default:
      return combinedReducer(state, action);
  }
};
