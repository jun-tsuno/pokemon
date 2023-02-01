import React from "react";
import { NavLink } from "react-router-dom";
import generations from "../data/generations";

const StyledNavbar = () => {
	return (
		<>
			<nav className="flex mx-auto my-5 w-[230px] justify-center border-4 border-red-400 rounded-full ">
				{generations.map((generation) => {
					return (
						<div className="px-5 text-xl hover:scale-125 hover:text-red-500 ">
							<NavLink
								to={generation.link}
								className={({ isActive }) =>
									isActive ? "link active" : "link"
								}
							>
								{generation.text}
							</NavLink>
						</div>
					);
				})}
			</nav>
		</>
	);
};

export default StyledNavbar;
