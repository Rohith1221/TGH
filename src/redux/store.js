import { configureStore } from "@reduxjs/toolkit";
import quoteReducer from "./reducers/quote.reducer";

import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  quoteReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export default configureStore({
  // reducer: { quoteReducer },
  reducer: persistedReducer,
});
