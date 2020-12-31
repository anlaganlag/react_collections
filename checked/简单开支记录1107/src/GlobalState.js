import React, { useReducer, createContext, useContext } from "react";
import { v4 as uuid } from "uuid";
const ExpenseContext = createContext();

export const useCTX = () => useContext(ExpenseContext);
const initialState = {
  expenses: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      //如果为空或者日期不同则直接添加
      return !state.expenses || state.expenses[0]?.date !== action.payload.date
        ? {  expenses: [action.payload, ...state.expenses] }
        //非空且日期相同则修改
        : {  expenses: [action.payload, ...state.expenses.slice(1)] }

        // return  {  expenses: [action.payload, ...state.expenses] }
         

    default:
      return {
        state,
      };
  }
};

export const ExpenseContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ExpenseContext.Provider value={[state, dispatch]}>
      {children}
    </ExpenseContext.Provider>
  );
};
