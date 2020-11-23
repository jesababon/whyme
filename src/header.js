import React from "react";
import logo from "./logo.svg";
import { Link } from "react-router-dom";

function Header() {
	return (
			<header className="App-header ds-u-fill--primary" role="banner">
		<Link to="/" aria-label="icon">
				<img src={logo} className="App-logo" alt="icon" aria-label="icon" />
		</Link>
			</header>
	);
}

export default Header;
