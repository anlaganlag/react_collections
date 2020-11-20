import { useSelector, useDispatch } from "react-redux";
import { initialState } from "../state"

// reducers (mutators as I understand them from Vuex)
export const usersFiltersReducer = (state = initialState.usersFilters, action) => {
  switch (action.type) {
    case "SET_NATIONALITY":
      return {
        ...state,
        nat: action.data,
      };
    case "SET_GENDER":
        return {
          ...state,
          gender: action.data,
        };
    case "SET_RESULTS":
      return {
        ...state,
        results: action.data,
      };
    default:
      return state;
  }
};

// actions
export const useUsersFiltersActions = () => {
  const dispatch = useDispatch();

  const setNationality = (event) =>
    dispatch({
      type: "SET_NATIONALITY",
      data: event.target.value
    });

  const setGender = (event) =>
    dispatch({
      type: "SET_GENDER",
      data: event.target.value
    });

  const setResults = (event) =>
    dispatch({
      type: "SET_RESULTS",
      data: event.target.value
    });

  return { setNationality, setGender, setResults };
};

// Getters
export const useUsersFiltersGetters = () => {
  const getNationality = useSelector((state) => state.usersFilters.nat);
  const getGender = useSelector((state) => state.usersFilters.gender);
  const getResults = useSelector((state) => state.usersFilters.results);
  return { getNationality, getGender, getResults }
}