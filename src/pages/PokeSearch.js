import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../store/store";

function PokeSearch() {
	const dispatch = useDispatch();
	const searchTerm = useSelector((state) => {
		return state.pokemon.searchTerm;
	});

	const handleChangeTerm = (event) => {
		dispatch(changeSearchTerm(event.target.value));
	};

	return (
		<>
			<input
				className="w-1/4 leading-10 pl-3"
				placeholder="Search Pokemon..."
				value={searchTerm}
				onChange={handleChangeTerm}
			/>
		</>
	);
}

export default PokeSearch;
