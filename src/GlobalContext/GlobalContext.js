import React, { createContext, useReducer } from "react";
import { reducer } from "./reducer";

const initialState = {
  basket: [],
  user: null,
};
export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalContext.Provider
      value={{ basket: state.basket, user: state.user, dispatch: dispatch }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
