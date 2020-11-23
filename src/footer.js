import React from "react";
import { Link } from "react-router-dom";



function Footer() {
	return (
		<footer className="ds-u-flex-direction--row ds-u-color--white ds-u-fill--primary ds-u-padding--1" role="contentinfo">
         <Link to="/Resume">CV</Link>
			&nbsp;| &nbsp;
         <a href="https://linkedin.com/in/jesababon/" target="_blank">LinkedIn</a>
         &nbsp;| &nbsp;
         <a href="https://github.com/jesababon" target="_blank">GitHub</a>
		</footer>
	);
}

export default Footer;
