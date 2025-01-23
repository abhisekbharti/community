import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./app/feature";


const store = configureStore({
    reducer:userSlice
})

export default store;