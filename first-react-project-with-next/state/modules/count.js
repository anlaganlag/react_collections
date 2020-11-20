import { useSelector, useDispatch } from "react-redux";

// reducers (mutators as I understand them from Vuex)
export const countReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state -1;
    case "RESET":
      return 0;
    default:
      return state;
  }
};

// actions
export const useCounterActions = () => {
  const dispatch = useDispatch();
  const increment = () =>
    dispatch({
      type: "INCREMENT",
    });
  const decrement = () =>
    dispatch({
      type: "DECREMENT",
    });
  const reset = () =>
    dispatch({
      type: "RESET",
    });
  return { increment, decrement, reset };
};

// Getters
export const useCounterGetters = () => {
  const count = useSelector((state) => state.count);
  return { count }
}