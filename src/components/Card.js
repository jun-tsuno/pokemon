import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function PokemonCard({ pokemon, pokemonId }) {
	return (
		<>
			<Card sx={{ maxWidth: 345 }}>
				<CardMedia
					component="img"
					alt="green iguana"
					height="140"
					image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/spriteLs/pokemon/versions/generation-iii/emerald/${pokemonId}.png`}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{pokemon.name}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Lizards are a widespread group of squamate reptiles, with over 6,000
						species, ranging across all continents except Antarctica
					</Typography>
				</CardContent>
			</Card>
		</>
	);
}

export default PokemonCard;
