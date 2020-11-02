/* main.ts */
import * as React from "react";
import * as ReactDOM from "react-dom";

const LikeButton:React.FC = () => {
	const [liked, setLiked] = React.useState<boolean>(false);
	const className:string = liked ? "liked" : "like";
	return (<button className={className} onClick={() => setLiked(!liked)}>いいね</button>);
}
const domContainer:HTMLElement = document.getElementById("like_button_container");
ReactDOM.render(<LikeButton/>, domContainer);
