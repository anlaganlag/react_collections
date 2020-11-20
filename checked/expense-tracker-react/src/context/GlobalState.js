import React, { createContext, useReducer,useContext } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  transactions: [
    {text:"625 125 1875 25 3125 375 4375",amount:17},
    {text:"5 5625 625 6875 75 8125 875 9375",amount:815}
  ],
}
// 創建context
export const GlobalContext = createContext(initialState);
export const useCTX = ()=>useContext(GlobalContext)

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }

  return (<GlobalContext.Provider value={{
    transactions: state.transactions,
    deleteTransaction,
    addTransaction
  }}>
    {children}
  </GlobalContext.Provider>);
}