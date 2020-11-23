import React from 'react';
import './CMS.css';
import Header from './header';
import Footer from './footer';
import First from './1page';
import Second from './2page';
import Third from './3rdpage';
import Resume from './Resume'
import {Route} from 'react-router-dom';
import { Redirect } from "react-router";



class App extends React.Component{
  render(){
  return (
    <React.Fragment>
      <Header />
      <div role="main">
      <Redirect from="" to="/"/>
      <Route exact path='/' component={First}/>
      <Route exact path='/Second' component={Second}/>
      <Route exact path='/Third' component={Third}/>
      <Route exact path='/Resume' component={Resume}/>
      <Route exact path="/LinkedIn" render={() => (window.location = "https://linkedin.com/in/jesababon/")}/>
      <Route exact path="/GitHub" render={() => (window.location = "https://github.com/jesababon")}/>
      </div>
      <Footer/>
    </React.Fragment>
  );
  }
}

export default App;
