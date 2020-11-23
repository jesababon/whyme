import React from "react";
import Button from "@cmsgov/design-system/dist/components/Button/Button";
import Resume from "./Resume";

class Third extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	sayNo() {
		alert("Please provide feedback");
	}

	render() {
		return (
			<React.Fragment>
				<div className="App-body">
					<h3>Jes would make a great fit!</h3>
						<Resume />
					<h3>Would you like to move forward with Jes as a candidate?</h3>
					<Button
						href="mailto:jesababon@gmail.com
               ?subject=Job Offer for Jesica Ababon - NAVA&body=Job Offer for Jesica Ababon:"
						target="_blank"
						type="button"
						className="ds-c-button ds-c-button--success"
					>
						Yes
					</Button>
					&nbsp;
					<Button
						onClick={this.sayNo}
						href="mailto:jesababon@gmail.com
               ?subject=Feedback for Jesica Ababon - NAVA&body=Constructive criticism for Jesica Ababon:"
						target="_blank"
						type="button"
						className="ds-c-button ds-c-button--danger"
					>
						No
					</Button>
				</div>
			</React.Fragment>
		);
	}
}

export default Third;
