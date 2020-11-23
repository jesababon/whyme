import React from "react";
import { Link } from "react-router-dom";
import Button from "@cmsgov/design-system/dist/components/Button/Button";

class First extends React.Component {
	sayNo() {
		alert("Click 'Yes.' We know why you're here.");
	}

	render() {
		return (
			<React.Fragment>
				<h1 className="App-body ds-u-font-size--h1 ds-u-font-weight--semibold">
					Are you looking for a new front end developer?
				</h1>
				<p className="App-body">
					<p className="sub-heading">Curious about your options?</p>
					<p>
						<Button
							component={Link}
							to="/Second"
							type="button"
							className="ds-c-button ds-c-button--success ds-c-button--big"
						>
							YES, I NEED AN APPRENTICE
						</Button>
					</p>
					&nbsp;
					<Button
						onClick={this.sayNo}
						type="button"
						className="ds-c-button ds-c-button--danger ds-c-button--big"
					>
						NO, NOT RIGHT NOW
					</Button>
				</p>
			</React.Fragment>
		);
	}
}

export default First;
