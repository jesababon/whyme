import React from "react";
import { ReactComponent as RightArrow } from "./images/next.svg";
import ChoiceList from "@cmsgov/design-system/dist/components/ChoiceList/ChoiceList";
import { Redirect } from "react-router";

class Second extends React.Component {
	constructor(props) {
		super(props);
		this.checkedBox = this.checkedBox.bind(this);
		this.state = {
			value: 0,
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	checkedBox(event) {
		this.setState(function (state) {
			if (event.target.checked === true) {
				state.value += .5;
			} else {
				state.value -= .5;
			}
			return this.state.value;
		});
	}



	handleSubmit(event) {
		if (this.state.value > 0) {
			this.setState({ redirect: true });
			event.preventDefault();
		} else {
			alert("Please choose at least one requirement.");
		}
	}

	render() {
		if (this.state.redirect === true) {
			return <Redirect push to="Third" />;
		}

		console.log("Count:", this.state.value);

		return (
			<React.Fragment>
				<div className="App-body">
					<h1 className="ds-u-font-size--h1">
						What qualities are you looking for in a junior dev?
					</h1>
					<h2 className="ds-u-font-size--h2">Please choose your requirements.</h2>
					<p className="ds-u-font-size--lead">
						Minimum of one (1) requirement.
					</p>
					<ChoiceList
						choices={[
							{
								label: "Strong passion for good design.",
								value: "A",
								defaultChecked: false,
							},
							{ label: "Willingness to learn.", value: "B" },
							{ label: "Experience being a team player.", value: "C" },
							{ label: "Strong interest in civic tech.", value: "D" },
							{ label: "Loves dogs.", value: "E" },
						]}
						className="checkbox_choices"
						label=""
						hint=""
						name="checkbox_choices"
						type="checkbox"
						onChange={this.checkedBox}
					/>

					<br />
					<button
						onClick={this.handleSubmit}
						className="ds-c-button ds-c-button--primary"
					>
						Submit
						<RightArrow className="ds-u-margin-left--1" />
					</button>
				</div>
			</React.Fragment>
		);
	}
}

export default Second;
