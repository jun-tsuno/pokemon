import React, { useState } from "react";
import AvatarImage from "./components/AvatarImage";
import ModalPage from "./pages/ModalPage";
import { useFetchPokemonQuery } from "./store/store";
import PokeSearch from "./pages/PokeSearch";

function App() {
	const [showModal, setShowModal] = useState(false);
	const [modalPokemonId, setModalPokemonId] = useState(null);
	const { data, isError, isFetching } = useFetchPokemonQuery();

	const handleClick = (pokemonId) => {
		setShowModal(true);
		setModalPokemonId(pokemonId);
	};

	const handleClose = () => {
		setShowModal(false);
	};

	const modal = (
		<ModalPage onClose={handleClose} modalPokemonId={modalPokemonId} />
	);

	let showContent;
	if (isFetching) {
		showContent = <div>Loading</div>;
	} else if (isError) {
		showContent = <div>Can't show the contents</div>;
	} else {
		showContent = data.results.map((item, index) => {
			const pokemonId = index + 1;

			return (
				<AvatarImage
					onClick={() => handleClick(pokemonId)}
					key={item.name}
					pokemon={item}
					pokemonId={pokemonId}
				/>
			);
		});
	}

	return (
		<>
			<div className="sticky top-0 w-full font-tech  bg-red-500">
				<h1 className="text-5xl text-center text-white pt-5">Pokedex</h1>
				<div className="flex justify-end pb-5 pr-20">
					<PokeSearch />
				</div>
			</div>
			<div className="flex flex-wrap justify-center font-tech">
				{showContent}
				{showModal && modal}
			</div>
		</>
	);
}

export default App;
