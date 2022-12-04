import React from "react";
import { SyncLoader } from "react-spinners";

function Spinner({ className }) {
	return (
		<div className={className}>
			<SyncLoader color="rgba(163, 163, 163, 1)" size={15} />
		</div>
	);
}

export default Spinner;
