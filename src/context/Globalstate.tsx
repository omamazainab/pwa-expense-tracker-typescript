import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer'

const initialState = {
  transactions: [],
};


export const globalContext = createContext(initialState);

const [state, dispatch] = useReducer(AppReducer, initialState);

const GlobalProvider = () => {
  return <globalContext.Provider value={transactions: state.transactions}>{children}</globalContext.Provider>;
};

export default globalContext;
