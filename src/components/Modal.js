import { useEffect } from "react";

function Modal({ onClose, children }) {
	useEffect(() => {
		document.body.classList.add("overflow-hidden");

		return () => {
			document.body.classList.remove("overflow-hidden");
		};
	});

	return (
		<div>
			<div className="fixed inset-0 bg-gray-200 opacity-50"></div>
			<div className="fixed inset-40 h-52 p-10 bg-white">
				<div className="flex flex-col justify-between p-8">{children}</div>
				<button onClick={onClose}>Close</button>
			</div>
		</div>
	);
}

export default Modal;
