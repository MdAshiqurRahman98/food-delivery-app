import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
    name: "items",

    initialState: {
        addedItems: [],
    },

    reducers: {
        addItem: (state, action) => {
            state.addedItems.unshift(action.payload);
        },
    },
});

export const { addItem } = itemSlice.actions;
export default itemSlice.reducer;