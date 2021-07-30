import React from "react";
import "./App.css";
import { PreventDefaultModule } from "./methods/preventDefault";
import { ReturnModule } from "./methods/return";
import { ReturnValueModule } from "./methods/returnValue";

export const App = () => {
	const [selectedModule, setSelectedModule] = React.useState(null);
	return (
		<div className="App">
			<button
				onClick={() => {
					setSelectedModule(1);
				}}
			>
				event.preventDefault
			</button>
			<button
				onClick={() => {
					setSelectedModule(2);
				}}
			>
				event.returnValue = "string"
			</button>
			<button
				onClick={() => {
					setSelectedModule(3);
				}}
			>
				return "string"
			</button>

			<div>
				{selectedModule === 1 ? (
					<PreventDefaultModule />
				) : selectedModule === 2 ? (
					<ReturnValueModule />
				) : (
					<ReturnModule />
				)}
			</div>
		</div>
	);
};

export default App;
