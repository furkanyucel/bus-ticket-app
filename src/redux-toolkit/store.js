import { configureStore } from "@reduxjs/toolkit";
import ticketReducer from "./slices/ticketSlice";

const store = configureStore({
    reducer: {
        tickets: ticketReducer
    }
})

export default store;