import { createSlice } from "@reduxjs/toolkit";

const VacationsSlice = createSlice({
    name: "vacations",
    initialState: { value: [] },
    reducers: {
        setVacations: (state: any, action: any) => {
            state.value = action.payload;
        },
    }
});

export const { setVacations } = VacationsSlice.actions;

export default VacationsSlice.reducer;