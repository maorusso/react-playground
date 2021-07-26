import Comment from "./Comment/Comment.js";
export default function CommentsList(props) {
	return (
		<div>
			<Comment author={"maor"} content={"bla"} />
			<Comment author={"eli"} content={"bla"} />
		</div>
	);
}
