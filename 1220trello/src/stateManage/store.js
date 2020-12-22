import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export default () => {
  let store = createStore(
    persistReducer( { key: "root", storage, }, rootReducer ),
    applyMiddleware(thunk)
  );
  let persistor = persistStore(store);
  return { store, persistor };
};
