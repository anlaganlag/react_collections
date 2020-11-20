import React, { createContext, useContext, useReducer } from 'react'
// import { Action, initialState, reducer, State } from './reducer'



const initialState = {
  currentPage: 'nofap',
  title:"earthporn"
}

type State = typeof initialState
type Action = { type: 'SET_CURRENT_PAGE'; payload: string}
export const keyWord = 'cityporn'


const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'SET_CURRENT_PAGE':
      return { ...state, currentPage: action.payload }
  }
}


const stateCtx = createContext(initialState)
const dispatchCtx = createContext((() => {}) as React.Dispatch<Action>)

export const Provider: React.ComponentType = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <dispatchCtx.Provider value={dispatch}>
      <stateCtx.Provider value={state}>{children}</stateCtx.Provider>
    </dispatchCtx.Provider>
  )
}

export const useGlobalDispatch = () => useContext(dispatchCtx)

export const useGlobalState = <K extends keyof State>(propertyOne: K) =>
  useContext(stateCtx)[propertyOne]
