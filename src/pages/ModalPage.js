import React from "react";
import Modal from "../components/Modal";
import { useFetchPokemonInfoQuery } from "../store/store";

function ModalPage({ onClose, modalPokemonId }) {
	const { data, isError, isFetching } =
		useFetchPokemonInfoQuery(modalPokemonId);

	let showContent;
	if (isFetching) {
		showContent = <div>Loading</div>;
	} else if (isError) {
		showContent = <div>Can't show the contents</div>;
	} else {
		const name = data.names[8].name;
		const { flavor_text_entries, habitat } = data;
		const text = flavor_text_entries[8].flavor_text;
		const image = (
			<img
				className="w-full"
				alt="pokemon"
				src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${data.id}.gif`}
			/>
		);
		showContent = (
			<Modal onClose={onClose}>
				<div className="flex justify-around">
					<div className="w-1/4 my-auto">{image}</div>
					<div className="w-2/4">
						<div className="text-3xl mb-2">{name}</div>
						<div className="mb-3 text-lg">
							<strong>HABITAT:</strong>
							<br />
							{habitat.name}
						</div>
						<div className="text-lg">
							<strong>DESCRIPTION:</strong>
							<br />
							{text}
						</div>
					</div>
				</div>
			</Modal>
		);
	}
	return showContent;
}

export default ModalPage;
