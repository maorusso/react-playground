import { useState } from "react";
import "./RandomColorSquare.css";

export default function RandomColorSquare() {
	const [color, setcolor] = useState("black");

	function randomNum(max) {
		return Math.round(Math.random() * max);
	}

	function randomRGBColor() {
		const R = randomNum(255);
		const G = randomNum(255);
		const B = randomNum(255);
		const color = `rgb(${R},${G},${B})`;
		return color;
	}

	function changeColor() {
		setcolor(randomRGBColor());
	}

	return (
		<div onClick={changeColor} className="box" style={{ background: color }}>
			Click here to change my color <br /> 🌈
		</div>
	);
}
