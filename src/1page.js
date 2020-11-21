import React from "react";
import { Link } from "react-router-dom";
import Button from "@cmsgov/design-system/dist/components/Button/Button";

class First extends React.Component {
	sayNo() {
		alert("Hahaha. Very Funny. We know why you're here.");
	}

	render() {
		return (
			<div>
				<h3>What are you looking for?</h3>
				<Button
					component={Link}
					to="/Second"
					type="button"
					className="ds-c-button ds-c-button--primary ds-c-button--big"
				>
					Yes
				</Button>
				&nbsp;
				<Button
					onClick={this.sayNo}
					type="button"
					className="ds-c-button ds-c-button--danger ds-c-button--big"
				>
					No
				</Button>
			</div>
		);
	}
}

export default First;
