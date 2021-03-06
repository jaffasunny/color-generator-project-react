import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
	const [color, setColor] = useState("");
	const [error, setError] = useState(false);
	const [list, setList] = useState(new Values("#F0FFFF").all(10));

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Hello World");
		try {
			setError(false);
			let colors = new Values(color).all(10);
			setList(colors);
		} catch (error) {
			setError(true);
			console.log(error);
		}
	};

	return (
		<>
			<section className="container">
				<h3>Code Generator</h3>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						value={color}
						onChange={(e) => {
							setColor(e.target.value);
						}}
						placeholder="#F0FFFF"
						className={`${error ? "error" : null}`}
					/>
					<button className="btn" type="submit">
						Submit
					</button>
				</form>
			</section>
			<section className="colors">
				{list.map((color, index) => {
					// console.log(color);
					return (
						<SingleColor key={index} {...color} hex={color.hex} index={index} />
					);
				})}
			</section>
		</>
	);

	// const [color, setColor] = useState("");
	// const [error, setError] = useState(false);

	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	try {
	// 		let colors = new Values(color).all(10);
	// 		console.log(colors);
	// 	} catch (error) {
	// 		setError(true);
	// 		console.log(error);
	// 	}
	// };

	// return (
	// 	<>
	// 		<section className="container">
	// 			<h3>Color Generator</h3>
	// 			<form onSubmit={handleSubmit}>
	// 				<input
	// 					type="text"
	// 					onChange={(e) => {
	// 						setColor(e.target.value);
	// 					}}
	// 					value={color}
	// 					placeholder="#F0FFFF"
	// 				/>
	// 				<button className="btn" type="submit">
	// 					Submit
	// 				</button>
	// 			</form>
	// 		</section>
	// 	</>
	// );
}

export default App;
