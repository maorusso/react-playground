export default function Comment(props) {
	return (
		<div>
			<h6>{props.author}</h6>
			<p>{props.content}</p>
		</div>
	);
}
