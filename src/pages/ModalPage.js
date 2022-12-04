import React from "react";
import Modal from "../components/Modal";
import { useFetchPokemonInfoQuery } from "../store/store";
import Spinner from "../components/Spinner";
import TypeWriterEffect from "react-typewriter-effect";

function ModalPage({ onClose, modalPokemonId }) {
	const { data, isError, isFetching } =
		useFetchPokemonInfoQuery(modalPokemonId);

	let showContent;
	if (isFetching) {
		showContent = <Spinner className="pl-64" />;
	} else if (isError) {
		showContent = "Error Fetching Data...";
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
			<div className="flex">
				<div className="w-36 my-auto mx-10">{image}</div>
				<div className="w-80 ml-18">
					<div className="text-3xl mb-2">{name}</div>
					<div className="mb-3 text-lg">
						<strong>HABITAT:</strong>
						<br />
						{habitat.name}
					</div>
					<div className="text-lg">
						<strong>DESCRIPTION:</strong>
						<br />
						<TypeWriterEffect text={text} startDelay={100} typeSpeed={50} />
					</div>
				</div>
			</div>
		);
	}
	return <Modal onClose={onClose}>{showContent}</Modal>;
}

export default ModalPage;
