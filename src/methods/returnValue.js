import React from "react";

export const ReturnValueModule = () => {
	const [dirty, setDirty] = React.useState(false);

	React.useEffect(() => {
		window.addEventListener("beforeunload", handleLeavePage);
		return () =>
			window.removeEventListener("beforeunload", handleLeavePage);
	});

	const handleLeavePage = (event) => {
		if (dirty) {
			event.returnValue = "You have unsaved changes.";
		}
	};

	return (
		<div>
			<div>returnValue</div>
			<button onClick={() => setDirty(true)}>set Dirty</button>
			dirty = {dirty ? "true" : "false"}
		</div>
	);
};