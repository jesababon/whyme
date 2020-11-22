import React from 'react'
import logo from './logo.svg';
import {Link} from 'react-router-dom';



function Header(){
   return(
        <Link to='/'>
      <header className="App-header ds-u-fill--primary">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
        </Link>
   )
}

export default Header;