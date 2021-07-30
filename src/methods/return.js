import React from "react";

export const ReturnModule = () => {
	const [dirty, setDirty] = React.useState(false);

	React.useEffect(() => {
		window.addEventListener("beforeunload", handleLeavePage);
		return () =>
			window.removeEventListener("beforeunload", handleLeavePage);
	});

	const handleLeavePage = (event) => {
		if (dirty) {
			return "You have unsaved changes.";
		}
		return undefined;
	};

	return (
		<div>
			<div>return</div>
			<button onClick={() => setDirty(true)}>set Dirty</button>
			dirty = {dirty ? "true" : "false"}
		</div>
	);
};