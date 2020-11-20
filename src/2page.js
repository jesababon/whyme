import React from 'react'
import {ReactComponent as RightArrow} from './images/next.svg';


function Second(){
return(
   <div>
     <p>
        <input type="text" className="ds-c-field ds-u-display--inline-block" />
        &nbsp;
        <button className="ds-c-button ds-c-button--primary ds-u-margin-top--2">
          Right icon
          <RightArrow className="ds-u-margin-left--1"/>
        </button>
      </p>
      <p className="ds-title">
          Now we're rocking.
      </p>
        <ul className="ds-c-list ds-u-font-size--h3 " >
          <li><strong>Legislative</strong> – Makes laws (Congress)</li>
          <li><strong>Executive</strong> – Carries out laws (President, Vice President, Cabinet)</li>
          <li><strong>Judicial</strong> – Evaluates laws (Supreme Court and other courts)</li>
        </ul>
   </div>
)
}

export default Second;