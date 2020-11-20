import { countReducer } from "./count";
import { usersReducer } from "./users";
import { currentUserReducer } from "./current-user";
import { usersFiltersReducer } from "./users-search-filters";
import { pageStatusReducer } from "./page-status"
import { combineReducers } from "redux";

export default combineReducers({
  users: usersReducer,
  usersFilters: usersFiltersReducer,
  count: countReducer,
  currentUser: currentUserReducer,
  pageStatus: pageStatusReducer
});
