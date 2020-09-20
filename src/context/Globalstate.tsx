import React, { createContext, useReducer } from "react";
import {InitialStateType, TransactionType} from '../services/Transaction'
import AppReducer from './AppReducer'

const initialState = {
  transactions: [],
};


export const globalContext = createContext<InitialStateType|any>(initialState);


export const GlobalProvider = ({children}:any) => {

  const [state, dispatch] = useReducer(AppReducer, initialState);

  function addTransaction(transaction:TransactionType){
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    })
  }

  function deleteTransaction(id:number){
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    })
  }

  return (<globalContext.Provider value={{
    transactions: state.transactions,
    addTransaction,
    deleteTransaction
    }}>
      {children}
  </globalContext.Provider>);
};

export default globalContext;
