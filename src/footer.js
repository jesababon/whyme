import React from "react";
import { Link } from "react-router-dom";

function Footer() {
	return (
		<footer className="ds-u-color--white ds-u-flex-direction--row ds-u-fill--primary ds-u-padding--1">
         <Link to="/Resume">Resume</Link>
			&nbsp;| &nbsp;
         <Link to="/LinkedIn" target="_blank">LinkedIn</Link>
         &nbsp;| &nbsp;
         <Link to="/GitHub" target="_blank">GitHub</Link>
		</footer>
	);
}

export default Footer;
