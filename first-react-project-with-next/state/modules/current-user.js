import { useSelector, useDispatch } from "react-redux";

// Reducers
export const currentUserReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return action.data;
    default:
      return state;
  }
};

// Actions
export const useCurrentUserActions = () => {
  const dispatch = useDispatch();

  const setCurrentUser = (user) => {
    // Normally I'd send a new Http Request to fetch more detailed
    // JSON of the user, but this API does not provide that, so I'm
    // just using the user I already have in the index
    dispatch({
      type: "SET_CURRENT_USER",
      data: user
    });
  }

  return { setCurrentUser };
};

// Getters
export const useCurrentUserGetters = () => {
  const userFullName = useSelector((state) => {
    if(state.currentUser){
      return `${state.currentUser.name.title} ${state.currentUser.name.first} ${state.currentUser.name.last}`
    }
    return null
  });
  return { userFullName }
}