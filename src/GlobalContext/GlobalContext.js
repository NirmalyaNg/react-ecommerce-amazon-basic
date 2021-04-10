import React, { createContext, useReducer } from "react";
import { reducer } from "./reducer";

const initialState = {
  basket: [],
};
export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider
      value={{ basket: state.basket, dispatch: dispatch }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
