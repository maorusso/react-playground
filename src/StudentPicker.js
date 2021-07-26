import { useState } from "react";
const students = ["bela", "moshe", "eli"];
export default function StudentPicker() {
	const [student, setstudent] = useState(null);

	function pick() {
		setstudent(students.pop());
	}

	return (
		<div>
			<button onClick={pick}>Pick</button>
			<div>{student}</div>
		</div>
	);
}
