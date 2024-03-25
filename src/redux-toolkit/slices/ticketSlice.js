import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    filteredTickets: [],
};

const ticketSlice = createSlice({
    name: 'tickets',
    initialState,
    reducers: {
        searchTickets(state, action) {
            state.filteredTickets = action.payload;
        },
    },
});


export const { searchTickets } = ticketSlice.actions;

export default ticketSlice.reducer;