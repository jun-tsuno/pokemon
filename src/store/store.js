import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { pokemonApi } from "./apis/pokemonApi";
import { pokemonReducer, changeSearchTerm } from "./slices/pokemonSlice";

const store = configureStore({
	reducer: {
		pokemon: pokemonReducer,
		[pokemonApi.reducerPath]: pokemonApi.reducer,
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(pokemonApi.middleware);
	},
});

setupListeners(store.dispatch);

export { store, changeSearchTerm };

export {
	useFetchPokemonQuery,
	useFetchPokemonInfoQuery,
} from "./apis/pokemonApi";
