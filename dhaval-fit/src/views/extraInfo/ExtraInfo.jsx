import React, { useState } from "react";
import "./styles.css";

function ExtraInfo({ value, preUrl, postUrl, popoverOpen, size }) {
	const [hover, setHover] = useState(false);
	let linkStyle = {
		width: `${size==="small"? "40px" :"50px"}`,
		height: `${size==="small"? "40px" :"50px"}`,
		backgroundImage: `url(${hover || popoverOpen ? postUrl : preUrl})`,
		backgroundSize: "cover",
		transitionDuration: "1s",
		borderRadius: "50%",
		backgroundColor: "white",
	};
	return (
		<div className="extraInfo">
			<div
				onMouseEnter={() => setHover(!hover)}
				onMouseLeave={() => setHover(!hover)}
				className="extraIcon"
				style={linkStyle}
			></div>
			<p className="extraText">{value}</p>
		</div>
	);
}

export default ExtraInfo;
