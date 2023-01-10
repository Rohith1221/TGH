import { configureStore } from "@reduxjs/toolkit";
import quoteReducer from "./reducers/quote.reducer";
export default configureStore({
  reducer: { quoteReducer },
});
