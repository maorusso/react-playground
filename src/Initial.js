export default function Initial(props) {
	return (
		<div>{`${props.name.split(" ")[0][0]}.${props.name.split(" ")[1][0]}`}</div>
	);
}
