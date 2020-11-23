import React from "react";
import logo from "./logo.svg";

function Header() {
	return (
		<a href="./First">
			<header className="App-header ds-u-fill--primary" aria-label="header" role="banner">
				<img src={logo} className="App-logo" alt="icon" aria-label="icon"/>
			</header>
		</a>
	);
}

export default Header;
