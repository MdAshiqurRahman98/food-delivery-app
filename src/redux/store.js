import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "../features/items/itemSlice";
import { itemApi } from "../services/itemApi";

export const store = configureStore({
    reducer: {
        items: itemReducer,
        [itemApi.reducerPath]: itemApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(itemApi.middleware),
});