//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import { Home } from "./component/home.jsx";

//render your react application
let previouscolor = "green";
setInterval(() => {
	if (previouscolor == "green") {
		ReactDOM.render(
			<Home color="yellow" />,
			document.querySelector("#app")
		);
		previouscolor = "yellow";
	}
	if (previouscolor == "yellow") {
		ReactDOM.render(<Home color="red" />, document.querySelector("#app"));
		previouscolor = "red";
	}
	if (previouscolor == "red") {
		ReactDOM.render(<Home color="green" />, document.querySelector("#app"));
		previouscolor = "green";
	}
}, 2000);
