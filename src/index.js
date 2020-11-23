import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

if (process.env.NODE_ENV !== "production") {
	import("react-axe").then((axe) => {
		axe.default(React, ReactDOM, 1000);
		ReactDOM.render(
			<React.StrictMode>
				<BrowserRouter>
					<App/>
				</BrowserRouter>
			</React.StrictMode>,
			document.getElementById("root")
		);
	});
} else {
	ReactDOM.render(
		<React.StrictMode>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</React.StrictMode>,
		document.getElementById("root")
	);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
