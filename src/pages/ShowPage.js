import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useFetchPokemonQuery } from "../store/store";
import ModalPage from "./ModalPage";
import Spinner from "../components/Spinner";
import AvatarImage from "../components/AvatarImage";

function ShowPage({ limit, offset }) {
	const [showModal, setShowModal] = useState(false);
	const [modalPokemonId, setModalPokemonId] = useState(null);
	const { data, isError, isFetching } = useFetchPokemonQuery({
		limit: limit,
		offset: offset,
	});
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
			<div className="flex flex-wrap justify-center font-tech">
				{showContent}
				{showModal && modal}
			</div>
		</>
	);
}

export default ShowPage;
