import React from "react";
import { ReactComponent as RightArrow } from "./images/next.svg";
import ChoiceList from '@cmsgov/design-system/dist/components/ChoiceList/ChoiceList'
import { Redirect } from "react-router";

class Second extends React.Component {
	constructor(props) {
		super(props);
		this.checkedBox = this.checkedBox.bind(this);
		// this.secondBox = this.secondBox.bind(this);
		this.state = {
			value: 0
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	checkedBox(event) {
		this.setState(function (state) {
         if(event.target.checked === true){
         state.value += 1;
         }else{
            state.value -= 1;
         }
         console.log('checked?:',this.state)
		});
   }
   
   

	// secondBox(event) {
	// 	this.setState(function (state) {
	// 		if(event.target.checked === true){
   //          state.value += 1;
   //          }
   //          console.log('second checked?:',event.target.checked)
	// 	});
	// }

	handleSubmit(event) {
		if (this.state.value > 1) {
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
			<div className="ds-u-display--inline-block">
				<p className="ds-u-font-size--h1">
					What qualities are you looking for in a junior dev?
				</p>
				<p className="ds-u-font-size--h2">
               Choose your requirements.
				</p>
				<p className="ds-u-font-size--lead">
                Minimum of one (1) requirement.
				</p>
				<fieldset className="ds-c-fieldset ds-u-display--inline-block">
            <ChoiceList
               choices={[
               { label: 'Strong passion for good design.', value: 'A', defaultChecked: false },
               { label: 'Willingness to learn.', value: 'B' },
               { label: 'Experience being a team player.', value: 'C' },
               { label: 'Strong interest in civic tech.', value: 'D' },
               { label: 'Loves dogs.', value: 'E' }
               ]}
               className="checkbox_choices"
               label=""
               hint=""
               name="checkbox_choices"
               type="checkbox"
               onChange={this.checkedBox}
            />
				</fieldset>
				<br />
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
