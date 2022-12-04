import React, { useState } from "react";
import AvatarImage from "./components/AvatarImage";
import ModalPage from "./pages/ModalPage";
import { useFetchPokemonQuery } from "./store/store";
import PokeSearch from "./pages/PokeSearch";
import { useSelector } from "react-redux";
import Spinner from "./components/Spinner";

function App() {
	const [showModal, setShowModal] = useState(false);
	const [modalPokemonId, setModalPokemonId] = useState(null);
	const { data, isError, isFetching } = useFetchPokemonQuery();
	const searchTerm = useSelector((state) => {
		return state.pokemon.searchTerm;
	});

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
		showContent = <Spinner className="mt-40" />;
	} else if (isError) {
		showContent = <div>Error Fetching Data...</div>;
	} else {
		const filteredData = data.results.filter((item) =>
			item.name.toLowerCase().startsWith(searchTerm.toLowerCase())
		);

		showContent = filteredData.map((item) => {
			const pokemonId = parseInt(item.url.split("/").slice(-2, -1));

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
				<h1 className="text-5xl text-center text-white pt-5">Pokedex.mini</h1>
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
