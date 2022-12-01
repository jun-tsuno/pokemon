import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const pokemonApi = createApi({
	reducerPath: "pokemonApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://pokeapi.co/api/v2/",
	}),
	endpoints(builder) {
		return {
			fetchPokemon: builder.query({
				query: () => {
					return {
						url: "/pokemon?limit=100",
						method: "GET",
					};
				},
			}),
		};
	},
});

export const { useFetchPokemonQuery } = pokemonApi;
export { pokemonApi };
