import React from "react";

function AvatarImage({ pokemonId, ...rest }) {
	return (
		<div>
			<img
				className="w-20 hover:scale-150 hover:bg-zinc-200 mx-6 my-6 bg-zinc-50 rounded-full cursor-pointer"
				alt="pokemon"
				src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/${pokemonId}.png`}
				{...rest}
			/>
		</div>
	);
}

export default AvatarImage;
