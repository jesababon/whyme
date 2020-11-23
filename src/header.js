import React from 'react'
import logo from './logo.svg';
import {Link} from 'react-router-dom';



function Header(){
   return(
        <Link to='/' aria-label="icon" >
      <header className="App-header ds-u-fill--primary">
        <img src={logo} className="App-logo" alt="icon" aria-label="icon"/>
      </header>
        </Link>
   )
}

export default Header;