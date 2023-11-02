import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import journalSlice from "./journal/journalSlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        journal: journalSlice,
    }
})

export default store;