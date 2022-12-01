import React, { useState } from "react";
import AvatarImage from "./components/AvatarImage";
import Modal from "./components/Modal";
import { useFetchPokemonQuery } from "./store/store";

function App() {
	const [showModal, setShowModal] = useState(false);
	const [modalName, setModalName] = useState("");
	const { data, isError, isFetching } = useFetchPokemonQuery();

	const handleClick = (pokemonId) => {
		setShowModal(true);
		setModalName(data.results[pokemonId - 1].name);
	};

	const handleClose = () => {
		setShowModal(false);
	};

	const modal = <Modal onClose={handleClose}>{modalName}</Modal>;

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
		<div className="flex flex-wrap justify-center">
			{showContent}
			{showModal && modal}
		</div>
	);
}

export default App;
