import React from "react";
import "./ButtonOne.css";

const ButtonOne = ({ text = "Button", className = "", ...props }) => {
	return (
		<button className={`button-one ${className}`.trim()} {...props}>
			<span className="button-one__label">{text}</span>
			<span className="button-one__hover-label">
				{text} <span aria-hidden="true">-&gt;</span>
			</span>
			<span className="button-one__background" aria-hidden="true" />
		</button>
	);
};

export default ButtonOne;