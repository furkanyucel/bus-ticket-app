
import { configureStore } from "@reduxjs/toolkit";
import ticketReducer from "./slices/ticketSlice";
import { loadState, saveState } from "./localStorage";

const preloadedState = loadState();

const store = configureStore({
    reducer: {
        tickets: ticketReducer
    },
    preloadedState: {
        tickets: preloadedState
    }
});

store.subscribe(() => {
  saveState(store.getState().tickets);
});

export default store;
