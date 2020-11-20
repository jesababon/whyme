import React from 'react'
import {ReactComponent as RightArrow} from './images/next.svg';
import ChoiceList from '@cmsgov/design-system/dist/components/ChoiceList/ChoiceList'
import Choice from '@cmsgov/design-system/dist/components/ChoiceList/Choice'

function Second(){
return(
   <div>
     <container>
      <p className="ds-title">
          What qualities are you looking for in a junior dev?
      </p>
      <br/>
      <fieldset className="ds-c-fieldset ds-u-display--inline-block">
      <ChoiceList
         choices={[
         { label: 'Believes in clean code and follows OOP.', value: 'A', defaultChecked:true},
         { label: 'Strong passion for good design.', value: 'B' },
         { label: 'Eager to learn whatever is required.', value: 'B' },
         { label: 'Strong interest in civic tech.', value: 'B' },
         { label: 'Experience being a team player.', value: 'B' },
         { label: 'Strong interest in civic tech', value: 'B' },
         ]}
         className=" checkbox_choices"
         label="Choose your requirements."
         hint="Minimum of one requirement."
         type="checkbox"
      />
      <Choice
      //   defaultChecked
        className="checkbox_choices"
        type="checkbox"
        label="Loves dogs."
        value="b"
        checkedChildren={<div className="ds-c-choice__checkedChild"
        >something</div>}
      />
      </fieldset>
      <br/>
        {/* <input type="text" className="ds-c-field ds-u-display--inline-block" /> */}
        &nbsp;
        <button className="ds-c-button ds-c-button--primary ds-u-margin-top--2">
          Submit
          <RightArrow className="ds-u-margin-left--1"/>
        </button>
        <br/>
        {/* <ul className="ds-c-list ds-u-font-size--h5 " >
          <li><strong>Legislative</strong> – Makes laws (Congress)</li>
          <li><strong>Executive</strong> – Carries out laws (President, Vice President, Cabinet)</li>
          <li><strong>Judicial</strong> – Evaluates laws (Supreme Court and other courts)</li>
        </ul> */}
      </container>
   </div>
)
}

export default Second;