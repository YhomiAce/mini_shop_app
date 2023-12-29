import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../services/authApi";
import { productApi } from "../services/productApi";
import authSlice from "./authSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    [authApi.reducerPath]: authApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([authApi.middleware, productApi.middleware]),
});
