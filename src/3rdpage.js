import React from "react";
import Button from "@cmsgov/design-system/dist/components/Button/Button";

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
			<div>
				<h3>Jes would make a great fit!</h3>
            {/* ANIMATION */}



            <h3>Would you like to move forward with Jes as a candidate?</h3>
				<Button
               a href="mailto:jesababon@gmail.com
               ?subject=Job Offer for Jesica Ababon - NAVA&body=This is only a test!"
               target="_blank"
					type="button"
					className="ds-c-button ds-c-button--primary ds-c-button--big"
				>
					Yes
				</Button>
				&nbsp;
				<Button
               onClick={this.sayNo}
               a href="mailto:jesababon@gmail.com
               ?subject=Feedback for Jesica Ababon - NAVA&body=This is only a test!"
               target="_blank"
					type="button"
					className="ds-c-button ds-c-button--primary ds-c-button--big"
				>
					No
				</Button>
			</div>
		);
	}
}

export default Third;
