import "./App.css";
import Article from "./Article/Article.js";
import Menu from "./Menu/Menu.js";
import MenuItem from "./Menu/MenuItem/MenuItem.js";
import Counter from "./Counter/Counter.js";
import StudentPicker from "./StudentPicker.js";

function App() {
	function clickHandler() {
		console.log("click");
	}
	return (
		<div>
			{/* <button onClick={clickHandler}>click me</button> */}
			{/* <Counter /> */}
			<StudentPicker />
			{/* <Menu>
				<MenuItem label="homepage" link="/" />
				<MenuItem label="bio" />
				<MenuItem label="index" />
			</Menu>
			<Article
				content={
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
				}
				title={"article"}
			></Article> */}
		</div>
	);
}

export default App;
