import { createSlice } from "@reduxjs/toolkit";

const pokemonSlice = createSlice({
	name: "pokemonName",
	initialState: {
		searchTerm: "",
	},
	reducers: {
		changeSearchTerm(state, action) {
			state.searchTerm = action.payload;
		},
	},
});

export const { changeSearchTerm } = pokemonSlice.actions;
export const pokemonReducer = pokemonSlice.reducer;
