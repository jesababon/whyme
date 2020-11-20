import React from 'react'
import logo from './logo.svg';


function Header(){
   return(
      <div>
      <header className="App-header ds-u-fill--primary">
        Header
        <img src={logo} className="App-logo " alt="logo" />
      </header>
      </div>
   )
}

export default Header;