import React, { useState } from "react";
import AvatarImage from "./components/AvatarImage";
import ModalPage from "./pages/ModalPage";
import { useFetchPokemonQuery } from "./store/store";

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
			<h1 className="text-5xl font-tech p-5 text-center text-white bg-red-500 sticky top-0 w-full">
				Pokedex
			</h1>
			<div className="flex flex-wrap justify-center font-tech">
				{showContent}
				{showModal && modal}
			</div>
		</>
	);
}

export default App;
