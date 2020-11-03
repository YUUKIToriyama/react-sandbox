/* main.js */
import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

const LikeButton = (props) => {
	const [liked, setLiked] = React.useState(false);
	const className = liked ? "liked" : "like";
	const clicked = () => {
		const currentLiked = !liked;
		const change = currentLiked ? 1 : -1;
		props.onClick((likedCount) => likedCount + change);
		setLiked(currentLiked);
	}
	return (
		<button className={className} onClick={() => clicked()}>{props.title}</button>
	);
}

const LikeSummaryText = (props) => {
	return (
		<p>いいね数 {props.likedCount}</p>
	)
}

const LikeButtonComponent = () => {
	const [likedCount, setLikedCount] = React.useState(1);
	return (
		<div>
			<LikeButton title="いいね" onClick={setLikedCount}/>
			<LikeSummaryText likedCount={likedCount}/>
		</div>
	)
}

const domContainer = document.getElementById("like_button_container");
ReactDOM.render(<LikeButtonComponent/>, domContainer);

