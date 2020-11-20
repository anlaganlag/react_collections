import { useDispatch } from "react-redux";
import initialState from '../state'

// Reducers
export const pageStatusReducer = (state = initialState.pageStatus, action) => {
  switch (action.type) {
    case "SET_PAGE_STATUS":
      return action.data;
    default:
      return {
        ...state
      };
  }
};

// Actions
export const usePageStatusActions = () => {
  const dispatch = useDispatch();

  const setPageStatus = ({loading, errors}) => {
    dispatch({
      type: "SET_PAGE_STATUS",
      data: {
        loading: loading, 
        errors: errors,
      }
    });
  }

  return { setPageStatus };
};