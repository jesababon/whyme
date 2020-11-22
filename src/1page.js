import React from "react";
import { Link } from "react-router-dom";
import Button from "@cmsgov/design-system/dist/components/Button/Button";


class First extends React.Component {
	sayNo() {
		alert("Click 'Yes.' We know why you're here.");
	}

	render() {
		return (
			<div>
				<p className="ds-u-font-size--h1"> 
        Are you looking for a new front end developer?
        </p>
				<Button
					component={Link}
					to='/Second'
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
