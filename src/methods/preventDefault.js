import React from "react";

export const PreventDefaultModule = () => {
	const [dirty, setDirty] = React.useState(false);

	React.useEffect(() => {
		window.addEventListener("beforeunload", handleLeavePage);
		return () =>
			window.removeEventListener("beforeunload", handleLeavePage);
	});

	const handleLeavePage = (event) => {
		if (dirty) {
			event.preventDefault();
		}
	};

	return (
		<div>
			<div>preventDefault</div>
			<button onClick={() => { setDirty(true) }}>set Dirty</button>
			dirty = {dirty ? "true" : "false"}
		</div>
	);
};
