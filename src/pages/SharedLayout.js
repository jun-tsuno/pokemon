import React from "react";
import StyledNavbar from "../components/StyledNavbar";
import { Outlet } from "react-router-dom";
import PokeSearch from "./PokeSearch";

function SharedLayout() {
	return (
		<>
			<div className="sticky top-0 w-full font-tech  bg-red-500">
				<h1 className="text-5xl text-center text-white pt-5">Pokedex.mini</h1>
				<div className="flex sm:justify-end pb-5 sm:pr-20">
					<PokeSearch />
				</div>
			</div>
			<StyledNavbar />
			<Outlet />
		</>
	);
}

export default SharedLayout;
