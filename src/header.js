import React from 'react'
import logo from './logo.svg';
import {Link} from 'react-router-dom';



function Header(){
   return(
      <div>
      <header className="App-header ds-u-fill--primary">
        <Link to='/'>
        <img src={logo} className="App-logo " alt="logo" />
        </Link>
      </header>

      </div>
   )
}

export default Header;