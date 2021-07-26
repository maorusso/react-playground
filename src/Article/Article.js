import CommentsList from "./CommentList/CommentList.js";

export default function Article(props) {
	return (
		<article>
			<h1>{props.title}</h1>
			<p>{props.content}</p>
			<CommentsList />
		</article>
	);
}
