import { configureStore } from "@reduxjs/toolkit";
import multiplicationSlice from "./multiplicationSlice";

const store = configureStore({
    reducer: {
        multiplication: multiplicationSlice.reducer
    }
})

export default store;