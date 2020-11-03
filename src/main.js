/* main.js */
import React from "react";
import ReactDOM from "react-dom";

const LikeButton = () => {
	const [liked, setLiked] = React.useState(false);
	const className = liked ? "liked" : "like";
	return (
		<button className={className} onClick={() => setLiked(!liked)}>いいね</button>
	);
}
const domContainer = document.getElementById("like_button_container");
ReactDOM.render(<LikeButton/>, domContainer);
