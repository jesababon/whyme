import React from "react";
import logo from "./logo.svg";
import { Link } from "react-router-dom";

function Header() {
	return (
		<Link to="/whyme" aria-label="link" role="link">
			<header className="App-header ds-u-fill--primary" aria-label="header" role="banner">
				<img src={logo} className="App-logo" alt="icon" aria-label="icon"/>
			</header>
		</Link>
	);
}

export default Header;
