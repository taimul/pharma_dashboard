import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./features/api/aoiSlice";
import customersSlice from "./features/customers/customersSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    customers: customersSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
export default store;
