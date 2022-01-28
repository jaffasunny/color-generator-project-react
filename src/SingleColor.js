import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, hex, index }) => {
	const [alert, setAlert] = useState(false);
	const bcg = rgb.join(",");
	const hexValue = `#${hex}`;

	const handleClick = (e) => {
		setAlert(true);
		navigator.clipboard.writeText(hexValue);
		setTimeout(() => {
			setAlert(false);
		}, 3000);
	};

	return (
		<article
			onClick={handleClick}
			className={`color ${index > 10 && "color-light"}`}
			style={{ backgroundColor: `rgb(${bcg})` }}>
			<p className="percent-value">{weight}%</p>
			<p className="percent-color">{hexValue}</p>
			{alert && <p className="alert">copied to the clipboard</p>}
		</article>
	);
};

export default SingleColor;
