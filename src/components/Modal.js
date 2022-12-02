import { useEffect } from "react";
import { Button } from "@mui/material";

function Modal({ onClose, children }) {
	useEffect(() => {
		document.body.classList.add("overflow-hidden");

		return () => {
			document.body.classList.remove("overflow-hidden");
		};
	});

	return (
		<div>
			<div className="fixed inset-0  bg-gray-200 opacity-50"></div>
			<div className="fixed inset-x-32  inset-y-40 h-80 bg-white border-4 max-w-screen-sm min-w-min">
				<div>
					<div className="absolute top-1/2 -translate-y-1/2 ">{children}</div>
					<div className="absolute top-3 right-5">
						<Button onClick={onClose} variant="contained" size="small">
							Close
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Modal;
