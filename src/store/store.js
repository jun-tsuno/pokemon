import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { pokemonApi } from "./apis/pokemonApi";

export const store = configureStore({
	reducer: {
		[pokemonApi.reducerPath]: pokemonApi.reducer,
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(pokemonApi.middleware);
	},
});

setupListeners(store.dispatch);

export { useFetchPokemonQuery } from "./apis/pokemonApi";
