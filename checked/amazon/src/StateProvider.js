import React, { createContext, useContext, useReducer } from "react";

// 準備存放數據層
const StateContext = createContext();

//用數據層的數據作爲context 包裹app
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// 提取數據層數據
export const useStateValue = () => useContext(StateContext);
