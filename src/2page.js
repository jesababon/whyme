import React from "react";
import { ReactComponent as RightArrow } from "./images/next.svg";
import Choice from "@cmsgov/design-system/dist/components/ChoiceList/Choice";
import { Redirect } from "react-router";

class Second extends React.Component {
	constructor(props) {
		super(props);
		this.firstBox = this.firstBox.bind(this);
		this.secondBox = this.secondBox.bind(this);
		this.state = {
			value: 0,
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	firstBox(event) {
		this.setState(function (state) {
         if(event.target.checked === true){
         state.value += 1;
         }
         console.log('first checked?:',event.target.checked)
		});
	}

	secondBox(event) {
		this.setState(function (state) {
			if(event.target.checked === true){
            state.value += 1;
            }
            console.log('second checked?:',event.target.checked)
		});
	}

	handleSubmit(event) {
		if (event.target.checked !== false && this.state.value >= 1) {
			this.setState({ redirect: true });
			event.preventDefault();
			console.log(this.state)
		} else {
			alert("Please choose at least one.");
		}
	}

	render() {
		if (this.state.redirect === true) {
			return <Redirect push to="Third" />;
		}

		return (
			<div>
				<p className="ds-title">
					What qualities are you looking for in a junior dev?
				</p>
				<h1>Choose your requirements.</h1>
				<h2>Minimum of one requirement.</h2>
				<br />
				<fieldset className="ds-c-fieldset ds-u-display--inline-block">
					<Choice
						className="checkbox_choice"
						type="checkbox"
						label="Strong passion for good design."
						name="value1"
						value="1"
						onChange={this.firstBox}
					/>
					<Choice
						//   defaultChecked
						className="checkbox_choice"
						type="checkbox"
						label="Willingness to learn."
						name="value2"
						value="1"
						onChange={this.secondBox}
					/>
					<Choice
						//   defaultChecked
						className="checkbox_choice"
						type="checkbox"
						label="Experience being a team player."
						name="value3"
						value="1"
						onChange={this.thirdBox}
					/>
					<Choice
						//   defaultChecked
						className="checkbox_choice"
						type="checkbox"
						label="Strong interest in civic tech."
						name="value4"
						value="1"
						onChange={this.fourthBox}
					/>
				</fieldset>
				<br />
				{/* <input type="text" className="ds-c-field ds-u-display--inline-block" /> */}
				&nbsp;
				<button
					onClick={this.handleSubmit}
					className="ds-c-button ds-c-button--primary ds-u-margin-top--2"
				>
					Submit
					<RightArrow className="ds-u-margin-left--1" />
				</button>
				<br />
			</div>
		);
	}
}

export default Second;
