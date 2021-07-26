export default function DaysOfWeek(props) {
	const days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];

	return <div> {days[props.day]}</div>;
}
